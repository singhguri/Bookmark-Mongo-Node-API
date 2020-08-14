"use strict";

var mongoose = require("mongoose"),
  Bookmark = mongoose.model("Bookmarks");

exports.list_all_bookmarks = function (req, res) {
  Bookmark.find({}, function (err, bookmark) {
    if (err) res.send(err);
    res.json(bookmark);
  });
};

exports.create_a_bookmark = function (req, res) {
  var newBookmark = new Bookmark(req.body);
  newBookmark.save(function (err, bookmark) {
    if (err) res.send(err);
    res.json(bookmark);
  });
};

exports.delete_a_bookmark = function (req, res) {
  Bookmark.remove(
    {
      _id: req.params.id,
    },
    function (err, bookmark) {
      if (err) res.send(err);
      res.json({ message: "Bookmark successfully deleted" });
    }
  );
};
