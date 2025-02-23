import {create} from 'zustand'

//zustand creates global store
export const useProductStore = create((set) => ({
    products:[], //array of all the products
    setProducts: (products) => set({products}), //setter function just like in useState
    
    //create product function
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) { //checks for all fields
            return {success:false, message: 'fill in all fields'}
        }
        const res = await fetch('/api/products',{ //sends a POST request to backend, is a whole url configured in vite.config.js
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct) //this comes from createPage, cuz this zustand referenced in that page
        })
        const data = await res.json(); //awaits response from backend (is response from the api)

        set((state) => ({products:[...state.products,data.data]})); //sets the products function, could lowkey use the setProduct function probs
        return {success:true, message:'Successfully added'};
    },

    fetchProducts: async () => {
        const res = await fetch('/api/products'); //send get request for data
        const data = await  res.json(); //data is the response of the api
        set({products: data.data});


    }
}));

