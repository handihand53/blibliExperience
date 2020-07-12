import { shallowMount } from '@vue/test-utils';
import PemberitahuanPembelian from '@/views/merchant/PemberitahuanPembelian.vue';
import Vue from 'vue';
import PesananMasukMerchant from '@/components/PesananMasukMerchant.vue';
import RiwayatMerchant from '@/components/RiwayatMerchant.vue';

Vue.config.ignoredElements = ['b-spinner', 'b-button', 'router-link', 'font-awesome-icon', 'b-spinner'];

describe('PemberitahuanPembelian.vue', () => {
  it('PemberitahuanPembelian render correctly', () => {
    const wrapper = shallowMount(PemberitahuanPembelian);
    expect(wrapper.exists()).toBe(true);
  });

  it('pesananMasuk work correctly', () => {
    const wrapper = shallowMount(PemberitahuanPembelian);
    wrapper.find('#pesananMasuk').trigger('click');
    expect(wrapper.vm.isActive).toBe(true);
    expect(wrapper.vm.currentComponent).toBe(PesananMasukMerchant);
  });

  it('riwayat work correctly', () => {
    const wrapper = shallowMount(PemberitahuanPembelian);
    wrapper.find('#riwayat').trigger('click');
    expect(wrapper.vm.isActive).toBe(false);
    expect(wrapper.vm.currentComponent).toBe(RiwayatMerchant);
  });
});
