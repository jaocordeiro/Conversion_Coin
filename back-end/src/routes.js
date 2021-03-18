const express = require('express');
const UserController = require('./controller/users');

const routes = express();

routes.post('/signup', UserController.create);
routes.post('/signin', UserController.login);

module.exports = routes;