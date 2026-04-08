export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Watch {
  image: string;
  brand: string;
  model: string;
  price: number;
  condition?: "new" | "excellent" | "good" | "fair";
  description?: string;
}

export interface Sellproducts {
  _id?: string;  

  avtar?: string;
  name: string;
  phone: number;

  address: Address[];
  watchDetails: Watch[];

  user: string;  

  createdAt?: string;
  updatedAt?: string;
}