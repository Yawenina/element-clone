<template>
  <transition name="el-loading-fade">
    <div
        :style="background && { background: background }"
        :class="[
          'el-loading-mask',
          fullscreen && 'is-fullscreen',
          customClass
        ]"
        v-show="visible"
    >
      <div class="el-loading-spinner">
        <i :class="[spinner ? spinner : 'el-icon-loading']"></i>
        <p class="el-loading-text">{{ text || 'Loading'}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        text: null,
        spinner: null,
        background: null,
        fullscreen: true,
        visible: false,
        customClass: ''
      }
    },
  }
</script>