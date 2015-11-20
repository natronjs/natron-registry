"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskRegistry = exports.TaskRegistry = (function () {
  function TaskRegistry() {
    _classCallCheck(this, TaskRegistry);

    this.__registry__ = new Map();
  }

  _createClass(TaskRegistry, [{
    key: "clear",
    value: function clear() {
      this.__registry__.clear();
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      this.__registry__.delete(name);
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.__registry__.get(name);
    }
  }, {
    key: "set",
    value: function set(name, thing) {
      if (name && typeof name !== "string") {
        var _ref = [name.name || name.meta && name.meta.name, name];
        name = _ref[0];
        thing = _ref[1];

        if (typeof name !== "string") {
          throw new TypeError(name + " is not a valid name");
        }
      }
      this.__registry__.set(name, thing);
      return this;
    }
  }, {
    key: "resolve",
    value: function resolve(name) {
      return this.get(name);
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this.__registry__[Symbol.iterator]();
    }
  }, {
    key: "size",
    get: function get() {
      return this.__registry__.size;
    }
  }]);

  return TaskRegistry;
})(); /**
       * @module natron-registry
       */