import { shallowMount } from '@vue/test-utils';
import DaftarPenawaran from '@/views/user/DaftarPenawaran.vue';
import DaftarPenawaranBarter from '@/components/DaftarPenawaranBarter.vue';
import DaftarPenawaranBarang from '@/components/DaftarPenawaranBarang.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon'];

describe('DaftarPenawar.vue', () => {
  it('DaftarPenawar page render correctly', () => {
    const wrapper = shallowMount(DaftarPenawaran);
    expect(wrapper.exists()).toBe(true);
  });

  it('penawarBarter button work correctly', () => {
    const wrapper = shallowMount(DaftarPenawaran);
    wrapper.find('#barter').trigger('click');
    expect(wrapper.vm.isActive).toBe(true);
    expect(wrapper.vm.currentComponent).toBe(DaftarPenawaranBarter);
  });

  it('penawarLelang button work correctly', () => {
    const wrapper = shallowMount(DaftarPenawaran);
    wrapper.find('#lelang').trigger('click');
    expect(wrapper.vm.isActive).toBe(false);
    expect(wrapper.vm.currentComponent).toBe(DaftarPenawaranBarang);
  });
});
