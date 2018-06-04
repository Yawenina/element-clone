<template>
  <div class="el-row" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  @Component()
  export default class Row extends Vue {
    @Prop({ default: 0 })
    gutter!: number;

    get style() {
      return {
        marginLeft: `-${this.gutter}px`,
        marginRight: `-${this.gutter}px`,
      }
    }
  }
</script>

<style scoped>

</style>