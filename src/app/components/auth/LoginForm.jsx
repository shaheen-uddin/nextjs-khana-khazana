"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { doLogin } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { setAuth } = useAuth();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = new FormData(evt.currentTarget);
      console.log(formData);
      const userFound = await doLogin(formData);
      if (userFound) {
        setAuth(userFound);
        router.push("/");
      } else {
        setError("No user found by the email/password or both.");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <h3 className="my-2 font-mono text-red-500">{error}</h3>

      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
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
