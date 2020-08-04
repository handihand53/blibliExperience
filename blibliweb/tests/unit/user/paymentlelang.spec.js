import { shallowMount } from '@vue/test-utils';
import PaymentLelang from '@/views/user/PaymentLelang.vue';
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

describe('PaymentLelang.vue', () => {
  it('PaymentLelang page render correctly', async () => {
    const wrapper = shallowMount(PaymentLelang);
    expect(wrapper.exists()).toBe(true);
  });

  it('VA click work correctly', () => {
    const wrapper = shallowMount(PaymentLelang);
    wrapper.find('#VA').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(false);
    expect(wrapper.vm.isGerai).toBe(true);
    expect(wrapper.vm.isElektronik).toBe(true);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('gerai click work correctly', () => {
    const wrapper = shallowMount(PaymentLelang);
    wrapper.find('#gerai').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(true);
    expect(wrapper.vm.isGerai).toBe(false);
    expect(wrapper.vm.isElektronik).toBe(true);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('elektronik click work correctly', () => {
    const wrapper = shallowMount(PaymentLelang);
    wrapper.find('#elektronik').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(true);
    expect(wrapper.vm.isGerai).toBe(true);
    expect(wrapper.vm.isElektronik).toBe(false);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('Pay button work correctly', () => {
    const wrapper = shallowMount(PaymentLelang);
    wrapper.vm.activePay('debit');
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isLoading).toBe(false);
  });

  // it('Pay correctly', async () => {
  //   const wrapper = shallowMount(PaymentLelang, {
  //     mocks: {
  //       $route,
  //     },
  //     data() {
  //       return {
  //         bank: 'asd',
  //       };
  //     },
  //   });
  //   wrapper.vm.pay();
  //   await flushPromises();
  //   expect(wrapper.vm.isLoading).toBe(false);
  // });
});
