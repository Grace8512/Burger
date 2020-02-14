var orm = require('../config/orm.js');

var burger = {
    selectAll: function(finished){
        orm.selectAll("burgers", finished); 
    },
    insertOne: function(burgerName, finished){
        orm.insertOne("burgers", ["name", "devoured"],["\""+ burgerName +"\"", false], finished);
    },
    updateOne: function(name, finished){
        orm.updateOne("burgers", "devoured", true, "name", name, finished);
    }
};


module.exports = burger;