import test from 'ava'
import thing from '../src/thing.js'
import lingApi from 'ling'

test('should ling a thing', t => {
  t.plan(1)
  const ling = lingApi('1.0.0')
  const athing = thing(ling)
  return athing().then(result => t.is(result, 'thingaling'))
})

