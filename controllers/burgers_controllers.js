var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(burgers){
        var notEaten = burgers.filter((burger)=>!burger.devoured);
        var eaten = burgers.filter((burger) => burger.devoured);
        res.render("index", {notEaten : notEaten, eaten : eaten});       
    });    
});//index핸들바에서 올버거가 키로 작동해서 가지고 있는 모든 정보를 보여줄 수 있다. 

router.post("/new", function(req, res){
    burger.insertOne(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/move/:name", function(req, res){
    burger.updateOne(req.params.name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;