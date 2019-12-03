var orm = require("../config/orm.js");

var burger = {
    all: function(theCallBack) {
        orm.all("burgers", function(response) {
            theCallBack(response);
        });
    },
    create: function(theColumns, theValues, theCallBack) {
        orm.create("burgers", theColumns, theValues, function(response) {
            theCallBack(response);
        });
    },
    update: function(theObjColVals, theCondition, theCallBack) {
        orm.update("burgers", theObjColVals, theCondition, function(response) {
            theCallBack(response);
        });
    },
    delete: function(theCondition, theCallBack) {
        orm.delete("burgers", theCondition, function(response) {
            theCallBack(response);
        });
    }
};

module.exports = burger;