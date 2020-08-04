import { shallowMount } from '@vue/test-utils';
import DetailSubmission from '@/views/barter/DetailSubmission.vue';
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

describe('DetailSubmission.vue', () => {
  it('DetailSubmission page render correctly', async () => {
    const wrapper = shallowMount(DetailSubmission, {
      mocks: {
        $route,
      },
    });
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(DetailSubmission);
    wrapper.vm.moveSlider(1);
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/barterSubmissionPhoto/c');
  });
});
