import { shallowMount } from '@vue/test-utils';
import Admin from '@/views/admin/Admin.vue';

describe('Admin.vue', () => {
  it('Admin page render correctly', () => {
    const wrapper = shallowMount(Admin);
    expect(wrapper.exists()).toBe(true);
  });
});
