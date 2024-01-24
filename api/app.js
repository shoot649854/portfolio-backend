const express = require("express");
const app = express();
const mongodb = require('mongodb')
const dotenv = require("dotenv");
const MongoClient = mongodb.MongoClient
const assert = require('assert')

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGO_URL;

if (!MONGODB_URL) {
    console.error('MONGO_URL is not defined in the environment variables.');
    process.exit(1);
  }
  
const client = new MongoClient(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect().then(() => {
    const collection = client.db("test").collection("devices");
    console.log("Connected successfully to server");
    
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    }).finally(() => {
        client.close();
    }
);

const insertDocuments = (db, callback) => {
    const documents = [
        { a: 1 },
        { a: 2 },
        { a: 3 }
    ]
    db.collection('documents').insertMany(documents, (err, result) => {
        assert.equal(err, null)
        assert.equal(3, result.result.n)
        assert.equal(3, result.ops.length)

        console.log("Inserted 3 documents into the collection")
        callback(result)
    })
}

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});