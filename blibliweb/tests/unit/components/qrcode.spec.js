import { shallowMount } from '@vue/test-utils';
import Qrcode from '@/components/Qrcode.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['qrcode-stream'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('Qrcode.vue', () => {
  it('Qrcode page render correctly', () => {
    const wrapper = shallowMount(Qrcode);
    expect(wrapper.exists()).toBe(true);
  });

  it('onDecode function work correctly', () => {
    const wrapper = shallowMount(Qrcode);
    wrapper.vm.onDecode(888012354);
    expect(wrapper.vm.result).toBe(888012354);
  });

  it('logErrors function work correctly', () => {
    const wrapper = shallowMount(Qrcode);
    wrapper.vm.logErrors('error');
    expect(wrapper.vm.error).toBe('error');
  });

  it('logErrors function work correctly', () => {
    const wrapper = shallowMount(Qrcode);
    wrapper.vm.logErrors('error');
    expect(wrapper.vm.error).toBe('error');
  });

  it('onInit function work correctly', () => {
    const wrapper = shallowMount(Qrcode);
    wrapper.vm.onInit('asd');
    // expect(wrapper.vm.error).toBe('error');
  });
  // it('Check validationPending return work correctly', () => {
  //   const wrapper = shallowMount(Qrcode, {
  //     data() {
  //       return {
  //         isValid: undefined,
  //         camera: 'off',
  //       };
  //     },
  //   });
  //   expect(wrapper.vm.validationPending).toBe(true);
  // });

  // it('Check validationSuccess return work correctly', () => {
  //   const wrapper = shallowMount(Qrcode, {
  //     data() {
  //       return {
  //         isValid: true,
  //       };
  //     },
  //   });
  //   expect(wrapper.vm.validationSuccess).toBe(true);
  // });

  // it('Check validationFailure return work correctly', () => {
  //   const wrapper = shallowMount(Qrcode, {
  //     data() {
  //       return {
  //         isValid: false,
  //       };
  //     },
  //   });
  //   expect(wrapper.vm.validationFailure).toBe(true);
  // });
});
