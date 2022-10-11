const mongoose = require("mongoose");


const feedbackSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      lowercase: true,
      trim: true,
    },
      q1: {
          type: Number,
          required: true
      },
      q2: {
          type: Number,
          required: true
      },
      q3: {
          type: Number,
          required: true
      },
    text: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1000,
    },

    user_id: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 500,
    }
  },
  {
    timestamps: true,
  }
);
const feedbackModel = mongoose.model("feedback", feedbackSchema);
module.exports = feedbackModel;
