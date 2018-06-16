import Vue, { CreateElement } from 'vue';
import Component from '../../decorators/index';
// import { Component } from "vue-property-decorator";
// import Component from "vue-class-component";

@Component({
  name: 'ElRow',
  componentName: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      type: String,
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    gutter: {
      type: Number,
      default: 0,
    }
  }
})

export default class ElRow extends Vue {
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
        this.justify && `is-justify-${this.justify}`,
        this.align && `is-align-${this.align}`,
      ],
      style: this.style,
    }, this.$slots.default)
  }
}
