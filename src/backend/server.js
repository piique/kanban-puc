const express = require('express')
const app = express()

// middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/routes.js')
app.use('/api', router)

//port

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000.');
  });