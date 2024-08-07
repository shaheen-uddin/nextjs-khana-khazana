import mongoose from "mongoose";
import { recipeModel } from "../models/recipe-model";
import connectMongo from "../dbConnect/connectMongo";
import { userModel } from "../models/user-model";
import { transformObjectId } from "@/uitls/data-util";

async function getAllRecipes() {
  await connectMongo();
  const allRecipes = await recipeModel.find().lean();
  return allRecipes;
}

async function getRecipeById(id) {
  await connectMongo();
  if (!mongoose.Types.ObjectId.isValid(id)) return false;
  const recipe = await recipeModel.findById(id);
  if (recipe) return recipe;

  return null;
}

async function getRecipeCategories() {
  const allRecipes = await getAllRecipes();
  const categories = await allRecipes.map((recipe) => recipe.category);
  const uniqueCategories = await [...new Set(categories)];

  return uniqueCategories;
}
async function getRecipesByCategory(categoryName) {
  await connectMongo();
  const recipiesByCategory = await recipeModel.find({ category: categoryName });
  return recipiesByCategory;
}

async function createUser(user) {
  await connectMongo();
  return await userModel.create(user);
}

async function findUserByCredentials(credential) {
  await connectMongo();
  const user = await userModel.findOne(credential).lean();
  if (user) {
    return transformObjectId(user);
  }
  return null;
}

async function updateFovourites(userId, recipeId) {
  await connectMongo();
  const user = await userModel.findById(userId);
  //console.log("found user: ", user);
  // console.log("recipe id, ", typeof recipeId);

  if (user) {
    let recipeIdExists = user.favourites.includes(recipeId);
    // console.log("recipie status, ", recipeIdExists);
    if (recipeIdExists) {
      const index = user.favourites.indexOf(recipeId);
      if (index) {
        user.favourites.splice(index, 1);
      }
      //  console.log("after recipe id removal, ", user.favourites);
    } else {
      user.favourites.push(recipeId);
      // console.log("recipie status, else block ", recipeId);
    }
    const updatedUser = await user.save();
    if (updatedUser) {
      const cleanObject = transformObjectId(updatedUser);
      // console.log("updated user: db :", updatedUser);
      // console.log("Clean Obj: ", transformObjectId(cleanObject._doc));
      return transformObjectId(cleanObject._doc);
    }
  }
}
async function getUser(id) {
  await connectMongo();
  const user = await userModel.findById(id).lean();
  return transformObjectId(user);
}
export {
  getAllRecipes,
  getRecipeById,
  getRecipeCategories,
  getRecipesByCategory,
  createUser,
  findUserByCredentials,
  updateFovourites,
  getUser,
};
