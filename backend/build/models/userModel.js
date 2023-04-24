"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: Number,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    car: {
        type: String,
    },
    quote: {
        type: String,
    },
    phone_price: {
        type: String,
        required: true
    },
});
exports.default = (0, mongoose_1.model)("user", userSchema);
