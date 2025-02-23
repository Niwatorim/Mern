import { Alert, Box, Button, Container, Input, Snackbar, Stack, Typography } from "@mui/material";
import * as React from "react"
import { useProductStore } from "../store/product";
import { useState } from "react";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({ //newProduct state
    name:'',
    price:'',
    image:'',
  });

  const {createProduct} = useProductStore(); //access global store

  const addproduct = async() => { //adding product function utilizing store
    const {success,message} = await createProduct(newProduct) //input the newPorduct into zustand function and wait for response, then console.log it
    console.log('Success:',success);
    console.log('Message:',message);
    handleClick();
  }



  //snackbar code
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <Stack direction={'column'}  spacing={8} alignItems={'center'}>
        <Typography variant="h1" textAlign={'center'} sx={{mb:8, boxSizing:'2x1'}}>

          Create new product
        </Typography>

        <Box sx={{w:'100%', boxShadow:'md', borderRadius:'lg', p:6}}>
          <Stack direction={'column'} spacing={4}>
            <Input 
              placeholder="Product name"
              name="name"
              value={newProduct.name}
              onChange={(e)=> setNewProduct({...newProduct, name:e.target.value})} 
            />
            <Input 
              placeholder="Product price"
              name="price"
              value={newProduct.price}
              onChange={(e)=> setNewProduct({...newProduct, price:e.target.value})} 
            />
            <Input 
              placeholder="Product img"
              name="img"
              value={newProduct.image}
              onChange={(e)=> setNewProduct({...newProduct, image:e.target.value})} 
            />

            <Button onClick={addproduct}>
              Add product
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                This is a success Alert inside a Snackbar!
              </Alert>
            </Snackbar>
          </Stack>
        </Box>

      </Stack>
    </Container>
  )
}

export default CreatePage