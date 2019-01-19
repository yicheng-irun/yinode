const express = require('express');
const mongoose = require('mongoose');


function createModelAdmin () {
    function ModelAdmin (mongooseModel) {
        if (!mongooseModel) {
            throw new Error('the mongooseModel arguments is not A');
        }

        const { schema } = mongooseModel;
    
        if (!(schema instanceof mongoose.Schema)) {
            throw new Error('The paramates "mongoose_model" is not A mongoose Model');
        }




        this.router = express.Router();
    }






    return ModelAdmin;
}

module.exports = createModelAdmin;
