import { shallowMount } from '@vue/test-utils';
import TransaksiBerhasil from '@/views/merchant/TransaksiBerhasil.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-spinner', 'b-button', 'router-link', 'font-awesome-icon', 'b-spinner'];

describe('TransaksiBerhasil.vue', () => {
  it('TransaksiBerhasil render correctly', () => {
    const wrapper = shallowMount(TransaksiBerhasil);
    expect(wrapper.exists()).toBe(true);
  });
});
