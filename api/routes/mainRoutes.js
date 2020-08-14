"use strict";

module.exports = function (app) {
  var bookmark = require("../controllers/bookmarkController");
  var tag = require("../controllers/tagController");

  // Bookmark Routes
  app
    .route("/bookmarks")
    .get(bookmark.list_all_bookmarks)
    .post(bookmark.create_a_bookmark);

  app.route("/bookmarks/:id").delete(bookmark.delete_a_bookmark);

  // Tag Routes
  app.route("/tags").get(tag.list_all_tags).post(tag.create_a_tag);

  app.route("/tags/:id").delete(tag.delete_a_tag);
};
