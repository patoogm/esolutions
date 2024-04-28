import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAddPostMutation } from '../services/products.services';
import { CreateNewProductBody } from '../types/types';
import { useState } from 'react';

export default function FormPropsTextFields() {
  const [inputValue, setInputValue] = useState('')

  const [createNewProduct] = useAddPostMutation();
  
  const handleInputChange = (event: { target: { value: any; }; }) => {
    setInputValue(event.target.value)
  }
  const addProducts = () => {
    const newListToCreate: CreateNewProductBody = {
      title: inputValue,
    };
    createNewProduct(newListToCreate);
    setInputValue('');
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={handleInputChange}
        />
      </div>
      <Button type='button' onClick={addProducts} variant="contained">Agregar Producto</Button>
    </Box>
  );
}