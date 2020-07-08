import { shallowMount } from '@vue/test-utils';
import NotFound from '@/views/NotFound.vue';

describe('NotFound.vue', () => {
  it('NotFound page render correctly', () => {
    const wrapper = shallowMount(NotFound);
    expect(wrapper.exists()).toBe(true);
  });
});
