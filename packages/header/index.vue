<template>
  <header class="el-header" :style="{height}">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class ElHeader extends Vue {
  @Prop({ default: '60px' })
  height?: string;

  name: string = 'ElHeader';
  componentName: string = 'ElHeader';
}
</script>

<style lang="scss">
</style>
