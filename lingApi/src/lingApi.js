const ling = require('ling')

module.exports = lingApi

function lingApi(version) {
  switch (version) {
    case '0.0.5':
      return () => 'ling'
      break;
    case '1.0.0':
      return ling
      break;
    default:
      throw new Error('Unsupported version')
  }
}
