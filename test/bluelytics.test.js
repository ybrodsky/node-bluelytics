const nock = require('nock');
const Bluelytics = require('../index.js');
const should = require('should');

const response = {
  oficial: {
    value_avg: 17.2,
    value_sell: 17.4,
    value_buy: 17
  },
  blue: {
    value_avg: 16.908825,
    value_sell: 17.21,
    value_buy: 16.60765
  },
  oficial_euro: {
    value_avg: 19.58518130526124,
    value_sell: 20.425686568661327,
    value_buy: 18.793637513515527
  },
  blue_euro: {
    value_avg: 19.253628097903132,
    value_sell: 20.202647462451807,
    value_buy: 18.359891414784478
  },
  last_update: '2017-07-06T10:40:11.170286-03:00'
};

const bluelyticNock = nock('http://api.bluelytics.com.ar').get('/v2/latest').times(10).reply(200, response);

describe('Node Bluelytics', function() {
  it('Return a full response', (done) => {
  	Bluelytics.get().then((res) => {

  		res.should.be.an.Object();

  		Object.keys(response).forEach((key) => {
  			res.should.have.property(key);
  			if(key === 'last_update') return false;

  			res[key].should.be.an.Object();
  			res[key].should.have.properties(['value_buy', 'value_sell', 'value_avg']);

  			for(let innerKey in response[key]) {
  				res[key][innerKey].should.be.equal(response[key][innerKey]);
  			}
  		});

		  return done();
		})
  });

  it('Only dollar in response', (done) => {
  	Bluelytics.get('dollar').then((res) => {
  		res.should.be.an.Object();

  		res.should.have.properties(['oficial', 'blue', 'last_update']);
  		res.should.not.have.property('oficial_euro');
  		res.should.not.have.property('blue_euro');

  		return done();
  	});
	});

	it('Only euro in response', (done) => {
  	Bluelytics.get('euro').then((res) => {
  		res.should.be.an.Object();

  		res.should.have.not.property('oficial');
  		res.should.have.not.property('blue');
  		res.should.have.properties(['oficial_euro', 'blue_euro', 'last_update']);

  		return done();
  	});
	});

	it('Only oficial in response', (done) => {
  	Bluelytics.get('oficial').then((res) => {
  		res.should.be.an.Object();

  		res.should.have.not.property('oficial_euro');
  		res.should.have.not.property('blue_euro');
  		res.should.have.not.property('blue');
  		res.should.have.properties(['oficial', 'last_update']);

  		return done();
  	});
	});

	it('Only blue in response', (done) => {
  	Bluelytics.get('blue').then((res) => {
  		res.should.be.an.Object();

  		res.should.have.not.property('oficial_euro');
  		res.should.have.not.property('blue_euro');
  		res.should.have.not.property('oficial');
  		res.should.have.properties(['blue', 'last_update']);

  		return done();
  	});
	});

	it('Only blue_euro in response', (done) => {
  	Bluelytics.get('blue_euro').then((res) => {
  		res.should.be.an.Object();

  		res.should.have.not.property('oficial_euro');
  		res.should.have.not.property('oficial');
  		res.should.have.not.property('blue');
  		res.should.have.properties(['blue_euro', 'last_update']);

  		return done();
  	});
	});

	it('Only oficial_euro in response', (done) => {
  	Bluelytics.get('oficial_euro').then((res) => {
  		res.should.be.an.Object();

  		res.should.have.not.property('blue_euro');
  		res.should.have.not.property('oficial');
  		res.should.have.not.property('blue');
  		res.should.have.properties(['oficial_euro', 'last_update']);

  		return done();
  	});
	});
});
