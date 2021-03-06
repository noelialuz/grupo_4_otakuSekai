const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const recordameMiddleware = require("./middlewares/recordameMiddleware")

const app = express();

app.use(session({secret:'es un secreto a voces'}));
app.use(express.static(path.join(__dirname, '../public'))); 
app.use(express.urlencoded({ extended: false }));  
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

const mainRouter = require('./routes/mainRoutes');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(recordameMiddleware);
app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use((req, res, next) => {res.status(404).render('not-found')})


app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor funcionando http://localhost:3000/' );
});

