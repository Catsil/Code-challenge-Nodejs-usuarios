const express = require('express');
const morgan=require('morgan');


const app= express();

app.set('port', process.env.PORT || 3000);


app.use(morgan('dev'));

app.use(require('./routes/'));

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});