"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { SignUp } from "@/app/signup/page";
export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <div className="">
        <div className="flex justify-end m-4">
          <ModeToggle />
        </div>
        <div className="flex justify-start ml-6  md:text-8xl text-5xl text-red-500 mt-8">
          <h1>Authentication</h1>
        </div>
        <div className="flex  md:flex-row flex-col items-center justify-center md:space-x-6 space-y-0 ">
          <SignUp />
          <Calendar
            mode="single"
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </>
  );
}
