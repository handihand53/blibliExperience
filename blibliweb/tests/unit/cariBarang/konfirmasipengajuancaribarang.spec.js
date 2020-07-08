import { shallowMount } from '@vue/test-utils';
import KonfirmasiPengajuanCariBarang from '@/views/caribarang/KonfirmasiPengajuanCariBarang.vue';

describe('Admin.vue', () => {
  it('Admin page render correctly', () => {
    const wrapper = shallowMount(KonfirmasiPengajuanCariBarang);
    expect(wrapper.exists()).toBe(true);
  });
});
