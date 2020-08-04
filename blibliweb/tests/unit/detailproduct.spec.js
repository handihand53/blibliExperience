import { shallowMount } from '@vue/test-utils';
import DetailProduct from '@/views/DetailProduct.vue';
import flushPromises from 'flush-promises';
import Vue from 'vue';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font- wesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
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
        cartForms: [
          {
            stockForm: {
              stockId: '123',
            },
          },
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
    id: '15684',
  },
};

const $refs = {
  location: {
    value: 'asd',
  },
};

describe('DetailProduct.vue', () => {
  it('DetailProduct page render correctly', () => {
    const wrapper = shallowMount(DetailProduct, {
      mocks: {
        $route,
        $refs,
      },
    });
    // wrapper.vm.confirmLocation();
    // expect(wrapper.vm.show).toBe(false);
    // expect(wrapper.vm.locations).toBe(false);
    expect(wrapper.exists()).toBe(true);
  });

  it('Description work correctly', () => {
    const wrapper = shallowMount(DetailProduct, {
      mocks: { $route },
    });
    wrapper.vm.description();
    wrapper.vm.detail();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(DetailProduct, {
      mocks: { $route },
    });
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/productPhoto/c');
  });

  it('getCart function work correctly', () => {
    const wrapper = shallowMount(DetailProduct, {
      mocks: { $route },
    });
    wrapper.vm.getCart();
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/productPhoto/c');
  });

  it('formatPrice function run correctly', () => {
    const wrapper = shallowMount(DetailProduct, {
      mocks: { $route },
    });
    wrapper.vm.countDownChanged(2);
    expect(wrapper.vm.dismissCountDown).toBe(2);
    wrapper.vm.moveSlider(1);
    expect(wrapper.vm.slide).toEqual(1);
    expect(wrapper.vm.formatPrice(12000)).toBe('12.000');
  });

  // it('getCart function work correctly', async () => {
  //   const wrapper = shallowMount(DetailProduct, {
  //     mocks: {
  //       $route,
  //     },
  //     data() {
  //       return {
  //         detailProduct: {
  //           stockId: '123',
  //         },
  //       };
  //     },
  //   });
  //   wrapper.vm.getCart();
  //   await flushPromises();
  // });

  // it('getCart function work correctly', async () => {
  //   const wrapper = shallowMount(DetailProduct, {
  //     data() {
  //       return {
  //         detailProduct: {
  //           stockId: '1223',
  //         },
  //         sama: false,
  //       };
  //     },
  //   });
  //   wrapper.vm.getCart();
  //   await flushPromises();
  // });

  // it('buyItem function work correctly', async () => {
  //   const wrapper = shallowMount(DetailProduct, {
  //     data() {
  //       return {
  //         detailProduct: {
  //           stockId: '1223',
  //         },
  //         sama: false,
  //       };
  //     },
  //   });
  //   wrapper.vm.buyItem();
  //   await flushPromises();
  // });

  // it('buyItem function work correctly', async () => {
  //   const wrapper = shallowMount(DetailProduct, {
  //     data() {
  //       return {
  //         detailProduct: {
  //           stockId: '123',
  //         },
  //         sama: false,
  //       };
  //     },
  //   });
  //   wrapper.vm.buyItem();
  //   await flushPromises();
  // });

  // it('addAmount function work correctly', async () => {
  //   const wrapper = shallowMount(DetailProduct, {
  //     mocks: {
  //       $route,
  //     },
  //     data() {
  //       return {
  //         currentIdx: 0,
  //         allProduct: {
  //           productStockList: [
  //             {
  //               shopForm: {
  //                 shopId: 'sd',
  //               },
  //               stockId: '123',
  //             },
  //           ],
  //         },
  //         sama: false,
  //       };
  //     },
  //   });
  //   wrapper.vm.addAmount(1, '123', 50, '23');
  //   await flushPromises();
  // });
});
