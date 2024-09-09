const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

module.exports = {
  get: (key) => cache.get(key),
  set: (key, value) => cache.set(key, value),
  del: (key) => cache.del(key),
};
