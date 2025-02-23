import { Box, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

function ProductCard({product}) {
  
    return (
    <Box sx={{boxShadow:'3',
         borderRadius:'2',
         overflow:'hidden', 
         transition:'all 0.3s ease', 
         '&:hover':{
            transform: 'translateY(-5px)',
            boxShadow:6,
    }}}
    >
        <Box component={'img'} src={product.image} alt={product.name} sx={{height:48, width:'100%', objectFit:'cover'}}/>
        <Typography variant='h3' fontSize={'md'} mb={2}>
            {product.name}
        </Typography>

        <Typography fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
            ${product.price}
        </Typography>

        <Stack direction={'row'} spacing={2}>
            <IconButton color='blue' />
            <IconButton color='blue'/>
        </Stack>

    </Box>
  )
}

export default ProductCard