import { shallowMount } from '@vue/test-utils';
import Account from '@/views/Account.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Cookie.set = jest.fn().mockImplementation(() => 'ok');
Cookie.get = jest.fn().mockImplementation(() => 'ok');

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        userCreatedAt: 'juni',
      },
    },
  }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('Account.vue', () => {
  it('Account page render correctly', () => {
    const wrapper = shallowMount(Account);
    expect(wrapper.exists()).toBe(true);
  });

  it('checkUser function work correctly', async () => {
    const wrapper = shallowMount(Account);
    wrapper.vm.checkUser();
    // wrapper.vm.logOut();
    await flushPromises();
    expect(wrapper.vm.createdAt).toBe('juni');
  });
});
