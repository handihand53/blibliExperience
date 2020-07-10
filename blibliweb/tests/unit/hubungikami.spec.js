import { shallowMount } from '@vue/test-utils';
import HubungiKami from '@/views/HubungiKami.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['font-awesome-icon'];

describe('HubungiKami.vue', () => {
  it('HubungiKami page render correctly', () => {
    const wrapper = shallowMount(HubungiKami);
    expect(wrapper.exists()).toBe(true);
  });
});
