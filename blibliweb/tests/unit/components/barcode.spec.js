import { shallowMount } from '@vue/test-utils';
import Barcode from '@/components/Barcode.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['v-quagga'];

describe('Barcode.vue', () => {
  it('Barcode page render correctly', () => {
    const wrapper = shallowMount(Barcode);
    expect(wrapper.exists()).toBe(true);
  });
});
