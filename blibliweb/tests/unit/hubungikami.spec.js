import { shallowMount } from '@vue/test-utils';
import HubungiKami from '@/views/HubungiKami.vue';

describe('HubungiKami.vue', () => {
  it('HubungiKami page render correctly', () => {
    const wrapper = shallowMount(HubungiKami);
    expect(wrapper.exists()).toBe(true);
  });
});
