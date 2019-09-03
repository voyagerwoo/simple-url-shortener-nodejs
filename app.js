const express = require('express');
const app = express();
const shortener = require('./shortener');


app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.post('/register.json', function (req, res) {
    res.send({"url" : ""})
});

app.get('/:hash', function (req, res) {
    const hash = req.params.hash
    res.send("redirect test")
});

app.get('/:hash/stats', function (req, res) {
    const hash = req.params.hash
    res.send("stats test")
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});