'use strict';

var dc = require('drop-comments');
var t = require('through2');

module.exports = function (opts) {
    return t.obj(function (chunk, env, cb) {
        chunk.contents = new Buffer(dc(chunk.contents.toString(), null, opts || {}));
        this.push(chunk);
        cb();
    });
};