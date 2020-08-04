import { shallowMount } from '@vue/test-utils';
import DetailListBarang from '@/views/merchant/DetailListBarang.vue';
import flushPromises from 'flush-promises';

const $route = {
  push: '/merchant/login',
  params: {
    id: 123123,
  },
};

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        shopId: '12342',
      },
    },
  }),
  post: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_ADMIN',
      ],
    },
  }),
}));

describe('DetailListBarang.vue', () => {
  it('DetailListBarang page render correctly', async () => {
    const wrapper = shallowMount(DetailListBarang, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('moveSlider function work correctly', () => {
    const wrapper = shallowMount(DetailListBarang);
    wrapper.vm.moveSlider(1);
    expect(wrapper.vm.slide).toBe(1);
  });

  it('editProduct function work correctly', () => {
    const wrapper = shallowMount(DetailListBarang);
    wrapper.vm.editProduct();
    expect(wrapper.vm.isLoading).toBe(true);
  });

  it('getImage function correctly', async () => {
    const wrapper = shallowMount(DetailListBarang);
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/productPhoto/c.jpeg');
  });
});
