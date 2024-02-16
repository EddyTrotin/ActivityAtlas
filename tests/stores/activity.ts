import { expect, test } from 'vitest'

import { useActivityStore } from '../../stores/activity'

test('my test', () => {
  const store = useActivityStore()
  expect(store.list).toHaveLength(20)
  expect(store.current).toBe('')
})
