import { shallowMount } from '@vue/test-utils';
import KonfirmasiPemesanan from '@/views/user/KonfirmasiPemesanan.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-spinner', 'b-modal'];

// jest.mock('$router', () => ({
// //   push: () => Promise.resolve('/pay'),
// // }));

describe('KonfirmasiPemesanan.vue', () => {
  it('KonfirmasiPemesanan page render correctly', () => {
    const wrapper = shallowMount(KonfirmasiPemesanan);
    expect(wrapper.exists()).toBe(true);
  });

  it('confirmProduct function work correctly', () => {
    const wrapper = shallowMount(KonfirmasiPemesanan);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isLoading).toBe(true);
    // expect(wrapper.vm.$router).toBeCalledTimes(1);
  });

  // it('changeMethod function work correctly', () => {
  //   const wrapper = shallowMount(KonfirmasiPemesanan, {
  //     stubs: {
  //       // eslint-disable-next-line quote-props
  //       'select': { value: '1' },
  //     },
  //   });

  //   console.log(wrapper.vm.$refs);

  // expect(wrapper.vm.isDelivery).toBe(false);
  // wrapper.vm.changeMethod();
  // expect(wrapper.vm.isDelivery).toBe(true);
  // });
});
