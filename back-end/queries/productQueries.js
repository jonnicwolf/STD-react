const db = require('../db/dbConfig');

const getAllProducts = async () => {
    try {
        const allProducts = await db.any('SELECT * FROM products');
        return allProducts;
    }
    catch (e) {
        return e;
    };
};

const getProduct = async (itemType) => {
    try {
        const oneProduct = await db.any('SELECT * FROM products WHERE itemType=$1', itemType);
        return oneProduct;
    }
    catch (e) {
        return e;
    };
};

module.exports = {
    getAllProducts,
    getProduct
};