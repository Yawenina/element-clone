import Vue from 'vue';
import { isVNode } from '../../../src/utils/vdom';
import Main from './main';

const NotificationConstructor = Vue.extend(Main);

function Notification(options) {
  options = options || {};
  const instance = new NotificationConstructor({
    data: options
  });

  if (isVNode(options.message)) {
    instance.slots.default = [options.message];
    options.message = 'REPLACED_BY_VNODE';
  }

  instance.$mount();
  document.body.appendChild(instance.$el);

  instance.visible = true;

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

export default Notification;