import { shallowMount } from '@vue/test-utils';
import Scanner from '@/views/Scanner.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

describe('Scanner.vue', () => {
  it('Scanner page render correctly', () => {
    const wrapper = shallowMount(Scanner);
    expect(wrapper.exists()).toBe(true);
  });

  it('Barcode button work correctly', () => {
    const wrapper = shallowMount(Scanner);
    wrapper.find('#barcode').trigger('click');
    expect(wrapper.vm.display).toBe(true);
    expect(wrapper.vm.currentComponent).toBe('Barcode');
  });

  it('QrCode button work correctly', () => {
    const wrapper = shallowMount(Scanner);
    wrapper.find('#qrcode').trigger('click');
    expect(wrapper.vm.display).toBe(true);
    expect(wrapper.vm.currentComponent).toBe('Qrcode');
  });

  // it('back function work correctly', () => {
  //   const wrapper = shallowMount(Scanner);
  //   const mockMethod = jest.fn();
  //   wrapper.setMethods({ back: mockMethod });
  //   wrapper.find('#back').trigger('click');
  //   // expect(wrapper.vm.isLoading).toBe(true);
  //   expect(mockMethod).toHaveBeenCalled();
  // });
});
