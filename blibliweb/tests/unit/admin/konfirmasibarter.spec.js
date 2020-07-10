import { shallowMount } from '@vue/test-utils';
import KonfirmasiBarter from '@/views/admin/KonfirmasiBarter.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['font-awesome-icon', 'b-button'];

describe('KonfirmasiBarter.vue', () => {
  it('KonfirmasiBarter page render correctly', () => {
    const wrapper = shallowMount(KonfirmasiBarter);
    expect(wrapper.exists()).toBe(true);
  });
});
