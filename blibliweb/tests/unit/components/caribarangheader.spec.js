import { shallowMount } from '@vue/test-utils';
import CariBarangHeader from '@/components/CariBarangHeader.vue';

describe('CariBarangHeader.vue', () => {
  it('CariBarangHeader page render correctly', () => {
    const wrapper = shallowMount(CariBarangHeader);
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(CariBarangHeader, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });
});
