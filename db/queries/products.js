const { Query } = require("../models");

const getAllProducts = ( => {
    return Query("SELECT * FROM products");
});

const getOneProduct = (id) => {
    return Query("SELECT * FROM productw WHERE ProductID = ?", [id]);
};

const insertOneProduct = (ProductID) => {
    return Query("INSERT INTO product SET ?", [product]);
};

const updateOneProduct = (id, product) => {
    return Query("UPDATE products SET ? WHERE ProductID = ?", [id, products]);
};

const removeOneProduct = (id) => {
    return Query("DELETE FROM products WHERE ProductID = ?", [id]);
};

module.exports = {
    getAllProducts,
    getOneProduct,
    insertOneProduct,
    updateOneProduct,
    removeOneProduct
};

