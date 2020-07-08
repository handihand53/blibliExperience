import { shallowMount } from '@vue/test-utils';
import ListKonfirmasiBarter from '@/views/admin/ListKonfirmasiBarter.vue';

describe('ListKonfirmasiBarter.vue', () => {
  it('ListKonfirmasiBarter page render correctly', () => {
    const wrapper = shallowMount(ListKonfirmasiBarter);
    expect(wrapper.exists()).toBe(true);
  });

  it('check changeStatus function work correctly', () => {
    const wrapper = shallowMount(ListKonfirmasiBarter);
    wrapper.vm.changeStatus(1);
    expect(wrapper.vm.isActive[0]).toBe(false);
    expect(wrapper.vm.isActive[1]).toBe(true);
    expect(wrapper.vm.isActive[0]).toBe(false);
  });
});
