const Admin = require("../models/Admin/AdminSchema");
const Seller = require("../models/Seller/SellerSchema");
const Book = require("../models/Seller/BookSchema");
const MyOrders = require("../models/Users/MyOrders");
const User = require("../models/Users/UserSchema");

const jwt = require("jsonwebtoken");


// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
};


// ---------------- ADMIN LOGIN ----------------

const AdminLogin = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await Admin.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({
                status: "failed",
                message: "Invalid email or password"
            });
        }

        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            status: "success",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};


// ---------------- ADMIN REGISTER ----------------

const AdminRegister = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const exist = await Admin.findOne({ email });

        if (exist) {
            return res.status(400).json({
                message: "Already have an account"
            });
        }

        const newAdmin = await Admin.create({
            name,
            email,
            password
        });

        const token = generateToken(newAdmin._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(201).json({
            status: "success",
            msg: "Account Created",

            user: {
                id: newAdmin._id,
                name: newAdmin.name,
                email: newAdmin.email
            },

            token
        });

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// ---------------- GET USERS ----------------

const getUsers = async (req, res) => {

    try {

        const data = await User.find();

        res.status(200).json(data);

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// ---------------- DELETE USER ----------------

const deleteUser = async (req, res) => {

    try {

        const user =
            await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted"
        });

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// ---------------- DELETE ORDER ----------------

const deleteUserOrder = async (req, res) => {

    try {

        const order =
            await MyOrders.findByIdAndDelete(
                req.params.id
            );

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json({
            message: "Order deleted"
        });

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// ---------------- DELETE BOOK ----------------

const deleteUserItem = async (req, res) => {

    try {

        const book =
            await Book.findByIdAndDelete(
                req.params.id
            );

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted"
        });

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// ---------------- GET SELLERS ----------------

const getSellers = async (req, res) => {

    try {

        const data = await Seller.find();

        res.status(200).json(data);

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// ---------------- DELETE SELLER ----------------

const deleteSeller = async (req, res) => {

    try {

        const seller =
            await Seller.findByIdAndDelete(
                req.params.id
            );

        if (!seller) {
            return res.status(404).json({
                message: "Seller not found"
            });
        }

        res.status(200).json({
            message: "Seller deleted"
        });

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// ---------------- GET ALL ORDERS ----------------

const getAllOrders = async (req, res) => {

    try {

        const data =
            await MyOrders.find();

        res.status(200).json(data);

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


module.exports = {

    AdminLogin,
    AdminRegister,

    getUsers,
    deleteUser,

    deleteUserOrder,
    deleteUserItem,

    getSellers,
    deleteSeller,

    getAllOrders

};