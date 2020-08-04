import { shallowMount } from '@vue/test-utils';
import DetailBarang from '@/views/admin/DetailBarang.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

const $route = {
  params: {
    id: 13124,
  },
};

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: [
        {
          categories: [
            'sd',
            'cs',
          ],
        },
      ],
    },
  }),
  post: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
}));

describe('DetailBarang.vue', () => {
  it('DetailBarang page render correctly', async () => {
    const wrapper = shallowMount(DetailBarang, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });
});
