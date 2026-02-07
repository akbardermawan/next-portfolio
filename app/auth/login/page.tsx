"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "./slice/loginApiSlice";

export default function page() {
  const router = useRouter();
  const [loginUser, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await loginUser({
        email,
        password,
      }).unwrap();
      console.log("Login success:", result);
      router.push("/admin");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center bg-white min-h-screen">
      {/* BOX */}
      <div className="p-10 md:p-1 h-full shadow-2xl rounded-md flex items-center justify-center  md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 flex-col md:flex-row">
        {/* FORM CONTAINER */}
        <div className=" p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome Akbar</h1>
          <div className="rounded-full md:rounded-2xl overflow-hidden">
            <img src="/img/pf.jpg" alt="" className="w-full h-full" />
          </div>
        </div>
        {/* FORM */}
        <form
          onSubmit={handleLoginUser}
          className="flex flex-col gap-4 md:w-1/2 p-10"
        >
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="rounded-md border border-gray-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Password */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="rounded-md border border-gray-300 px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 rounded-md bg-blue-600 text-white py-2 text-sm font-semibold
            hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
