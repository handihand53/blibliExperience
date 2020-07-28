import { shallowMount } from '@vue/test-utils';
import DaftarPesanan from '@/views/DaftarPesanan.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

describe('DaftarPesanan.vue', () => {
  it('DaftarPesanan page render correctly', () => {
    const wrapper = shallowMount(DaftarPesanan);
    expect(wrapper.exists()).toBe(true);
  });

  it('changeStatus page render correctly', () => {
    const wrapper = shallowMount(DaftarPesanan);
    wrapper.find('#changeStat1').trigger('click');
    expect(wrapper.vm.isActive[1]).toBe(true);
    expect(wrapper.vm.isActive[0]).toBe(false);
    expect(wrapper.vm.isActive[2]).toBe(false);
  });
});
