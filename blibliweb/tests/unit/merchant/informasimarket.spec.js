import { shallowMount } from '@vue/test-utils';
import InformasiMarket from '@/views/merchant/InformasiMarket.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['b-form-input', 'b-form-textarea', 'router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-form-group', 'b-form-radio', 'b-alert', 'b-modal', 'b-spinner'];

describe('InformasiMarket.vue', () => {
  it('InformasiMarket page render correctly', () => {
    const wrapper = shallowMount(InformasiMarket);
    expect(wrapper.exists()).toBe(true);
  });
});
