<template>
  <div class="">
    <h1>Container</h1>
    <div class="demo-block" id="chang-jian-ye-mian-bu-ju">
      <h3>常见布局</h3>
      <div class="source">
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>

        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </el-container>
        </el-container>

        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Container extends Vue {

}
</script>

<style lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  #chang-jian-ye-mian-bu-ju {
    .el-header, .el-footer {
      text-align: center;
    }

    .el-aside {
      background-color: #D3DCE6;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

    & > .source > .el-container {
      margin-bottom: 40px;

      &:nth-child(5) .el-aside,
      &:nth-child(6) .el-aside {
        line-height: 260px;
      }

      &:nth-child(7) .el-aside {
        line-height: 320px;
      }
    }
  }
</style>
