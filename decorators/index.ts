import Vue, { ComponentOptions } from 'vue';
import { VueClass } from "./declarations";
import { componentFactory } from "./component";

function Component <V extends Vue>(options: ComponentOptions<V> & ThisType<V>): <VC extends VueClass<V>>(target: VC) => VC
function Component(options: ComponentOptions<Vue> | VueClass<Vue>) {
  return function(constructor: VueClass<Vue>) {
    return componentFactory(constructor, options);
  }
}

export default Component;
