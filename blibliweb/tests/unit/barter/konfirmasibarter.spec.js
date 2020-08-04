import { shallowMount } from '@vue/test-utils';
import KonfirmasiPengajuanBarter from '@/views/barter/KonfirmasiPengajuanBarter.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
describe('KonfirmasiPengajuanBarter.vue', () => {
  it('KonfirmasiPengajuanBarter page render correctly', async () => {
    const wrapper = shallowMount(KonfirmasiPengajuanBarter);
    expect(wrapper.exists()).toBe(true);
  });
});
