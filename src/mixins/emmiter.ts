// mixin.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare a mixin as the same style as components.
@Component
export default class Emmiter extends Vue {
  dispatch(componentName: string, eventName: string, params: Array<any>): void {
    // if its the direct child, so parent maybe $root
    let parent = this.$parent || this.$root;
    let name = parent.$options.componentName; // at this time, parent must no be null

    while (parent && (!name || name !== componentName)) {
      parent = parent.$parent;
      if (parent) {
        name = parent.$options.componentName;
      }
    }

    if (parent) {
      parent.$emit.apply(parent, [eventName].concat(params));
    }
  }
}