var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(burgers){
        res.render("index", {allBurgers: burgers});      
    });    
});//index핸들바에서 올버거가 키로 작동해서 가지고 있는 모든 정보를 보여줄 수 있다. 

router.post("/new", function(req, res){
    burger.insertOne(req.body.burger_name);
});

router.put("/move", function(req, res){
    burger.updateOne(req.body.burger_name);
});

module.exports = router;