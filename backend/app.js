import path from "path";
import express from "express";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import { Round } from "./SeatAllotment.js";
import { retrieveData } from "./data.js";
import { PostAllotment } from "./PostAllotment.js";
import { pool } from "./database.js";

// const PORT = process.env.PORT | 3001;
const PORT = 3001;
let applicants = [];
let branches = [];
let total_rounds = 2;

const app = express();
app.use(express.json());
// if(process.env.NODE_ENV === "production"){
//     //app.use(express.static(path.resolve(__dirname, './frontend/build')));
// }

const brute_force = (id, mains_rank, prefs) => {
  let text;
  let values = [id, mains_rank];
  if (prefs.length >= 1) {
    text =
      "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000)]:: pref[], -1, false)";
    values = [...values, prefs[0].dsp];
  }
  if (prefs.length >= 2) {
    text =
      "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000)]:: pref[], -1, false)";
    values = [...values, prefs[1].dsp];
  }
  if (prefs.length >= 3) {
    text =
      "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000),($5,10000)]:: pref[], -1, false)";
    values = [...values, prefs[2].dsp];
  }
  if (prefs.length >= 4) {
    text =
      "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000),($5,10000),($6,10000)]:: pref[], -1, false)";
    values = [...values, prefs[3].dsp];
  }
  if (prefs.length >= 5) {
    text =
      "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000),($5,10000),($6,10000),($7,10000)]:: pref[], -1, false)";
    values = [...values, prefs[4].dsp];
  }
  if (prefs.length >= 6) {
    text =
      "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,10000),($4,10000),($5,10000),($6,10000),($7,10000),($8,10000)]:: pref[], -1, false)";
    values = [...values, prefs[5].dsp];
  }
  return { text, values };
};

const process = async () => {
  await pool.query("TRUNCATE students;");
  await retrieveData(applicants, branches);

  for (let round_no = 1; round_no < total_rounds + 1; ++round_no) {
    console.log(`ROUND ${round_no}\n\n`);
    Round(applicants, branches);
    PostAllotment(applicants, branches, round_no, total_rounds);
  }
  //applicants.map((applicant)=> console.log(applicant.id, applicant.prefs))
};

// app.get("/load", async (req, res) => {
//   console.log(req.url);
//   applicants = [];
//   branches = [];
//   await process();
//   //res.json({ message: "Hello from server!" });
//   res.json("Hello");
//   //res.json(applicants[0])
//   /* const applicant_info = await pool.query(
//     "SELECT id, status, prefs  FROM applicants WHERE id = ($1);",
//     []
//   );

//   const branches_table = await pool.query("SELECT * FROM branches;");

//   const branch_alloted = branches_table.rows.find((b) => {
//     return b.status === applicant_info.rows[0].status;
//   }); */
// });

app.post("/signUpData", async (req, res) => {
  console.log(req.body.data);
  const { email_id, phone_no, password } = req.body.data;
  await pool
    .query(
      "INSERT INTO signup(email_id, phone_no, password) VALUES ($1, $2, $3);",
      [email_id, phone_no, password]
    )
    .then(() => console.log("Credentials stored"))
    .catch((err) => console.log(err));

  let results;
  await pool
    .query("SELECT id FROM signup WHERE email_id=($1);", [email_id])
    .then((data) => {
      results = data;
      console.log("ID retrived");
    })
    .catch((err) => console.log(err));

  const extended_id = "23LNM" + results.rows[0].id;
  res.json(extended_id);
});

app.post("/loginData", async (req, res) => {
  const decider = {
    flag: false,
    id: null,
    data: null,
  };
  const { id, pass } = req.body.data;
  const { rows } = await pool
    .query("SELECT password FROM signup WHERE id=($1);", [
      id.slice(5, id.length),
    ])
    .then((data) => {
      console.log("Password retrived");
      return data;
    })
    .catch((err) => console.log(err));

  if (rows.length != 0) {
    const { password } = rows[0];
    decider.id = id.slice(5, id.length);

    if (pass === password) {
      decider.flag = true;
      const results = await pool
        .query("SELECT prefs, status FROM applicants WHERE id = ($1);", [
          id.slice(5, id.length),
        ])
        .then((data) => {
          console.log("Return application status");
          return data;
        })
        .catch((err) => console.log(err));
      decider.data = results.rows;
    }
  }
  res.json(decider);
});

app.post("/loginData", async(req, res) => {
    const decider = {
      flag: false,
      id: null,
      data: null
    }
    const {id, pass} = req.body.data

    if(id.slice(0,4)==='23LNM'){
      const {rows} = await pool.query("SELECT password FROM signup WHERE id=($1);",[id.slice(5,id.length)])
        .then((data)=>{console.log("Password retrived");return data})
        .catch((err)=>console.log(err))

      if(rows.length != 0){
        const {password} = rows[0]
        decider.id = id.slice(5,id.length);
        if(pass === password){
          decider.flag = true
          const results = await pool.query("SELECT id, prefs, status FROM applicants WHERE id = ($1);",[id.slice(5,id.length)])
            .then((data)=>{console.log("Return application status");return data})
            .catch((err)=>console.log(err)) 
            decider.data = results.rows
        }
      }
    }
    res.json(decider)
})


app.post("/store", async (req, res) => {
  try {
    const {
      id,
      first_name,
      middle_name,
      last_name,
      father_name,
      address1,
      address2,
      zip,
    } = req.body.data.a;
    const {
      board_10,
      percentage_10,
      yop_10,
      rollno_10,
      board_12,
      percentage_12,
      yop_12,
      rollno_12,
      application_no,
      mains_rank,
    } = req.body.data.d;
    const prefs = req.body.data.prefs.dsp;

    await pool
      .query(
        `INSERT INTO personaldetails(id, first_name, middle_name, last_name, father_name, address1, address2, zip)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
        [
          id,
          first_name,
          middle_name,
          last_name,
          father_name,
          address1,
          address2,
          zip,
        ]
      )
      .then(() => console.log("Personal details have been added"));

    await pool
      .query(
        `INSERT INTO academicdetails
        (id, board_10, percentage_10, yop_10, rollno_10, board_12, percentage_12, yop_12, rollno_12, application_no, mains_rank)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,
        [
          id,
          board_10,
          percentage_10,
          yop_10,
          rollno_10,
          board_12,
          percentage_12,
          yop_12,
          rollno_12,
          application_no,
          mains_rank,
        ]
      )
      .then(() => console.log("Academic details have been added"));

    const { text, values } = brute_force(id, mains_rank, prefs);
    await pool
      .query(text, values)
      .then(() => console.log("Preferences have been added"));
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req, res) => {
  res.send("<h1>Error!</h1><br/><p>Change URL</p>");
});

app.listen(PORT, async () => {
  console.clear();
  console.log(`Server listening on ${PORT}`);
});
