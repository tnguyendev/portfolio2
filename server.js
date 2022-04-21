const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.html')
  })

app.post('/post', (req, res) => {
    console.log('iworked')
    res.redirect('/')
  })
