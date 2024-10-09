function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
            "wallet-line": 61704,
            "wallet-3-line": 61705,
            "volume": 61706,
            "volume-times": 61707,
            "volume-slash": 61708,
            "volume-plus": 61709,
            "volume-minus": 61710,
            "volume-low": 61711,
            "volume-high": 61712,
            "volume-high-slash": 61713,
            "voicemail": 61714,
            "virus-covid": 61715,
            "virus-covid-slash": 61716,
            "video": 61717,
            "video-square": 61718,
            "video-slash": 61719,
            "video-plus": 61720,
            "video-play": 61721,
            "video-outgoing": 61722,
            "video-incoming": 61723,
            "video-eye": 61724,
            "video-circle": 61725,
            "verified": 61726,
            "vector": 61727,
            "users": 61728,
            "users-slash": 61729,
            "users-group": 61730,
            "users-group-slash": 61731,
            "users-group-alt": 61732,
            "users-alt": 61733,
            "user": 61734,
            "user-viewfinder": 61735,
            "user-times": 61736,
            "user-times-bottom": 61737,
            "user-times-alt": 61738,
            "user-tag": 61739,
            "user-star": 61740,
            "user-square": 61741,
            "user-smile-line": 61742,
            "user-slash": 61743,
            "user-shield": 61744,
            "user-settings": 61745,
            "user-search": 61746,
            "user-plus": 61747,
            "user-plus-bottom": 61748,
            "user-plus-alt": 61749,
            "user-minus": 61750,
            "user-minus-bottom": 61751,
            "user-minus-alt": 61752,
            "user-lock": 61753,
            "user-heart": 61754,
            "user-eye": 61755,
            "user-edit": 61756,
            "user-dollar": 61757,
            "user-code": 61758,
            "user-clock": 61759,
            "user-circle": 61760,
            "user-check": 61761,
            "user-check-bottom": 61762,
            "user-check-alt": 61763,
            "user-change": 61764,
            "user-ban": 61765,
            "user-alt": 61766,
            "usb-drive": 61767,
            "upload": 61768,
            "upload-alt": 61769,
            "unlock": 61770,
            "university": 61771,
            "tv": 61772,
            "tv-retro": 61773,
            "tv-play": 61774,
            "truck": 61775,
            "trophy": 61776,
            "trophy-star": 61777,
            "triangle": 61778,
            "triangle-exclamation": 61779,
            "trend-up": 61780,
            "trend-up-square": 61781,
            "trend-up-circle": 61782,
            "trend-down": 61783,
            "trend-down-square": 61784,
            "trend-down-circle": 61785,
            "tree": 61786,
            "trash": 61787,
            "trash-undo": 61788,
            "trash-times": 61789,
            "trash-slash": 61790,
            "trash-redo": 61791,
            "trash-plus": 61792,
            "trash-minus": 61793,
            "trash-check": 61794,
            "traffic-cone": 61795,
            "tooth": 61796,
            "tool": 61797,
            "toggle-on": 61798,
            "toggle-on-rectangle": 61799,
            "toggle-on-alt": 61800,
            "toggle-off": 61801,
            "toggle-off-rectangle": 61802,
            "toggle-off-alt": 61803,
            "times": 61804,
            "times-square": 61805,
            "times-circle": 61806,
            "time-past": 61807,
            "time-forward": 61808,
            "thumbtack": 61809,
            "thumbtack-vertical": 61810,
            "thermometer": 61811,
            "test-tube": 61812,
            "test-tube-alt": 61813,
            "telescope": 61814,
            "taxi": 61815,
            "target": 61816,
            "tags": 61817,
            "tag": 61818,
            "tablet": 61819,
            "syringe": 61820,
            "sun": 61821,
            "story": 61822,
            "storeforgood": 61823,
            "store": 61824,
            "store-for-good": 61825,
            "stopwatch": 61826,
            "stopwatch-times": 61827,
            "stopwatch-times-alt": 61828,
            "stopwatch-plus": 61829,
            "stopwatch-plus-alt": 61830,
            "stopwatch-minus": 61831,
            "stopwatch-minus-alt": 61832,
            "stopwatch-empty": 61833,
            "stopwatch-edit": 61834,
            "stopwatch-check": 61835,
            "stopwatch-check-alt": 61836,
            "stopwatch-alt": 61837,
            "stop": 61838,
            "stop-circle": 61839,
            "sticky-note-text-square": 61840,
            "sticky-note-text-circle": 61841,
            "sticky-note-square": 61842,
            "sticky-note-circle": 61843,
            "stethoscope": 61844,
            "step-forward": 61845,
            "step-backward": 61846,
            "star": 61847,
            "star-tag": 61848,
            "star-square": 61849,
            "star-slash": 61850,
            "star-shooting": 61851,
            "star-shooting-horizontal": 61852,
            "star-magic": 61853,
            "star-half": 61854,
            "star-circle": 61855,
            "speedometer": 61856,
            "speaker": 61857,
            "sparkle": 61858,
            "sort": 61859,
            "sort-vertical": 61860,
            "sort-horizontal": 61861,
            "sort-descending": 61862,
            "sort-descending-square": 61863,
            "sort-descending-circle": 61864,
            "sort-ascending": 61865,
            "sort-ascending-square": 61866,
            "sort-ascending-circle": 61867,
            "sofa": 61868,
            "sliders-vertical": 61869,
            "sliders-vertical-alt": 61870,
            "sliders-horizontal": 61871,
            "sliders-horizontal-alt": 61872,
            "sim-card": 61873,
            "sim-card-2": 61874,
            "sim-card-1": 61875,
            "signs-direction": 61876,
            "signal-stream": 61877,
            "sign-direction-right": 61878,
            "sign-direction-left": 61879,
            "shuffle": 61880,
            "shopping-cart": 61881,
            "shopping-cart-times": 61882,
            "shopping-cart-star": 61883,
            "shopping-cart-plus": 61884,
            "shopping-cart-minus": 61885,
            "shopping-cart-line": 61886,
            "shopping-cart-heart": 61887,
            "shopping-cart-check": 61888,
            "shopping-cart-arrow-top": 61889,
            "shopping-cart-arrow-down": 61890,
            "shopping-basket": 61891,
            "shopping-basket-times": 61892,
            "shopping-basket-star": 61893,
            "shopping-basket-plus": 61894,
            "shopping-basket-minus": 61895,
            "shopping-basket-heart": 61896,
            "shopping-basket-check": 61897,
            "shopping-basket-arrow-up": 61898,
            "shopping-basket-arrow-down": 61899,
            "shopping-bag": 61900,
            "shopping-bag-alt": 61901,
            "shield": 61902,
            "shield-user": 61903,
            "shield-times": 61904,
            "shield-star": 61905,
            "shield-slash": 61906,
            "shield-search": 61907,
            "shield-question": 61908,
            "shield-plus": 61909,
            "shield-play": 61910,
            "shield-minus": 61911,
            "shield-lock": 61912,
            "shield-heart": 61913,
            "shield-exclamation": 61914,
            "shield-check": 61915,
            "shield-bolt": 61916,
            "share": 61917,
            "settings": 61918,
            "server": 61919,
            "send": 61920,
            "send-right": 61921,
            "search": 61922,
            "search-text": 61923,
            "search-plus": 61924,
            "search-minus": 61925,
            "search-line": 61926,
            "sd-card": 61927,
            "scissors": 61928,
            "school": 61929,
            "scanner": 61930,
            "scan": 61931,
            "scan-qr": 61932,
            "scan-circle": 61933,
            "sack-dollar": 61934,
            "route": 61935,
            "rotate": 61936,
            "rotate-square": 61937,
            "rotate-right": 61938,
            "rotate-right-square": 61939,
            "rotate-right-circle": 61940,
            "rotate-left": 61941,
            "rotate-left-square": 61942,
            "rotate-left-circle": 61943,
            "rotate-circle": 61944,
            "rocket": 61945,
            "rocket-launch": 61946,
            "road": 61947,
            "restaurant": 61948,
            "repeat": 61949,
            "registered-square": 61950,
            "registered-circle": 61951,
            "receipt": 61952,
            "receipt-text": 61953,
            "receipt-text-alt": 61954,
            "receipt-star": 61955,
            "receipt-star-alt": 61956,
            "receipt-percent": 61957,
            "receipt-percent-alt": 61958,
            "receipt-list": 61959,
            "receipt-list-alt": 61960,
            "receipt-heart": 61961,
            "receipt-heart-alt": 61962,
            "receipt-alt": 61963,
            "ranking": 61964,
            "radio": 61965,
            "radio-button-fill": 61966,
            "radiation": 61967,
            "radiation-circle": 61968,
            "radar": 61969,
            "question-square": 61970,
            "question-circle": 61971,
            "puzzle": 61972,
            "print": 61973,
            "print-slash": 61974,
            "presentation": 61975,
            "presentation-user": 61976,
            "presentation-trend-up": 61977,
            "presentation-trend-down": 61978,
            "presentation-text": 61979,
            "presentation-poll": 61980,
            "presentation-play": 61981,
            "presentation-pen": 61982,
            "presentation-lightbulb": 61983,
            "presentation-dollar": 61984,
            "presentation-chart-pie": 61985,
            "presentation-chart-line": 61986,
            "power-off": 61987,
            "power-off-square": 61988,
            "power-off-circle": 61989,
            "poll-vertical-square": 61990,
            "poll-vertical-circle": 61991,
            "poll-horizontal-square": 61992,
            "poll-horizontal-circle": 61993,
            "plus": 61994,
            "plus-square": 61995,
            "plus-circle": 61996,
            "plug": 61997,
            "playlist": 61998,
            "play": 61999,
            "play-square": 62e3,
            "play-pause": 62001,
            "play-circle": 62002,
            "pills": 62003,
            "phone": 62004,
            "phone-times": 62005,
            "phone-slash": 62006,
            "phone-plus": 62007,
            "phone-outgoing": 62008,
            "phone-office": 62009,
            "phone-missed": 62010,
            "phone-incoming": 62011,
            "phone-hangup": 62012,
            "phone-flip": 62013,
            "phone-call": 62014,
            "phone-2": 62015,
            "phone-1": 62016,
            "percent": 62017,
            "percent-tag": 62018,
            "percent-square": 62019,
            "percent-circle": 62020,
            "pen": 62021,
            "pen-tool": 62022,
            "pen-line": 62023,
            "pause": 62024,
            "pause-circle": 62025,
            "parking-square": 62026,
            "parking-circle": 62027,
            "papers": 62028,
            "papers-text": 62029,
            "paperclip": 62030,
            "palette": 62031,
            "package": 62032,
            "package-star": 62033,
            "package-heart": 62034,
            "package-dollar": 62035,
            "package-check": 62036,
            "octagon": 62037,
            "octagon-times": 62038,
            "octagon-plus": 62039,
            "octagon-minus": 62040,
            "octagon-exclamation": 62041,
            "octagon-check": 62042,
            "nut": 62043,
            "notification-line": 62044,
            "notebook": 62045,
            "note": 62046,
            "note-text": 62047,
            "note-text-square": 62048,
            "note-list": 62049,
            "note-list-square": 62050,
            "note-list-check": 62051,
            "note-list-check-square": 62052,
            "newspaper": 62053,
            "music": 62054,
            "music-note": 62055,
            "music-list": 62056,
            "mug": 62057,
            "mug-hot": 62058,
            "mouse": 62059,
            "mosque": 62060,
            "mortar-pestle": 62061,
            "more-vertical": 62062,
            "more-vertical-square": 62063,
            "more-vertical-circle": 62064,
            "more-horizontal": 62065,
            "more-horizontal-square": 62066,
            "more-horizontal-circle": 62067,
            "moon": 62068,
            "monitor-waveform": 62069,
            "money-withdrawal": 62070,
            "money-convert": 62071,
            "money-bills": 62072,
            "money-bill": 62073,
            "money-bill-times": 62074,
            "money-bill-send": 62075,
            "money-bill-receive": 62076,
            "money-bill-plus": 62077,
            "money-bill-minus": 62078,
            "money-bill-convert": 62079,
            "money-bill-clock": 62080,
            "money-bill-check": 62081,
            "money-bill-ban": 62082,
            "mobile": 62083,
            "minus": 62084,
            "minus-square": 62085,
            "minus-circle": 62086,
            "minimize": 62087,
            "microscope": 62088,
            "microphone": 62089,
            "microphone-stand": 62090,
            "microphone-slash": 62091,
            "messages": 62092,
            "messages-text": 62093,
            "messages-dots": 62094,
            "message": 62095,
            "message-times": 62096,
            "message-times-alt": 62097,
            "message-text": 62098,
            "message-text-times": 62099,
            "message-text-plus": 62100,
            "message-text-notification": 62101,
            "message-text-minus": 62102,
            "message-text-check": 62103,
            "message-star": 62104,
            "message-shield": 62105,
            "message-settings": 62106,
            "message-search": 62107,
            "message-question": 62108,
            "message-plus": 62109,
            "message-plus-alt": 62110,
            "message-notification": 62111,
            "message-minus": 62112,
            "message-minus-alt": 62113,
            "message-lock": 62114,
            "message-info": 62115,
            "message-heart": 62116,
            "message-exclamation": 62117,
            "message-edit": 62118,
            "message-dots": 62119,
            "message-dots-times": 62120,
            "message-dots-plus": 62121,
            "message-dots-notification": 62122,
            "message-dots-minus": 62123,
            "message-dots-check": 62124,
            "message-code": 62125,
            "message-clock": 62126,
            "message-check": 62127,
            "message-check-alt": 62128,
            "message-activity": 62129,
            "menu": 62130,
            "menu-square": 62131,
            "menu-square-alt": 62132,
            "menu-search": 62133,
            "menu-right": 62134,
            "menu-right-square": 62135,
            "menu-right-square-alt": 62136,
            "menu-right-circle": 62137,
            "menu-right-circle-alt": 62138,
            "menu-right-alt": 62139,
            "menu-left": 62140,
            "menu-left-square": 62141,
            "menu-left-square-alt": 62142,
            "menu-left-circle": 62143,
            "menu-left-circle-alt": 62144,
            "menu-left-alt": 62145,
            "menu-duo": 62146,
            "menu-duo-square": 62147,
            "menu-duo-circle": 62148,
            "menu-circle": 62149,
            "menu-circle-alt": 62150,
            "menu-alt": 62151,
            "megaphone": 62152,
            "medal": 62153,
            "medal-star": 62154,
            "medal-check": 62155,
            "maximize": 62156,
            "mask-face": 62157,
            "map": 62158,
            "map-pin": 62159,
            "map-pin-line": 62160,
            "map-location": 62161,
            "magnet": 62162,
            "loyalty-club": 62163,
            "log-out": 62164,
            "log-in": 62165,
            "lock": 62166,
            "lock-viewfinder": 62167,
            "location-pin": 62168,
            "location-pin-times": 62169,
            "location-pin-star": 62170,
            "location-pin-slash": 62171,
            "location-pin-slash-alt": 62172,
            "location-pin-search": 62173,
            "location-pin-question": 62174,
            "location-pin-plus": 62175,
            "location-pin-minus": 62176,
            "location-pin-lock": 62177,
            "location-pin-heart": 62178,
            "location-pin-eye": 62179,
            "location-pin-exclamation": 62180,
            "location-pin-edit": 62181,
            "location-pin-check": 62182,
            "location-pin-alt": 62183,
            "location-crosshairs": 62184,
            "location-crosshairs-slash": 62185,
            "location-arrow": 62186,
            "location-arrow-square": 62187,
            "location-arrow-circle": 62188,
            "list": 62189,
            "link": 62190,
            "link-horizontal": 62191,
            "link-horizontal-alt": 62192,
            "link-broken": 62193,
            "link-broken-horizontal": 62194,
            "link-alt": 62195,
            "line-up-square": 62196,
            "line-up-circle": 62197,
            "line-down-square": 62198,
            "line-down-circle": 62199,
            "line-chart-dots": 62200,
            "line-chart-dots-square": 62201,
            "line-chart-dots-circle": 62202,
            "like": 62203,
            "like-tag": 62204,
            "like-square": 62205,
            "like-circle": 62206,
            "lightbulb": 62207,
            "light-emergency": 62208,
            "light-emergency-on": 62209,
            "life-ring": 62210,
            "leaf": 62211,
            "layout-web-9": 62212,
            "layout-web-8": 62213,
            "layout-web-7": 62214,
            "layout-web-6": 62215,
            "layout-web-5": 62216,
            "layout-web-4": 62217,
            "layout-web-3": 62218,
            "layout-web-2": 62219,
            "layout-web-12": 62220,
            "layout-web-11": 62221,
            "layout-web-10": 62222,
            "layout-web-1": 62223,
            "layer-group": 62224,
            "laptop": 62225,
            "laptop-code": 62226,
            "keypad": 62227,
            "keyhole-square": 62228,
            "keyhole-circle": 62229,
            "keyboard": 62230,
            "key": 62231,
            "key-square": 62232,
            "key-circle": 62233,
            "kaaba": 62234,
            "invoice": 62235,
            "info-square": 62236,
            "info-circle": 62237,
            "inbox": 62238,
            "inbox-upload": 62239,
            "inbox-empty": 62240,
            "inbox-download": 62241,
            "image": 62242,
            "image-upload": 62243,
            "image-times": 62244,
            "image-plus": 62245,
            "image-minus": 62246,
            "image-gallery": 62247,
            "image-gallery-plus": 62248,
            "image-download": 62249,
            "image-check": 62250,
            "id-card": 62251,
            "id-badge": 62252,
            "hourglass": 62253,
            "hospital": 62254,
            "hospital-h-sign-square": 62255,
            "hospital-h-sign-circle": 62256,
            "home": 62257,
            "home-wifi": 62258,
            "home-user": 62259,
            "home-trend-up": 62260,
            "home-trend-down": 62261,
            "home-star": 62262,
            "home-shield": 62263,
            "home-search": 62264,
            "home-roof": 62265,
            "home-roof-wifi": 62266,
            "home-roof-user": 62267,
            "home-roof-trend-up": 62268,
            "home-roof-trend-down": 62269,
            "home-roof-star": 62270,
            "home-roof-shield": 62271,
            "home-roof-search": 62272,
            "home-roof-lock": 62273,
            "home-roof-heart": 62274,
            "home-roof-dollar": 62275,
            "home-roof-activity": 62276,
            "home-lock": 62277,
            "home-line": 62278,
            "home-heart": 62279,
            "home-dollar": 62280,
            "home-dash": 62281,
            "home-dash-wifi": 62282,
            "home-dash-user": 62283,
            "home-dash-trend-up": 62284,
            "home-dash-trend-down": 62285,
            "home-dash-star": 62286,
            "home-dash-shield": 62287,
            "home-dash-search": 62288,
            "home-dash-lock": 62289,
            "home-dash-heart": 62290,
            "home-dash-dollar": 62291,
            "home-dash-activity": 62292,
            "home-activity": 62293,
            "heart": 62294,
            "heart-times": 62295,
            "heart-tag": 62296,
            "heart-square": 62297,
            "heart-slash": 62298,
            "heart-pulse": 62299,
            "heart-plus": 62300,
            "heart-minus": 62301,
            "heart-line": 62302,
            "heart-circle": 62303,
            "heart-check": 62304,
            "headphones": 62305,
            "hashtag": 62306,
            "hard-drive": 62307,
            "hand-holding-user": 62308,
            "hand-holding-dollar": 62309,
            "hand-holding-dollar-circle": 62310,
            "grid-web-7": 62311,
            "grid-web-6": 62312,
            "grid-web-5": 62313,
            "grid-web-4": 62314,
            "grid-web-3": 62315,
            "grid-web-2": 62316,
            "grid-web-1": 62317,
            "grid-square": 62318,
            "grid-square-plus": 62319,
            "grid-square-circle": 62320,
            "grid-dividers": 62321,
            "grid-circle": 62322,
            "grid-2": 62323,
            "grid-1": 62324,
            "graduation-cap": 62325,
            "globe": 62326,
            "globe-stand": 62327,
            "globe-earth": 62328,
            "global-line": 62329,
            "glasses": 62330,
            "gift": 62331,
            "game-controller": 62332,
            "forward": 62333,
            "food-tray": 62334,
            "folder": 62335,
            "folder-user": 62336,
            "folder-upload": 62337,
            "folder-times": 62338,
            "folder-star": 62339,
            "folder-shield": 62340,
            "folder-settings": 62341,
            "folder-search": 62342,
            "folder-plus": 62343,
            "folder-open": 62344,
            "folder-music": 62345,
            "folder-minus": 62346,
            "folder-lock": 62347,
            "folder-import": 62348,
            "folder-heart": 62349,
            "folder-export": 62350,
            "folder-edit": 62351,
            "folder-download": 62352,
            "folder-connection": 62353,
            "folder-code": 62354,
            "folder-clock": 62355,
            "folder-check": 62356,
            "folder-ban": 62357,
            "folder-alt": 62358,
            "floppy-disk": 62359,
            "flask": 62360,
            "flask-round": 62361,
            "flashlight": 62362,
            "flashlight-fill": 62363,
            "flag": 62364,
            "flag-triangle": 62365,
            "fire": 62366,
            "fingerprint": 62367,
            "fingerprint-viewfinder": 62368,
            "filter": 62369,
            "filter-times": 62370,
            "filter-plus": 62371,
            "filter-minus": 62372,
            "filter-check": 62373,
            "film": 62374,
            "file": 62375,
            "file-user": 62376,
            "file-upload": 62377,
            "file-times": 62378,
            "file-text": 62379,
            "file-text-times": 62380,
            "file-text-star": 62381,
            "file-text-shield": 62382,
            "file-text-search": 62383,
            "file-text-plus": 62384,
            "file-text-minus": 62385,
            "file-text-lock": 62386,
            "file-text-heart": 62387,
            "file-text-edit": 62388,
            "file-text-check": 62389,
            "file-text-ban": 62390,
            "file-star": 62391,
            "file-shield": 62392,
            "file-settings": 62393,
            "file-search": 62394,
            "file-plus": 62395,
            "file-music": 62396,
            "file-minus": 62397,
            "file-lock": 62398,
            "file-list": 62399,
            "file-list-times": 62400,
            "file-list-star": 62401,
            "file-list-shield": 62402,
            "file-list-search": 62403,
            "file-list-plus": 62404,
            "file-list-minus": 62405,
            "file-list-lock": 62406,
            "file-list-heart": 62407,
            "file-list-edit": 62408,
            "file-list-check": 62409,
            "file-list-ban": 62410,
            "file-list-3-line": 62411,
            "file-import": 62412,
            "file-import-alt": 62413,
            "file-heart": 62414,
            "file-export": 62415,
            "file-export-alt": 62416,
            "file-edit": 62417,
            "file-download": 62418,
            "file-copy": 62419,
            "file-code": 62420,
            "file-clock": 62421,
            "file-check": 62422,
            "file-ban": 62423,
            "fast-forward": 62424,
            "fast-backward": 62425,
            "eye": 62426,
            "eye-slash": 62427,
            "eye-closed": 62428,
            "expand": 62429,
            "exclamation-square": 62430,
            "exclamation-circle": 62431,
            "exchange-vertical": 62432,
            "exchange-vertical-square": 62433,
            "exchange-vertical-circle": 62434,
            "exchange-horizontal": 62435,
            "exchange-horizontal-square": 62436,
            "exchange-horizontal-circle": 62437,
            "euro": 62438,
            "euro-square": 62439,
            "euro-circle": 62440,
            "ethereum": 62441,
            "ethereum-square": 62442,
            "ethereum-circle": 62443,
            "envelopes": 62444,
            "envelope": 62445,
            "envelope-times": 62446,
            "envelope-star": 62447,
            "envelope-shield": 62448,
            "envelope-settings": 62449,
            "envelope-search": 62450,
            "envelope-plus": 62451,
            "envelope-open": 62452,
            "envelope-notification": 62453,
            "envelope-minus": 62454,
            "envelope-lock": 62455,
            "envelope-heart": 62456,
            "envelope-eye": 62457,
            "envelope-edit": 62458,
            "envelope-clock": 62459,
            "envelope-check": 62460,
            "envelope-ban": 62461,
            "eject": 62462,
            "edit": 62463,
            "droplet": 62464,
            "droplet-slash": 62465,
            "drag-vertical": 62466,
            "drag-lines-vertical": 62467,
            "drag-lines-horizontal": 62468,
            "drag-horizontal": 62469,
            "download": 62470,
            "download-alt": 62471,
            "door-open": 62472,
            "door-closed": 62473,
            "dollar": 62474,
            "dollar-square": 62475,
            "dollar-send-circle": 62476,
            "dollar-receive-square": 62477,
            "dollar-receive-square-1": 62478,
            "dollar-receive-circle": 62479,
            "dollar-circle": 62480,
            "document": 62481,
            "document-list": 62482,
            "document-list-check": 62483,
            "dna": 62484,
            "dislike": 62485,
            "dislike-tag": 62486,
            "dislike-square": 62487,
            "dislike-circle": 62488,
            "discount-percent-fill": 62489,
            "disc": 62490,
            "diamond": 62491,
            "diamond-exclamation": 62492,
            "desktop": 62493,
            "desktop-mobile": 62494,
            "desktop-code": 62495,
            "delivery-cart": 62496,
            "delivery-cart-arrow-up": 62497,
            "delivery-cart-arrow-down": 62498,
            "delete-right": 62499,
            "delete-left": 62500,
            "database": 62501,
            "cursor": 62502,
            "cursor-click": 62503,
            "crown": 62504,
            "crown-alt": 62505,
            "credit-card": 62506,
            "credit-card-times": 62507,
            "credit-card-slash": 62508,
            "credit-card-plus": 62509,
            "credit-card-minus": 62510,
            "credit-card-edit": 62511,
            "credit-card-convert": 62512,
            "credit-card-check": 62513,
            "credit-card-change": 62514,
            "credit-card-ban": 62515,
            "cpu": 62516,
            "coupon": 62517,
            "coupon-star": 62518,
            "coupon-percent": 62519,
            "coupon-heart": 62520,
            "copyright-square": 62521,
            "copyright-circle": 62522,
            "copy": 62523,
            "copy-plus": 62524,
            "copy-check": 62525,
            "copy-alt": 62526,
            "contrast": 62527,
            "compress": 62528,
            "compass": 62529,
            "compass-needle": 62530,
            "comments": 62531,
            "comments-text": 62532,
            "comments-dots": 62533,
            "comment": 62534,
            "comment-times": 62535,
            "comment-times-alt": 62536,
            "comment-text": 62537,
            "comment-text-times": 62538,
            "comment-text-plus": 62539,
            "comment-text-notification": 62540,
            "comment-text-minus": 62541,
            "comment-text-check": 62542,
            "comment-star": 62543,
            "comment-shield": 62544,
            "comment-settings": 62545,
            "comment-search": 62546,
            "comment-question": 62547,
            "comment-plus": 62548,
            "comment-plus-alt": 62549,
            "comment-notification": 62550,
            "comment-minus": 62551,
            "comment-minus-alt": 62552,
            "comment-lock": 62553,
            "comment-info": 62554,
            "comment-heart": 62555,
            "comment-exclamation": 62556,
            "comment-edit": 62557,
            "comment-dots": 62558,
            "comment-dots-times": 62559,
            "comment-dots-plus": 62560,
            "comment-dots-notification": 62561,
            "comment-dots-minus": 62562,
            "comment-dots-check": 62563,
            "comment-code": 62564,
            "comment-clock": 62565,
            "comment-check": 62566,
            "comment-check-alt": 62567,
            "comment-activity": 62568,
            "coins": 62569,
            "coin": 62570,
            "coin-convert": 62571,
            "coin-card-transfer": 62572,
            "code": 62573,
            "code-square": 62574,
            "code-circle": 62575,
            "cloud": 62576,
            "cloud-upload": 62577,
            "cloud-times": 62578,
            "cloud-slash": 62579,
            "cloud-shield": 62580,
            "cloud-share": 62581,
            "cloud-plus": 62582,
            "cloud-minus": 62583,
            "cloud-lock": 62584,
            "cloud-download": 62585,
            "cloud-connection": 62586,
            "cloud-check": 62587,
            "closed-captioning": 62588,
            "clock": 62589,
            "clock-square": 62590,
            "clock-square-alt": 62591,
            "clock-alt": 62592,
            "clipboard": 62593,
            "clipboard-times": 62594,
            "clipboard-text": 62595,
            "clipboard-star": 62596,
            "clipboard-search": 62597,
            "clipboard-plus": 62598,
            "clipboard-minus": 62599,
            "clipboard-list": 62600,
            "clipboard-list-check": 62601,
            "clipboard-heart": 62602,
            "clipboard-edit": 62603,
            "clipboard-check": 62604,
            "chromecast": 62605,
            "chevron-up": 62606,
            "chevron-right": 62607,
            "chevron-left": 62608,
            "chevron-down": 62609,
            "chevron-big-up": 62610,
            "chevron-big-right": 62611,
            "chevron-big-left": 62612,
            "chevron-big-down": 62613,
            "checkbox-square-fill": 62614,
            "check": 62615,
            "check-square": 62616,
            "check-double": 62617,
            "check-circle": 62618,
            "chats": 62619,
            "chats-text": 62620,
            "chats-dots": 62621,
            "chat": 62622,
            "chat-times": 62623,
            "chat-times-alt": 62624,
            "chat-text": 62625,
            "chat-text-times": 62626,
            "chat-text-plus": 62627,
            "chat-text-notification": 62628,
            "chat-text-minus": 62629,
            "chat-text-check": 62630,
            "chat-star": 62631,
            "chat-shield": 62632,
            "chat-settings": 62633,
            "chat-search": 62634,
            "chat-question": 62635,
            "chat-plus": 62636,
            "chat-plus-alt": 62637,
            "chat-notification": 62638,
            "chat-minus": 62639,
            "chat-minus-alt": 62640,
            "chat-lock": 62641,
            "chat-info": 62642,
            "chat-heart": 62643,
            "chat-exclamation": 62644,
            "chat-edit": 62645,
            "chat-dots": 62646,
            "chat-dots-times": 62647,
            "chat-dots-plus": 62648,
            "chat-dots-notification": 62649,
            "chat-dots-minus": 62650,
            "chat-dots-check": 62651,
            "chat-code": 62652,
            "chat-clock": 62653,
            "chat-check": 62654,
            "chat-check-alt": 62655,
            "chat-activity": 62656,
            "chart-trend-up": 62657,
            "chart-trend-down": 62658,
            "chart-pyramid": 62659,
            "chart-pie": 62660,
            "chart-line": 62661,
            "chart-line-down": 62662,
            "chart-line-dots": 62663,
            "chart-line-1": 62664,
            "chart-bar": 62665,
            "chart-bar-vertical": 62666,
            "chart-bar-square": 62667,
            "chart-bar-horizontal": 62668,
            "chart-bar-circle": 62669,
            "chart-bar-alt": 62670,
            "certificate": 62671,
            "castle": 62672,
            "caret-up": 62673,
            "caret-up-square": 62674,
            "caret-up-circle": 62675,
            "caret-right": 62676,
            "caret-right-square": 62677,
            "caret-right-circle": 62678,
            "caret-left": 62679,
            "caret-left-square": 62680,
            "caret-left-circle": 62681,
            "caret-down": 62682,
            "caret-down-square": 62683,
            "caret-down-circle": 62684,
            "camera": 62685,
            "camera-square": 62686,
            "camera-slash": 62687,
            "camera-rotate": 62688,
            "camera-circle": 62689,
            "calendar": 62690,
            "calendar-times": 62691,
            "calendar-times-alt": 62692,
            "calendar-star": 62693,
            "calendar-search": 62694,
            "calendar-plus": 62695,
            "calendar-plus-alt": 62696,
            "calendar-minus": 62697,
            "calendar-minus-alt": 62698,
            "calendar-lock": 62699,
            "calendar-heart": 62700,
            "calendar-empty": 62701,
            "calendar-empty-alt": 62702,
            "calendar-edit": 62703,
            "calendar-clock": 62704,
            "calendar-check": 62705,
            "calendar-check-alt": 62706,
            "calculator": 62707,
            "calculator-simple": 62708,
            "cake": 62709,
            "cabinet-filing": 62710,
            "bus": 62711,
            "buildings": 62712,
            "buildings-alt": 62713,
            "building": 62714,
            "building-tree": 62715,
            "building-coins": 62716,
            "bug": 62717,
            "bug-slash": 62718,
            "brush": 62719,
            "brush-alt": 62720,
            "briefcase": 62721,
            "briefcase-times": 62722,
            "briefcase-plus": 62723,
            "briefcase-money": 62724,
            "briefcase-minus": 62725,
            "briefcase-check": 62726,
            "brain": 62727,
            "boxes": 62728,
            "box": 62729,
            "box-times": 62730,
            "box-search": 62731,
            "box-plus": 62732,
            "box-minus": 62733,
            "box-check": 62734,
            "books": 62735,
            "bookmarks": 62736,
            "bookmarks-user": 62737,
            "bookmarks-times": 62738,
            "bookmarks-star": 62739,
            "bookmarks-settings": 62740,
            "bookmarks-plus": 62741,
            "bookmarks-minus": 62742,
            "bookmarks-heart": 62743,
            "bookmarks-check": 62744,
            "bookmark": 62745,
            "bookmark-user": 62746,
            "bookmark-times": 62747,
            "bookmark-star": 62748,
            "bookmark-settings": 62749,
            "bookmark-plus": 62750,
            "bookmark-minus": 62751,
            "bookmark-heart": 62752,
            "bookmark-check": 62753,
            "book": 62754,
            "book-text": 62755,
            "book-open": 62756,
            "book-open-text": 62757,
            "book-open-reader": 62758,
            "book-open-bookmark": 62759,
            "book-empty": 62760,
            "book-bookmark": 62761,
            "book-alt": 62762,
            "bone": 62763,
            "bone-break": 62764,
            "bolt": 62765,
            "bolt-square": 62766,
            "bolt-square-alt": 62767,
            "bolt-slash": 62768,
            "bolt-slash-alt": 62769,
            "bolt-circle": 62770,
            "bolt-circle-alt": 62771,
            "bolt-alt": 62772,
            "bluetooth": 62773,
            "bitcoin": 62774,
            "bitcoin-square": 62775,
            "bitcoin-circle": 62776,
            "bezier": 62777,
            "bell": 62778,
            "bell-times": 62779,
            "bell-slash": 62780,
            "bell-plus": 62781,
            "bell-on": 62782,
            "bell-notification": 62783,
            "bell-minus": 62784,
            "bell-exclamation": 62785,
            "bed": 62786,
            "battery-half": 62787,
            "battery-full": 62788,
            "battery-empty": 62789,
            "battery-bolt": 62790,
            "bank": 62791,
            "bank-card-line": 62792,
            "bandage": 62793,
            "ban": 62794,
            "badge": 62795,
            "badge-like": 62796,
            "badge-dollar": 62797,
            "badge-discount": 62798,
            "badge-discount-alt": 62799,
            "badge-check": 62800,
            "backward": 62801,
            "backpack": 62802,
            "award": 62803,
            "award-star": 62804,
            "award-check": 62805,
            "atom": 62806,
            "at": 62807,
            "arrows-up-down": 62808,
            "arrows-repeat": 62809,
            "arrows-repeat-square": 62810,
            "arrows-repeat-circle": 62811,
            "arrows-move": 62812,
            "arrows-left-right": 62813,
            "arrows-expand": 62814,
            "arrows-compress": 62815,
            "arrow-up": 62816,
            "arrow-up-to-line": 62817,
            "arrow-up-square": 62818,
            "arrow-up-small": 62819,
            "arrow-up-right": 62820,
            "arrow-up-right-square": 62821,
            "arrow-up-right-small": 62822,
            "arrow-up-right-circle": 62823,
            "arrow-up-left": 62824,
            "arrow-up-left-square": 62825,
            "arrow-up-left-small": 62826,
            "arrow-up-left-circle": 62827,
            "arrow-up-from-line": 62828,
            "arrow-up-circle": 62829,
            "arrow-turn-up-right": 62830,
            "arrow-turn-up-left": 62831,
            "arrow-turn-right-up": 62832,
            "arrow-turn-right-down": 62833,
            "arrow-turn-left-up": 62834,
            "arrow-turn-left-down": 62835,
            "arrow-turn-down-right": 62836,
            "arrow-turn-down-left": 62837,
            "arrow-share": 62838,
            "arrow-right": 62839,
            "arrow-right-to-line": 62840,
            "arrow-right-square": 62841,
            "arrow-right-small": 62842,
            "arrow-right-line": 62843,
            "arrow-right-from-line": 62844,
            "arrow-right-circle": 62845,
            "arrow-reply": 62846,
            "arrow-left": 62847,
            "arrow-left-to-line": 62848,
            "arrow-left-square": 62849,
            "arrow-left-small": 62850,
            "arrow-left-from-line": 62851,
            "arrow-left-circle": 62852,
            "arrow-left-arrow-right": 62853,
            "arrow-left-arrow-right-square": 62854,
            "arrow-left-arrow-right-circle": 62855,
            "arrow-import": 62856,
            "arrow-forward": 62857,
            "arrow-forward-square": 62858,
            "arrow-forward-square-alt": 62859,
            "arrow-forward-circle": 62860,
            "arrow-forward-circle-alt": 62861,
            "arrow-forward-alt": 62862,
            "arrow-export": 62863,
            "arrow-down": 62864,
            "arrow-down-to-line": 62865,
            "arrow-down-square": 62866,
            "arrow-down-small": 62867,
            "arrow-down-right": 62868,
            "arrow-down-right-square": 62869,
            "arrow-down-right-small": 62870,
            "arrow-down-right-circle": 62871,
            "arrow-down-left": 62872,
            "arrow-down-left-square": 62873,
            "arrow-down-left-small": 62874,
            "arrow-down-left-circle": 62875,
            "arrow-down-from-line": 62876,
            "arrow-down-circle": 62877,
            "arrow-down-arrow-up": 62878,
            "arrow-down-arrow-up-square": 62879,
            "arrow-down-arrow-up-circle": 62880,
            "arrow-back": 62881,
            "arrow-back-square": 62882,
            "arrow-back-square-alt": 62883,
            "arrow-back-circle": 62884,
            "arrow-back-circle-alt": 62885,
            "arrow-back-alt": 62886,
            "archway": 62887,
            "archive": 62888,
            "angles-up": 62889,
            "angles-up-small": 62890,
            "angles-right": 62891,
            "angles-right-small": 62892,
            "angles-left": 62893,
            "angles-left-small": 62894,
            "angles-left-right": 62895,
            "angles-down": 62896,
            "angles-down-up": 62897,
            "angles-down-small": 62898,
            "angle-up": 62899,
            "angle-up-square": 62900,
            "angle-up-small": 62901,
            "angle-up-circle": 62902,
            "angle-right": 62903,
            "angle-right-square": 62904,
            "angle-right-small": 62905,
            "angle-right-circle": 62906,
            "angle-left": 62907,
            "angle-left-square": 62908,
            "angle-left-small": 62909,
            "angle-left-circle": 62910,
            "angle-down": 62911,
            "angle-down-square": 62912,
            "angle-down-small": 62913,
            "angle-down-circle": 62914,
            "alarm-times": 62915,
            "alarm-times-alt": 62916,
            "alarm-plus": 62917,
            "alarm-plus-alt": 62918,
            "alarm-minus": 62919,
            "alarm-minus-alt": 62920,
            "alarm-edit": 62921,
            "alarm-clock": 62922,
            "alarm-clock-empty": 62923,
            "alarm-clock-alt": 62924,
            "alarm-check": 62925,
            "alarm-check-alt": 62926,
            "airplay": 62927,
            "airplay-alt": 62928,
            "address-book": 62929,
            "activity-star-square": 62930,
            "activity-star-circle": 62931,
            "activity-square": 62932,
            "activity-notification-square": 62933,
            "activity-notification-circle": 62934,
            "activity-heart-square": 62935,
            "activity-heart-circle": 62936,
            "activity-circle": 62937
        },
        "regular": {
            "wifi": 61697,
            "wifi-slash": 61698,
            "wave-pulse": 61699,
            "watch-square": 61700,
            "watch-circle": 61701,
            "warehouse": 61702,
            "wallet": 61703,
            "wallet-line": 61704,
            "wallet-3-line": 61705,
            "volume": 61706,
            "volume-times": 61707,
            "volume-slash": 61708,
            "volume-plus": 61709,
            "volume-minus": 61710,
            "volume-low": 61711,
            "volume-high": 61712,
            "volume-high-slash": 61713,
            "voicemail": 61714,
            "virus-covid": 61715,
            "virus-covid-slash": 61716,
            "video": 61717,
            "video-square": 61718,
            "video-slash": 61719,
            "video-plus": 61720,
            "video-play": 61721,
            "video-outgoing": 61722,
            "video-incoming": 61723,
            "video-eye": 61724,
            "video-circle": 61725,
            "verified": 61726,
            "vector": 61727,
            "users": 61728,
            "users-slash": 61729,
            "users-group": 61730,
            "users-group-slash": 61731,
            "users-group-alt": 61732,
            "users-alt": 61733,
            "user": 61734,
            "user-viewfinder": 61735,
            "user-times": 61736,
            "user-times-bottom": 61737,
            "user-times-alt": 61738,
            "user-tag": 61739,
            "user-star": 61740,
            "user-square": 61741,
            "user-smile-line": 61742,
            "user-slash": 61743,
            "user-shield": 61744,
            "user-settings": 61745,
            "user-search": 61746,
            "user-plus": 61747,
            "user-plus-bottom": 61748,
            "user-plus-alt": 61749,
            "user-minus": 61750,
            "user-minus-bottom": 61751,
            "user-minus-alt": 61752,
            "user-lock": 61753,
            "user-heart": 61754,
            "user-eye": 61755,
            "user-edit": 61756,
            "user-dollar": 61757,
            "user-code": 61758,
            "user-clock": 61759,
            "user-circle": 61760,
            "user-check": 61761,
            "user-check-bottom": 61762,
            "user-check-alt": 61763,
            "user-change": 61764,
            "user-ban": 61765,
            "user-alt": 61766,
            "usb-drive": 61767,
            "upload": 61768,
            "upload-alt": 61769,
            "unlock": 61770,
            "university": 61771,
            "tv": 61772,
            "tv-retro": 61773,
            "tv-play": 61774,
            "truck": 61775,
            "trophy": 61776,
            "trophy-star": 61777,
            "triangle": 61778,
            "triangle-exclamation": 61779,
            "trend-up": 61780,
            "trend-up-square": 61781,
            "trend-up-circle": 61782,
            "trend-down": 61783,
            "trend-down-square": 61784,
            "trend-down-circle": 61785,
            "tree": 61786,
            "trash": 61787,
            "trash-undo": 61788,
            "trash-times": 61789,
            "trash-slash": 61790,
            "trash-redo": 61791,
            "trash-plus": 61792,
            "trash-minus": 61793,
            "trash-check": 61794,
            "traffic-cone": 61795,
            "tooth": 61796,
            "tool": 61797,
            "toggle-on": 61798,
            "toggle-on-rectangle": 61799,
            "toggle-on-alt": 61800,
            "toggle-off": 61801,
            "toggle-off-rectangle": 61802,
            "toggle-off-alt": 61803,
            "times": 61804,
            "times-square": 61805,
            "times-circle": 61806,
            "time-past": 61807,
            "time-forward": 61808,
            "thumbtack": 61809,
            "thumbtack-vertical": 61810,
            "thermometer": 61811,
            "test-tube": 61812,
            "test-tube-alt": 61813,
            "telescope": 61814,
            "taxi": 61815,
            "target": 61816,
            "tags": 61817,
            "tag": 61818,
            "tablet": 61819,
            "syringe": 61820,
            "sun": 61821,
            "story": 61822,
            "storeforgood": 61823,
            "store": 61824,
            "store-for-good": 61825,
            "stora-loyalty-club": 61826,
            "stopwatch": 61827,
            "stopwatch-times": 61828,
            "stopwatch-times-alt": 61829,
            "stopwatch-plus": 61830,
            "stopwatch-plus-alt": 61831,
            "stopwatch-minus": 61832,
            "stopwatch-minus-alt": 61833,
            "stopwatch-empty": 61834,
            "stopwatch-edit": 61835,
            "stopwatch-check": 61836,
            "stopwatch-check-alt": 61837,
            "stopwatch-alt": 61838,
            "stop": 61839,
            "stop-circle": 61840,
            "sticky-note-text-square": 61841,
            "sticky-note-text-circle": 61842,
            "sticky-note-square": 61843,
            "sticky-note-circle": 61844,
            "stethoscope": 61845,
            "step-forward": 61846,
            "step-backward": 61847,
            "star": 61848,
            "star-tag": 61849,
            "star-square": 61850,
            "star-slash": 61851,
            "star-shooting": 61852,
            "star-shooting-horizontal": 61853,
            "star-magic": 61854,
            "star-half": 61855,
            "star-circle": 61856,
            "speedometer": 61857,
            "speaker": 61858,
            "sparkle": 61859,
            "sort": 61860,
            "sort-vertical": 61861,
            "sort-horizontal": 61862,
            "sort-descending": 61863,
            "sort-descending-square": 61864,
            "sort-descending-circle": 61865,
            "sort-ascending": 61866,
            "sort-ascending-square": 61867,
            "sort-ascending-circle": 61868,
            "sofa": 61869,
            "sliders-vertical": 61870,
            "sliders-vertical-alt": 61871,
            "sliders-horizontal": 61872,
            "sliders-horizontal-alt": 61873,
            "sim-card": 61874,
            "sim-card-2": 61875,
            "sim-card-1": 61876,
            "signs-direction": 61877,
            "signal-stream": 61878,
            "sign-direction-right": 61879,
            "sign-direction-left": 61880,
            "shuffle": 61881,
            "shopping-cart": 61882,
            "shopping-cart-times": 61883,
            "shopping-cart-star": 61884,
            "shopping-cart-plus": 61885,
            "shopping-cart-minus": 61886,
            "shopping-cart-line": 61887,
            "shopping-cart-heart": 61888,
            "shopping-cart-check": 61889,
            "shopping-cart-arrow-top": 61890,
            "shopping-cart-arrow-down": 61891,
            "shopping-basket": 61892,
            "shopping-basket-times": 61893,
            "shopping-basket-star": 61894,
            "shopping-basket-plus": 61895,
            "shopping-basket-minus": 61896,
            "shopping-basket-heart": 61897,
            "shopping-basket-check": 61898,
            "shopping-basket-arrow-up": 61899,
            "shopping-basket-arrow-down": 61900,
            "shopping-bag": 61901,
            "shopping-bag-alt": 61902,
            "shield": 61903,
            "shield-user": 61904,
            "shield-times": 61905,
            "shield-star": 61906,
            "shield-slash": 61907,
            "shield-search": 61908,
            "shield-question": 61909,
            "shield-plus": 61910,
            "shield-play": 61911,
            "shield-minus": 61912,
            "shield-lock": 61913,
            "shield-heart": 61914,
            "shield-exclamation": 61915,
            "shield-check": 61916,
            "shield-bolt": 61917,
            "share": 61918,
            "settings": 61919,
            "server": 61920,
            "send": 61921,
            "send-right": 61922,
            "search": 61923,
            "search-text": 61924,
            "search-plus": 61925,
            "search-minus": 61926,
            "search-line": 61927,
            "sd-card": 61928,
            "scissors": 61929,
            "school": 61930,
            "scanner": 61931,
            "scan": 61932,
            "scan-qr": 61933,
            "scan-circle": 61934,
            "sack-dollar": 61935,
            "route": 61936,
            "rotate": 61937,
            "rotate-square": 61938,
            "rotate-right": 61939,
            "rotate-right-square": 61940,
            "rotate-right-circle": 61941,
            "rotate-left": 61942,
            "rotate-left-square": 61943,
            "rotate-left-circle": 61944,
            "rotate-circle": 61945,
            "rocket": 61946,
            "rocket-launch": 61947,
            "road": 61948,
            "restaurant": 61949,
            "repeat": 61950,
            "registered-square": 61951,
            "registered-circle": 61952,
            "receipt": 61953,
            "receipt-text": 61954,
            "receipt-text-alt": 61955,
            "receipt-star": 61956,
            "receipt-star-alt": 61957,
            "receipt-percent": 61958,
            "receipt-percent-alt": 61959,
            "receipt-list": 61960,
            "receipt-list-alt": 61961,
            "receipt-heart": 61962,
            "receipt-heart-alt": 61963,
            "receipt-alt": 61964,
            "ranking": 61965,
            "radio": 61966,
            "radio-button-fill": 61967,
            "radiation": 61968,
            "radiation-circle": 61969,
            "radar": 61970,
            "question-square": 61971,
            "question-circle": 61972,
            "puzzle": 61973,
            "print": 61974,
            "print-slash": 61975,
            "presentation": 61976,
            "presentation-user": 61977,
            "presentation-trend-up": 61978,
            "presentation-trend-down": 61979,
            "presentation-text": 61980,
            "presentation-poll": 61981,
            "presentation-play": 61982,
            "presentation-pen": 61983,
            "presentation-lightbulb": 61984,
            "presentation-dollar": 61985,
            "presentation-chart-pie": 61986,
            "presentation-chart-line": 61987,
            "power-off": 61988,
            "power-off-square": 61989,
            "power-off-circle": 61990,
            "poll-vertical-square": 61991,
            "poll-vertical-circle": 61992,
            "poll-horizontal-square": 61993,
            "poll-horizontal-circle": 61994,
            "plus": 61995,
            "plus-square": 61996,
            "plus-circle": 61997,
            "plug": 61998,
            "playlist": 61999,
            "play": 62e3,
            "play-square": 62001,
            "play-pause": 62002,
            "play-circle": 62003,
            "pills": 62004,
            "phone": 62005,
            "phone-times": 62006,
            "phone-slash": 62007,
            "phone-plus": 62008,
            "phone-outgoing": 62009,
            "phone-office": 62010,
            "phone-missed": 62011,
            "phone-incoming": 62012,
            "phone-hangup": 62013,
            "phone-flip": 62014,
            "phone-call": 62015,
            "phone-2": 62016,
            "phone-1": 62017,
            "percent": 62018,
            "percent-tag": 62019,
            "percent-square": 62020,
            "percent-circle": 62021,
            "pen": 62022,
            "pen-tool": 62023,
            "pen-line": 62024,
            "pause": 62025,
            "pause-circle": 62026,
            "parking-square": 62027,
            "parking-circle": 62028,
            "papers": 62029,
            "papers-text": 62030,
            "paperclip": 62031,
            "palette": 62032,
            "package": 62033,
            "package-star": 62034,
            "package-heart": 62035,
            "package-dollar": 62036,
            "package-check": 62037,
            "octagon": 62038,
            "octagon-times": 62039,
            "octagon-plus": 62040,
            "octagon-minus": 62041,
            "octagon-exclamation": 62042,
            "octagon-check": 62043,
            "nut": 62044,
            "notification-line": 62045,
            "notebook": 62046,
            "note": 62047,
            "note-text": 62048,
            "note-text-square": 62049,
            "note-list": 62050,
            "note-list-square": 62051,
            "note-list-check": 62052,
            "note-list-check-square": 62053,
            "newspaper": 62054,
            "music": 62055,
            "music-note": 62056,
            "music-list": 62057,
            "mug": 62058,
            "mug-hot": 62059,
            "mouse": 62060,
            "mosque": 62061,
            "mortar-pestle": 62062,
            "more-vertical": 62063,
            "more-vertical-square": 62064,
            "more-vertical-circle": 62065,
            "more-horizontal": 62066,
            "more-horizontal-square": 62067,
            "more-horizontal-circle": 62068,
            "moon": 62069,
            "monitor-waveform": 62070,
            "money-withdrawal": 62071,
            "money-convert": 62072,
            "money-bills": 62073,
            "money-bill": 62074,
            "money-bill-times": 62075,
            "money-bill-send": 62076,
            "money-bill-receive": 62077,
            "money-bill-plus": 62078,
            "money-bill-minus": 62079,
            "money-bill-convert": 62080,
            "money-bill-clock": 62081,
            "money-bill-check": 62082,
            "money-bill-ban": 62083,
            "mobile": 62084,
            "minus": 62085,
            "minus-square": 62086,
            "minus-circle": 62087,
            "minimize": 62088,
            "microscope": 62089,
            "microphone": 62090,
            "microphone-stand": 62091,
            "microphone-slash": 62092,
            "messages": 62093,
            "messages-text": 62094,
            "messages-dots": 62095,
            "message": 62096,
            "message-times": 62097,
            "message-times-alt": 62098,
            "message-text": 62099,
            "message-text-times": 62100,
            "message-text-plus": 62101,
            "message-text-notification": 62102,
            "message-text-minus": 62103,
            "message-text-check": 62104,
            "message-star": 62105,
            "message-shield": 62106,
            "message-settings": 62107,
            "message-search": 62108,
            "message-question": 62109,
            "message-plus": 62110,
            "message-plus-alt": 62111,
            "message-notification": 62112,
            "message-minus": 62113,
            "message-minus-alt": 62114,
            "message-lock": 62115,
            "message-info": 62116,
            "message-heart": 62117,
            "message-exclamation": 62118,
            "message-edit": 62119,
            "message-dots": 62120,
            "message-dots-times": 62121,
            "message-dots-plus": 62122,
            "message-dots-notification": 62123,
            "message-dots-minus": 62124,
            "message-dots-check": 62125,
            "message-code": 62126,
            "message-clock": 62127,
            "message-check": 62128,
            "message-check-alt": 62129,
            "message-activity": 62130,
            "menu": 62131,
            "menu-square": 62132,
            "menu-square-alt": 62133,
            "menu-search": 62134,
            "menu-right": 62135,
            "menu-right-square": 62136,
            "menu-right-square-alt": 62137,
            "menu-right-circle": 62138,
            "menu-right-circle-alt": 62139,
            "menu-right-alt": 62140,
            "menu-left": 62141,
            "menu-left-square": 62142,
            "menu-left-square-alt": 62143,
            "menu-left-circle": 62144,
            "menu-left-circle-alt": 62145,
            "menu-left-alt": 62146,
            "menu-duo": 62147,
            "menu-duo-square": 62148,
            "menu-duo-circle": 62149,
            "menu-circle": 62150,
            "menu-circle-alt": 62151,
            "menu-alt": 62152,
            "megaphone": 62153,
            "medal": 62154,
            "medal-star": 62155,
            "medal-check": 62156,
            "maximize": 62157,
            "mask-face": 62158,
            "map": 62159,
            "map-pin": 62160,
            "map-pin-line": 62161,
            "map-location": 62162,
            "magnet": 62163,
            "log-out": 62164,
            "log-in": 62165,
            "lock": 62166,
            "lock-viewfinder": 62167,
            "location-pin": 62168,
            "location-pin-times": 62169,
            "location-pin-star": 62170,
            "location-pin-slash": 62171,
            "location-pin-slash-alt": 62172,
            "location-pin-search": 62173,
            "location-pin-question": 62174,
            "location-pin-plus": 62175,
            "location-pin-minus": 62176,
            "location-pin-lock": 62177,
            "location-pin-heart": 62178,
            "location-pin-eye": 62179,
            "location-pin-exclamation": 62180,
            "location-pin-edit": 62181,
            "location-pin-check": 62182,
            "location-pin-alt": 62183,
            "location-crosshairs": 62184,
            "location-crosshairs-slash": 62185,
            "location-arrow": 62186,
            "location-arrow-square": 62187,
            "location-arrow-circle": 62188,
            "list": 62189,
            "link": 62190,
            "link-horizontal": 62191,
            "link-horizontal-alt": 62192,
            "link-broken": 62193,
            "link-broken-horizontal": 62194,
            "link-alt": 62195,
            "line-up-square": 62196,
            "line-up-circle": 62197,
            "line-down-square": 62198,
            "line-down-circle": 62199,
            "line-chart-dots": 62200,
            "line-chart-dots-square": 62201,
            "line-chart-dots-circle": 62202,
            "like": 62203,
            "like-tag": 62204,
            "like-square": 62205,
            "like-circle": 62206,
            "lightbulb": 62207,
            "light-emergency": 62208,
            "light-emergency-on": 62209,
            "life-ring": 62210,
            "leaf": 62211,
            "layout-web-9": 62212,
            "layout-web-8": 62213,
            "layout-web-7": 62214,
            "layout-web-6": 62215,
            "layout-web-5": 62216,
            "layout-web-4": 62217,
            "layout-web-3": 62218,
            "layout-web-2": 62219,
            "layout-web-12": 62220,
            "layout-web-11": 62221,
            "layout-web-10": 62222,
            "layout-web-1": 62223,
            "layer-group": 62224,
            "laptop": 62225,
            "laptop-code": 62226,
            "keypad": 62227,
            "keyhole-square": 62228,
            "keyhole-circle": 62229,
            "keyboard": 62230,
            "key": 62231,
            "key-square": 62232,
            "key-circle": 62233,
            "kaaba": 62234,
            "invoice": 62235,
            "info-square": 62236,
            "info-circle": 62237,
            "inbox": 62238,
            "inbox-upload": 62239,
            "inbox-empty": 62240,
            "inbox-download": 62241,
            "image": 62242,
            "image-upload": 62243,
            "image-times": 62244,
            "image-plus": 62245,
            "image-minus": 62246,
            "image-gallery": 62247,
            "image-gallery-plus": 62248,
            "image-download": 62249,
            "image-check": 62250,
            "id-card": 62251,
            "id-badge": 62252,
            "hourglass": 62253,
            "hospital": 62254,
            "hospital-h-sign-square": 62255,
            "hospital-h-sign-circle": 62256,
            "home": 62257,
            "home-wifi": 62258,
            "home-user": 62259,
            "home-trend-up": 62260,
            "home-trend-down": 62261,
            "home-star": 62262,
            "home-shield": 62263,
            "home-search": 62264,
            "home-roof": 62265,
            "home-roof-wifi": 62266,
            "home-roof-user": 62267,
            "home-roof-trend-up": 62268,
            "home-roof-trend-down": 62269,
            "home-roof-star": 62270,
            "home-roof-shield": 62271,
            "home-roof-search": 62272,
            "home-roof-lock": 62273,
            "home-roof-heart": 62274,
            "home-roof-dollar": 62275,
            "home-roof-activity": 62276,
            "home-lock": 62277,
            "home-line": 62278,
            "home-heart": 62279,
            "home-dollar": 62280,
            "home-dash": 62281,
            "home-dash-wifi": 62282,
            "home-dash-user": 62283,
            "home-dash-trend-up": 62284,
            "home-dash-trend-down": 62285,
            "home-dash-star": 62286,
            "home-dash-shield": 62287,
            "home-dash-search": 62288,
            "home-dash-lock": 62289,
            "home-dash-heart": 62290,
            "home-dash-dollar": 62291,
            "home-dash-activity": 62292,
            "home-activity": 62293,
            "heart": 62294,
            "heart-times": 62295,
            "heart-tag": 62296,
            "heart-square": 62297,
            "heart-slash": 62298,
            "heart-pulse": 62299,
            "heart-plus": 62300,
            "heart-minus": 62301,
            "heart-line": 62302,
            "heart-circle": 62303,
            "heart-check": 62304,
            "headphones": 62305,
            "hashtag": 62306,
            "hard-drive": 62307,
            "hand-holding-user": 62308,
            "hand-holding-dollar": 62309,
            "hand-holding-dollar-circle": 62310,
            "grid-web-7": 62311,
            "grid-web-6": 62312,
            "grid-web-5": 62313,
            "grid-web-4": 62314,
            "grid-web-3": 62315,
            "grid-web-2": 62316,
            "grid-web-1": 62317,
            "grid-square": 62318,
            "grid-square-plus": 62319,
            "grid-square-circle": 62320,
            "grid-dividers": 62321,
            "grid-circle": 62322,
            "grid-2": 62323,
            "grid-1": 62324,
            "graduation-cap": 62325,
            "globe": 62326,
            "globe-stand": 62327,
            "globe-line": 62328,
            "globe-earth": 62329,
            "glasses": 62330,
            "gift": 62331,
            "game-controller": 62332,
            "forward": 62333,
            "food-tray": 62334,
            "folder": 62335,
            "folder-user": 62336,
            "folder-upload": 62337,
            "folder-times": 62338,
            "folder-star": 62339,
            "folder-shield": 62340,
            "folder-settings": 62341,
            "folder-search": 62342,
            "folder-plus": 62343,
            "folder-open": 62344,
            "folder-music": 62345,
            "folder-minus": 62346,
            "folder-lock": 62347,
            "folder-import": 62348,
            "folder-heart": 62349,
            "folder-export": 62350,
            "folder-edit": 62351,
            "folder-download": 62352,
            "folder-connection": 62353,
            "folder-code": 62354,
            "folder-clock": 62355,
            "folder-check": 62356,
            "folder-ban": 62357,
            "folder-alt": 62358,
            "floppy-disk": 62359,
            "flask": 62360,
            "flask-round": 62361,
            "flashlight": 62362,
            "flashlight-fill": 62363,
            "flag": 62364,
            "flag-triangle": 62365,
            "fire": 62366,
            "fingerprint": 62367,
            "fingerprint-viewfinder": 62368,
            "filter": 62369,
            "filter-times": 62370,
            "filter-plus": 62371,
            "filter-minus": 62372,
            "filter-check": 62373,
            "film": 62374,
            "file": 62375,
            "file-user": 62376,
            "file-upload": 62377,
            "file-times": 62378,
            "file-text": 62379,
            "file-text-times": 62380,
            "file-text-star": 62381,
            "file-text-shield": 62382,
            "file-text-search": 62383,
            "file-text-plus": 62384,
            "file-text-minus": 62385,
            "file-text-lock": 62386,
            "file-text-heart": 62387,
            "file-text-edit": 62388,
            "file-text-check": 62389,
            "file-text-ban": 62390,
            "file-star": 62391,
            "file-shield": 62392,
            "file-settings": 62393,
            "file-search": 62394,
            "file-plus": 62395,
            "file-music": 62396,
            "file-minus": 62397,
            "file-lock": 62398,
            "file-list": 62399,
            "file-list-times": 62400,
            "file-list-star": 62401,
            "file-list-shield": 62402,
            "file-list-search": 62403,
            "file-list-plus": 62404,
            "file-list-minus": 62405,
            "file-list-lock": 62406,
            "file-list-heart": 62407,
            "file-list-edit": 62408,
            "file-list-check": 62409,
            "file-list-ban": 62410,
            "file-list-3-line": 62411,
            "file-import": 62412,
            "file-import-alt": 62413,
            "file-heart": 62414,
            "file-export": 62415,
            "file-export-alt": 62416,
            "file-edit": 62417,
            "file-download": 62418,
            "file-copy": 62419,
            "file-code": 62420,
            "file-clock": 62421,
            "file-check": 62422,
            "file-ban": 62423,
            "fast-forward": 62424,
            "fast-backward": 62425,
            "eye": 62426,
            "eye-slash": 62427,
            "eye-closed": 62428,
            "expand": 62429,
            "exclamation-square": 62430,
            "exclamation-circle": 62431,
            "exchange-vertical": 62432,
            "exchange-vertical-square": 62433,
            "exchange-vertical-circle": 62434,
            "exchange-horizontal": 62435,
            "exchange-horizontal-square": 62436,
            "exchange-horizontal-circle": 62437,
            "euro": 62438,
            "euro-square": 62439,
            "euro-circle": 62440,
            "ethereum": 62441,
            "ethereum-square": 62442,
            "ethereum-circle": 62443,
            "envelopes": 62444,
            "envelope": 62445,
            "envelope-times": 62446,
            "envelope-star": 62447,
            "envelope-shield": 62448,
            "envelope-settings": 62449,
            "envelope-search": 62450,
            "envelope-plus": 62451,
            "envelope-open": 62452,
            "envelope-notification": 62453,
            "envelope-minus": 62454,
            "envelope-lock": 62455,
            "envelope-heart": 62456,
            "envelope-eye": 62457,
            "envelope-edit": 62458,
            "envelope-clock": 62459,
            "envelope-check": 62460,
            "envelope-ban": 62461,
            "eject": 62462,
            "edit": 62463,
            "droplet": 62464,
            "droplet-slash": 62465,
            "drag-vertical": 62466,
            "drag-lines-vertical": 62467,
            "drag-lines-horizontal": 62468,
            "drag-horizontal": 62469,
            "download": 62470,
            "download-alt": 62471,
            "door-open": 62472,
            "door-closed": 62473,
            "dollar": 62474,
            "dollar-square": 62475,
            "dollar-send-square": 62476,
            "dollar-send-circle": 62477,
            "dollar-receive-square": 62478,
            "dollar-receive-circle": 62479,
            "dollar-circle": 62480,
            "document": 62481,
            "document-list": 62482,
            "document-list-check": 62483,
            "dna": 62484,
            "dislike": 62485,
            "dislike-tag": 62486,
            "dislike-square": 62487,
            "dislike-circle": 62488,
            "discount-percent-fill": 62489,
            "disc": 62490,
            "diamond": 62491,
            "diamond-exclamation": 62492,
            "desktop": 62493,
            "desktop-mobile": 62494,
            "desktop-code": 62495,
            "delivery-cart": 62496,
            "delivery-cart-arrow-up": 62497,
            "delivery-cart-arrow-down": 62498,
            "delete-right": 62499,
            "delete-left": 62500,
            "database": 62501,
            "cursor": 62502,
            "cursor-click": 62503,
            "crown": 62504,
            "crown-alt": 62505,
            "credit-card": 62506,
            "credit-card-times": 62507,
            "credit-card-slash": 62508,
            "credit-card-plus": 62509,
            "credit-card-minus": 62510,
            "credit-card-edit": 62511,
            "credit-card-convert": 62512,
            "credit-card-check": 62513,
            "credit-card-change": 62514,
            "credit-card-ban": 62515,
            "cpu": 62516,
            "coupon": 62517,
            "coupon-star": 62518,
            "coupon-percent": 62519,
            "coupon-heart": 62520,
            "copy2right-square": 62521,
            "copy2right-circle": 62522,
            "copy": 62523,
            "copy-plus": 62524,
            "copy-check": 62525,
            "copy-alt": 62526,
            "contrast": 62527,
            "compress": 62528,
            "compass": 62529,
            "compass-needle": 62530,
            "comments": 62531,
            "comments-text": 62532,
            "comments-dots": 62533,
            "comment": 62534,
            "comment-times": 62535,
            "comment-times-alt": 62536,
            "comment-text": 62537,
            "comment-text-times": 62538,
            "comment-text-plus": 62539,
            "comment-text-notification": 62540,
            "comment-text-minus": 62541,
            "comment-text-check": 62542,
            "comment-star": 62543,
            "comment-shield": 62544,
            "comment-settings": 62545,
            "comment-search": 62546,
            "comment-question": 62547,
            "comment-plus": 62548,
            "comment-plus-alt": 62549,
            "comment-notification": 62550,
            "comment-minus": 62551,
            "comment-minus-alt": 62552,
            "comment-lock": 62553,
            "comment-info": 62554,
            "comment-heart": 62555,
            "comment-exclamation": 62556,
            "comment-edit": 62557,
            "comment-dots": 62558,
            "comment-dots-times": 62559,
            "comment-dots-plus": 62560,
            "comment-dots-notification": 62561,
            "comment-dots-minus": 62562,
            "comment-dots-check": 62563,
            "comment-code": 62564,
            "comment-clock": 62565,
            "comment-check": 62566,
            "comment-check-alt": 62567,
            "comment-activity": 62568,
            "coins": 62569,
            "coin": 62570,
            "coin-convert": 62571,
            "coin-card-transfer": 62572,
            "code": 62573,
            "code-square": 62574,
            "code-circle": 62575,
            "cloud": 62576,
            "cloud-upload": 62577,
            "cloud-times": 62578,
            "cloud-slash": 62579,
            "cloud-shield": 62580,
            "cloud-share": 62581,
            "cloud-plus": 62582,
            "cloud-minus": 62583,
            "cloud-lock": 62584,
            "cloud-download": 62585,
            "cloud-connection": 62586,
            "cloud-check": 62587,
            "closed-captioning": 62588,
            "clock": 62589,
            "clock-square": 62590,
            "clock-square-alt": 62591,
            "clock-alt": 62592,
            "clipboard": 62593,
            "clipboard-times": 62594,
            "clipboard-text": 62595,
            "clipboard-star": 62596,
            "clipboard-search": 62597,
            "clipboard-plus": 62598,
            "clipboard-minus": 62599,
            "clipboard-list": 62600,
            "clipboard-list-check": 62601,
            "clipboard-heart": 62602,
            "clipboard-edit": 62603,
            "clipboard-check": 62604,
            "chromecast": 62605,
            "chevron-up": 62606,
            "chevron-right": 62607,
            "chevron-left": 62608,
            "chevron-down": 62609,
            "chevron-big-up": 62610,
            "chevron-big-right": 62611,
            "chevron-big-left": 62612,
            "chevron-big-down": 62613,
            "checkbox-square-fill": 62614,
            "check": 62615,
            "check-square": 62616,
            "check-double": 62617,
            "check-circle": 62618,
            "chats": 62619,
            "chats-text": 62620,
            "chats-dots": 62621,
            "chat": 62622,
            "chat-times": 62623,
            "chat-times-alt": 62624,
            "chat-text": 62625,
            "chat-text-times": 62626,
            "chat-text-plus": 62627,
            "chat-text-notification": 62628,
            "chat-text-minus": 62629,
            "chat-text-check": 62630,
            "chat-star": 62631,
            "chat-shield": 62632,
            "chat-settings": 62633,
            "chat-search": 62634,
            "chat-question": 62635,
            "chat-plus": 62636,
            "chat-plus-alt": 62637,
            "chat-notification": 62638,
            "chat-minus": 62639,
            "chat-minus-alt": 62640,
            "chat-lock": 62641,
            "chat-info": 62642,
            "chat-heart": 62643,
            "chat-exclamation": 62644,
            "chat-edit": 62645,
            "chat-dots": 62646,
            "chat-dots-times": 62647,
            "chat-dots-plus": 62648,
            "chat-dots-notification": 62649,
            "chat-dots-minus": 62650,
            "chat-dots-check": 62651,
            "chat-code": 62652,
            "chat-clock": 62653,
            "chat-check": 62654,
            "chat-check-alt": 62655,
            "chat-activity": 62656,
            "chart-trend-up": 62657,
            "chart-trend-down": 62658,
            "chart-pyramid": 62659,
            "chart-pie": 62660,
            "chart-line": 62661,
            "chart-line-up": 62662,
            "chart-line-down": 62663,
            "chart-line-dots": 62664,
            "chart-bar": 62665,
            "chart-bar-vertical": 62666,
            "chart-bar-square": 62667,
            "chart-bar-horizontal": 62668,
            "chart-bar-circle": 62669,
            "chart-bar-alt": 62670,
            "certificate": 62671,
            "castle": 62672,
            "caret-up": 62673,
            "caret-up-square": 62674,
            "caret-up-circle": 62675,
            "caret-right": 62676,
            "caret-right-square": 62677,
            "caret-right-circle": 62678,
            "caret-left": 62679,
            "caret-left-square": 62680,
            "caret-left-circle": 62681,
            "caret-down": 62682,
            "caret-down-square": 62683,
            "caret-down-circle": 62684,
            "camera": 62685,
            "camera-square": 62686,
            "camera-slash": 62687,
            "camera-rotate": 62688,
            "camera-circle": 62689,
            "calendar": 62690,
            "calendar-times": 62691,
            "calendar-times-alt": 62692,
            "calendar-star": 62693,
            "calendar-search": 62694,
            "calendar-plus": 62695,
            "calendar-plus-alt": 62696,
            "calendar-minus": 62697,
            "calendar-minus-alt": 62698,
            "calendar-lock": 62699,
            "calendar-heart": 62700,
            "calendar-empty": 62701,
            "calendar-empty-alt": 62702,
            "calendar-edit": 62703,
            "calendar-clock": 62704,
            "calendar-check": 62705,
            "calendar-check-alt": 62706,
            "calculator": 62707,
            "calculator-simple": 62708,
            "cake": 62709,
            "cabinet-filing": 62710,
            "bus": 62711,
            "buildings": 62712,
            "buildings-alt": 62713,
            "building": 62714,
            "building-tree": 62715,
            "building-coins": 62716,
            "bug": 62717,
            "bug-slash": 62718,
            "brush": 62719,
            "brush-alt": 62720,
            "briefcase": 62721,
            "briefcase-times": 62722,
            "briefcase-plus": 62723,
            "briefcase-money": 62724,
            "briefcase-minus": 62725,
            "briefcase-check": 62726,
            "brain": 62727,
            "boxes": 62728,
            "box": 62729,
            "box-times": 62730,
            "box-search": 62731,
            "box-plus": 62732,
            "box-minus": 62733,
            "box-check": 62734,
            "books": 62735,
            "bookmarks": 62736,
            "bookmarks-user": 62737,
            "bookmarks-times": 62738,
            "bookmarks-star": 62739,
            "bookmarks-settings": 62740,
            "bookmarks-plus": 62741,
            "bookmarks-minus": 62742,
            "bookmarks-heart": 62743,
            "bookmarks-check": 62744,
            "bookmark": 62745,
            "bookmark-user": 62746,
            "bookmark-times": 62747,
            "bookmark-star": 62748,
            "bookmark-settings": 62749,
            "bookmark-plus": 62750,
            "bookmark-minus": 62751,
            "bookmark-heart": 62752,
            "bookmark-check": 62753,
            "book": 62754,
            "book-text": 62755,
            "book-open": 62756,
            "book-open-text": 62757,
            "book-open-reader": 62758,
            "book-open-bookmark": 62759,
            "book-empty": 62760,
            "book-bookmark": 62761,
            "book-alt": 62762,
            "bone": 62763,
            "bone-break": 62764,
            "bolt": 62765,
            "bolt-square": 62766,
            "bolt-square-alt": 62767,
            "bolt-slash": 62768,
            "bolt-slash-alt": 62769,
            "bolt-circle": 62770,
            "bolt-circle-alt": 62771,
            "bolt-alt": 62772,
            "bluetooth": 62773,
            "bitcoin": 62774,
            "bitcoin-square": 62775,
            "bitcoin-circle": 62776,
            "bezier": 62777,
            "bell": 62778,
            "bell-times": 62779,
            "bell-slash": 62780,
            "bell-plus": 62781,
            "bell-on": 62782,
            "bell-notification": 62783,
            "bell-minus": 62784,
            "bell-exclamation": 62785,
            "bed": 62786,
            "battery-half": 62787,
            "battery-full": 62788,
            "battery-empty": 62789,
            "battery-bolt": 62790,
            "bank": 62791,
            "bank-card-line": 62792,
            "bandage": 62793,
            "ban": 62794,
            "badge": 62795,
            "badge-like": 62796,
            "badge-dollar": 62797,
            "badge-discount": 62798,
            "badge-discount-alt": 62799,
            "badge-check": 62800,
            "backward": 62801,
            "backpack": 62802,
            "award": 62803,
            "award-star": 62804,
            "award-check": 62805,
            "atom": 62806,
            "at": 62807,
            "arrows-up-down": 62808,
            "arrows-repeat": 62809,
            "arrows-repeat-square": 62810,
            "arrows-repeat-circle": 62811,
            "arrows-move": 62812,
            "arrows-left-right": 62813,
            "arrows-expand": 62814,
            "arrows-compress": 62815,
            "arrow-up": 62816,
            "arrow-up-to-line": 62817,
            "arrow-up-square": 62818,
            "arrow-up-small": 62819,
            "arrow-up-right": 62820,
            "arrow-up-right-square": 62821,
            "arrow-up-right-small": 62822,
            "arrow-up-right-circle": 62823,
            "arrow-up-left": 62824,
            "arrow-up-left-square": 62825,
            "arrow-up-left-small": 62826,
            "arrow-up-left-circle": 62827,
            "arrow-up-from-line": 62828,
            "arrow-up-circle": 62829,
            "arrow-turn-up-right": 62830,
            "arrow-turn-up-left": 62831,
            "arrow-turn-right-up": 62832,
            "arrow-turn-right-down": 62833,
            "arrow-turn-left-up": 62834,
            "arrow-turn-left-down": 62835,
            "arrow-turn-down-right": 62836,
            "arrow-turn-down-left": 62837,
            "arrow-share": 62838,
            "arrow-right": 62839,
            "arrow-right-to-line": 62840,
            "arrow-right-square": 62841,
            "arrow-right-small": 62842,
            "arrow-right-line": 62843,
            "arrow-right-from-line": 62844,
            "arrow-right-circle": 62845,
            "arrow-reply": 62846,
            "arrow-left": 62847,
            "arrow-left-to-line": 62848,
            "arrow-left-square": 62849,
            "arrow-left-small": 62850,
            "arrow-left-from-line": 62851,
            "arrow-left-circle": 62852,
            "arrow-left-arrow-right": 62853,
            "arrow-left-arrow-right-square": 62854,
            "arrow-left-arrow-right-circle": 62855,
            "arrow-import": 62856,
            "arrow-forward": 62857,
            "arrow-forward-square": 62858,
            "arrow-forward-square-alt": 62859,
            "arrow-forward-circle": 62860,
            "arrow-forward-circle-alt": 62861,
            "arrow-forward-alt": 62862,
            "arrow-export": 62863,
            "arrow-down": 62864,
            "arrow-down-to-line": 62865,
            "arrow-down-square": 62866,
            "arrow-down-small": 62867,
            "arrow-down-right": 62868,
            "arrow-down-right-square": 62869,
            "arrow-down-right-small": 62870,
            "arrow-down-right-circle": 62871,
            "arrow-down-left": 62872,
            "arrow-down-left-square": 62873,
            "arrow-down-left-small": 62874,
            "arrow-down-left-circle": 62875,
            "arrow-down-from-line": 62876,
            "arrow-down-circle": 62877,
            "arrow-down-arrow-up": 62878,
            "arrow-down-arrow-up-square": 62879,
            "arrow-down-arrow-up-circle": 62880,
            "arrow-back": 62881,
            "arrow-back-square": 62882,
            "arrow-back-square-alt": 62883,
            "arrow-back-circle": 62884,
            "arrow-back-circle-alt": 62885,
            "arrow-back-alt": 62886,
            "archway": 62887,
            "archive": 62888,
            "angles-up": 62889,
            "angles-up-small": 62890,
            "angles-right": 62891,
            "angles-right-small": 62892,
            "angles-left": 62893,
            "angles-left-small": 62894,
            "angles-left-right": 62895,
            "angles-down": 62896,
            "angles-down-up": 62897,
            "angles-down-small": 62898,
            "angle-up": 62899,
            "angle-up-square": 62900,
            "angle-up-small": 62901,
            "angle-up-circle": 62902,
            "angle-right": 62903,
            "angle-right-square": 62904,
            "angle-right-small": 62905,
            "angle-right-circle": 62906,
            "angle-left": 62907,
            "angle-left-square": 62908,
            "angle-left-small": 62909,
            "angle-left-circle": 62910,
            "angle-down": 62911,
            "angle-down-square": 62912,
            "angle-down-small": 62913,
            "angle-down-circle": 62914,
            "alarm-times": 62915,
            "alarm-times-alt": 62916,
            "alarm-plus": 62917,
            "alarm-plus-alt": 62918,
            "alarm-minus": 62919,
            "alarm-minus-alt": 62920,
            "alarm-edit": 62921,
            "alarm-clock": 62922,
            "alarm-clock-empty": 62923,
            "alarm-clock-alt": 62924,
            "alarm-check": 62925,
            "alarm-check-alt": 62926,
            "airplay": 62927,
            "airplay-alt": 62928,
            "address-book": 62929,
            "activity-star-square": 62930,
            "activity-star-circle": 62931,
            "activity-square": 62932,
            "activity-notification-square": 62933,
            "activity-notification-circle": 62934,
            "activity-heart-square": 62935,
            "activity-heart-circle": 62936,
            "activity-circle": 62937
        }
    };
    var codepoints_default = codePoints;
    // magicoon_react/get-string.ts
    var getValue = function(variant, icon) {
        var codePoint = codepoints_default[variant][icon];
        if (!codePoint || isNaN(codePoint)) return "";
        return String.fromCodePoint(codePoint);
    };
    // magicoon_react/Magicoon.tsx
    var MagicoonFilled = function(param) {
        var icon = param.icon, className = param.className;
        var value = getValue("filled", icon);
        return /* @__PURE__ */ import_react.default.createElement("span", {
            "data-stora-icon": true,
            "data-magicoon": true,
            "aria-hidden": "true",
            "data-magicoon-variant": "filled",
            className: className
        }, value);
    };
    var MagicoonRegular = function(param) {
        var icon = param.icon, className = param.className;
        var value = getValue("regular", icon);
        return /* @__PURE__ */ import_react.default.createElement("span", {
            "data-stora-icon": true,
            "data-magicoon": true,
            "aria-hidden": "true",
            "data-magicoon-variant": "regular",
            className: className
        }, value);
    };
    var Magicoon = function(param) {
        var _param_variant = param.variant, variant = _param_variant === void 0 ? "regular" : _param_variant, _param_filled = param.filled, filled = _param_filled === void 0 ? false : _param_filled, icon = param.icon, className = param.className;
        if (filled || variant === "filled") {
            return /* @__PURE__ */ import_react.default.createElement(MagicoonFilled, {
                icon: icon,
                className: className,
                filled: true
            });
        }
        return /* @__PURE__ */ import_react.default.createElement(MagicoonRegular, {
            icon: icon,
            className: className,
            filled: false
        });
    };
    Magicoon.displayName = "Magicoon";
    // magicoon_react/index.ts
    var magicoon_react_default = Magicoon;
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
