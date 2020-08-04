import { shallowMount } from '@vue/test-utils';
import DaftarPengajuanBarang from '@/components/DaftarPengajuanBarang.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];
Cookie.get = jest.fn().mockImplementation(() => 'ok');

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: [
        {
          categories: [
            'sd',
            'cs',
          ],
        },
      ],
    },
  }),
  post: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
}));


describe('DaftarPengajuanBarang.vue', () => {
  it('DaftarPengajuanBarang page render correctly', async () => {
    const wrapper = shallowMount(DaftarPengajuanBarang);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('showDetail function work correctly', () => {
    const wrapper = shallowMount(DaftarPengajuanBarang);
    expect(wrapper.vm.display).toBe(true);
    wrapper.find('#showDetail').trigger('click');
    expect(wrapper.vm.display).toBe(false);
  });

  it('changeStatus function work correctly', () => {
    const wrapper = shallowMount(DaftarPengajuanBarang);
    wrapper.vm.changeStatus(1, 'AVAILABLE');
    wrapper.vm.changeStatus(1, 'FINISHED');
    wrapper.vm.changeStatus(1, 'PADI');
    // expect(wrapper.vm.display).toBe(false);
  });
});
