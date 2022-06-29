import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

export default model("User", UserSchema);
