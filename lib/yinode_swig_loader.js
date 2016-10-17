﻿var fs = require('fs'),
    path = require('path');
var yinode = require('../index.js');
var exists = fs.existsSync || path.existsSync;

/**
 * Loads templates from the file system.
 * @alias swig.loaders.fs
 * @example
 * swig.setDefaults({ loader: swig.loaders.fs() });
 * @example
 * // Load Templates from a specific directory (does not require using relative paths in your templates)
 * swig.setDefaults({ loader: swig.loaders.fs(__dirname + '/templates' )});
 * @param {string}   [basepath='']     Path to the templates as string. Assigning this value allows you to use semi-absolute paths to templates instead of relative paths.
 * @param {string}   [encoding='utf8']   Template encoding
 */


module.exports = function (templates_dirs, encoding) {
    var ret = {};
    
    encoding = encoding || 'utf8';

    
    /**
   * Resolves <var>to</var> to an absolute path or unique identifier. This is used for building correct, normalized, and absolute paths to a given template.
   * @alias resolve
   * @param  {string} to        Non-absolute identifier or pathname to a file.
   * @param  {string} [from]    If given, should attempt to find the <var>to</var> path in relation to this given, known path.
   * @return {string}
   */
  ret.resolve = function (to, from) {
        var t_root, t_path;
        for (var ti in templates_dirs) {
            t_root = templates_dirs[ti];
            t_path = path.resolve(t_root, to);

            if (exists(t_path)) {
                return t_path;
            }
        }
        from = (from) ? path.dirname(from) : process.cwd();
        t_path = path.resolve(from, to);
        if (!exists(t_path)) {
            throw new Error("no such file or directory, open '" + to + "'");//D:\kaifa\npmyinode\demo\app\templates\app\yinode\layout1.html
        }
        return t_path;
    };
    
    /**
   * Loads a single template. Given a unique <var>identifier</var> found by the <var>resolve</var> method this should return the given template.
   * @alias load
   * @param  {string}   identifier  Unique identifier of a template (possibly an absolute path).
   * @param  {function} [cb]        Asynchronous callback function. If not provided, this method should run synchronously.
   * @return {string}               Template source string.
   */
  ret.load = function (identifier, cb) {

        if (!fs || (cb && !fs.readFile) || !fs.readFileSync) {
            throw new Error('Unable to find file ' + identifier + ' because there is no filesystem to read from.');
        }
        
        identifier = ret.resolve(identifier);
        
        if (cb) {
            fs.readFile(identifier, encoding, cb);
            return;
        }
        
        return fs.readFileSync(identifier, encoding);
    };
    
    return ret;
};