import express from 'express';
// configure env, referencing the dependencies in package.json file
import dotenv from "dotenv";
dotenv.config();
//import db connection
import {connect} from './config/db.js';

//for deployment
import path from 'path'

//getting the routes from other file (scalability)
import productRoutes from './routes/product.routes.js';

const app =express(); //Makes express app
app.use(express.json());//allows app to use json data
const PORT = process.env.PORT

//
const __dirname = path.resolve();

if (process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname,'frontend/dist')))//path.join basically means just go under the root and go under dist folder 
    app.get('*', (req,res)=>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist','index.html'))); 
}


app.use('/api/products', productRoutes); // any routes are prefixed with /api/products

app.listen(PORT,()=>{ //listens to the port so we can check for requests etc.
    connect();
    console.log(`server started at http://localhost:${PORT}`);
});
