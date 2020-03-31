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
  port: 3306
});

db.connect(err => {
  if (err) {
    console.log(err);
  }
  console.log("database connected");
});

app.get("/cases", (req, res) => {
  const query1 = "SELECT * FROM cases1";
  db.query(query1, (err, results) => {
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
