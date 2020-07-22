import { shallowMount } from '@vue/test-utils';
import DetailBarter from '@/views/user/DetailBarter.vue';

describe('DetailBarter.vue', () => {
  it('DetailBarter page render correctly', () => {
    const wrapper = shallowMount(DetailBarter);
    expect(wrapper.exists()).toBe(true);
  });

  it('formatPrice function work correctly', () => {
    const wrapper = shallowMount(DetailBarter);
    expect(wrapper.vm.formatPrice(12000)).toBe('12.000');
  });

  it('expand function work correctly', () => {
    const wrapper = shallowMount(DetailBarter);
    wrapper.vm.expand(1);
    expect(wrapper.vm.formatPrice(12000)).toBe('12.000');
  });
});
