import { shallowMount } from "@vue/test-utils";
import Aside from '@/packages/aside';

describe('Aside.vue', () => {
  it('should have a el-aside class', function () {
    const wrapper = shallowMount(Aside);
    expect(wrapper.is('aside')).toBeTruthy();
    expect(wrapper.classes().includes('el-aside'));
  });
  it('should have user defined width', function () {
    const wrapper = shallowMount(Aside, {
      propsData: {
        width: '100px'
      }
    });
    expect(wrapper.attributes().style).toBe('width: 100px;');
  });
});