import Image from "next/image";
import Link from "next/link";

export default function RecipeCard() {
  return (
    <div className="card">
      <Link href="/details">
        <Image
          src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
          className="rounded-md"
          width={800}
          height={800}
          alt="Recipe Image"
        />
        <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ 5.0</span>
          <span>By: John Doe</span>
        </div>
      </Link>
    </div>
  );
}
