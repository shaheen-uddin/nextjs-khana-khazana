"use server";

import { redirect } from "next/navigation";
import { createUser, updateFovourites } from "../dbQuery/queries";
import { findUserByCredentials } from "../dbQuery/queries";
import { revalidatePath } from "next/cache";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

async function doLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredentials(credential);
    return found;
  } catch (error) {
    throw error;
  }
}
async function addRemodeFavourite(useerId, recipeId) {
  try {
    console.log("recipe id in action", recipeId);
    await updateFovourites(useerId, recipeId);
  } catch (error) {
    throw error;
  }
  revalidatePath(`/details/${recipeId}`);
}

export { registerUser, doLogin, addRemodeFavourite };
