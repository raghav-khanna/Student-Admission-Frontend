import path from 'path'
import express from 'express'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import {Round} from './SeatAllotment.js'
import {retrieveData} from './data.js'
import {PostAllotment} from './PostAllotment.js'
import {pool} from './database.js'

const PORT = process.env.PORT | 3001;
let applicants = []
let branches = []
let total_rounds = 2

const app = express();

if(process.env.NODE_ENV === "production"){
    //app.use(express.static(path.resolve(__dirname, './frontend/build')));
}

const process = async()=>{
    await pool.query("TRUNCATE students;")
    await retrieveData(applicants, branches)
    
    for(let round_no = 1; round_no<total_rounds+1;++round_no){
        console.log(`ROUND ${round_no}\n\n`)
        Round(applicants,branches)
        PostAllotment(applicants, branches, round_no, total_rounds)
    }
    //applicants.map((applicant)=> console.log(applicant.id, applicant.prefs))
}

app.get("/data", async(req, res) => {
    console.log(req.url)
    applicants = []
    branches = []
    await process()
    //res.json({ message: "Hello from server!" });
    res.json(applicants[0])
});

app.get("/for_store", (req,res) => {
    console.log(req.query.fname, req.query.mname);
})

app.get('*',(req,res)=>{
    res.send('<h1>Error!</h1><br/><p>Change URL</p>')
})

app.listen(PORT, async() => {
    console.clear()
    console.log(`Server listening on ${PORT}`);
});

