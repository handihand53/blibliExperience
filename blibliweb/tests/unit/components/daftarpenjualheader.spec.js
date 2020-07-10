import { shallowMount } from '@vue/test-utils';
import DaftarPenjualHeader from '@/components/DaftarPenjualHeader.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

describe('DaftarPenjualHeader.vue', () => {
  it('DaftarPenjualHeader page render correctly', () => {
    const wrapper = shallowMount(DaftarPenjualHeader);
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(DaftarPenjualHeader, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  it('Dropdown function work correctly', () => {
    const wrapper = shallowMount(DaftarPenjualHeader);
    wrapper.find('#dropdown').trigger('click');
    expect(wrapper.vm.isRotate).toBe(true);
    expect(wrapper.vm.isVisible).toBe(true);
  });
});
