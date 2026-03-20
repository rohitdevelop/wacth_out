import api from "../../lib/axios";
import {User,Login} from "../../types/auth"


export const signupuser = async (data: User) =>{
    const res = await api.post("auth/signup",data)
    return res.data
}
export const signinuser = async (data: Login) =>{
    const res = await api.post("auth/login",data)
    return res.data
}
export const logoutuser = async () =>{
   await api.post("auth/logoutuser")
}