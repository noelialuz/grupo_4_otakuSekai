const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const app = express();
app.use(express.static(path.join(__dirname, '../public'))); 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor funcionando http://localhost:3000/' );
});