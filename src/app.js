const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

app.use(express.static(path.join(__dirname, '../public'))); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

const mainRouter = require('./routes/main');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);

app.listen(process.env.PORT || 3030, function() {
    console.log('Servidor funcionando http://localhost:3030/' );
});

