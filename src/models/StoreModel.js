const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    logo: { type: String, require: true },
    description: { type: String, require: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
