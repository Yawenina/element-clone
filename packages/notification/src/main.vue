<template>
  <transition name="el-notification-fade">
    <div
      v-show="visible"
      :class="[
        'el-notification',
        horizonClass
      ]"
      :style="positionStyle"
    >
      <i
        v-if="type || iconClass"
        :class="['el-notification__icon', typeClass, iconClass]"
      ></i>
      <div class="el-notification__group">
        <h2 class="el-notification__title" v-text="title"></h2>
        <slot>
          <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
          <p v-else v-html="message"></p>
        </slot>
        <div
          class="el-notification__closeBtn el-icon-close"
          @click="close"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: 'success',
  info: 'info',
  warn: 'warn',
  error: 'error',
};

export default {
  data() {
    this.timer = null;

    return {
      iconClass: '',
      customClass: '',
      dangerouslyUseHTMLString: false,
      duration: 4500,
      type: '',
      visible: false,
      position: 'top-right',
      verticalOffset: 0,
    }
  },

  computed: {
    typeClass() {
      return this.type && typeMap[this.type] ? `el-icon-${this.type}` : '';
    },
    horizonClass() {
      return this.position.includes('right') ? 'right' : 'left';
    },
    positionStyle() {
      const verticalProperty =  /^top-/.test(this.position) ? 'top' : 'bottom';
      return {
        [verticalProperty]: `${this.verticalOffset}px`
      }
    }
  },

  methods: {
    close() {
      this.visible = false;
      document.body.removeChild(this.$el);
      this.$destroy();
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.duration)
      }
    }
  },

  mounted() {
    this.startTimer();
  }
}
</script>