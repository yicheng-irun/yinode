var mongoose = require('mongoose')
var model = require('./model.js')

function connect(url){
    if (url) {
        db.connection = mongoose.connect(url);
    }
}



function init(){

}

var db = {
    mongoose: mongoose,
    connection: null,
    types : require('./types.js'),
    connect: connect,
    init:init,
}


module.exports = db;