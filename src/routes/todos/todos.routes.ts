import { Router } from 'express';
import { Todos } from '../../models/Todo';

const router = Router();


router.get('/todos', async (req, res)=>{
  try { 
    const todos = await Todos.find({}, 'Todo');
    if (!todos) { 
      return res.status(400).json({
        success:false,
        messages:'There Is No Todos Added',
        toods:[],
      });
    }
  } catch (error) {
    return res.status(400).json({
      success:false,
      //   @ts-ignore
      message:error.message,
    });
  }
});
// create end point
router.post('/todos', async (req, res)=>{
  try { 
    const { todo } = req.body;
    const newTodo = await Todos.create({ ...todo });
    if (!todo) { 
      return res.status(400).json({
        success:false,
        messages:'You Nedd TO Send Todo Data in order to save it ',
      });
    }
    return res.status(200).json({
      success:true,
      message:'Successfully Created Todo',
      todo:newTodo,
    });
  } catch (error) {
    return res.status(400).json({
      success:false,
      //   @ts-ignore
      message:error.message,
    });
  }
});
// read sepecfic todo
router.get('/todos/:id', async (req, res)=>{
  try { 
    const id = req.params.id;
    const existingTodo = await Todos.findById(id);

    if (!existingTodo) { 
      return res.status(400).json({
        success:false,
        messages:`there is no todo with this id ${id}`,
      });
    }
    return res.status(200).json({
      success:true,
      message:'Successfully Created Todo',
      todo:existingTodo,
    });
  } catch (error) {
    return res.status(400).json({
      success:false,
      //   @ts-ignore
      message:error.message,
    });
  }
});
// get user todo
router.get('/todos/get-by-user/:userId', async (req, res)=>{
  try { 
    const userId = req.params.userId;
    const existingTodo = await Todos.find().where('user', userId);
    if (!existingTodo) { 
      return res.status(400).json({
        success:false,
        messages:`there is no todo for user with  ${userId}`,
      });
    }
    return res.status(200).json({
      success:true,
      message:'Successfully Created Todo',
      todo:existingTodo,
    });
  } catch (error) {
    return res.status(400).json({
      success:false,
      //   @ts-ignore
      message:error.message,
    });
  }
});
// update todo 
router.put('/todos/:id', async (req, res)=>{
  try { 
    const id = req.params.id;
    const existingTodo = await Todos.findById(id);
    const { todo } = req.body;
  
    if (!existingTodo) { 
      return res.status(400).json({
        success:false,
        messages:`there is no todo with this id ${id}`,
      });
    }
    console.log(todo, 'new');
    const newTodo = await Todos.findByIdAndUpdate(id, { ...todo });
    return res.status(200).json({
      success:true,
      message:'Successfully updated Todo',
      todo:newTodo,
    });
  } catch (error) {
    return res.status(400).json({
      success:false,
      //   @ts-ignore
      message:error.message,
    });
  }
});

// update todo 
router.put('/todos/:id', async (req, res)=>{
  try { 
    const id = req.params.id;
    const existingTodo = await Todos.findById(id);
    const { todo } = req.body;
    
    if (!existingTodo) { 
      return res.status(400).json({
        success:false,
        messages:`there is no todo with this id ${id}`,
      });
    }
    console.log(todo, 'new');
    const newTodo = await Todos.findByIdAndUpdate(id, { ...todo });
    return res.status(200).json({
      success:true,
      message:'Successfully updated Todo',
      todo:newTodo,
    });
  } catch (error) {
    return res.status(400).json({
      success:false,
      //   @ts-ignore
      message:error.message,
    });
  }
});

// Delete todo 
router.delete('/todos/:id', async (req, res)=>{
  try { 
    const id = req.params.id;
    const existingTodo = await Todos.findById(id);
    const { todo } = req.body;
      
    if (!existingTodo) { 
      return res.status(400).json({
        success:false,
        messages:`there is no todo with this id ${id}`,
      });
    }
    await Todos.findByIdAndDelete(id, { ...todo });
    return res.status(200).json({
      success:true,
      message:'Successfully updated Todo',
    });
  } catch (error) {
    return res.status(400).json({
      success:false,
      //   @ts-ignore
      message:error.message,
    });
  }
});

export default router;