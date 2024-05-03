"use server";

import { redirect } from "next/navigation";
import { createUser, getUser, updateFovourites } from "../dbQuery/queries";
import { findUserByCredentials } from "../dbQuery/queries";
import { revalidatePath } from "next/cache";
import { transformObjectId } from "@/uitls/data-util";

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
async function addRemoveUser(useerId, recipeId) {
  try {
    // console.log("recipe id in action", recipeId);
    const user = await updateFovourites(useerId, recipeId);
    if (user) {
      return user;
    }
  } catch (error) {
    throw error;
  }
  revalidatePath(`/details/${recipeId}`);
}
async function findUser(id) {
  try {
    const user = await getUser(id);
    return user;
  } catch (error) {
    throw error;
  }
}

export { registerUser, doLogin, addRemoveUser, findUser };
