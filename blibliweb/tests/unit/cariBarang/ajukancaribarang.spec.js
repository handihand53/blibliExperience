import { shallowMount } from '@vue/test-utils';
import AjukanCariBarang from '@/views/caribarang/AjukanCariBarang.vue';
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

describe('AjukanCariBarang.vue', () => {
  it('AjukanCariBarang page render correctly', async () => {
    const wrapper = shallowMount(AjukanCariBarang, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.ajukan();
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });
});
