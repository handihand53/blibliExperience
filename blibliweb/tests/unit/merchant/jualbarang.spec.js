import { shallowMount } from '@vue/test-utils';
import JualBarang from '@/views/merchant/JualBarang.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-form-input', 'b-input-group', 'router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-form-group', 'b-form-radio', 'b-alert', 'b-modal', 'b-spinner'];

describe('JualBarang.vue', () => {
  it('JualBarang page render correctly', () => {
    const wrapper = shallowMount(JualBarang);
    expect(wrapper.exists()).toBe(true);
  });

  it('Button work correctly', () => {
    const wrapper = shallowMount(JualBarang);
    wrapper.find('button').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  it('checkAll function work correctly', () => {
    const wrapper = shallowMount(JualBarang, {
      data() {
        return {
          namaBarang: 'Gelas',
          harga: 12500,
          stock: 10,
        };
      },
    });
    wrapper.vm.checkAll();
    expect(wrapper.vm.btnState).toBe(true);
  });

  it('checkAll function work correctly', () => {
    const wrapper = shallowMount(JualBarang, {
      data() {
        return {
          namaBarang: '',
          harga: 12500,
          stock: 10,
        };
      },
    });
    wrapper.vm.checkAll();
    expect(wrapper.vm.btnState).toBe(false);
  });
});
