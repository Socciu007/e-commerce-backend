const StoreService = require("../services/StoreService");

const getAllStore = async (req, res) => {
  try {
    const response = await StoreService.getAllStore();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetailsStore = async (req, res) => {
  try {
    const storeID = req.params.id;
    const response = await StoreService.getDetailsStore(storeID);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const createStore = async (req, res) => {
  try {
    const { name, email, logo, description } = req.body;
    //Validation email address
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);

    if (!email || !name || !logo) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required.",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email.",
      });
    }
    const response = await StoreService.createStore(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const createCode = async (req, res) => {
  try {
    const response = await StoreService.sendCode();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateStore = async (req, res) => {
  try {
    const storeID = req.params.id;
    const data = req.body;
    //Validation email address
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(data.email);
    if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email.",
      });
    }
    const response = await StoreService.updateStore(storeID, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  getAllStore,
  getDetailsStore,
  createStore,
  updateStore,
  createCode,
};
