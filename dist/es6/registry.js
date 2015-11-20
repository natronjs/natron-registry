

export class TaskRegistry {

  constructor() {
    this.__registry__ = new Map();
  }

  get size() {
    return this.__registry__.size;
  }

  clear() {
    this.__registry__.clear();
  }

  delete(name) {
    this.__registry__.delete(name);
  }

  get(name) {
    return this.__registry__.get(name);
  }

  set(name, thing) {
    if (name && typeof name !== "string") {
      [name, thing] = [name.name || name.meta && name.meta.name, name];
      if (typeof name !== "string") {
        throw new TypeError(`${ name } is not a valid name`);
      }
    }
    this.__registry__.set(name, thing);
    return this;
  }

  resolve(name) {
    return this.get(name);
  }

  [Symbol.iterator]() {
    return this.__registry__[Symbol.iterator]();
  }
} /**
   * @module natron-registry
   */