import { shallowMount } from '@vue/test-utils';
import MenuUtama from '@/views/merchant/MenuUtama.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-spinner', 'b-button', 'router-link', 'font-awesome-icon', 'b-spinner'];

describe('MenuUtama.vue', () => {
  it('MenuUtama render correctly', () => {
    const wrapper = shallowMount(MenuUtama);
    expect(wrapper.exists()).toBe(true);
  });
});
