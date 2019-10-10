var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/echo", function (req, res) {
    console.log(req.body);
    res.json(req.body);
})

app.listen(8848, function () {
    console.log("listening on 8848")
});
