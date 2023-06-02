import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TodoModel = new Schema({
  todo:String,
  user:{ type:Schema.Types.ObjectId, ref:'User' },
});

const Todos = mongoose.model('Todo', TodoModel);

export { 
  Todos,
};