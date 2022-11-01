/* eslint-disable space-before-function-paren */
'use strict';

function createServer() {
  const express = require('express');
  const cors = require('cors');
  const products = require('../api/phones.json');

  const PORT = process.env.PORT || 8080;

  const app = express();

  app.use(cors());

  console.log(`server is running in port: ${PORT}`);

  app.get('/products', express.json(), function (req, res) {
    res.statusCode = 200;
    res.send(products);
  });

  app.listen(PORT);
}

createServer();
