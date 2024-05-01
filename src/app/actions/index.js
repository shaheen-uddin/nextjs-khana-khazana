"use server";

import { redirect } from "next/navigation";
import { createUser } from "../dbQuery/queries";
import { findUserByCredentials } from "../dbQuery/queries";

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

export { registerUser, doLogin };
