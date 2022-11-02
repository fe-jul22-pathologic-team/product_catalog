'use strict';

export function createServer() {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  app.use(cors());

  return app;
}

createServer();
