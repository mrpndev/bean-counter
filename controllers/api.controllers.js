const getAll = function (req, res) {
	res.status(201).json({});
};

const getByID = function (req, res) {
	const { id } = req.params;

	res.status(200).json({});
};

const getByFilter = function (req, res) {
	console.log(req.query);

	res.status(200).json({});
};

const addData = function (req, res) {
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
	
	res.status(200).json({});
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

module.exports = { getAll, getByID, getByFilter, addData, modifyData, deleteData };
