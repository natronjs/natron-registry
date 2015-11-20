/**
 * @module natron-registry
 */
import type {Thing} from "natron-core";

export class TaskRegistry {

  __registry__: Map<string, Thing>;

  constructor() {
    this.__registry__ = new Map();
  }

  get size(): number {
    return this.__registry__.size;
  }

  clear(): void {
    this.__registry__.clear();
  }

  delete(name: string): boolean {
    this.__registry__.delete(name);
  }

  get(name: string): Thing {
    return this.__registry__.get(name);
  }

  set(name: string, thing: Thing): TaskRegistry {
    if (name && typeof name !== "string") {
      [name, thing] = [name.name || (name.meta && name.meta.name), name];
      if (typeof name !== "string") {
        throw new TypeError(`${name} is not a valid name`);
      }
    }
    this.__registry__.set(name, thing);
    return this;
  }

  resolve(name: string): Thing {
    return this.get(name);
  }

  [Symbol.iterator](): Iterator {
    return this.__registry__[Symbol.iterator]();
  }
}
