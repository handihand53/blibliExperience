import { shallowMount } from '@vue/test-utils';
import PostProductComponent from '@/components/PostProductComponent.vue';
import Cookie from 'vue-cookie';
import Vue from 'vue';
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

describe('PostProductComponent.vue', () => {
  it('PostProductComponent page render correctly', async () => {
    const wrapper = shallowMount(PostProductComponent);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('Posting function work correctly', async () => {
    const wrapper = shallowMount(PostProductComponent, {
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
          barangPreferensi: 's',
          volume: 'sad',
          berat: 'sad',
          kategori: 'sad',
        };
      },
    });
    wrapper.vm.posting();
    expect(wrapper.exists()).toBe(true);
  });

  it('Posting function work correctly', async () => {
    const wrapper = shallowMount(PostProductComponent, {
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
          kategori: 'sad',
        };
      },
    });
    wrapper.vm.posting();
    expect(wrapper.vm.formAllFilled).toBe(false);
  });

  it('Remove function work correctly', async () => {
    const wrapper = shallowMount(PostProductComponent, {
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
    const wrapper = shallowMount(PostProductComponent, {
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
    const wrapper = shallowMount(PostProductComponent, {
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
