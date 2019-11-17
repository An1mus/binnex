import url from 'url';

/**
 * Parses request intro data object, and puts it to the response
 * @param req
 * @param res
 * @param next
 */
function bodyParser (req, res, next) {
	const body = url.parse(req.url).query;

	res.body = body;
	next();
}

export default bodyParser;

