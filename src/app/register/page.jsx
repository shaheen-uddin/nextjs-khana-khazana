import RegistrationForm from "../components/auth/RegistrationForm";
import Link from "next/link";

export const metadata = {
  title: "Registration Page | KhanaKhazana",
  description: "It is a home page",
};

export default function RegistrationPage() {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign Up</h4>
        <RegistrationForm />

        <p className="text-center text-xs text-gray-600">Or</p>

        <Link
          href="login"
          className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
        >
          Login
        </Link>
      </div>
    </section>
  );
}
