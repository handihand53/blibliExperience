import { shallowMount } from '@vue/test-utils';
import Account from '@/views/Account.vue';

describe('Account.vue', () => {
  it('Account page render correctly', () => {
    const wrapper = shallowMount(Account);
    expect(wrapper.exists()).toBe(true);
  });
});
