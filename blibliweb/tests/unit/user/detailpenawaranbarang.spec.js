import { shallowMount } from '@vue/test-utils';
import DetailPenawaranBarang from '@/views/user/DetailPenawaranBarang.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  put: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
  get: () => Promise.resolve({
    data: {
      data: {
        biddingForms: [
          'sd',
          'fsa',
        ],
      },
    },
  }),
  post: () => Promise.resolve({
    data: {
      status: 'success',
    },
  }),
}));

const $route = {
  params: {
    id: '123',
  },
};

describe('DetailPenawaranBarang.vue', () => {
  it('DetailPenawaranBarang page render correctly', () => {
    const wrapper = shallowMount(DetailPenawaranBarang, {
      mocks: {
        $route,
      },
      data() {
        return {
          resi: 's',
        };
      },
    });
    wrapper.vm.sendProduct();
    expect(wrapper.exists()).toBe(true);
  });

  it('formatPrice function work correctly', () => {
    const wrapper = shallowMount(DetailPenawaranBarang);
    expect(wrapper.vm.formatPrice(13000)).toBe('13.000');
  });

  it('getStatus function work correctly', () => {
    const wrapper = shallowMount(DetailPenawaranBarang);
    expect(wrapper.vm.getStatus('WAITING_FOR_PAYMENT_FROM_BIDDING_WINNER')).toBe('Menunggu pembayaran');
    expect(wrapper.vm.getStatus('PAID')).toBe('Sudah dibayar');
    expect(wrapper.vm.getStatus('DELIVERED_TO_BIDDING_OWNER')).toBe('Barang sedang dikirim');
    expect(wrapper.vm.getStatus('PAID_TO_WINNER')).toBe('Barang sudah diterima');
    expect(wrapper.vm.getStatus('')).toBe('');
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(DetailPenawaranBarang);
    wrapper.vm.moveSlider(1);
    expect(wrapper.vm.getImage('/asd/c.jpeg')).toEqual('/assets/resources/uploads/biddingProductPhoto/c.jpeg');
  });
});
