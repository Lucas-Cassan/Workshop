const mongoose = require("mongoose");
const {isEmail} = require("validator");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [isEmail],
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 1000,
        },
        xp: {
            type: Number,
            required: true,
            minlength: 0,
            maxlength: 10,
        },
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 30,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 30,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
