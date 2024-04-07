const ReturnService = require("../services/ReturnService");

const getAllReturns = async (req, res) => {
  try {
    const response = await ReturnService.getAllReturns();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetailsReturn = async (req, res) => {
  try {
    const returnID = req.params.id;
    const response = await ReturnService.getDetailsReturn(returnID);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const createReturn = async (req, res) => {
  try {
    const { returnReason, returnDescription, status, user, order, product } =
      req.body;
    if (!user || !product || !order || !returnReason || !returnDescription) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required.",
      });
    }
    const response = await ReturnService.createReturn(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateReturn = async (req, res) => {
  try {
    const storeID = req.params.id;
    const data = req.body;
    const response = await ReturnService.updateReturn(storeID, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  getAllReturns,
  getDetailsReturn,
  createReturn,
  updateReturn,
};
