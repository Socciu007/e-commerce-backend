const { Returns } = require("../models/model.js");

const getAllReturns = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const returns = await Returns.find();
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: returns,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailsReturn = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const refundForm = await Returns.findOne({
        _id: id,
      });

      if (refundForm === null) {
        resolve({
          status: "OK",
          message: "The refund form is not exist.",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: refundForm,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const createReturn = (newReturn) => {
  return new Promise(async (resolve, reject) => {
    const { returnReason, returnDescription, status, user, order, product } =
      newReturn;
    try {
      const createdReturn = await Returns.create({
        returnReason: returnReason,
        returnDescription: returnDescription,
        status,
        user: user,
        order: order,
        product: product,
      });
      if (createdReturn) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdReturn,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateReturn = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkReturn = await Returns.findOne({
        _id: id,
      });

      if (checkReturn === null || checkReturn.length < 1) {
        resolve({
          status: "OK",
          message: "The return is not exist.",
        });
      }

      const updatedReturn = await Returns.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedReturn,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllReturns,
  getDetailsReturn,
  createReturn,
  updateReturn,
};
