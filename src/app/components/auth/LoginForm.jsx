"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { doLogin } from "@/app/actions";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = new FormData(evt.currentTarget);
      console.log(formData);
      const userFound = await doLogin(formData);
      if (userFound) {
        router.push("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="my-2 text-red-500">{error}</div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
        >
          Login
        </button>
      </form>
    </>
  );
}
