<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class ElRadioGroup extends Vue {
    @Prop()
    value?: string | number | boolean;
  }
</script>

<style lang="scss">
</style>
