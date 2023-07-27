

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('express.json', 'utf-8'));
const products = data.products;
exports.createProduct = (req, res) => {
    products.push(req.body);
    res.json(201, req.body)
}

exports.getAllProducts = (req, res) => {
    res.json(products)
}

exports.getProduct = (req, res) => {
    const id = +req.params.id;
    const data = products.find((p) => p.id === id);
    res.json(data);
}

exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.status(200).json();
}

exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(200).json();
}

exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1)
    res.status(201).json()
}
