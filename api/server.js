const express = require('express');
const Router = require('../routes/postRoutes.js');
const server = express();
server.use(express.json());
server.use('/api/posts', Router);
module.exports = server;