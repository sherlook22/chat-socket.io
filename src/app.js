const app = require('express')()
const router = require('./router/index')

app.use('/api', router)

module.exports = app
