import { shallowMount } from '@vue/test-utils';
import Login from '@/views/admin/Login.vue';

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        productForm: {
          productCategory: 'DAILY',
        },
      },
    },
  }),
  post: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_ADMIN',
      ],
    },
  }),
}));

describe('Login.vue', () => {
  it('Login page render correctly', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.isLoading).toBe('');
  });

  it('showPassword function work correctly', () => {
    const wrapper = shallowMount(Login);
    wrapper.find('#showpassword').trigger('click');
  });

  it('Login function work correctly', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          email: 'admin@gmail.com',
          password: 'admin123',
        };
      },
    });
    expect(wrapper.vm.isLoading).toBe('');
    wrapper.find('#login').trigger('click');
    wrapper.vm.emailCheckFormat();
    expect(wrapper.vm.isLoading).toBe(true);
  });

  it('checkEmail function work correctly', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          email: '',
          password: 'admin123',
        };
      },
    });
    wrapper.find('#login').trigger('click');
    expect(wrapper.vm.emailIsFalse).toBe(true);
  });

  it('checkPassword function work correctly', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          email: 'admin@gmail.com',
          password: '',
        };
      },
    });
    wrapper.find('#login').trigger('click');
    expect(wrapper.vm.passwordIsFalse).toBe(true);
  });
});
