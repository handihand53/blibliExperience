import { shallowMount } from '@vue/test-utils';
import Barcode from '@/components/Barcode.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['v-quagga'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      code: 200,
      status: 'OK',
      data:
        {
          id: '123',
        },
    },
  }),
}));

describe('Barcode.vue', () => {
  it('Barcode page render correctly', () => {
    const wrapper = shallowMount(Barcode);
    expect(wrapper.exists()).toBe(true);
  });

  it('logIt function and getP{roduct work correctly', () => {
    const wrapper = shallowMount(Barcode, {
      data() {
        return {
          detect: false,
        };
      },
    });
    const data = {
      codeResult: {
        code: 839021741,
      },
    };

    wrapper.vm.logIt(data);
    expect(wrapper.vm.detect).toBe(true);
  });

  it('logIt function and getP{roduct work correctly', () => {
    const wrapper = shallowMount(Barcode, {
      data() {
        return {
          detect: true,
        };
      },
    });
    const data = {
      codeResult: {
        code: 839021741,
      },
    };

    wrapper.vm.logIt(data);
    expect(wrapper.vm.detect).toBe(true);
  });
});
