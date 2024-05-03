import { FaAt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 md:py-8 mt-8">
      <div className="container">
        <p className="text-center text-sm text-black/70 dark:text-[#EEEEEE]/60">
          Copyright{" "}
          <span>
            <FaAt className="inline-block" /> 2024
          </span>{" "}
          | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
}
