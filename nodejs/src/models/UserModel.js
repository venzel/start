const conection = require('../services/conection')
const mongoosePaginate = require('mongoose-paginate')

const UserSchema = conection.Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

UserSchema.plugin(mongoosePaginate)

conection.model('User', UserSchema)
