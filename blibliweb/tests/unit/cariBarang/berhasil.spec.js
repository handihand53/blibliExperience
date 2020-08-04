import { shallowMount } from '@vue/test-utils';
import Berhasil from '@/views/caribarang/Berhasil.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['font-awesome-icon'];

describe('Berhasil.vue', () => {
  it('Berhasil page render correctly', () => {
    const wrapper = shallowMount(Berhasil);
    expect(wrapper.exists()).toBe(true);
  });
});
