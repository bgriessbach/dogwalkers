const _ = require('lodash');
const Q = require('q');
const dog_c = ['dog_id', 'name', 'category', 'comment'];

module.exports = {
	getDogs: getDogs,
	addDog: addDog,
	updateDog: updateDog,
	deleteDog: deleteDog
};

function getDogs(req, res, next) {
	let id = req.swagger.params.id.value;
	res.json();
};

function addDog(req, res, next) {
	let id = req.swagger.params.id.value;
	let dog = req.swagger.params.dog.value;
	res.json();
};

function updateDog(req, res, next) {
	let id = req.swagger.params.id.value;
	let dog = req.swagger.params.dog.value;
	res.json();
};

function deleteDog(req, res, next) {
	let id = req.swagger.params.id.value;
	let dog = req.swagger.params.dog.value;
	res.json();
};