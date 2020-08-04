import { shallowMount } from '@vue/test-utils';
import CariBarang from '@/views/caribarang/CariBarang.vue';
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
      data: [
        {
          productBiddingId: '123',
          cartForms: [
            {
              stockForm: {
                stockId: '123',
              },
            },
          ],
        },
      ],
    },
  }),
  post: () => Promise.resolve({
    data: {
      status: 'success',
    },
  }),
}));

describe('CariBarang.vue', () => {
  it('CariBarang page render correctly', async () => {
    const wrapper = shallowMount(CariBarang);
    wrapper.vm.getAllProductByCategory('DAILY');
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(CariBarang);
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/biddingProductPhoto/c');
  });

  it('formatPrice function work correctly', () => {
    const wrapper = shallowMount(CariBarang);
    expect(wrapper.vm.formatPrice(1000)).toEqual('1.000');
  });

  it('getMonthYear function work correctly', () => {
    const wrapper = shallowMount(CariBarang);
    expect(wrapper.vm.getMonthYear('October 13, 2014')).toEqual('13 Oktober 2014');
  });

  it('getTime function work correctly', () => {
    const wrapper = shallowMount(CariBarang);
    expect(wrapper.vm.getTime('October 13, 2014 11:13:00')).toEqual('11:13:00 AM');
  });
});
