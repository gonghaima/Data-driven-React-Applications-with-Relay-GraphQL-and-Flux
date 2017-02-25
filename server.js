import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import {MongoClient} from 'mongodb';
import {MONGO_URL} from './secret';
import GraphQLHTTP from 'express-graphql';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';

let app = express();

app.use(express.static('public'));

(async() => {
    try {
        let db = await MongoClient.connect(MONGO_URL);
        let schema = Schema(db);

        app.use('/graphql', GraphQLHTTP({schema, graphiql: true}));

        app.listen(3000, () => console.log('Listening on port 3000'));

        //Generate schema.json
        let json = await graphql(schema, introspectionQuery);
        fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
            if (err) 
                throw err;
            console.log('JSON schema created');

        });
    } catch (e) {
        console.log(e);
    }

})();