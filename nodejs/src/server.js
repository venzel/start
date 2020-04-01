const express = require('express')
const cors = require('cors')

const port = 3001

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Listen ${port}`)
})
