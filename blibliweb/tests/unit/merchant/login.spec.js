import { shallowMount } from '@vue/test-utils';
import Login from '@/views/merchant/Login.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-spinner', 'router-link', 'font-awesome-icon', 'b-spinner'];

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
        'ROLE_MERCHANT',
      ],
    },
  }),
}));

describe('Login.vue', () => {
  it('Login render correctly', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.exists()).toBe(true);
  });

  it('do login posts should work', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          email: 'handihand53@gmail.com',
          password: 'asdasd',
          emailIsFalse: false,
          passwordIsFalse: false,
        };
      },
    });
    wrapper.find('#login').trigger('click');
    wrapper.find('#showpassword').trigger('click');
    expect(wrapper.vm.emailIsFalse).toBe(false);
    expect(wrapper.vm.isContentVisible).toBe(false);
  });

  it('do login posts should work', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          email: '',
          password: 'asdasd',
          emailIsFalse: false,
          passwordIsFalse: false,
        };
      },
    });
    wrapper.find('#login').trigger('click');
    expect(wrapper.vm.emailIsFalse).toBe(true);
    expect(wrapper.vm.isContentVisible).toBe(true);
  });


  it('do login posts should work', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          email: '',
          password: '',
          emailIsFalse: false,
          passwordIsFalse: false,
        };
      },
    });
    wrapper.find('#login').trigger('click');
    expect(wrapper.vm.emailIsFalse).toBe(true);
    expect(wrapper.vm.isContentVisible).toBe(true);
    expect(wrapper.vm.passwordMsg).toBe('Silahkan isi kata sandi anda');
    expect(wrapper.vm.passwordIsFalse).toBe(true);
  });
  it('emailCheckFormat should work', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          email: 'handihand53@gmail.com',
          password: 'asdasd',
          emailIsFalse: false,
          passwordIsFalse: false,
        };
      },
    });
    wrapper.vm.emailCheckFormat();
    expect(wrapper.vm.emailIsFalse).toBe(false);
    expect(wrapper.vm.emailMsg).toBe('Format email anda salah.');
  });
});
