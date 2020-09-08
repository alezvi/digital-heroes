// requerimos todo lo que vamos a usar
// requerimos express
const express = require('express')
// instanciar express
const app = express()
// modulo nativo de node para trabajar con rutas de archivos
const path = require('path')

// http://localhost:3000/
// http://mitienda.com/
app.get('/', function (req, res) {
    let file = path.resolve('vistas/index.html')
    res.sendFile(file)
})

app.get('/contacto', function (req, res) {
    let file = path.resolve('vistas/contacto.html')
    res.sendFile(file)
})

app.listen(3000)
