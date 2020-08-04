import { shallowMount } from '@vue/test-utils';
import EditBarang from '@/views/admin/EditBarang.vue';
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

describe('EditBarang.vue', () => {
  it('EditBarang page render correctly', async () => {
    const wrapper = shallowMount(EditBarang, {
      mocks: {
        $route,
      },
    });
    wrapper.vm.getData();
    wrapper.vm.countDownChanged(2);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.dismissCountDown).toBe(2);
  });

  it('checkAll page render correctly', async () => {
    const wrapper = shallowMount(EditBarang, {
      mocks: {
        $route,
      },
      data() {
        return {
          namaBarang: 'handihand53@gmail.com',
          brand: 'Handi Hermawan',
          barcode: '123123',
          beratBarang: '123123',
          dimensiBarang: 'true',
          deskripsi: 'asd',
          kategori: 'das',
        };
      },
    });
    wrapper.vm.checkAll();
    await flushPromises();
  });

  it('checkAll page render correctly', async () => {
    const wrapper = shallowMount(EditBarang, {
      mocks: {
        $route,
      },
      data() {
        return {
          namaBarang: '',
          brand: 'Handi Hermawan',
          barcode: '',
          beratBarang: '',
          dimensiBarang: 'true',
          deskripsi: 'asd',
          kategori: 'das',
        };
      },
    });
    wrapper.vm.checkAll();
    await flushPromises();
  });

  it('edit page render correctly', async () => {
    const wrapper = shallowMount(EditBarang, {
      mocks: {
        $route,
      },
      data() {
        return {
          namaBarang: '',
          brand: 'Handi Hermawan',
          barcode: '',
          beratBarang: '',
          dimensiBarang: 'true',
          deskripsi: 'asd',
          kategori: 'das',
        };
      },
    });
    wrapper.vm.edit();
    await flushPromises();
  });
});
