/* 
	? Rate Limiting
	* handling how many requests our app can accept
	* prevents DDoS attacks
	* it only handles a single IP addres
	* can be configured to handle different IP's
	* helmet is a dependency we can use instead
	
	? Building rate limiter
	* we need the following:
	* IP of where it's coming from
	* count of attempts
	* time constraint
	* reset after time constraint
	* res handling too many requests
*/

const requests = {}

const rateLimiter = function (req, res, next) {
	const ip = req.ip
	const now = Date.now()

	// if no record found, create a record with ip & time
	if (!requests[ip]) {
		requests[ip] = {
			count: 1,
			startTime: now
		}
		next()
	}

	// if record found, check if 10s passed and reset it
	if (now - requests[ip].startTime > 10000) {
		requests[ip] = {
			count: 1,
			startTime: now
		}
	}

	// if record exists AND < 10s, increment count
	requests[ip].count++

	// if record found AND < 10s AND > 3 attempts, BLOCK
	if (requests[ip].count > 3) {
		return res.status(429).json({
			message: "Too many requests"
		})
	}

	console.log(requests)

	next()
}

module.exports = rateLimiter