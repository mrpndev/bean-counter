const User = require("../models/auth.model");
// import bcrypt
const bcrypt = require("bcryptjs");
const SALT = Number(process.env.SALT);
// import jsonwebtoken
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const register = async function (req, res) {
	const { fullName, email, password, phone } = req.body;
	// TODO: critical security defect REMOVE before completion
	console.log(fullName, email, password, phone);

	const hashedPassword = await bcrypt.hash(password, SALT);

	// ? call create on User schema & pass the data
	const newUser = await User.create({
		fullName,
		email,
		password: hashedPassword,
		phone,
	});

	const token = jwt.sign(
		{ id: newUser.id },
		JWT_KEY,
		// options (expiry)
		{ expiresIn: "24h" }
	);

	res.status(201).json({
		message: `${newUser.email} created`,
		token,
	});
};

const login = async function (req, res) {
	const { email, password } = req.body;

	// find a user matching email in our db
	const usr = await User.findOne({ where: { email } });

	if (!usr) {
		throw new Error("Invalid username or password");
	}

	// check if hash matches
	const verifyPwd = await bcrypt.compare(password, usr.password);

	if (!verifyPwd) {
		throw new Error("Invalid username or password");
	}

	const token = jwt.sign(
		{ id: usr.id },
		JWT_KEY,
		// options (expiry)
		{ expiresIn: "24h" }
	);

	res.status(200).json({
		message: `${usr.email} logged in`,
		token
	});
};

module.exports = { register, login };

/* 
	? Authentication vs Authorization
	* Authentication
		* user identity thru credentials or token
		* ex: username and password
		* who are you?
	* Authorization
		* used to perform an action
		* what are you allowed to do?
*/

/* 
	? Hashing
	* not encryption because it's irreversible
	* one-way operation
	* designed to be verified later
	* salt - random data preventing same passwords generating same hash
	* salt rounds - computee cost of generating bcrypt hash
	* rainbow table - precomputed password hash used to crack passwords
	* brute force - repeatedly guessing passwords
	* comparison - salt + cost stored in hash to verify authenticity
*/

/* 
	? JSON Web Token (JWT)
	* stateless (does not need to be stored)
	* allows us to store information
	* encrypted using a base64 url encoded secret key
	! it does not PROTECT data, should NEVER be used to store sensitive info
	* authenticity check for data
	* verifies that the data came from us
	* used for authorization process
	* can be used across resources provided the secret key is shared
*/
