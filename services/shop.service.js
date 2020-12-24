const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.getAll = () => {
    return Shop.find();
}

module.exports.getById = (id) => {
    return Shop.findById(id);
}

module.exports.updateById = (id, updatedBody, runValidators) => {
    return Shop.findOneAndUpdate(id, updatedBody, runValidators);
}

module.exports.deleteById = (id) => {
    return Shop.findOneAndDelete(id);
}