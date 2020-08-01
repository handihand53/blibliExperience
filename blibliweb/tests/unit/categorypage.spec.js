import { shallowMount } from '@vue/test-utils';
import CategoryPage from '@/views/CategoryPage.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-col', 'b-pagination', 'b-row', 'b-form-input', 'b-alert'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        productForm: {
          productCategory: 'DAILY',
        },
      },
    },
  }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

const $route = {
  params: {
    name: 'DAILY',
  },
};

describe('CategoryPage.vue', () => {
  it('CategoryPage page render correctly', () => {
    const wrapper = shallowMount(CategoryPage, {
      mocks: { $route },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('formatPrice function run correctly', () => {
    const wrapper = shallowMount(CategoryPage, {
      mocks: { $route },
    });
    expect(wrapper.vm.formatPrice(12000)).toBe('12.000');
  });

  it('productDetailsByCategory work correctly', () => {
    const wrapper = shallowMount(CategoryPage, {
      mocks: { $route },
    });
    expect(wrapper.vm.ProductDetailsByCategory).toEqual([]);
  });

  // it('addToBag function work correctly', () => {
  //   const wrapper = shallowMount(CategoryPage, {
  //     mocks: { $route },
  //   });
  // wrapper.vm.addToBag();
  // expect(wrapper.vm.alertMsg).toBe('Produk berhasil ditambahkan');
  // expect(wrapper.vm.dismissCountDown).toBe(2);
  // });
});
