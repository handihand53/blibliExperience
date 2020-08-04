import { shallowMount } from '@vue/test-utils';
import Scanner from '@/views/Scanner.vue';
import flushPromises from 'flush-promises';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: [
        {
          shopAddress: {
            kota: 'Bandung',
          },
        },
      ],
    },
  }),
  post: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
}));

describe('Scanner.vue', () => {
  it('Scanner page render correctly', async () => {
    const wrapper = shallowMount(Scanner);
    wrapper.vm.back();
    await flushPromises();
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

  it('checkValueCity function work correctly', () => {
    const wrapper = shallowMount(Scanner, {
      data() {
        return {
          daerah: [],
        };
      },
    });
    wrapper.vm.fillCity();
    wrapper.vm.checkValueCity();
  });
});
