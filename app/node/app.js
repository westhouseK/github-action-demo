const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/test", (err, db) => {
  console.log("Connected successfully to server");

  // コレクションにドキュメントを挿入
  db.insertOne(
    {
      name: "Item",
      price: 1280,
    },
    (error, result) => {
      db.close();
    }
  );
  db.close();
});
