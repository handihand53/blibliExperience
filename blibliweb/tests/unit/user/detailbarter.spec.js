import { shallowMount } from '@vue/test-utils';
import DetailBarter from '@/views/user/DetailBarter.vue';

describe('DetailBarter.vue', () => {
  it('DetailBarter page render correctly', () => {
    const wrapper = shallowMount(DetailBarter);
    expect(wrapper.exists()).toBe(true);
  });
});
