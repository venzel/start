const express = require('express')

const routes = express.Router()

const controoler = require('../controllers/ProductController')

routes.get('/', controoler.index)
routes.get('/:id', controoler.show)
routes.post('/', controoler.create)
routes.put('/:id', controoler.update)
routes.delete('/:id', controoler.destroy)

module.exports = routes
