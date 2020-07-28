import { shallowMount } from '@vue/test-utils';
import DetailPesananMasuk from '@/views/merchant/DetailPesananMasuk.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-form-group', 'b-form-radio', 'b-alert', 'b-modal', 'b-spinner'];

describe('DetailPesananMasuk.vue', () => {
  it('DetailPesananMasuk page render correctly', () => {
    const wrapper = shallowMount(DetailPesananMasuk);
    expect(wrapper.exists()).toBe(true);
  });

  it('DetailPesananMasuk page render correctly', () => {
    const wrapper = shallowMount(DetailPesananMasuk);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isLoading).toBe(true);
  });
});
