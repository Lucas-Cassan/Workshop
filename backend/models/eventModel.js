const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    wording: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    owner: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        trim: true, 
    },
    place: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        trim: true,
    }
  },
  {
    timestamps: true,
  }
);
const eventModel = mongoose.model("event", eventSchema);
module.exports = eventModel;
