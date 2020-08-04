import { shallowMount } from '@vue/test-utils';
import ListBarang from '@/views/merchant/ListBarang.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['b-input-group', 'b-form-input', 'b-input-group-append', 'router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-form-group', 'b-form-radio', 'b-alert', 'b-modal', 'b-spinner'];

Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        productStockList: [
          {
            shopForm: {
              shopId: 123,
            },
          },
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

describe('ListBarang.vue', () => {
  it('ListBarang page render correctly', async () => {
    const wrapper = shallowMount(ListBarang);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function correctly', async () => {
    const wrapper = shallowMount(ListBarang);
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/productPhoto/c.jpeg');
  });

  it('formatPrice function work correctly', () => {
    const wrapper = shallowMount(ListBarang);
    expect(wrapper.vm.formatPrice(1000)).toEqual('1.000');
  });

  it('getDescription function work correctly', () => {
    const wrapper = shallowMount(ListBarang);
    expect(wrapper.vm.getDescription('asd')).toEqual('asd');
  });

  it('getDescription function work correctly', () => {
    const wrapper = shallowMount(ListBarang);
    expect(wrapper.vm.getDescription('when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged')).toEqual('when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, bu . . .');
  });
});
