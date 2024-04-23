import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Products } from '../types/types'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProductsByName: builder.query<Products, string>({
      query: (brand) => `products/${brand}`,
    }),
  }),
})

export const { useGetProductsByNameQuery } = productsApi