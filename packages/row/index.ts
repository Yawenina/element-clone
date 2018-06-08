import Vue, { ComponentOptions } from 'vue';

const Row: ComponentOptions<never, {}, {}, {}, {}> = {
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
  },
  computed: {
    style() {
      const ret = {};
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'el-row',
        this.type === 'flex' ? 'el-row--flex' : '',
        this.justify && `is-justify-${this.justify}`,
        this.align && `is-align-${this.align}`,
      ],
      style: this.style
    });
  },
};

export default Row;
