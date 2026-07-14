const Seller = require("../models/Seller/SellerSchema");
const Book = require("../models/Seller/BookSchema");
const MyOrders = require("../models/Users/MyOrders");

const jwt = require("jsonwebtoken");


// Generate Token

const generateToken = (id) => {

    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

};


// ================= LOGIN =================

const SellerLogin = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        const seller =
        await Seller.findOne({
            email
        });

        if (!seller) {

            return res
            .status(404)
            .json({
                msg: "Seller not found"
            });

        }

        if (
            seller.password !==
            password
        ) {

            return res
            .status(401)
            .json({
                status: "Failed",
                message: "Invalid Password"
            });

        }

        const token =
        generateToken(
            seller._id
        );

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

            seller: {
                id: seller._id,
                name: seller.name,
                email: seller.email
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


// ================= REGISTER =================

const SellerRegister =
async (req, res) => {

try {

const {
name,
email,
password
}
=
req.body;

const exist =
await Seller.findOne({
email
});

if (exist) {

return res
.status(400)
.json({
msg:
"Already have account"
});

}

const newSeller =
await Seller.create({

name,
email,
password

});

const token =
generateToken(
newSeller._id
);

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

res
.status(201)
.json({

msg:
"Seller Registered",

seller: {

id:
newSeller._id,

name:
newSeller.name,

email:
newSeller.email

},

token

});

}

catch (err) {

res
.status(500)
.json({

error:
"Registration Failed"

});

}

};


// ================= ADD BOOK =================

const AddBook =
async (req, res) => {

try {

const {

title,
author,
genre,
price,
description,
sellerId,
sellerName

}
=
req.body;


const itemImage =
req.file
?
req.file.path
:
"";


const book =
new Book({

title,
author,
genre,
price,
description,

sellerId,
sellerName,

itemImage

});


await book.save();


res
.status(201)
.json({

msg:
"Book Added",

book

});

}

catch (err) {

console.log(err);

res
.status(500)
.json({

error:
"Failed to add book"

});

}

};


// ================= GET BOOKS =================

const getBooks =
async (req, res) => {

try {

const {
userId
}
=
req.params;

const books =
await Book.find({

sellerId:
userId

});

res.json(
books
);

}

catch (err) {

res
.status(500)
.json({

error:
"Failed to fetch books"

});

}

};


// ================= DELETE BOOK =================

const deleteBooks =
async (req, res) => {

try {

const {
id
}
=
req.params;

const book =
await Book
.findByIdAndDelete(
id
);

if (!book) {

return res
.status(404)
.json({

error:
"Book not found"

});

}

res.json({

msg:
"Book deleted"

});

}

catch (err) {

res
.status(500)
.json({

error:
"Delete failed"

});

}

};


// ================= GET SELLER ORDERS =================

const getSellerOrders =
async (
req,
res
) => {

try {

const {
userId
}
=
req.params;

const orders =
await MyOrders.find({

userId

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


module.exports = {

SellerLogin,
SellerRegister,
AddBook,
getBooks,
deleteBooks,
getSellerOrders

};