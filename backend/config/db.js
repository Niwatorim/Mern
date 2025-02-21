//database file
import mongoose from 'mongoose';
import dotenv from 'dotenv';


//make a function which connects
export const connect = async () =>{ //async function cuz the connection timing is separate from rest of code
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo connected at: ${con.connection.host}`);
    } catch(error) {
        //just for developers to show what the problem is
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 is error 0 is success
    }

};