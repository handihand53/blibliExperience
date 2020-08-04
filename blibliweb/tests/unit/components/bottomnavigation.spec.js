import { shallowMount } from '@vue/test-utils';
import BottomNavigation from '@/components/BottomNavigation.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];


jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: {
        cartForms: [
          'sd',
          'cs',
        ],
      },
    },
  }),
}));

describe('BottomNavigation.vue', () => {
  it('BottomNavigation page render correctly', () => {
    const wrapper = shallowMount(BottomNavigation);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
  });
});
