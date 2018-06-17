<template>
  <aside class="el-aside" :style="{width}">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'ElAside',
  componentName: 'ElContainer'
})
export default class ElAside extends Vue {
  @Prop({ default: '300px' })
  width?: string;
}
</script>

<style lang="scss">
</style>
