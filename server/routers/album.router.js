var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var album = require('./models/album.models.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.post('/albums', function(req, res){
  console.log(req.body);
  var album = new Album(req.body);
  album.save(function(err){
    if(err){
      res.status(500).json({
        err:err
      });
    }
      res.status(200).json({
        msg:'we created an album'
      });
    });
  });

module.exports = router;
