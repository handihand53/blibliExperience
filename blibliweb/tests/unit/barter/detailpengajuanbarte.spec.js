import { shallowMount } from '@vue/test-utils';
import DetailPengajuanBarter from '@/views/barter/DetailPengajuanBarter.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

const $route = {
  params: {
    id: 123,
  },
};

jest.mock('axios', () => ({
  put: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
  get: () => Promise.resolve({
    data: {
      data: [
        {
          productBarterId: 123,
        },
      ],
    },
  }),
  post: () => Promise.resolve({
    data: {
      status: 'success',
    },
  }),
}));

describe('DetailBarter.vue', () => {
  it('DetailBarter page render correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanBarter, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarter);
    wrapper.vm.moveSlider(1);
    wrapper.vm.moveSlider2(2);
    wrapper.vm.expand(2);
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/barterProductPhoto/c');
    expect(wrapper.vm.getSubmissionImage('/asd/c')).toEqual('/assets/resources/uploads/barterSubmissionPhoto/c');
  });

  it('postResi function work correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanBarter, {
      data() {
        return {
          resi: '123',
        };
      },
    });
    wrapper.vm.postResi();
    await flushPromises();
  });

  it('postResi function work correctly', async () => {
    const wrapper = shallowMount(DetailPengajuanBarter, {
      data() {
        return {
          resi: '123',
        };
      },
    });
    wrapper.vm.confirmProduct();
    await flushPromises();
  });
});
