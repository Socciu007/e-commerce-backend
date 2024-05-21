const mongoose = require("mongoose");

//Code
const codeSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, length: 6, trim: true },
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);
const Code = mongoose.model("Code", codeSchema);
//Store
const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      lowercase: true,
      trim: true,
    },
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
    status: { type: String, required: true, default: "pending" }, //processing, completed, pending
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

//Blogs
const blogsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  { timestamps: true }
);
const Blogs = mongoose.model("Blogs", blogsSchema);

module.exports = {
  Reviews,
  SearchManagement,
  Returns,
  Supply,
  Vouchers,
  Store,
  Code,
  Blogs,
};
