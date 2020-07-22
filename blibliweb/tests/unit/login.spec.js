import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import flushPromises from 'flush-promises';
import Vue from 'vue';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['b-spinner', 'router-link', 'font-awesome-icon', 'b-spinner'];

const $router = {
  path: '/',
};

Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
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


describe('Login.vue', () => {
  it('Login render correctly', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.exists()).toBe(true);
  });

  it('mocking the axios call do login posts should work', async () => {
    const wrapper = shallowMount(Login, {
      mocks: {
        $router,
      },
      data() {
        return {
          email: 'handihand53@gmail.com',
          password: 'asdasd',
          emailIsFalse: false,
          passwordIsFalse: false,
        };
      },
    });
    expect(wrapper.vm.isLoggedIn).toBe(true);
    expect(wrapper.vm.isLoading).toBe(true);
    wrapper.find('#login').trigger('click');
    await flushPromises();
    expect(wrapper.vm.isLoggedIn).toBe(true);
    expect(wrapper.vm.isLoggedIn).toBe(true);
    expect(wrapper.vm.isLoggedIn).toBe(true);
    expect(wrapper.vm.$router.path).toBe('/');
  });

  it('Check Login button work correctly', () => {
    const wrapper = shallowMount(Login, {
      methods: {
        checkLoginUser: () => {},
      },
      data() {
        return {
          email: 'handihand53@gmail.com',
          password: 'asdasd',
        };
      },
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.emailIsFalse).toBe(false);
    expect(wrapper.vm.passwordIsFalse).toBe(false);
  });

  it('Check if eye icon work correctly when clicked', () => {
    const wrapper = shallowMount(Login, {
      methods: {
        checkLoginUser: () => {},
      },
    });
    expect(wrapper.vm.isContentVisible).toBe(true);
    wrapper.find('span').trigger('click');
    expect(wrapper.vm.isContentVisible).toBe(false);
  });

  it('Check if user email is not empty', () => {
    const wrapper = shallowMount(Login, {
      methods: {
        checkLoginUser: () => {},
      },
      data() {
        return {
          email: 'handihand53@gmail.com',
        };
      },
    });
    wrapper.vm.checkEmail();
    expect(wrapper.vm.emailIsFalse).toBe(false);
  });

  it('Check if user email is empty', () => {
    const wrapper = shallowMount(Login, {
      methods: {
        checkLoginUser: () => {},
      },
      data() {
        return {
          email: '',
        };
      },
    });
    wrapper.vm.checkEmail();
    expect(wrapper.vm.emailIsFalse).toBe(true);
    expect(wrapper.vm.emailMsg).toBe('Silahkan isi email anda');
  });

  it('Check if user password is not empty', () => {
    const wrapper = shallowMount(Login, {
      methods: {
        checkLoginUser: () => {},
      },
      data() {
        return {
          password: 'asdasd',
        };
      },
    });
    wrapper.vm.checkPassword();
    expect(wrapper.vm.passwordIsFalse).toBe(false);
  });

  it('Check if user email format is correct', () => {
    const wrapper = shallowMount(Login, {
      methods: {
        checkLoginUser: () => {},
      },
      data() {
        return {
          email: 'handihand53@gmail.com',
        };
      },
    });
    wrapper.vm.emailCheckFormat();
    expect(wrapper.vm.emailIsFalse).toBe(false);
  });

  it('Check if user password is empty', () => {
    const wrapper = shallowMount(Login, {
      methods: {
        checkLoginUser: () => {},
      },
      data() {
        return {
          password: '',
        };
      },
    });
    wrapper.vm.checkPassword();
    expect(wrapper.vm.passwordMsg).toBe('Silahkan isi kata sandi anda');
    expect(wrapper.vm.passwordIsFalse).toBe(true);
  });
});
