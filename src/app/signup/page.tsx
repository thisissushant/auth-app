"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SignUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Sign Up Successfully", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Sign Up Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center p-8 m-8 ">
      <h1 className="text-black-900">
        {loading ? "Processing..." : "Sign Up"}
      </h1>
      <hr />
      <label htmlFor="name" className="sr-only ">
        username
      </label>
      <Input
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1 border rounded-lg"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
      <label htmlFor="name" className="sr-only ">
        email
      </label>
      <Input
        className=" p-2 m-3 grid w-full max-w-sm items-center gap-1 border  rounded-lg"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="name" className="sr-only ">
        password
      </label>
      <Input
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1 border "
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <Button
        onClick={onSignup}
        className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border rounded-lg"
      >
        {buttonDisabled ? "Fill the above Information!" : "Sign Up"}
      </Button>
      <Link href="/login" className="m-3  hover:text-green-500">
        Already have an account Login
      </Link>
    </div>
  );
}
