import { shallowMount } from '@vue/test-utils';
import Berhasil from '@/views/barter/Berhasil.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
describe('Berhasil.vue', () => {
  it('Berhasil page render correctly', async () => {
    const wrapper = shallowMount(Berhasil);
    expect(wrapper.exists()).toBe(true);
  });
});
