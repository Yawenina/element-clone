<template>
  <label
    class="el-radio"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-checked': model === label },
      size && `el-radio--${size}`
    ]"
  >
    <span
      class="el-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="el-radio__inner"></span>
      <input
          type="radio"
          class="el-radio__original"
          :value="label"
          :disabled="disabled"
          :name="name"
          @change="onChange"
          v-model="model"
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
  import Emmiter from '../../src/mixins/emmiter';

  type size = 'medium' | 'small' | 'mini';

  @Component({
    name: 'ElRadio',
    componentName: 'ElRadio',
    mixins: [Emmiter],
  })
  export default class ElRadio extends Vue {
    @Prop({ type: [String, Number, Boolean] })
    value?: string | number | boolean;
    @Prop({ type: [String, Number, Boolean] })
    label?: string | number | boolean;
    @Prop({ type: Boolean })
    disabled?: boolean;
    @Prop({ type: Boolean, default: false })
    border?: boolean;
    @Prop()
    size?: size;
    @Prop()
    name?: string;

    _radioGroup = undefined;
    get isDisabled() {
      return this.disabled;
    }

    get isRadioGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.componentName !== 'ElRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    }

    get model() {
      // Take care of value, see here: https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components
      return this.isRadioGroup ? this._radioGroup.value : this.value;
    }
    set model(val) {
      if (this.isRadioGroup) {
        this.dispatch()
      }
      this.$emit('input', val);
    }

    onChange(): void {
      // this.$emit('input', this.model);
    }
  }
</script>

<style lang="scss">
</style>
