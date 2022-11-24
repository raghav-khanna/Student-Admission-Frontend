import {pool} from './database.js'

const Drop = (applicant, branches) => {
    if(applicant.status != -1){
        let branch_alloted
        if(!applicant.status){
            branch_alloted = branches.find((b) => {return b.id == applicant.prefs[0].dsp})
        }
        else{
            branch_alloted = branches.find((b) => {return b.status == applicant.status})
        }
        branch_alloted.seats++;
    }
    applicant.prefs = []
    applicant.status = 0
    console.log(`${applicant.id} has dropped from the process\n`)
}

const Float = (applicant, branches) => {
    let branch_alloted = branches.find((b) => {return b.status == applicant.status})
    branch_alloted.seats++;
    console.log(`${applicant.id} has floated away his seat\n`)
}

const Hold = (applicant, branches) => {
    let branch_alloted = branches.find((b) => {return b.status == applicant.status})
    let updated_prefs = []
    let flag = true
    applicant.prefs.map(preference => {
        if(flag){
            updated_prefs.push(preference)
        }
        if(preference.dsp == branch_alloted.id){
            flag = false
        }
    });
    applicant.prefs = updated_prefs
    applicant.on_hold = true
    console.log(`${applicant.id} is holding his seat\n`)
}


let frozen_applicants = []
const Freeze = async (applicant, branches,round_no) => {
    let branch_alloted
    if(!applicant.status){
        branch_alloted = branches.find((b) => {return b.id === applicant.prefs[0].dsp})
    }
    else{
        branch_alloted = branches.find((b) => {return b.status == applicant.status})
    }
    let frozen = applicant.prefs.find((p) => {return p.dsp == branch_alloted.id})

    frozen_applicants.push([applicant.id,branch_alloted.status, round_no])
    applicant.prefs = [frozen]
    applicant.status = 0
    console.log(`${applicant.id} has frozen his seat\n`)
}

const DecideStatus = (applicant, branches, round_no, total_rounds, choice) => {
    
    if(applicant.status == -1){
        //nothing
        if(round_no == total_rounds){console.log(`${applicant.id} is thrown out of college\n`)}
        else if(choice==0){Drop(applicant,branches);}
        else{console.log(`${applicant.id} continues to stay in further rounds\n`)}
    }
    else if(!applicant.status){
        //1st pref case
        if(choice==0){Drop(applicant,branches);}
        else if(choice==3){Freeze(applicant, branches, round_no);}
        else{Drop(applicant,branches)} //kicked out of the process 
    }
    else{
        //nth pref case
        if(choice==0){Drop(applicant,branches)}
        else if(choice==1 && !applicant.on_hold){Float(applicant,branches);}
        else if(choice==2 && round_no != total_rounds){Hold(applicant,branches);}
        else if(choice==3){Freeze(applicant, branches, round_no)}
        else{
            if(!applicant.on_hold){Drop(applicant,branches)}
            else{console.log(`${applicant.id} continues to stay in further rounds\n`)}
        }
    }
    return applicant
}

export const PostAllotment = async(applicant,branches, round_no,total_rounds, choice) => {
    let updated_applicant = await DecideStatus(applicant,branches, round_no, total_rounds, choice)
    let temp = []
    applicant.prefs.forEach((pref)=>{
        const pair = ('(\''+pref.dsp + '\',' + pref.waiting+')')
        temp.push(pair)
    })

    await pool.query(`UPDATE applicants SET prefs : ARRAY $(1):: pref[], status : $(2), on_hold : $(3) WHERE id = $(4);`,
        [temp.toString(),updated_applicant.status,updated_applicant.on_hold, updated_applicant.id])    

    //INSERT INTO applicants(prefs) VALUES (ARRAY [('CSE', 100), ('CCE', 100), ('ECE', 100)]:: pref[])
    //INSERT INTO applicants(prefs) VALUES (ARRAY [['CSE', 100], ('CCE', 100), ('ECE', 100)]:: pref[])

    //INSERT INTO applicants(prefs) VALUES (ARRAY $(1):: pref[]) 

    // await branches.map((branch)=> branch.wl_no = 1) Remember to do this
    
    /* if(round_no == total_rounds){
        frozen_applicants.forEach((a)=>{
            pool.query('INSERT INTO students(id, branch_status, last_round) VALUES ($1,$2,$3)',[a[0],a[1],a[2]])
        })
    } */
}