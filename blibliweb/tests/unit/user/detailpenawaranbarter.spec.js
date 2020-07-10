import { shallowMount } from '@vue/test-utils';
import DetailPenawaranBarter from '@/views/user/DetailPenawaranBarter.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['font-awesome-icon'];

describe('DetailPenawaranBarter.vue', () => {
  it('DetailPenawaranBarter page render correctly', () => {
    const wrapper = shallowMount(DetailPenawaranBarter);
    expect(wrapper.exists()).toBe(true);
  });
});
