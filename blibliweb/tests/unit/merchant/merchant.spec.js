import { shallowMount } from '@vue/test-utils';
import Merchant from '@/views/merchant/Merchant.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-spinner', 'router-link', 'font-awesome-icon', 'b-spinner'];

describe('Merchant.vue', () => {
  it('Merchant render correctly', () => {
    const wrapper = shallowMount(Merchant);
    expect(wrapper.exists()).toBe(true);
  });
});
