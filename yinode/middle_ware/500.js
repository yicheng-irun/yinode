//本来是写在index.js里边的，但是不想index.js变得太大，太大了不好找代码
//先这样写着吧


var serverError_debug = function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err)
    res.render('500', {
        title: "500 Server Error",
        details: err.message,
        //error: err
    });
}

var serverError = function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('500', {
        title: "500 Server Error",
        details: null,
        //error: {}
    });
}

module.exports.get = function (debug){
    return debug?serverError_debug:serverError;
}