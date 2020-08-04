import { shallowMount } from '@vue/test-utils';
import DetailPengajuanOrder from '@/views/user/DetailPengajuanOrder.vue';
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

describe('DetailPengajuanOrder.vue', () => {
  it('DetailPengajuanOrder page render correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanOrder, {
      mocks: {
        $route,
      },
      data() {
        return {
          product: {
            biddingForms: [
              'sd',
              'fsa',
            ],
          },
        };
      },
    });
    wrapper.vm.confirmProduct();
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getStatus function work correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanOrder, {
      mocks: {
        $route,
      },
      data() {
        return {
          product: {
            biddingForms: [
              'sd',
              'fsa',
            ],
          },
        };
      },
    });
    await flushPromises();
    expect(wrapper.vm.getStatus('WAITING_FOR_PAYMENT_FROM_BIDDING_WINNER')).toBe('Menunggu pembayaran anda');
    expect(wrapper.vm.getStatus('PAID')).toBe('Sudah dibayar');
    expect(wrapper.vm.getStatus('DELIVERED_TO_BIDDING_OWNER')).toBe('Barang sedang dikirim');
    expect(wrapper.vm.getStatus('PAID_TO_WINNER')).toBe('Barang sudah diterima');
  });

  it('getImage function work correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanOrder, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.expand(2);
    wrapper.vm.moveSlider(2);
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/biddingProductPhoto/c.jpeg');
  });

  it('getMonthYear function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanOrder);
    expect(wrapper.vm.getMonthYear('October 13, 2014')).toEqual('13 Oktober 2014');
  });

  it('getTime function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanOrder);
    expect(wrapper.vm.getTime('October 13, 2014 11:13:00')).toEqual('11:13:00 AM');
  });
});
