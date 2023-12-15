const Joi = require("joi");

const transactionDto = Joi.object({
    amount: Joi.number().required(),
    date: Joi.date().optional(),
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().allow("").max(250).optional(),
    type: Joi.string().allow("income", "expense").required(),
    category: Joi.string().min(2).max(50).required()
})

module.exports = { transactionDto }