var express= require('express');
var app= express();
var routes= require('./routes');
var path= require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes);

app.listen(3000, function(){
	console.log('Server is running at 3000 port!');
})
