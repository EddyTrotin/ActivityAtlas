import { describe, it, expect, beforeEach } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import ActivityMap from '@/components/ActivityMap.vue'

describe('ActivityMap', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(ActivityMap);
  });

  it('should renders a leaflet map correctly centered', () => {
    expect(wrapper.html()).toContain('zoom="6" center="46.519699,2.892129"');
  });
});
