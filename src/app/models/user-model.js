import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    min: 2,
    max: 100,
  },
  password: {
    required: true,
    type: String,
    min: 3,
    max: 20,
  },
  favourites: {
    required: false,
    type: Array,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", schema);
