import { shallowMount } from '@vue/test-utils';
import DetailPengajuanFinished from '@/views/user/DetailPengajuanFinished.vue';
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

describe('DetailPengajuanFinished.vue', () => {
  it('DetailPengajuanFinished page render correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanFinished, {
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
    expect(wrapper.exists()).toBe(true);
  });

  it('postOrder function work correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanFinished, {
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
    wrapper.vm.expand(2);
    wrapper.vm.moveSlider(2);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanFinished, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/biddingProductPhoto/c.jpeg');
  });

  it('getMonthYear function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanFinished);
    expect(wrapper.vm.getMonthYear('October 13, 2014')).toEqual('13 Oktober 2014');
  });

  it('getTime function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanFinished);
    expect(wrapper.vm.getTime('October 13, 2014 11:13:00')).toEqual('11:13:00 AM');
  });
});
