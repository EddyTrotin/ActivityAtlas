import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SearchBar from '@/components/SearchBar.vue'

import { VueWrapper, shallowMount } from '@vue/test-utils'
import { useActivityStore } from '@/stores/activity'

vi.mock('@/stores/activity', () => ({
  useActivityStore: vi.fn(() => ({
    filterByTitle: vi.fn(),
  })),
}))

describe('SearchBar', () => {
  let wrapper: VueWrapper
  let activitiesMock: any

  beforeEach(() => {
    activitiesMock = useActivityStore()
    wrapper = shallowMount(SearchBar)
  })

  it('should mount the SeachBar component', async () => {
    const component = await mountSuspended(SearchBar)
    expect(component.html()).toContain(
      '<input type="text" placeholder="Search by title" class="input input-bordered w-full max-w-xs mr-4">'
    )
  })

  it('should updates the search ref on input', async () => {
    const input = wrapper.find('input[type="text"]')
    await input.setValue('test search')
    expect(input.element.value).toBe('test search')
  })
})
