import path from 'path'
import express from 'express'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import {Round} from './SeatAllotment.js'
import {retrieveData} from './data.js'
import {PostAllotment} from './PostAllotment.js'
import {pool} from './database.js'

const PORT = 3001;
let applicants = []
let branches = []
let total_rounds = 2

const app = express();


//problem here
app.use(express.static(path.resolve(__dirname, '../frontend/public')));
app.use(express.static(path.resolve(__dirname, '../frontend/src')));


const process = async()=>{
    await retrieveData(applicants, branches)
    await pool.query("TRUNCATE students;")
    /* for(let round_no = 1; round_no<total_rounds+1;++round_no){
        console.log(`ROUND ${round_no}\n\n`)
        Round(applicants,branches)
        PostAllotment(applicants, branches, round_no, total_rounds)
    } */
    //applicants.map((applicant)=> console.log(applicant.id, applicant.prefs))
}

app.get("/data", async(req, res) => {
    //console.clear()
    await process()
    //res.json({ message: "Hello from server!" });
    res.json(applicants[0])
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

