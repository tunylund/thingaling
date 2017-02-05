import test from 'ava'
import thingApi from '../thingApi.js'

test('should ling a thing', t => {
  t.plan(1)
  const thing = thingApi('1.0.0')
  return thing().then(result => t.is(result, 'thingaling'))
})

