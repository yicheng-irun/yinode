﻿var express = require('express');
var router = express.Router();



router.get('/login', function (req, res) {
    
    
    res.send("login");
});
router.get('/logout', function (req, res) {
    
    
    res.send("logout");
});




module.exports = router;