const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
} else {
  app.use(express.static(path.join(__dirname, "client", "build")));
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
    console.log("Database connection failed");
    console.error(err);
  }
}

isDatabaseConnected(client).catch(console.err);

const showRes = async (res, collection) => {
  try {
    const cursor = await client.db("covid19").collection(collection).find({});
    const data = await cursor.toArray();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};

app.get("/api/cases/:id", async (req, res) => {
  const idMap = {
    1: "082720",
    2: "082820",
    3: "082920",
    4: "083020",
    5: "083120",
  };

  await showRes(res, idMap[req.params.id]);
});

app.listen(port, () => console.log(`server running on port ${port}`));
