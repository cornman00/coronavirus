const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "corona",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("database connected");
});

app.get("/cases1", (req, res) => {
  const q = "SELECT * FROM `040920`";
  db.query(q, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

app.get("/cases2", (req, res) => {
  const q = "SELECT * FROM `041020`";
  db.query(q, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

app.get("/cases3", (req, res) => {
  const q = "SELECT * FROM `041120`";
  db.query(q, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

app.get("/cases4", (req, res) => {
  const q = "SELECT * FROM `041220`";
  db.query(q, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

app.get("/cases5", (req, res) => {
  const q = "SELECT * FROM `041320`";
  db.query(q, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

// db.end(err => {
//   if (err) {
//     console.log("db termination failed");
//   }
// });
const port = 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
