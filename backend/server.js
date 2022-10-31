/* eslint-disable space-before-function-paren */
'use strict';

function createServer() {
  const express = require('express');
  const cors = require('cors');
  const products = require('../api/phones.json');

  const PORT = process.env.PORT || 3000;

  const app = express();

  app.use(cors());

  app.get('/products', express.json(), function (req, res) {
    res.statusCode = 200;
    res.send(products);
  });

  app.listen(PORT);
}

createServer();
