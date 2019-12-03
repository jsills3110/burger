var db = require("./connection.js");

var orm = {
    all: function (theTable, theCallBack) {
        var queryString = "SELECT * FROM " + theTable + ";";
        db.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            theCallBack(result);
        });
    },
    create: function (theTable, theColumns, theValues, theCallBack) {
        var queryString = "INSERT INTO " + theTable;
        queryString += " (" + theColumns.toString() + ") VALUES (";
        var tempArray = [];
        for (var i = 0; i < theValues.length; i++) {
            tempArray.push("?");
        }
        queryString += tempArray.toString() + ")";

        console.log(queryString);

        db.query(queryString, theValues, function (err, result) {
            if (err) {
                throw err;
            }

            theCallBack(result);
        });
    },
    update: function (theTable, theObjColVals, theCondition, theCallBack) {
        var queryString = "UPDATE " + theTable + " SET ";
        var tempArray = [];
        for (var key in theObjColVals) {
            var value = theObjColVals[key];
            if (Object.hasOwnProperty.call(theObjColVals, key)) {
                if (typeof value === "string" && value.indexOf(" ") >= 0) {
                    value = "'" + value + "'";
                }
                tempArray.push(key + "=" + value);
            }
        }
        queryString += tempArray.toString() + " WHERE " + condition;

        console.log(queryString);

        db.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            theCallBack(result);
        });
    },
    delete: function (theTable, theCondition, theCallBack) {
        var queryString = "DELETE FROM " + theTable + " WHERE " + theCondition;

        console.log(queryString);

        db.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            theCallBack(result);
        });
    }
}

module.exports = orm;