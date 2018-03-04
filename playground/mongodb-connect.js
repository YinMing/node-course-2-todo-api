//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID(); //create new instance of object id
// console.log(obj);
// var user = {name: 'andrew', age: 25};
// var {name} = user; //destructure user object
// console.log(name);

//can be webservices url , heroku url
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',
  (err, db)=>
  {
      if(err)
        return console.log('Unable to connect to MongoDB Server');


      console.log('Connected to MongoDB Server');

      // db.collection('Todos').insertOne({
      //   text: 'Something to do',
      //   completed: false
      // }, (err, result)=>{
      //   if(err)
      //     return console.log('Unable to insert todo', err);
      //
      //                                           //filter function
      //   console.log(JSON.stringify(result.ops, undefined, 2));
      //
      // });

      //Insert new doc into Users collection (name, age, location)
      // db.collection('Users').insertOne({
      //   name: 'Alice',
      //   age: 25,
      //   location: 'America'
      // }, (err, result)=>{
      //   if(err)
      //     return console.log('Unable to insert todo', err);
      //
      //                                           //filter function
      //   //console.log(JSON.stringify(result.ops, undefined, 2));
      //   console.log(result.ops[0]._id.getTimestamp());
      // });

      db.close();
});
