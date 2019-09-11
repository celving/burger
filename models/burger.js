var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(col, val, condition, cb) {
      orm.update("cats", col, val, condition, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;