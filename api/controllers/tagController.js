"use strict";

var mongoose = require("mongoose"),
  Tag = mongoose.model("Tags");

exports.list_all_tags = function (req, res) {
  Tag.find({}, function (err, tag) {
    if (err) res.send(err);
    res.json(tag);
  });
};

exports.create_a_tag = function (req, res) {
  var newTag = new Tag(req.body);
  newTag.save(function (err, tag) {
    if (err) res.send(err);
    res.json(tag);
  });
};

exports.delete_a_tag = function (req, res) {
  Tag.remove(
    {
      _id: req.params.id,
    },
    function (err, tag) {
      if (err) res.send(err);
      res.json({ message: "Tag successfully deleted" });
    }
  );
};
