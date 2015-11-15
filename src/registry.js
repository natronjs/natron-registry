/*
 * natron-registry
 */
import type {Task, TaskContext} from "natron-core";

export class TaskRegistry {

  __registry__: Map<string, Task>;

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

  get(name: string): Task {
    return this.__registry__.get(name);
  }

  set(name: string, task: Task): TaskRegistry {
    if (name && typeof name !== "string") {
      [name, task] = [String(name.name), name];
    }
    this.__registry__.set(name, task);
    return this;
  }

  resolve(name: string, context?: TaskContext): Task {
    return this.get(name);
  }

  [Symbol.iterator](): Iterator {
    return this.__registry__[Symbol.iterator]();
  }
}
