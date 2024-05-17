function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
(function() {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = function(cb, mod) {
        return function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod), mod.exports;
        };
    };
    var __copyProps = function(to, from, except, desc) {
        if (from && typeof from === "object" || typeof from === "function") {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var key = _step.value;
                    if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                        get: function() {
                            return from[key];
                        },
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
                };
                for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        return to;
    };
    var __toESM = function(mod, isNodeMode, target) {
        return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: true
        }) : target, mod);
    };
    // node_modules/react/cjs/react.production.min.js
    var require_react_production_min = __commonJS({
        "node_modules/react/cjs/react.production.min.js": function(exports) {
            "use strict";
            var l = Symbol.for("react.element");
            var n = Symbol.for("react.portal");
            var p = Symbol.for("react.fragment");
            var q = Symbol.for("react.strict_mode");
            var r = Symbol.for("react.profiler");
            var t = Symbol.for("react.provider");
            var u = Symbol.for("react.context");
            var v = Symbol.for("react.forward_ref");
            var w = Symbol.for("react.suspense");
            var x = Symbol.for("react.memo");
            var y = Symbol.for("react.lazy");
            var z = Symbol.iterator;
            function A(a) {
                if (null === a || "object" !== typeof a) return null;
                a = z && a[z] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var B = {
                isMounted: function isMounted() {
                    return false;
                },
                enqueueForceUpdate: function enqueueForceUpdate() {},
                enqueueReplaceState: function enqueueReplaceState() {},
                enqueueSetState: function enqueueSetState() {}
            };
            var C = Object.assign;
            var D = {};
            function E(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            E.prototype.isReactComponent = {};
            E.prototype.setState = function(a, b) {
                if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, a, b, "setState");
            };
            E.prototype.forceUpdate = function(a) {
                this.updater.enqueueForceUpdate(this, a, "forceUpdate");
            };
            function F() {}
            F.prototype = E.prototype;
            function G(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            var H = G.prototype = new F();
            H.constructor = G;
            C(H, E.prototype);
            H.isPureReactComponent = true;
            var I = Array.isArray;
            var J = Object.prototype.hasOwnProperty;
            var K = {
                current: null
            };
            var L = {
                key: true,
                ref: true,
                __self: true,
                __source: true
            };
            function M(a, b, e) {
                var d, c = {}, k = null, h = null;
                if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
                var g = arguments.length - 2;
                if (1 === g) c.children = e;
                else if (1 < g) {
                    for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
                    c.children = f;
                }
                if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
                return {
                    $$typeof: l,
                    type: a,
                    key: k,
                    ref: h,
                    props: c,
                    _owner: K.current
                };
            }
            function N(a, b) {
                return {
                    $$typeof: l,
                    type: a.type,
                    key: b,
                    ref: a.ref,
                    props: a.props,
                    _owner: a._owner
                };
            }
            function O(a) {
                return "object" === typeof a && null !== a && a.$$typeof === l;
            }
            function escape(a) {
                var b = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + a.replace(/[=:]/g, function(a2) {
                    return b[a2];
                });
            }
            var P = /\/+/g;
            function Q(a, b) {
                return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
            }
            function R(a, b, e, d, c) {
                var k = typeof a === "undefined" ? "undefined" : _type_of(a);
                if ("undefined" === k || "boolean" === k) a = null;
                var h = false;
                if (null === a) h = true;
                else switch(k){
                    case "string":
                    case "number":
                        h = true;
                        break;
                    case "object":
                        switch(a.$$typeof){
                            case l:
                            case n:
                                h = true;
                        }
                }
                if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
                    return a2;
                })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
                h = 0;
                d = "" === d ? "." : d + ":";
                if (I(a)) for(var g = 0; g < a.length; g++){
                    k = a[g];
                    var f = d + Q(k, g);
                    h += R(k, b, e, f, c);
                }
                else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
                else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
                return h;
            }
            function S(a, b, e) {
                if (null == a) return a;
                var d = [], c = 0;
                R(a, d, "", "", function(a2) {
                    return b.call(e, a2, c++);
                });
                return d;
            }
            function T(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    b = b();
                    b.then(function(b2) {
                        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
                    }, function(b2) {
                        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
                    });
                    -1 === a._status && (a._status = 0, a._result = b);
                }
                if (1 === a._status) return a._result.default;
                throw a._result;
            }
            var U = {
                current: null
            };
            var V = {
                transition: null
            };
            var W = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: V,
                ReactCurrentOwner: K
            };
            function X() {
                throw Error("act(...) is not supported in production builds of React.");
            }
            exports.Children = {
                map: S,
                forEach: function forEach(a, b, e) {
                    S(a, function() {
                        b.apply(this, arguments);
                    }, e);
                },
                count: function count(a) {
                    var b = 0;
                    S(a, function() {
                        b++;
                    });
                    return b;
                },
                toArray: function toArray(a) {
                    return S(a, function(a2) {
                        return a2;
                    }) || [];
                },
                only: function only(a) {
                    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                    return a;
                }
            };
            exports.Component = E;
            exports.Fragment = p;
            exports.Profiler = r;
            exports.PureComponent = G;
            exports.StrictMode = q;
            exports.Suspense = w;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
            exports.act = X;
            exports.cloneElement = function(a, b, e) {
                if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
                var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
                if (null != b) {
                    void 0 !== b.ref && (k = b.ref, h = K.current);
                    void 0 !== b.key && (c = "" + b.key);
                    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                    for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
                }
                var f = arguments.length - 2;
                if (1 === f) d.children = e;
                else if (1 < f) {
                    g = Array(f);
                    for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
                    d.children = g;
                }
                return {
                    $$typeof: l,
                    type: a.type,
                    key: c,
                    ref: k,
                    props: d,
                    _owner: h
                };
            };
            exports.createContext = function(a) {
                a = {
                    $$typeof: u,
                    _currentValue: a,
                    _currentValue2: a,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                };
                a.Provider = {
                    $$typeof: t,
                    _context: a
                };
                return a.Consumer = a;
            };
            exports.createElement = M;
            exports.createFactory = function(a) {
                var b = M.bind(null, a);
                b.type = a;
                return b;
            };
            exports.createRef = function() {
                return {
                    current: null
                };
            };
            exports.forwardRef = function(a) {
                return {
                    $$typeof: v,
                    render: a
                };
            };
            exports.isValidElement = O;
            exports.lazy = function(a) {
                return {
                    $$typeof: y,
                    _payload: {
                        _status: -1,
                        _result: a
                    },
                    _init: T
                };
            };
            exports.memo = function(a, b) {
                return {
                    $$typeof: x,
                    type: a,
                    compare: void 0 === b ? null : b
                };
            };
            exports.startTransition = function(a) {
                var b = V.transition;
                V.transition = {};
                try {
                    a();
                } finally{
                    V.transition = b;
                }
            };
            exports.unstable_act = X;
            exports.useCallback = function(a, b) {
                return U.current.useCallback(a, b);
            };
            exports.useContext = function(a) {
                return U.current.useContext(a);
            };
            exports.useDebugValue = function() {};
            exports.useDeferredValue = function(a) {
                return U.current.useDeferredValue(a);
            };
            exports.useEffect = function(a, b) {
                return U.current.useEffect(a, b);
            };
            exports.useId = function() {
                return U.current.useId();
            };
            exports.useImperativeHandle = function(a, b, e) {
                return U.current.useImperativeHandle(a, b, e);
            };
            exports.useInsertionEffect = function(a, b) {
                return U.current.useInsertionEffect(a, b);
            };
            exports.useLayoutEffect = function(a, b) {
                return U.current.useLayoutEffect(a, b);
            };
            exports.useMemo = function(a, b) {
                return U.current.useMemo(a, b);
            };
            exports.useReducer = function(a, b, e) {
                return U.current.useReducer(a, b, e);
            };
            exports.useRef = function(a) {
                return U.current.useRef(a);
            };
            exports.useState = function(a) {
                return U.current.useState(a);
            };
            exports.useSyncExternalStore = function(a, b, e) {
                return U.current.useSyncExternalStore(a, b, e);
            };
            exports.useTransition = function() {
                return U.current.useTransition();
            };
            exports.version = "18.3.1";
        }
    });
    // node_modules/react/cjs/react.development.js
    var require_react_development = __commonJS({
        "node_modules/react/cjs/react.development.js": function(exports, module) {
            "use strict";
            if (process.env.NODE_ENV !== "production") {
                (function() {
                    "use strict";
                    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
                    }
                    var ReactVersion = "18.3.1";
                    var REACT_ELEMENT_TYPE = Symbol.for("react.element");
                    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
                    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
                    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
                    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                    var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
                    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
                    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
                    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
                    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
                    var REACT_MEMO_TYPE = Symbol.for("react.memo");
                    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
                    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
                    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                    var FAUX_ITERATOR_SYMBOL = "@@iterator";
                    function getIteratorFn(maybeIterable) {
                        if (maybeIterable === null || typeof maybeIterable !== "object") {
                            return null;
                        }
                        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                        if (typeof maybeIterator === "function") {
                            return maybeIterator;
                        }
                        return null;
                    }
                    var ReactCurrentDispatcher = {
                        /**
             * @internal
             * @type {ReactComponent}
             */ current: null
                    };
                    var ReactCurrentBatchConfig = {
                        transition: null
                    };
                    var ReactCurrentActQueue = {
                        current: null,
                        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
                        isBatchingLegacy: false,
                        didScheduleLegacyUpdate: false
                    };
                    var ReactCurrentOwner = {
                        /**
             * @internal
             * @type {ReactComponent}
             */ current: null
                    };
                    var ReactDebugCurrentFrame = {};
                    var currentExtraStackFrame = null;
                    function setExtraStackFrame(stack) {
                        {
                            currentExtraStackFrame = stack;
                        }
                    }
                    {
                        ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
                            {
                                currentExtraStackFrame = stack;
                            }
                        };
                        ReactDebugCurrentFrame.getCurrentStack = null;
                        ReactDebugCurrentFrame.getStackAddendum = function() {
                            var stack = "";
                            if (currentExtraStackFrame) {
                                stack += currentExtraStackFrame;
                            }
                            var impl = ReactDebugCurrentFrame.getCurrentStack;
                            if (impl) {
                                stack += impl() || "";
                            }
                            return stack;
                        };
                    }
                    var enableScopeAPI = false;
                    var enableCacheElement = false;
                    var enableTransitionTracing = false;
                    var enableLegacyHidden = false;
                    var enableDebugTracing = false;
                    var ReactSharedInternals = {
                        ReactCurrentDispatcher: ReactCurrentDispatcher,
                        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
                        ReactCurrentOwner: ReactCurrentOwner
                    };
                    {
                        ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
                        ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
                    }
                    function warn(format) {
                        {
                            {
                                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                    args[_key - 1] = arguments[_key];
                                }
                                printWarning("warn", format, args);
                            }
                        }
                    }
                    function error(format) {
                        {
                            {
                                for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                                    args[_key2 - 1] = arguments[_key2];
                                }
                                printWarning("error", format, args);
                            }
                        }
                    }
                    function printWarning(level, format, args) {
                        {
                            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                            var stack = ReactDebugCurrentFrame2.getStackAddendum();
                            if (stack !== "") {
                                format += "%s";
                                args = args.concat([
                                    stack
                                ]);
                            }
                            var argsWithFormat = args.map(function(item) {
                                return String(item);
                            });
                            argsWithFormat.unshift("Warning: " + format);
                            Function.prototype.apply.call(console[level], console, argsWithFormat);
                        }
                    }
                    var didWarnStateUpdateForUnmountedComponent = {};
                    function warnNoop(publicInstance, callerName) {
                        {
                            var _constructor = publicInstance.constructor;
                            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                            var warningKey = componentName + "." + callerName;
                            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                                return;
                            }
                            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
                            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
                        }
                    }
                    var ReactNoopUpdateQueue = {
                        /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */ isMounted: function isMounted(publicInstance) {
                            return false;
                        },
                        /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */ enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
                            warnNoop(publicInstance, "forceUpdate");
                        },
                        /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */ enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
                            warnNoop(publicInstance, "replaceState");
                        },
                        /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */ enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
                            warnNoop(publicInstance, "setState");
                        }
                    };
                    var assign = Object.assign;
                    var emptyObject = {};
                    {
                        Object.freeze(emptyObject);
                    }
                    function Component(props, context, updater) {
                        this.props = props;
                        this.context = context;
                        this.refs = emptyObject;
                        this.updater = updater || ReactNoopUpdateQueue;
                    }
                    Component.prototype.isReactComponent = {};
                    Component.prototype.setState = function(partialState, callback) {
                        if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
                            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                        }
                        this.updater.enqueueSetState(this, partialState, callback, "setState");
                    };
                    Component.prototype.forceUpdate = function(callback) {
                        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                    };
                    {
                        var deprecatedAPIs = {
                            isMounted: [
                                "isMounted",
                                "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                            ],
                            replaceState: [
                                "replaceState",
                                "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                            ]
                        };
                        var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
                            Object.defineProperty(Component.prototype, methodName, {
                                get: function get() {
                                    warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                                    return void 0;
                                }
                            });
                        };
                        for(var fnName in deprecatedAPIs){
                            if (deprecatedAPIs.hasOwnProperty(fnName)) {
                                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                            }
                        }
                    }
                    function ComponentDummy() {}
                    ComponentDummy.prototype = Component.prototype;
                    function PureComponent(props, context, updater) {
                        this.props = props;
                        this.context = context;
                        this.refs = emptyObject;
                        this.updater = updater || ReactNoopUpdateQueue;
                    }
                    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
                    pureComponentPrototype.constructor = PureComponent;
                    assign(pureComponentPrototype, Component.prototype);
                    pureComponentPrototype.isPureReactComponent = true;
                    function createRef() {
                        var refObject = {
                            current: null
                        };
                        {
                            Object.seal(refObject);
                        }
                        return refObject;
                    }
                    var isArrayImpl = Array.isArray;
                    function isArray(a) {
                        return isArrayImpl(a);
                    }
                    function typeName(value) {
                        {
                            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                            return type;
                        }
                    }
                    function willCoercionThrow(value) {
                        {
                            try {
                                testStringCoercion(value);
                                return false;
                            } catch (e) {
                                return true;
                            }
                        }
                    }
                    function testStringCoercion(value) {
                        return "" + value;
                    }
                    function checkKeyStringCoercion(value) {
                        {
                            if (willCoercionThrow(value)) {
                                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                                return testStringCoercion(value);
                            }
                        }
                    }
                    function getWrappedName(outerType, innerType, wrapperName) {
                        var displayName = outerType.displayName;
                        if (displayName) {
                            return displayName;
                        }
                        var functionName = innerType.displayName || innerType.name || "";
                        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
                    }
                    function getContextName(type) {
                        return type.displayName || "Context";
                    }
                    function getComponentNameFromType(type) {
                        if (type == null) {
                            return null;
                        }
                        {
                            if (typeof type.tag === "number") {
                                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
                            }
                        }
                        if (typeof type === "function") {
                            return type.displayName || type.name || null;
                        }
                        if (typeof type === "string") {
                            return type;
                        }
                        switch(type){
                            case REACT_FRAGMENT_TYPE:
                                return "Fragment";
                            case REACT_PORTAL_TYPE:
                                return "Portal";
                            case REACT_PROFILER_TYPE:
                                return "Profiler";
                            case REACT_STRICT_MODE_TYPE:
                                return "StrictMode";
                            case REACT_SUSPENSE_TYPE:
                                return "Suspense";
                            case REACT_SUSPENSE_LIST_TYPE:
                                return "SuspenseList";
                        }
                        if (typeof type === "object") {
                            switch(type.$$typeof){
                                case REACT_CONTEXT_TYPE:
                                    var context = type;
                                    return getContextName(context) + ".Consumer";
                                case REACT_PROVIDER_TYPE:
                                    var provider = type;
                                    return getContextName(provider._context) + ".Provider";
                                case REACT_FORWARD_REF_TYPE:
                                    return getWrappedName(type, type.render, "ForwardRef");
                                case REACT_MEMO_TYPE:
                                    var outerName = type.displayName || null;
                                    if (outerName !== null) {
                                        return outerName;
                                    }
                                    return getComponentNameFromType(type.type) || "Memo";
                                case REACT_LAZY_TYPE:
                                    {
                                        var lazyComponent = type;
                                        var payload = lazyComponent._payload;
                                        var init = lazyComponent._init;
                                        try {
                                            return getComponentNameFromType(init(payload));
                                        } catch (x) {
                                            return null;
                                        }
                                    }
                            }
                        }
                        return null;
                    }
                    var hasOwnProperty = Object.prototype.hasOwnProperty;
                    var RESERVED_PROPS = {
                        key: true,
                        ref: true,
                        __self: true,
                        __source: true
                    };
                    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
                    {
                        didWarnAboutStringRefs = {};
                    }
                    function hasValidRef(config) {
                        {
                            if (hasOwnProperty.call(config, "ref")) {
                                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                                if (getter && getter.isReactWarning) {
                                    return false;
                                }
                            }
                        }
                        return config.ref !== void 0;
                    }
                    function hasValidKey(config) {
                        {
                            if (hasOwnProperty.call(config, "key")) {
                                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                                if (getter && getter.isReactWarning) {
                                    return false;
                                }
                            }
                        }
                        return config.key !== void 0;
                    }
                    function defineKeyPropWarningGetter(props, displayName) {
                        var warnAboutAccessingKey = function warnAboutAccessingKey() {
                            {
                                if (!specialPropKeyWarningShown) {
                                    specialPropKeyWarningShown = true;
                                    error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                                }
                            }
                        };
                        warnAboutAccessingKey.isReactWarning = true;
                        Object.defineProperty(props, "key", {
                            get: warnAboutAccessingKey,
                            configurable: true
                        });
                    }
                    function defineRefPropWarningGetter(props, displayName) {
                        var warnAboutAccessingRef = function warnAboutAccessingRef() {
                            {
                                if (!specialPropRefWarningShown) {
                                    specialPropRefWarningShown = true;
                                    error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                                }
                            }
                        };
                        warnAboutAccessingRef.isReactWarning = true;
                        Object.defineProperty(props, "ref", {
                            get: warnAboutAccessingRef,
                            configurable: true
                        });
                    }
                    function warnIfStringRefCannotBeAutoConverted(config) {
                        {
                            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                                if (!didWarnAboutStringRefs[componentName]) {
                                    error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                                    didWarnAboutStringRefs[componentName] = true;
                                }
                            }
                        }
                    }
                    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
                        var element = {
                            // This tag allows us to uniquely identify this as a React Element
                            $$typeof: REACT_ELEMENT_TYPE,
                            // Built-in properties that belong on the element
                            type: type,
                            key: key,
                            ref: ref,
                            props: props,
                            // Record the component responsible for creating this element.
                            _owner: owner
                        };
                        {
                            element._store = {};
                            Object.defineProperty(element._store, "validated", {
                                configurable: false,
                                enumerable: false,
                                writable: true,
                                value: false
                            });
                            Object.defineProperty(element, "_self", {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: self
                            });
                            Object.defineProperty(element, "_source", {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: source
                            });
                            if (Object.freeze) {
                                Object.freeze(element.props);
                                Object.freeze(element);
                            }
                        }
                        return element;
                    };
                    function createElement(type, config, children) {
                        var propName;
                        var props = {};
                        var key = null;
                        var ref = null;
                        var self = null;
                        var source = null;
                        if (config != null) {
                            if (hasValidRef(config)) {
                                ref = config.ref;
                                {
                                    warnIfStringRefCannotBeAutoConverted(config);
                                }
                            }
                            if (hasValidKey(config)) {
                                {
                                    checkKeyStringCoercion(config.key);
                                }
                                key = "" + config.key;
                            }
                            self = config.__self === void 0 ? null : config.__self;
                            source = config.__source === void 0 ? null : config.__source;
                            for(propName in config){
                                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                    props[propName] = config[propName];
                                }
                            }
                        }
                        var childrenLength = arguments.length - 2;
                        if (childrenLength === 1) {
                            props.children = children;
                        } else if (childrenLength > 1) {
                            var childArray = Array(childrenLength);
                            for(var i = 0; i < childrenLength; i++){
                                childArray[i] = arguments[i + 2];
                            }
                            {
                                if (Object.freeze) {
                                    Object.freeze(childArray);
                                }
                            }
                            props.children = childArray;
                        }
                        if (type && type.defaultProps) {
                            var defaultProps = type.defaultProps;
                            for(propName in defaultProps){
                                if (props[propName] === void 0) {
                                    props[propName] = defaultProps[propName];
                                }
                            }
                        }
                        {
                            if (key || ref) {
                                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                                if (key) {
                                    defineKeyPropWarningGetter(props, displayName);
                                }
                                if (ref) {
                                    defineRefPropWarningGetter(props, displayName);
                                }
                            }
                        }
                        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                    }
                    function cloneAndReplaceKey(oldElement, newKey) {
                        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
                        return newElement;
                    }
                    function cloneElement(element, config, children) {
                        if (element === null || element === void 0) {
                            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
                        }
                        var propName;
                        var props = assign({}, element.props);
                        var key = element.key;
                        var ref = element.ref;
                        var self = element._self;
                        var source = element._source;
                        var owner = element._owner;
                        if (config != null) {
                            if (hasValidRef(config)) {
                                ref = config.ref;
                                owner = ReactCurrentOwner.current;
                            }
                            if (hasValidKey(config)) {
                                {
                                    checkKeyStringCoercion(config.key);
                                }
                                key = "" + config.key;
                            }
                            var defaultProps;
                            if (element.type && element.type.defaultProps) {
                                defaultProps = element.type.defaultProps;
                            }
                            for(propName in config){
                                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                    if (config[propName] === void 0 && defaultProps !== void 0) {
                                        props[propName] = defaultProps[propName];
                                    } else {
                                        props[propName] = config[propName];
                                    }
                                }
                            }
                        }
                        var childrenLength = arguments.length - 2;
                        if (childrenLength === 1) {
                            props.children = children;
                        } else if (childrenLength > 1) {
                            var childArray = Array(childrenLength);
                            for(var i = 0; i < childrenLength; i++){
                                childArray[i] = arguments[i + 2];
                            }
                            props.children = childArray;
                        }
                        return ReactElement(element.type, key, ref, self, source, owner, props);
                    }
                    function isValidElement(object) {
                        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                    }
                    var SEPARATOR = ".";
                    var SUBSEPARATOR = ":";
                    function escape(key) {
                        var escapeRegex = /[=:]/g;
                        var escaperLookup = {
                            "=": "=0",
                            ":": "=2"
                        };
                        var escapedString = key.replace(escapeRegex, function(match) {
                            return escaperLookup[match];
                        });
                        return "$" + escapedString;
                    }
                    var didWarnAboutMaps = false;
                    var userProvidedKeyEscapeRegex = /\/+/g;
                    function escapeUserProvidedKey(text) {
                        return text.replace(userProvidedKeyEscapeRegex, "$&/");
                    }
                    function getElementKey(element, index) {
                        if (typeof element === "object" && element !== null && element.key != null) {
                            {
                                checkKeyStringCoercion(element.key);
                            }
                            return escape("" + element.key);
                        }
                        return index.toString(36);
                    }
                    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                        var type = typeof children === "undefined" ? "undefined" : _type_of(children);
                        if (type === "undefined" || type === "boolean") {
                            children = null;
                        }
                        var invokeCallback = false;
                        if (children === null) {
                            invokeCallback = true;
                        } else {
                            switch(type){
                                case "string":
                                case "number":
                                    invokeCallback = true;
                                    break;
                                case "object":
                                    switch(children.$$typeof){
                                        case REACT_ELEMENT_TYPE:
                                        case REACT_PORTAL_TYPE:
                                            invokeCallback = true;
                                    }
                            }
                        }
                        if (invokeCallback) {
                            var _child = children;
                            var mappedChild = callback(_child);
                            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                            if (isArray(mappedChild)) {
                                var escapedChildKey = "";
                                if (childKey != null) {
                                    escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                                }
                                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                                    return c;
                                });
                            } else if (mappedChild != null) {
                                if (isValidElement(mappedChild)) {
                                    {
                                        if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                            checkKeyStringCoercion(mappedChild.key);
                                        }
                                    }
                                    mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                                    // traverseAllChildren used to do for objects as children
                                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                                    // eslint-disable-next-line react-internal/safe-string-coercion
                                    escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                                }
                                array.push(mappedChild);
                            }
                            return 1;
                        }
                        var child;
                        var nextName;
                        var subtreeCount = 0;
                        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
                        if (isArray(children)) {
                            for(var i = 0; i < children.length; i++){
                                child = children[i];
                                nextName = nextNamePrefix + getElementKey(child, i);
                                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                            }
                        } else {
                            var iteratorFn = getIteratorFn(children);
                            if (typeof iteratorFn === "function") {
                                var iterableChildren = children;
                                {
                                    if (iteratorFn === iterableChildren.entries) {
                                        if (!didWarnAboutMaps) {
                                            warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                                        }
                                        didWarnAboutMaps = true;
                                    }
                                }
                                var iterator = iteratorFn.call(iterableChildren);
                                var step;
                                var ii = 0;
                                while(!(step = iterator.next()).done){
                                    child = step.value;
                                    nextName = nextNamePrefix + getElementKey(child, ii++);
                                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                                }
                            } else if (type === "object") {
                                var childrenString = String(children);
                                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                            }
                        }
                        return subtreeCount;
                    }
                    function mapChildren(children, func, context) {
                        if (children == null) {
                            return children;
                        }
                        var result = [];
                        var count = 0;
                        mapIntoArray(children, result, "", "", function(child) {
                            return func.call(context, child, count++);
                        });
                        return result;
                    }
                    function countChildren(children) {
                        var n = 0;
                        mapChildren(children, function() {
                            n++;
                        });
                        return n;
                    }
                    function forEachChildren(children, forEachFunc, forEachContext) {
                        mapChildren(children, function() {
                            forEachFunc.apply(this, arguments);
                        }, forEachContext);
                    }
                    function toArray(children) {
                        return mapChildren(children, function(child) {
                            return child;
                        }) || [];
                    }
                    function onlyChild(children) {
                        if (!isValidElement(children)) {
                            throw new Error("React.Children.only expected to receive a single React element child.");
                        }
                        return children;
                    }
                    function createContext(defaultValue) {
                        var context = {
                            $$typeof: REACT_CONTEXT_TYPE,
                            // As a workaround to support multiple concurrent renderers, we categorize
                            // some renderers as primary and others as secondary. We only expect
                            // there to be two concurrent renderers at most: React Native (primary) and
                            // Fabric (secondary); React DOM (primary) and React ART (secondary).
                            // Secondary renderers store their context values on separate fields.
                            _currentValue: defaultValue,
                            _currentValue2: defaultValue,
                            // Used to track how many concurrent renderers this context currently
                            // supports within in a single renderer. Such as parallel server rendering.
                            _threadCount: 0,
                            // These are circular
                            Provider: null,
                            Consumer: null,
                            // Add these to use same hidden class in VM as ServerContext
                            _defaultValue: null,
                            _globalName: null
                        };
                        context.Provider = {
                            $$typeof: REACT_PROVIDER_TYPE,
                            _context: context
                        };
                        var hasWarnedAboutUsingNestedContextConsumers = false;
                        var hasWarnedAboutUsingConsumerProvider = false;
                        var hasWarnedAboutDisplayNameOnConsumer = false;
                        {
                            var Consumer = {
                                $$typeof: REACT_CONTEXT_TYPE,
                                _context: context
                            };
                            Object.defineProperties(Consumer, {
                                Provider: {
                                    get: function get() {
                                        if (!hasWarnedAboutUsingConsumerProvider) {
                                            hasWarnedAboutUsingConsumerProvider = true;
                                            error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                                        }
                                        return context.Provider;
                                    },
                                    set: function set(_Provider) {
                                        context.Provider = _Provider;
                                    }
                                },
                                _currentValue: {
                                    get: function get() {
                                        return context._currentValue;
                                    },
                                    set: function set(_currentValue) {
                                        context._currentValue = _currentValue;
                                    }
                                },
                                _currentValue2: {
                                    get: function get() {
                                        return context._currentValue2;
                                    },
                                    set: function set(_currentValue2) {
                                        context._currentValue2 = _currentValue2;
                                    }
                                },
                                _threadCount: {
                                    get: function get() {
                                        return context._threadCount;
                                    },
                                    set: function set(_threadCount) {
                                        context._threadCount = _threadCount;
                                    }
                                },
                                Consumer: {
                                    get: function get() {
                                        if (!hasWarnedAboutUsingNestedContextConsumers) {
                                            hasWarnedAboutUsingNestedContextConsumers = true;
                                            error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                                        }
                                        return context.Consumer;
                                    }
                                },
                                displayName: {
                                    get: function get() {
                                        return context.displayName;
                                    },
                                    set: function set(displayName) {
                                        if (!hasWarnedAboutDisplayNameOnConsumer) {
                                            warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                            hasWarnedAboutDisplayNameOnConsumer = true;
                                        }
                                    }
                                }
                            });
                            context.Consumer = Consumer;
                        }
                        {
                            context._currentRenderer = null;
                            context._currentRenderer2 = null;
                        }
                        return context;
                    }
                    var Uninitialized = -1;
                    var Pending = 0;
                    var Resolved = 1;
                    var Rejected = 2;
                    function lazyInitializer(payload) {
                        if (payload._status === Uninitialized) {
                            var ctor = payload._result;
                            var thenable = ctor();
                            thenable.then(function(moduleObject2) {
                                if (payload._status === Pending || payload._status === Uninitialized) {
                                    var resolved = payload;
                                    resolved._status = Resolved;
                                    resolved._result = moduleObject2;
                                }
                            }, function(error2) {
                                if (payload._status === Pending || payload._status === Uninitialized) {
                                    var rejected = payload;
                                    rejected._status = Rejected;
                                    rejected._result = error2;
                                }
                            });
                            if (payload._status === Uninitialized) {
                                var pending = payload;
                                pending._status = Pending;
                                pending._result = thenable;
                            }
                        }
                        if (payload._status === Resolved) {
                            var moduleObject = payload._result;
                            {
                                if (moduleObject === void 0) {
                                    error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                                }
                            }
                            {
                                if (!("default" in moduleObject)) {
                                    error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                                }
                            }
                            return moduleObject.default;
                        } else {
                            throw payload._result;
                        }
                    }
                    function lazy(ctor) {
                        var payload = {
                            // We use these fields to store the result.
                            _status: Uninitialized,
                            _result: ctor
                        };
                        var lazyType = {
                            $$typeof: REACT_LAZY_TYPE,
                            _payload: payload,
                            _init: lazyInitializer
                        };
                        {
                            var defaultProps;
                            var propTypes;
                            Object.defineProperties(lazyType, {
                                defaultProps: {
                                    configurable: true,
                                    get: function get() {
                                        return defaultProps;
                                    },
                                    set: function set(newDefaultProps) {
                                        error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                        defaultProps = newDefaultProps;
                                        Object.defineProperty(lazyType, "defaultProps", {
                                            enumerable: true
                                        });
                                    }
                                },
                                propTypes: {
                                    configurable: true,
                                    get: function get() {
                                        return propTypes;
                                    },
                                    set: function set(newPropTypes) {
                                        error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                        propTypes = newPropTypes;
                                        Object.defineProperty(lazyType, "propTypes", {
                                            enumerable: true
                                        });
                                    }
                                }
                            });
                        }
                        return lazyType;
                    }
                    function forwardRef(render) {
                        {
                            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
                            } else if (typeof render !== "function") {
                                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render === "undefined" ? "undefined" : _type_of(render));
                            } else {
                                if (render.length !== 0 && render.length !== 2) {
                                    error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                                }
                            }
                            if (render != null) {
                                if (render.defaultProps != null || render.propTypes != null) {
                                    error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                                }
                            }
                        }
                        var elementType = {
                            $$typeof: REACT_FORWARD_REF_TYPE,
                            render: render
                        };
                        {
                            var ownName;
                            Object.defineProperty(elementType, "displayName", {
                                enumerable: false,
                                configurable: true,
                                get: function get() {
                                    return ownName;
                                },
                                set: function set(name) {
                                    ownName = name;
                                    if (!render.name && !render.displayName) {
                                        render.displayName = name;
                                    }
                                }
                            });
                        }
                        return elementType;
                    }
                    var REACT_MODULE_REFERENCE;
                    {
                        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
                    }
                    function isValidElementType(type) {
                        if (typeof type === "string" || typeof type === "function") {
                            return true;
                        }
                        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                            return true;
                        }
                        if (typeof type === "object" && type !== null) {
                            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                            // types supported by any Flight configuration anywhere since
                            // we don't know which Flight build this will end up being used
                            // with.
                            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                                return true;
                            }
                        }
                        return false;
                    }
                    function memo(type, compare) {
                        {
                            if (!isValidElementType(type)) {
                                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type === "undefined" ? "undefined" : _type_of(type));
                            }
                        }
                        var elementType = {
                            $$typeof: REACT_MEMO_TYPE,
                            type: type,
                            compare: compare === void 0 ? null : compare
                        };
                        {
                            var ownName;
                            Object.defineProperty(elementType, "displayName", {
                                enumerable: false,
                                configurable: true,
                                get: function get() {
                                    return ownName;
                                },
                                set: function set(name) {
                                    ownName = name;
                                    if (!type.name && !type.displayName) {
                                        type.displayName = name;
                                    }
                                }
                            });
                        }
                        return elementType;
                    }
                    function resolveDispatcher() {
                        var dispatcher = ReactCurrentDispatcher.current;
                        {
                            if (dispatcher === null) {
                                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                            }
                        }
                        return dispatcher;
                    }
                    function useContext(Context) {
                        var dispatcher = resolveDispatcher();
                        {
                            if (Context._context !== void 0) {
                                var realContext = Context._context;
                                if (realContext.Consumer === Context) {
                                    error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                                } else if (realContext.Provider === Context) {
                                    error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                                }
                            }
                        }
                        return dispatcher.useContext(Context);
                    }
                    function useState(initialState) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useState(initialState);
                    }
                    function useReducer(reducer, initialArg, init) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useReducer(reducer, initialArg, init);
                    }
                    function useRef(initialValue) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useRef(initialValue);
                    }
                    function useEffect(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useEffect(create, deps);
                    }
                    function useInsertionEffect(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useInsertionEffect(create, deps);
                    }
                    function useLayoutEffect(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useLayoutEffect(create, deps);
                    }
                    function useCallback(callback, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useCallback(callback, deps);
                    }
                    function useMemo(create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useMemo(create, deps);
                    }
                    function useImperativeHandle(ref, create, deps) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useImperativeHandle(ref, create, deps);
                    }
                    function useDebugValue(value, formatterFn) {
                        {
                            var dispatcher = resolveDispatcher();
                            return dispatcher.useDebugValue(value, formatterFn);
                        }
                    }
                    function useTransition() {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useTransition();
                    }
                    function useDeferredValue(value) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useDeferredValue(value);
                    }
                    function useId() {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useId();
                    }
                    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
                    }
                    var disabledDepth = 0;
                    var prevLog;
                    var prevInfo;
                    var prevWarn;
                    var prevError;
                    var prevGroup;
                    var prevGroupCollapsed;
                    var prevGroupEnd;
                    function disabledLog() {}
                    disabledLog.__reactDisabledLog = true;
                    function disableLogs() {
                        {
                            if (disabledDepth === 0) {
                                prevLog = console.log;
                                prevInfo = console.info;
                                prevWarn = console.warn;
                                prevError = console.error;
                                prevGroup = console.group;
                                prevGroupCollapsed = console.groupCollapsed;
                                prevGroupEnd = console.groupEnd;
                                var props = {
                                    configurable: true,
                                    enumerable: true,
                                    value: disabledLog,
                                    writable: true
                                };
                                Object.defineProperties(console, {
                                    info: props,
                                    log: props,
                                    warn: props,
                                    error: props,
                                    group: props,
                                    groupCollapsed: props,
                                    groupEnd: props
                                });
                            }
                            disabledDepth++;
                        }
                    }
                    function reenableLogs() {
                        {
                            disabledDepth--;
                            if (disabledDepth === 0) {
                                var props = {
                                    configurable: true,
                                    enumerable: true,
                                    writable: true
                                };
                                Object.defineProperties(console, {
                                    log: assign({}, props, {
                                        value: prevLog
                                    }),
                                    info: assign({}, props, {
                                        value: prevInfo
                                    }),
                                    warn: assign({}, props, {
                                        value: prevWarn
                                    }),
                                    error: assign({}, props, {
                                        value: prevError
                                    }),
                                    group: assign({}, props, {
                                        value: prevGroup
                                    }),
                                    groupCollapsed: assign({}, props, {
                                        value: prevGroupCollapsed
                                    }),
                                    groupEnd: assign({}, props, {
                                        value: prevGroupEnd
                                    })
                                });
                            }
                            if (disabledDepth < 0) {
                                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                            }
                        }
                    }
                    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
                    var prefix;
                    function describeBuiltInComponentFrame(name, source, ownerFn) {
                        {
                            if (prefix === void 0) {
                                try {
                                    throw Error();
                                } catch (x) {
                                    var match = x.stack.trim().match(/\n( *(at )?)/);
                                    prefix = match && match[1] || "";
                                }
                            }
                            return "\n" + prefix + name;
                        }
                    }
                    var reentry = false;
                    var componentFrameCache;
                    {
                        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                        componentFrameCache = new PossiblyWeakMap();
                    }
                    function describeNativeComponentFrame(fn, construct) {
                        if (!fn || reentry) {
                            return "";
                        }
                        {
                            var frame = componentFrameCache.get(fn);
                            if (frame !== void 0) {
                                return frame;
                            }
                        }
                        var control;
                        reentry = true;
                        var previousPrepareStackTrace = Error.prepareStackTrace;
                        Error.prepareStackTrace = void 0;
                        var previousDispatcher;
                        {
                            previousDispatcher = ReactCurrentDispatcher$1.current;
                            ReactCurrentDispatcher$1.current = null;
                            disableLogs();
                        }
                        try {
                            if (construct) {
                                var Fake = function Fake() {
                                    throw Error();
                                };
                                Object.defineProperty(Fake.prototype, "props", {
                                    set: function set() {
                                        throw Error();
                                    }
                                });
                                if (typeof Reflect === "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(Fake, []);
                                    } catch (x) {
                                        control = x;
                                    }
                                    Reflect.construct(fn, [], Fake);
                                } else {
                                    try {
                                        Fake.call();
                                    } catch (x) {
                                        control = x;
                                    }
                                    fn.call(Fake.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (x) {
                                    control = x;
                                }
                                fn();
                            }
                        } catch (sample) {
                            if (sample && control && typeof sample.stack === "string") {
                                var sampleLines = sample.stack.split("\n");
                                var controlLines = control.stack.split("\n");
                                var s = sampleLines.length - 1;
                                var c = controlLines.length - 1;
                                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                                    c--;
                                }
                                for(; s >= 1 && c >= 0; s--, c--){
                                    if (sampleLines[s] !== controlLines[c]) {
                                        if (s !== 1 || c !== 1) {
                                            do {
                                                s--;
                                                c--;
                                                if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                    var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                    if (fn.displayName && _frame.includes("<anonymous>")) {
                                                        _frame = _frame.replace("<anonymous>", fn.displayName);
                                                    }
                                                    {
                                                        if (typeof fn === "function") {
                                                            componentFrameCache.set(fn, _frame);
                                                        }
                                                    }
                                                    return _frame;
                                                }
                                            }while (s >= 1 && c >= 0);
                                        }
                                        break;
                                    }
                                }
                            }
                        } finally{
                            reentry = false;
                            {
                                ReactCurrentDispatcher$1.current = previousDispatcher;
                                reenableLogs();
                            }
                            Error.prepareStackTrace = previousPrepareStackTrace;
                        }
                        var name = fn ? fn.displayName || fn.name : "";
                        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                        {
                            if (typeof fn === "function") {
                                componentFrameCache.set(fn, syntheticFrame);
                            }
                        }
                        return syntheticFrame;
                    }
                    function describeFunctionComponentFrame(fn, source, ownerFn) {
                        {
                            return describeNativeComponentFrame(fn, false);
                        }
                    }
                    function shouldConstruct(Component2) {
                        var prototype = Component2.prototype;
                        return !!(prototype && prototype.isReactComponent);
                    }
                    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                        if (type == null) {
                            return "";
                        }
                        if (typeof type === "function") {
                            {
                                return describeNativeComponentFrame(type, shouldConstruct(type));
                            }
                        }
                        if (typeof type === "string") {
                            return describeBuiltInComponentFrame(type);
                        }
                        switch(type){
                            case REACT_SUSPENSE_TYPE:
                                return describeBuiltInComponentFrame("Suspense");
                            case REACT_SUSPENSE_LIST_TYPE:
                                return describeBuiltInComponentFrame("SuspenseList");
                        }
                        if (typeof type === "object") {
                            switch(type.$$typeof){
                                case REACT_FORWARD_REF_TYPE:
                                    return describeFunctionComponentFrame(type.render);
                                case REACT_MEMO_TYPE:
                                    return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                                case REACT_LAZY_TYPE:
                                    {
                                        var lazyComponent = type;
                                        var payload = lazyComponent._payload;
                                        var init = lazyComponent._init;
                                        try {
                                            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                        } catch (x) {}
                                    }
                            }
                        }
                        return "";
                    }
                    var loggedTypeFailures = {};
                    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                    function setCurrentlyValidatingElement(element) {
                        {
                            if (element) {
                                var owner = element._owner;
                                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                            } else {
                                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                            }
                        }
                    }
                    function checkPropTypes(typeSpecs, values, location, componentName, element) {
                        {
                            var has = Function.call.bind(hasOwnProperty);
                            for(var typeSpecName in typeSpecs){
                                if (has(typeSpecs, typeSpecName)) {
                                    var error$1 = void 0;
                                    try {
                                        if (typeof typeSpecs[typeSpecName] !== "function") {
                                            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _type_of(typeSpecs[typeSpecName]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                            err.name = "Invariant Violation";
                                            throw err;
                                        }
                                        error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                    } catch (ex) {
                                        error$1 = ex;
                                    }
                                    if (error$1 && !_instanceof(error$1, Error)) {
                                        setCurrentlyValidatingElement(element);
                                        error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1 === "undefined" ? "undefined" : _type_of(error$1));
                                        setCurrentlyValidatingElement(null);
                                    }
                                    if (_instanceof(error$1, Error) && !(error$1.message in loggedTypeFailures)) {
                                        loggedTypeFailures[error$1.message] = true;
                                        setCurrentlyValidatingElement(element);
                                        error("Failed %s type: %s", location, error$1.message);
                                        setCurrentlyValidatingElement(null);
                                    }
                                }
                            }
                        }
                    }
                    function setCurrentlyValidatingElement$1(element) {
                        {
                            if (element) {
                                var owner = element._owner;
                                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                                setExtraStackFrame(stack);
                            } else {
                                setExtraStackFrame(null);
                            }
                        }
                    }
                    var propTypesMisspellWarningShown;
                    {
                        propTypesMisspellWarningShown = false;
                    }
                    function getDeclarationErrorAddendum() {
                        if (ReactCurrentOwner.current) {
                            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (name) {
                                return "\n\nCheck the render method of `" + name + "`.";
                            }
                        }
                        return "";
                    }
                    function getSourceInfoErrorAddendum(source) {
                        if (source !== void 0) {
                            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                            var lineNumber = source.lineNumber;
                            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                        }
                        return "";
                    }
                    function getSourceInfoErrorAddendumForProps(elementProps) {
                        if (elementProps !== null && elementProps !== void 0) {
                            return getSourceInfoErrorAddendum(elementProps.__source);
                        }
                        return "";
                    }
                    var ownerHasKeyUseWarning = {};
                    function getCurrentComponentErrorInfo(parentType) {
                        var info = getDeclarationErrorAddendum();
                        if (!info) {
                            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                            if (parentName) {
                                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                            }
                        }
                        return info;
                    }
                    function validateExplicitKey(element, parentType) {
                        if (!element._store || element._store.validated || element.key != null) {
                            return;
                        }
                        element._store.validated = true;
                        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                            return;
                        }
                        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                        var childOwner = "";
                        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                        }
                        {
                            setCurrentlyValidatingElement$1(element);
                            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                    function validateChildKeys(node, parentType) {
                        if (typeof node !== "object") {
                            return;
                        }
                        if (isArray(node)) {
                            for(var i = 0; i < node.length; i++){
                                var child = node[i];
                                if (isValidElement(child)) {
                                    validateExplicitKey(child, parentType);
                                }
                            }
                        } else if (isValidElement(node)) {
                            if (node._store) {
                                node._store.validated = true;
                            }
                        } else if (node) {
                            var iteratorFn = getIteratorFn(node);
                            if (typeof iteratorFn === "function") {
                                if (iteratorFn !== node.entries) {
                                    var iterator = iteratorFn.call(node);
                                    var step;
                                    while(!(step = iterator.next()).done){
                                        if (isValidElement(step.value)) {
                                            validateExplicitKey(step.value, parentType);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    function validatePropTypes(element) {
                        {
                            var type = element.type;
                            if (type === null || type === void 0 || typeof type === "string") {
                                return;
                            }
                            var propTypes;
                            if (typeof type === "function") {
                                propTypes = type.propTypes;
                            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                            // Inner props are checked in the reconciler.
                            type.$$typeof === REACT_MEMO_TYPE)) {
                                propTypes = type.propTypes;
                            } else {
                                return;
                            }
                            if (propTypes) {
                                var name = getComponentNameFromType(type);
                                checkPropTypes(propTypes, element.props, "prop", name, element);
                            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                                propTypesMisspellWarningShown = true;
                                var _name = getComponentNameFromType(type);
                                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                            }
                            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                            }
                        }
                    }
                    function validateFragmentProps(fragment) {
                        {
                            var keys = Object.keys(fragment.props);
                            for(var i = 0; i < keys.length; i++){
                                var key = keys[i];
                                if (key !== "children" && key !== "key") {
                                    setCurrentlyValidatingElement$1(fragment);
                                    error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                                    setCurrentlyValidatingElement$1(null);
                                    break;
                                }
                            }
                            if (fragment.ref !== null) {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                                setCurrentlyValidatingElement$1(null);
                            }
                        }
                    }
                    function createElementWithValidation(type, props, children) {
                        var validType = isValidElementType(type);
                        if (!validType) {
                            var info = "";
                            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                            }
                            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                            if (sourceInfo) {
                                info += sourceInfo;
                            } else {
                                info += getDeclarationErrorAddendum();
                            }
                            var typeString;
                            if (type === null) {
                                typeString = "null";
                            } else if (isArray(type)) {
                                typeString = "array";
                            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                                info = " Did you accidentally export a JSX literal instead of a component?";
                            } else {
                                typeString = typeof type === "undefined" ? "undefined" : _type_of(type);
                            }
                            {
                                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                            }
                        }
                        var element = createElement.apply(this, arguments);
                        if (element == null) {
                            return element;
                        }
                        if (validType) {
                            for(var i = 2; i < arguments.length; i++){
                                validateChildKeys(arguments[i], type);
                            }
                        }
                        if (type === REACT_FRAGMENT_TYPE) {
                            validateFragmentProps(element);
                        } else {
                            validatePropTypes(element);
                        }
                        return element;
                    }
                    var didWarnAboutDeprecatedCreateFactory = false;
                    function createFactoryWithValidation(type) {
                        var validatedFactory = createElementWithValidation.bind(null, type);
                        validatedFactory.type = type;
                        {
                            if (!didWarnAboutDeprecatedCreateFactory) {
                                didWarnAboutDeprecatedCreateFactory = true;
                                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
                            }
                            Object.defineProperty(validatedFactory, "type", {
                                enumerable: false,
                                get: function get() {
                                    warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                                    Object.defineProperty(this, "type", {
                                        value: type
                                    });
                                    return type;
                                }
                            });
                        }
                        return validatedFactory;
                    }
                    function cloneElementWithValidation(element, props, children) {
                        var newElement = cloneElement.apply(this, arguments);
                        for(var i = 2; i < arguments.length; i++){
                            validateChildKeys(arguments[i], newElement.type);
                        }
                        validatePropTypes(newElement);
                        return newElement;
                    }
                    function startTransition(scope, options) {
                        var prevTransition = ReactCurrentBatchConfig.transition;
                        ReactCurrentBatchConfig.transition = {};
                        var currentTransition = ReactCurrentBatchConfig.transition;
                        {
                            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
                        }
                        try {
                            scope();
                        } finally{
                            ReactCurrentBatchConfig.transition = prevTransition;
                            {
                                if (prevTransition === null && currentTransition._updatedFibers) {
                                    var updatedFibersCount = currentTransition._updatedFibers.size;
                                    if (updatedFibersCount > 10) {
                                        warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                                    }
                                    currentTransition._updatedFibers.clear();
                                }
                            }
                        }
                    }
                    var didWarnAboutMessageChannel = false;
                    var enqueueTaskImpl = null;
                    function enqueueTask(task) {
                        if (enqueueTaskImpl === null) {
                            try {
                                var requireString = ("require" + Math.random()).slice(0, 7);
                                var nodeRequire = module && module[requireString];
                                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
                            } catch (_err) {
                                enqueueTaskImpl = function enqueueTaskImpl(callback) {
                                    {
                                        if (didWarnAboutMessageChannel === false) {
                                            didWarnAboutMessageChannel = true;
                                            if (typeof MessageChannel === "undefined") {
                                                error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                                            }
                                        }
                                    }
                                    var channel = new MessageChannel();
                                    channel.port1.onmessage = callback;
                                    channel.port2.postMessage(void 0);
                                };
                            }
                        }
                        return enqueueTaskImpl(task);
                    }
                    var actScopeDepth = 0;
                    var didWarnNoAwaitAct = false;
                    function act(callback) {
                        {
                            var prevActScopeDepth = actScopeDepth;
                            actScopeDepth++;
                            if (ReactCurrentActQueue.current === null) {
                                ReactCurrentActQueue.current = [];
                            }
                            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                            var result;
                            try {
                                ReactCurrentActQueue.isBatchingLegacy = true;
                                result = callback();
                                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                                    var queue = ReactCurrentActQueue.current;
                                    if (queue !== null) {
                                        ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                                        flushActQueue(queue);
                                    }
                                }
                            } catch (error2) {
                                popActScope(prevActScopeDepth);
                                throw error2;
                            } finally{
                                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                            }
                            if (result !== null && typeof result === "object" && typeof result.then === "function") {
                                var thenableResult = result;
                                var wasAwaited = false;
                                var thenable = {
                                    then: function then(resolve, reject) {
                                        wasAwaited = true;
                                        thenableResult.then(function(returnValue2) {
                                            popActScope(prevActScopeDepth);
                                            if (actScopeDepth === 0) {
                                                recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                                            } else {
                                                resolve(returnValue2);
                                            }
                                        }, function(error2) {
                                            popActScope(prevActScopeDepth);
                                            reject(error2);
                                        });
                                    }
                                };
                                {
                                    if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                                        Promise.resolve().then(function() {}).then(function() {
                                            if (!wasAwaited) {
                                                didWarnNoAwaitAct = true;
                                                error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                                            }
                                        });
                                    }
                                }
                                return thenable;
                            } else {
                                var returnValue = result;
                                popActScope(prevActScopeDepth);
                                if (actScopeDepth === 0) {
                                    var _queue = ReactCurrentActQueue.current;
                                    if (_queue !== null) {
                                        flushActQueue(_queue);
                                        ReactCurrentActQueue.current = null;
                                    }
                                    var _thenable = {
                                        then: function then(resolve, reject) {
                                            if (ReactCurrentActQueue.current === null) {
                                                ReactCurrentActQueue.current = [];
                                                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                            } else {
                                                resolve(returnValue);
                                            }
                                        }
                                    };
                                    return _thenable;
                                } else {
                                    var _thenable2 = {
                                        then: function then(resolve, reject) {
                                            resolve(returnValue);
                                        }
                                    };
                                    return _thenable2;
                                }
                            }
                        }
                    }
                    function popActScope(prevActScopeDepth) {
                        {
                            if (prevActScopeDepth !== actScopeDepth - 1) {
                                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
                            }
                            actScopeDepth = prevActScopeDepth;
                        }
                    }
                    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                        {
                            var queue = ReactCurrentActQueue.current;
                            if (queue !== null) {
                                try {
                                    flushActQueue(queue);
                                    enqueueTask(function() {
                                        if (queue.length === 0) {
                                            ReactCurrentActQueue.current = null;
                                            resolve(returnValue);
                                        } else {
                                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                        }
                                    });
                                } catch (error2) {
                                    reject(error2);
                                }
                            } else {
                                resolve(returnValue);
                            }
                        }
                    }
                    var isFlushing = false;
                    function flushActQueue(queue) {
                        {
                            if (!isFlushing) {
                                isFlushing = true;
                                var i = 0;
                                try {
                                    for(; i < queue.length; i++){
                                        var callback = queue[i];
                                        do {
                                            callback = callback(true);
                                        }while (callback !== null);
                                    }
                                    queue.length = 0;
                                } catch (error2) {
                                    queue = queue.slice(i + 1);
                                    throw error2;
                                } finally{
                                    isFlushing = false;
                                }
                            }
                        }
                    }
                    var createElement$1 = createElementWithValidation;
                    var cloneElement$1 = cloneElementWithValidation;
                    var createFactory = createFactoryWithValidation;
                    var Children = {
                        map: mapChildren,
                        forEach: forEachChildren,
                        count: countChildren,
                        toArray: toArray,
                        only: onlyChild
                    };
                    exports.Children = Children;
                    exports.Component = Component;
                    exports.Fragment = REACT_FRAGMENT_TYPE;
                    exports.Profiler = REACT_PROFILER_TYPE;
                    exports.PureComponent = PureComponent;
                    exports.StrictMode = REACT_STRICT_MODE_TYPE;
                    exports.Suspense = REACT_SUSPENSE_TYPE;
                    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                    exports.act = act;
                    exports.cloneElement = cloneElement$1;
                    exports.createContext = createContext;
                    exports.createElement = createElement$1;
                    exports.createFactory = createFactory;
                    exports.createRef = createRef;
                    exports.forwardRef = forwardRef;
                    exports.isValidElement = isValidElement;
                    exports.lazy = lazy;
                    exports.memo = memo;
                    exports.startTransition = startTransition;
                    exports.unstable_act = act;
                    exports.useCallback = useCallback;
                    exports.useContext = useContext;
                    exports.useDebugValue = useDebugValue;
                    exports.useDeferredValue = useDeferredValue;
                    exports.useEffect = useEffect;
                    exports.useId = useId;
                    exports.useImperativeHandle = useImperativeHandle;
                    exports.useInsertionEffect = useInsertionEffect;
                    exports.useLayoutEffect = useLayoutEffect;
                    exports.useMemo = useMemo;
                    exports.useReducer = useReducer;
                    exports.useRef = useRef;
                    exports.useState = useState;
                    exports.useSyncExternalStore = useSyncExternalStore;
                    exports.useTransition = useTransition;
                    exports.version = ReactVersion;
                    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
                    }
                })();
            }
        }
    });
    // node_modules/react/index.js
    var require_react = __commonJS({
        "node_modules/react/index.js": function(exports, module) {
            "use strict";
            if (process.env.NODE_ENV === "production") {
                module.exports = require_react_production_min();
            } else {
                module.exports = require_react_development();
            }
        }
    });
    // magicoon_react/Magicoon.tsx
    var import_react = __toESM(require_react(), 1);
    // magicoon_react/codepoints.ts
    var codePoints = {
        "filled": {
            "wifi": 61697,
            "wifi-slash": 61698,
            "wave-pulse": 61699,
            "watch-square": 61700,
            "watch-circle": 61701,
            "warehouse": 61702,
            "wallet": 61703,
            "volume": 61704,
            "volume-times": 61705,
            "volume-slash": 61706,
            "volume-plus": 61707,
            "volume-minus": 61708,
            "volume-low": 61709,
            "volume-high": 61710,
            "volume-high-slash": 61711,
            "voicemail": 61712,
            "virus-covid": 61713,
            "virus-covid-slash": 61714,
            "video": 61715,
            "video-square": 61716,
            "video-slash": 61717,
            "video-plus": 61718,
            "video-play": 61719,
            "video-outgoing": 61720,
            "video-incoming": 61721,
            "video-eye": 61722,
            "video-circle": 61723,
            "vector": 61724,
            "users": 61725,
            "users-slash": 61726,
            "users-group": 61727,
            "users-group-slash": 61728,
            "users-group-alt": 61729,
            "users-alt": 61730,
            "user": 61731,
            "user-viewfinder": 61732,
            "user-times": 61733,
            "user-times-bottom": 61734,
            "user-times-alt": 61735,
            "user-tag": 61736,
            "user-star": 61737,
            "user-square": 61738,
            "user-slash": 61739,
            "user-shield": 61740,
            "user-settings": 61741,
            "user-search": 61742,
            "user-plus": 61743,
            "user-plus-bottom": 61744,
            "user-plus-alt": 61745,
            "user-minus": 61746,
            "user-minus-bottom": 61747,
            "user-minus-alt": 61748,
            "user-lock": 61749,
            "user-heart": 61750,
            "user-eye": 61751,
            "user-edit": 61752,
            "user-dollar": 61753,
            "user-code": 61754,
            "user-clock": 61755,
            "user-circle": 61756,
            "user-check": 61757,
            "user-check-bottom": 61758,
            "user-check-alt": 61759,
            "user-change": 61760,
            "user-ban": 61761,
            "user-alt": 61762,
            "usb-drive": 61763,
            "upload": 61764,
            "upload-alt": 61765,
            "unlock": 61766,
            "university": 61767,
            "tv": 61768,
            "tv-retro": 61769,
            "tv-play": 61770,
            "truck": 61771,
            "trophy": 61772,
            "trophy-star": 61773,
            "triangle": 61774,
            "triangle-exclamation": 61775,
            "trend-up": 61776,
            "trend-up-square": 61777,
            "trend-up-circle": 61778,
            "trend-down": 61779,
            "trend-down-square": 61780,
            "trend-down-circle": 61781,
            "tree": 61782,
            "trash": 61783,
            "trash-undo": 61784,
            "trash-times": 61785,
            "trash-slash": 61786,
            "trash-redo": 61787,
            "trash-plus": 61788,
            "trash-minus": 61789,
            "trash-check": 61790,
            "traffic-cone": 61791,
            "tooth": 61792,
            "tool": 61793,
            "toggle-on": 61794,
            "toggle-on-rectangle": 61795,
            "toggle-on-alt": 61796,
            "toggle-off": 61797,
            "toggle-off-rectangle": 61798,
            "toggle-off-alt": 61799,
            "times": 61800,
            "times-square": 61801,
            "times-circle": 61802,
            "time-past": 61803,
            "time-forward": 61804,
            "thumbtack": 61805,
            "thumbtack-vertical": 61806,
            "thermometer": 61807,
            "test-tube": 61808,
            "test-tube-alt": 61809,
            "telescope": 61810,
            "taxi": 61811,
            "target": 61812,
            "tags": 61813,
            "tag": 61814,
            "tablet": 61815,
            "syringe": 61816,
            "sun": 61817,
            "story": 61818,
            "store": 61819,
            "stopwatch": 61820,
            "stopwatch-times": 61821,
            "stopwatch-times-alt": 61822,
            "stopwatch-plus": 61823,
            "stopwatch-plus-alt": 61824,
            "stopwatch-minus": 61825,
            "stopwatch-minus-alt": 61826,
            "stopwatch-empty": 61827,
            "stopwatch-edit": 61828,
            "stopwatch-check": 61829,
            "stopwatch-check-alt": 61830,
            "stopwatch-alt": 61831,
            "stop": 61832,
            "stop-circle": 61833,
            "sticky-note-text-square": 61834,
            "sticky-note-text-circle": 61835,
            "sticky-note-square": 61836,
            "sticky-note-circle": 61837,
            "stethoscope": 61838,
            "step-forward": 61839,
            "step-backward": 61840,
            "star": 61841,
            "star-tag": 61842,
            "star-square": 61843,
            "star-slash": 61844,
            "star-shooting": 61845,
            "star-shooting-horizontal": 61846,
            "star-magic": 61847,
            "star-half": 61848,
            "star-circle": 61849,
            "speedometer": 61850,
            "speaker": 61851,
            "sparkle": 61852,
            "sort": 61853,
            "sort-vertical": 61854,
            "sort-horizontal": 61855,
            "sort-descending": 61856,
            "sort-descending-square": 61857,
            "sort-descending-circle": 61858,
            "sort-ascending": 61859,
            "sort-ascending-square": 61860,
            "sort-ascending-circle": 61861,
            "sofa": 61862,
            "sliders-vertical": 61863,
            "sliders-vertical-alt": 61864,
            "sliders-horizontal": 61865,
            "sliders-horizontal-alt": 61866,
            "sim-card": 61867,
            "sim-card-2": 61868,
            "sim-card-1": 61869,
            "signs-direction": 61870,
            "signal-stream": 61871,
            "sign-direction-right": 61872,
            "sign-direction-left": 61873,
            "shuffle": 61874,
            "shopping-cart": 61875,
            "shopping-cart-times": 61876,
            "shopping-cart-star": 61877,
            "shopping-cart-plus": 61878,
            "shopping-cart-minus": 61879,
            "shopping-cart-heart": 61880,
            "shopping-cart-check": 61881,
            "shopping-cart-arrow-top": 61882,
            "shopping-cart-arrow-down": 61883,
            "shopping-basket": 61884,
            "shopping-basket-times": 61885,
            "shopping-basket-star": 61886,
            "shopping-basket-plus": 61887,
            "shopping-basket-minus": 61888,
            "shopping-basket-heart": 61889,
            "shopping-basket-check": 61890,
            "shopping-basket-arrow-up": 61891,
            "shopping-basket-arrow-down": 61892,
            "shopping-bag": 61893,
            "shopping-bag-alt": 61894,
            "shield": 61895,
            "shield-user": 61896,
            "shield-times": 61897,
            "shield-star": 61898,
            "shield-slash": 61899,
            "shield-search": 61900,
            "shield-question": 61901,
            "shield-plus": 61902,
            "shield-play": 61903,
            "shield-minus": 61904,
            "shield-lock": 61905,
            "shield-heart": 61906,
            "shield-exclamation": 61907,
            "shield-check": 61908,
            "shield-bolt": 61909,
            "share": 61910,
            "settings": 61911,
            "server": 61912,
            "send": 61913,
            "send-right": 61914,
            "search": 61915,
            "search-text": 61916,
            "search-plus": 61917,
            "search-minus": 61918,
            "sd-card": 61919,
            "scissors": 61920,
            "school": 61921,
            "scanner": 61922,
            "scan": 61923,
            "scan-qr": 61924,
            "scan-circle": 61925,
            "sack-dollar": 61926,
            "route": 61927,
            "rotate": 61928,
            "rotate-square": 61929,
            "rotate-right": 61930,
            "rotate-right-square": 61931,
            "rotate-right-circle": 61932,
            "rotate-left": 61933,
            "rotate-left-square": 61934,
            "rotate-left-circle": 61935,
            "rotate-circle": 61936,
            "rocket": 61937,
            "rocket-launch": 61938,
            "road": 61939,
            "restaurant": 61940,
            "repeat": 61941,
            "registered-square": 61942,
            "registered-circle": 61943,
            "receipt": 61944,
            "receipt-text": 61945,
            "receipt-text-alt": 61946,
            "receipt-star": 61947,
            "receipt-star-alt": 61948,
            "receipt-percent": 61949,
            "receipt-percent-alt": 61950,
            "receipt-list": 61951,
            "receipt-list-alt": 61952,
            "receipt-heart": 61953,
            "receipt-heart-alt": 61954,
            "receipt-alt": 61955,
            "ranking": 61956,
            "radio": 61957,
            "radio-button-fill": 61958,
            "radiation": 61959,
            "radiation-circle": 61960,
            "radar": 61961,
            "question-square": 61962,
            "question-circle": 61963,
            "puzzle": 61964,
            "print": 61965,
            "print-slash": 61966,
            "presentation": 61967,
            "presentation-user": 61968,
            "presentation-trend-up": 61969,
            "presentation-trend-down": 61970,
            "presentation-text": 61971,
            "presentation-poll": 61972,
            "presentation-play": 61973,
            "presentation-pen": 61974,
            "presentation-lightbulb": 61975,
            "presentation-dollar": 61976,
            "presentation-chart-pie": 61977,
            "presentation-chart-line": 61978,
            "power-off": 61979,
            "power-off-square": 61980,
            "power-off-circle": 61981,
            "poll-vertical-square": 61982,
            "poll-vertical-circle": 61983,
            "poll-horizontal-square": 61984,
            "poll-horizontal-circle": 61985,
            "plus": 61986,
            "plus-square": 61987,
            "plus-circle": 61988,
            "plug": 61989,
            "playlist": 61990,
            "play": 61991,
            "play-square": 61992,
            "play-pause": 61993,
            "play-circle": 61994,
            "pills": 61995,
            "phone": 61996,
            "phone-times": 61997,
            "phone-slash": 61998,
            "phone-plus": 61999,
            "phone-outgoing": 62e3,
            "phone-office": 62001,
            "phone-missed": 62002,
            "phone-incoming": 62003,
            "phone-hangup": 62004,
            "phone-flip": 62005,
            "phone-call": 62006,
            "phone-2": 62007,
            "phone-1": 62008,
            "percent": 62009,
            "percent-tag": 62010,
            "percent-square": 62011,
            "percent-circle": 62012,
            "pen": 62013,
            "pen-tool": 62014,
            "pen-line": 62015,
            "pause": 62016,
            "pause-circle": 62017,
            "parking-square": 62018,
            "parking-circle": 62019,
            "papers": 62020,
            "papers-text": 62021,
            "paperclip": 62022,
            "palette": 62023,
            "package": 62024,
            "package-star": 62025,
            "package-heart": 62026,
            "package-dollar": 62027,
            "package-check": 62028,
            "octagon": 62029,
            "octagon-times": 62030,
            "octagon-plus": 62031,
            "octagon-minus": 62032,
            "octagon-exclamation": 62033,
            "octagon-check": 62034,
            "nut": 62035,
            "notebook": 62036,
            "note": 62037,
            "note-text": 62038,
            "note-text-square": 62039,
            "note-list": 62040,
            "note-list-square": 62041,
            "note-list-check": 62042,
            "note-list-check-square": 62043,
            "newspaper": 62044,
            "music": 62045,
            "music-note": 62046,
            "music-list": 62047,
            "mug": 62048,
            "mug-hot": 62049,
            "mouse": 62050,
            "mosque": 62051,
            "mortar-pestle": 62052,
            "more-vertical": 62053,
            "more-vertical-square": 62054,
            "more-vertical-circle": 62055,
            "more-horizontal": 62056,
            "more-horizontal-square": 62057,
            "more-horizontal-circle": 62058,
            "moon": 62059,
            "monitor-waveform": 62060,
            "money-withdrawal": 62061,
            "money-convert": 62062,
            "money-bills": 62063,
            "money-bill": 62064,
            "money-bill-times": 62065,
            "money-bill-send": 62066,
            "money-bill-receive": 62067,
            "money-bill-plus": 62068,
            "money-bill-minus": 62069,
            "money-bill-convert": 62070,
            "money-bill-clock": 62071,
            "money-bill-check": 62072,
            "money-bill-ban": 62073,
            "mobile": 62074,
            "minus": 62075,
            "minus-square": 62076,
            "minus-circle": 62077,
            "minimize": 62078,
            "microscope": 62079,
            "microphone": 62080,
            "microphone-stand": 62081,
            "microphone-slash": 62082,
            "messages": 62083,
            "messages-text": 62084,
            "messages-dots": 62085,
            "message": 62086,
            "message-times": 62087,
            "message-times-alt": 62088,
            "message-text": 62089,
            "message-text-times": 62090,
            "message-text-plus": 62091,
            "message-text-notification": 62092,
            "message-text-minus": 62093,
            "message-text-check": 62094,
            "message-star": 62095,
            "message-shield": 62096,
            "message-settings": 62097,
            "message-search": 62098,
            "message-question": 62099,
            "message-plus": 62100,
            "message-plus-alt": 62101,
            "message-notification": 62102,
            "message-minus": 62103,
            "message-minus-alt": 62104,
            "message-lock": 62105,
            "message-info": 62106,
            "message-heart": 62107,
            "message-exclamation": 62108,
            "message-edit": 62109,
            "message-dots": 62110,
            "message-dots-times": 62111,
            "message-dots-plus": 62112,
            "message-dots-notification": 62113,
            "message-dots-minus": 62114,
            "message-dots-check": 62115,
            "message-code": 62116,
            "message-clock": 62117,
            "message-check": 62118,
            "message-check-alt": 62119,
            "message-activity": 62120,
            "menu": 62121,
            "menu-square": 62122,
            "menu-square-alt": 62123,
            "menu-right": 62124,
            "menu-right-square": 62125,
            "menu-right-square-alt": 62126,
            "menu-right-circle": 62127,
            "menu-right-circle-alt": 62128,
            "menu-right-alt": 62129,
            "menu-left": 62130,
            "menu-left-square": 62131,
            "menu-left-square-alt": 62132,
            "menu-left-circle": 62133,
            "menu-left-circle-alt": 62134,
            "menu-left-alt": 62135,
            "menu-duo": 62136,
            "menu-duo-square": 62137,
            "menu-duo-circle": 62138,
            "menu-circle": 62139,
            "menu-circle-alt": 62140,
            "menu-alt": 62141,
            "megaphone": 62142,
            "medal": 62143,
            "medal-star": 62144,
            "medal-check": 62145,
            "maximize": 62146,
            "mask-face": 62147,
            "map": 62148,
            "map-pin": 62149,
            "map-location": 62150,
            "magnet": 62151,
            "log-out": 62152,
            "log-in": 62153,
            "lock": 62154,
            "lock-viewfinder": 62155,
            "location-pin": 62156,
            "location-pin-times": 62157,
            "location-pin-star": 62158,
            "location-pin-slash": 62159,
            "location-pin-slash-alt": 62160,
            "location-pin-search": 62161,
            "location-pin-question": 62162,
            "location-pin-plus": 62163,
            "location-pin-minus": 62164,
            "location-pin-lock": 62165,
            "location-pin-heart": 62166,
            "location-pin-eye": 62167,
            "location-pin-exclamation": 62168,
            "location-pin-edit": 62169,
            "location-pin-check": 62170,
            "location-pin-alt": 62171,
            "location-crosshairs": 62172,
            "location-crosshairs-slash": 62173,
            "location-arrow": 62174,
            "location-arrow-square": 62175,
            "location-arrow-circle": 62176,
            "list": 62177,
            "link": 62178,
            "link-horizontal": 62179,
            "link-horizontal-alt": 62180,
            "link-broken": 62181,
            "link-broken-horizontal": 62182,
            "link-alt": 62183,
            "line-up-square": 62184,
            "line-up-circle": 62185,
            "line-down-square": 62186,
            "line-down-circle": 62187,
            "line-chart-dots": 62188,
            "line-chart-dots-square": 62189,
            "line-chart-dots-circle": 62190,
            "like": 62191,
            "like-tag": 62192,
            "like-square": 62193,
            "like-circle": 62194,
            "lightbulb": 62195,
            "light-emergency": 62196,
            "light-emergency-on": 62197,
            "life-ring": 62198,
            "leaf": 62199,
            "layout-web-9": 62200,
            "layout-web-8": 62201,
            "layout-web-7": 62202,
            "layout-web-6": 62203,
            "layout-web-5": 62204,
            "layout-web-4": 62205,
            "layout-web-3": 62206,
            "layout-web-2": 62207,
            "layout-web-12": 62208,
            "layout-web-11": 62209,
            "layout-web-10": 62210,
            "layout-web-1": 62211,
            "layer-group": 62212,
            "laptop": 62213,
            "laptop-code": 62214,
            "keypad": 62215,
            "keyhole-square": 62216,
            "keyhole-circle": 62217,
            "keyboard": 62218,
            "key": 62219,
            "key-square": 62220,
            "key-circle": 62221,
            "kaaba": 62222,
            "invoice": 62223,
            "info-square": 62224,
            "info-circle": 62225,
            "inbox": 62226,
            "inbox-upload": 62227,
            "inbox-empty": 62228,
            "inbox-download": 62229,
            "image": 62230,
            "image-upload": 62231,
            "image-times": 62232,
            "image-plus": 62233,
            "image-minus": 62234,
            "image-gallery": 62235,
            "image-gallery-plus": 62236,
            "image-download": 62237,
            "image-check": 62238,
            "id-card": 62239,
            "id-badge": 62240,
            "hourglass": 62241,
            "hospital": 62242,
            "hospital-h-sign-square": 62243,
            "hospital-h-sign-circle": 62244,
            "home": 62245,
            "home-wifi": 62246,
            "home-user": 62247,
            "home-trend-up": 62248,
            "home-trend-down": 62249,
            "home-star": 62250,
            "home-shield": 62251,
            "home-search": 62252,
            "home-roof": 62253,
            "home-roof-wifi": 62254,
            "home-roof-user": 62255,
            "home-roof-trend-up": 62256,
            "home-roof-trend-down": 62257,
            "home-roof-star": 62258,
            "home-roof-shield": 62259,
            "home-roof-search": 62260,
            "home-roof-lock": 62261,
            "home-roof-heart": 62262,
            "home-roof-dollar": 62263,
            "home-roof-activity": 62264,
            "home-lock": 62265,
            "home-heart": 62266,
            "home-dollar": 62267,
            "home-dash": 62268,
            "home-dash-wifi": 62269,
            "home-dash-user": 62270,
            "home-dash-trend-up": 62271,
            "home-dash-trend-down": 62272,
            "home-dash-star": 62273,
            "home-dash-shield": 62274,
            "home-dash-search": 62275,
            "home-dash-lock": 62276,
            "home-dash-heart": 62277,
            "home-dash-dollar": 62278,
            "home-dash-activity": 62279,
            "home-activity": 62280,
            "heart": 62281,
            "heart-times": 62282,
            "heart-tag": 62283,
            "heart-square": 62284,
            "heart-slash": 62285,
            "heart-pulse": 62286,
            "heart-plus": 62287,
            "heart-minus": 62288,
            "heart-circle": 62289,
            "heart-check": 62290,
            "headphones": 62291,
            "hashtag": 62292,
            "hard-drive": 62293,
            "hand-holding-user": 62294,
            "hand-holding-dollar": 62295,
            "hand-holding-dollar-circle": 62296,
            "grid-web-7": 62297,
            "grid-web-6": 62298,
            "grid-web-5": 62299,
            "grid-web-4": 62300,
            "grid-web-3": 62301,
            "grid-web-2": 62302,
            "grid-web-1": 62303,
            "grid-square": 62304,
            "grid-square-plus": 62305,
            "grid-square-circle": 62306,
            "grid-dividers": 62307,
            "grid-circle": 62308,
            "grid-2": 62309,
            "grid-1": 62310,
            "graduation-cap": 62311,
            "globe": 62312,
            "globe-stand": 62313,
            "globe-earth": 62314,
            "glasses": 62315,
            "gift": 62316,
            "game-controller": 62317,
            "forward": 62318,
            "food-tray": 62319,
            "folder": 62320,
            "folder-user": 62321,
            "folder-upload": 62322,
            "folder-times": 62323,
            "folder-star": 62324,
            "folder-shield": 62325,
            "folder-settings": 62326,
            "folder-search": 62327,
            "folder-plus": 62328,
            "folder-open": 62329,
            "folder-music": 62330,
            "folder-minus": 62331,
            "folder-lock": 62332,
            "folder-import": 62333,
            "folder-heart": 62334,
            "folder-export": 62335,
            "folder-edit": 62336,
            "folder-download": 62337,
            "folder-connection": 62338,
            "folder-code": 62339,
            "folder-clock": 62340,
            "folder-check": 62341,
            "folder-ban": 62342,
            "folder-alt": 62343,
            "floppy-disk": 62344,
            "flask": 62345,
            "flask-round": 62346,
            "flashlight": 62347,
            "flag": 62348,
            "flag-triangle": 62349,
            "fire": 62350,
            "fingerprint": 62351,
            "fingerprint-viewfinder": 62352,
            "filter": 62353,
            "filter-times": 62354,
            "filter-plus": 62355,
            "filter-minus": 62356,
            "filter-check": 62357,
            "film": 62358,
            "file": 62359,
            "file-user": 62360,
            "file-upload": 62361,
            "file-times": 62362,
            "file-text": 62363,
            "file-text-times": 62364,
            "file-text-star": 62365,
            "file-text-shield": 62366,
            "file-text-search": 62367,
            "file-text-plus": 62368,
            "file-text-minus": 62369,
            "file-text-lock": 62370,
            "file-text-heart": 62371,
            "file-text-edit": 62372,
            "file-text-check": 62373,
            "file-text-ban": 62374,
            "file-star": 62375,
            "file-shield": 62376,
            "file-settings": 62377,
            "file-search": 62378,
            "file-plus": 62379,
            "file-music": 62380,
            "file-minus": 62381,
            "file-lock": 62382,
            "file-list": 62383,
            "file-list-times": 62384,
            "file-list-star": 62385,
            "file-list-shield": 62386,
            "file-list-search": 62387,
            "file-list-plus": 62388,
            "file-list-minus": 62389,
            "file-list-lock": 62390,
            "file-list-heart": 62391,
            "file-list-edit": 62392,
            "file-list-check": 62393,
            "file-list-ban": 62394,
            "file-import": 62395,
            "file-import-alt": 62396,
            "file-heart": 62397,
            "file-export": 62398,
            "file-export-alt": 62399,
            "file-edit": 62400,
            "file-download": 62401,
            "file-copy": 62402,
            "file-code": 62403,
            "file-clock": 62404,
            "file-check": 62405,
            "file-ban": 62406,
            "fast-forward": 62407,
            "fast-backward": 62408,
            "eye": 62409,
            "eye-slash": 62410,
            "eye-closed": 62411,
            "expand": 62412,
            "exclamation-square": 62413,
            "exclamation-circle": 62414,
            "exchange-vertical": 62415,
            "exchange-vertical-square": 62416,
            "exchange-vertical-circle": 62417,
            "exchange-horizontal": 62418,
            "exchange-horizontal-square": 62419,
            "exchange-horizontal-circle": 62420,
            "euro": 62421,
            "euro-square": 62422,
            "euro-circle": 62423,
            "ethereum": 62424,
            "ethereum-square": 62425,
            "ethereum-circle": 62426,
            "envelopes": 62427,
            "envelope": 62428,
            "envelope-times": 62429,
            "envelope-star": 62430,
            "envelope-shield": 62431,
            "envelope-settings": 62432,
            "envelope-search": 62433,
            "envelope-plus": 62434,
            "envelope-open": 62435,
            "envelope-notification": 62436,
            "envelope-minus": 62437,
            "envelope-lock": 62438,
            "envelope-heart": 62439,
            "envelope-eye": 62440,
            "envelope-edit": 62441,
            "envelope-clock": 62442,
            "envelope-check": 62443,
            "envelope-ban": 62444,
            "eject": 62445,
            "edit": 62446,
            "droplet": 62447,
            "droplet-slash": 62448,
            "drag-vertical": 62449,
            "drag-lines-vertical": 62450,
            "drag-lines-horizontal": 62451,
            "drag-horizontal": 62452,
            "download": 62453,
            "download-alt": 62454,
            "door-open": 62455,
            "door-closed": 62456,
            "dollar": 62457,
            "dollar-square": 62458,
            "dollar-send-circle": 62459,
            "dollar-receive-square": 62460,
            "dollar-receive-square-1": 62461,
            "dollar-receive-circle": 62462,
            "dollar-circle": 62463,
            "document": 62464,
            "document-list": 62465,
            "document-list-check": 62466,
            "dna": 62467,
            "dislike": 62468,
            "dislike-tag": 62469,
            "dislike-square": 62470,
            "dislike-circle": 62471,
            "disc": 62472,
            "diamond": 62473,
            "diamond-exclamation": 62474,
            "desktop": 62475,
            "desktop-mobile": 62476,
            "desktop-code": 62477,
            "delivery-cart": 62478,
            "delivery-cart-arrow-up": 62479,
            "delivery-cart-arrow-down": 62480,
            "delete-right": 62481,
            "delete-left": 62482,
            "database": 62483,
            "cursor": 62484,
            "cursor-click": 62485,
            "crown": 62486,
            "crown-alt": 62487,
            "credit-card": 62488,
            "credit-card-times": 62489,
            "credit-card-slash": 62490,
            "credit-card-plus": 62491,
            "credit-card-minus": 62492,
            "credit-card-edit": 62493,
            "credit-card-convert": 62494,
            "credit-card-check": 62495,
            "credit-card-change": 62496,
            "credit-card-ban": 62497,
            "cpu": 62498,
            "coupon": 62499,
            "coupon-star": 62500,
            "coupon-percent": 62501,
            "coupon-heart": 62502,
            "copyright-square": 62503,
            "copyright-circle": 62504,
            "copy": 62505,
            "copy-plus": 62506,
            "copy-check": 62507,
            "copy-alt": 62508,
            "contrast": 62509,
            "compress": 62510,
            "compass": 62511,
            "compass-needle": 62512,
            "comments": 62513,
            "comments-text": 62514,
            "comments-dots": 62515,
            "comment": 62516,
            "comment-times": 62517,
            "comment-times-alt": 62518,
            "comment-text": 62519,
            "comment-text-times": 62520,
            "comment-text-plus": 62521,
            "comment-text-notification": 62522,
            "comment-text-minus": 62523,
            "comment-text-check": 62524,
            "comment-star": 62525,
            "comment-shield": 62526,
            "comment-settings": 62527,
            "comment-search": 62528,
            "comment-question": 62529,
            "comment-plus": 62530,
            "comment-plus-alt": 62531,
            "comment-notification": 62532,
            "comment-minus": 62533,
            "comment-minus-alt": 62534,
            "comment-lock": 62535,
            "comment-info": 62536,
            "comment-heart": 62537,
            "comment-exclamation": 62538,
            "comment-edit": 62539,
            "comment-dots": 62540,
            "comment-dots-times": 62541,
            "comment-dots-plus": 62542,
            "comment-dots-notification": 62543,
            "comment-dots-minus": 62544,
            "comment-dots-check": 62545,
            "comment-code": 62546,
            "comment-clock": 62547,
            "comment-check": 62548,
            "comment-check-alt": 62549,
            "comment-activity": 62550,
            "coins": 62551,
            "coin": 62552,
            "coin-convert": 62553,
            "coin-card-transfer": 62554,
            "code": 62555,
            "code-square": 62556,
            "code-circle": 62557,
            "cloud": 62558,
            "cloud-upload": 62559,
            "cloud-times": 62560,
            "cloud-slash": 62561,
            "cloud-shield": 62562,
            "cloud-share": 62563,
            "cloud-plus": 62564,
            "cloud-minus": 62565,
            "cloud-lock": 62566,
            "cloud-download": 62567,
            "cloud-connection": 62568,
            "cloud-check": 62569,
            "closed-captioning": 62570,
            "clock": 62571,
            "clock-square": 62572,
            "clock-square-alt": 62573,
            "clock-alt": 62574,
            "clipboard": 62575,
            "clipboard-times": 62576,
            "clipboard-text": 62577,
            "clipboard-star": 62578,
            "clipboard-search": 62579,
            "clipboard-plus": 62580,
            "clipboard-minus": 62581,
            "clipboard-list": 62582,
            "clipboard-list-check": 62583,
            "clipboard-heart": 62584,
            "clipboard-edit": 62585,
            "clipboard-check": 62586,
            "chromecast": 62587,
            "checkbox-square-fill": 62588,
            "check": 62589,
            "check-square": 62590,
            "check-double": 62591,
            "check-circle": 62592,
            "chats": 62593,
            "chats-text": 62594,
            "chats-dots": 62595,
            "chat": 62596,
            "chat-times": 62597,
            "chat-times-alt": 62598,
            "chat-text": 62599,
            "chat-text-times": 62600,
            "chat-text-plus": 62601,
            "chat-text-notification": 62602,
            "chat-text-minus": 62603,
            "chat-text-check": 62604,
            "chat-star": 62605,
            "chat-shield": 62606,
            "chat-settings": 62607,
            "chat-search": 62608,
            "chat-question": 62609,
            "chat-plus": 62610,
            "chat-plus-alt": 62611,
            "chat-notification": 62612,
            "chat-minus": 62613,
            "chat-minus-alt": 62614,
            "chat-lock": 62615,
            "chat-info": 62616,
            "chat-heart": 62617,
            "chat-exclamation": 62618,
            "chat-edit": 62619,
            "chat-dots": 62620,
            "chat-dots-times": 62621,
            "chat-dots-plus": 62622,
            "chat-dots-notification": 62623,
            "chat-dots-minus": 62624,
            "chat-dots-check": 62625,
            "chat-code": 62626,
            "chat-clock": 62627,
            "chat-check": 62628,
            "chat-check-alt": 62629,
            "chat-activity": 62630,
            "chart-trend-up": 62631,
            "chart-trend-down": 62632,
            "chart-pyramid": 62633,
            "chart-pie": 62634,
            "chart-line": 62635,
            "chart-line-down": 62636,
            "chart-line-dots": 62637,
            "chart-line-1": 62638,
            "chart-bar": 62639,
            "chart-bar-vertical": 62640,
            "chart-bar-square": 62641,
            "chart-bar-horizontal": 62642,
            "chart-bar-circle": 62643,
            "chart-bar-alt": 62644,
            "certificate": 62645,
            "castle": 62646,
            "caret-up": 62647,
            "caret-up-square": 62648,
            "caret-up-circle": 62649,
            "caret-right": 62650,
            "caret-right-square": 62651,
            "caret-right-circle": 62652,
            "caret-left": 62653,
            "caret-left-square": 62654,
            "caret-left-circle": 62655,
            "caret-down": 62656,
            "caret-down-square": 62657,
            "caret-down-circle": 62658,
            "camera": 62659,
            "camera-square": 62660,
            "camera-slash": 62661,
            "camera-rotate": 62662,
            "camera-circle": 62663,
            "calendar": 62664,
            "calendar-times": 62665,
            "calendar-times-alt": 62666,
            "calendar-star": 62667,
            "calendar-search": 62668,
            "calendar-plus": 62669,
            "calendar-plus-alt": 62670,
            "calendar-minus": 62671,
            "calendar-minus-alt": 62672,
            "calendar-lock": 62673,
            "calendar-heart": 62674,
            "calendar-empty": 62675,
            "calendar-empty-alt": 62676,
            "calendar-edit": 62677,
            "calendar-clock": 62678,
            "calendar-check": 62679,
            "calendar-check-alt": 62680,
            "calculator": 62681,
            "calculator-simple": 62682,
            "cake": 62683,
            "cabinet-filing": 62684,
            "bus": 62685,
            "buildings": 62686,
            "buildings-alt": 62687,
            "building": 62688,
            "building-tree": 62689,
            "building-coins": 62690,
            "bug": 62691,
            "bug-slash": 62692,
            "brush": 62693,
            "brush-alt": 62694,
            "briefcase": 62695,
            "briefcase-times": 62696,
            "briefcase-plus": 62697,
            "briefcase-money": 62698,
            "briefcase-minus": 62699,
            "briefcase-check": 62700,
            "brain": 62701,
            "boxes": 62702,
            "box": 62703,
            "box-times": 62704,
            "box-search": 62705,
            "box-plus": 62706,
            "box-minus": 62707,
            "box-check": 62708,
            "books": 62709,
            "bookmarks": 62710,
            "bookmarks-user": 62711,
            "bookmarks-times": 62712,
            "bookmarks-star": 62713,
            "bookmarks-settings": 62714,
            "bookmarks-plus": 62715,
            "bookmarks-minus": 62716,
            "bookmarks-heart": 62717,
            "bookmarks-check": 62718,
            "bookmark": 62719,
            "bookmark-user": 62720,
            "bookmark-times": 62721,
            "bookmark-star": 62722,
            "bookmark-settings": 62723,
            "bookmark-plus": 62724,
            "bookmark-minus": 62725,
            "bookmark-heart": 62726,
            "bookmark-check": 62727,
            "book": 62728,
            "book-text": 62729,
            "book-open": 62730,
            "book-open-text": 62731,
            "book-open-reader": 62732,
            "book-open-bookmark": 62733,
            "book-empty": 62734,
            "book-bookmark": 62735,
            "book-alt": 62736,
            "bone": 62737,
            "bone-break": 62738,
            "bolt": 62739,
            "bolt-square": 62740,
            "bolt-square-alt": 62741,
            "bolt-slash": 62742,
            "bolt-slash-alt": 62743,
            "bolt-circle": 62744,
            "bolt-circle-alt": 62745,
            "bolt-alt": 62746,
            "bluetooth": 62747,
            "bitcoin": 62748,
            "bitcoin-square": 62749,
            "bitcoin-circle": 62750,
            "bezier": 62751,
            "bell": 62752,
            "bell-times": 62753,
            "bell-slash": 62754,
            "bell-plus": 62755,
            "bell-on": 62756,
            "bell-notification": 62757,
            "bell-minus": 62758,
            "bell-exclamation": 62759,
            "bed": 62760,
            "battery-half": 62761,
            "battery-full": 62762,
            "battery-empty": 62763,
            "battery-bolt": 62764,
            "bank": 62765,
            "bandage": 62766,
            "ban": 62767,
            "badge": 62768,
            "badge-like": 62769,
            "badge-dollar": 62770,
            "badge-discount": 62771,
            "badge-discount-alt": 62772,
            "badge-check": 62773,
            "backward": 62774,
            "backpack": 62775,
            "award": 62776,
            "award-star": 62777,
            "award-check": 62778,
            "atom": 62779,
            "at": 62780,
            "arrows-up-down": 62781,
            "arrows-repeat": 62782,
            "arrows-repeat-square": 62783,
            "arrows-repeat-circle": 62784,
            "arrows-move": 62785,
            "arrows-left-right": 62786,
            "arrows-expand": 62787,
            "arrows-compress": 62788,
            "arrow-up": 62789,
            "arrow-up-to-line": 62790,
            "arrow-up-square": 62791,
            "arrow-up-small": 62792,
            "arrow-up-right": 62793,
            "arrow-up-right-square": 62794,
            "arrow-up-right-small": 62795,
            "arrow-up-right-circle": 62796,
            "arrow-up-left": 62797,
            "arrow-up-left-square": 62798,
            "arrow-up-left-small": 62799,
            "arrow-up-left-circle": 62800,
            "arrow-up-from-line": 62801,
            "arrow-up-circle": 62802,
            "arrow-turn-up-right": 62803,
            "arrow-turn-up-left": 62804,
            "arrow-turn-right-up": 62805,
            "arrow-turn-right-down": 62806,
            "arrow-turn-left-up": 62807,
            "arrow-turn-left-down": 62808,
            "arrow-turn-down-right": 62809,
            "arrow-turn-down-left": 62810,
            "arrow-share": 62811,
            "arrow-right": 62812,
            "arrow-right-to-line": 62813,
            "arrow-right-square": 62814,
            "arrow-right-small": 62815,
            "arrow-right-from-line": 62816,
            "arrow-right-circle": 62817,
            "arrow-reply": 62818,
            "arrow-left": 62819,
            "arrow-left-to-line": 62820,
            "arrow-left-square": 62821,
            "arrow-left-small": 62822,
            "arrow-left-from-line": 62823,
            "arrow-left-circle": 62824,
            "arrow-left-arrow-right": 62825,
            "arrow-left-arrow-right-square": 62826,
            "arrow-left-arrow-right-circle": 62827,
            "arrow-import": 62828,
            "arrow-forward": 62829,
            "arrow-forward-square": 62830,
            "arrow-forward-square-alt": 62831,
            "arrow-forward-circle": 62832,
            "arrow-forward-circle-alt": 62833,
            "arrow-forward-alt": 62834,
            "arrow-export": 62835,
            "arrow-down": 62836,
            "arrow-down-to-line": 62837,
            "arrow-down-square": 62838,
            "arrow-down-small": 62839,
            "arrow-down-right": 62840,
            "arrow-down-right-square": 62841,
            "arrow-down-right-small": 62842,
            "arrow-down-right-circle": 62843,
            "arrow-down-left": 62844,
            "arrow-down-left-square": 62845,
            "arrow-down-left-small": 62846,
            "arrow-down-left-circle": 62847,
            "arrow-down-from-line": 62848,
            "arrow-down-circle": 62849,
            "arrow-down-arrow-up": 62850,
            "arrow-down-arrow-up-square": 62851,
            "arrow-down-arrow-up-circle": 62852,
            "arrow-back": 62853,
            "arrow-back-square": 62854,
            "arrow-back-square-alt": 62855,
            "arrow-back-circle": 62856,
            "arrow-back-circle-alt": 62857,
            "arrow-back-alt": 62858,
            "archway": 62859,
            "archive": 62860,
            "angles-up": 62861,
            "angles-up-small": 62862,
            "angles-right": 62863,
            "angles-right-small": 62864,
            "angles-left": 62865,
            "angles-left-small": 62866,
            "angles-left-right": 62867,
            "angles-down": 62868,
            "angles-down-up": 62869,
            "angles-down-small": 62870,
            "angle-up": 62871,
            "angle-up-square": 62872,
            "angle-up-small": 62873,
            "angle-up-circle": 62874,
            "angle-right": 62875,
            "angle-right-square": 62876,
            "angle-right-small": 62877,
            "angle-right-circle": 62878,
            "angle-left": 62879,
            "angle-left-square": 62880,
            "angle-left-small": 62881,
            "angle-left-circle": 62882,
            "angle-down": 62883,
            "angle-down-square": 62884,
            "angle-down-small": 62885,
            "angle-down-circle": 62886,
            "alarm-times": 62887,
            "alarm-times-alt": 62888,
            "alarm-plus": 62889,
            "alarm-plus-alt": 62890,
            "alarm-minus": 62891,
            "alarm-minus-alt": 62892,
            "alarm-edit": 62893,
            "alarm-clock": 62894,
            "alarm-clock-empty": 62895,
            "alarm-clock-alt": 62896,
            "alarm-check": 62897,
            "alarm-check-alt": 62898,
            "airplay": 62899,
            "airplay-alt": 62900,
            "address-book": 62901,
            "activity-star-square": 62902,
            "activity-star-circle": 62903,
            "activity-square": 62904,
            "activity-notification-square": 62905,
            "activity-notification-circle": 62906,
            "activity-heart-square": 62907,
            "activity-heart-circle": 62908,
            "activity-circle": 62909
        },
        "light": {
            "wifi": 61697,
            "wifi-slash": 61698,
            "wave-pulse": 61699,
            "watch-square": 61700,
            "watch-circle": 61701,
            "warehouse": 61702,
            "wallet": 61703,
            "volume": 61704,
            "volume-times": 61705,
            "volume-slash": 61706,
            "volume-plus": 61707,
            "volume-minus": 61708,
            "volume-low": 61709,
            "volume-high": 61710,
            "volume-high-slash": 61711,
            "voicemail": 61712,
            "virus-covid": 61713,
            "virus-covid-slash": 61714,
            "video": 61715,
            "video-square": 61716,
            "video-slash": 61717,
            "video-plus": 61718,
            "video-play": 61719,
            "video-outgoing": 61720,
            "video-incoming": 61721,
            "video-eye": 61722,
            "video-circle": 61723,
            "vector": 61724,
            "users": 61725,
            "users-slash": 61726,
            "users-group": 61727,
            "users-group-slash": 61728,
            "users-group-alt": 61729,
            "users-alt": 61730,
            "user": 61731,
            "user-viewfinder": 61732,
            "user-times": 61733,
            "user-times-bottom": 61734,
            "user-times-alt": 61735,
            "user-tag": 61736,
            "user-star": 61737,
            "user-square": 61738,
            "user-slash": 61739,
            "user-shield": 61740,
            "user-settings": 61741,
            "user-search": 61742,
            "user-plus": 61743,
            "user-plus-bottom": 61744,
            "user-plus-alt": 61745,
            "user-minus": 61746,
            "user-minus-bottom": 61747,
            "user-minus-alt": 61748,
            "user-lock": 61749,
            "user-heart": 61750,
            "user-eye": 61751,
            "user-edit": 61752,
            "user-dollar": 61753,
            "user-code": 61754,
            "user-clock": 61755,
            "user-circle": 61756,
            "user-check": 61757,
            "user-check-bottom": 61758,
            "user-check-alt": 61759,
            "user-change": 61760,
            "user-ban": 61761,
            "user-alt": 61762,
            "usb-drive": 61763,
            "upload": 61764,
            "upload-alt": 61765,
            "unlock": 61766,
            "university": 61767,
            "tv": 61768,
            "tv-retro": 61769,
            "tv-play": 61770,
            "truck": 61771,
            "trophy": 61772,
            "trophy-star": 61773,
            "triangle": 61774,
            "triangle-exclamation": 61775,
            "trend-up": 61776,
            "trend-up-square": 61777,
            "trend-up-circle": 61778,
            "trend-down": 61779,
            "trend-down-square": 61780,
            "trend-down-circle": 61781,
            "tree": 61782,
            "trash": 61783,
            "trash-undo": 61784,
            "trash-times": 61785,
            "trash-slash": 61786,
            "trash-redo": 61787,
            "trash-plus": 61788,
            "trash-minus": 61789,
            "trash-check": 61790,
            "traffic-cone": 61791,
            "tooth": 61792,
            "tool": 61793,
            "toggle-on": 61794,
            "toggle-on-rectangle": 61795,
            "toggle-on-alt": 61796,
            "toggle-off": 61797,
            "toggle-off-rectangle": 61798,
            "toggle-off-alt": 61799,
            "times": 61800,
            "times-square": 61801,
            "times-circle": 61802,
            "time-past": 61803,
            "time-forward": 61804,
            "thumbtack": 61805,
            "thumbtack-vertical": 61806,
            "thermometer": 61807,
            "test-tube": 61808,
            "test-tube-alt": 61809,
            "telescope": 61810,
            "taxi": 61811,
            "target": 61812,
            "tags": 61813,
            "tag": 61814,
            "tablet": 61815,
            "syringe": 61816,
            "sun": 61817,
            "story": 61818,
            "store": 61819,
            "stopwatch": 61820,
            "stopwatch-times": 61821,
            "stopwatch-times-alt": 61822,
            "stopwatch-plus": 61823,
            "stopwatch-plus-alt": 61824,
            "stopwatch-minus": 61825,
            "stopwatch-minus-alt": 61826,
            "stopwatch-empty": 61827,
            "stopwatch-edit": 61828,
            "stopwatch-check": 61829,
            "stopwatch-check-alt": 61830,
            "stopwatch-alt": 61831,
            "stop": 61832,
            "stop-circle": 61833,
            "sticky-note-text-square": 61834,
            "sticky-note-text-circle": 61835,
            "sticky-note-square": 61836,
            "sticky-note-circle": 61837,
            "stethoscope": 61838,
            "step-forward": 61839,
            "step-backward": 61840,
            "star": 61841,
            "star-tag": 61842,
            "star-square": 61843,
            "star-slash": 61844,
            "star-shooting": 61845,
            "star-shooting-horizontal": 61846,
            "star-magic": 61847,
            "star-half": 61848,
            "star-circle": 61849,
            "speedometer": 61850,
            "speaker": 61851,
            "sparkle": 61852,
            "sort": 61853,
            "sort-vertical": 61854,
            "sort-horizontal": 61855,
            "sort-descending": 61856,
            "sort-descending-square": 61857,
            "sort-descending-circle": 61858,
            "sort-ascending": 61859,
            "sort-ascending-square": 61860,
            "sort-ascending-circle": 61861,
            "sofa": 61862,
            "sliders-vertical": 61863,
            "sliders-vertical-alt": 61864,
            "sliders-horizontal": 61865,
            "sliders-horizontal-alt": 61866,
            "sim-card": 61867,
            "sim-card-2": 61868,
            "sim-card-1": 61869,
            "signs-direction": 61870,
            "signal-stream": 61871,
            "sign-direction-right": 61872,
            "sign-direction-left": 61873,
            "shuffle": 61874,
            "shopping-cart": 61875,
            "shopping-cart-times": 61876,
            "shopping-cart-star": 61877,
            "shopping-cart-plus": 61878,
            "shopping-cart-minus": 61879,
            "shopping-cart-heart": 61880,
            "shopping-cart-check": 61881,
            "shopping-cart-arrow-top": 61882,
            "shopping-cart-arrow-down": 61883,
            "shopping-basket": 61884,
            "shopping-basket-times": 61885,
            "shopping-basket-star": 61886,
            "shopping-basket-plus": 61887,
            "shopping-basket-minus": 61888,
            "shopping-basket-heart": 61889,
            "shopping-basket-check": 61890,
            "shopping-basket-arrow-up": 61891,
            "shopping-basket-arrow-down": 61892,
            "shopping-bag": 61893,
            "shopping-bag-alt": 61894,
            "shield": 61895,
            "shield-user": 61896,
            "shield-times": 61897,
            "shield-star": 61898,
            "shield-slash": 61899,
            "shield-search": 61900,
            "shield-question": 61901,
            "shield-plus": 61902,
            "shield-play": 61903,
            "shield-minus": 61904,
            "shield-lock": 61905,
            "shield-heart": 61906,
            "shield-exclamation": 61907,
            "shield-check": 61908,
            "shield-bolt": 61909,
            "share": 61910,
            "settings": 61911,
            "server": 61912,
            "send": 61913,
            "send-right": 61914,
            "search": 61915,
            "search-text": 61916,
            "search-plus": 61917,
            "search-minus": 61918,
            "sd-card": 61919,
            "scissors": 61920,
            "school": 61921,
            "scanner": 61922,
            "scan": 61923,
            "scan-qr": 61924,
            "scan-circle": 61925,
            "sack-dollar": 61926,
            "route": 61927,
            "rotate": 61928,
            "rotate-square": 61929,
            "rotate-right": 61930,
            "rotate-right-square": 61931,
            "rotate-right-circle": 61932,
            "rotate-left": 61933,
            "rotate-left-square": 61934,
            "rotate-left-circle": 61935,
            "rotate-circle": 61936,
            "rocket": 61937,
            "rocket-launch": 61938,
            "road": 61939,
            "restaurant": 61940,
            "repeat": 61941,
            "registered-square": 61942,
            "registered-circle": 61943,
            "receipt": 61944,
            "receipt-text": 61945,
            "receipt-text-alt": 61946,
            "receipt-star": 61947,
            "receipt-star-alt": 61948,
            "receipt-percent": 61949,
            "receipt-percent-alt": 61950,
            "receipt-list": 61951,
            "receipt-list-alt": 61952,
            "receipt-heart": 61953,
            "receipt-heart-alt": 61954,
            "receipt-alt": 61955,
            "ranking": 61956,
            "radio": 61957,
            "radio-button-fill": 61958,
            "radiation": 61959,
            "radiation-circle": 61960,
            "radar": 61961,
            "question-square": 61962,
            "question-circle": 61963,
            "puzzle": 61964,
            "print": 61965,
            "print-slash": 61966,
            "presentation": 61967,
            "presentation-user": 61968,
            "presentation-trend-up": 61969,
            "presentation-trend-down": 61970,
            "presentation-text": 61971,
            "presentation-poll": 61972,
            "presentation-play": 61973,
            "presentation-pen": 61974,
            "presentation-lightbulb": 61975,
            "presentation-dollar": 61976,
            "presentation-chart-pie": 61977,
            "presentation-chart-line": 61978,
            "power-off": 61979,
            "power-off-square": 61980,
            "power-off-circle": 61981,
            "poll-vertical-square": 61982,
            "poll-vertical-circle": 61983,
            "poll-horizontal-square": 61984,
            "poll-horizontal-circle": 61985,
            "plus": 61986,
            "plus-square": 61987,
            "plus-circle": 61988,
            "plug": 61989,
            "playlist": 61990,
            "play": 61991,
            "play-square": 61992,
            "play-pause": 61993,
            "play-circle": 61994,
            "pills": 61995,
            "phone": 61996,
            "phone-times": 61997,
            "phone-slash": 61998,
            "phone-plus": 61999,
            "phone-outgoing": 62e3,
            "phone-office": 62001,
            "phone-missed": 62002,
            "phone-incoming": 62003,
            "phone-hangup": 62004,
            "phone-flip": 62005,
            "phone-call": 62006,
            "phone-2": 62007,
            "phone-1": 62008,
            "percent": 62009,
            "percent-tag": 62010,
            "percent-square": 62011,
            "percent-circle": 62012,
            "pen": 62013,
            "pen-tool": 62014,
            "pen-line": 62015,
            "pause": 62016,
            "pause-circle": 62017,
            "parking-square": 62018,
            "parking-circle": 62019,
            "papers": 62020,
            "papers-text": 62021,
            "paperclip": 62022,
            "palette": 62023,
            "package": 62024,
            "package-star": 62025,
            "package-heart": 62026,
            "package-dollar": 62027,
            "package-check": 62028,
            "octagon": 62029,
            "octagon-times": 62030,
            "octagon-plus": 62031,
            "octagon-minus": 62032,
            "octagon-exclamation": 62033,
            "octagon-check": 62034,
            "nut": 62035,
            "notebook": 62036,
            "note": 62037,
            "note-text": 62038,
            "note-text-square": 62039,
            "note-list": 62040,
            "note-list-square": 62041,
            "note-list-check": 62042,
            "note-list-check-square": 62043,
            "newspaper": 62044,
            "music": 62045,
            "music-note": 62046,
            "music-list": 62047,
            "mug": 62048,
            "mug-hot": 62049,
            "mouse": 62050,
            "mosque": 62051,
            "mortar-pestle": 62052,
            "more-vertical": 62053,
            "more-vertical-square": 62054,
            "more-vertical-circle": 62055,
            "more-horizontal": 62056,
            "more-horizontal-square": 62057,
            "more-horizontal-circle": 62058,
            "moon": 62059,
            "monitor-waveform": 62060,
            "money-withdrawal": 62061,
            "money-convert": 62062,
            "money-bills": 62063,
            "money-bill": 62064,
            "money-bill-times": 62065,
            "money-bill-send": 62066,
            "money-bill-receive": 62067,
            "money-bill-plus": 62068,
            "money-bill-minus": 62069,
            "money-bill-convert": 62070,
            "money-bill-clock": 62071,
            "money-bill-check": 62072,
            "money-bill-ban": 62073,
            "mobile": 62074,
            "minus": 62075,
            "minus-square": 62076,
            "minus-circle": 62077,
            "minimize": 62078,
            "microscope": 62079,
            "microphone": 62080,
            "microphone-stand": 62081,
            "microphone-slash": 62082,
            "messages": 62083,
            "messages-text": 62084,
            "messages-dots": 62085,
            "message": 62086,
            "message-times": 62087,
            "message-times-alt": 62088,
            "message-text": 62089,
            "message-text-times": 62090,
            "message-text-plus": 62091,
            "message-text-notification": 62092,
            "message-text-minus": 62093,
            "message-text-check": 62094,
            "message-star": 62095,
            "message-shield": 62096,
            "message-settings": 62097,
            "message-search": 62098,
            "message-question": 62099,
            "message-plus": 62100,
            "message-plus-alt": 62101,
            "message-notification": 62102,
            "message-minus": 62103,
            "message-minus-alt": 62104,
            "message-lock": 62105,
            "message-info": 62106,
            "message-heart": 62107,
            "message-exclamation": 62108,
            "message-edit": 62109,
            "message-dots": 62110,
            "message-dots-times": 62111,
            "message-dots-plus": 62112,
            "message-dots-notification": 62113,
            "message-dots-minus": 62114,
            "message-dots-check": 62115,
            "message-code": 62116,
            "message-clock": 62117,
            "message-check": 62118,
            "message-check-alt": 62119,
            "message-activity": 62120,
            "menu": 62121,
            "menu-square": 62122,
            "menu-square-alt": 62123,
            "menu-right": 62124,
            "menu-right-square": 62125,
            "menu-right-square-alt": 62126,
            "menu-right-circle": 62127,
            "menu-right-circle-alt": 62128,
            "menu-right-alt": 62129,
            "menu-left": 62130,
            "menu-left-square": 62131,
            "menu-left-square-alt": 62132,
            "menu-left-circle": 62133,
            "menu-left-circle-alt": 62134,
            "menu-left-alt": 62135,
            "menu-duo": 62136,
            "menu-duo-square": 62137,
            "menu-duo-circle": 62138,
            "menu-circle": 62139,
            "menu-circle-alt": 62140,
            "menu-alt": 62141,
            "megaphone": 62142,
            "medal": 62143,
            "medal-star": 62144,
            "medal-check": 62145,
            "maximize": 62146,
            "mask-face": 62147,
            "map": 62148,
            "map-pin": 62149,
            "map-location": 62150,
            "magnet": 62151,
            "log-out": 62152,
            "log-in": 62153,
            "lock": 62154,
            "lock-viewfinder": 62155,
            "location-pin": 62156,
            "location-pin-times": 62157,
            "location-pin-star": 62158,
            "location-pin-slash": 62159,
            "location-pin-slash-alt": 62160,
            "location-pin-search": 62161,
            "location-pin-question": 62162,
            "location-pin-plus": 62163,
            "location-pin-minus": 62164,
            "location-pin-lock": 62165,
            "location-pin-heart": 62166,
            "location-pin-eye": 62167,
            "location-pin-exclamation": 62168,
            "location-pin-edit": 62169,
            "location-pin-check": 62170,
            "location-pin-alt": 62171,
            "location-crosshairs": 62172,
            "location-crosshairs-slash": 62173,
            "location-arrow": 62174,
            "location-arrow-square": 62175,
            "location-arrow-circle": 62176,
            "list": 62177,
            "link": 62178,
            "link-horizontal": 62179,
            "link-horizontal-alt": 62180,
            "link-broken": 62181,
            "link-broken-horizontal": 62182,
            "link-alt": 62183,
            "line-up-square": 62184,
            "line-up-circle": 62185,
            "line-down-square": 62186,
            "line-down-circle": 62187,
            "line-chart-dots": 62188,
            "line-chart-dots-square": 62189,
            "line-chart-dots-circle": 62190,
            "like": 62191,
            "like-tag": 62192,
            "like-square": 62193,
            "like-circle": 62194,
            "lightbulb": 62195,
            "light-emergency": 62196,
            "light-emergency-on": 62197,
            "life-ring": 62198,
            "leaf": 62199,
            "layout-web-9": 62200,
            "layout-web-8": 62201,
            "layout-web-7": 62202,
            "layout-web-6": 62203,
            "layout-web-5": 62204,
            "layout-web-4": 62205,
            "layout-web-3": 62206,
            "layout-web-2": 62207,
            "layout-web-12": 62208,
            "layout-web-11": 62209,
            "layout-web-10": 62210,
            "layout-web-1": 62211,
            "layer-group": 62212,
            "laptop": 62213,
            "laptop-code": 62214,
            "keypad": 62215,
            "keyhole-square": 62216,
            "keyhole-circle": 62217,
            "keyboard": 62218,
            "key": 62219,
            "key-square": 62220,
            "key-circle": 62221,
            "kaaba": 62222,
            "invoice": 62223,
            "info-square": 62224,
            "info-circle": 62225,
            "inbox": 62226,
            "inbox-upload": 62227,
            "inbox-empty": 62228,
            "inbox-download": 62229,
            "image": 62230,
            "image-upload": 62231,
            "image-times": 62232,
            "image-plus": 62233,
            "image-minus": 62234,
            "image-gallery": 62235,
            "image-gallery-plus": 62236,
            "image-download": 62237,
            "image-check": 62238,
            "id-card": 62239,
            "id-badge": 62240,
            "hourglass": 62241,
            "hospital": 62242,
            "hospital-h-sign-square": 62243,
            "hospital-h-sign-circle": 62244,
            "home": 62245,
            "home-wifi": 62246,
            "home-user": 62247,
            "home-trend-up": 62248,
            "home-trend-down": 62249,
            "home-star": 62250,
            "home-shield": 62251,
            "home-search": 62252,
            "home-roof": 62253,
            "home-roof-wifi": 62254,
            "home-roof-user": 62255,
            "home-roof-trend-up": 62256,
            "home-roof-trend-down": 62257,
            "home-roof-star": 62258,
            "home-roof-shield": 62259,
            "home-roof-search": 62260,
            "home-roof-lock": 62261,
            "home-roof-heart": 62262,
            "home-roof-dollar": 62263,
            "home-roof-activity": 62264,
            "home-lock": 62265,
            "home-heart": 62266,
            "home-dollar": 62267,
            "home-dash": 62268,
            "home-dash-wifi": 62269,
            "home-dash-user": 62270,
            "home-dash-trend-up": 62271,
            "home-dash-trend-down": 62272,
            "home-dash-star": 62273,
            "home-dash-shield": 62274,
            "home-dash-search": 62275,
            "home-dash-lock": 62276,
            "home-dash-heart": 62277,
            "home-dash-dollar": 62278,
            "home-dash-activity": 62279,
            "home-activity": 62280,
            "heart": 62281,
            "heart-times": 62282,
            "heart-tag": 62283,
            "heart-square": 62284,
            "heart-slash": 62285,
            "heart-pulse": 62286,
            "heart-plus": 62287,
            "heart-minus": 62288,
            "heart-circle": 62289,
            "heart-check": 62290,
            "headphones": 62291,
            "hashtag": 62292,
            "hard-drive": 62293,
            "hand-holding-user": 62294,
            "hand-holding-dollar": 62295,
            "hand-holding-dollar-circle": 62296,
            "grid-web-7": 62297,
            "grid-web-6": 62298,
            "grid-web-5": 62299,
            "grid-web-4": 62300,
            "grid-web-3": 62301,
            "grid-web-2": 62302,
            "grid-web-1": 62303,
            "grid-square": 62304,
            "grid-square-plus": 62305,
            "grid-square-circle": 62306,
            "grid-dividers": 62307,
            "grid-circle": 62308,
            "grid-2": 62309,
            "grid-1": 62310,
            "graduation-cap": 62311,
            "globe": 62312,
            "globe-stand": 62313,
            "globe-earth": 62314,
            "glasses": 62315,
            "gift": 62316,
            "game-controller": 62317,
            "forward": 62318,
            "food-tray": 62319,
            "folder": 62320,
            "folder-user": 62321,
            "folder-upload": 62322,
            "folder-times": 62323,
            "folder-star": 62324,
            "folder-shield": 62325,
            "folder-settings": 62326,
            "folder-search": 62327,
            "folder-plus": 62328,
            "folder-open": 62329,
            "folder-music": 62330,
            "folder-minus": 62331,
            "folder-lock": 62332,
            "folder-import": 62333,
            "folder-heart": 62334,
            "folder-export": 62335,
            "folder-edit": 62336,
            "folder-download": 62337,
            "folder-connection": 62338,
            "folder-code": 62339,
            "folder-clock": 62340,
            "folder-check": 62341,
            "folder-ban": 62342,
            "folder-alt": 62343,
            "floppy-disk": 62344,
            "flask": 62345,
            "flask-round": 62346,
            "flashlight": 62347,
            "flag": 62348,
            "flag-triangle": 62349,
            "fire": 62350,
            "fingerprint": 62351,
            "fingerprint-viewfinder": 62352,
            "filter": 62353,
            "filter-times": 62354,
            "filter-plus": 62355,
            "filter-minus": 62356,
            "filter-check": 62357,
            "film": 62358,
            "file": 62359,
            "file-user": 62360,
            "file-upload": 62361,
            "file-times": 62362,
            "file-text": 62363,
            "file-text-times": 62364,
            "file-text-star": 62365,
            "file-text-shield": 62366,
            "file-text-search": 62367,
            "file-text-plus": 62368,
            "file-text-minus": 62369,
            "file-text-lock": 62370,
            "file-text-heart": 62371,
            "file-text-edit": 62372,
            "file-text-check": 62373,
            "file-text-ban": 62374,
            "file-star": 62375,
            "file-shield": 62376,
            "file-settings": 62377,
            "file-search": 62378,
            "file-plus": 62379,
            "file-music": 62380,
            "file-minus": 62381,
            "file-lock": 62382,
            "file-list": 62383,
            "file-list-times": 62384,
            "file-list-star": 62385,
            "file-list-shield": 62386,
            "file-list-search": 62387,
            "file-list-plus": 62388,
            "file-list-minus": 62389,
            "file-list-lock": 62390,
            "file-list-heart": 62391,
            "file-list-edit": 62392,
            "file-list-check": 62393,
            "file-list-ban": 62394,
            "file-import": 62395,
            "file-import-alt": 62396,
            "file-heart": 62397,
            "file-export": 62398,
            "file-export-alt": 62399,
            "file-edit": 62400,
            "file-download": 62401,
            "file-copy": 62402,
            "file-code": 62403,
            "file-clock": 62404,
            "file-check": 62405,
            "file-ban": 62406,
            "fast-forward": 62407,
            "fast-backward": 62408,
            "eye": 62409,
            "eye-slash": 62410,
            "eye-closed": 62411,
            "expand": 62412,
            "exclamation-square": 62413,
            "exclamation-circle": 62414,
            "exchange-vertical": 62415,
            "exchange-vertical-square": 62416,
            "exchange-vertical-circle": 62417,
            "exchange-horizontal": 62418,
            "exchange-horizontal-square": 62419,
            "exchange-horizontal-circle": 62420,
            "euro": 62421,
            "euro-square": 62422,
            "euro-circle": 62423,
            "ethereum": 62424,
            "ethereum-square": 62425,
            "ethereum-circle": 62426,
            "envelopes": 62427,
            "envelope": 62428,
            "envelope-times": 62429,
            "envelope-star": 62430,
            "envelope-shield": 62431,
            "envelope-settings": 62432,
            "envelope-search": 62433,
            "envelope-plus": 62434,
            "envelope-open": 62435,
            "envelope-notification": 62436,
            "envelope-minus": 62437,
            "envelope-lock": 62438,
            "envelope-heart": 62439,
            "envelope-eye": 62440,
            "envelope-edit": 62441,
            "envelope-clock": 62442,
            "envelope-check": 62443,
            "envelope-ban": 62444,
            "eject": 62445,
            "edit": 62446,
            "droplet": 62447,
            "droplet-slash": 62448,
            "drag-vertical": 62449,
            "drag-lines-vertical": 62450,
            "drag-lines-horizontal": 62451,
            "drag-horizontal": 62452,
            "download": 62453,
            "download-alt": 62454,
            "door-open": 62455,
            "door-closed": 62456,
            "dollar": 62457,
            "dollar-square": 62458,
            "dollar-send-square": 62459,
            "dollar-send-circle": 62460,
            "dollar-receive-square": 62461,
            "dollar-receive-circle": 62462,
            "dollar-circle": 62463,
            "document": 62464,
            "document-list": 62465,
            "document-list-check": 62466,
            "dna": 62467,
            "dislike": 62468,
            "dislike-tag": 62469,
            "dislike-square": 62470,
            "dislike-circle": 62471,
            "disc": 62472,
            "diamond": 62473,
            "diamond-exclamation": 62474,
            "desktop": 62475,
            "desktop-mobile": 62476,
            "desktop-code": 62477,
            "delivery-cart": 62478,
            "delivery-cart-arrow-up": 62479,
            "delivery-cart-arrow-down": 62480,
            "delete-right": 62481,
            "delete-left": 62482,
            "database": 62483,
            "cursor": 62484,
            "cursor-click": 62485,
            "crown": 62486,
            "crown-alt": 62487,
            "credit-card": 62488,
            "credit-card-times": 62489,
            "credit-card-slash": 62490,
            "credit-card-plus": 62491,
            "credit-card-minus": 62492,
            "credit-card-edit": 62493,
            "credit-card-convert": 62494,
            "credit-card-check": 62495,
            "credit-card-change": 62496,
            "credit-card-ban": 62497,
            "cpu": 62498,
            "coupon": 62499,
            "coupon-star": 62500,
            "coupon-percent": 62501,
            "coupon-heart": 62502,
            "copy2right-square": 62503,
            "copy2right-circle": 62504,
            "copy": 62505,
            "copy-plus": 62506,
            "copy-check": 62507,
            "copy-alt": 62508,
            "contrast": 62509,
            "compress": 62510,
            "compass": 62511,
            "compass-needle": 62512,
            "comments": 62513,
            "comments-text": 62514,
            "comments-dots": 62515,
            "comment": 62516,
            "comment-times": 62517,
            "comment-times-alt": 62518,
            "comment-text": 62519,
            "comment-text-times": 62520,
            "comment-text-plus": 62521,
            "comment-text-notification": 62522,
            "comment-text-minus": 62523,
            "comment-text-check": 62524,
            "comment-star": 62525,
            "comment-shield": 62526,
            "comment-settings": 62527,
            "comment-search": 62528,
            "comment-question": 62529,
            "comment-plus": 62530,
            "comment-plus-alt": 62531,
            "comment-notification": 62532,
            "comment-minus": 62533,
            "comment-minus-alt": 62534,
            "comment-lock": 62535,
            "comment-info": 62536,
            "comment-heart": 62537,
            "comment-exclamation": 62538,
            "comment-edit": 62539,
            "comment-dots": 62540,
            "comment-dots-times": 62541,
            "comment-dots-plus": 62542,
            "comment-dots-notification": 62543,
            "comment-dots-minus": 62544,
            "comment-dots-check": 62545,
            "comment-code": 62546,
            "comment-clock": 62547,
            "comment-check": 62548,
            "comment-check-alt": 62549,
            "comment-activity": 62550,
            "coins": 62551,
            "coin": 62552,
            "coin-convert": 62553,
            "coin-card-transfer": 62554,
            "code": 62555,
            "code-square": 62556,
            "code-circle": 62557,
            "cloud": 62558,
            "cloud-upload": 62559,
            "cloud-times": 62560,
            "cloud-slash": 62561,
            "cloud-shield": 62562,
            "cloud-share": 62563,
            "cloud-plus": 62564,
            "cloud-minus": 62565,
            "cloud-lock": 62566,
            "cloud-download": 62567,
            "cloud-connection": 62568,
            "cloud-check": 62569,
            "closed-captioning": 62570,
            "clock": 62571,
            "clock-square": 62572,
            "clock-square-alt": 62573,
            "clock-alt": 62574,
            "clipboard": 62575,
            "clipboard-times": 62576,
            "clipboard-text": 62577,
            "clipboard-star": 62578,
            "clipboard-search": 62579,
            "clipboard-plus": 62580,
            "clipboard-minus": 62581,
            "clipboard-list": 62582,
            "clipboard-list-check": 62583,
            "clipboard-heart": 62584,
            "clipboard-edit": 62585,
            "clipboard-check": 62586,
            "chromecast": 62587,
            "checkbox-square-fill": 62588,
            "check": 62589,
            "check-square": 62590,
            "check-double": 62591,
            "check-circle": 62592,
            "chats": 62593,
            "chats-text": 62594,
            "chats-dots": 62595,
            "chat": 62596,
            "chat-times": 62597,
            "chat-times-alt": 62598,
            "chat-text": 62599,
            "chat-text-times": 62600,
            "chat-text-plus": 62601,
            "chat-text-notification": 62602,
            "chat-text-minus": 62603,
            "chat-text-check": 62604,
            "chat-star": 62605,
            "chat-shield": 62606,
            "chat-settings": 62607,
            "chat-search": 62608,
            "chat-question": 62609,
            "chat-plus": 62610,
            "chat-plus-alt": 62611,
            "chat-notification": 62612,
            "chat-minus": 62613,
            "chat-minus-alt": 62614,
            "chat-lock": 62615,
            "chat-info": 62616,
            "chat-heart": 62617,
            "chat-exclamation": 62618,
            "chat-edit": 62619,
            "chat-dots": 62620,
            "chat-dots-times": 62621,
            "chat-dots-plus": 62622,
            "chat-dots-notification": 62623,
            "chat-dots-minus": 62624,
            "chat-dots-check": 62625,
            "chat-code": 62626,
            "chat-clock": 62627,
            "chat-check": 62628,
            "chat-check-alt": 62629,
            "chat-activity": 62630,
            "chart-trend-up": 62631,
            "chart-trend-down": 62632,
            "chart-pyramid": 62633,
            "chart-pie": 62634,
            "chart-line": 62635,
            "chart-line-up": 62636,
            "chart-line-down": 62637,
            "chart-line-dots": 62638,
            "chart-bar": 62639,
            "chart-bar-vertical": 62640,
            "chart-bar-square": 62641,
            "chart-bar-horizontal": 62642,
            "chart-bar-circle": 62643,
            "chart-bar-alt": 62644,
            "certificate": 62645,
            "castle": 62646,
            "caret-up": 62647,
            "caret-up-square": 62648,
            "caret-up-circle": 62649,
            "caret-right": 62650,
            "caret-right-square": 62651,
            "caret-right-circle": 62652,
            "caret-left": 62653,
            "caret-left-square": 62654,
            "caret-left-circle": 62655,
            "caret-down": 62656,
            "caret-down-square": 62657,
            "caret-down-circle": 62658,
            "camera": 62659,
            "camera-square": 62660,
            "camera-slash": 62661,
            "camera-rotate": 62662,
            "camera-circle": 62663,
            "calendar": 62664,
            "calendar-times": 62665,
            "calendar-times-alt": 62666,
            "calendar-star": 62667,
            "calendar-search": 62668,
            "calendar-plus": 62669,
            "calendar-plus-alt": 62670,
            "calendar-minus": 62671,
            "calendar-minus-alt": 62672,
            "calendar-lock": 62673,
            "calendar-heart": 62674,
            "calendar-empty": 62675,
            "calendar-empty-alt": 62676,
            "calendar-edit": 62677,
            "calendar-clock": 62678,
            "calendar-check": 62679,
            "calendar-check-alt": 62680,
            "calculator": 62681,
            "calculator-simple": 62682,
            "cake": 62683,
            "cabinet-filing": 62684,
            "bus": 62685,
            "buildings": 62686,
            "buildings-alt": 62687,
            "building": 62688,
            "building-tree": 62689,
            "building-coins": 62690,
            "bug": 62691,
            "bug-slash": 62692,
            "brush": 62693,
            "brush-alt": 62694,
            "briefcase": 62695,
            "briefcase-times": 62696,
            "briefcase-plus": 62697,
            "briefcase-money": 62698,
            "briefcase-minus": 62699,
            "briefcase-check": 62700,
            "brain": 62701,
            "boxes": 62702,
            "box": 62703,
            "box-times": 62704,
            "box-search": 62705,
            "box-plus": 62706,
            "box-minus": 62707,
            "box-check": 62708,
            "books": 62709,
            "bookmarks": 62710,
            "bookmarks-user": 62711,
            "bookmarks-times": 62712,
            "bookmarks-star": 62713,
            "bookmarks-settings": 62714,
            "bookmarks-plus": 62715,
            "bookmarks-minus": 62716,
            "bookmarks-heart": 62717,
            "bookmarks-check": 62718,
            "bookmark": 62719,
            "bookmark-user": 62720,
            "bookmark-times": 62721,
            "bookmark-star": 62722,
            "bookmark-settings": 62723,
            "bookmark-plus": 62724,
            "bookmark-minus": 62725,
            "bookmark-heart": 62726,
            "bookmark-check": 62727,
            "book": 62728,
            "book-text": 62729,
            "book-open": 62730,
            "book-open-text": 62731,
            "book-open-reader": 62732,
            "book-open-bookmark": 62733,
            "book-empty": 62734,
            "book-bookmark": 62735,
            "book-alt": 62736,
            "bone": 62737,
            "bone-break": 62738,
            "bolt": 62739,
            "bolt-square": 62740,
            "bolt-square-alt": 62741,
            "bolt-slash": 62742,
            "bolt-slash-alt": 62743,
            "bolt-circle": 62744,
            "bolt-circle-alt": 62745,
            "bolt-alt": 62746,
            "bluetooth": 62747,
            "bitcoin": 62748,
            "bitcoin-square": 62749,
            "bitcoin-circle": 62750,
            "bezier": 62751,
            "bell": 62752,
            "bell-times": 62753,
            "bell-slash": 62754,
            "bell-plus": 62755,
            "bell-on": 62756,
            "bell-notification": 62757,
            "bell-minus": 62758,
            "bell-exclamation": 62759,
            "bed": 62760,
            "battery-half": 62761,
            "battery-full": 62762,
            "battery-empty": 62763,
            "battery-bolt": 62764,
            "bank": 62765,
            "bandage": 62766,
            "ban": 62767,
            "badge": 62768,
            "badge-like": 62769,
            "badge-dollar": 62770,
            "badge-discount": 62771,
            "badge-discount-alt": 62772,
            "badge-check": 62773,
            "backward": 62774,
            "backpack": 62775,
            "award": 62776,
            "award-star": 62777,
            "award-check": 62778,
            "atom": 62779,
            "at": 62780,
            "arrows-up-down": 62781,
            "arrows-repeat": 62782,
            "arrows-repeat-square": 62783,
            "arrows-repeat-circle": 62784,
            "arrows-move": 62785,
            "arrows-left-right": 62786,
            "arrows-expand": 62787,
            "arrows-compress": 62788,
            "arrow-up": 62789,
            "arrow-up-to-line": 62790,
            "arrow-up-square": 62791,
            "arrow-up-small": 62792,
            "arrow-up-right": 62793,
            "arrow-up-right-square": 62794,
            "arrow-up-right-small": 62795,
            "arrow-up-right-circle": 62796,
            "arrow-up-left": 62797,
            "arrow-up-left-square": 62798,
            "arrow-up-left-small": 62799,
            "arrow-up-left-circle": 62800,
            "arrow-up-from-line": 62801,
            "arrow-up-circle": 62802,
            "arrow-turn-up-right": 62803,
            "arrow-turn-up-left": 62804,
            "arrow-turn-right-up": 62805,
            "arrow-turn-right-down": 62806,
            "arrow-turn-left-up": 62807,
            "arrow-turn-left-down": 62808,
            "arrow-turn-down-right": 62809,
            "arrow-turn-down-left": 62810,
            "arrow-share": 62811,
            "arrow-right": 62812,
            "arrow-right-to-line": 62813,
            "arrow-right-square": 62814,
            "arrow-right-small": 62815,
            "arrow-right-from-line": 62816,
            "arrow-right-circle": 62817,
            "arrow-reply": 62818,
            "arrow-left": 62819,
            "arrow-left-to-line": 62820,
            "arrow-left-square": 62821,
            "arrow-left-small": 62822,
            "arrow-left-from-line": 62823,
            "arrow-left-circle": 62824,
            "arrow-left-arrow-right": 62825,
            "arrow-left-arrow-right-square": 62826,
            "arrow-left-arrow-right-circle": 62827,
            "arrow-import": 62828,
            "arrow-forward": 62829,
            "arrow-forward-square": 62830,
            "arrow-forward-square-alt": 62831,
            "arrow-forward-circle": 62832,
            "arrow-forward-circle-alt": 62833,
            "arrow-forward-alt": 62834,
            "arrow-export": 62835,
            "arrow-down": 62836,
            "arrow-down-to-line": 62837,
            "arrow-down-square": 62838,
            "arrow-down-small": 62839,
            "arrow-down-right": 62840,
            "arrow-down-right-square": 62841,
            "arrow-down-right-small": 62842,
            "arrow-down-right-circle": 62843,
            "arrow-down-left": 62844,
            "arrow-down-left-square": 62845,
            "arrow-down-left-small": 62846,
            "arrow-down-left-circle": 62847,
            "arrow-down-from-line": 62848,
            "arrow-down-circle": 62849,
            "arrow-down-arrow-up": 62850,
            "arrow-down-arrow-up-square": 62851,
            "arrow-down-arrow-up-circle": 62852,
            "arrow-back": 62853,
            "arrow-back-square": 62854,
            "arrow-back-square-alt": 62855,
            "arrow-back-circle": 62856,
            "arrow-back-circle-alt": 62857,
            "arrow-back-alt": 62858,
            "archway": 62859,
            "archive": 62860,
            "angles-up": 62861,
            "angles-up-small": 62862,
            "angles-right": 62863,
            "angles-right-small": 62864,
            "angles-left": 62865,
            "angles-left-small": 62866,
            "angles-left-right": 62867,
            "angles-down": 62868,
            "angles-down-up": 62869,
            "angles-down-small": 62870,
            "angle-up": 62871,
            "angle-up-square": 62872,
            "angle-up-small": 62873,
            "angle-up-circle": 62874,
            "angle-right": 62875,
            "angle-right-square": 62876,
            "angle-right-small": 62877,
            "angle-right-circle": 62878,
            "angle-left": 62879,
            "angle-left-square": 62880,
            "angle-left-small": 62881,
            "angle-left-circle": 62882,
            "angle-down": 62883,
            "angle-down-square": 62884,
            "angle-down-small": 62885,
            "angle-down-circle": 62886,
            "alarm-times": 62887,
            "alarm-times-alt": 62888,
            "alarm-plus": 62889,
            "alarm-plus-alt": 62890,
            "alarm-minus": 62891,
            "alarm-minus-alt": 62892,
            "alarm-edit": 62893,
            "alarm-clock": 62894,
            "alarm-clock-empty": 62895,
            "alarm-clock-alt": 62896,
            "alarm-check": 62897,
            "alarm-check-alt": 62898,
            "airplay": 62899,
            "airplay-alt": 62900,
            "address-book": 62901,
            "activity-star-square": 62902,
            "activity-star-circle": 62903,
            "activity-square": 62904,
            "activity-notification-square": 62905,
            "activity-notification-circle": 62906,
            "activity-heart-square": 62907,
            "activity-heart-circle": 62908,
            "activity-circle": 62909
        },
        "regular": {
            "wifi": 61697,
            "wifi-slash": 61698,
            "wave-pulse": 61699,
            "watch-square": 61700,
            "watch-circle": 61701,
            "warehouse": 61702,
            "wallet": 61703,
            "volume": 61704,
            "volume-times": 61705,
            "volume-slash": 61706,
            "volume-plus": 61707,
            "volume-minus": 61708,
            "volume-low": 61709,
            "volume-high": 61710,
            "volume-high-slash": 61711,
            "voicemail": 61712,
            "virus-covid": 61713,
            "virus-covid-slash": 61714,
            "video": 61715,
            "video-square": 61716,
            "video-slash": 61717,
            "video-plus": 61718,
            "video-play": 61719,
            "video-outgoing": 61720,
            "video-incoming": 61721,
            "video-eye": 61722,
            "video-circle": 61723,
            "vector": 61724,
            "users": 61725,
            "users-slash": 61726,
            "users-group": 61727,
            "users-group-slash": 61728,
            "users-group-alt": 61729,
            "users-alt": 61730,
            "user": 61731,
            "user-viewfinder": 61732,
            "user-times": 61733,
            "user-times-bottom": 61734,
            "user-times-alt": 61735,
            "user-tag": 61736,
            "user-star": 61737,
            "user-square": 61738,
            "user-slash": 61739,
            "user-shield": 61740,
            "user-settings": 61741,
            "user-search": 61742,
            "user-plus": 61743,
            "user-plus-bottom": 61744,
            "user-plus-alt": 61745,
            "user-minus": 61746,
            "user-minus-bottom": 61747,
            "user-minus-alt": 61748,
            "user-lock": 61749,
            "user-heart": 61750,
            "user-eye": 61751,
            "user-edit": 61752,
            "user-dollar": 61753,
            "user-code": 61754,
            "user-clock": 61755,
            "user-circle": 61756,
            "user-check": 61757,
            "user-check-bottom": 61758,
            "user-check-alt": 61759,
            "user-change": 61760,
            "user-ban": 61761,
            "user-alt": 61762,
            "usb-drive": 61763,
            "upload": 61764,
            "upload-alt": 61765,
            "unlock": 61766,
            "university": 61767,
            "tv": 61768,
            "tv-retro": 61769,
            "tv-play": 61770,
            "truck": 61771,
            "trophy": 61772,
            "trophy-star": 61773,
            "triangle": 61774,
            "triangle-exclamation": 61775,
            "trend-up": 61776,
            "trend-up-square": 61777,
            "trend-up-circle": 61778,
            "trend-down": 61779,
            "trend-down-square": 61780,
            "trend-down-circle": 61781,
            "tree": 61782,
            "trash": 61783,
            "trash-undo": 61784,
            "trash-times": 61785,
            "trash-slash": 61786,
            "trash-redo": 61787,
            "trash-plus": 61788,
            "trash-minus": 61789,
            "trash-check": 61790,
            "traffic-cone": 61791,
            "tooth": 61792,
            "tool": 61793,
            "toggle-on": 61794,
            "toggle-on-rectangle": 61795,
            "toggle-on-alt": 61796,
            "toggle-off": 61797,
            "toggle-off-rectangle": 61798,
            "toggle-off-alt": 61799,
            "times": 61800,
            "times-square": 61801,
            "times-circle": 61802,
            "time-past": 61803,
            "time-forward": 61804,
            "thumbtack": 61805,
            "thumbtack-vertical": 61806,
            "thermometer": 61807,
            "test-tube": 61808,
            "test-tube-alt": 61809,
            "telescope": 61810,
            "taxi": 61811,
            "target": 61812,
            "tags": 61813,
            "tag": 61814,
            "tablet": 61815,
            "syringe": 61816,
            "sun": 61817,
            "story": 61818,
            "store": 61819,
            "stopwatch": 61820,
            "stopwatch-times": 61821,
            "stopwatch-times-alt": 61822,
            "stopwatch-plus": 61823,
            "stopwatch-plus-alt": 61824,
            "stopwatch-minus": 61825,
            "stopwatch-minus-alt": 61826,
            "stopwatch-empty": 61827,
            "stopwatch-edit": 61828,
            "stopwatch-check": 61829,
            "stopwatch-check-alt": 61830,
            "stopwatch-alt": 61831,
            "stop": 61832,
            "stop-circle": 61833,
            "sticky-note-text-square": 61834,
            "sticky-note-text-circle": 61835,
            "sticky-note-square": 61836,
            "sticky-note-circle": 61837,
            "stethoscope": 61838,
            "step-forward": 61839,
            "step-backward": 61840,
            "star": 61841,
            "star-tag": 61842,
            "star-square": 61843,
            "star-slash": 61844,
            "star-shooting": 61845,
            "star-shooting-horizontal": 61846,
            "star-magic": 61847,
            "star-half": 61848,
            "star-circle": 61849,
            "speedometer": 61850,
            "speaker": 61851,
            "sparkle": 61852,
            "sort": 61853,
            "sort-vertical": 61854,
            "sort-horizontal": 61855,
            "sort-descending": 61856,
            "sort-descending-square": 61857,
            "sort-descending-circle": 61858,
            "sort-ascending": 61859,
            "sort-ascending-square": 61860,
            "sort-ascending-circle": 61861,
            "sofa": 61862,
            "sliders-vertical": 61863,
            "sliders-vertical-alt": 61864,
            "sliders-horizontal": 61865,
            "sliders-horizontal-alt": 61866,
            "sim-card": 61867,
            "sim-card-2": 61868,
            "sim-card-1": 61869,
            "signs-direction": 61870,
            "signal-stream": 61871,
            "sign-direction-right": 61872,
            "sign-direction-left": 61873,
            "shuffle": 61874,
            "shopping-cart": 61875,
            "shopping-cart-times": 61876,
            "shopping-cart-star": 61877,
            "shopping-cart-plus": 61878,
            "shopping-cart-minus": 61879,
            "shopping-cart-heart": 61880,
            "shopping-cart-check": 61881,
            "shopping-cart-arrow-top": 61882,
            "shopping-cart-arrow-down": 61883,
            "shopping-basket": 61884,
            "shopping-basket-times": 61885,
            "shopping-basket-star": 61886,
            "shopping-basket-plus": 61887,
            "shopping-basket-minus": 61888,
            "shopping-basket-heart": 61889,
            "shopping-basket-check": 61890,
            "shopping-basket-arrow-up": 61891,
            "shopping-basket-arrow-down": 61892,
            "shopping-bag": 61893,
            "shopping-bag-alt": 61894,
            "shield": 61895,
            "shield-user": 61896,
            "shield-times": 61897,
            "shield-star": 61898,
            "shield-slash": 61899,
            "shield-search": 61900,
            "shield-question": 61901,
            "shield-plus": 61902,
            "shield-play": 61903,
            "shield-minus": 61904,
            "shield-lock": 61905,
            "shield-heart": 61906,
            "shield-exclamation": 61907,
            "shield-check": 61908,
            "shield-bolt": 61909,
            "share": 61910,
            "settings": 61911,
            "server": 61912,
            "send": 61913,
            "send-right": 61914,
            "search": 61915,
            "search-text": 61916,
            "search-plus": 61917,
            "search-minus": 61918,
            "sd-card": 61919,
            "scissors": 61920,
            "school": 61921,
            "scanner": 61922,
            "scan": 61923,
            "scan-qr": 61924,
            "scan-circle": 61925,
            "sack-dollar": 61926,
            "route": 61927,
            "rotate": 61928,
            "rotate-square": 61929,
            "rotate-right": 61930,
            "rotate-right-square": 61931,
            "rotate-right-circle": 61932,
            "rotate-left": 61933,
            "rotate-left-square": 61934,
            "rotate-left-circle": 61935,
            "rotate-circle": 61936,
            "rocket": 61937,
            "rocket-launch": 61938,
            "road": 61939,
            "restaurant": 61940,
            "repeat": 61941,
            "registered-square": 61942,
            "registered-circle": 61943,
            "receipt": 61944,
            "receipt-text": 61945,
            "receipt-text-alt": 61946,
            "receipt-star": 61947,
            "receipt-star-alt": 61948,
            "receipt-percent": 61949,
            "receipt-percent-alt": 61950,
            "receipt-list": 61951,
            "receipt-list-alt": 61952,
            "receipt-heart": 61953,
            "receipt-heart-alt": 61954,
            "receipt-alt": 61955,
            "ranking": 61956,
            "radio": 61957,
            "radio-button-fill": 61958,
            "radiation": 61959,
            "radiation-circle": 61960,
            "radar": 61961,
            "question-square": 61962,
            "question-circle": 61963,
            "puzzle": 61964,
            "print": 61965,
            "print-slash": 61966,
            "presentation": 61967,
            "presentation-user": 61968,
            "presentation-trend-up": 61969,
            "presentation-trend-down": 61970,
            "presentation-text": 61971,
            "presentation-poll": 61972,
            "presentation-play": 61973,
            "presentation-pen": 61974,
            "presentation-lightbulb": 61975,
            "presentation-dollar": 61976,
            "presentation-chart-pie": 61977,
            "presentation-chart-line": 61978,
            "power-off": 61979,
            "power-off-square": 61980,
            "power-off-circle": 61981,
            "poll-vertical-square": 61982,
            "poll-vertical-circle": 61983,
            "poll-horizontal-square": 61984,
            "poll-horizontal-circle": 61985,
            "plus": 61986,
            "plus-square": 61987,
            "plus-circle": 61988,
            "plug": 61989,
            "playlist": 61990,
            "play": 61991,
            "play-square": 61992,
            "play-pause": 61993,
            "play-circle": 61994,
            "pills": 61995,
            "phone": 61996,
            "phone-times": 61997,
            "phone-slash": 61998,
            "phone-plus": 61999,
            "phone-outgoing": 62e3,
            "phone-office": 62001,
            "phone-missed": 62002,
            "phone-incoming": 62003,
            "phone-hangup": 62004,
            "phone-flip": 62005,
            "phone-call": 62006,
            "phone-2": 62007,
            "phone-1": 62008,
            "percent": 62009,
            "percent-tag": 62010,
            "percent-square": 62011,
            "percent-circle": 62012,
            "pen": 62013,
            "pen-tool": 62014,
            "pen-line": 62015,
            "pause": 62016,
            "pause-circle": 62017,
            "parking-square": 62018,
            "parking-circle": 62019,
            "papers": 62020,
            "papers-text": 62021,
            "paperclip": 62022,
            "palette": 62023,
            "package": 62024,
            "package-star": 62025,
            "package-heart": 62026,
            "package-dollar": 62027,
            "package-check": 62028,
            "octagon": 62029,
            "octagon-times": 62030,
            "octagon-plus": 62031,
            "octagon-minus": 62032,
            "octagon-exclamation": 62033,
            "octagon-check": 62034,
            "nut": 62035,
            "notebook": 62036,
            "note": 62037,
            "note-text": 62038,
            "note-text-square": 62039,
            "note-list": 62040,
            "note-list-square": 62041,
            "note-list-check": 62042,
            "note-list-check-square": 62043,
            "newspaper": 62044,
            "music": 62045,
            "music-note": 62046,
            "music-list": 62047,
            "mug": 62048,
            "mug-hot": 62049,
            "mouse": 62050,
            "mosque": 62051,
            "mortar-pestle": 62052,
            "more-vertical": 62053,
            "more-vertical-square": 62054,
            "more-vertical-circle": 62055,
            "more-horizontal": 62056,
            "more-horizontal-square": 62057,
            "more-horizontal-circle": 62058,
            "moon": 62059,
            "monitor-waveform": 62060,
            "money-withdrawal": 62061,
            "money-convert": 62062,
            "money-bills": 62063,
            "money-bill": 62064,
            "money-bill-times": 62065,
            "money-bill-send": 62066,
            "money-bill-receive": 62067,
            "money-bill-plus": 62068,
            "money-bill-minus": 62069,
            "money-bill-convert": 62070,
            "money-bill-clock": 62071,
            "money-bill-check": 62072,
            "money-bill-ban": 62073,
            "mobile": 62074,
            "minus": 62075,
            "minus-square": 62076,
            "minus-circle": 62077,
            "minimize": 62078,
            "microscope": 62079,
            "microphone": 62080,
            "microphone-stand": 62081,
            "microphone-slash": 62082,
            "messages": 62083,
            "messages-text": 62084,
            "messages-dots": 62085,
            "message": 62086,
            "message-times": 62087,
            "message-times-alt": 62088,
            "message-text": 62089,
            "message-text-times": 62090,
            "message-text-plus": 62091,
            "message-text-notification": 62092,
            "message-text-minus": 62093,
            "message-text-check": 62094,
            "message-star": 62095,
            "message-shield": 62096,
            "message-settings": 62097,
            "message-search": 62098,
            "message-question": 62099,
            "message-plus": 62100,
            "message-plus-alt": 62101,
            "message-notification": 62102,
            "message-minus": 62103,
            "message-minus-alt": 62104,
            "message-lock": 62105,
            "message-info": 62106,
            "message-heart": 62107,
            "message-exclamation": 62108,
            "message-edit": 62109,
            "message-dots": 62110,
            "message-dots-times": 62111,
            "message-dots-plus": 62112,
            "message-dots-notification": 62113,
            "message-dots-minus": 62114,
            "message-dots-check": 62115,
            "message-code": 62116,
            "message-clock": 62117,
            "message-check": 62118,
            "message-check-alt": 62119,
            "message-activity": 62120,
            "menu": 62121,
            "menu-square": 62122,
            "menu-square-alt": 62123,
            "menu-right": 62124,
            "menu-right-square": 62125,
            "menu-right-square-alt": 62126,
            "menu-right-circle": 62127,
            "menu-right-circle-alt": 62128,
            "menu-right-alt": 62129,
            "menu-left": 62130,
            "menu-left-square": 62131,
            "menu-left-square-alt": 62132,
            "menu-left-circle": 62133,
            "menu-left-circle-alt": 62134,
            "menu-left-alt": 62135,
            "menu-duo": 62136,
            "menu-duo-square": 62137,
            "menu-duo-circle": 62138,
            "menu-circle": 62139,
            "menu-circle-alt": 62140,
            "menu-alt": 62141,
            "megaphone": 62142,
            "medal": 62143,
            "medal-star": 62144,
            "medal-check": 62145,
            "maximize": 62146,
            "mask-face": 62147,
            "map": 62148,
            "map-pin": 62149,
            "map-location": 62150,
            "magnet": 62151,
            "log-out": 62152,
            "log-in": 62153,
            "lock": 62154,
            "lock-viewfinder": 62155,
            "location-pin": 62156,
            "location-pin-times": 62157,
            "location-pin-star": 62158,
            "location-pin-slash": 62159,
            "location-pin-slash-alt": 62160,
            "location-pin-search": 62161,
            "location-pin-question": 62162,
            "location-pin-plus": 62163,
            "location-pin-minus": 62164,
            "location-pin-lock": 62165,
            "location-pin-heart": 62166,
            "location-pin-eye": 62167,
            "location-pin-exclamation": 62168,
            "location-pin-edit": 62169,
            "location-pin-check": 62170,
            "location-pin-alt": 62171,
            "location-crosshairs": 62172,
            "location-crosshairs-slash": 62173,
            "location-arrow": 62174,
            "location-arrow-square": 62175,
            "location-arrow-circle": 62176,
            "list": 62177,
            "link": 62178,
            "link-horizontal": 62179,
            "link-horizontal-alt": 62180,
            "link-broken": 62181,
            "link-broken-horizontal": 62182,
            "link-alt": 62183,
            "line-up-square": 62184,
            "line-up-circle": 62185,
            "line-down-square": 62186,
            "line-down-circle": 62187,
            "line-chart-dots": 62188,
            "line-chart-dots-square": 62189,
            "line-chart-dots-circle": 62190,
            "like": 62191,
            "like-tag": 62192,
            "like-square": 62193,
            "like-circle": 62194,
            "lightbulb": 62195,
            "light-emergency": 62196,
            "light-emergency-on": 62197,
            "life-ring": 62198,
            "leaf": 62199,
            "layout-web-9": 62200,
            "layout-web-8": 62201,
            "layout-web-7": 62202,
            "layout-web-6": 62203,
            "layout-web-5": 62204,
            "layout-web-4": 62205,
            "layout-web-3": 62206,
            "layout-web-2": 62207,
            "layout-web-12": 62208,
            "layout-web-11": 62209,
            "layout-web-10": 62210,
            "layout-web-1": 62211,
            "layer-group": 62212,
            "laptop": 62213,
            "laptop-code": 62214,
            "keypad": 62215,
            "keyhole-square": 62216,
            "keyhole-circle": 62217,
            "keyboard": 62218,
            "key": 62219,
            "key-square": 62220,
            "key-circle": 62221,
            "kaaba": 62222,
            "invoice": 62223,
            "info-square": 62224,
            "info-circle": 62225,
            "inbox": 62226,
            "inbox-upload": 62227,
            "inbox-empty": 62228,
            "inbox-download": 62229,
            "image": 62230,
            "image-upload": 62231,
            "image-times": 62232,
            "image-plus": 62233,
            "image-minus": 62234,
            "image-gallery": 62235,
            "image-gallery-plus": 62236,
            "image-download": 62237,
            "image-check": 62238,
            "id-card": 62239,
            "id-badge": 62240,
            "hourglass": 62241,
            "hospital": 62242,
            "hospital-h-sign-square": 62243,
            "hospital-h-sign-circle": 62244,
            "home": 62245,
            "home-wifi": 62246,
            "home-user": 62247,
            "home-trend-up": 62248,
            "home-trend-down": 62249,
            "home-star": 62250,
            "home-shield": 62251,
            "home-search": 62252,
            "home-roof": 62253,
            "home-roof-wifi": 62254,
            "home-roof-user": 62255,
            "home-roof-trend-up": 62256,
            "home-roof-trend-down": 62257,
            "home-roof-star": 62258,
            "home-roof-shield": 62259,
            "home-roof-search": 62260,
            "home-roof-lock": 62261,
            "home-roof-heart": 62262,
            "home-roof-dollar": 62263,
            "home-roof-activity": 62264,
            "home-lock": 62265,
            "home-heart": 62266,
            "home-dollar": 62267,
            "home-dash": 62268,
            "home-dash-wifi": 62269,
            "home-dash-user": 62270,
            "home-dash-trend-up": 62271,
            "home-dash-trend-down": 62272,
            "home-dash-star": 62273,
            "home-dash-shield": 62274,
            "home-dash-search": 62275,
            "home-dash-lock": 62276,
            "home-dash-heart": 62277,
            "home-dash-dollar": 62278,
            "home-dash-activity": 62279,
            "home-activity": 62280,
            "heart": 62281,
            "heart-times": 62282,
            "heart-tag": 62283,
            "heart-square": 62284,
            "heart-slash": 62285,
            "heart-pulse": 62286,
            "heart-plus": 62287,
            "heart-minus": 62288,
            "heart-circle": 62289,
            "heart-check": 62290,
            "headphones": 62291,
            "hashtag": 62292,
            "hard-drive": 62293,
            "hand-holding-user": 62294,
            "hand-holding-dollar": 62295,
            "hand-holding-dollar-circle": 62296,
            "grid-web-7": 62297,
            "grid-web-6": 62298,
            "grid-web-5": 62299,
            "grid-web-4": 62300,
            "grid-web-3": 62301,
            "grid-web-2": 62302,
            "grid-web-1": 62303,
            "grid-square": 62304,
            "grid-square-plus": 62305,
            "grid-square-circle": 62306,
            "grid-dividers": 62307,
            "grid-circle": 62308,
            "grid-2": 62309,
            "grid-1": 62310,
            "graduation-cap": 62311,
            "globe": 62312,
            "globe-stand": 62313,
            "globe-earth": 62314,
            "glasses": 62315,
            "gift": 62316,
            "game-controller": 62317,
            "forward": 62318,
            "food-tray": 62319,
            "folder": 62320,
            "folder-user": 62321,
            "folder-upload": 62322,
            "folder-times": 62323,
            "folder-star": 62324,
            "folder-shield": 62325,
            "folder-settings": 62326,
            "folder-search": 62327,
            "folder-plus": 62328,
            "folder-open": 62329,
            "folder-music": 62330,
            "folder-minus": 62331,
            "folder-lock": 62332,
            "folder-import": 62333,
            "folder-heart": 62334,
            "folder-export": 62335,
            "folder-edit": 62336,
            "folder-download": 62337,
            "folder-connection": 62338,
            "folder-code": 62339,
            "folder-clock": 62340,
            "folder-check": 62341,
            "folder-ban": 62342,
            "folder-alt": 62343,
            "floppy-disk": 62344,
            "flask": 62345,
            "flask-round": 62346,
            "flashlight": 62347,
            "flag": 62348,
            "flag-triangle": 62349,
            "fire": 62350,
            "fingerprint": 62351,
            "fingerprint-viewfinder": 62352,
            "filter": 62353,
            "filter-times": 62354,
            "filter-plus": 62355,
            "filter-minus": 62356,
            "filter-check": 62357,
            "film": 62358,
            "file": 62359,
            "file-user": 62360,
            "file-upload": 62361,
            "file-times": 62362,
            "file-text": 62363,
            "file-text-times": 62364,
            "file-text-star": 62365,
            "file-text-shield": 62366,
            "file-text-search": 62367,
            "file-text-plus": 62368,
            "file-text-minus": 62369,
            "file-text-lock": 62370,
            "file-text-heart": 62371,
            "file-text-edit": 62372,
            "file-text-check": 62373,
            "file-text-ban": 62374,
            "file-star": 62375,
            "file-shield": 62376,
            "file-settings": 62377,
            "file-search": 62378,
            "file-plus": 62379,
            "file-music": 62380,
            "file-minus": 62381,
            "file-lock": 62382,
            "file-list": 62383,
            "file-list-times": 62384,
            "file-list-star": 62385,
            "file-list-shield": 62386,
            "file-list-search": 62387,
            "file-list-plus": 62388,
            "file-list-minus": 62389,
            "file-list-lock": 62390,
            "file-list-heart": 62391,
            "file-list-edit": 62392,
            "file-list-check": 62393,
            "file-list-ban": 62394,
            "file-import": 62395,
            "file-import-alt": 62396,
            "file-heart": 62397,
            "file-export": 62398,
            "file-export-alt": 62399,
            "file-edit": 62400,
            "file-download": 62401,
            "file-copy": 62402,
            "file-code": 62403,
            "file-clock": 62404,
            "file-check": 62405,
            "file-ban": 62406,
            "fast-forward": 62407,
            "fast-backward": 62408,
            "eye": 62409,
            "eye-slash": 62410,
            "eye-closed": 62411,
            "expand": 62412,
            "exclamation-square": 62413,
            "exclamation-circle": 62414,
            "exchange-vertical": 62415,
            "exchange-vertical-square": 62416,
            "exchange-vertical-circle": 62417,
            "exchange-horizontal": 62418,
            "exchange-horizontal-square": 62419,
            "exchange-horizontal-circle": 62420,
            "euro": 62421,
            "euro-square": 62422,
            "euro-circle": 62423,
            "ethereum": 62424,
            "ethereum-square": 62425,
            "ethereum-circle": 62426,
            "envelopes": 62427,
            "envelope": 62428,
            "envelope-times": 62429,
            "envelope-star": 62430,
            "envelope-shield": 62431,
            "envelope-settings": 62432,
            "envelope-search": 62433,
            "envelope-plus": 62434,
            "envelope-open": 62435,
            "envelope-notification": 62436,
            "envelope-minus": 62437,
            "envelope-lock": 62438,
            "envelope-heart": 62439,
            "envelope-eye": 62440,
            "envelope-edit": 62441,
            "envelope-clock": 62442,
            "envelope-check": 62443,
            "envelope-ban": 62444,
            "eject": 62445,
            "edit": 62446,
            "droplet": 62447,
            "droplet-slash": 62448,
            "drag-vertical": 62449,
            "drag-lines-vertical": 62450,
            "drag-lines-horizontal": 62451,
            "drag-horizontal": 62452,
            "download": 62453,
            "download-alt": 62454,
            "door-open": 62455,
            "door-closed": 62456,
            "dollar": 62457,
            "dollar-square": 62458,
            "dollar-send-square": 62459,
            "dollar-send-circle": 62460,
            "dollar-receive-square": 62461,
            "dollar-receive-circle": 62462,
            "dollar-circle": 62463,
            "document": 62464,
            "document-list": 62465,
            "document-list-check": 62466,
            "dna": 62467,
            "dislike": 62468,
            "dislike-tag": 62469,
            "dislike-square": 62470,
            "dislike-circle": 62471,
            "disc": 62472,
            "diamond": 62473,
            "diamond-exclamation": 62474,
            "desktop": 62475,
            "desktop-mobile": 62476,
            "desktop-code": 62477,
            "delivery-cart": 62478,
            "delivery-cart-arrow-up": 62479,
            "delivery-cart-arrow-down": 62480,
            "delete-right": 62481,
            "delete-left": 62482,
            "database": 62483,
            "cursor": 62484,
            "cursor-click": 62485,
            "crown": 62486,
            "crown-alt": 62487,
            "credit-card": 62488,
            "credit-card-times": 62489,
            "credit-card-slash": 62490,
            "credit-card-plus": 62491,
            "credit-card-minus": 62492,
            "credit-card-edit": 62493,
            "credit-card-convert": 62494,
            "credit-card-check": 62495,
            "credit-card-change": 62496,
            "credit-card-ban": 62497,
            "cpu": 62498,
            "coupon": 62499,
            "coupon-star": 62500,
            "coupon-percent": 62501,
            "coupon-heart": 62502,
            "copy2right-square": 62503,
            "copy2right-circle": 62504,
            "copy": 62505,
            "copy-plus": 62506,
            "copy-check": 62507,
            "copy-alt": 62508,
            "contrast": 62509,
            "compress": 62510,
            "compass": 62511,
            "compass-needle": 62512,
            "comments": 62513,
            "comments-text": 62514,
            "comments-dots": 62515,
            "comment": 62516,
            "comment-times": 62517,
            "comment-times-alt": 62518,
            "comment-text": 62519,
            "comment-text-times": 62520,
            "comment-text-plus": 62521,
            "comment-text-notification": 62522,
            "comment-text-minus": 62523,
            "comment-text-check": 62524,
            "comment-star": 62525,
            "comment-shield": 62526,
            "comment-settings": 62527,
            "comment-search": 62528,
            "comment-question": 62529,
            "comment-plus": 62530,
            "comment-plus-alt": 62531,
            "comment-notification": 62532,
            "comment-minus": 62533,
            "comment-minus-alt": 62534,
            "comment-lock": 62535,
            "comment-info": 62536,
            "comment-heart": 62537,
            "comment-exclamation": 62538,
            "comment-edit": 62539,
            "comment-dots": 62540,
            "comment-dots-times": 62541,
            "comment-dots-plus": 62542,
            "comment-dots-notification": 62543,
            "comment-dots-minus": 62544,
            "comment-dots-check": 62545,
            "comment-code": 62546,
            "comment-clock": 62547,
            "comment-check": 62548,
            "comment-check-alt": 62549,
            "comment-activity": 62550,
            "coins": 62551,
            "coin": 62552,
            "coin-convert": 62553,
            "coin-card-transfer": 62554,
            "code": 62555,
            "code-square": 62556,
            "code-circle": 62557,
            "cloud": 62558,
            "cloud-upload": 62559,
            "cloud-times": 62560,
            "cloud-slash": 62561,
            "cloud-shield": 62562,
            "cloud-share": 62563,
            "cloud-plus": 62564,
            "cloud-minus": 62565,
            "cloud-lock": 62566,
            "cloud-download": 62567,
            "cloud-connection": 62568,
            "cloud-check": 62569,
            "closed-captioning": 62570,
            "clock": 62571,
            "clock-square": 62572,
            "clock-square-alt": 62573,
            "clock-alt": 62574,
            "clipboard": 62575,
            "clipboard-times": 62576,
            "clipboard-text": 62577,
            "clipboard-star": 62578,
            "clipboard-search": 62579,
            "clipboard-plus": 62580,
            "clipboard-minus": 62581,
            "clipboard-list": 62582,
            "clipboard-list-check": 62583,
            "clipboard-heart": 62584,
            "clipboard-edit": 62585,
            "clipboard-check": 62586,
            "chromecast": 62587,
            "checkbox-square-fill": 62588,
            "check": 62589,
            "check-square": 62590,
            "check-double": 62591,
            "check-circle": 62592,
            "chats": 62593,
            "chats-text": 62594,
            "chats-dots": 62595,
            "chat": 62596,
            "chat-times": 62597,
            "chat-times-alt": 62598,
            "chat-text": 62599,
            "chat-text-times": 62600,
            "chat-text-plus": 62601,
            "chat-text-notification": 62602,
            "chat-text-minus": 62603,
            "chat-text-check": 62604,
            "chat-star": 62605,
            "chat-shield": 62606,
            "chat-settings": 62607,
            "chat-search": 62608,
            "chat-question": 62609,
            "chat-plus": 62610,
            "chat-plus-alt": 62611,
            "chat-notification": 62612,
            "chat-minus": 62613,
            "chat-minus-alt": 62614,
            "chat-lock": 62615,
            "chat-info": 62616,
            "chat-heart": 62617,
            "chat-exclamation": 62618,
            "chat-edit": 62619,
            "chat-dots": 62620,
            "chat-dots-times": 62621,
            "chat-dots-plus": 62622,
            "chat-dots-notification": 62623,
            "chat-dots-minus": 62624,
            "chat-dots-check": 62625,
            "chat-code": 62626,
            "chat-clock": 62627,
            "chat-check": 62628,
            "chat-check-alt": 62629,
            "chat-activity": 62630,
            "chart-trend-up": 62631,
            "chart-trend-down": 62632,
            "chart-pyramid": 62633,
            "chart-pie": 62634,
            "chart-line": 62635,
            "chart-line-up": 62636,
            "chart-line-down": 62637,
            "chart-line-dots": 62638,
            "chart-bar": 62639,
            "chart-bar-vertical": 62640,
            "chart-bar-square": 62641,
            "chart-bar-horizontal": 62642,
            "chart-bar-circle": 62643,
            "chart-bar-alt": 62644,
            "certificate": 62645,
            "castle": 62646,
            "caret-up": 62647,
            "caret-up-square": 62648,
            "caret-up-circle": 62649,
            "caret-right": 62650,
            "caret-right-square": 62651,
            "caret-right-circle": 62652,
            "caret-left": 62653,
            "caret-left-square": 62654,
            "caret-left-circle": 62655,
            "caret-down": 62656,
            "caret-down-square": 62657,
            "caret-down-circle": 62658,
            "camera": 62659,
            "camera-square": 62660,
            "camera-slash": 62661,
            "camera-rotate": 62662,
            "camera-circle": 62663,
            "calendar": 62664,
            "calendar-times": 62665,
            "calendar-times-alt": 62666,
            "calendar-star": 62667,
            "calendar-search": 62668,
            "calendar-plus": 62669,
            "calendar-plus-alt": 62670,
            "calendar-minus": 62671,
            "calendar-minus-alt": 62672,
            "calendar-lock": 62673,
            "calendar-heart": 62674,
            "calendar-empty": 62675,
            "calendar-empty-alt": 62676,
            "calendar-edit": 62677,
            "calendar-clock": 62678,
            "calendar-check": 62679,
            "calendar-check-alt": 62680,
            "calculator": 62681,
            "calculator-simple": 62682,
            "cake": 62683,
            "cabinet-filing": 62684,
            "bus": 62685,
            "buildings": 62686,
            "buildings-alt": 62687,
            "building": 62688,
            "building-tree": 62689,
            "building-coins": 62690,
            "bug": 62691,
            "bug-slash": 62692,
            "brush": 62693,
            "brush-alt": 62694,
            "briefcase": 62695,
            "briefcase-times": 62696,
            "briefcase-plus": 62697,
            "briefcase-money": 62698,
            "briefcase-minus": 62699,
            "briefcase-check": 62700,
            "brain": 62701,
            "boxes": 62702,
            "box": 62703,
            "box-times": 62704,
            "box-search": 62705,
            "box-plus": 62706,
            "box-minus": 62707,
            "box-check": 62708,
            "books": 62709,
            "bookmarks": 62710,
            "bookmarks-user": 62711,
            "bookmarks-times": 62712,
            "bookmarks-star": 62713,
            "bookmarks-settings": 62714,
            "bookmarks-plus": 62715,
            "bookmarks-minus": 62716,
            "bookmarks-heart": 62717,
            "bookmarks-check": 62718,
            "bookmark": 62719,
            "bookmark-user": 62720,
            "bookmark-times": 62721,
            "bookmark-star": 62722,
            "bookmark-settings": 62723,
            "bookmark-plus": 62724,
            "bookmark-minus": 62725,
            "bookmark-heart": 62726,
            "bookmark-check": 62727,
            "book": 62728,
            "book-text": 62729,
            "book-open": 62730,
            "book-open-text": 62731,
            "book-open-reader": 62732,
            "book-open-bookmark": 62733,
            "book-empty": 62734,
            "book-bookmark": 62735,
            "book-alt": 62736,
            "bone": 62737,
            "bone-break": 62738,
            "bolt": 62739,
            "bolt-square": 62740,
            "bolt-square-alt": 62741,
            "bolt-slash": 62742,
            "bolt-slash-alt": 62743,
            "bolt-circle": 62744,
            "bolt-circle-alt": 62745,
            "bolt-alt": 62746,
            "bluetooth": 62747,
            "bitcoin": 62748,
            "bitcoin-square": 62749,
            "bitcoin-circle": 62750,
            "bezier": 62751,
            "bell": 62752,
            "bell-times": 62753,
            "bell-slash": 62754,
            "bell-plus": 62755,
            "bell-on": 62756,
            "bell-notification": 62757,
            "bell-minus": 62758,
            "bell-exclamation": 62759,
            "bed": 62760,
            "battery-half": 62761,
            "battery-full": 62762,
            "battery-empty": 62763,
            "battery-bolt": 62764,
            "bank": 62765,
            "bandage": 62766,
            "ban": 62767,
            "badge": 62768,
            "badge-like": 62769,
            "badge-dollar": 62770,
            "badge-discount": 62771,
            "badge-discount-alt": 62772,
            "badge-check": 62773,
            "backward": 62774,
            "backpack": 62775,
            "award": 62776,
            "award-star": 62777,
            "award-check": 62778,
            "atom": 62779,
            "at": 62780,
            "arrows-up-down": 62781,
            "arrows-repeat": 62782,
            "arrows-repeat-square": 62783,
            "arrows-repeat-circle": 62784,
            "arrows-move": 62785,
            "arrows-left-right": 62786,
            "arrows-expand": 62787,
            "arrows-compress": 62788,
            "arrow-up": 62789,
            "arrow-up-to-line": 62790,
            "arrow-up-square": 62791,
            "arrow-up-small": 62792,
            "arrow-up-right": 62793,
            "arrow-up-right-square": 62794,
            "arrow-up-right-small": 62795,
            "arrow-up-right-circle": 62796,
            "arrow-up-left": 62797,
            "arrow-up-left-square": 62798,
            "arrow-up-left-small": 62799,
            "arrow-up-left-circle": 62800,
            "arrow-up-from-line": 62801,
            "arrow-up-circle": 62802,
            "arrow-turn-up-right": 62803,
            "arrow-turn-up-left": 62804,
            "arrow-turn-right-up": 62805,
            "arrow-turn-right-down": 62806,
            "arrow-turn-left-up": 62807,
            "arrow-turn-left-down": 62808,
            "arrow-turn-down-right": 62809,
            "arrow-turn-down-left": 62810,
            "arrow-share": 62811,
            "arrow-right": 62812,
            "arrow-right-to-line": 62813,
            "arrow-right-square": 62814,
            "arrow-right-small": 62815,
            "arrow-right-from-line": 62816,
            "arrow-right-circle": 62817,
            "arrow-reply": 62818,
            "arrow-left": 62819,
            "arrow-left-to-line": 62820,
            "arrow-left-square": 62821,
            "arrow-left-small": 62822,
            "arrow-left-from-line": 62823,
            "arrow-left-circle": 62824,
            "arrow-left-arrow-right": 62825,
            "arrow-left-arrow-right-square": 62826,
            "arrow-left-arrow-right-circle": 62827,
            "arrow-import": 62828,
            "arrow-forward": 62829,
            "arrow-forward-square": 62830,
            "arrow-forward-square-alt": 62831,
            "arrow-forward-circle": 62832,
            "arrow-forward-circle-alt": 62833,
            "arrow-forward-alt": 62834,
            "arrow-export": 62835,
            "arrow-down": 62836,
            "arrow-down-to-line": 62837,
            "arrow-down-square": 62838,
            "arrow-down-small": 62839,
            "arrow-down-right": 62840,
            "arrow-down-right-square": 62841,
            "arrow-down-right-small": 62842,
            "arrow-down-right-circle": 62843,
            "arrow-down-left": 62844,
            "arrow-down-left-square": 62845,
            "arrow-down-left-small": 62846,
            "arrow-down-left-circle": 62847,
            "arrow-down-from-line": 62848,
            "arrow-down-circle": 62849,
            "arrow-down-arrow-up": 62850,
            "arrow-down-arrow-up-square": 62851,
            "arrow-down-arrow-up-circle": 62852,
            "arrow-back": 62853,
            "arrow-back-square": 62854,
            "arrow-back-square-alt": 62855,
            "arrow-back-circle": 62856,
            "arrow-back-circle-alt": 62857,
            "arrow-back-alt": 62858,
            "archway": 62859,
            "archive": 62860,
            "angles-up": 62861,
            "angles-up-small": 62862,
            "angles-right": 62863,
            "angles-right-small": 62864,
            "angles-left": 62865,
            "angles-left-small": 62866,
            "angles-left-right": 62867,
            "angles-down": 62868,
            "angles-down-up": 62869,
            "angles-down-small": 62870,
            "angle-up": 62871,
            "angle-up-square": 62872,
            "angle-up-small": 62873,
            "angle-up-circle": 62874,
            "angle-right": 62875,
            "angle-right-square": 62876,
            "angle-right-small": 62877,
            "angle-right-circle": 62878,
            "angle-left": 62879,
            "angle-left-square": 62880,
            "angle-left-small": 62881,
            "angle-left-circle": 62882,
            "angle-down": 62883,
            "angle-down-square": 62884,
            "angle-down-small": 62885,
            "angle-down-circle": 62886,
            "alarm-times": 62887,
            "alarm-times-alt": 62888,
            "alarm-plus": 62889,
            "alarm-plus-alt": 62890,
            "alarm-minus": 62891,
            "alarm-minus-alt": 62892,
            "alarm-edit": 62893,
            "alarm-clock": 62894,
            "alarm-clock-empty": 62895,
            "alarm-clock-alt": 62896,
            "alarm-check": 62897,
            "alarm-check-alt": 62898,
            "airplay": 62899,
            "airplay-alt": 62900,
            "address-book": 62901,
            "activity-star-square": 62902,
            "activity-star-circle": 62903,
            "activity-square": 62904,
            "activity-notification-square": 62905,
            "activity-notification-circle": 62906,
            "activity-heart-square": 62907,
            "activity-heart-circle": 62908,
            "activity-circle": 62909
        }
    };
    var codepoints_default = codePoints;
    // magicoon_react/get-string.ts
    var getValue = function(variant, icon) {
        var codePoint = codepoints_default[variant][icon];
        if (!codePoint || isNaN(codePoint)) return "";
        return String.fromCodePoint(codePoint);
    };
    // magicoon_react/styles.ts
    var defaultStyle = {
        fontFamily: "Magicoon Regular",
        fontSize: "24px",
        display: "inline-block",
        verticalAlign: "middle",
        lineHeight: "1",
        whiteSpace: "nowrap"
    };
    var filledStyle = _object_spread_props(_object_spread({}, defaultStyle), {
        fontFamily: "Magicoon Filled"
    });
    var lightStyle = _object_spread_props(_object_spread({}, defaultStyle), {
        fontFamily: "Magicoon Light"
    });
    var styles = {
        filled: filledStyle,
        light: lightStyle,
        regular: defaultStyle
    };
    var styles_default = styles;
    // magicoon_react/Magicoon.tsx
    var MagicoonFilled = function(param) {
        var icon = param.icon, className = param.className;
        var value = getValue("filled", icon);
        return /* @__PURE__ */ import_react.default.createElement("span", {
            style: styles_default.filled,
            className: className
        }, value);
    };
    var MagicoonRegular = function(param) {
        var icon = param.icon, className = param.className;
        var value = getValue("regular", icon);
        return /* @__PURE__ */ import_react.default.createElement("span", {
            style: styles_default.regular,
            className: className
        }, value);
    };
    var MagicoonLight = function(param) {
        var icon = param.icon, className = param.className;
        var value = getValue("light", icon);
        return /* @__PURE__ */ import_react.default.createElement("span", {
            style: styles_default.light,
            className: className
        }, value);
    };
    var Magicoon = function(param) {
        var variant = param.variant, icon = param.icon, className = param.className;
        switch(variant){
            case "filled":
                return /* @__PURE__ */ import_react.default.createElement(MagicoonFilled, {
                    icon: icon,
                    className: className
                });
            case "light":
                return /* @__PURE__ */ import_react.default.createElement(MagicoonLight, {
                    icon: icon,
                    className: className
                });
            default:
                return /* @__PURE__ */ import_react.default.createElement(MagicoonRegular, {
                    icon: icon,
                    className: className
                });
        }
    };
    var Magicoon_default = Magicoon;
})(); /*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 
