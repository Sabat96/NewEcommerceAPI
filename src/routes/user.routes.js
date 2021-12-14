import {Router} from "express"
import { isAdmin } from "../middleWares/auth.middlleware.js";
import User from "../models/user.model.js";
import userValidate from "../validations/user.validate.js";

const userRouter = Router();
// const userRouter: Router

userRouter.get("/users", (req, res) => {
    res.send("helooooo");
})

userRouter.post("/users",isAdmin, async (req, res) => {
    try {
        await userValidate.validateAsync(req.body);
        
    } catch (error) {
        return res.status(400).json({error: error.message}); 
    }
    const user =  new User(req.body);
    await user.save();
    res.json({message: 'user created'})
})


export default userRouter