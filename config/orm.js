var connection = require("./connection.js");

var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += col;
        queryString += ") ";
        queryString += "VALUES (";
        queryString += val;
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(table, col, val, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += col;
        queryString += " = ";
        queryString += val;
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
};

module.exports = orm;