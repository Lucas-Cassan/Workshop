const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const port = 80;

const app = express();
app.use(cors());

const uri = process.env.MONGODB;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    app.locals.client = client;
});

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

