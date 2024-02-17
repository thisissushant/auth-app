"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Profile() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error("Unable to logout");
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-300">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="p-1 rounded bg-green-500">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border border-red-400 rounded-lg text-gray-700 hover:bg-red-400"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border border-red-400 rounded-lg text-gray-700 hover:bg-red-400"
      >
        User Details
      </button>
    </div>
  );
}
