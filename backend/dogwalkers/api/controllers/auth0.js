const _ = require('lodash');
const Q = require('q');

module.exports = {
	getUserAuth0: getUserAuth0
}

function getUserAuth0 (req, res, next) {
	let auth0_id = req.swagger.params.auth0_id.value;
	let tennant = req.swagger.params.tennant.value;
	res.json();
}
