import { describe, it, expect, beforeEach, vi } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import ActivityList from '@/components/ActivityList.vue'

vi.mock('@/stores/activity', () => ({
  useActivityStore: vi.fn(() => ({
    list: [
      { id: '1', title: 'Activity 1', desc: 'Description 1' },
      { id: '2', title: 'Activity 2', desc: 'Description 2' },
    ],
    current: '',
  })),
}))

describe('ActivityList', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(ActivityList)
  })

  it('should mount ActivityList component', async () => {
    expect(wrapper.html()).toContain(
      '<div class="h-full mx-6 pb-8 overflow-y-scroll flex flex-wrap justify-center">'
    )
  })

  it('should renders a list of activities', () => {
    const activityElements = wrapper.findAll('.card')
    expect(activityElements.length).toBe(2)
  })

  it('should renders activity details correctly', () => {
    const firstActivity = wrapper.find('.card')
    expect(firstActivity.text()).toContain('Activity 1')
    expect(firstActivity.text()).toContain('Description 1')
  })

  it('should changes background color on mouseover', async () => {
    const firstActivity = wrapper.find('.card')
    await firstActivity.trigger('mouseover')
    await wrapper.vm.$forceUpdate();
    expect(firstActivity.classes()).toContain('bg-[#FF6455]')
  })
})
