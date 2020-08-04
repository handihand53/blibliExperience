import { shallowMount } from '@vue/test-utils';
import DetailDaftarPesanan from '@/views/DetailDaftarPesanan.vue';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link', 'font-awesome-icon', 'b-button'];

const $route = {
  params: {
    id: 's',
  },
};

jest.mock('axios', () => ({
  put: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
  get: () => Promise.resolve({
    data: {
      userRoles: [
        'ROLE_USER',
      ],
    },
  }),
}));

describe('DetailDaftarPesanan.vue', () => {
  it('DetailDaftarPesanan page render correctly', () => {
    const wrapper = shallowMount(DetailDaftarPesanan, {
      mocks: {
        $route,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('Terima function work correctly', () => {
    const wrapper = shallowMount(DetailDaftarPesanan, {
      mocks: {
        $route,
        data() {
          return {
            product: {
              orderId: 's',
            },
          };
        },
      },
    });
    wrapper.vm.terima();
    expect(wrapper.exists()).toBe(true);
  });

  it('getStatus work correctly', () => {
    const wrapper = shallowMount(DetailDaftarPesanan, {
      mocks: {
        $route,
      },
    });
    expect(wrapper.vm.getStatus('WAITING_FOR_PAYMENT')).toBe('Menunggu Pembayaran');
    expect(wrapper.vm.getStatus('PAID')).toBe('Sudah di bayar');
    expect(wrapper.vm.getStatus('DELIVERED_TO_CONSUMER')).toBe('Sedang dikirim');
    expect(wrapper.vm.getStatus('FINISHED')).toBe('Selesai');
  });

  it('getType work correctly', () => {
    const wrapper = shallowMount(DetailDaftarPesanan, {
      mocks: {
        $route,
      },
    });
    expect(wrapper.vm.getType('SELF_SERVICE')).toBe('Ambil di Bliblimart');
  });

  it('getImage function work correctly', () => {
    const wrapper = shallowMount(DetailDaftarPesanan);
    expect(wrapper.vm.getImage('/asd/c')).toEqual('/assets/resources/uploads/productPhoto/c');
  });
});
