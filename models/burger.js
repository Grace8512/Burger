var orm = require('../config/orm.js');

var burger = {
    selectAll: function(finished){
        orm.selectAll("burgers", finished); 
    },
    insertOne: function(burgerName){
        return orm.insertOne("burgers", ["name", "devoured"],[burgerName, false]);
    },
    updateOne: function(name){
        return orm.updateOne("burgers", "devoured", true, "name", name);
    }
};


module.exports = burger;