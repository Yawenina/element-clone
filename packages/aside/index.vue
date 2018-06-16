<template>
  <aside class="el-aside" :style="{width}">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class Aside extends Vue {
  @Prop({ default: '300px' })
  width?: string;

  name: string = 'ElAside';
  componentName: string = 'ElAside';
}
</script>

<style lang="scss">
</style>
