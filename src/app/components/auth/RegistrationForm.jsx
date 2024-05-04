import { registerUser } from "@/app/actions";

export const metadata = {
  title: "Registration Page | Khanakhazana",
  description: "This a registration page of Khanakhazana application",
};

export default function RegistrationForm() {
  return (
    <form className="login-form" action={registerUser}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="firstName" id="fname" required minlength="2" maxlength="60"/>
      </div>

      <div>
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lastName" id="lname" required  minlength="2" maxlength="60"/>
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" required/>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Create Account
      </button>
    </form>
  );
}
