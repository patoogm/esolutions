import AddProductsForm from './components/Form';
import BasicTable from './components/Table'
import { useGetProductsByNameQuery } from './services/products.services'

export default function App() {
  const { data } = useGetProductsByNameQuery('')

  console.log(data?.products)

  return (
    <div className="App">
      <BasicTable products={data?.products || []}/>
      <AddProductsForm />
    </div>
  )
}