import BasicTable from './components/Table'
import { useGetProductsByNameQuery } from './services/products'

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data } = useGetProductsByNameQuery('')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  console.log(data)

  return (
    <div className="App">
      <BasicTable products={data?.products}/>
    </div>
  )
}