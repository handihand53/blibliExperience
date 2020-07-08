import { shallowMount } from '@vue/test-utils';
import HeaderWithCart from '@/components/HeaderWithCart.vue';

describe('HeaderWithCart.vue', () => {
  it('HeaderWithCart page render correctly', () => {
    const wrapper = shallowMount(HeaderWithCart);
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(HeaderWithCart, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  it('Dropdown function work correctly', () => {
    const wrapper = shallowMount(HeaderWithCart);
    wrapper.find('#dropdown').trigger('click');
    expect(wrapper.vm.isRotate).toBe(true);
    expect(wrapper.vm.isVisible).toBe(true);
  });
});
