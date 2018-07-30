const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj: any, key: string): boolean {
  return hasOwnProperty.call(obj, key);
}