<template>
  <div>
    <h1>Radio</h1>
    <div class="demo-block">
      <h3>基础用法</h3>
      <div class="demo-source">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </div>
    </div>
    <div class="demo-block">
      <h3>禁用状态</h3>
      <div class="demo-source">
        <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
      </div>
    </div>
    <div class="demo-block">
      <h3>带有边框</h3>
      <div class="demo-source">
        <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
        <div style="margin-top: 20px">
          <el-radio v-model="radio8" label="1" border size="mini">备选项1</el-radio>
          <el-radio v-model="radio8" label="2" border size="mini">备选项2</el-radio>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class Radio extends Vue {
    radio?: number | string = 0;
    radio1?: number | string = 0;
    radio7?: number | string = 0;
    radio8?: number | string = 0;
  }
</script>

<style lang="scss">
</style>
