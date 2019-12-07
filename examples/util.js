const { match } = require('path-to-regexp');
const path = require('path');

module.exports = {
  rewrite: function(from, to) {
    return function(req, res, next) {
      if (req.method !== 'GET') {
        next();
      }
    
      if (match(from)(req.url) !== false) {
        res.sendFile(path.join(__dirname, to));
      } else {
        next();
      }
    }
  }
}
