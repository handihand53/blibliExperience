import { shallowMount } from '@vue/test-utils';
import BarterHeader from '@/components/BarterHeader.vue';

describe('BarterHeader.vue', () => {
  it('Barter Header page render correctly', () => {
    const wrapper = shallowMount(BarterHeader, {
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('getFirstName Computed function return correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(BarterHeader, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });
});
