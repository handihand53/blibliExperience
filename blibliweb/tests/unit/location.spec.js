import { shallowMount } from '@vue/test-utils';
import Location from '@/views/Location.vue';
import flushPromises from 'flush-promises';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      code: 200,
      status: 'OK',
      data: [
        {
          shopId: '9750fc20-f26c-43d3-b7f0-3fe2a9eadc35',
          shopName: 'Bliblimart Cibadak',
          shopAddress: {
            detail: '',
            rt: '',
            rw: '',
            kelurahan: '',
            kecamatan: '',
            kota: 'Bandung',
            provinsi: 'Jawa Barat',
          },
          shopLocation: [
            -6.92715,
            107.60149,
          ],
        },
      ],
      paging: null,
      errors: null,
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

describe('Location.vue', () => {
  it('Location page render correctly', () => {
    const wrapper = shallowMount(Location);
    expect(wrapper.exists()).toBe(true);
  });

  it('Page get data correctly', async () => {
    const wrapper = shallowMount(Location);
    await flushPromises();
    expect(wrapper.vm.layers.length).toBe(1);
  });
});
