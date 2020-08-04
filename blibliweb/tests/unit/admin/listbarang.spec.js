import { shallowMount } from '@vue/test-utils';
import ListBarang from '@/views/admin/ListBarang.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['font-awesome-icon', 'b-button'];
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
  put: () => Promise.resolve({
    data: 'oke',
  }),
}));

describe('ListBarang.vue', () => {
  it('ListBarang page render correctly', async () => {
    const wrapper = shallowMount(ListBarang);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getDescription function correctly', async () => {
    const wrapper = shallowMount(ListBarang);
    await flushPromises();
    expect(wrapper.vm.getDescription('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially')).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took ...');
    expect(wrapper.vm.getDescription('dasda')).toBe('dasda');
  });

  it('searchProduk function correctly', async () => {
    const wrapper = shallowMount(ListBarang);
    wrapper.vm.searchProduk();
    await flushPromises();
  });
});
