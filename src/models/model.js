const mongoose = require("mongoose");

//Store
const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);
const Store = mongoose.model("Stores", storeSchema);
//Supply
const supplySchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stores",
      required: true,
    },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Supply = mongoose.model("Supply", supplySchema);
//Reviews
const reviewsSchema = new mongoose.Schema(
  {
    rating: { type: Number },
    comment: { type: String },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Reviews = mongoose.model("Reviews", reviewsSchema);
//Search
const searchManagementSchema = new mongoose.Schema(
  {
    keyword: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const SearchManagement = mongoose.model(
  "SearchManagement",
  searchManagementSchema
);
//Vouchers
const voucherSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    type: { type: String, required: true },
    remainingLimit: { type: Number, required: true },
    maxUser: { type: Number, required: true },
    discount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Vouchers = mongoose.model("Vouchers", voucherSchema);
//Returns
const returnsSchema = mongoose.Schema(
  {
    returnReason: { type: String, required: true },
    returnDescription: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Returns = mongoose.model("Returns", returnsSchema);
module.exports = {
  Reviews,
  SearchManagement,
  Returns,
  Supply,
  Vouchers,
  Store,
};
