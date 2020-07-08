import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('Home page render correctly', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.exists()).toBe(true);
  });

  it('Pop up close correctly after user click X', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.vm.isHide).toBe(false);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isHide).toBe(true);
  });
});
