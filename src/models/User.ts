import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserModel = new Schema({
  name:String,
  email:String,
});

const Users = mongoose.model('User', UserModel);

export { 
  Users,
};