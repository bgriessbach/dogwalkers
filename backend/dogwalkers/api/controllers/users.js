const _ = require('lodash');
const Q = require('q');


module.exports = {
	getUsers: getUsers

};

function getUsers(req, res, next) {
	let id = req.swagger.params.id.value;

	res.json();
};