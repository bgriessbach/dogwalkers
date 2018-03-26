const _ = require('lodash');
const Q = require('q');

module.exports = {
	getSchedule: getSchedule,
	updateSchedule: updateSchedule,
	deleteSchedule: deleteSchedule,
	createSchedule: createSchedule,
	getSettings: getSettings,
	updateSettings: updateSettings
};

function createSchedule (req, res, next) {
	let schedule_info = req.swagger.params.schedule_info.value;
	res.json();	
};

function deleteSchedule (req, res, next) {
	let id = req.swagger.params.id.value;
	res.json();	
};

function getSchedule (req, res, next) {
	let id = req.swagger.params.id.value;
	res.json();
};

function getSettings(req, res, next) {
	let id = req.swagger.params.id.value;
	let user = req.swagger.params.user.value;
	res.json();
};

function updateSchedule (req, res, next) {
	let id = req.swagger.params.id.value;
	let schedule_info = req.swagger.params.schedule_info.value;
	res.json();	
};

function updateSettings(req, res, next) {
	let id = req.swagger.params.id.value;
	let user = req.swagger.params.user.value;
	let settings = req.swagger.params.settings.value;
	res.json();	
};
