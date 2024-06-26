const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    phone: { type: Number },
    role: { type: String, required: true, default: "customer" }, //seller, admin
    address: { type: String },
    avatar: { type: String },
    city: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
