import express from 'express';
// configure env, referencing the dependencies in package.json file
import dotenv from "dotenv";
dotenv.config();
//import db connection
import {connect} from './config/db.js';

//getting the routes from other file (scalability)
import productRoutes from './routes/product.route.js';

const app =express(); //Makes express app
app.use(express.json());//allows app to use json data
const PORT = process.env.PORT



app.use('/api/products', productRoutes); // any routes are prefixed with /api/products

app.listen(PORT,()=>{ //listens to the port so we can check for requests etc.
    connect();
    console.log(`server started at http://localhost:${PORT}`);
});
