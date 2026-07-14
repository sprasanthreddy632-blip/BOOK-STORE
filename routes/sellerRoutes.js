const express = require("express");

const {
    SellerLogin,
    SellerRegister,
    AddBook,
    getBooks,
    deleteBooks,
    getSellerOrders
} = require("../controllers/SellerControllers");

const upload =
require("../middlewares/upload");

const authMiddleware =
require("../middlewares/authMiddleware");

const router =
express.Router();


// Authentication

router.post(
    "/slogin",
    SellerLogin
);

router.post(
    "/ssignup",
    SellerRegister
);


// Books

router.post(
    "/items",
    authMiddleware,
    upload.single("itemImage"),
    AddBook
);

router.get(
    "/getitem/:userId",
    authMiddleware,
    getBooks
);

router.delete(
    "/itemdelete/:id",
    authMiddleware,
    deleteBooks
);


// Orders

router.get(
    "/getsellerorders/:userId",
    authMiddleware,
    getSellerOrders
);


module.exports =
router;