var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hello World');
});
app.configure(function() {
    app.use(express.static(__dirname + '/static'));
})

app.listen(8000);