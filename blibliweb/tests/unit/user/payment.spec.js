import { shallowMount } from '@vue/test-utils';
import Payment from '@/views/user/Payment.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

const $route = {
  params: {
    id: '123',
  },
};

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

describe('Payment.vue', () => {
  it('Payment page render correctly', () => {
    const wrapper = shallowMount(Payment, {
      mocks: {
        $route,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('VA click work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.find('#VA').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(false);
    expect(wrapper.vm.isGerai).toBe(true);
    expect(wrapper.vm.isElektronik).toBe(true);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('gerai click work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.find('#gerai').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(true);
    expect(wrapper.vm.isGerai).toBe(false);
    expect(wrapper.vm.isElektronik).toBe(true);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('elektronik click work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.find('#elektronik').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(true);
    expect(wrapper.vm.isGerai).toBe(true);
    expect(wrapper.vm.isElektronik).toBe(false);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('Pay button work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.vm.activePay('debit');
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isLoading).toBe(false);
  });
});
