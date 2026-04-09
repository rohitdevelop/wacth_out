"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  signinuser,
  signupuser,
  logoutuser,
  getMe as getMeApi,
} from "../api/auth/auth.api";
import { User, Login, SafeUser } from "../types/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
  const [loading, setLoading] = useState(true); // 🔥 initially true
  
  const router = useRouter();
  // 🔥 Auto login using /me
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await getMeApi();
        setUser(res.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    
    };

    fetchUser();
  }, []);

  const handleSignup = async (data: User) => {
    setLoading(true);
    try {
      const res = await signupuser(data);
      console.log(res);
      setUser(res.user);
      toast.success(res.message);
      router.push("/login");
    } catch (error: any) {
      const err = error.response?.data;
      console.log(err);
      if (err?.errors?.length > 0) {
        toast.error(err.errors[0].message); // 👈 first error
      } else {
        toast.error(err?.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignin = async (data: Login) => {
    setLoading(true);
    try {
      const res = await signinuser(data);

      setUser(res.user);
      toast.success(res.message);

      // ✅ direct redirect (NO useEffect here)
      if (res.user?.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      const err = error.response?.data;

      if (err?.errors?.length > 0) {
        toast.error(err.errors[0].msg);
      } else {
        toast.error(err?.message || "Something went wrong");
      }

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
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, handleSignup, handleSignin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
