<template>
  <section class="el-container" :class="{'is-vertical': isVertical}">
    <slot></slot>
  </section>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  @Component({
    name: 'ElContainer',
    componentName: 'ElContainer'
  })
  export default class ElContainer extends Vue {
    @Prop()
    direction?: string;
    get isVertical(): boolean {
      if (this.direction === 'vertical') {
        return true;
      } else if (this.direction === 'horizontal') {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;
          return tag === 'el-header' || tag === 'el-footer';
        })
        : false;
    }
  }
</script>

<style lang="scss">
</style>