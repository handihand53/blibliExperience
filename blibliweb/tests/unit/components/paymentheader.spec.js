import { shallowMount } from '@vue/test-utils';
import PaymentHeader from '@/components/PaymentHeader.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['font-awesome-icon'];

describe('PaymentHeader.vue', () => {
  it('PaymentHeader page render correctly', () => {
    const wrapper = shallowMount(PaymentHeader);
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(PaymentHeader, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });
});
