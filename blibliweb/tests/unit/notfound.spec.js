import { shallowMount } from '@vue/test-utils';
import NotFound from '@/views/NotFound.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link'];

describe('NotFound.vue', () => {
  it('NotFound page render correctly', () => {
    const wrapper = shallowMount(NotFound);
    expect(wrapper.exists()).toBe(true);
  });
});
