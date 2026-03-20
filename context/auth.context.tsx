"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { signinuser, signupuser,logoutuser } from "../api/auth/auth.api";
import { User, Login, SafeUser } from "../types/auth";
interface AuthContextType {
  user: SafeUser | null;
  loading: boolean;
  handleSignup: (data: User) => Promise<void>;
  handleSignin: (data: Login) => Promise<void>;
  handleLogout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<SafeUser | null>(null);
  const [loading, setLoading] = useState(false);

  // Auto login
useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (storedUser && storedUser !== "undefined") {
    try {
      setUser(JSON.parse(storedUser));
    } catch (err) {
      console.log("Invalid JSON:", err);
      localStorage.removeItem("user"); // clean bad data
    }
  }
}, []);

  const handleSignup = async (data: User) => {
    setLoading(true);
    try {
      const res = await signupuser(data);
 
      setUser(res.user);
       localStorage.setItem("user", JSON.stringify(res.user));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignin = async (data: Login) => {
    setLoading(true);
    try {
      const res = await signinuser(data);

   
      setUser(res.user);
       localStorage.setItem("user", JSON.stringify(res.user));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };


const handleLogout = async () => {
  setLoading(true);
  try {
    await logoutuser(); 

    setUser(null);  
    
 localStorage.removeItem("user");

  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <AuthContext.Provider value={{ user, loading, handleSignup, handleSignin,handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
