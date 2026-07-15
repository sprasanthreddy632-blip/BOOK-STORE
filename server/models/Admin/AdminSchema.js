const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },

    userId: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "admin"

    }

});

module.exports =
mongoose.model(
    "Admin",
    AdminSchema
);