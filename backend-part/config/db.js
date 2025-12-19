import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://Yachana:yachu123@cluster0.ymunhqo.mongodb.net/food-del').then(()=>console.log("DB connected"));
}