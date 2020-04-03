const connection = require('../services/connection/mongoose')

const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = connection.Schema({
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

connection.plugin(mongoosePaginate)

connection.model('Product', ProductSchema)
