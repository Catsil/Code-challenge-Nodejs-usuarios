const express = require('express');
const morgan=require('morgan');
const exphbs= require('express-handlebars');
const path= require('path');


const app= express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); 
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers:require('./lib/handlebars')
}));

app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//global variables
app.use((req, res , next)=>{
    next();
});

//routes
app.use(require('./routes/'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//public
app.use(express.static(path.join(__dirname, 'public')));

//starting th server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});