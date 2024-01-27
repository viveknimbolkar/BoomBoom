const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
const router = require('./src/router');
const LISTEN_ON_PORT = process.env.PORT || 3000;

app.use(bodyParser());

//static paths
const publicPath = express.static(path.join(__dirname, 'public'));
const viewsPath = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials');

app.use(express.json());
app.use(publicPath);
app.use(router);

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);


app.listen(LISTEN_ON_PORT, (error) => {
    if(error) console.log(error);
    console.log("listening on port" , LISTEN_ON_PORT);
});