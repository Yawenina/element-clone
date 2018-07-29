<template>
  <div
    :class="[
      'el-notification',
      positionClass
    ]"
    :style="positionStyle"
  >
    <i
      :class="[
        'el-notification__icon',
        type && `el-icon-${type}`
      ]"
      v-if="type"
    ></i>
    <div class="el-notification__group">
      <h2 class="el-notification__title">{{title}}</h2>
      <div class="el-notification__content">{{message}}</div>
      <div class="el-notification__closeBtn el-icon-close"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ElNotification",
    componentName: "ElNotification",
    data() {
      return {
        type: '',
        title: '',
        message: '',
        position: 'top-right',
        positionClass: 'left',
        positionStyle: null,
      }
    },

    computed: {
      notificationClass() {
        this.positionClass = this.position.split('-')[1];
        this.positionStyle = {
          [this.position.split('-')[0]]: '16px',
          'zIndex': 9999
        };
      }
    },
  }
</script>

<style scoped>

</style>