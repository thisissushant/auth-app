"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Login() {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Logged in successfully!");
      router.push("/profile");
    } catch (error: any) {
      toast.error("Login Failed! Please enter valid details");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="">
      <div className="flex justify-end m-4">
        <ModeToggle />
      </div>
      <h1 className=" flex justify-start ml-6  md:text-8xl text-5xl text-red-500 mt-8">
        {loading ? "Please wait..." : "Login"}
      </h1>
      <label htmlFor="name" className="sr-only ">
        email
      </label>
      <div className="flex  md:flex-row flex-col items-center justify-center md:space-x-6 space-y-0 mt-16 ">
        <div className="flex justify-center items-center flex-col max-h-screen p-8">
          <Input
            className=" p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border rounded-lg"
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
            className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border rounded-lg"
            id="password"
            type="text"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          <Button
            onClick={onLogin}
            className="p-2 m-3 grid w-full max-w-sm items-center gap-1.5 border  rounded-lg"
          >
            Login
          </Button>
          <Link href="/" className="m-3  hover:text-green-500">
            Do not have an account! Sign Up
          </Link>
        </div>
        <Calendar
          mode="single"
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </div>
  );
}
