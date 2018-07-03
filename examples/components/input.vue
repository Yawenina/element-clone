<template>
  <div class="">
    <h2>Input</h2>
    <div class="demo-block demo-input">
      <h3>基础用法</h3>
      <div class="demo-source">
        <el-input placeholder="请输入内容" v-model="input"></el-input>
        <p>Input: {{input}}</p>
      </div>
    </div>
    <div class="demo-block demo-input">
      <h3>禁用状态</h3>
      <div class="demo-source">
        <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
      </div>
    </div>
    <div class="demo-block demo-input">
      <h3>可清空</h3>
      <div class="demo-source">
        <el-input placeholder="请输入内容" v-model="input2" clearable></el-input>
      </div>
    </div>
    <div class="demo-block demo-input">
      <h3>尺寸</h3>
      <div class="demo-source">
        <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input6">
        </el-input>
        <el-input
            size="medium"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input7">
        </el-input>
        <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input8">
        </el-input>
        <el-input
            size="mini"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input9">
        </el-input>
      </div>
    </div>
    <div class="demo-block demo-input">
      <h3>带 icon 的输入框</h3>
      <div class="demo-source">
        <div style="margin-bottom: 20px;">
          属性方式：
          <el-input
              placeholder="请选择日期"
              suffix-icon="el-icon-date"
              v-model="input3">
          </el-input>
          <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input31">
          </el-input>
        </div>
        <div>
          slot 方式：
          <el-input
              placeholder="请选择日期"
              v-model="input4">
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
          <el-input
              placeholder="请输入内容"
              v-model="input41">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </div>
    <div class="demo-block">
      <h3>文本域</h3>
      <div class="demo-source">
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
        </el-input>
        <p>Textarea: {{ textarea }}</p>
      </div>
    </div>
    <div class="demo-block">
      <h3>复合型输入框</h3>
      <div class="demo-source">
        <div>
          <el-input placeholder="请输入内容" v-model="input5">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input51">
            <template slot="append">.com</template>
          </el-input>
        </div>
        <!--TODO show me after el-select-->
        <!--<div style="margin-top: 15px;">-->
          <!--<el-input placeholder="请输入内容" v-model="input52" class="input-with-select">-->
            <!--<el-select v-model="select" slot="prepend" placeholder="请选择">-->
              <!--<el-option label="餐厅名" value="1"></el-option>-->
              <!--<el-option label="订单号" value="2"></el-option>-->
              <!--<el-option label="用户电话" value="3"></el-option>-->
            <!--</el-select>-->
            <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
          <!--</el-input>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    input: string = '';
    input1: string = '';
    input2: string = '';
    input3: string = '';
    input31: string = '';
    input4: string = '';
    input41: string = '';
    input5: string = '';
    input51: string = '';
    input52: string = '';
    input6: string = '';
    input7: string = '';
    input8: string = '';
    input9: string = '';
    textarea: string = '';
  }
</script>

<style lang="scss" scoped>
.demo-input .el-input {
  width: 180px;
  margin-right: 15px;
}
</style>