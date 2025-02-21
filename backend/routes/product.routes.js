//for scalability

//dependencies
import express from 'express';
import {deleteProduct, getAll, newProduct, updateProduct} from '../controller/product.controller.js';

const router = express.Router();

//get function for the app, for all products
router.get("/", getAll);

//putting values into the database using post method
router.post("/", newProduct);

//update products
//Note: update all fields = put, update some fields only = patch (doesnt matter much)
router.put("/:id", updateProduct);

//delete products
router.delete("/:id", deleteProduct);


export default router;