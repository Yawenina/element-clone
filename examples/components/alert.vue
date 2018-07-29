<template>
  <div class="demo-alert">
    <h1>Alert</h1>
    <demo-block title="基本用法">
      <el-alert
          title="成功提示的文案"
          type="success">
      </el-alert>
      <el-alert
          title="消息提示的文案"
          type="info">
      </el-alert>
      <el-alert
          title="警告提示的文案"
          type="warning">
      </el-alert>
      <el-alert
          title="错误提示的文案"
          type="error">
      </el-alert>
    </demo-block>
    <demo-block title="自定义关闭按钮">
      <el-alert
          title="不可关闭的 alert"
          type="success"
          :closable="false">
      </el-alert>
      <el-alert
          title="自定义 close-text"
          type="info"
          close-text="知道了">
      </el-alert>
      <el-alert
          title="设置了回调的 alert"
          type="warning"
          @close="hello">
      </el-alert>
    </demo-block>
    <demo-block title="带有Icon">
      <el-alert
          title="成功提示的文案"
          type="success"
          show-icon>
      </el-alert>
      <el-alert
          title="消息提示的文案"
          type="info"
          show-icon>
      </el-alert>
      <el-alert
          title="警告提示的文案"
          type="warning"
          show-icon>
      </el-alert>
      <el-alert
          title="错误提示的文案"
          type="error"
          show-icon>
      </el-alert>
    </demo-block>
    <demo-block title="文字居中">
      <el-alert
          title="成功提示的文案"
          type="success"
          center
          show-icon>
      </el-alert>
      <el-alert
          title="消息提示的文案"
          type="info"
          center
          show-icon>
      </el-alert>
      <el-alert
          title="警告提示的文案"
          type="warning"
          center
          show-icon>
      </el-alert>
      <el-alert
          title="错误提示的文案"
          type="error"
          center
          show-icon>
      </el-alert>
    </demo-block>
    <demo-block title="带辅助性文字介绍">
      <el-alert
          title="带辅助性文字介绍"
          type="success"
          description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
      </el-alert>
      <el-alert
          title="带辅助性文字介绍"
          type="success"
      >
        <slot>使用Slot添加辅助性文字</slot>
      </el-alert>
      <el-alert
          title="带辅助性文字介绍"
          type="success"
          description="同时存在"
      >
        <slot>
          <h1>辅助标题1</h1>
          <h2>辅助标题2</h2>
        </slot>
      </el-alert>
      <el-alert
          title="带有Icon的辅助性文字"
          type="success"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
      </el-alert>
    </demo-block>
  </div>
</template>

<script>
  import DemoBlock from './demo-block';

  export default {
    name: "alert",
    components: {
      DemoBlock
    },
    methods: {
      hello() {
        alert('Hello World!');
      }
    },
  }
</script>

<style lang="scss">
.el-alert {
  margin-bottom: 20px;
}
</style>