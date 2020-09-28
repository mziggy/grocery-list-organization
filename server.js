const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/grocery-list'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/grocery-list/index.html'));
});


//default Heroku port
app.listen(process.env.PORT || 8080);
