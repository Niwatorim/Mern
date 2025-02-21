import mongoose from 'mongoose';
import Product from '../models/product.models.js';

export const getAll =async (req,res)=>{ // req is requests and res is responses
    try{
        const products = await Product.find({}); //find all objects
        res.status(200).json({
            success:true,
            data: products //returns all the data found
        })
    } catch(error){
        console.log("error in finding products", error.message) //developer msg only
        res.status(500).json({
            success:false,
            message: 'Server Error'
        })
    }
};

export const newProduct = async(req,res) =>{
    const product = req.body; //user sent data
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({ //code 400 = Bad req
            success:false,
            message:"All fields not provided"
        });
    } 

    const newproduct = new Product(product);

    newproduct.save() //put the new product inside the db
        .then(()=> {
            return res.status(200).json({
                success: true,
                message: `Product (${product.name}) saved`,
                data: newproduct, //returns the object which is following the product schema
            });
        })
        .catch((error)=>{
            console.log('Error in deleting product', error.message);
            return res.status(500).json({ //code 500 = internsal server error
                success: false,
                message: `Error of: ${error}`
            });
        });
};

export const updateProduct = async(req,res) =>{
    const {id} = req.params;
    const product = req.body; //what the user is sending to change

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success:false,
            message:'Invalid ID'
        });
    }

    try{
        const updated = await Product.findByIdAndUpdate(id, product, {new:true}) //this returns the object before update by default unless new:true is written
        res.status(200).json({
            success: true,
            message: 'updated',
            data: updated
        });
    } catch(error){
        res.status(500).json({
            success:false,
            message:'Server error'
        });
    };
};

export const deleteProduct = async (req,res)=>{
    const {id} = req.params; //obtain ur id from url
    const productName = Product.findById(id).name;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success:false,
            message:'Invalid ID'
        });
    }

    Product.findByIdAndDelete(id) //mongoose delete function
        .then(()=>{
            return res.status(200).json({
                success:true,
                message: `deleted object ${id}, known as: ${productName}`
            })
        })
        .catch((error) => {
            return res.status(500).json({
                success:false,
                message: `Server error: ${error.message}`
            })
        })
};