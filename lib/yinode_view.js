/**
 * Module dependencies.
 */

var path = require('path');
var fs = require('fs');
var dirname = path.dirname;
var basename = path.basename;
var extname = path.extname;
var exists = fs.existsSync || path.existsSync;
var join = path.join;



function isAbsolute(path) {
    if ('/' == path[0]) return true;
    if (':' == path[1] && '\\' == path[2]) return true;
    if ('\\\\' == path.substring(0, 2)) return true; // Microsoft Azure absolute path
}




/**
 * Expose `View`.
 */

module.exports = View;

/**
 * Initialize a new `View` with the given `name`.
 *
 * Options:
 *
 *   - `defaultEngine` the default template engine name
 *   - `engines` template engine require() cache
 *   - `root` root path for view lookup
 *
 * @param {String} name
 * @param {Object} options
 * @api private
 */

function View(name, options) {
    options = options || {};
    this.name = name;
    this.root = options.root;
    var engines = options.engines;
    this.defaultEngine = options.defaultEngine;
    var ext = this.ext = extname(name);
    if (!ext && !this.defaultEngine) throw new Error('No default engine was specified and no extension was provided.');
    if (!ext) name += (ext = this.ext = ('.' != this.defaultEngine[0] ? '.' : '') + this.defaultEngine);
    this.engine = engines[ext] || (engines[ext] = require(ext.slice(1)).__express);
    this.path = this.lookup(name);
}

/**
 * Lookup view by the given `path`
 *
 * @param {String} path
 * @return {String}
 * @api private
 */

View.prototype.lookup = function (path) {
    var ext = this.ext;
    
    if (this.root instanceof Array) {
        var t_root, t_path = path;
        for (var ri in this.root) {
            t_root = this.root[ri];

            if (!isAbsolute(path))
                t_path = join(t_root, path);
            if (exists(t_path))
                return t_path;

            // <path>/index.<engine>
            t_path = join(dirname(t_path), basename(t_path, ext), 'index' + ext);
            if (exists(t_path))
                return t_path;
        }

    } else {
        // <path>.<engine>
        if (!isAbsolute(path))
            path = join(this.root, path);
        if (exists(path))
            return path;
        
        // <path>/index.<engine>
        path = join(dirname(path), basename(path, ext), 'index' + ext);
        if (exists(path))
            return path;
    }
};

/**
 * Render with the given `options` and callback `fn(err, str)`.
 *
 * @param {Object} options
 * @param {Function} fn
 * @api private
 */

View.prototype.render = function (options, fn) {
    this.engine(this.path, options, fn);
};
