const express = require('express');
const schema = require('./schema');
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Project',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express()

app.use(cors()) 

app.get('/',(req, res)=>{
    res.send("This is Amazing");
});


app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql : true

}));

app.listen(8080, ()=>{
    console.log("Running on port 8080/graphql")
})