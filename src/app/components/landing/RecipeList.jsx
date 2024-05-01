import { getAllRecipes } from "@/app/dbQuery/queries";
import RecipeCard from "./RecipeCard";

export default async function RecipeList() {
  const recipies = await getAllRecipes();
  //console.log(recipies);
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        {recipies.length ? (
          recipies.map((recipe) => (
            <RecipeCard key={recipe._id.toString()} recipe={recipe} />
          ))
        ) : (
          <p>No recipe found.</p>
        )}
      </div>
    </div>
  );
}
