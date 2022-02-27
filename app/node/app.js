const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017?authSource=admin";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Name
const dbName = "test";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  const obj = {
    id: 1,
    price: 1280,
  };
  await collection.insertOne(obj);

  // use test → db.documents.find()
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
