const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const conn = require('./db/conn')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

app.engine('handlebars', exphbs.engine())

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.listen(3333)