 
export interface User {
  name: string;
  email: string;
  password: string;
  gender: "male" | "female" | "other"| "";
  age: number;
}
export interface UserForm {
  name: string;
  email: string;
  password: string;
  gender: "" | "male" | "female" | "other";
  age: string;  
}
export interface Address {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
}
export interface Login {
  email: string;
  password: string;
}
 
export interface SafeUser {
  _id: string;

  name: string;
  email: string;
  phone?: string;

  role: "user" | "admin";

  gender?: "male" | "female" | "other";
  age?: number;

  avatar?: string;

  isEmailVerified: boolean;
  isActive: boolean;

  address: {
    _id?: string;
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
  }[];

  createdAt: string;
  updatedAt: string;
}

 