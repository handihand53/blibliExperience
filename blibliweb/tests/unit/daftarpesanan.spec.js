import { shallowMount } from '@vue/test-utils';
import DaftarPesanan from '@/views/DaftarPesanan.vue';
import flushPromises from 'flush-promises';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

jest.mock('axios', () => ({
  get: () => Promise.resolve({
    data: {
      data: [
        {
          orderStatus: 'WAITING_FOR_PAYMENT',
          cartForms: [
            {
              stockForm: {
                productDataForm: {
                  productImagePaths: [
                    'sad',
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  }),
  post: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe('DaftarPesanan.vue', () => {
  it('DaftarPesanan page render correctly', () => {
    const wrapper = shallowMount(DaftarPesanan);
    expect(wrapper.exists()).toBe(true);
  });

  it('getPesanan work correctly', async () => {
    const wrapper = shallowMount(DaftarPesanan);
    await wrapper.vm.getPesanan();
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('changeStatus page render correctly', () => {
    const wrapper = shallowMount(DaftarPesanan);
    wrapper.find('#changeStat1').trigger('click');
    expect(wrapper.vm.isActive[1]).toBe(true);
    expect(wrapper.vm.isActive[0]).toBe(false);
    expect(wrapper.vm.isActive[2]).toBe(false);
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(DaftarPesanan);
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/productPhoto/c');
  });

  it('getStatus function work correctly', () => {
    const wrapper = shallowMount(DaftarPesanan);
    expect(wrapper.vm.getStatus('SELF_SERVICE')).toEqual('Ambil langsung');
    expect(wrapper.vm.getStatus('')).toEqual('Dikirim ke rumah');
  });

  it('formatPrice function work correctly', () => {
    const wrapper = shallowMount(DaftarPesanan);
    expect(wrapper.vm.formatPrice(1000)).toEqual('1.000');
  });

  it('getMonthYear function work correctly', () => {
    const wrapper = shallowMount(DaftarPesanan);
    expect(wrapper.vm.getMonthYear("October 13, 2014")).toEqual('13 Oktober 2014');
  });
});
