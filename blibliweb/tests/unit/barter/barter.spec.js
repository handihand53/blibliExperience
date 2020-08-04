import { shallowMount } from '@vue/test-utils';
import Barter from '@/views/barter/Barter.vue';
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

describe('Barter.vue', () => {
  it('Barter page render correctly', async () => {
    const wrapper = shallowMount(Barter);
    wrapper.vm.getAllProductByCategory('DAILY');
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(Barter);
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/barterProductPhoto/c');
  });
});
