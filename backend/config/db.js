import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://arunmozhidevant2022it:planwise25@cluster0.ugj2i1b.mongodb.net/Planwise')
    .then( () => console.log('DB connected'));
}