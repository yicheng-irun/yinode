var express = require('express');
var router = express.Router();


router.get('/', function (req, res) { 


    res.send("yinode")
});

router.get('/yinode', function (req, res) {
    
    
    res.send("yinode2")
});





module.exports = router;