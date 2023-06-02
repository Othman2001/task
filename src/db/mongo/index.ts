import mongoose from 'mongoose';
require('dotenv').config();

const database = ()=>{
  const connectionString = `mongodb+srv://othmanabdelaziz321:${process.env.USER_PASSWORD}@todo.txs9dg0.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(connectionString);
  
  const connection  = mongoose.connection;
  
  connection.once('open', ()=>{
    console.log('connected successfuly to the DB');
  });
  mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    return console.log(err.message);
  });
};

export default database;