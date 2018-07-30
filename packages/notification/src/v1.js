import Vue from 'vue';
import Main from './main';

const NotificationCtor = Vue.extend(baseClass);

function createInstance(options) {
  const instance = new NotificationCtor({
    el: document.createElement('div'),
    data: options
  });
  instance.item = instance;
  document.body.appendChild(instance.$el);
  return instance;
}

function Notification(options) {
  createInstance(options);
}

Notification.prototype = {
  success(options) {
    const finalOptions = Object.assign({
      type: 'success'
    }, options);
    createInstance(finalOptions)
  },
  info(options) {
    const finalOptions = Object.assign({
      type: 'info'
    }, options);
    createInstance(finalOptions)
  },
  warn(options) {
    const finalOptions = Object.assign({
      type: 'warn'
    }, options);
    createInstance(finalOptions)
  },
  error(options) {
    const finalOptions = Object.assign({
      type: 'error'
    }, options);
    createInstance(finalOptions)
  },
};

Notification.prototype.constructor = Notification;

export default Notification;