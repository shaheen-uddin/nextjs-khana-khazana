import Link from "next/link";
export const metadata = {
  title: "Not Found Page  | LWS ShopCenter",
  description: "This is the  not-found page of LWS shopCenter app",
};

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        className="bg-orange-400 rounded-md hover:bg-orange-500 text-xl shadow-md text-white px-4"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
