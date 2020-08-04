import { shallowMount } from '@vue/test-utils';
import SearchHeader from '@/components/SearchHeader.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];

describe('SearchHeader.vue', () => {
  it('SearchHeader page render correctly', () => {
    const wrapper = shallowMount(SearchHeader);
    wrapper.vm.back();
    expect(wrapper.exists()).toBe(true);
  });
});
