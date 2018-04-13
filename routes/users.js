var express = require('express');
var router = express.Router();
var models = require("../db/models/index");

/* GET users listing. */
router.get('/', function(req, res, next) {

  models.Test.find({

     }).then(function (data) {

       res.send(data);

     }
  )
  
});

module.exports = router;
