const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Book =  Schema({
    name:{type:String},
    price:{
        type:String
    },
    description : {
        type:String
    }
},
{
    collection:'books'
});

module.exports = mongoose.model('Book',Book);
