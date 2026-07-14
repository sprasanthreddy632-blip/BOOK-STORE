const User = require("../models/Users/UserSchema");
const Book = require("../models/Seller/BookSchema");
const MyOrders = require("../models/Users/MyOrders");
const WishlistItem = require("../models/Users/Wishlist");

const jwt = require("jsonwebtoken");


// Generate Token

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
};


// Login

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user =
        await User.findOne({ email });

        if (!user) {

            return res
            .status(404)
            .json({
                msg: "User not found"
            });

        }

        if (user.password !== password) {

            return res
            .status(401)
            .json({
                status: "Failed",
                message: "Invalid Password"
            });

        }

        const token =
        generateToken(user._id);

        res.cookie(
            "token",
            token,
            {
                httpOnly: true,
                secure:
                process.env.NODE_ENV ===
                "production",

                sameSite: "Lax",

                maxAge:
                24 *
                60 *
                60 *
                1000
            }
        );

        res.json({

            status: "Success",

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },

            token

        });

    }

    catch (err) {

        res
        .status(500)
        .json({
            error: "Server Error"
        });

    }

};


// Signup

const signupUser =
async (req, res) => {

try {

const {
name,
email,
password
} = req.body;


const exist =
await User.findOne({
email
});


if (exist) {

return res
.status(400)
.json({
msg:
"Already have an Account"
});

}


const newUser =
await User.create({

name,
email,
password

});


const token =
generateToken(
newUser._id
);


res.cookie(
"token",
token,
{
httpOnly: true,
secure:
process.env.NODE_ENV
===
"production",

sameSite:
"Lax",

maxAge:
24 *
60 *
60 *
1000
}
);


res
.status(201)
.json({

msg:
"Account Created",

user: {

id:
newUser._id,

name:
newUser.name,

email:
newUser.email

},

token

});

}

catch (err) {

res
.status(500)
.json({

error:
"Signup Failed"

});

}

};


// Get Books

const getItems =
async (
req,
res
) => {

try {

const items =
await Book.find();

res.json(
items
);

}

catch (
err
) {

console.log(
err
);

res
.status(500)
.send(
"Server Error"
);

}

};


// Single Book

const getSingleItem =
async (
req,
res
) => {

try {

const item =
await Book
.findById(
req.params.id
)
.populate(
"sellerId",
"name email"
);

if (
!item
) {

return res
.status(404)
.json({

error:
"Item not found"

});

}

res.json(
item
);

}

catch (
err
) {

res
.status(500)
.json({

error:
"Internal server error"

});

}

};


// Create Order

const createUserOrder =
async (
req,
res
) => {

try {

const {

flatno,
city,
state,
pincode,
totalamount,
BookingDate,
description,
Delivery,
userId,
userName,
booktitle,
bookauthor,
bookgenre,
itemImage

}
=
req.body;


const order =
new MyOrders({

flatno,
city,
state,
pincode,
totalamount,
BookingDate,
description,
Delivery,
userId,
userName,
booktitle,
bookauthor,
bookgenre,
itemImage

});


await order.save();

res
.status(201)
.json(
order
);

}

catch (
err
) {

res
.status(400)
.json({

error:
"Failed to create order"

});

}

};


// Get User Orders

const getUserOrders =
async (
req,
res
) => {

try {

const orders =
await MyOrders
.find({

userId:
req.params.userId

});

res.json(
orders
);

}

catch (
err
) {

res
.status(500)
.json({

error:
"Failed to fetch orders"

});

}

};


// Get All Wishlist

const getWishList =
async (
req,
res
) => {

try {

const wishlistItems =
await WishlistItem.find();

res.json(
wishlistItems
);

}

catch (
err
) {

res
.status(500)
.send(
"Server Error"
);

}

};


// Get User Wishlist

const getUserWishlist =
async (
req,
res
) => {

try {

const wishlist =
await WishlistItem
.find({

userId:
req.params.userId

})
.populate(
"bookId"
);

res.json(
wishlist
);

}

catch (
err
) {

res
.status(500)
.json({

error:
"Failed to fetch wishlist"

});

}

};


// Add Wishlist

const addWishlistItem =
async (
req,
res
) => {

try {

const {

bookId,
title,
itemImage,
userId,
userName

}
=
req.body;


const existing =
await WishlistItem
.findOne({

bookId,
userId

});


if (
existing
) {

return res
.status(400)
.json({

error:
"Item already exists"

});

}


const item =
new WishlistItem({

bookId,
title,
itemImage,
userId,
userName

});


await item.save();

res
.status(201)
.json(
item
);

}

catch (
err
) {

res
.status(500)
.json({

error:
"Failed to add wishlist"

});

}

};


// Remove Wishlist

const removeWishlistItem =
async (
req,
res
) => {

try {

await WishlistItem
.findByIdAndDelete(
req.params.itemId
);

res.json({

msg:
"Item removed"

});

}

catch (
err
) {

res
.status(500)
.json({

error:
"Failed to remove item"

});

}

};


module.exports = {

loginUser,
signupUser,
getItems,
getSingleItem,
createUserOrder,
getUserOrders,
getWishList,
getUserWishlist,
addWishlistItem,
removeWishlistItem

};