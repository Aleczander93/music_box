var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Album = require('../models/album.model.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/albums/', function(req, res){
  Album.find({}, function(err, foundAlbums){
    if(err){
      res.status(500).json({
        err:err
      });
    }
    res.status(200).json({
      albums:foundAlbums
    });
  });
});

router.get('/albums/:id', function(req, res){
  Album.find({_id:req.params.id}, function(err, foundAlbum){
      if(err){
        res.status(500).json({
          err:err
        });
      }
      res.status(200).json({
        albums:foundAlbum
      });
  });
});


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
