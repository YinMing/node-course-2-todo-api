const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} =  require('./../server/models/user');

var _id = "5a9eabf0dd5f34b41e66559c";
//
// if(!ObjectID.isValid(_id)) console.log('ID not valud');

// Todo.find({_id}).then((todos)=>
// {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({_id}).then((todo)=>
// {
//   console.log('Todo', todo);
// });
//
// Todo.findById(_id).then((todo)=>
// {
//   if(!todo) return console.log('Id not found');
//   console.log('Todo by Id', todo);
// }).catch((e)=>console.log(e));

// User.findById


User.findById(_id).then((user)=>
{
  if(!user) return console.log('User not found');
  console.log('User by Id', JSON.stringify(user,undefined,2));
}).catch((e)=>console.log(e));
