"use client";

import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignOut() {
  const { auth, setAuth } = useAuth();
  // console.log(auth);
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/login");
  };
  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2">Hello, {auth?.firstName}</span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer" onClick={logout}>
            Logout
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}
