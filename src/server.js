const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./db');
const schema = require('./graphql/schema');

const app = express();
connectDB();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000);
 