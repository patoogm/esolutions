import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik, Field, Form } from 'formik';
import { useAddPostMutation } from '../services/products.services';
import { CreateNewProductBody } from '../types/types';

export default function AddProductsForm() {
  const [createNewProduct] = useAddPostMutation();

  const addProducts = (values: CreateNewProductBody) => {
    const newListToCreate: CreateNewProductBody = {
      brand: values.brand,
      price: values.price,
      category: values.category,
      description: values.description,
    };
    createNewProduct(newListToCreate);
  };

  return (
    <>
      <h2>Agregar nuevo Producto</h2>
      <Formik
        initialValues={{
          brand: '',
          price: '',
          category: '',
          description: '',
        }}
        onSubmit={(values, { resetForm }) => {
          addProducts(values);
          resetForm();
        }}
      >
        <Form>
          <Box component="div" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <div>
              <Field
                as={TextField}
                required
                id="brand"
                name="brand"
                label="Brand"
              />
              <Field
                as={TextField}
                required
                id="price"
                name="price"
                label="Price"
                type="number"
              />
              <Field
                as={TextField}
                required
                id="category"
                name="category"
                label="Category"
              />
              <Field
                as={TextField}
                required
                id="description"
                name="description"
                label="Description"
              />
            </div>
            <Button type='submit' variant="contained">Agregar Producto</Button>
          </Box>
        </Form>
      </Formik>
    </>
  );
}
