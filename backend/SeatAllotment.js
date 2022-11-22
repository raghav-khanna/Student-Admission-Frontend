const try_alloting = (applicant, branches, current_status, flag) => {
    let branch = branches.find((b)=>{return b.id === applicant.prefs[flag].dsp})
    if(branch.seats){
        branch.seats--
        if(!flag){
            for(let i=0; i<applicant.prefs.length;++i){
                applicant.prefs[i].waiting = 0
            }
            return 0
        }
        else{
            let temp = applicant.prefs.find((p) => {return p.dsp == branch.id})
            temp.waiting = 0
            return branch.status
        }
    }
    else{
        let temp = applicant.prefs.find((p) => {return p.dsp == branch.id})
        temp.waiting = branch.wl_no
        branch.wl_no++
        return current_status
    }
}

const Allot_Seat = (applicant, branches) => {
    if(applicant.status){
        let current_status = applicant.status
        for(let i=0;i<applicant.prefs.length;++i){
            if(applicant.status == current_status){
                applicant.status = try_alloting(applicant, branches, current_status, i);
                if(applicant.status != current_status){break;}
            }
        }
    }
}

export const Round = (applicants, branches) => {
    //Need to sort applicants by percentile before calling this function
    applicants.map((applicant)=>Allot_Seat(applicant,branches))
    applicants.map((applicant)=> {
        let alloted_branch_id
        if(!applicant.status){
            if(!applicant.prefs.length){
                alloted_branch_id = 'dropped-out-of-college'
            }
            else{
                alloted_branch_id = applicant.prefs[0].dsp
            }
        }
        else{
            let alloted_branch = branches.find((b) => {return b.status === applicant.status})
            alloted_branch_id = alloted_branch!=null?alloted_branch.id:'nothing'
        }
        console.log(`${applicant.id} has been alloted ${alloted_branch_id}\n`)
    })
}
