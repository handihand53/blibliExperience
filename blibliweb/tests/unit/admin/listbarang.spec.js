import { shallowMount } from '@vue/test-utils';
import ListBarang from '@/views/admin/ListBarang.vue';

describe('ListBarang.vue', () => {
  it('ListBarang page render correctly', () => {
    const wrapper = shallowMount(ListBarang);
    expect(wrapper.exists()).toBe(true);
  });
});
