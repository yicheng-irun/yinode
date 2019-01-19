const express = require('express');
const bodyParser = require('body-parser');
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

        // 解析 application/json
        this.router.use(bodyParser.json());
        // 解析 application/x-www-form-urlencoded
        this.router.use(bodyParser.urlencoded({ extended: false }));
    }






    return ModelAdmin;
}

module.exports = createModelAdmin;
