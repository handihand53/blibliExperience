import { shallowMount } from '@vue/test-utils';
import DetailBarter from '@/views/barter/DetailBarter.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

const $route = {
  params: {
    id: 123,
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
      data: [
        {
          productBarterId: 123,
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

describe('DetailBarter.vue', () => {
  it('DetailBarter page render correctly', async () => {
    const wrapper = shallowMount(DetailBarter, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.ajukanBarter();
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(DetailBarter);
    wrapper.vm.moveSlider(1);
    wrapper.vm.countDownChanged(2);
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/barterProductPhoto/c');
  });
});
