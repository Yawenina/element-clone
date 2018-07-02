import { shallowMount } from "@vue/test-utils";
import ElInput from '@/packages/input';

describe('Input.vue', () => {
  it('should have a input', function () {
    const wrapper = shallowMount(ElInput);
    expect(wrapper.classes().includes('el-input')).toBeTruthy();
    expect(wrapper.find('input')).toBeTruthy();
    expect(wrapper.find('input').classes().includes('el-input__inner')).toBeTruthy();
  });

  it('should render placeholder and reactive', () => {
    const wrapper = shallowMount(ElInput, {
      propsData: {
        placeholder: '请输入内容',
      }
    });
  })
});