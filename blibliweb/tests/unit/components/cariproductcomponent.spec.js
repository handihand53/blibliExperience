import { shallowMount } from '@vue/test-utils';
import CariProductComponent from '@/components/CariProductComponent.vue';
import Vue from 'vue';
import Cookie from 'vue-cookie';
import flushPromises from 'flush-promises';

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

describe('CariProductComponent.vue', () => {
  it('CariProductComponent page render correctly', async () => {
    const wrapper = shallowMount(CariProductComponent);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('Posting function work correctly', async () => {
    const wrapper = shallowMount(CariProductComponent, {
      data() {
        return {
          image: [
            'asdads.jpg',
            'image2.jpg',
          ],
          namaBarang: 'as',
          brand: 'sd',
          status: 'sad',
          deskripsi: 'sad',
          kelengkapanPaket: 'sad',
          bid: 'sad',
          harga: 'sad',
          closeBidDate: 'sad',
          volume: 'sad',
          berat: 'sad',
          kategori: 'sad',
        };
      },
    });
    wrapper.vm.posting();
    await flushPromises();
    expect(wrapper.vm.formAllFilled).toBe(true);
  });

  it('Posting function work correctly', async () => {
    const wrapper = shallowMount(CariProductComponent, {
      data() {
        return {
          harga: 'sad',
          closeBidDate: 'sad',
          volume: 'sad',
          berat: 'sad',
          kategori: 'sad',
        };
      },
    });
    wrapper.vm.posting();
    await flushPromises();
    expect(wrapper.vm.formAllFilled).toBe(false);
  });

  it('Remove function work correctly', async () => {
    const wrapper = shallowMount(CariProductComponent, {
      data() {
        return {
          image: [
            'asdads.jpg',
            'image2.jpg',
          ],
        };
      },
    });
    wrapper.vm.remove(0);
    expect(wrapper.vm.image.length).toBe(1);
  });

  it('countDownChanged function work correctly', async () => {
    const wrapper = shallowMount(CariProductComponent, {
      data() {
        return {
          image: [
            'asdads.jpg',
            'image2.jpg',
          ],
        };
      },
    });
    wrapper.vm.countDownChanged(0);
    expect(wrapper.vm.dismissCountDown).toBe(0);
  });

  it('onFileChange function work correctly', async () => {
    const wrapper = shallowMount(CariProductComponent, {
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
});
