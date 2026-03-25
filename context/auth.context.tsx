"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  signinuser,
  signupuser,
  logoutuser,
  getMe as getMeApi,
} from "../api/auth/auth.api";
import { User, Login, SafeUser } from "../types/auth";

interface AuthContextType {
  user: SafeUser | null;
  loading: boolean;
  handleSignup: (data: User) => Promise<void>;
  handleSignin: (data: Login) => Promise<void>;
  handleLogout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<SafeUser | null>(null);
  const [loading, setLoading] = useState(true); // 🔥 initially true

  // 🔥 Auto login using /me
  useEffect(() => {
    const fetchUser = async () => {
      try {
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
      setUser(res.user);
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