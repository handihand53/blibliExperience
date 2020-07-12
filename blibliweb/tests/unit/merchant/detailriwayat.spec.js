import { shallowMount } from '@vue/test-utils';
import DetailRiwayat from '@/views/merchant/DetailRiwayat.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-form-group', 'b-form-radio', 'b-alert', 'b-modal', 'b-spinner'];

describe('DetailRiwayat.vue', () => {
  it('DetailRiwayat page render correctly', () => {
    const wrapper = shallowMount(DetailRiwayat);
    expect(wrapper.exists()).toBe(true);
  });
});
