const conection = require('../services/conection')

require('../models/ProductModel')

const ProductModel = conection.model('Product')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const products = await ProductModel.paginate({}, { page, limit: 10 })
        return res.json(products)
    },
    async store(req, res) {
        const product = await ProductModel.create(req.body)
        return res.json(product)
    },
    async show(req, res) {
        const product = await ProductModel.findById(req.params.id)
        return res.json(product)
    },
    async update(req, res) {
        const product = await ProductModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        return res.json(product)
    },
    async destroy(req, res) {
        const product = await ProductModel.findByIdAndRemove(req.params.id)
        return res.send()
    },
}
