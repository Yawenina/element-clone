import { shallowMount } from "@vue/test-utils";
import ElIcon from '@/packages/icon';

describe('Icon.vue', () => {
  it('should have a el-icon-* class', function () {
    const wrapper = shallowMount(ElIcon, {
      propsData: {
        name: 'edit'
      }
    })
    expect(wrapper.classes().includes('el-icon-edit')).toBeTruthy();
  });
})