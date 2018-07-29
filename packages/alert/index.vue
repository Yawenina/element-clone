<template>
  <transition name="el-alert-fade">
    <div
        :class="[
      'el-alert',
      `el-alert--${type}`,
      {'is-center': center}
    ]"
        v-show="visiable"
    >
      <i
          :class="[
        'el-alert__icon',
        `el-icon-${type}`,
        {'is-big': hasDescription }
      ]"
          v-if="showIcon"
      ></i>
      <div class="el-alert__content">
      <span
          :class="[
          'el-alert__title',
          {'is-bold': hasDescription }
        ]"
          v-if="title"
      >{{ title }}</span>
        <div v-if="description || $slots.default" class="el-alert__description">
          <p v-if="description">
            {{ description }}
          </p>
          <slot class="el-alert__description"></slot>
        </div>
        <i
            :class="[
          'el-alert__closebtn',
          closeText ? 'is-customed' : 'el-icon-close'
        ]"
            @click="close()"
            v-show="closable"
        >{{ closeText }}</i>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  type alertType = 'info' | 'success' | 'warning' | 'error';

  @Component({
    name: 'ElAlert',
    componentName: 'ElAlert'
  })
  export default class ElAlert extends Vue {
    @Prop({ type: String, default: 'info' })
    type?: alertType;
    @Prop({ required: true, type: String })
    title: string;
    @Prop()
    description?: string;
    @Prop({ default: true })
    closable?: boolean;
    @Prop()
    closeText?: string;
    @Prop({ default: false })
    showIcon?: boolean;
    @Prop({ default: false })
    center: boolean;

    visiable: boolean = true;

    get hasDescription() {
      return this.description || this.$slots.default;
    }

    close() {
      this.visiable = false;
      this.$emit('close');
    }
  }
</script>

<style lang="scss">
</style>
