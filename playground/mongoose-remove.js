const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} =  require('./../server/models/user');


//Todo.remove({}) //like find
//Todo.remove() //remove all of collection

// Todo.remove({}).then((result)=>
// {
//   console.log(result);
// });

//both return doc object
// Todo.findOneAndRemove({_id:'5aa1428cf64f6069adc69309'}).then((todo)=>
// {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5aa1428cf64f6069adc69309').then((todo)=>
{
  console.log(todo);
});
