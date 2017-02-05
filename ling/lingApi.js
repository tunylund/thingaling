const ling = require('./src/ling.js')

module.exports = lingApi

function lingApi(version) {
  switch (version) {
    case '1.0.0':
      return ling
      break;
    default:
      throw new Error('Unsupported version')
  }
}
