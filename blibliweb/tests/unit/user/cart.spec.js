import { shallowMount } from '@vue/test-utils';
import Cart from '@/views/user/Cart.vue';
import Cookie from 'vue-cookie';
import Vue from 'vue';
// import flushPromises from 'flush-promises';
// import sinon from 'sinon';

Cookie.get = jest.fn().mockImplementation(() => 'ok');

Vue.config.ignoredElements = ['b-spinner', 'router-link', 'font-awesome-icon'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        cartStockForms: [{
          productPrice: 12000,
        }],
      },
    },
  }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('Cart.vue', () => {
  //   it('Cart page render correctly', async () => {
  //     const wrapper = shallowMount(Cart);
  //     await flushPromises();
  //     expect(wrapper.exists()).toBe(true);
  //   });

  //   it('addAmount function work correctly', () => {
  //     const wrapper = shallowMount(Cart);
  //     expect(wrapper.vm.amount[3]).toBe(1);
  //     wrapper.vm.addAmount(3);
  //     expect(wrapper.vm.amount[3]).toBe(2);
  //   });

  // it('minAmount function work correctly', () => {
  //   const wrapper = shallowMount(Cart, {
  //     data() {
  //       return {
  //         price: [
  //           120000,
  //         ],
  //         amount: [
  //           5,
  //         ],
  //       };
  //     },
  //   });
  //   wrapper.vm.minAmount(0, 12000);
  //   expect(wrapper.vm.price[0]).toBe(108000);
  //   expect(wrapper.vm.amount[0]).toBe(4);
  // });

  // it('addAmount function work correctly', async () => {
  //   const wrapper = shallowMount(Cart);
  //   await flushPromises();
  // console.log(wrapper.vm.cartProduct);
  // console.log(wrapper.vm.price.price);
  // wrapper.vm.addAmount(0, 50, 12000);
  // expect(wrapper.vm.price[0]).toBe(132000);
  // expect(wrapper.vm.amount[0]).toBe(6);
  // });

  it('checkOut function work correctly', () => {
    const wrapper = shallowMount(Cart);
    // const mockMethod = jest.fn();
    // wrapper.setMethods({ checkOut: mockMethod });
    wrapper.find('#checkOut').trigger('click');
    expect(wrapper.vm.isLoading).toBe(true);
    // expect(mockMethod).toHaveBeenCalled();
  });

  it('scrollTop function called', () => {
    const wrapper = shallowMount(Cart);
    const mockMethod = jest.fn();
    wrapper.setMethods({ scrollTop: mockMethod });
    wrapper.vm.scrollTop();
    expect(mockMethod).toHaveBeenCalled();
  });

  // it('checkAll function called', () => {
  //   const wrapper = shallowMount(Cart);
  //   const mockMethod = jest.fn();
  //   wrapper.setMethods({ checkAll: mockMethod });
  //   wrapper.find('#checkAll').trigger('click');
  //   expect(mockMethod).toHaveBeenCalled();
  // });
});
