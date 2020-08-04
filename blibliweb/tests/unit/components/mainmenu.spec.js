import { shallowMount } from '@vue/test-utils';
import MainMenu from '@/components/MainMenu.vue';
import flushPromises from 'flush-promises';

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      code: 200,
      status: 'OK',
      data:
        {
          id: '123',
        },
    },
  }),
}));

describe('MainMenu.vue', () => {
  it('MainMenu page render correctly', () => {
    const wrapper = shallowMount(MainMenu);
    expect(wrapper.exists()).toBe(true);
  });

  it('formatPrice function work correctly', async () => {
    const wrapper = shallowMount(MainMenu);
    await flushPromises();
    expect(wrapper.vm.formatPrice(12000)).toBe('12.000');
  });
});
