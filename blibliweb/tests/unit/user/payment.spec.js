import { shallowMount } from '@vue/test-utils';
import Payment from '@/views/user/Payment.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-spinner'];

describe('Payment.vue', () => {
  it('Payment page render correctly', () => {
    const wrapper = shallowMount(Payment);
    expect(wrapper.exists()).toBe(true);
  });

  it('VA click work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.find('#VA').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(false);
    expect(wrapper.vm.isGerai).toBe(true);
    expect(wrapper.vm.isElektronik).toBe(true);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('debit click work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.find('#debit').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(true);
    expect(wrapper.vm.isGerai).toBe(true);
    expect(wrapper.vm.isElektronik).toBe(true);
    expect(wrapper.vm.isDebit).toBe(false);
  });

  it('gerai click work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.find('#gerai').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(true);
    expect(wrapper.vm.isGerai).toBe(false);
    expect(wrapper.vm.isElektronik).toBe(true);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('elektronik click work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.find('#elektronik').trigger('click');
    expect(wrapper.vm.isVirtual).toBe(true);
    expect(wrapper.vm.isGerai).toBe(true);
    expect(wrapper.vm.isElektronik).toBe(false);
    expect(wrapper.vm.isDebit).toBe(true);
  });

  it('Pay button work correctly', () => {
    const wrapper = shallowMount(Payment);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isLoading).toBe(true);
  });
});
