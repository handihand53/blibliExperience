import { shallowMount } from '@vue/test-utils';
import DetailDaftarPesanan from '@/views/DetailDaftarPesanan.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

describe('DetailDaftarPesanan.vue', () => {
  it('DetailDaftarPesanan page render correctly', () => {
    const wrapper = shallowMount(DetailDaftarPesanan);
    expect(wrapper.exists()).toBe(true);
  });
});
