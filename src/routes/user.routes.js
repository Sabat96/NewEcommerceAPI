import {Router} from "express"

const userRouter = Router();
// const userRouter: Router

userRouter.get("/users", (req, res) => {
    res.send("helooooo");
})
export default userRouter