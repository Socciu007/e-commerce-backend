const Store = require("../models/StoreModel");

const getAllStore = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const stores = await Store.find();
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: stores,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailsStore = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const store = await Store.findOne({
        _id: id,
      });

      if (store === null) {
        resolve({
          status: "OK",
          message: "The store is not exist.",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: store,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const createStore = (newStore) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, logo, description, user } = newStore;
    try {
      const checkStore = await Store.findOne({
        name: name,
      });
      if (checkStore !== null) {
        resolve({
          status: "ERR",
          message: "The store is already.",
        });
      }

      const createdStore = await Store.create({
        name,
        email,
        logo,
        description,
        user: user,
      });
      if (createdStore) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdStore,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateStore = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkStore = await Store.findOne({
        _id: id,
      });

      if (checkStore === null) {
        resolve({
          status: "OK",
          message: "The store is not exist.",
        });
      }

      const updatedStore = await Store.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedStore,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllStore,
  getDetailsStore,
  createStore,
  updateStore,
};
