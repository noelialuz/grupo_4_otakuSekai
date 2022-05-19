const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor funcionando http://localhost:3000/' );
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/productCartFull', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCartFull.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

app.get('/productVerMas', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productVerMas.html'));
});

