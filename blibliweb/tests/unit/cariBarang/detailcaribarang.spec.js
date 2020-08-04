import { shallowMount } from '@vue/test-utils';
import DetailCariBarang from '@/views/caribarang/DetailCariBarang.vue';
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

const $route = {
  params: {
    id: '123',
  },
};

describe('DetailCariBarang.vue', () => {
  it('DetailCariBarang page render correctly', async () => {
    const wrapper = shallowMount(DetailCariBarang, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.scrollToTop();
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', async () => {
    const wrapper = shallowMount(DetailCariBarang, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    wrapper.vm.countDownChanged(2);
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/biddingProductPhoto/c.jpeg');
  });

  it('getListPengajuan function work correctly', async () => {
    const wrapper = shallowMount(DetailCariBarang, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.getListPengajuan();
    wrapper.vm.setAmount();
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/biddingProductPhoto/c.jpeg');
  });

  it('addbid, min bid, tawarkan function work correctly', async () => {
    const wrapper = shallowMount(DetailCariBarang, {
      mocks: {
        $route,
      },
      data() {
        return {
          amount: 11,
          product: {
            nextBid: 10,
            currentPrice: 30,
          },
        };
      },
    });
    wrapper.vm.addBid();
    wrapper.vm.minBid();
    wrapper.vm.moveSlider(3);
    wrapper.vm.tawarkan();
    await flushPromises();
    expect(wrapper.vm.slide).toBe(3);

  });
});
