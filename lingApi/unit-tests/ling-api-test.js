import test from 'ava'
import lingApi from './../src/lingApi'
import ling from 'ling'

test('should provide a ling api', t => {
  const aling = lingApi('1.0.0')
  t.is(aling, ling)
})

test('should not provide unsupported version of ling api', t => {
  const error = t.throws(() => {
    lingApi('bad-version')
  }, Error)
  t.is(error.message, 'Unsupported version')
})
