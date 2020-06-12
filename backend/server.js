const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const uri = `mongodb+srv://will:${process.env.USER_PASSWORD}@cluster1-glamp.mongodb.net/covid19?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function isDatabaseConnected(client) {
  try {
    await client.connect();
    console.log("Database is connected");
  } catch (err) {
    console.error(err);
  }
}

isDatabaseConnected(client).catch(console.err);

app.get("/api/cases/:id", async (req, res) => {
  let cursor;
  if (req.params.id === "1") {
    try {
      cursor = await client.db("covid19").collection("060620").find({});
      const data = await cursor.toArray();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  } else if (req.params.id === "2") {
    try {
      cursor = await client.db("covid19").collection("060720").find({});
      const data = await cursor.toArray();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  } else if (req.params.id === "3") {
    try {
      cursor = await client.db("covid19").collection("060820").find({});
      const data = await cursor.toArray();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  } else if (req.params.id === "4") {
    try {
      cursor = await client.db("covid19").collection("060920").find({});
      const data = await cursor.toArray();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  } else if (req.params.id === "5") {
    try {
      cursor = await client.db("covid19").collection("061020").find({});
      const data = await cursor.toArray();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err });
    }
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
