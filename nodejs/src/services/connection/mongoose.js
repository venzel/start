const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

module.exports = mongoose
