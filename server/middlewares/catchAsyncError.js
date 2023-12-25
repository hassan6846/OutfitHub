module.exports = function(theFunc) {
    return function(req, res, next) {
      return Promise.resolve(theFunc(req, res, next)).catch(next);
    };
  };
  

  