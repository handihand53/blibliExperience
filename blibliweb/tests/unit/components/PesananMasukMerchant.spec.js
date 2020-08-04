import { shallowMount } from '@vue/test-utils';
import PesananMasukMerchant from '@/components/PesananMasukMerchant.vue';
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
          cartForms: [
            {
              stockForm: {
                productDataForm: {
                  productImagePaths: [
                    'SD',
                  ],
                },
              },
            },
          ],
          orderStatus: 'PAID',
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


describe('PesananMasukMerchant.vue', () => {
  it('PesananMasukMerchant page render correctly', async () => {
    const wrapper = shallowMount(PesananMasukMerchant);
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it('getImage function correctly', async () => {
    const wrapper = shallowMount(PesananMasukMerchant);
    await flushPromises();
    expect(wrapper.vm.getImage('sad/c.jpeg')).toBe('/assets/resources/uploads/productPhoto/c.jpeg');
  });

  it('formatPrice function correctly', async () => {
    const wrapper = shallowMount(PesananMasukMerchant);
    await flushPromises();
    expect(wrapper.vm.formatPrice(12000)).toBe('12.000');
  });

  it('getStatus function correctly', async () => {
    const wrapper = shallowMount(PesananMasukMerchant);
    await flushPromises();
    expect(wrapper.vm.getStatus('WAITING_FOR_PAYMENT')).toBe('Menunggu Pembayaran');
    expect(wrapper.vm.getStatus('PAID')).toBe('Dibayar');
    expect(wrapper.vm.getStatus('DELIVERED_TO_CONSUMER')).toBe('Sedang dikirim');
    expect(wrapper.vm.getStatus('FINISHED')).toBe('Selesai');
  });

  it('getMonthYear function correctly', async () => {
    const wrapper = shallowMount(PesananMasukMerchant);
    await flushPromises();
    expect(wrapper.vm.getMonthYear('October 13, 2014')).toBe('13 Oktober 2014');
  });
});
