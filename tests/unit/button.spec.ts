import { shallowMount } from "@vue/test-utils";
import ElButton from '@/packages/button';

describe('ElButton', () => {
  it('create', function () {
    const wrapper = shallowMount(ElButton);
    expect(wrapper.is('button')).toBeTruthy();
    expect(wrapper.classes().includes('el-button')).toBeTruthy();
  });
  it('size', function () {
    const wrapper = shallowMount(ElButton, {
      propsData: {
        size: 'small'
      }
    });
    expect(wrapper.classes().includes('el-button--small')).toBeTruthy();
  });
  it('type', function () {
    const wrapper = shallowMount(ElButton, {
      propsData: {
        type: 'primary'
      }
    });
    expect(wrapper.classes().includes('el-button--primary')).toBeTruthy();
  });
  it('plain', function () {
    const wrapper = shallowMount(ElButton, {
      propsData: {
        plain: true
      }
    });
    expect(wrapper.classes().includes('is-plain')).toBeTruthy();
  });
  it('round', function () {
    const wrapper = shallowMount(ElButton, {
      propsData: {
        round: true
      }
    });
    expect(wrapper.classes().includes('is-round')).toBeTruthy();
  });
  it('circle', function () {
    const wrapper = shallowMount(ElButton, {
      propsData: {
        circle: true
      }
    });
    expect(wrapper.classes().includes('is-circle')).toBeTruthy();
  });
  it('loading', function () {
    const wrapper = shallowMount(ElButton, {
      propsData: {
        loading: true
      }
    });
    expect(wrapper.classes().includes('is-loading')).toBeTruthy();
    expect(wrapper.find('.el-icon-loading')).toBeTruthy();
  });
  it('disabled', function () {
    const wrapper = shallowMount(ElButton, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.attributes().disabled).toBeTruthy();
    expect(wrapper.classes().includes('is-disabled')).toBeTruthy();
  });
  it('icon', function () {
    const wrapper = shallowMount(ElButton, {
      propsData: {
        icon: 'el-icon-edit'
      }
    });
    expect(wrapper.find('i').classes().includes('el-icon-edit')).toBeTruthy();
  });
});
