const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/reshimon', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.', err);
    return;
  }
  console.log('Connected to MongoDB server.');

  // db.collection('lists').find({
  //   _id: new ObjectID('58b32fbc7d2b8b3ec68e4955')
  // }).toArray().then((docs) => {
  //   console.log('lists:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch lists', err);
  // })


  db.collection('lists').find().count().then((count) => {
    console.log('count:' + count); 
  }, (err) => {
    console.log('Unable to fetch lists', err);
  })
  // db.close();
});
