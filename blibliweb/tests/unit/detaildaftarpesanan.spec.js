import { shallowMount } from '@vue/test-utils';
import DetailDaftarPesanan from '@/views/DetailDaftarPesanan.vue';

describe('DetailDaftarPesanan.vue', () => {
  it('DetailDaftarPesanan page render correctly', () => {
    const wrapper = shallowMount(DetailDaftarPesanan);
    expect(wrapper.exists()).toBe(true);
  });
});
