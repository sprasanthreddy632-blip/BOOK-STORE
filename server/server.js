const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const connectDB = require("./config/connect");

const userRoutes = require("./routes/userRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


// ================= MIDDLEWARE =================

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        methods: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ]
    })
);

app.use(cookieParser());

app.use(
    "/uploads",
    express.static("uploads")
);


// ================= ROUTES =================

app.use("/", userRoutes);

app.use("/seller", sellerRoutes);

app.use("/admin", adminRoutes);


// ================= HOME =================

app.get("/", (req, res) => {
    res.send("Book Store Backend Running");
});


// ================= START SERVER =================

const startServer = async () => {

    try {

        await connectDB();

        app.listen(PORT, () => {
            console.log(
                `Server started on port ${PORT}`
            );
        });

    }
    catch (err) {

        console.log(
            "Server startup failed:",
            err.message
        );

    }

};

startServer();