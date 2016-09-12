
var express = require('express');
var app = express();
var path = require('path');
//set configuration
app.set('trust proxy', true);
app.set('case sensitive routing', true);
app.set('strict routing', true);
//set view-engine
app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'ejs');
//set middleware
app.use(express.static(path.join(__dirname, './public')));
app.get('/', function (req, res) {
    res.render("homepage");
});
app.get('/homepage', function (req, res) {
    res.render("homepage");
});
app.get('/html5', function (req, res) {
    res.render("html5");
});
app.get('/htmlq1', function (req, res) {
    res.render("htmlq1");
});
app.get('/starthtml', function (req, res) {
    res.render("starthtml");
});
app.get('/starthtmltest', function (req, res) {
    res.render("starthtmltest");
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listenport = server.address().port;
    console.log("Server is listening at port" + port);
});
