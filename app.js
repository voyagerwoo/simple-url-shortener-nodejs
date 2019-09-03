const express = require('express');
const app = express();
const shortener = require('./shortener');

const HOST = process.env.APP_HOST || "http://localhost:3000";

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.post('/register.json', function (req, res) {
    const url = req.body.url;
    if (!url) return res.status(400).send({msg: "Empty url"});
    const hash = shortener.register(url);
    return res.send({"url" : `${HOST}/${hash}`})
});

app.get('/:hash', function (req, res) {
    const hash = req.params.hash;
    try {
        const url = shortener.redirect(hash);
        return res.redirect(url);
    } catch (e) {
        if (e === 'NOT REGISTER URL')
            return res.status(400).send({'msg': "Not register url"})
        return res.status(500).send(e)
    }
});

app.get('/:hash/stats', function (req, res) {
    const hash = req.params.hash;
    return res.send(shortener.stats(hash))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});