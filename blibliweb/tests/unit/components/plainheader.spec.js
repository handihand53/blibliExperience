import { shallowMount } from '@vue/test-utils';
import PlainHeader from '@/components/PlainHeader.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon'];

describe('PlainHeader.vue', () => {
  it('PlainHeader page render correctly', () => {
    const wrapper = shallowMount(PlainHeader);
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(PlainHeader, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  it('Dropdown function work correctly', () => {
    const wrapper = shallowMount(PlainHeader);
    wrapper.find('#dropdown').trigger('click');
    expect(wrapper.vm.isRotate).toBe(true);
    expect(wrapper.vm.isVisible).toBe(true);
  });
});
