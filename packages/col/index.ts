import Vue, { CreateElement } from 'vue';
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: 'ElCol',
  componentName: 'ElCol'
})
export default class ElCol extends Vue {
  [index: string]: any;
  @Prop({ default: 'div' })
  tag?: string;
  @Prop({ default: 24 })
  span?: number;
  @Prop({ default: 0 })
  offset?: number;
  @Prop({ default: 0 })
  push?: number;
  @Prop({ default: 0 })
  pull?: number;
  @Prop({ type: [Object, Number], default: 0})
  xs: any;
  @Prop({ type: [Object, Number], default: 0})
  sm: any;
  @Prop({ type: [Object, Number], default: 0})
  md: any;
  @Prop({ type: [Object, Number], default: 0})
  lg: any;
  @Prop({ type: [Object, Number], default: 0})
  xl: any;

  get gutter(): number {
    let parent: any = this.$parent;
    while (parent && parent.$options.componentName !== 'ElRow') {
      parent = parent.$parent;
    }
    return parent ? parent.gutter : 0;
  }

  get style() {
    let style: any = {};
    if (this.gutter) {
      style.paddingLeft = `${this.gutter / 2}px`;
      style.paddingRight = style.paddingLeft;
    }
    return style;
  }

  get class() {
    const result = [
      'el-col',
      this.span && `el-col-${this.span}`,
      this.offset && `el-col-offset-${this.offset}`,
      this.pull && `el-col-pull-${this.pull}`,
      this.push && `el-col-push-${this.push}`,
    ];
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
      if (typeof this[size] === 'number') {
        result.push(`el-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        Object.keys(this[size]).map(prop => {
          result.push(`el-col-${this[size]}-${prop}-${this[size][prop]}`);
        });
      }
    });

    return result;
  }

  render(h: CreateElement) {
    return h(this.tag, {
      class: this.class,
      style: this.style,
    }, this.$slots.default);
  }
}