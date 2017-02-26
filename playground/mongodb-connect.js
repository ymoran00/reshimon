const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/reshimon', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.');
    return;
  }
  console.log('Connected to MongoDB server.', err);

  db.collection('lists').insertOne({
    name: 'To watch',
    user: 0,
    descripiton: 'Stuff to watch'
  }, (err, result) => {
      if (err) {
        console.log('Error adding list.', err);
        return;
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('items').insertOne({
    list: 0,
    movie: 1234,
    context: 'Great shadowing'
  }, (err, result) => {
    if (err) {
      console.log('Error adding item.', err);
      return;
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('users').insertOne({
    handle: 'Yoav',
    email: 'yoav@gmail.com',
    level: 0
  }, (err, result) => {
    if (err) {
      console.log('Error adding user.', err);
      return;
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
