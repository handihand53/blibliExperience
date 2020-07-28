import { shallowMount } from '@vue/test-utils';
import PostProduct from '@/views/user/PostProduct.vue';
import PostProductComponent from '@/components/PostProductComponent.vue';
import CariProductComponent from '@/components/CariProductComponent.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon'];

describe('PostProduct.vue', () => {
  it('PostProduct page render correctly', () => {
    const wrapper = shallowMount(PostProduct);
    expect(wrapper.exists()).toBe(true);
  });

  it('barter button work correctly', () => {
    const wrapper = shallowMount(PostProduct);
    wrapper.find('#barter').trigger('click');
    expect(wrapper.vm.isActive).toBe(true);
    expect(wrapper.vm.currentComponent).toBe(PostProductComponent);
  });

  it('lelang button work correctly', () => {
    const wrapper = shallowMount(PostProduct);
    wrapper.find('#lelang').trigger('click');
    expect(wrapper.vm.isActive).toBe(false);
    expect(wrapper.vm.currentComponent).toBe(CariProductComponent);
  });
});
