const express = require("express");

const {
    loginUser,
    signupUser,
    getItems,
    getSingleItem,
    createUserOrder,
    getUserOrders,
    getUserWishlist,
    getWishList,
    addWishlistItem,
    removeWishlistItem
} = require("../controllers/UsersControllers");

const authMiddleware =
require("../middlewares/authMiddleware");

const router = express.Router();


// Authentication

router.post(
    "/login",
    loginUser
);

router.post(
    "/signup",
    signupUser
);


// Books

router.get(
    "/item",
    getItems
);

router.get(
    "/item/:id",
    getSingleItem
);


// Orders

router.post(
    "/userorder",
    authMiddleware,
    createUserOrder
);

router.get(
    "/getorders/:userId",
    authMiddleware,
    getUserOrders
);


// Wishlist

router.get(
    "/wishlist",
    authMiddleware,
    getWishList
);

router.get(
    "/wishlist/:userId",
    authMiddleware,
    getUserWishlist
);

router.post(
    "/wishlist/add",
    authMiddleware,
    addWishlistItem
);

router.post(
    "/wishlist/remove/:itemId",
    authMiddleware,
    removeWishlistItem
);


module.exports = router;