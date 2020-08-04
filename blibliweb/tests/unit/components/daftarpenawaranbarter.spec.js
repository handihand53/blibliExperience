import { shallowMount } from '@vue/test-utils';
import DaftarPenawaranBarter from '@/components/DaftarPenawaranBarter.vue';
import Vue from 'vue';
import flushPromises from 'flush-promises';
import Cookie from 'vue-cookie';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button', 'b-carousel', 'b-carousel-slide', 'b-alert', 'b-spinner', 'b-modal'];
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

describe('DaftarPenawaranBarang.vue', () => {
  it('DaftarPenawaranBarang page render correctly', async () => {
    const wrapper = shallowMount(DaftarPenawaranBarter);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function correctly', async () => {
    const wrapper = shallowMount(DaftarPenawaranBarter);
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/barterProductPhoto/c.jpeg');
  });

  it('getDeskripsi function correctly', async () => {
    const wrapper = shallowMount(DaftarPenawaranBarter);
    await flushPromises();
    expect(wrapper.vm.getDeskripsi('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially')).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ');
    expect(wrapper.vm.getDeskripsi('dasda')).toBe('dasda');
  });
});
