import { shallowMount } from '@vue/test-utils';
import LelangSukses from '@/views/user/LelangSukses.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];

describe('LelangSukses.vue', () => {
  it('LelangSukses page render correctly', () => {
    const wrapper = shallowMount(LelangSukses);
    expect(wrapper.exists()).toBe(true);
  });
});