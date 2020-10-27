import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc     Fetch All Products
// @route    GET /api/products
// @access   Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc     Fetch Single Product By ID
// @route    GET /api/products/:id
// @access   Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Product Not Found' });
  }
  res.json(product);
});
