const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Porduct = new Schema({
        image: {
            type: String,
            maxlength: 255
        },
        name: {
            type: String,
            maxlength: 255
        },
        code: {
            type: String,
            maxlength: 100
        },
        quanlity: {
            type: Number
        },
        quanlity: {
            type: Number
        },
        price: {
            type: Number
        },
        datecreate: {
            type: Date,
            default: Date.now
        },
        dateupdate:{
            type: Date,
            default: Date.now
        },
        usercreate: {
            type: String
        },
        userupdate: {
            type: String
        },
        bin: {
            type: Boolean
        },
        follow: {
            type: Boolean
        },
        note: {
            type: Boolean
        }
});

module.exports = mongoose.model('Product', Porduct);