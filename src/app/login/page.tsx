"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-300">
      <h1 className="text-black-900">Login</h1>
      <hr />
      <label htmlFor="name" className="sr-only ">
        email
      </label>
      <input
        className=" p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border border-red-400 rounded-lg"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="name" className="sr-only ">
        password
      </label>
      <input
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border border-red-400 rounded-lg"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
        onClick={onLogin}
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border border-red-400 rounded-lg text-gray-700 hover:bg-red-400"
      >
        Login
      </button>
      <Link href="/signup" className="m-3 text-gray-600 hover:underline">
        Sign Up
      </Link>
    </div>
  );
}
