/* 
	? Error Handler using Middleware Chaining
	* avoids repeated try/catch
	* avoids repeated calls
	* utilizes chained middleware functions to be reached
*/

const errorHandler = function(error, req, res, next) {
	console.error(error)
	res.status(500).json({
		message: `${error.message}`
	})
}

module.exports = errorHandler