"use client";
import axios from "axios";
import Link from "next/link";
import toast, { Toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-300">
      <h1>Profile</h1>
      <button
        onClick={logout}
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border border-red-400 rounded-lg text-gray-700 hover:bg-red-400"
      >
        Logout
      </button>
    </div>
  );
}
