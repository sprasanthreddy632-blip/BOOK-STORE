const mongoose = require("mongoose");

const wishlistSchema =
new mongoose.Schema({

    bookId: {

        type:
        mongoose
        .Schema
        .Types
        .ObjectId,

        ref: "Book",

        required: true

    },

    title: {

        type: String

    },

    itemImage: {

        type: String

    },

    userId: {

        type:
        mongoose
        .Schema
        .Types
        .ObjectId,

        ref: "User",

        required: true

    },

    userName: {

        type: String

    }

},
{
    timestamps: true
});

module.exports =
mongoose.model(
    "Wishlist",
    wishlistSchema
);