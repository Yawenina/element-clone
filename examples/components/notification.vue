<template>
  <div class="demo-button">
    <h1>Notification</h1>
    <div class="demo-block">
      <h3>基础用法</h3>
      <div class="demo-source">
        <el-row>
          <el-button @click="open1">普通</el-button>
          <el-button type="success" @click="open2">成功</el-button>
          <el-button type="info" @click="open3">信息</el-button>
          <el-button type="warning" @click="open4">警告</el-button>
          <el-button type="danger" @click="open5">错误</el-button>
        </el-row>

        <el-row>
          <el-button plain @click="open6">自动关闭</el-button>
          <el-button type="primary" plain @click="open7">不会自动关闭</el-button>
          <el-button type="success" plain @click="open8">自定义图标</el-button>
          <el-button type="warning" plain @click="open9">VNode Message</el-button>
          <el-button type="info" plain @click="closeAll">移除所有</el-button>
          <el-button type="danger" plain>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button round>圆角按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="danger" round>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </div>
    </div>
    <div class="demo-block">
      <h3>禁用状态</h3>
      <div class="demo-source">
        <el-row>
          <el-button disabled>默认按钮</el-button>
          <el-button type="primary" disabled>主要按钮</el-button>
          <el-button type="success" disabled>成功按钮</el-button>
          <el-button type="info" disabled>信息按钮</el-button>
          <el-button type="warning" disabled>警告按钮</el-button>
          <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button plain disabled>朴素按钮</el-button>
          <el-button type="primary" plain disabled>主要按钮</el-button>
          <el-button type="success" plain disabled>成功按钮</el-button>
          <el-button type="info" plain disabled>信息按钮</el-button>
          <el-button type="warning" plain disabled>警告按钮</el-button>
          <el-button type="danger" plain disabled>危险按钮</el-button>
        </el-row>
      </div>
    </div>
    <div class="demo-block">
      <h3>文字按钮</h3>
      <div class="demo-source">
        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>
      </div>
    </div>
    <div class="demo-block">
      <h3>图标按钮</h3>
      <div class="demo-source">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </div>
    </div>
    <div class="demo-block">
      <h3>按钮组</h3>
      <div class="demo-source">
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </div>
    </div>
    <div class="demo-block">
      <h3>加载中</h3>
      <div class="demo-source">
        <el-button type="primary" :loading="true">加载中</el-button>
      </div>
    </div>
    <div class="demo-block">
      <h3>不同尺寸</h3>
      <div class="demo-source">
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button size="medium">中等按钮</el-button>
          <el-button size="small">小型按钮</el-button>
          <el-button size="mini">超小按钮</el-button>
        </el-row>
        <el-row>
          <el-button round>默认按钮</el-button>
          <el-button size="medium" round>中等按钮</el-button>
          <el-button size="small" round>小型按钮</el-button>
          <el-button size="mini" round>超小按钮</el-button>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "button",
    methods: {
      open1() {
        this.$notify({
          title: '普通',
          message: '这是一条普通的消息',
        })
      },
      open2() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },
      open3() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warn'
        });
      },
      open4() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },
      open5() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },
      open6() {
        this.$notify({
          title: '提示',
          message: '这是一条会自动关闭的消息',
        });
      },
      open7() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },
      open8() {
        this.$notify({
          title: '提示',
          message: '这是一条自带图标的消息',
          iconClass: 'el-icon-date'
        });
      },
      open9() {
        const h = this.$createElement;
        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },
      closeAll() {
        this.$notify.closeAll();
      }
    },
  }
</script>

<style lang="scss" scoped>
  .demo-button {
    .el-row {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-button + .el-button {
      margin-left: 10px;
    }
    .el-button-group {
      .el-button + .el-button {
        margin-left: 0;
      }

      & + .el-button-group {
        margin-left: 10px;
      }
    }
  }
</style>