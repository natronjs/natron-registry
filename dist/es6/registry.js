

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

  set(name, task) {
    if (name && typeof name !== "string") {
      [name, task] = [String(name.name), name];
    }
    this.__registry__.set(name, task);
    return this;
  }

  resolve(name, context) {
    return this.get(name);
  }

  [Symbol.iterator]() {
    return this.__registry__[Symbol.iterator]();
  }
} /*
   * natron-registry
   */