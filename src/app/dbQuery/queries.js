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
  const recipe = await recipeModel.findById(id);
  return recipe;
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

export {
  getAllRecipes,
  getRecipeById,
  getRecipeCategories,
  getRecipesByCategory,
  createUser,
  findUserByCredentials,
};
