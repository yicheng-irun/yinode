//和500差不多


var notFound_debug = function (req, res, next) {
    var message = "404";
    
    res.status('404');
    res.render('404', {
        title: "404 not found",
        url: req.url,
    });
}


var notFound = function (req, res, next) {
    var message = "404";
    
    res.status('404');
    res.render('404', {
        title: "404 not found",
        url: req.url,
    });
}


module.exports.get = function (debug) {
    return debug?notFound_debug:notFound;
}