## Node Bluelytics
Node module to consume the [Bluelytics API](http://bluelytics.com.ar/#/api)

### Usage

`npm install node-bluelytics`

```javascript

  const Bluelytics = require('./lib/bluelytics');

  Bluelytics.get().then((result) => {
    console.log(result)
    /*
      {
        "oficial": {
          "value_avg": 17.2,
          "value_sell": 17.4,
          "value_buy": 17
        },
        "blue": {
          "value_avg": 16.908825,
          "value_sell": 17.21,
          "value_buy": 16.60765
        },
        "oficial_euro": {
          "value_avg": 19.58518130526124,
          "value_sell": 20.425686568661327,
          "value_buy": 18.793637513515527
        },
        "blue_euro": {
          "value_avg": 19.253628097903132,
          "value_sell": 20.202647462451807,
          "value_buy": 18.359891414784478
        },
        "last_update": "2017-07-06T10:00:12.141404-03:00"
      }
    */
  });
```

Optionaly you can filter the returned results:

```javascript

  Bluelytics.get('dollar').then((result) => {
    console.log(result);
    /*
      {
        "oficial": {
          "value_avg": 17.2,
          "value_sell": 17.4,
          "value_buy": 17
        },
        "blue": {
          "value_avg": 16.908825,
          "value_sell": 17.21,
          "value_buy": 16.60765
        },
        "last_update": "2017-07-06T10:00:12.141404-03:00"
      }
    */

    let reFiltered = Bluelytics.filter('oficial', result);
    console.log(reFiltered);
    /*
      {
        "oficial": {
          "value_avg": 17.2,
          "value_sell": 17.4,
          "value_buy": 17
        }
        "last_update": "2017-07-06T10:00:12.141404-03:00"
      }
    */
  });

```
#### Available filter options are:

`dollar` returns the oficial, blue and last_update values

`euro`  returns the oficial_euro, blue_euro and last_update values

`oficial` returns the oficial and last_update values

`blue` returns the blue and last_update values

`oficial_euro` returns the oficial_euro and last_update values

`blue_euro` returns the blue_euro and last_update values


### TODO
- Tests
