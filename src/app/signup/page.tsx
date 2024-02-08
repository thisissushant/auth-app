"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function SignUp() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-300">
      <h1 className="text-black-900">Sign Up</h1>
      <hr />
      <label htmlFor="name" className="sr-only ">
        username
      </label>
      <input
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border border-red-400 rounded-lg"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
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
        onClick={onSignup}
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border border-red-400 rounded-lg text-gray-700 hover:bg-red-400"
      >
        Sign Up
      </button>
      <Link href="/login" className="m-3 text-gray-600 hover:underline">
        Login
      </Link>
    </div>
  );
}
