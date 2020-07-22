import { shallowMount } from '@vue/test-utils';
import KonfirmasiPemesanan from '@/views/user/KonfirmasiPemesanan.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-spinner', 'b-modal'];

const $refs = {
  methode: {
    value: '1',
  },
};

describe('KonfirmasiPemesanan.vue', () => {
  it('KonfirmasiPemesanan page render correctly', () => {
    const wrapper = shallowMount(KonfirmasiPemesanan);
    expect(wrapper.exists()).toBe(true);
  });

  it('confirmProduct function work correctly', () => {
    const wrapper = shallowMount(KonfirmasiPemesanan);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isLoading).toBe(true);
  });

  it('changeLocation function work correctly', () => {
    const wrapper = shallowMount(KonfirmasiPemesanan);
    wrapper.vm.changeLocation(1);
    expect(wrapper.vm.isChoosen[1]).toBe(true);
    expect(wrapper.vm.isChoosen[0]).toBe(false);
    expect(wrapper.vm.isChoosen[2]).toBe(false);
  });

  it('changeLocation function work correctly', () => {
    const wrapper = shallowMount(KonfirmasiPemesanan, {
      mocks: { $refs },
    });
    wrapper.vm.confirmLocation();
    wrapper.vm.changeMethod();
    expect(wrapper.vm.isDelivery).toBe(false);
  });
});
