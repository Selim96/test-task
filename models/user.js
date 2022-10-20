const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        default: ""
    }
}, { versionKey: false, timestamps: true });

const userJoi = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string()
});

const User = model('user', userSchema);

module.exports = {
    User,
    userJoi
};