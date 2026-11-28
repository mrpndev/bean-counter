/* 
	? Authentication middleware
	* we use it to inspect the token
	* we may grab data (like a user)
	* we let you in or kick you out
*/

const jwt = require("jsonwebtoken")
const User = require("../models/auth.model")
const JWT_KEY = process.env.JWT_KEY

const authenticateToken = async function(req, res, next) {
	// grab the token
	let authorization = req.headers.authorization

	// check if auth header exists
	if (!authorization) {
		return res.status(401).json({
			message: "Auth token required"
		})
	}

	// extract auth scheme and token
	authorization.includes("Bearer")
		? authorization = authorization.split(" ")[1]
		: authorization

	let payload

	// verify signature and expiry
	try {
		payload = jwt.verify(authorization, JWT_KEY)
	} catch(err) {
		console.log(err)
		return res.status(401).json({
			message: "Invalid or expired token"
		})
	}

	// look for a user
	const usr = await User.findByPk(payload.id)

	if (!usr) {
		return res.status(401).json({
			message: "User no longer exists"
		})
	}

	// attach authed user to the request
	req.user = usr

	// continue
	next()
}

module.exports = authenticateToken