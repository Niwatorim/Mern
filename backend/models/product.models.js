//making the schema for products database
import mongoose from 'mongoose';

const productscheme= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type:String,
        required:true
    },
},{
    timestamps: true //createdAt time and updatedAt time

});

const Product = mongoose.model('Product', productscheme); //creates now model called Product with its scheme
//Note: call it 'product' cuz mongoose changes it to products when making cluster

export default Product;