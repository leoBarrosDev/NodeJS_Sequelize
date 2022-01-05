const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./routes')

const port = 3000

routes(app)

app.listen(port, () =>
    console.log(`Servidor rodando na porta ${port}`))


module.exports = app