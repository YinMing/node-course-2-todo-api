//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const yargs = require('yargs');
const argv = yargs.options(
  {
    n: {
        demand: true,
        alias: 'name',
        describe: 'Name of user',
        string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

//can be webservices url , heroku url
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',
  (err, db)=>
  {
      if(err)
        return console.log('Unable to connect to MongoDB Server');

      // db.collection('Todos').find({
      //   _id: new ObjectID('5a9ab5889828b106bc35c7f0')
      // }).toArray().then(
      //   (docs)=>
      //   {
      //     console.log('Todos');
      //     console.log(JSON.stringify(docs, undefined, 2));
      //   },
      //   (err) =>
      //   {
      //     console.log('Unable to fetch todos', err);
      //   }
      // ); //find a mongodb cursor

      // db.collection('Todos').find().count().then((count)=>{
      //   console.log( `Todos count: ${count}`);
      // }, (err)=>
      // {
      //   console.log('Unable to fetch todos', err);
      // });


      db.collection('Users').find({
        name: argv.name
      }).toArray().then(
        (docs)=>
        {
          console.log('Users Collection');
          console.log(JSON.stringify(docs, undefined, 2));
        },
        (err) =>
        {
          console.log('Unable to fetch Users', err);
        }
      ); //find a mongodb cursor



      db.close();
});
