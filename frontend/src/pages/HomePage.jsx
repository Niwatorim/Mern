import {Container, Grid2, Stack, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import { useEffect } from 'react';

function HomePage() {
  const {fetchProducts, products} = useProductStore();
  useEffect(()=>
  {
    fetchProducts();
  },[fetchProducts]);
  console.log('products:',products); 

  return (

    <Container>
      <Stack direction={'column'} spacing={8} >
        <Typography
          fontSize={'30'}
          fontWeight={'bold'}
          variant="p"
          sx={{
            fontSize: { xs: 28, md: 22 },
            backgroundColor: "primary",
            backgroundImage: `linear-gradient(45deg,rgb(30, 184, 219),rgb(27, 31, 229))`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}> Current Products
          </Typography>

          <Grid2 container columns={{
            xs:1,
            md:2,
            lg:3
          }} //amount of columns per size
          >
            {products.map((products)=>(
              <ProductCard key={products._id} product={product} />
            ))}
          </Grid2>
          <Typography fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color='gray.500'>
            No Products found {' '}
            <Link href='/create'>
              <Typography color='blue.500' sx={{textDecoration:'none', '&:hover':{textDecoration:'underline'}}}>
                Create a product
              </Typography>
            </Link>
          </Typography>



      </Stack>
    </Container>
  
  )
}

export default HomePage