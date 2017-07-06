const Bluelytics = require('../lib/bluelytics');

let result = {
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
  last_update: '2017-07-06T10:10:08.426315-03:00'
};

result = Bluelytics.filter('blue', result);
console.log(result)

Bluelytics.get().then((res) => {
  console.log(res);
});

Bluelytics.get('oficial').then((res) => {
  console.log(res)
});