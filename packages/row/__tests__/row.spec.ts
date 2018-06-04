import { shallowMount } from "@vue/test-utils";
import Row from '../index';

describe('Row.vue', () => {
  test('should have a el-row class', () => {
    const wrapper = shallowMount(Row);
    expect(wrapper.classes().includes('el-row')).toBe(true);
  });

  test('it should have a margin when gutter is setted', () => {
    const wrapper = shallowMount(Row, {
      propsData: {
        gutter: 10
      }
    });
    expect(wrapper.attributes().style)
      .toBe(`margin-left: -10px; margin-right: -10px;`);
  })
});
