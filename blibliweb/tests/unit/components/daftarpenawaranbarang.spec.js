import { shallowMount } from '@vue/test-utils';
import DaftarPenawaranBarang from '@/components/DaftarPenawaranBarang.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: [
        {
          categories: [
            'sd',
            'cs',
          ],
        },
      ],
    },
  }),
  post: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
}));

describe('DaftarPenawaranBarang.vue', () => {
  it('DaftarPenawaranBarang page render correctly', async () => {
    const wrapper = shallowMount(DaftarPenawaranBarang);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('formatPrice function correctly', async () => {
    const wrapper = shallowMount(DaftarPenawaranBarang);
    await flushPromises();
    expect(wrapper.vm.formatPrice(12000)).toBe('12.000');
  });

  it('getImage function correctly', async () => {
    const wrapper = shallowMount(DaftarPenawaranBarang);
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/biddingProductPhoto/c.jpeg');
  });

  it('getListPenawaran function correctly', async () => {
    const wrapper = shallowMount(DaftarPenawaranBarang);
    wrapper.vm.getListPenawaran();
    await flushPromises();
    expect(wrapper.vm.show).toBe(false);
  });

  it('changeStatus function correctly', async () => {
    const wrapper = shallowMount(DaftarPenawaranBarang);
    wrapper.vm.changeStatus(1, 'WAITING_FOR_PAYMENT');
    wrapper.vm.changeStatus(1, 'WIN');
    await flushPromises();
    expect(wrapper.vm.show).toBe(false);
  });
});
