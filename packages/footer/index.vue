<template>
  <footer class="el-footer" :style="{height}">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'ElFooter',
  componentName: 'ElFooter',
})
export default class ElFooter extends Vue {
  @Prop({ default: '60px' })
  height?: string;
}
</script>

<style lang="scss">
</style>
