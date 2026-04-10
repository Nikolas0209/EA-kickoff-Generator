import express from "express";

//const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from express');
})

app.get('/about', (req, res) => {
  res.send('This is the route page')
})

app.listen(3000, () => {
  console.log('hello');
});