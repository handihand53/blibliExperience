import { shallowMount } from '@vue/test-utils';
import UbahKataSandi from '@/views/merchant/UbahKataSandi.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-form-input', 'b-spinner', 'b-button', 'router-link', 'font-awesome-icon', 'b-spinner'];

describe('UbahKataSandi.vue', () => {
  it('UbahKataSandi render correctly', () => {
    const wrapper = shallowMount(UbahKataSandi);
    expect(wrapper.exists()).toBe(true);
  });
});
