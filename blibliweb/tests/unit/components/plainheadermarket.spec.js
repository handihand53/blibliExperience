import { shallowMount } from '@vue/test-utils';
import PlainHeaderMarket from '@/components/PlainHeaderMarket.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

describe('PlainHeader.vue', () => {
  it('PlainHeader page render correctly', () => {
    const wrapper = shallowMount(PlainHeaderMarket);
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(PlainHeaderMarket, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  it('Dropdown function work correctly', () => {
    const wrapper = shallowMount(PlainHeaderMarket);
    wrapper.find('#dropdown').trigger('click');
    expect(wrapper.vm.isRotate).toBe(true);
    expect(wrapper.vm.isVisible).toBe(true);
  });
});
