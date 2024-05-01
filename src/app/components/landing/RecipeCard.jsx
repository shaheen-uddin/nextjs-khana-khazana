import getBlurData from "@/uitls/blur-generator";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeCard({ recipe }) {
  const { base64 } = await getBlurData(recipe?.thumbnail);
  return (
    <div className="card">
      <Link href={`/details/${recipe?._id.toString()}`}>
        <Image
          src={recipe?.thumbnail}
          className="rounded-md"
          width={800}
          height={800}
          alt="Recipe Image"
          placeholder="blur"
          blurDataURL={base64}
        />
        <h4 className="my-2">{recipe?.name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {recipe?.rating}.0</span>
          <span>By: {recipe?.author}</span>
        </div>
      </Link>
    </div>
  );
}
