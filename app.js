const express = require("express"),
    { graphqlHTTP } = require("express-graphql"),
    mongoose = require("mongoose");

const app = express();

const schema = require("./schema/schema");

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
    console.log("Running");
    console.log("http://localhost:4000/graphql");
});
