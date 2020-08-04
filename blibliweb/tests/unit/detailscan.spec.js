import { shallowMount } from '@vue/test-utils';
import DetailScan from '@/views/DetailScan.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Cookie.set = jest.fn().mockImplementation(() => 'ok');
Cookie.get = jest.fn().mockImplementation(() => 'ok');

const $route = {
  params: {
    barcode: 'sad',
  },
};

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
jest.mock('axios', () => ({
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
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
  put: () => Promise.resolve({ data: 'ok' }),
}));

describe('DetailScan.vue', () => {
  it('DetailScan page render correctly', async () => {
    const wrapper = shallowMount(DetailScan, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.checkLoginUser();
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', async () => {
    const wrapper = shallowMount(DetailScan, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.checkLoginUser();
    await flushPromises();
    wrapper.vm.countDownChanged(2);
    wrapper.vm.description();
    wrapper.vm.detail();
    wrapper.vm.moveSlider(2);
    expect(wrapper.vm.slide).toBe(2);
    expect(wrapper.vm.dismissCountDown).toBe(2);
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/productPhoto/c.jpeg');
  });

  it('getCart function work correctly', async () => {
    const wrapper = shallowMount(DetailScan, {
      data() {
        return {
          detailProduct: {
            stockId: '123',
          },
        };
      },
    });
    wrapper.vm.getCart();
    await flushPromises();
  });

  it('getCart function work correctly', async () => {
    const wrapper = shallowMount(DetailScan, {
      data() {
        return {
          detailProduct: {
            stockId: '1223',
          },
          sama: false,
        };
      },
    });
    wrapper.vm.getCart();
    await flushPromises();
  });

  it('buyItem function work correctly', async () => {
    const wrapper = shallowMount(DetailScan, {
      data() {
        return {
          detailProduct: {
            stockId: '1223',
          },
          sama: false,
        };
      },
    });
    wrapper.vm.buyItem();
    await flushPromises();
  });

  it('buyItem function work correctly', async () => {
    const wrapper = shallowMount(DetailScan, {
      data() {
        return {
          detailProduct: {
            stockId: '123',
          },
          sama: false,
        };
      },
    });
    wrapper.vm.buyItem();
    await flushPromises();
  });

  it('addAmount function work correctly', async () => {
    const wrapper = shallowMount(DetailScan, {
      data() {
        return {
          detailProduct: {
            stockId: '123',
          },
          sama: false,
        };
      },
    });
    wrapper.vm.addAmount(1, '123', 50, '23');
    await flushPromises();
  });
});
