const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('views', path.join(process.cwd(), 'views'));

const { userRouter, errorRouter } = require('./routes')


//USERS

app.use('/users', userRouter);


//ERROR

app.use('/error', errorRouter);


app.listen(5000, () => {
    //console.log('App listen 5000');
});

