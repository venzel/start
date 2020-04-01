const conection = require('../services/conection')

require('../models/UserModel')

const UserModel = conection.model('User')

module.exports = {
    async find(req, res) {
        const user = await UserModel.find()
        return res.json(user)
    },
    async store(req, res) {
        const user = await UserModel.create(req.body)
        return res.json(user)
    },
}
