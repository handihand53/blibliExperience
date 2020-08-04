import { shallowMount } from '@vue/test-utils';
import Qrcode from '@/components/Qrcode.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['qrcode-stream', 'b-modal', 'b-button'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('Qrcode.vue', () => {
  it('Qrcode page render correctly', async () => {
    const wrapper = shallowMount(Qrcode);
    wrapper.vm.getProductById();
    wrapper.vm.getProduct();
    await flushPromises();
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
});
