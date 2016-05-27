var express = require('express');
var api = express.Router();
var User = require('./../models/index').user;

api.get('/',function(req,res,next) {
  User.findAll({}).then(function(users) {
    res.json(users);
  });
});

api.get('/:userId',function(req,res,next) {
  User.findById(req.param.userId).then(function(users) {
    res.json(users);
  })
});

api.post('/',function(req,res,next){
  var user = new Model(req.body);
  user.save(function(err,collection) {
    if(err){
      res.json({ error: "can't save it"});
    } else {
      res.json(collection);
    }
  });
});

api.put('/',function(req,res,next) {
  User.findOne({_id: req.body._id}).exec(function(err,collection) {
    if(err) {
      res.json({ error: "No user found"});
    } else {
      collection = _.extend(collection,req.body);
      collection.save(function(err,data) {
        res.json(data);
      });
    }
  });
});

api.delete('/',function(req,res,next){
  User.remove({_id: {$in: req.body.id } }).exec(function(err,collection) {
    if(err) {
      res.json({ error: "something went wrong" })
     } else {
      res.json({ message: 'Success' });
     }
  });
});

module.exports = api;
