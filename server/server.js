var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

//create resource
app.post('/todos', (req, res)=>{
  //console.log(req.body); //store in bodyParser
  var todo = new Todo({
    text: req.body.text
  });
  //save the model to db
  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });

});

//select resource, GET
app.get('/todos', (req, res)=>{
  var todo = new Todo();
  todo.find().then((doc)=>
  {
      console.log(doc);
  }, (e)=>
  {
      console.log(e);
  });
});



app.listen(3000, ()=>
{
  console.log('Started on port 3000');
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// //save to db
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// }, (e)=>{
//   console.log('Unable to save todo');
// });


// var otherTodo = new Todo({
//   text: 'Something to do'
//   // completed: true,
//   // completedAt: 123
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//   console.log('Unable to save todo');
// });
