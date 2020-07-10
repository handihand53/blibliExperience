import { shallowMount } from '@vue/test-utils';
import Account from '@/views/Account.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

describe('Account.vue', () => {
  it('Account page render correctly', () => {
    const wrapper = shallowMount(Account);
    expect(wrapper.exists()).toBe(true);
  });
});
