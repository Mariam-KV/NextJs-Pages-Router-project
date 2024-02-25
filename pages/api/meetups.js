// /api/new-meetup
import { MongoClient } from "mongodb";
//POSTEV /api/new-meetup

export default async function handler(req, res) {
  // Find out which kind of request was sent.
  const method = req.method;
  if (method === "GET") {
    // contains the body of the incoming request, the data of the incoming request.
    const data = req.body;
    //code that defined inside api file will never run on the client
    const client = await MongoClient.connect(
      `mongodb+srv://marikanik1999:Hr1VRVqN6jXovg57@meetup.t9mwjet.mongodb.net/?retryWrites=true&w=majority&appName=Meetup`
    );
    //get database (if it doesn't exict ,it will be created on the fly )
    const db = client.db();
    //MongoDB is a NoSQL database that works with collections full of documents. Collections would be kind of your tables in a SQL database and documents would be your entries in those tables.
    //creation of collection (also can be created on the fly)
    const meetupsCollection = db.collection("meetups");
    //inserting one new document into this collection.
    const result = await meetupsCollection.insertOne(data);
    client.close();
    //we need to send a response
    res.status(201).json({ message: "Meetup inserted!" });
  }
}
