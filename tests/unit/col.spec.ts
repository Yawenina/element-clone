import Vue, { Component } from 'vue';
import { shallowMount } from "@vue/test-utils";

import Col from '../../packages/col/index';

describe('Col', () => {
  let ColComponent: Component;

  beforeEach(() => {
    ColComponent = Vue.component(Col.name, Col);
  });

  it('should have correct tag', function () {
    const wrapper = shallowMount(Col, {
      propsData: {
        tag: 'span'
      }
    });

    expect(wrapper.is('span')).toBe(true);
  });
  it('should have a default el-col class', function () {
    const wrapper = shallowMount(ColComponent);
    expect(wrapper.classes().includes('el-col')).toBe(true);
  });
  it('should have a el-col-* class when span is set', function () {
    const wrapper = shallowMount(ColComponent, {
      propsData: {
        span: 6
      }
    });
    expect(wrapper.classes().includes('el-col-6')).toBeTruthy();
  });
  it('should have a el-col-offset-* class when offset is set', function () {
    const wrapper = shallowMount(ColComponent, {
      propsData: {
        offset: 6
      }
    });
    expect(wrapper.classes().includes('el-col-offset-6')).toBeTruthy();
  });
  it('should have a el-col-pull-* class when pull is set', function () {
    const wrapper = shallowMount(ColComponent, {
      propsData: {
        pull: 6
      }
    });
    expect(wrapper.classes().includes('el-col-pull-6')).toBeTruthy();
  });
  it('should have a el-col-push-* class when push is set', function () {
    const wrapper = shallowMount(ColComponent, {
      propsData: {
        push: 6
      }
    });
    expect(wrapper.classes().includes('el-col-push-6')).toBeTruthy();
  });
  it('should have responsive class', function () {
    const wrapper = shallowMount(ColComponent, {
      propsData: {
        xs: 8,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 1,
      }
    });
    expect(wrapper.classes().includes('el-col-xs-8')).toBeTruthy();
    expect(wrapper.classes().includes('el-col-sm-6')).toBeTruthy();
    expect(wrapper.classes().includes('el-col-md-4')).toBeTruthy();
    expect(wrapper.classes().includes('el-col-lg-3')).toBeTruthy();
    expect(wrapper.classes().includes('el-col-xl-1')).toBeTruthy();
  });
  it('should have correct responsive class when value is object', function () {
    const wrapper = shallowMount(ColComponent, {
      sm: { span: 3, push: 3, offset: 3}
    });
    expect(wrapper.classes().includes('el-col-sm-3'));
    expect(wrapper.classes().includes('el-col-sm-push-3'));
    expect(wrapper.classes().includes('el-col-sm-offset-3'));
  });
  test('should render slot', function() {
    const wrapper = shallowMount(Col, {
      slots: {
        default: `<h1>Col</h1>`
      }
    });
    expect(wrapper.find('h1').text()).toBe('Col');
  });
});