import Vue, { CreateElement } from 'vue';
// import Component from '../../decorators/index';
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: 'ElRow',
  componentName: 'ElRow'
})
export default class ElRow extends Vue {
  @Prop({ default: 'div' })
  tag?: string;
  @Prop()
  type?: string;
  @Prop({ default: 'start' })
  justify?: string;
  @Prop({ default: 'top' })
  align?: string;
  @Prop({ default: 0 })
  gutter?: number;

  get style() {
    const ret: any = {};
    if (this.gutter) {
      ret.marginLeft = `-${this.gutter/2}px`;
      ret.marginRight = `-${this.gutter/2}px`;
    }
    return ret;
  }

  render(h: CreateElement) {
    return h(this.tag, {
      class: [
        'el-row',
        this.type && 'el-row--flex',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
      ],
      style: this.style,
    }, this.$slots.default)
  }
}

