/* eslint-disable space-before-function-paren */
'use strict';

async function connectDB() {
  const { Client } = require('pg');
  const client = new Client({
    host: 'ec2-52-19-188-149.eu-west-1.compute.amazonaws.com',
    user: 'ruxfhxvmwidupx',
    password: 'be76fa062fd382b6ab3ce1bd910e3fd6fed758de53fe568bb00af3302df6c192'
  });
  await client.connect();

  const result = await client.query(`
    SELECT *
    FROM public.test
    ORDER BY id ASC
  `);

  return result;
};

function createServer() {
  const express = require('express');
  const cors = require('cors');
  const products = require('../api/phones.json');

  const app = express();

  app.use(cors());

  app.get('/products', express.json(), function (req, res) {
    console.log(products);
    res.statusCode = 200;
    res.send(products);
  });

  app.get('/test', express.json(), function (req, res) {
    console.log('testing============================================start');
    // res.statusCode = 200;
    console.log(connectDB().rows);
    // res.send(products);
    console.log('testing============================================end');
  });

  return app;
}

module.exports = {
  createServer
};
