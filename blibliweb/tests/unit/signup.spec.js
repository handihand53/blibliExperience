import { shallowMount } from '@vue/test-utils';
import Signup from '@/views/signup.vue';
import Vue from 'vue';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['b-spinner', 'router-link', 'font-awesome-icon', 'b-button'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

Cookie.get = jest.fn().mockImplementation(() => 'ok');


describe('Signup.vue', () => {
  it('Signup page render correctly', () => {
    const wrapper = shallowMount(Signup, {
      methods: {
        checkLoginUser: () => {},
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('showPassword function run correctly', () => {
    const wrapper = shallowMount(Signup);
    wrapper.find('#pass1').trigger('click');
    expect(wrapper.vm.isContentVisible1).toBe(false);
    wrapper.find('#pass2').trigger('click');
    expect(wrapper.vm.isContentVisible1).toBe(false);
    // wrapper.vm.showPassword('password1');
    // expect(wrapper.vm.isContentVisible2).toBe(false);
  });

  it('emailCheckFormat function run correctly', () => {
    const wrapper = shallowMount(Signup, {
      data() {
        return {
          email: 'handihand53@gmail.com',
        };
      },
    });
    wrapper.vm.emailCheckFormat();
    expect(wrapper.vm.matchEmail).toBe(true);
  });

  it('Signup button run correctly', () => {
    const wrapper = shallowMount(Signup, {
      data() {
        return {
          email: 'handihand53@gmail.com',
          nama: 'Handi Hermawan',
          password1: '123123',
          password2: '123123',
          match: true,
          matchEmail: true,
          syaratDanKetentuan: true,
        };
      },
    });
    wrapper.vm.isAllFormFill();
    expect(wrapper.vm.isDisable).toBe(false);
    expect(wrapper.vm.passwordMsg1).toBe('');
    expect(wrapper.vm.$refs.btn.disabled).toBe(false);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isLoading).toBe(true);
  });
});
