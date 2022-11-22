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


let freezed_applicants = []
const Freeze = async (applicant, branches,round_no) => {
    let branch_alloted
    if(!applicant.status){
        branch_alloted = branches.find((b) => {return b.id === applicant.prefs[0].dsp})
    }
    else{
        branch_alloted = branches.find((b) => {return b.status == applicant.status})
    }
    let frozen = applicant.prefs.find((p) => {return p.dsp == branch_alloted.id})

    freezed_applicants.push([applicant.id,branch_alloted.status, round_no])
    applicant.prefs = [frozen]
    applicant.status = 0
    console.log(`${applicant.id} has frozen his seat\n`)
}

const DecideStatus = (applicant, branches, round_no, total_rounds) => {
    let choice
    if(round_no == 1){
        if(applicant.id == '1'){
            choice = 3
        }
        else if(applicant.id == '2'){
            choice = 0
        }
        else if(applicant.id == '3'){
            choice = 3
        }
        else if(applicant.id == '4'){
            choice = 2
        }
        else if(applicant.id == '5'){
            choice = 3
        }
        else if(applicant.id == '6'){
            choice = 0
        }
        else if(applicant.id == '7'){
            choice = 1
        }
        else if(applicant.id == '8'){
            choice = 0
        }
        else if(applicant.id == '9'){
            choice = 10
        }
        else if(applicant.id == '10'){
            choice = 10
        }
    }
    else{
        if(applicant.id == '1'){
            choice = 100
        }
        else if(applicant.id == '2'){
            choice = 100
        }
        else if(applicant.id == '3'){
            choice = 100
        }
        else if(applicant.id == '4'){
            choice = 3 //hold
        }
        else if(applicant.id == '5'){
            choice = 100
        }
        else if(applicant.id == '6'){
            choice = 100
        }
        else if(applicant.id == '7'){
            choice = 0 //float
        }
        else if(applicant.id == '8'){
            choice = 100
        }
        else if(applicant.id == '9'){
            choice = 3 //float
        }
        else if(applicant.id == '10'){
            choice = 10 //thrown 
        }
    }

    if(applicant.status == -1){
        //nothing
        //let choice = prompt("Press 0 for Drop\nElse will continue");
        if(round_no == total_rounds){console.log(`${applicant.id} is thrown out of college\n`)}
        else if(choice==0){Drop(applicant,branches);}
        else{console.log(`${applicant.id} continues to stay in further rounds\n`)}
    }
    else if(!applicant.status || round_no == total_rounds){
        //1st pref case or last round case
        //let choice = prompt("Press 0 for Drop\nPress 3 for Freeze\n");
        if(choice==0){Drop(applicant,branches);}
        else if(choice==3){Freeze(applicant, branches, round_no);}
        else{console.log(`WRONG INPUT`)}
    }
    else{
        //nth pref case
        //let choice = prompt("Press 0 for Drop\nPress 1 for Float\nPress 2 for Hold\nPress 3 for Freeze");
        if(choice==0){Drop(applicant,branches)}
        else if(choice==1 && !applicant.on_hold){Float(applicant,branches);}
        else if(choice==2){Hold(applicant,branches);}
        else if(choice==3){Freeze(applicant, branches, round_no)}
    }
}

export const PostAllotment = async(applicants,branches, round_no,total_rounds) => {
    await applicants.map((applicant)=>DecideStatus(applicant,branches, round_no,total_rounds))
    await branches.map((branch)=> branch.wl_no = 1)
    
    if(round_no == total_rounds){
        freezed_applicants.forEach((a)=>{
            pool.query('INSERT INTO students(id, branch_status, last_round) VALUES ($1,$2,$3)',[a[0],a[1],a[2]])
        })
    }
}