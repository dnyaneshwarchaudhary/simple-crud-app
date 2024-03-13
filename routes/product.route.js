const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProductsbyID, getProductandUpdatebyID, addProduct, deleteProduct} = require('../controllers/product.controller.js');

router.get('/',getProducts);
router.get('/:id',getProductsbyID);
router.put('/:id',getProductandUpdatebyID);
router.post('/',addProduct);
router.delete('/:id',deleteProduct);

module.exports = router;