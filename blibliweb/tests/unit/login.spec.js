import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import flushPromises from 'flush-promises';

// const $router = {
//   push: jest.fn(),
// };

// const $axios = {
//   get: () => Promise.resolve({
//     data: [
//       {
//         userId: 'b2ce0878-ca94-46b2-b257-4cd5f85a616d',
//         accessToken: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiMmNlMDg3OC1jYTk0LTQ2YjItYjI1Ny00Y2Q1Zjg1YTYxNmQiLCJpYXQiOjE1OTQxMzIzMjUsImV4cCI6MTU5NDczNzEyNX0.HfAT_6OKW6klVluDwgtnyE1ItSVFql8eC21vszx8QQlYCX_I1tCBXoFE92xp3fMuQ_fwyj-g6eD3xr6T8Ar4AQ',
//         tokenType: 'Bearer',
//       },
//     ],
//   }),
// };

// jest.mock('axios', () => ({
//   post(fnc) {
//     return fnc(true);
//   },
// }));

// jest.mock('axios', () => ({
//   get(fnc) {
//     return fnc(true);
//   },
// }));

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('Login.vue', () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = shallowMount(Login, {
  //     // mocks: { axios },
  //     methods: {
  //       checkLoginUser: () => {},
  //     },
  //     data() {
  //       return {
  //         email: 'handihand53@gmail.com',
  //         password: 'asdasd',
  //       };
  //     },
  //   });
  // });

  // it('mocking the axios call to get data', async () => {
  //   const wrapper = shallowMount(Login);
  //   await flushPromises();
  //   expect(wrapper.vm.post.length).toBe(1);
  // });

  it('Login render correctly', () => {
    const wrapper = shallowMount(Login, {
      methods: {
        checkLoginUser: () => {},
      },
    });
    expect(wrapper.exists()).toBe(true);
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

  it('Check if user password is not empty', () => {
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
});
