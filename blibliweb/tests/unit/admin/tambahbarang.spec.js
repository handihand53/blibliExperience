import { shallowMount } from '@vue/test-utils';
import TambahBarang from '@/views/admin/TambahBarang.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

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
}));

describe('TambahBarang.vue', () => {
  it('TambahBarang page render correctly', async () => {
    const wrapper = shallowMount(TambahBarang);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('countDownChanged function work correctly', async () => {
    const wrapper = shallowMount(TambahBarang);
    await flushPromises();
    wrapper.vm.countDownChanged(0);
    expect(wrapper.vm.dismissCountDown).toBe(0);
  });

  it('checkAll work correctly', async () => {
    const wrapper = shallowMount(TambahBarang, {
      data() {
        return {
          namaBarang: 'boneka',
          brand: 'asus',
          barcode: '123123',
          beratBarang: '123123',
          dimensiBarang: '123x42',
          deskripsi: 'baik',
          kategori: 'ada',
          image: [
            'asd.jpeg',
            's.jpeg',
          ],
        };
      },
    });
    await flushPromises();
    wrapper.vm.checkAll();
    expect(wrapper.vm.btnState).toBe(true);
  });

  it('onFileChange function work correctly', async () => {
    const wrapper = shallowMount(TambahBarang, {
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
  });

  it('post work correctly', async () => {
    const wrapper = shallowMount(TambahBarang, {
      data() {
        return {
          namaBarang: 'boneka',
          brand: 'asus',
          barcode: '123123',
          beratBarang: '123123',
          dimensiBarang: '123x42',
          deskripsi: 'baik',
          kategori: 'ada',
          image: [
            'asd.jpeg',
            's.jpeg',
          ],
        };
      },
    });
    wrapper.vm.post();
    await flushPromises();
    expect(wrapper.vm.btnState).toBe(false);
  });

  it('remove work correctly', async () => {
    const wrapper = shallowMount(TambahBarang, {
      data() {
        return {
          image: [
            'asd.jpeg',
            's.jpeg',
          ],
        };
      },
    });
    wrapper.vm.remove(1);
    await flushPromises();
    expect(wrapper.vm.image.length).toBe(1);
  });
});
