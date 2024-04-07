const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    phone: { type: Number, required: true },
    role: { type: String, required: true, default: "customer" },
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
