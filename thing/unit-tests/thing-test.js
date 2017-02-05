import test from 'ava'
import thing from '../src/thing.js'

test('should ling a thing', t => {
  t.plan(1)
  const ling = str => 'ling'
  const athing = thing(ling)
  return athing().then(result => t.is(result, 'thingaling'))
})

