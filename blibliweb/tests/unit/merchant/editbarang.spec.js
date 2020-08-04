import { shallowMount } from '@vue/test-utils';
import EditBarang from '@/views/merchant/EditBarang.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-form-group', 'b-form-radio', 'b-alert', 'b-modal', 'b-spinner'];

const $route = {
  params: {
    id: 123123,
  },
};

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

describe('EditBarang.vue', () => {
  it('EditBarang page render correctly', async () => {
    const wrapper = shallowMount(EditBarang, {
      mocks: {
        $route,
      },
      data() {
        return {
          dataId: 123,
        };
      },
    });
    await flushPromises();
    wrapper.vm.countDownChanged(2);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.dismissCountDown).toBe(2);
  });

  it('checkAll function work correctly', () => {
    const wrapper = shallowMount(EditBarang, {
      data() {
        return {
          stock: 23,
        };
      },
    });
    wrapper.vm.checkAll();
  });

  it('checkAll function work correctly', () => {
    const wrapper = shallowMount(EditBarang, {
      data() {
        return {
          stock: '',
        };
      },
    });
    wrapper.vm.checkAll();
  });

  it('edit function work correctly', () => {
    const wrapper = shallowMount(EditBarang, {
      data() {
        return {
          stock: '',
        };
      },
    });
    wrapper.vm.edit();
  });
});
