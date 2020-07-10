import { shallowMount } from '@vue/test-utils';
import DaftarPengajuan from '@/views/user/DaftarPengajuan.vue';
import DaftarPengajuanBarter from '@/components/DaftarPengajuanBarter.vue';
import DaftarPengajuanBarang from '@/components/DaftarPengajuanBarang.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon'];

describe('DaftarPengajuan.vue', () => {
  it('DaftarPengajuan page render correctly', () => {
    const wrapper = shallowMount(DaftarPengajuan);
    expect(wrapper.exists()).toBe(true);
  });

  it('pengajuanBarter button work correctly', () => {
    const wrapper = shallowMount(DaftarPengajuan);
    wrapper.find('#barter').trigger('click');
    expect(wrapper.vm.isActive).toBe(true);
    expect(wrapper.vm.currentComponent).toBe(DaftarPengajuanBarter);
  });

  it('pengajuanBarang button work correctly', () => {
    const wrapper = shallowMount(DaftarPengajuan);
    wrapper.find('#lelang').trigger('click');
    expect(wrapper.vm.isActive).toBe(false);
    expect(wrapper.vm.currentComponent).toBe(DaftarPengajuanBarang);
  });
});
