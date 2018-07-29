import Vue from 'vue';
import LoadingVue from './loading';

const LoadingConstructor = Vue.extend(LoadingVue);

let fullscreenInstance;

const defaultOptions = {
  body: false,
  fullscreen: true,
  lock: false,
};

LoadingConstructor.prototype.close = function() {
  // 此时 this -> Vue 实例，且实例化时传入了 data = finalOptions;
  if (this.fullscreen) {
    fullscreenInstance = undefined;
  }
  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.classList.remove('el-loading-parent--hidden');
    this.$el.parentNode.classList.remove('el-loading-parent--relative');
    this.$el.parentNode.removeChild(this.$el);
  }
  this.$destroy();
};

export default function loading(options) {
  // 1. 整合所有选项
  const finalOptions = Object.assign({}, defaultOptions, options);

  // 判断 target 是对象还是字符串
  if (typeof finalOptions.target === 'string') {
    finalOptions.target = document.querySelector(finalOptions.target);
  }
  finalOptions.target = finalOptions.target || document.body; // 上一步的DOM可能为空


  // 纠正默认参数
  if (finalOptions.target !== document.body) {
    finalOptions.fullscreen = false;
  } else {
    finalOptions.body = true;
  }

  // fullscreen 下的单例模式
  if (finalOptions.fullscreen && fullscreenInstance) {
    return fullscreenInstance;
  }

  // 生成Loading DOM
  const instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: finalOptions
  });
  // 如果不是body挂载，需给父元素加上 relative 属性
  const parent = finalOptions.target;
  if (parent !== document.body) {
    parent.classList.add('el-loading-parent--relative');
  }
  // 如果 lock === true, 还需为父元素加上 overflow:hidden 属性
  if (finalOptions.lock) {
    parent.classList.add('el-loading-parent--hidden');
  }
  // 挂载到 DOM 元素上
  parent.appendChild(instance.$el);

  // 返回实例
  if (finalOptions.fullscreen) {
    fullscreenInstance = instance;
  }
  return instance;
}

