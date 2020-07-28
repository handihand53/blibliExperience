import { shallowMount } from '@vue/test-utils';
import Admin from '@/views/admin/Admin.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'b-spinner'];

describe('Admin.vue', () => {
  it('Admin page render correctly', () => {
    const wrapper = shallowMount(Admin);
    expect(wrapper.exists()).toBe(true);
  });
});
