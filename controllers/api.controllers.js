const Recipe = require("../models/api.model")

const getData = function (req, res) {
	res.status(201).json({});
};

const getByID = function (req, res) {
	const { id } = req.params;

	res.status(200).send(`id route hit ${id}`);
};

const addData = function (req, res) {
	/* 
		? Challenge
		* utilize sequelize to add a recipe into the datbase
		* you will need to import your model
		* you will need to reconfigure addData method to be async
		* you will need to call create on the data
		* return a response with message: recipe created and recipe itself
		* hit the endpoint with Postman
		* check your recipes table to ensure the recipe saved
	*/

	const {
		coffeeName,
		roaster,
		origin,
		roast,
		brewMethod,
		grinder,
		grindSize,
		doseIn,
		doseOut,
		time,
	} = req.body;

	console.log(req.body)
	
	res.status(201).json({});
};

const modifyData = function (req, res) {
	
	const { id } = req.params
	
	const {
		coffeeName,
		roaster,
		origin,
		roast,
		brewMethod,
		grinder,
		grindSize,
		doseIn,
		doseOut,
		time,
	} = req.body;
	
	res.status(200).json({});
};

const deleteData = function (req, res) {
	console.log(req.params);

	res.status(200).json({});
};

module.exports = { getData, getByID, addData, modifyData, deleteData };
