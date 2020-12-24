const shopService = require("../services/shop.service");

module.exports.create = async (req, res, next) => {
  try {
    const shop = await shopService.create(req.body);
    return res.status(200).send(shop);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    const shop = await shopService.getAll();
    return res.status(200).send(shop);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const shop = await shopService.getById({ _id: id });
    return res.status(200).send(shop);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.updateById = async (req, res, next) => {
  const id = req.params.id;
  const updatedBody = req.body;
  try {
    const shop = await shopService.updateById({ _id: id }, updatedBody, {
      new: true,
      runValidators: true,
    });
    console.log(shop);
    return res.status(200).send(shop);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
      const shop = await shopService.deleteById({ _id: id });
      return res.status(200).send(shop);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };