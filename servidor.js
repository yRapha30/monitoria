const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')

app.get('/mon', (request, response) => {
    resultado = ''
    response.render('index')
})

app.post('/soma', (request, response) => {
    soma = parseFloat(request.body.n1) + parseFloat(request.body.n2)
    response.render('index', {resultado: soma})
})

app.post('/sub', (request, response) => {
    sub = parseFloat(request.body.n1) - parseFloat(request.body.n2)
    response.render('index', {resultado: sub})
})

app.post('/mult', (request, response) => {
    mult = parseFloat(request.body.n1) * parseFloat(request.body.n2)
    response.render('index', {resultado: mult}) 
})

app.post('/div', (request, response) => {
    div = parseFloat(request.body.n1) / parseFloat(request.body.n2)
    response.render('index', {resultado: div})
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("rodano =D")
})

