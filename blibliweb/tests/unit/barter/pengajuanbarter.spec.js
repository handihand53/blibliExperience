import { shallowMount } from '@vue/test-utils';
import PengajuanBarter from '@/views/barter/PengajuanBarter.vue';
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

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
describe('PengajuanBarter.vue', () => {
  it('PengajuanBarter page render correctly', async () => {
    const wrapper = shallowMount(PengajuanBarter, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('onFileChange function work correctly', async () => {
    const wrapper = shallowMount(PengajuanBarter, {
      data() {
        return {
          image: [
            'asdads.jpg',
            'image2.jpg',
          ],
        };
      },
    });
    const sd = {
      target: {
        files: [
          {
            type: 'image/png',
          },
        ],
      },
    };
    wrapper.vm.onFileChange(sd);
    wrapper.vm.remove(1);
  });

  it('ajukanBarter page render correctly', async () => {
    const wrapper = shallowMount(PengajuanBarter, {
      mocks: {
        $route,
        data() {
          return {
            image: [
              'asd.jpg',
              'ds.jpg',
            ],
            namaProduk: 'sad',
            brand: 'aqua',
            status: 'baru',
            deskripsi: 'bagus',
            kelengkapan: 'fullset',
            volume: '3x4cm',
            berat: 3,
          };
        },
      },
    });
    wrapper.vm.ajukanBarter();
    await flushPromises();
  });

  it('ajukanBarter page render correctly', async () => {
    const wrapper = shallowMount(PengajuanBarter, {
      mocks: {
        $route,
        data() {
          return {
            image: [
              'asd.jpg',
              'ds.jpg',
            ],
            namaProduk: 'sad',
            brand: 'aqua',
            status: 'baru',
            berat: 3,
          };
        },
      },
    });
    wrapper.vm.ajukanBarter();
    await flushPromises();
  });
});
