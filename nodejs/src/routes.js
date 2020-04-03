const express = require('express')

const routes = express.Router()

routes.use('/products', require('./routes/product'))
routes.use('/users', require('./routes/user'))
routes.use('/midia', require('./routes/midia'))

module.exports = routes
