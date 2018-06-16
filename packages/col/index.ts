import Vue, { CreateElement } from 'vue';
import Component from "../../decorators";
// import { Component } from "vue-property-decorator";

@Component({
  name: 'ElCol',
  componentName: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    xs: {
      type: [Number, Object],
      default: 0
    },
    sm: {
      type: [Number, Object],
      default: 0
    },
    md: {
      type: [Number, Object],
      default: 0
    },
    lg: {
      type: [Number, Object],
      default: 0
    },
    xl: {
      type: [Number, Object],
      default: 0
    },
  }
})
export default class ElCol extends Vue {
  get gutter() {
    let parent = this.$parent;
    // while (parent && parent.$options.componentName !== 'ElRow') {
    //   parent = parent.$parent;
    // }
    return parent ? parent.gutter : 0;
  }

  get style() {
    let style = {};
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
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach((item) => {
      if (!this[item]) return;
      if (typeof this[item] === 'number') {
        result.push(`el-col-${item}-${this[item]}`);
      } else {
        const options = Object.keys(this[item]).map(prop =>
          `el-col-${this[item]}-${prop}-${this[item][prop]}`
        );
        result.push(options);
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