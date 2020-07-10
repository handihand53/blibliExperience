import { shallowMount } from '@vue/test-utils';
import BarterHeader from '@/components/BarterHeader.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['font-awesome-icon'];

describe('BarterHeader.vue', () => {
  it('Barter Header page render correctly', () => {
    const wrapper = shallowMount(BarterHeader, {
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
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
