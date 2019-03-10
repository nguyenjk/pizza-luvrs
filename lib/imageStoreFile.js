'use strict';

const fs = require('fs');

module.exports.save = (name, data, callback) => {
  let fileName = '//s3-us-west-2.amazonaws.com/pizza-luvrs-khanh-nguyen/pizzas/' + name + '.png';

  fs.writeFile(__dirname + '/..' + fileName, data, 'base64', (err) => {
    callback(err, fileName);
  });
};
