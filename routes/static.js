'use strict';

module.exports = (handlers) => {
  return {
    method: 'GET',
    path: '//s3-us-west-2.amazonaws.com/pizza-luvrs-khanh-nguyen/{param*}',
    config: {
      auth: false,
      handler: {
        directory: {
          path: 'assets'
        }
      }
    }
  };
};
