var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Album = require('../models/album.model.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/albums/', function(req, res){
  Album.find({}, function(err, foundAlbums){
    if(err){
      return res.status(500).json({  //return infront of re.status will stop the application from running and crashing later
        err:err
      });
    }
      return res.status(200).json({
      albums:foundAlbums
    });
  });
});

router.get('/albums/:id', function(req, res, next){
  Album.find({_id:req.params.id}, function(err, foundAlbum){
      if(err){
        res.status(500).json({
          err:err
        });
        next();  //next(); will stop the application from running and crashing later
      }
      res.status(200).json({
        albums:foundAlbum
      });
  });
});

router.get('/albums/date/:date', function(req, res){
  Album.find({date:req.params.date}, function(err, foundAlbum){
      if(err){
        res.status(500).json({
          err:err
        });
      } else { // wil stop the application from running and crashing later... this is the most inuitive
      res.status(200).json({
        albums:foundAlbum
      });
    }
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

router.put('/albums/:id', function(req, res){
  Album.findOneAndUpdate({_id:req.params.id}, req.body, function(err, oldAlbum){
    if(err){
      res.status(500).json({
        err:err
      });
    }
    res.status(200).json({
        msg:oldAlbum
    });
  });
});

router.delete('/albums/:id', function(req, res){
  Album.findOneAndRemove({_id:req.params.id}, function(err, deletedAlbum){
    if(err){
      res.status(500).json({
        err:err
      });
    }
    res.status(200).json({
      msg:deletedAlbum
    });
  });
});

module.exports = router;
