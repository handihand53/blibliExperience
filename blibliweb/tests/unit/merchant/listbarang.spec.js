import { shallowMount } from '@vue/test-utils';
import ListBarang from '@/views/merchant/ListBarang.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-input-group', 'b-form-input', 'b-input-group-append', 'router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-form-group', 'b-form-radio', 'b-alert', 'b-modal', 'b-spinner'];

describe('ListBarang.vue', () => {
  it('ListBarang page render correctly', () => {
    const wrapper = shallowMount(ListBarang);
    expect(wrapper.exists()).toBe(true);
  });
});
