import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CreateNewProductBody, DataResponse } from '../types/types'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProductsByName: builder.query<DataResponse, string>({
      query: (brand) => `products/${brand}`,
    }),
    addPost: builder.mutation<CreateNewProductBody, Partial<CreateNewProductBody>>({
      query: (body) => ({
        url: `products/add`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetProductsByNameQuery, useAddPostMutation } = productsApi