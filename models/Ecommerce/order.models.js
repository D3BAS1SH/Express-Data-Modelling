import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({},{timestamps:true})

export const Order=new mongoose.model("Order",orderSchema)