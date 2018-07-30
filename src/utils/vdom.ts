import { hasOwn } from "./utils";

export function isVNode(node: any): boolean {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}