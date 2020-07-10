import { shallowMount } from '@vue/test-utils';
import ListBarang from '@/views/admin/ListBarang.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-input-group-append', 'font-awesome-icon', 'b-button', 'b-form-input', 'b-input-group'];

describe('ListBarang.vue', () => {
  it('ListBarang page render correctly', () => {
    const wrapper = shallowMount(ListBarang);
    expect(wrapper.exists()).toBe(true);
  });
});
