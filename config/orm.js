//Import mysql connection
var connection = require('./connection.js');

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableName, finished){
        connection.query("SELECT * FROM " + tableName, function(err, result){
            if(err) throw err;
            finished(result);
        });
    },
    insertOne: function(tableName,cols,vals){
        var queryStr = "INSERT INTO " + tableName + " (" + cols.toString() + ") VALUES (" + vals.toString() + ")"; 
        //col.toString은 어레이를 받아서 각각의 엘리먼트를 콤마로 표시해서 나타낸다. 
        connection.query(queryStr, function(err, result){
            return err ? false : true;
            //에러가 있으면 폴스리턴 없으면 트루리턴! 
        });
    },
    updateOne: function(tableName, colName, colVal, queryColN, queryColV){
        var queryStr = "UPDATE " + tableName + " SET " + colName + " = " + colVal + " WHERE " + queryColN + " = " + queryColV;
        connection.query(queryStr, function(err,result){
            return err ? false : true;    
        });
    }
};

//Export the orm object for the model. 
module.exports = orm;