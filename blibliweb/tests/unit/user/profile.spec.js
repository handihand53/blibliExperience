import { shallowMount } from '@vue/test-utils';
import Profile from '@/views/user/Profile.vue';
import Vue from 'vue';
import Cookie from 'vue-cookie';
import flushPromises from 'flush-promises';

Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      code: 200,
      status: 'OK',
      data: {
        userId: 'b2ce0878-ca94-46b2-b257-4cd5f85a616d',
        userEmail: 'handihand53@gmail.com',
        userName: 'Handi Hermawan',
        userBirthDate: null,
        userPhoneNumber: null,
        userGender: null,
        userCreatedAt: '2020-07-06T17:20:31.222',
      },
      paging: null,
      errors: null,
    },
  }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon'];

describe('Profile.vue', () => {
  it('Profile page render correctly', () => {
    const wrapper = shallowMount(Profile);
    expect(wrapper.exists()).toBe(true);
  });

  it('first load Data loading correctly', async () => {
    const wrapper = shallowMount(Profile);
    wrapper.vm.checkUser();
    await flushPromises();
    expect(wrapper.vm.isLoading).toBe(false);
  });
});
