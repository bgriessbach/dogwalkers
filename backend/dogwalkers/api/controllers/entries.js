const _ = require('lodash');
const Q = require('q');
const entry_c = ["user_id", "date", "start_time", "end_time", "out", "comment"];

module.exports = {
	getEntries: getEntries,
	updateEntry: updateEntry,
	createEntry: createEntry
};


function updateEntry (req, res, next) {
	let id = req.swagger.params.id.value;
	let entry = req. swagger.params.entry.value;
	res.json();	
}

function getEntries (req, res, next) {
	let id = req.swagger.params.id.value;
	res.json();		
}

function createEntry (req, res, next) {
	let id = req.swagger.params.id.value;
	let entry = req. swagger.params.entry.value;
	res.json();		
}