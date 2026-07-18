const jwt = require("jsonwebtoken");

const authMiddleware =
async (
req,
res,
next
) => {

try {

let token =
req.cookies?.token;

if (!token) {

token =
req.headers.authorization
?.split(" ")[1];

}

if (!token) {

return res
.status(401)
.json({

message:
"Access Denied"

});

}

const decoded =
jwt.verify(
token,
process.env.JWT_SECRET
);

req.user =
decoded;

next();

}

catch (err) {

return res
.status(401)
.json({

message:
"Invalid Token"

});

}

};

module.exports =
authMiddleware;