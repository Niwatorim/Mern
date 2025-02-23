import { Box, Button, Container, Input, Stack, Typography } from "@mui/material";
import { useState } from "react"

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name:'',
    price:'',
    image:'',
  });

  const addproduct = () => {
    console.log(newProduct);
  }


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

          </Stack>
        </Box>

      </Stack>
    </Container>
  )
}

export default CreatePage