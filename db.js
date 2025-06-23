import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const connectToDB = async () => {    

    try {
        //datbase se connect
        await mongoose.connect("mongodb+srv://janisar007:janisar007@cluster0.wuajkzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Connected to Databse...")

    } catch (error) {
        console.log(error)
    }

}