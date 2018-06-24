<template>
  <header class="el-header" :style="{height}">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'ElHeader',
  componentName: 'ElHeader',
})
export default class ElHeader extends Vue {
  @Prop({ default: '60px' })
  height?: string;
}
</script>

<style lang="scss">
</style>
