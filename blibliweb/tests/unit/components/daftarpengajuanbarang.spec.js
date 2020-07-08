import { shallowMount } from '@vue/test-utils';
import DaftarPengajuanBarang from '@/components/DaftarPengajuanBarang.vue';

describe('DaftarPengajuanBarang.vue', () => {
  it('DaftarPengajuanBarang page render correctly', () => {
    const wrapper = shallowMount(DaftarPengajuanBarang);
    expect(wrapper.exists()).toBe(true);
  });

  it('showDetail function work correctly', () => {
    const wrapper = shallowMount(DaftarPengajuanBarang);
    expect(wrapper.vm.display).toBe(true);
    wrapper.find('#showDetail').trigger('click');
    expect(wrapper.vm.display).toBe(false);
  });
});
