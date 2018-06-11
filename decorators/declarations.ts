/**
 * Utility type to declare an extended Vue constructor
 */
import Vue from "vue";

export type VueClass<V extends Vue> = (new (...args: any[]) => V) & typeof Vue