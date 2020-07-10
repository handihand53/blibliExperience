import { shallowMount } from '@vue/test-utils';
import ChangePassword from '@/views/user/ChangePassword.vue';
import Vue from 'vue';
import Cookie from 'vue-cookie';
import flushPromises from 'flush-promises';

Vue.config.ignoredElements = ['b-spinner'];

Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        userId: '123',
      },
    },
  }),
  put: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('ChangePassword.vue', () => {
  it('ChangePassword page render correctly', () => {
    const wrapper = shallowMount(ChangePassword, {
      methods: {
        checkUser: () => {},
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('checkOldPassword function work correctly', () => {
    const wrapper = shallowMount(ChangePassword, {
      data() {
        return {
          oldPassword: 'yose123',
        };
      },
    });
    wrapper.vm.checkOldPassword();
    expect(wrapper.vm.oldPasswordStatus).toBe(false);
  });

  it('checkOldPassword function work correctly', () => {
    const wrapper = shallowMount(ChangePassword, {
      data() {
        return {
          oldPassword: '',
        };
      },
    });
    wrapper.vm.checkOldPassword();
    expect(wrapper.vm.oldPasswordStatus).toBe(true);
  });

  it('checkNewPassword function work correctly', () => {
    const wrapper = shallowMount(ChangePassword, {
      data() {
        return {
          newPassword: '',
        };
      },
    });
    wrapper.vm.checkNewPassword();
    expect(wrapper.vm.newPasswordStatus).toBe(true);
  });

  it('checkNewPassword function work correctly', () => {
    const wrapper = shallowMount(ChangePassword, {
      data() {
        return {
          newPassword: 'yosse123',
        };
      },
    });
    wrapper.vm.checkNewPassword();
    expect(wrapper.vm.newPasswordStatus).toBe(false);
  });

  it('checkConfirmPassword function work correctly', () => {
    const wrapper = shallowMount(ChangePassword, {
      data() {
        return {
          confirmNewPassword: 'yose123',
          newPassword: 'yose123',
        };
      },
    });
    wrapper.vm.checkConfirmPassword();
    expect(wrapper.vm.confirmPasswordStatus).toBe(false);
  });

  it('checkConfirmPassword function work correctly', () => {
    const wrapper = shallowMount(ChangePassword, {
      data() {
        return {
          confirmNewPassword: 'yose1234',
          newPassword: 'yose123',
        };
      },
    });
    wrapper.vm.checkConfirmPassword();
    expect(wrapper.vm.confirmPasswordStatus).toBe(true);
  });

  it('updatePassword function work correctly', async () => {
    const wrapper = shallowMount(ChangePassword, {
      data() {
        return {
          oldPassword: 'handi123',
          confirmNewPassword: 'yose123',
          newPassword: 'yose123',
        };
      },
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isLoading).toBe(true);
    await flushPromises();
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.confirmPasswordStatus).toBe(false);
    expect(wrapper.vm.confirmPasswordStatus).toBe(false);
  });
});
