import { shallowMount } from "@vue/test-utils";
import ElRadio from '@/packages/radio';

describe('ElRadio.vue', () => {
  it('create', function () {
    const wrapper = shallowMount(ElRadio, {
      propsData: {
        label: '1',
      },
      slots: {
        default: '备选项'
      }
    });
    expect(wrapper.classes().includes('el-radio')).toBeTruthy();
    expect(wrapper.find('.el-radio__original').attributes().value).toBe('1');
    expect(wrapper.find('.el-radio__label').text()).toBe('备选项');
  });

  it('disabled border size name', () => {
    const wrapper = shallowMount(ElRadio, {
      propsData: {
        label: '1',
        disabled: true,
        border: true,
        size: 'mini',
        name: 'selection'
      },
      slots: {
        default: '备选项'
      }
    });

    expect(wrapper.classes().includes('is-disabled')).toBeTruthy();
    expect(wrapper.classes().includes('is-bordered')).toBeTruthy();
    expect(wrapper.classes().includes('el-radio--mini')).toBeTruthy();
    expect(wrapper.find('.el-radio__input').classes().includes('is-disabled')).toBeTruthy();
    expect(wrapper.find('.el-radio__original').attributes().disabled).toBeTruthy();
    expect(wrapper.find('.el-radio__original').attributes().name).toBe('selection');
  })
});