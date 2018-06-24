<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'ElButtonGroup',
  componentName: 'ElButtonGroup',
})
export default class ElButtonGroup extends Vue {
}
</script>

<style lang="scss">
</style>
