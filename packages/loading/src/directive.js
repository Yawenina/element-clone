import loadingVue from './loading';

const LoadingCtor = Vue.extend(loadingVue);

const directive = {
  bind(el, binding, vnode) {
    const textExr = el.getAttribute('element-loading-textExr');
    const spinnerExr = el.getAttribute('element-loading-spinner');
    const backgroundExr = el.getAttribute('element-loading-background');
    const customClassExr = el.getAttribute('element-loading-custom-class');
    const vm = vnode.context;

    if (binding.modifiers.body) {
      options.body = true;
    }
    if (binding.modifiers.lock) {
      options.lock = true;
    }

    const instance = new LoadingCtor({
      el: document.createElement('div'),
      data: {
        text: vm && vm[text] || textExr,
        spinner: vm && vm[spinner] || spinner,
        background: vm && vm[background] || backgroundExr,
        customClass: vm && vm[customClassExr] || customClassExr,
        fullscreen: !!binding.modifiers.fullscreen
      }
    });

    el.instance = instance;
    binding.value && toggleLoading(el, binding);
  }
}
export default {
  bind(el, binding) {
  let options = {
    target: el,
    text,
    spinner,
    background
  };
  if (binding.modifiers.body) {
    options.body = true;
  }
  if (binding.modifiers.lock) {
    options.lock = true;
  }
  if (binding.value) {
    // 判断是否已绑定
    if (el.instance) return;
    el.instance = loading(options)
  } else {
    el.instance && el.instance.close();
  }
}, update(el, binding) {
  if (binding.value) {
    // 判断是否已绑定
    if (el.instance) return;

    const text = el.getAttribute('element-loading-text');
    const spinner = el.getAttribute('element-loading-spinner');
    const background = el.getAttribute('element-loading-background');

    let options = {
      target: el,
      text,
      spinner,
      background
    };
    if (binding.modifiers.body) {
      options.target = document.body;
    }
    if (binding.modifiers.lock) {
      options.lock = true;
    }
    el.instance = loading(options)
  } else {
    el.instance && el.instance.close();
  }
},
}