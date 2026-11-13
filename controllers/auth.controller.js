const register = function (req, res) {
	const { fullName, email, password, phone } = req.body;
	console.log(fullName, email, password, phone)

	res.status(201).json({})
};

const login = function (req, res) {
	const { email, password } = req.body;
	console.log("route hit")

	res.status(200).json({});
};

module.exports = { register, login };
