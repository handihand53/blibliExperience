import { shallowMount } from '@vue/test-utils';
import Category from '@/views/Category.vue';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('Category.vue', () => {
  it('Category page render correctly', () => {
    const wrapper = shallowMount(Category);
    expect(wrapper.exists()).toBe(true);
  });

  it('changeFormatText function run correctly', () => {
    const wrapper = shallowMount(Category);
    const name = 'HANDI HERMAWAN';
    expect(wrapper.vm.changeFormatText(name)).toBe(name.toLowerCase());
  });
});
