const Bluelytics = require('../lib/bluelytics');

Bluelytics.get().then((res) => {
	console.log(res)
});

Bluelytics.get('oficial').then((res) => {
	console.log(res)
});