import { shallowMount } from '@vue/test-utils';
import MapHeader from '@/components/MapHeader.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['font-awesome-icon'];

describe('MapHeader.vue', () => {
  it('MapHeader page render correctly', () => {
    const wrapper = shallowMount(MapHeader);
    expect(wrapper.exists()).toBe(true);
  });

  it('Back function work correctly', () => {
    const mockMethods = {
      back: jest.fn(),
    };

    const wrapper = shallowMount(MapHeader, {
      mockMethods,
    });
    wrapper.find('#back').trigger('click');
    expect(wrapper.exists()).toBe(true);
  });
});
