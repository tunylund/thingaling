module.exports = thing

function thing (ling) {
  return async function () {
    return 'thinga' + ling('thing')
  }
}

