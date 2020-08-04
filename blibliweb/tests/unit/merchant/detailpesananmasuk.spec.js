import { shallowMount } from '@vue/test-utils';
import DetailPesananMasuk from '@/views/merchant/DetailPesananMasuk.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-form-group', 'b-form-radio', 'b-alert', 'b-modal', 'b-spinner'];

const $route = {
  push: '/merchant/login',
  params: {
    id: 123123,
  },
};

Cookie.get = jest.fn().mockImplementation(() => 'ok');

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

describe('DetailPesananMasuk.vue', () => {
  it('DetailPesananMasuk page render correctly', async () => {
    const wrapper = shallowMount(DetailPesananMasuk, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/productPhoto/c.jpeg');
    expect(wrapper.exists()).toBe(true);
  });

  it('DetailPesananMasuk page render correctly', () => {
    const wrapper = shallowMount(DetailPesananMasuk);
    wrapper.vm.proses();
    expect(wrapper.vm.isLoading).toBe(true);
  });
});
