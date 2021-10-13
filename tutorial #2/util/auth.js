require("dotenv/config")
const jwt = require("jsonwebtoken")

/**
 * This is a middleware function that is used to authenticate using the json webs tokens
 * @param req the request from the user
 * @param res response object to send to the client
 * @param next the next function in the pipeline
 */
function auth(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).json({message: "Not authorized, no token header supplied."});
    try {
        const secretKey = process.env.SECRET_KEY
        req.user = jwt.verify(token, secretKey);
        next();
    } catch (error) {
        return req.status(500).json({message: "Invalid token"})
    }
}

module.exports = auth;
