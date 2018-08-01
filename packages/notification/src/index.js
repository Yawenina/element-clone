import Vue from 'vue';
import { isVNode } from '../../../src/utils/vdom';
import Main from './main';

const NotificationConstructor = Vue.extend(Main);
let instances = [];
let seed = 1;

function Notification(options) {
  options = options || {};
  const userOnClose = options.onClose;
  const id = seed++;
  const position = options.position || 'top-right';

  options.onClose = function() {
    Notification.close(id, userOnClose);
  };

  const instance = new NotificationConstructor({
    data: options
  });

  if (isVNode(options.message)) {
    instance.$slots.default = [options.message];
    options.message = 'REPLACED_BY_VNODE';
  }

  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);

  instance.visible = true;

  // compute instance vertical offset
  let verticalOffset = options.offset || 0;
  instances.filter(item => item.position === position).forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  verticalOffset += 16;
  instance.verticalOffset = verticalOffset;

  instances.push(instance);
  return instance;
}

['success', 'info', 'warn', 'error'].forEach(type => {
  Notification[type] = options => {
    // 非对象则视为message
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        message: options
      }
    }
    options.type = type;
    return Notification(options);
  }
});

Notification.close = function(id, userOnClose) {
  let index = -1;
  let len = instances.length;
  let instance;
  // 找到该实例
  instance = instances.filter((item, i) => {
    if (item.id === id) {
      index = i;
      return true;
    }
    return false;
  })[0];

  // 调用用户回调
  if (!instance) return;
  if (typeof userOnClose === 'function') {
    userOnClose(instance);
  }

  // 删除
  instances.splice(index, 1);
  // 重新计算其他元素高度
  if (len <= 1) return;
  const position = instance.position;
  const removedHeight = instance.$el.offsetHeight;
  for(let i = index; i < len - 1; i++) {
    if (instances[i].position === position) {
      instances[i].$el.style[instance.verticalProperty] =
        parseInt(instances[i].$el.style[instance.verticalProperty], 10) - removedHeight - 16 + 'px';
    }
  }
};

Notification.closeAll = function () {
  const len = instances.length - 1;
  // 倒着来减少removeHeight 的计算
  for (let i = len; i >=0; i--) {
    instances[i].close();
  }
};

export default Notification;