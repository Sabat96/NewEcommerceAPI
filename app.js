import express from "express";
import userRouter from "./src/routes/user.routes.js";
import productRouter from "./src/routes/product.routes.js";
import authRouter from "./src/routes/Authentication.routes.js";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import cors from 'cors'


async function main() {

    dotenv. config("dotenv");

    await mongoose.connect(process.env.MONGO_URL)

    const app = express();
    app.use(cors());

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.use(userRouter);
    app.use(productRouter);
    app.use(authRouter);

    app.listen(process.env.PORT, () => {
        console.log("listening on https://localhost:"+process.env.PORT)
    })
}
main();