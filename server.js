import express from 'express';
import {MongoClient} from 'mongodb';
import {MONGO_URL} from './secret';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

let app = express();

app.use(express.static('public'));

/*(async()=>{
    let db = await MongoClient.connect(MONGO_URL);
    app.use('/graphql', GraphQLHTTP({
        schema: schema(db),
        graph.iql: true
    }));

    app.listen(3000, () => console.log('Listening on port 3000'));
})();*/


let db;
MongoClient.connect(MONGO_URL, (err, database) => {
    if (err) throw err;
    db = database;

    app.use('/graphql', GraphQLHTTP({
        schema: schema(db),
        graphiql: true
    }));

    app.listen(3000, () => console.log('Listening on port 3000'));
});

// app.get("/data/links", (req, res) => {
// db.collection("links").find({}).toArray((err, links) => {         if (err)
// throw err;         res.json(links);     }); });