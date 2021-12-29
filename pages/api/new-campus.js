import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-campus

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lb8le.mongodb.net/global?retryWrites=true&w=majority`);
        const db = client.db();

        const campusCollection = db.collection('campus');

        const result = await campusCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Campus inserted!' });

    }
}
