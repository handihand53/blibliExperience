import { shallowMount } from '@vue/test-utils';
import Sukses from '@/views/Sukses.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];

describe('Sukses.vue', () => {
  it('Sukses page render correctly', () => {
    const wrapper = shallowMount(Sukses);
    expect(wrapper.exists()).toBe(true);
  });
});