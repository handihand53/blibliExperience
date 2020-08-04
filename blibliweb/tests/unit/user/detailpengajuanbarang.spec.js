import { shallowMount } from '@vue/test-utils';
import DetailPengajuanBarang from '@/views/user/DetailPengajuanBarang.vue';
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

describe('DetailPengajuanBarang.vue', () => {
  it('DetailPengajuanBarang page render correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanBarang, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('formatPrice function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarang);
    expect(wrapper.vm.formatPrice(13000)).toBe('13.000');
  });

  it('expand function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarang);
    expect(wrapper.vm.isExpand[1]).toBe(false);
    wrapper.vm.expand(1);
    expect(wrapper.vm.isExpand[1]).toBe(true);
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarang);
    wrapper.vm.moveSlider(1);
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/biddingProductPhoto/c');
  });

  it('getMonthYear function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarang);
    expect(wrapper.vm.getMonthYear('October 13, 2014')).toEqual('13 Oktober 2014');
  });

  it('getTime function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarang);
    expect(wrapper.vm.getTime('October 13, 2014 11:13:00')).toEqual('11:13:00 AM');
  });
});
