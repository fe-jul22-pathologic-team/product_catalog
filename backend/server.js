'use strict';

import * as url from 'url';
import { getAll } from './services/products.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export function createServer() {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  app.use(cors());
  
  app.get('/products', express.json(), function (req, res) {
    res.statusCode = 200;
    getAll().then(response => {
      res.send(response);
    });
  });

  app.use(express.static(`${__dirname}/data`));

  return app;
}
