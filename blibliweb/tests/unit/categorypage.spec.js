import { shallowMount } from '@vue/test-utils';
import CategoryPage from '@/views/CategoryPage.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

// jest.mock('axios', () => ({
//   get: () => Promise.resolve({ data: [{ val: 1 }] }),
// }));

const $route = {
  params: {
    name: 'kategori',
  },
};

describe('CategoryPage.vue', () => {
  it('CategoryPage page render correctly', () => {
    const wrapper = shallowMount(CategoryPage, {
      mocks: { $route },
    });

    expect(wrapper.exists()).toBe(true);
  });

  // it('changeFormatText function run correctly', () => {
  //   const wrapper = shallowMount(CategoryPage);
  //   const name = 'HANDI HERMAWAN';
  //   expect(wrapper.vm.changeFormatText(name)).toBe(name.toLowerCase());
  // });
});
