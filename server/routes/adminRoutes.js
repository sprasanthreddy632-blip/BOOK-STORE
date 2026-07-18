const express = require("express");

const {
    AdminLogin,
    AdminRegister,
    getUsers,
    deleteUser,
    deleteUserOrder,
    deleteUserItem,
    getAllOrders,
    deleteSeller,
    getSellers
} = require("../controllers/AdminControllers");

const authMiddleware =
require("../middlewares/authMiddleware");

const router = express.Router();


// Authentication

router.post("/alogin", AdminLogin);

router.post("/asignup", AdminRegister);


// Users

router.get(
    "/users",
    authMiddleware,
    getUsers
);

router.delete(
    "/userdelete/:id",
    authMiddleware,
    deleteUser
);

router.delete(
    "/userorderdelete/:id",
    authMiddleware,
    deleteUserOrder
);

router.delete(
    "/useritemdelete/:id",
    authMiddleware,
    deleteUserItem
);


// Sellers

router.get(
    "/sellers",
    authMiddleware,
    getSellers
);

router.delete(
    "/sellerdelete/:id",
    authMiddleware,
    deleteSeller
);


// Orders

router.get(
    "/orders",
    authMiddleware,
    getAllOrders
);


module.exports = router;