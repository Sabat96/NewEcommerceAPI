import mongoose from 'mongoose'
// import {Schema} from 'mongoose'
const {Schema} = mongoose;


const ProductSchema = new Schema({
    name : String,
    category: String,
    price: Number,
    color: String,
    size: String,
    image: String,
    detail: String,
    
})

const Product = mongoose.model("Product", ProductSchema);

export default Product;