import { getRecipeCategories } from "@/app/dbQuery/queries";
import Link from "next/link";

export default async function RecipieCategories() {
  const categories = await getRecipeCategories();
  // console.log("categories: ", categories);
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {categories &&
          categories.map((category) => (
            <li key={category}>
              <Link
                href={`/category/${encodeURIComponent(category)}`}
                className="hover:font-medium text-black/75"
              >
                {category}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
