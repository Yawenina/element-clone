<template>
 <div class="loading">
   <el-button @click="showLoading">Loading</el-button>
   <el-button @click="customLoading">自定义Loading</el-button>
   <div class="area">
     <el-button @click="partLoading">局部Loading</el-button>
   </div>
   <demo-block title="指令方式">
     <el-main v-loading="directiveLoading"></el-main>
   </demo-block>
   <demo-block title="指令方式--body">
     <el-main
       v-loading.body.lock="directiveLoading2"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)"
     />
   </demo-block>
 </div>
</template>

<script>
  import { Loading } from '@/packages';
  import DemoBlock from './demo-block';

  export default {
    data() {
      return {
        directiveLoading: true,
        directiveLoading2: false,
      }
    },
    components: {
      DemoBlock
    },
    methods: {
      showLoading() {
        const instance1 = Loading.service({
          lock: true
        });
        setTimeout(() => {
          console.log('close');
          instance1.close();
        }, 5000)
      },
      partLoading() {
        const instance = Loading.service({
          target: '.area'
        });
        setTimeout(() => {
          instance.close();
        }, 5000)
      },
      customLoading() {
        const instance = Loading.service({
          text: '拼命加载中',
          spinner: 'el-icon-info',
          background: 'rgba(0, 0, 0, 0.8)'
        });
        setTimeout(() => {
          console.log('close');
          instance.close();
        }, 5000)
      }
    },
    mounted() {
      setTimeout(() => {
        this.directiveLoading = false;
      }, 2000)
      setTimeout(() => {
        this.directiveLoading2 = true;
      }, 2000)
      setTimeout(() => {
        this.directiveLoading2 = false;
      }, 4000)
    }
  }
</script>

<style lang="scss">
  .loading .el-main {
    height: 50px;
  }
</style>