import { Box, IconButton, Stack, Typography, Snackbar, Alert, Modal, Input, Button } from '@mui/material';
import { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useProductStore } from '../store/product';
import PropTypes from 'prop-types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ProductCard({ product }) {
    const { deleteProduct, updateProduct } = useProductStore();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleCloseSnackbar = () => setOpenSnackbar(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleDelete = async (pid) => {
        const { success } = await deleteProduct(pid);
        if (success) {
            setOpenSnackbar(true);
        }
    };

    const handleUpdate = async () => {
        const { success } = await updateProduct(product._id, updatedProduct);
        if (success) {
            setOpenSnackbar(true);
            handleCloseModal();
        }
    };

    return (
        <Box sx={{
            boxShadow: 3,
            borderRadius: 2,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6,
            }
        }}>
            <Box component={'img'} src={product.image} alt={product.name} sx={{ height: 200, width: '100%', objectFit: 'cover' }} />
            <Box sx={{ p: 2 }}>
                <Typography variant='h6' mb={1}>{product.name}</Typography>
                <Typography fontWeight={'bold'} color={'primary.main'} mb={2}>${product.price}</Typography>

                <Stack direction={'row'} spacing={1}>
                    <IconButton color='primary' onClick={handleOpenModal}>
                        <FaEdit />
                    </IconButton>
                    <IconButton color='error' onClick={() => handleDelete(product._id)}>
                        <FaTrash />
                    </IconButton>
                </Stack>
            </Box>

            {/* Modal for updating product */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box sx={style}>
                    <Typography variant="h6" mb={2}>Update {product.name}</Typography>
                    <Input 
                        fullWidth 
                        placeholder='Product Name' 
                        value={updatedProduct.name} 
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} 
                        sx={{ mb: 1 }}
                    />
                    <Input 
                        fullWidth 
                        placeholder='Price' 
                        type='number' 
                        value={updatedProduct.price} 
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} 
                        sx={{ mb: 1 }}
                    />
                    <Input 
                        fullWidth 
                        placeholder='Image URL' 
                        value={updatedProduct.image} 
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} 
                        sx={{ mb: 2 }}
                    />
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
                        <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
                    </Stack>
                </Box>
            </Modal>

            {/* Snackbar for success message */}
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" variant="filled">
                    Operation successful!
                </Alert>
            </Snackbar>
        </Box>
    );
}

// Prop Validation
ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
};

export default ProductCard;
