import Link from "next/link";
import Image from "next/image";
import SignOut from "./auth/SignOut";
import LogoImg from "@/../public/logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <img
            src="/logo.png"
          /*   width={200}
            height={200} */
            alt="logo"
            className="object-cover h-[40px]"
          />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="/">Home</Link>
          </li>

          <li className="py-2">
            <Link href="/recipe">Recipe</Link>
          </li>

          <li className="py-2">
            <Link href="/about">About us</Link>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <SignOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}
