const conection = require('../services/conection')
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = conection.Schema({
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

ProductSchema.plugin(mongoosePaginate)

conection.model('Product', ProductSchema)
