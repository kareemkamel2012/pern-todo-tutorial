const { application } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4200;
const pool = require('./db')

//middleware
app.use(cors());
app.use(express.json());

//routes

//create

app.post('/todos', async(req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.log(err.message);
    }
});

//get all

//update

//delete

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});