"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  signinuser,
  signupuser,
  logoutuser,
  getMe as getMeApi,
  editeProfile,
  getAllUsers,
  deleteUser,
  deleteAddAddress,
} from "../api/auth/auth.api";
import { User, Login, SafeUser } from "../types/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: SafeUser | null;
  loading: boolean;
  handleSignup: (data: User) => Promise<void>;
  handleSignin: (data: Login) => Promise<void>;
  getSingleUser: () => Promise<void>;
  handleLogout: () => Promise<void>;
  updateProfile: (data: User) => Promise<void>;
  AllUserAdmin: () => Promise<void>;
  deleteUserAdmin: (id: string) => Promise<void>;
  allUsers: SafeUser[];
  deleteAddress: (addressId: string) => Promise<void>;
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
  const [allUsers, setAllUsers] = useState<SafeUser[]>([]); // 🔥 state for all users

  const router = useRouter();
  //  Auto login using /me
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
      setUser(res.user);
      toast.success(res.message);
      router.push("/login");
    } catch (error: any) {
      const err = error.response?.data;
      console.log(err);
      if (err?.errors?.length > 0) {
        toast.error(err.errors[0].message);
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

  const getSingleUser = async () => {
    try {
      const res = await getMeApi();
     
      return res.user;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const updateProfile = async (data: User) => {
    setLoading(true);
    try {
      const res = await editeProfile(data);
      setUser(res.user);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error editing profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const deleteAddress = async (addressId: string) => {
    setLoading(true);
    try {
      await deleteAddAddress(addressId);
      toast.success("Address deleted successfully");
    } catch (error) {
      console.error("Error deleting address:", error);
      toast.error("Failed to delete address");
    } finally {
      setLoading(false);
    }
  };

  const AllUserAdmin = async () => {
    try {
      setLoading(true);
      const res = await getAllUsers();
      setAllUsers(res.users);
      return res.users; 
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUserAdmin = async (id: string) => {
    try {      
      setLoading(true);
      await deleteUser(id);
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
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
      value={{
        user,
        loading,
        handleSignup,
        handleSignin,
        handleLogout,
        getSingleUser,
        updateProfile,
        AllUserAdmin,
        deleteUserAdmin,
        allUsers,
        deleteAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
