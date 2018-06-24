<template>
  <label
    class="el-radio"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      size && `el-radio--${size}`
    ]"
  >
    <span
      class="el-radio__input"
      :class="{
        'is-disabled': isDisabled
      }"
    >
      <span class="el-radio__inner"></span>
      <input
          type="radio"
          class="el-radio__original"
          :value="label"
          :disabled="disabled"
          :name="name"
      >
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <!--考虑意外情况-->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  type size = 'medium' | 'small' | 'mini';

  @Component({
    name: 'ElRadio',
    componentName: 'ElRadio'
  })
  export default class ElRadio extends Vue {
    @Prop({ type: String | Number | Boolean })
    label?: string | number | boolean;
    @Prop({ type: Boolean })
    disabled?: boolean;
    @Prop({ type: Boolean, default: false })
    border?: boolean;
    @Prop()
    size?: size;
    @Prop()
    name?: string;

    get isDisabled() {
      return this.disabled;
    }
  }
</script>

<style lang="scss">
</style>
