//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//can be webservices url , heroku url
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',
  (err, db)=>
  {
      if(err)
        return console.log('Unable to connect to MongoDB Server');

      // db.collection('Todos').findOneAndUpdate({
      //   _id: new ObjectID('5a9bfa4226b00ce1a8fcd1a8')
      // },{
      //   $set: {
      //     completed: true
      //   }
      // }, {
      //   returnOriginal: false
      // }).then((result)=>{
      //   console.log(result);
      // });

      //name change, inc age by 1

      db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a9ab73c7c57984174f26c7e')
      },{
        $set: {
          name: 'Daniel'
        },
        $inc:{
          age: 1
        }
      }, {
        returnOriginal: false
      }).then((result)=>{
        console.log(result);
      });

      db.close();
});
