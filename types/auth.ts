 export interface User {
  name: string;
  email: string;
  password: string;
  gender: "male" | "female" | "other";
  age: number;
}


export interface login {
  email: string;
  password: string;
}
 