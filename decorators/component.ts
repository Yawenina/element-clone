import Vue, { ComponentOptions } from "vue";
import { VueClass } from "./declarations";

export const $internalHooks = [
  'data',
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeDestroy',
  'destroyed',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'render',
  'errorCaptured' // 2.5
];

export function componentFactory(
  Component: VueClass<Vue>,
  options: ComponentOptions<Vue> = {}
): ComponentOptions<Vue> {
  const proto = Component.prototype;
  const keys = Object.getOwnPropertyNames(proto);
  const plainData: any = {};

  // handle class properties
  keys.forEach(key => {
    // handle constructor
    if (key === 'constructor') return;

    // handle hooks: hooks as option property
    if ($internalHooks.includes(key)) {
      options[key] = proto[key];
      return;
    }

    /**
     * end '!'
     * If you use undefined ! you basically bypass this check and tsc won't give you an error for it.
     */
    const descriptor = Object.getOwnPropertyDescriptor(proto, key)!;

    if (typeof descriptor.value === 'function') {
      // handle methods
      (options.methods || (options.methods = {}))[key] = descriptor.value;
    } else if (descriptor.get || descriptor.set) {
      // handle computed
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      }
    } else {
      // collect data
      plainData[key] = descriptor.value;
    }
  });

  // handle data
  options.data = () => {
    return plainData;
  };

  return options;
}