import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import axios from 'axios';
import flushPromises from 'flush-promises';

jest.mock('axios');
axios.mockResolvedValue();
// jest.mock('axios', () => ({
//   get: Promise.resolve('value'),
// }));

describe('Header.vue', () => {
  it('Header page render correctly', () => {
    const wrapper = shallowMount(Header, {
      methods: {
        getUserData: () => {},
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('getFirstName Computed function return correctly', () => {
    const wrapper = shallowMount(Header, {
      data() {
        return {
          user: {
            data: {
              userName: 'Handi Hermawan',
            },
          },
        };
      },
    });
    expect(wrapper.vm.getFirstName).toBe('Handi');
  });

  // it('cookies data check when getUserData()', () => {
  //   const wrapper = shallowMount(Header);
  //   Object.defineProperty(document, 'cookie', {
  //     get: jest.fn().mockImplementation(() => '123'),
  //   });
  //   wrapper.vm.getUserData();
  //   expect(wrapper.vm.dataId).toBe(123);
  // });

  // it('fetch user data when load', async () => {
  //   const wrapper = shallowMount(Header);
  //   wrapper.vm.fetchResults();
  //   // const endpoint = '/endpoint';
  //   // const method = 'get';
  //   // const data = { foo: 'bar' };
  //   // wrapper.find('button').trigger('click');
  //   await flushPromises();
  //   expect(axios).toBeCalledTimes(1);
  //   // expect(wrapper.vm.user).toBe('value');
  // });
});
