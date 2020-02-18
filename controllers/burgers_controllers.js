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
    burger.insertOne(req.body.burger_name.replace(" ","_"), function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/move/:name", function(req, res){
    console.log("move called " + req.params.name);
    burger.updateOne(req.params.name, function(result){
        console.log(result);
        res.sendStatus(result?200:500);
        //put에서는 get의 root 라우터를 불러올 수 없다. 결과가 성공적이면 트루를 리턴(200) 아닐경우 폴스를 리턴(500=인터널 서버에러)한다. 
    });
});

module.exports = router;