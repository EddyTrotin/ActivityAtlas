import { describe, it, expect, beforeEach } from 'vitest'
import { useActivityStore } from '@/stores/activity'
import { fakeActivities } from '@/utils/helpers'
import { setActivePinia, createPinia } from 'pinia'

describe('Activity Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initializes with a list of fake activities and an empty current activity', () => {
    const store = useActivityStore()
    expect(store.list).toEqual(fakeActivities)
    expect(store.current).toBe('')
  })

  it('should filters activities by title', () => {
    const store = useActivityStore()
    const testTitle = 'e'
    store.filterByTitle(testTitle)

    expect(
      store.list.every((activity) =>
        activity.title.toLowerCase().includes(testTitle)
      )
    ).toBe(true)
  })
})
