import Vue, { ComponentOptions } from "vue";

export interface ElComponent extends  Vue {
  componentName: string;
}