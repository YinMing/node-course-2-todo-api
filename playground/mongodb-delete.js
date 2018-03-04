//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//can be webservices url , heroku url
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',
  (err, db)=>
  {
      if(err)
        return console.log('Unable to connect to MongoDB Server');

      // delete Manay
      // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result=>{
      //   console.log(result);
      // }));

      // delete One
      // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result=>{
      //   console.log(result);
      // }));

      // find one and delete
      // db.collection('Todos').findOneAndDelete({completed: false}).then((doc)=>{
      //   console.log(doc);
      // });

      // delete Manay
      db.collection('Users').deleteMany({name: 'Alice'}).then((result)=>{
        console.log(result);
      });

      // find one and delete
      db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a9be2b85843733d0c86feb2')}).then((doc)=>{
        console.log(JSON.stringify(doc, undefined, 2));
      });

      db.close();
});
