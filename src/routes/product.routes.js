import { Router } from "express"
import { isAdmin } from "../middleWares/auth.middlleware.js";
import Product from "../models/product.model.js";
import productValidate from "../validations/product.validate.js";

const productRouter = Router();
// const userRouter: Router

productRouter.get("/products", async (req, res) => {
    const product = await Product.find({});
    res.json(product);
})

// ProductRouter.post("/Products",isAdmin, async (req, res) => {

productRouter.post("/products", async (req, res) => {
    try {
        await productValidate.validateAsync(req.body);

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    console.log(req.body);
    const product = new Product(req.body);
    await product.save();
    res.json({ message: 'Product created' })
})

// get product by id
productRouter.get("/products/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: "Product not found" });
    }
  });


export default productRouter