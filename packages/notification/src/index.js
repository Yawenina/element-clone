import Vue from 'vue';
import { isVNode } from '../../../src/utils/vdom';
import Main from './main';

const NotificationConstructor = Vue.extend(Main);
let instances = [];

function Notification(options) {
  options = options || {};
  const position = options.position || 'top-right';

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

export default Notification;