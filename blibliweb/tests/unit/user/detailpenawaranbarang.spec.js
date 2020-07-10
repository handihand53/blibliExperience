import { shallowMount } from '@vue/test-utils';
import DetailPenawaranBarang from '@/views/user/DetailPenawaranBarang.vue';

describe('DetailPenawaranBarang.vue', () => {
  it('DetailPenawaranBarang page render correctly', () => {
    const wrapper = shallowMount(DetailPenawaranBarang);
    expect(wrapper.exists()).toBe(true);
  });

  it('formatPrice function work correctly', () => {
    const wrapper = shallowMount(DetailPenawaranBarang);
    expect(wrapper.vm.formatPrice(13000)).toBe('13.000');
  });

  it('expand function work correctly', () => {
    const wrapper = shallowMount(DetailPenawaranBarang);
    expect(wrapper.vm.isExpand[1]).toBe(false);
    wrapper.vm.expand(1);
    expect(wrapper.vm.isExpand[1]).toBe(true);
  });
});
