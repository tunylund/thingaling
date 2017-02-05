const lingApi = require('ling')
const thing = require('./src/thing.js')

module.exports = thingApi

function thingApi(version) {
  const ling = lingApi('1.0.0')
  return thing(ling)
}
