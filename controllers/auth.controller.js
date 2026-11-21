const User = require("../models/auth.model");

const register = async function (req, res) {
	const { fullName, email, password, phone } = req.body;
	// TODO: critical security defect REMOVE before completion
	console.log(fullName, email, password, phone);

	// ? call create on User schema & pass the data
	const newUser = await User.create({ fullName, email, password, phone });

	res.status(201).json({
		message: "User created",
		newUser
	});
};

const login = function (req, res) {
	const { email, password } = req.body;
	console.log("route hit");

	res.status(200).json({});
};

module.exports = { register, login };
