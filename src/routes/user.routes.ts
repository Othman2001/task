import { Router } from 'express';
import { Users } from '../models/User';

const router = Router();

router.get('/users', async (req, res)=>{
  try { 
    const users = await Users.find({}, 'User');
    if (!users) { 
      return res.status(400).json({
        success:false,
        messages:'There Is No Users',
        users:[],
      });
    }
    return res.status(200).json({
      success:false,
      users,
    });
  } catch (error) {
    return res.status(400).json({
      success:false,
      //   @ts-ignore
      message:error.message,
    });
  }
});

router.post('/users', async (req, res)=>{
  try { 
    const { user } = req.body;
    const newTodo = await Users.create({ ...user });
    if (!user) { 
      return res.status(400).json({
        success:false,
        messages:'You Nedd TO Send Todo Data in order to save it ',
      });
    }
    return res.status(200).json({
      success:true,
      message:'Successfully Created User',
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

export default router;