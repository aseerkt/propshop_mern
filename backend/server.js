const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => res.send('API is running'));
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/products/:id', (req, res) =>
  res.json(products.find((pdt) => pdt._id === req.params.id))
);

app.listen(5000, () => console.log('Server listening on port 5000'));
