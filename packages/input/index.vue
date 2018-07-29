<template>
  <div
    :class="[
      isTextarea ? 'el-textarea' : 'el-input',
      disabled && 'is-disabled',
      hasSuffix && 'el-input--suffix',
      hasPrefix && 'el-input--prefix',
      size && `el-input--${size}`,
      isInputGroup && 'el-input-group',
      $slots.prepend && 'el-input-group--prepend',
      $slots.append && 'el-input-group--append',
    ]">
    <textarea
      v-if="isTextarea"
      :rows="rows"
      class="el-textarea__inner"
      v-model="model"
    ></textarea>
    <template v-else>
      <div class="el-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
          class="el-input__inner"
          :placeholder="placeholder"
          v-model="model"
          :disabled="disabled"
          @focus="showClearable = true"
          @mouseenter="showClearable = true"
          @blur="showClearable = false"
      />
      <span
          v-if="hasPrefix"
          :class="['el-input__prefix', prefixIcon && 'el-input__icon']"
      >
      <i :class="prefixIcon" v-if="prefixIcon"></i>
      <slot name="prefix"></slot>
    </span>
      <span
          v-if="hasSuffix"
          :class="['el-input__suffix', suffixIcon && 'el-input__icon']"
      >
        <i :class="suffixIcon" v-if="suffixIcon"></i>
        <slot name="suffix"></slot>
      </span>
      <span
          class="el-input__suffix el-input__icon el-input__clear"
          v-if="model && showClearable"
          @click="clearInput"
      >
        <i class="el-icon-circle-close" @click="clearInput"></i>
      </span>
      <div class="el-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>

  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { inputSize } from '../../types';

  @Component({
    name: 'ElInput',
    componentName: 'ElInput',
  })
  export default class ElInput extends Vue {
    @Prop()
    placeholder?: string;
    @Prop({ default: false })
    disabled?: boolean;
    @Prop({ default: false })
    clearable?: boolean;
    @Prop()
    suffixIcon?: string;
    @Prop()
    prefixIcon?: string;
    @Prop()
    size?: inputSize;
    @Prop()
    type?: string;
    @Prop()
    rows?: number;
    @Prop()
    value?: string;

    showClearable: boolean = true;

    get model() {
      return this.value;
    }
    set model(val) {
      this.$emit('input', val);
    }

    get hasSuffix() {
      return this.suffixIcon || this.$slots.suffix;
    }
    get hasPrefix() {
      return this.prefixIcon || this.$slots.prefix;
    }
    get isInputGroup() {
      return this.$slots.prepend || this.$slots.append;
    }

    get isTextarea() {
      return this.type === 'textarea';
    }

    clearInput() {
      this.model = '';
    }
  }
</script>

<style lang="scss" scoped>

</style>