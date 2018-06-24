<template>
  <button :class="classes" :disabled="disabled" :autofocus="autofocus" :type="nativeType">
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type buttonSize = 'medium' | 'small' | 'mini';
type buttonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
type nativeType = 'button' | 'submit' | 'reset';

@Component({
  name: 'ElButton',
  componentName: 'ElButton'
})
export default class ElButton extends Vue {
  @Prop()
  size?: buttonSize;
  @Prop()
  type?: buttonType;
  @Prop({ default: false })
  plain?: boolean;
  @Prop({ default: false })
  round?: boolean;
  @Prop({ default: false })
  circle?: boolean;
  @Prop({ default: false })
  loading?: boolean;
  @Prop({ default: false })
  disabled?: boolean;
  @Prop({ default: false })
  autofocus?: boolean;
  @Prop()
  icon?: string;
  @Prop({ default: 'button' })
  nativeType?: nativeType;

  get classes() {
    return [
      'el-button',
      this.size && `el-button--${this.size}`,
      this.type && `el-button--${this.type}`,
      this.plain && `is-plain`,
      this.round && `is-round`,
      this.circle && `is-circle`,
      this.loading && `is-loading`,
      this.disabled && `is-disabled`,
    ]
  }
}
</script>

<style lang="scss" scoped>

</style>