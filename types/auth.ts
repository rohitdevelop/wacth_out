 
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
  age: string; // ✅ string for input
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