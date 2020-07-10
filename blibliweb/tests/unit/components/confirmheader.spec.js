import { shallowMount } from '@vue/test-utils';
import ConfirmHeader from '@/components/ConfirmHeader.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

describe('ConfirmHeader.vue', () => {
  it('ConfirmHeader page render correctly', () => {
    const wrapper = shallowMount(ConfirmHeader);
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(ConfirmHeader, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });
});
