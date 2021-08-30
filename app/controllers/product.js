const mongoose = require('mongoose');
const product = require('../models/product');
const Product = require('../models/product');

class ProductController{
    getAllProduct = (req,res) => {
        res.render('product/index');
    }

    binProduct = (req, res, next) => {
        Product.findById({ _id: req.params.id }, function(err, product){
            
            console.log("Test: " + product.name);

            product.bin = !product.bin;
            product.follow = false;
            product.note = false;
            product.save();

            res.json( {
                data: product,
                success: true
            });
        });
    }

    //Json List
    getJsonProduct = (req, res, next) => {
        Product.find({ bin: false }, function(err, product){
            res.json( {
                data: product,
                success: true
            });
        });
    }

    getJsonBinProduct = (req, res, next) => {
        Product.find({ bin: true }, function(err, product){
            res.json( {
                data: product,
                success: true
            });
        });
    }

    getJsonFollowProduct = (req, res, next) => {
        Product.find({ follow: true, bin: false }, function(err, product){
            res.json( {
                data: product,
                success: true
            });
        });
    }

    getJsonNoteProduct = (req, res, next) => {
        Product.find({ note: true, bin: false }, function(err, product){
            res.json( {
                data: product,
                success: true
            });
        });
    }
}

module.exports = new ProductController();