import { shallowMount } from '@vue/test-utils';
import Wishlist from '@/views/user/Wishlist.vue';

describe('Wishlist.vue', () => {
  it('Wishlist page render correctly', () => {
    const wrapper = shallowMount(Wishlist);
    expect(wrapper.exists()).toBe(true);
  });
});
