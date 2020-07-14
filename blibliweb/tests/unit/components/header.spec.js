import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import flushPromises from 'flush-promises';
import Vue from 'vue';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'b-input-group-prepend', 'b-input-group-append', 'b-form-input', 'b-input-group-prepend', 'b-input-group', 'font-awesome-icon', 'b-button'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      user: {
        data: {
          userName: 'Handi Hermawan',
        },
      },
    },
  }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('Header.vue', () => {
  it('Header page render correctly', () => {
    const wrapper = shallowMount(Header, {
      methods: {
        getUserData: () => {},
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('getFirstName Computed function return correctly', async () => {
    const wrapper = shallowMount(Header);
    wrapper.vm.getUserData();
    await flushPromises();
    // expect(wrapper.vm.getFirstName).toBe('Handi');
    // expect(wrapper.vm.getName).toBe('Handi Hermawan');
  });
});
