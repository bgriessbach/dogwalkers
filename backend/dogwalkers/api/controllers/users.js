const _ = require('lodash');
const Q = require('q');
const userinfo_c = ['walker_id', 'name', 'email', 'picture', 'creation_date'];
const Random = require("random-js");


module.exports = {
	getUser: getUser,
	createUser: createUser,
	deleteUser: deleteUser,
	getUserSchedules: getUserSchedules

};

function createUser(req, res, next) {
	let userinfo = req.swagger.params.userinfo.value;
	let r = new Random();
	let walker_id = r.string(14);
	console.log(walker_id);
	res.json({user_id: walker_id});
}

function deleteUser(req, res, next) {
	let id = req.swagger.params.id.value;

	res.json();
};

function getUser(req, res, next) {
	let id = req.swagger.params.id.value;

	res.json();
};

function getUserSchedules(req, res, next) {
	let id = req.swagger.params.id.value;

	res.json();	
}