 
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
  name: string;
  email: string;
  role: string
}

 