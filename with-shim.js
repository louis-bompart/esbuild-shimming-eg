(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/abortcontroller-polyfill/dist/cjs-ponyfill.js
  var require_cjs_ponyfill = __commonJS({
    "node_modules/abortcontroller-polyfill/dist/cjs-ponyfill.js"(exports) {
      "use strict";
      init_shim();
      Object.defineProperty(exports, "__esModule", { value: true });
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(subClass, "prototype", {
          writable: false
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return _assertThisInitialized(self);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get.bind();
        } else {
          _get = function _get2(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
              return desc.get.call(arguments.length < 3 ? target : receiver);
            }
            return desc.value;
          };
        }
        return _get.apply(this, arguments);
      }
      var Emitter = /* @__PURE__ */ function() {
        function Emitter2() {
          _classCallCheck(this, Emitter2);
          Object.defineProperty(this, "listeners", {
            value: {},
            writable: true,
            configurable: true
          });
        }
        _createClass(Emitter2, [{
          key: "addEventListener",
          value: function addEventListener(type, callback, options) {
            if (!(type in this.listeners)) {
              this.listeners[type] = [];
            }
            this.listeners[type].push({
              callback,
              options
            });
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(type, callback) {
            if (!(type in this.listeners)) {
              return;
            }
            var stack = this.listeners[type];
            for (var i = 0, l = stack.length; i < l; i++) {
              if (stack[i].callback === callback) {
                stack.splice(i, 1);
                return;
              }
            }
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            if (!(event.type in this.listeners)) {
              return;
            }
            var stack = this.listeners[event.type];
            var stackToCall = stack.slice();
            for (var i = 0, l = stackToCall.length; i < l; i++) {
              var listener = stackToCall[i];
              try {
                listener.callback.call(this, event);
              } catch (e) {
                Promise.resolve().then(function() {
                  throw e;
                });
              }
              if (listener.options && listener.options.once) {
                this.removeEventListener(event.type, listener.callback);
              }
            }
            return !event.defaultPrevented;
          }
        }]);
        return Emitter2;
      }();
      var AbortSignal2 = /* @__PURE__ */ function(_Emitter) {
        _inherits(AbortSignal3, _Emitter);
        var _super = _createSuper(AbortSignal3);
        function AbortSignal3() {
          var _this;
          _classCallCheck(this, AbortSignal3);
          _this = _super.call(this);
          if (!_this.listeners) {
            Emitter.call(_assertThisInitialized(_this));
          }
          Object.defineProperty(_assertThisInitialized(_this), "aborted", {
            value: false,
            writable: true,
            configurable: true
          });
          Object.defineProperty(_assertThisInitialized(_this), "onabort", {
            value: null,
            writable: true,
            configurable: true
          });
          Object.defineProperty(_assertThisInitialized(_this), "reason", {
            value: void 0,
            writable: true,
            configurable: true
          });
          return _this;
        }
        _createClass(AbortSignal3, [{
          key: "toString",
          value: function toString() {
            return "[object AbortSignal]";
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            if (event.type === "abort") {
              this.aborted = true;
              if (typeof this.onabort === "function") {
                this.onabort.call(this, event);
              }
            }
            _get(_getPrototypeOf(AbortSignal3.prototype), "dispatchEvent", this).call(this, event);
          }
        }]);
        return AbortSignal3;
      }(Emitter);
      var AbortController2 = /* @__PURE__ */ function() {
        function AbortController3() {
          _classCallCheck(this, AbortController3);
          Object.defineProperty(this, "signal", {
            value: new AbortSignal2(),
            writable: true,
            configurable: true
          });
        }
        _createClass(AbortController3, [{
          key: "abort",
          value: function abort(reason) {
            var event;
            try {
              event = new Event("abort");
            } catch (e) {
              if (typeof document !== "undefined") {
                if (!document.createEvent) {
                  event = document.createEventObject();
                  event.type = "abort";
                } else {
                  event = document.createEvent("Event");
                  event.initEvent("abort", false, false);
                }
              } else {
                event = {
                  type: "abort",
                  bubbles: false,
                  cancelable: false
                };
              }
            }
            var signalReason = reason;
            if (signalReason === void 0) {
              if (typeof document === "undefined") {
                signalReason = new Error("This operation was aborted");
                signalReason.name = "AbortError";
              } else {
                try {
                  signalReason = new DOMException("signal is aborted without reason");
                } catch (err) {
                  signalReason = new Error("This operation was aborted");
                  signalReason.name = "AbortError";
                }
              }
            }
            this.signal.reason = signalReason;
            this.signal.dispatchEvent(event);
          }
        }, {
          key: "toString",
          value: function toString() {
            return "[object AbortController]";
          }
        }]);
        return AbortController3;
      }();
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        AbortController2.prototype[Symbol.toStringTag] = "AbortController";
        AbortSignal2.prototype[Symbol.toStringTag] = "AbortSignal";
      }
      function polyfillNeeded(self) {
        if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
          console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill");
          return true;
        }
        return typeof self.Request === "function" && !self.Request.prototype.hasOwnProperty("signal") || !self.AbortController;
      }
      function abortableFetchDecorator(patchTargets) {
        if ("function" === typeof patchTargets) {
          patchTargets = {
            fetch: patchTargets
          };
        }
        var _patchTargets = patchTargets, fetch = _patchTargets.fetch, _patchTargets$Request = _patchTargets.Request, NativeRequest = _patchTargets$Request === void 0 ? fetch.Request : _patchTargets$Request, NativeAbortController = _patchTargets.AbortController, _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;
        if (!polyfillNeeded({
          fetch,
          Request: NativeRequest,
          AbortController: NativeAbortController,
          __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
        })) {
          return {
            fetch,
            Request
          };
        }
        var Request = NativeRequest;
        if (Request && !Request.prototype.hasOwnProperty("signal") || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
          Request = function Request2(input, init) {
            var signal;
            if (init && init.signal) {
              signal = init.signal;
              delete init.signal;
            }
            var request = new NativeRequest(input, init);
            if (signal) {
              Object.defineProperty(request, "signal", {
                writable: false,
                enumerable: false,
                configurable: true,
                value: signal
              });
            }
            return request;
          };
          Request.prototype = NativeRequest.prototype;
        }
        var realFetch = fetch;
        var abortableFetch2 = function abortableFetch3(input, init) {
          var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : void 0;
          if (signal) {
            var abortError;
            try {
              abortError = new DOMException("Aborted", "AbortError");
            } catch (err) {
              abortError = new Error("Aborted");
              abortError.name = "AbortError";
            }
            if (signal.aborted) {
              return Promise.reject(abortError);
            }
            var cancellation = new Promise(function(_, reject) {
              signal.addEventListener("abort", function() {
                return reject(abortError);
              }, {
                once: true
              });
            });
            if (init && init.signal) {
              delete init.signal;
            }
            return Promise.race([cancellation, realFetch(input, init)]);
          }
          return realFetch(input, init);
        };
        return {
          fetch: abortableFetch2,
          Request
        };
      }
      exports.AbortController = AbortController2;
      exports.AbortSignal = AbortSignal2;
      exports.abortableFetch = abortableFetchDecorator;
    }
  });

  // shim.js
  var import_cjs_ponyfill;
  var init_shim = __esm({
    "shim.js"() {
      import_cjs_ponyfill = __toESM(require_cjs_ponyfill(), 1);
    }
  });

  // index.js
  init_shim();
  var myAbortCtrl = new import_cjs_ponyfill.AbortController();
  (0, import_cjs_ponyfill.abortableFetch)("https://perdu.com", { signal: myAbortCtrl.signal });
})();
