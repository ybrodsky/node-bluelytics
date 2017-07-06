const request = require('request');
const _				= require('underscore');

const URL 		= 'http://api.bluelytics.com.ar/v2/latest';

/**
*	Filters a set of results returning only a set of fields
* @param {opt} String
* @param {data} Object
* @return Object
*/
const filter = (opt, data) => {
	switch(opt) {
		case 'dollar':
			return _.omit(data, 'oficial_euro', 'blue_euro');
			break;
		case 'euro':
			return _.omit(data, 'oficial', 'blue');
			break;
		case 'oficial':
		case 'blue':
		case 'oficial_euro':
		case 'blue_euro':
			return _.pick(data, opt, 'last_update');
			break;
		default:
			return data;
			break;
	}
};

/**
*	Fetches data from the Bluelytics API and returns a (filtered) result
* @param {opt} String
* @return Promise
*/
const get = (opt) => new Promise((resolve, reject) => {
	request({
		method: 'GET',
		keepAlive: false,
		url: URL,
		headers: {
			'Accept': 'application/json',
			'Accept-Encoding': 'gzip'
		},
		gzip: true
	}, (err, response, body) => {
		if(err) return reject(err);

		if(!body) return reject();

		return resolve(filter(opt, JSON.parse(body)));
	});
})

module.exports = {filter, get};
