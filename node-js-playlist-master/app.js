var express=require('express');
var todo_controller=require('./controller/todo_controller');

var app= express();
app.set('view engine','ejs');
app.use(express.static('./public'));

todo_controller(app);

app.listen(3000);
console.log('u r listening to port 3000');
