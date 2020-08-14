"use strict";

var mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
var Schema = mongoose.Schema;

var BookmarkSchema = new Schema(
  {
    link: {
      type: String,
      required: "Kindly enter the link for the bookmark.",
      unique: true,
    },
    title: {
      type: String,
      required: "Kindly enter the title of the bookmark.",
    },
    timeCreated: {
      type: String,
      default: Math.round(new Date(Date.now()).getTime() / 1000),
    },
    timeUpdated: {
      type: String,
      default: Math.round(new Date(Date.now()).getTime() / 1000),
    },
    publisher: {
      type: String,
      required: "Kindly enter the name of the publisher.",
    },
    tag: [
      {
        type: String,
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("Bookmarks", BookmarkSchema);
