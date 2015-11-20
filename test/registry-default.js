/**
 * @module natron-registry
 * test
 */
import {TaskRegistry} from "../";

describe("TaskRegistry", () => {

  function foo() {}

  it("set(name, thing)", () => {
    let registry = new TaskRegistry();
    registry.set("foo_", foo);
    assert(registry.get("foo_") === foo);
  });

  it("set(thing)", () => {
    let registry = new TaskRegistry();

    let bar = () => {};
    let seq = [foo, bar];

    seq.meta = {name: "seq_"};

    registry.set(seq);
    assert(registry.get("seq_") === seq);
  });

  it("set(thing) - not a valid name", () => {
    let registry = new TaskRegistry();

    let seq = [foo];

    assert.throws(() => {
      registry.set(seq);
    }, TypeError, "undefined is not a valid name");
  });
});
