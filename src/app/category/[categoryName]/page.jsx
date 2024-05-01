import React from "react";
import RecipeCard from "../../components/landing/RecipeCard";
import { getRecipesByCategory } from "@/app/dbQuery/queries";

export default async function CategoryPage({ params: { categoryName } }) {
  let category = decodeURIComponent(categoryName);
  const recipes = await getRecipesByCategory(category);

  console.log("category Name: ", category);
  // console.log(recipes);
  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">{category}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {recipes.length ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe._id.toString()} recipe={recipe} />
            ))
          ) : (
            <p> No recipe found by category, {category}</p>
          )}
        </div>
      </div>
    </section>
  );
}
