import mongoose, { Schema, model } from "mongoose";
export interface user {
    id: any,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    income: string,
    city: string,
    car: string,
    quote: string,
    phone_price: string
}

const userSchema:Schema = new Schema<user>({
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
})

export default model<user>("user", userSchema);