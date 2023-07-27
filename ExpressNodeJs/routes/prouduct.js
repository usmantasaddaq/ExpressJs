

const express = require('express');
const productController = require('../controller/product');
const productRouter = express.Router();
// MVC (model-view-controller)
productRouter
    .post('/', productController.createProduct)
    .get('/', productController.getAll)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);
exports.Routes = productRouter;