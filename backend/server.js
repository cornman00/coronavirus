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

// app.get("/cases1", (req, res) => {
//   const q = "SELECT * FROM `042220`";
//   db.query(q, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json(results);
//     }
//   });
// });

// app.get("/cases2", (req, res) => {
//   const q = "SELECT * FROM `042320`";
//   db.query(q, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json(results);
//     }
//   });
// });

// app.get("/cases3", (req, res) => {
//   const q = "SELECT * FROM `042420`";
//   db.query(q, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json(results);
//     }
//   });
// });

// app.get("/cases4", (req, res) => {
//   const q = "SELECT * FROM `042520`";
//   db.query(q, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json(results);
//     }
//   });
// });

// app.get("/cases5", (req, res) => {
//   const q = "SELECT * FROM `042620`";
//   db.query(q, (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json(results);
//     }
//   });
// });

app.get("/cases/:id", (req, res) => {
  let q = "";
  if (req.params.id === "1") {
    q = "SELECT * FROM `042220`";
    db.query(q, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  } else if (req.params.id === "2") {
    q = "SELECT * FROM `042320`";
    db.query(q, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  } else if (req.params.id === "3") {
    q = "SELECT * FROM `042420`";
    db.query(q, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  } else if (req.params.id === "4") {
    q = "SELECT * FROM `042520`";
    db.query(q, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  } else if (req.params.id === "5") {
    q = "SELECT * FROM `042620`";
    db.query(q, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  } else {
    res.send("Resource Not Found");
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
