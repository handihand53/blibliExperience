import { shallowMount } from '@vue/test-utils';
import Qrcode from '@/components/Qrcode.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['qrcode-stream'];

describe('Qrcode.vue', () => {
  it('Qrcode page render correctly', () => {
    const wrapper = shallowMount(Qrcode);
    expect(wrapper.exists()).toBe(true);
  });

  it('Check validationPending return work correctly', () => {
    const wrapper = shallowMount(Qrcode, {
      data() {
        return {
          isValid: undefined,
          camera: 'off',
        };
      },
    });
    expect(wrapper.vm.validationPending).toBe(true);
  });

  it('Check validationSuccess return work correctly', () => {
    const wrapper = shallowMount(Qrcode, {
      data() {
        return {
          isValid: true,
        };
      },
    });
    expect(wrapper.vm.validationSuccess).toBe(true);
  });

  it('Check validationFailure return work correctly', () => {
    const wrapper = shallowMount(Qrcode, {
      data() {
        return {
          isValid: false,
        };
      },
    });
    expect(wrapper.vm.validationFailure).toBe(true);
  });
});
