import { shallowMount } from "@vue/test-utils";
import Header from '@/packages/header';

describe('Header.vue', () => {
  it('should have a el-header class', function () {
    const wrapper = shallowMount(Header);
    expect(wrapper.is('header')).toBeTruthy();
    expect(wrapper.classes().includes('el-header'));
  });
  it('should have user defined height', function () {
    const wrapper = shallowMount(Header, {
      propsData: {
        height: '100px'
      }
    });
    expect(wrapper.attributes().style).toBe('height: 100px;');
  });
});