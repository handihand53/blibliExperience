import { shallowMount } from '@vue/test-utils';
import DetailPengajuanBarter from '@/views/user/DetailPengajuanBarter.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon'];

describe('DetailPengajuanBarter.vue', () => {
  it('DetailPengajuanBarter page render correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarter);
    expect(wrapper.exists()).toBe(true);
  });

  it('formatPrice function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarter);
    expect(wrapper.vm.formatPrice(13000)).toBe('13.000');
  });

  it('expand function work correctly', () => {
    const wrapper = shallowMount(DetailPengajuanBarter);
    expect(wrapper.vm.isExpand[1]).toBe(false);
    wrapper.vm.expand(1);
    expect(wrapper.vm.isExpand[1]).toBe(true);
  });
});
