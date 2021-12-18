import Joi from 'joi'

const ProductValidate = Joi.object({
    name: Joi.string().min(2).max(125).required(),
    category: Joi.string(),
    price: Joi.number().required(),
    color: Joi.string(),
    size: Joi.string(),
    image: Joi.string().required(),
    detail: Joi.string(),
    
})

export default ProductValidate;
