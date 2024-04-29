export interface Products {
  category: string,
  description: string;
  brand: string;
  name: string;
  price: number;
  id: number;
}

export interface DataResponse {
  products: Products[]
}
export interface CreateNewProductBody {
  brand: string,
  price: string,
  category: string,
  description: string
}
