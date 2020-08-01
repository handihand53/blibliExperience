import { shallowMount } from '@vue/test-utils';
import DetailDaftarPesanan from '@/views/DetailDaftarPesanan.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

const $route = {
  params: {
    id: 's',
  },
};

describe('DetailDaftarPesanan.vue', () => {
  it('DetailDaftarPesanan page render correctly', () => {
    const wrapper = shallowMount(DetailDaftarPesanan, {
      mocks: {
        $route,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
