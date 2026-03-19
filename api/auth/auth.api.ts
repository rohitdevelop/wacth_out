import api from "../../lib/axios";
import {User,login} from "../../types/auth"


export const signupuser = async (data: User) =>{
    const res = await api.post("auth/signup",data)
    return res.data
}
export const signinuser = async (data: login) =>{
    const res = await api.post("auth/login",data)
    return res.data
}