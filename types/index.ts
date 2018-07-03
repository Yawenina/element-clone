import Vue, { ComponentOptions } from "vue";

export interface ElComponent extends  Vue {
  componentName: string;
}

export type inputSize = 'large' | 'small' | 'mini';
