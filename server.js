require('dotenv').load();
const express = require('express');
const routes = require('./src/app/routes');
const bodyParser = require('body-parser');
const config = require('./config');
const twitter = require('twitter');

const app = new express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes);

const server = app.listen(config.port);
const host = server.address().address;
const port = server.address().port;

console.log(`The server is listening at http://${host}:${port}`);
