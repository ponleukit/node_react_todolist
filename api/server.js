const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const indexRouter = require('./routes/index');

require('dotenv').config();


const app = new express();

// connect to mongo
let uri = 'mongodb+srv://reacttodolist:1234@reacttodolist.aaokt.mongodb.net/reacttodolist?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true,  useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database..");
});

//create port
const port = process.env.PORT|| 5000;

//use middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/', indexRouter);

app.listen(`${port}`, ()=>{
    console.log(`server's listening to port ${port}`)
})