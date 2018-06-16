import Vue from 'vue';
import { shallowMount } from "@vue/test-utils";
import Row from '../../packages/row/index';
import { VueClass } from "../../decorators/declarations";


describe('Row.vue', () => {
  let RowComponent: VueClass<Vue>;

  beforeEach(() => {
    RowComponent = Vue.component(Row.name, Row);
  });

  test('should render correct tag when tag is set', function() {
    const wrapper = shallowMount(RowComponent, {
      propsData: {
        tag: 'span'
      }
    });
    expect(wrapper.is('span')).toBe(true);
  });

  test('should have a el-row class', () => {
    const wrapper = shallowMount(RowComponent);
    expect(wrapper.classes().includes('el-row')).toBe(true);
  });

  test('it should have a margin when gutter is set', () => {
    const wrapper = shallowMount(RowComponent, {
      propsData: {
        gutter: 10
      }
    });
    expect(wrapper.attributes().style)
      .toBe(`margin-left: -5px; margin-right: -5px;`);
  });

  test('should have a el-row--flex class when type set', function() {
    const wrapper = shallowMount(RowComponent, {
      propsData: {
        type: 'flex'
      }
    });
    expect(wrapper.classes().includes('el-row--flex')).toBe(true);
  });

  test('should have a is-justify-* class when justify is set', function() {
    const wrapper = shallowMount(RowComponent, {
      propsData: {
        justify: 'space-around'
      }
    });
    expect(wrapper.classes().includes('is-justify-space-around')).toBe(true);
  });

  test('should have a is-align-* class when align is set', function() {
    const wrapper = shallowMount(RowComponent, {
      propsData: {
        align: 'bottom'
      }
    });
    expect(wrapper.classes().includes('is-align-bottom')).toBe(true);
  });

  test('should render slot', function() {
    const wrapper = shallowMount(RowComponent, {
      slots: {
        default: `<h1>Row</h1>`
      }
    });
    expect(wrapper.find('h1').text()).toBe('Row');
  });
});
