"use strict";

var mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
var Schema = mongoose.Schema;

var TagSchema = new Schema(
  {
    title: {
      type: String,
      required: "Kindly enter the title of the Tag.",
      unique: true,
    },
    timeCreated: {
      type: String,
      default: Math.round(new Date(Date.now()).getTime() / 1000),
    },
    timeUpdated: {
      type: String,
      default: Math.round(new Date(Date.now()).getTime() / 1000),
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Tags", TagSchema);
