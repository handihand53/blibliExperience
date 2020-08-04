import { shallowMount } from '@vue/test-utils';
import KonfirmasiBarter from '@/views/admin/KonfirmasiBarter.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['font-awesome-icon', 'b-button'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

const $route = {
  params: {
    id: 13124,
  },
};

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        categories: [
          'sd',
          'cs',
        ],
      },
    },
  }),
  post: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
  put: () => Promise.resolve({
    data: 'oke',
  }),
}));

describe('KonfirmasiBarter.vue', () => {
  it('KonfirmasiBarter page render correctly', async () => {
    const wrapper = shallowMount(KonfirmasiBarter);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getBarterOrderDetail function correctly', async () => {
    const wrapper = shallowMount(KonfirmasiBarter, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.getBarterOrderDetail();
    wrapper.vm.verified('ROLE_USER');
    wrapper.vm.updateToWareHouseSeller();
    wrapper.vm.updateToWareHouseBuyer();
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });
});
