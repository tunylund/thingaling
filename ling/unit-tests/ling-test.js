import test from 'ava'
import ling from '../src/ling.js'

test('should ling a thing', t => {
  t.is(ling('thing'), 'ling')
})

test('should not ling a thang', t => {
  t.is(ling('thang'), 'thang')
})
