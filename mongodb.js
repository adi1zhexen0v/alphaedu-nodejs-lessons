import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = 3000;
const dbUrl = "mongodb://localhost:27017";
const client = new MongoClient(dbUrl);

app.use(express.json());

let db;

async function connectDatabase() {
  try {
    await client.connect();
    db = client.db("lesson");
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("An errer occured while connecting to the database:", error);
  }
}

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/employees", async (req, res) => {
  try {
    const collection = db.collection("employees");
    const employees = await collection.find({}).toArray();
    res.json(employees);
  } catch (e) {
    console.log(e);
  }
});

app.get("/employees/:id", async (req, res) => {
  try {
    const collection = db.collection("employees");
    const employee = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(employee);
  } catch (e) {
    console.log(e);
  }
});

app.post("/employees", async (req, res) => {
  try {
    const collection = db.collection("employees");
    const result = await collection.insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.toString());
  }
});

async function start() {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
start();
