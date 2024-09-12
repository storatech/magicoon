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
            "verified": 61724,
            "vector": 61725,
            "users": 61726,
            "users-slash": 61727,
            "users-group": 61728,
            "users-group-slash": 61729,
            "users-group-alt": 61730,
            "users-alt": 61731,
            "user": 61732,
            "user-viewfinder": 61733,
            "user-times": 61734,
            "user-times-bottom": 61735,
            "user-times-alt": 61736,
            "user-tag": 61737,
            "user-star": 61738,
            "user-square": 61739,
            "user-slash": 61740,
            "user-shield": 61741,
            "user-settings": 61742,
            "user-search": 61743,
            "user-plus": 61744,
            "user-plus-bottom": 61745,
            "user-plus-alt": 61746,
            "user-minus": 61747,
            "user-minus-bottom": 61748,
            "user-minus-alt": 61749,
            "user-lock": 61750,
            "user-heart": 61751,
            "user-eye": 61752,
            "user-edit": 61753,
            "user-dollar": 61754,
            "user-code": 61755,
            "user-clock": 61756,
            "user-circle": 61757,
            "user-check": 61758,
            "user-check-bottom": 61759,
            "user-check-alt": 61760,
            "user-change": 61761,
            "user-ban": 61762,
            "user-alt": 61763,
            "usb-drive": 61764,
            "upload": 61765,
            "upload-alt": 61766,
            "unlock": 61767,
            "university": 61768,
            "tv": 61769,
            "tv-retro": 61770,
            "tv-play": 61771,
            "truck": 61772,
            "trophy": 61773,
            "trophy-star": 61774,
            "triangle": 61775,
            "triangle-exclamation": 61776,
            "trend-up": 61777,
            "trend-up-square": 61778,
            "trend-up-circle": 61779,
            "trend-down": 61780,
            "trend-down-square": 61781,
            "trend-down-circle": 61782,
            "tree": 61783,
            "trash": 61784,
            "trash-undo": 61785,
            "trash-times": 61786,
            "trash-slash": 61787,
            "trash-redo": 61788,
            "trash-plus": 61789,
            "trash-minus": 61790,
            "trash-check": 61791,
            "traffic-cone": 61792,
            "tooth": 61793,
            "tool": 61794,
            "toggle-on": 61795,
            "toggle-on-rectangle": 61796,
            "toggle-on-alt": 61797,
            "toggle-off": 61798,
            "toggle-off-rectangle": 61799,
            "toggle-off-alt": 61800,
            "times": 61801,
            "times-square": 61802,
            "times-circle": 61803,
            "time-past": 61804,
            "time-forward": 61805,
            "thumbtack": 61806,
            "thumbtack-vertical": 61807,
            "thermometer": 61808,
            "test-tube": 61809,
            "test-tube-alt": 61810,
            "telescope": 61811,
            "taxi": 61812,
            "target": 61813,
            "tags": 61814,
            "tag": 61815,
            "tablet": 61816,
            "syringe": 61817,
            "sun": 61818,
            "story": 61819,
            "store": 61820,
            "stopwatch": 61821,
            "stopwatch-times": 61822,
            "stopwatch-times-alt": 61823,
            "stopwatch-plus": 61824,
            "stopwatch-plus-alt": 61825,
            "stopwatch-minus": 61826,
            "stopwatch-minus-alt": 61827,
            "stopwatch-empty": 61828,
            "stopwatch-edit": 61829,
            "stopwatch-check": 61830,
            "stopwatch-check-alt": 61831,
            "stopwatch-alt": 61832,
            "stop": 61833,
            "stop-circle": 61834,
            "sticky-note-text-square": 61835,
            "sticky-note-text-circle": 61836,
            "sticky-note-square": 61837,
            "sticky-note-circle": 61838,
            "stethoscope": 61839,
            "step-forward": 61840,
            "step-backward": 61841,
            "star": 61842,
            "star-tag": 61843,
            "star-square": 61844,
            "star-slash": 61845,
            "star-shooting": 61846,
            "star-shooting-horizontal": 61847,
            "star-magic": 61848,
            "star-half": 61849,
            "star-circle": 61850,
            "speedometer": 61851,
            "speaker": 61852,
            "sparkle": 61853,
            "sort": 61854,
            "sort-vertical": 61855,
            "sort-horizontal": 61856,
            "sort-descending": 61857,
            "sort-descending-square": 61858,
            "sort-descending-circle": 61859,
            "sort-ascending": 61860,
            "sort-ascending-square": 61861,
            "sort-ascending-circle": 61862,
            "sofa": 61863,
            "sliders-vertical": 61864,
            "sliders-vertical-alt": 61865,
            "sliders-horizontal": 61866,
            "sliders-horizontal-alt": 61867,
            "sim-card": 61868,
            "sim-card-2": 61869,
            "sim-card-1": 61870,
            "signs-direction": 61871,
            "signal-stream": 61872,
            "sign-direction-right": 61873,
            "sign-direction-left": 61874,
            "shuffle": 61875,
            "shopping-cart": 61876,
            "shopping-cart-times": 61877,
            "shopping-cart-star": 61878,
            "shopping-cart-plus": 61879,
            "shopping-cart-minus": 61880,
            "shopping-cart-heart": 61881,
            "shopping-cart-check": 61882,
            "shopping-cart-arrow-top": 61883,
            "shopping-cart-arrow-down": 61884,
            "shopping-basket": 61885,
            "shopping-basket-times": 61886,
            "shopping-basket-star": 61887,
            "shopping-basket-plus": 61888,
            "shopping-basket-minus": 61889,
            "shopping-basket-heart": 61890,
            "shopping-basket-check": 61891,
            "shopping-basket-arrow-up": 61892,
            "shopping-basket-arrow-down": 61893,
            "shopping-bag": 61894,
            "shopping-bag-alt": 61895,
            "shield": 61896,
            "shield-user": 61897,
            "shield-times": 61898,
            "shield-star": 61899,
            "shield-slash": 61900,
            "shield-search": 61901,
            "shield-question": 61902,
            "shield-plus": 61903,
            "shield-play": 61904,
            "shield-minus": 61905,
            "shield-lock": 61906,
            "shield-heart": 61907,
            "shield-exclamation": 61908,
            "shield-check": 61909,
            "shield-bolt": 61910,
            "share": 61911,
            "settings": 61912,
            "server": 61913,
            "send": 61914,
            "send-right": 61915,
            "search": 61916,
            "search-text": 61917,
            "search-plus": 61918,
            "search-minus": 61919,
            "sd-card": 61920,
            "scissors": 61921,
            "school": 61922,
            "scanner": 61923,
            "scan": 61924,
            "scan-qr": 61925,
            "scan-circle": 61926,
            "sack-dollar": 61927,
            "route": 61928,
            "rotate": 61929,
            "rotate-square": 61930,
            "rotate-right": 61931,
            "rotate-right-square": 61932,
            "rotate-right-circle": 61933,
            "rotate-left": 61934,
            "rotate-left-square": 61935,
            "rotate-left-circle": 61936,
            "rotate-circle": 61937,
            "rocket": 61938,
            "rocket-launch": 61939,
            "road": 61940,
            "restaurant": 61941,
            "repeat": 61942,
            "registered-square": 61943,
            "registered-circle": 61944,
            "receipt": 61945,
            "receipt-text": 61946,
            "receipt-text-alt": 61947,
            "receipt-star": 61948,
            "receipt-star-alt": 61949,
            "receipt-percent": 61950,
            "receipt-percent-alt": 61951,
            "receipt-list": 61952,
            "receipt-list-alt": 61953,
            "receipt-heart": 61954,
            "receipt-heart-alt": 61955,
            "receipt-alt": 61956,
            "ranking": 61957,
            "radio": 61958,
            "radio-button-fill": 61959,
            "radiation": 61960,
            "radiation-circle": 61961,
            "radar": 61962,
            "question-square": 61963,
            "question-circle": 61964,
            "puzzle": 61965,
            "print": 61966,
            "print-slash": 61967,
            "presentation": 61968,
            "presentation-user": 61969,
            "presentation-trend-up": 61970,
            "presentation-trend-down": 61971,
            "presentation-text": 61972,
            "presentation-poll": 61973,
            "presentation-play": 61974,
            "presentation-pen": 61975,
            "presentation-lightbulb": 61976,
            "presentation-dollar": 61977,
            "presentation-chart-pie": 61978,
            "presentation-chart-line": 61979,
            "power-off": 61980,
            "power-off-square": 61981,
            "power-off-circle": 61982,
            "poll-vertical-square": 61983,
            "poll-vertical-circle": 61984,
            "poll-horizontal-square": 61985,
            "poll-horizontal-circle": 61986,
            "plus": 61987,
            "plus-square": 61988,
            "plus-circle": 61989,
            "plug": 61990,
            "playlist": 61991,
            "play": 61992,
            "play-square": 61993,
            "play-pause": 61994,
            "play-circle": 61995,
            "pills": 61996,
            "phone": 61997,
            "phone-times": 61998,
            "phone-slash": 61999,
            "phone-plus": 62e3,
            "phone-outgoing": 62001,
            "phone-office": 62002,
            "phone-missed": 62003,
            "phone-incoming": 62004,
            "phone-hangup": 62005,
            "phone-flip": 62006,
            "phone-call": 62007,
            "phone-2": 62008,
            "phone-1": 62009,
            "percent": 62010,
            "percent-tag": 62011,
            "percent-square": 62012,
            "percent-circle": 62013,
            "pen": 62014,
            "pen-tool": 62015,
            "pen-line": 62016,
            "pause": 62017,
            "pause-circle": 62018,
            "parking-square": 62019,
            "parking-circle": 62020,
            "papers": 62021,
            "papers-text": 62022,
            "paperclip": 62023,
            "palette": 62024,
            "package": 62025,
            "package-star": 62026,
            "package-heart": 62027,
            "package-dollar": 62028,
            "package-check": 62029,
            "octagon": 62030,
            "octagon-times": 62031,
            "octagon-plus": 62032,
            "octagon-minus": 62033,
            "octagon-exclamation": 62034,
            "octagon-check": 62035,
            "nut": 62036,
            "notebook": 62037,
            "note": 62038,
            "note-text": 62039,
            "note-text-square": 62040,
            "note-list": 62041,
            "note-list-square": 62042,
            "note-list-check": 62043,
            "note-list-check-square": 62044,
            "newspaper": 62045,
            "music": 62046,
            "music-note": 62047,
            "music-list": 62048,
            "mug": 62049,
            "mug-hot": 62050,
            "mouse": 62051,
            "mosque": 62052,
            "mortar-pestle": 62053,
            "more-vertical": 62054,
            "more-vertical-square": 62055,
            "more-vertical-circle": 62056,
            "more-horizontal": 62057,
            "more-horizontal-square": 62058,
            "more-horizontal-circle": 62059,
            "moon": 62060,
            "monitor-waveform": 62061,
            "money-withdrawal": 62062,
            "money-convert": 62063,
            "money-bills": 62064,
            "money-bill": 62065,
            "money-bill-times": 62066,
            "money-bill-send": 62067,
            "money-bill-receive": 62068,
            "money-bill-plus": 62069,
            "money-bill-minus": 62070,
            "money-bill-convert": 62071,
            "money-bill-clock": 62072,
            "money-bill-check": 62073,
            "money-bill-ban": 62074,
            "mobile": 62075,
            "minus": 62076,
            "minus-square": 62077,
            "minus-circle": 62078,
            "minimize": 62079,
            "microscope": 62080,
            "microphone": 62081,
            "microphone-stand": 62082,
            "microphone-slash": 62083,
            "messages": 62084,
            "messages-text": 62085,
            "messages-dots": 62086,
            "message": 62087,
            "message-times": 62088,
            "message-times-alt": 62089,
            "message-text": 62090,
            "message-text-times": 62091,
            "message-text-plus": 62092,
            "message-text-notification": 62093,
            "message-text-minus": 62094,
            "message-text-check": 62095,
            "message-star": 62096,
            "message-shield": 62097,
            "message-settings": 62098,
            "message-search": 62099,
            "message-question": 62100,
            "message-plus": 62101,
            "message-plus-alt": 62102,
            "message-notification": 62103,
            "message-minus": 62104,
            "message-minus-alt": 62105,
            "message-lock": 62106,
            "message-info": 62107,
            "message-heart": 62108,
            "message-exclamation": 62109,
            "message-edit": 62110,
            "message-dots": 62111,
            "message-dots-times": 62112,
            "message-dots-plus": 62113,
            "message-dots-notification": 62114,
            "message-dots-minus": 62115,
            "message-dots-check": 62116,
            "message-code": 62117,
            "message-clock": 62118,
            "message-check": 62119,
            "message-check-alt": 62120,
            "message-activity": 62121,
            "menu": 62122,
            "menu-square": 62123,
            "menu-square-alt": 62124,
            "menu-right": 62125,
            "menu-right-square": 62126,
            "menu-right-square-alt": 62127,
            "menu-right-circle": 62128,
            "menu-right-circle-alt": 62129,
            "menu-right-alt": 62130,
            "menu-left": 62131,
            "menu-left-square": 62132,
            "menu-left-square-alt": 62133,
            "menu-left-circle": 62134,
            "menu-left-circle-alt": 62135,
            "menu-left-alt": 62136,
            "menu-duo": 62137,
            "menu-duo-square": 62138,
            "menu-duo-circle": 62139,
            "menu-circle": 62140,
            "menu-circle-alt": 62141,
            "menu-alt": 62142,
            "megaphone": 62143,
            "medal": 62144,
            "medal-star": 62145,
            "medal-check": 62146,
            "maximize": 62147,
            "mask-face": 62148,
            "map": 62149,
            "map-pin": 62150,
            "map-location": 62151,
            "magnet": 62152,
            "log-out": 62153,
            "log-in": 62154,
            "lock": 62155,
            "lock-viewfinder": 62156,
            "location-pin": 62157,
            "location-pin-times": 62158,
            "location-pin-star": 62159,
            "location-pin-slash": 62160,
            "location-pin-slash-alt": 62161,
            "location-pin-search": 62162,
            "location-pin-question": 62163,
            "location-pin-plus": 62164,
            "location-pin-minus": 62165,
            "location-pin-lock": 62166,
            "location-pin-heart": 62167,
            "location-pin-eye": 62168,
            "location-pin-exclamation": 62169,
            "location-pin-edit": 62170,
            "location-pin-check": 62171,
            "location-pin-alt": 62172,
            "location-crosshairs": 62173,
            "location-crosshairs-slash": 62174,
            "location-arrow": 62175,
            "location-arrow-square": 62176,
            "location-arrow-circle": 62177,
            "list": 62178,
            "link": 62179,
            "link-horizontal": 62180,
            "link-horizontal-alt": 62181,
            "link-broken": 62182,
            "link-broken-horizontal": 62183,
            "link-alt": 62184,
            "line-up-square": 62185,
            "line-up-circle": 62186,
            "line-down-square": 62187,
            "line-down-circle": 62188,
            "line-chart-dots": 62189,
            "line-chart-dots-square": 62190,
            "line-chart-dots-circle": 62191,
            "like": 62192,
            "like-tag": 62193,
            "like-square": 62194,
            "like-circle": 62195,
            "lightbulb": 62196,
            "light-emergency": 62197,
            "light-emergency-on": 62198,
            "life-ring": 62199,
            "leaf": 62200,
            "layout-web-9": 62201,
            "layout-web-8": 62202,
            "layout-web-7": 62203,
            "layout-web-6": 62204,
            "layout-web-5": 62205,
            "layout-web-4": 62206,
            "layout-web-3": 62207,
            "layout-web-2": 62208,
            "layout-web-12": 62209,
            "layout-web-11": 62210,
            "layout-web-10": 62211,
            "layout-web-1": 62212,
            "layer-group": 62213,
            "laptop": 62214,
            "laptop-code": 62215,
            "keypad": 62216,
            "keyhole-square": 62217,
            "keyhole-circle": 62218,
            "keyboard": 62219,
            "key": 62220,
            "key-square": 62221,
            "key-circle": 62222,
            "kaaba": 62223,
            "invoice": 62224,
            "info-square": 62225,
            "info-circle": 62226,
            "inbox": 62227,
            "inbox-upload": 62228,
            "inbox-empty": 62229,
            "inbox-download": 62230,
            "image": 62231,
            "image-upload": 62232,
            "image-times": 62233,
            "image-plus": 62234,
            "image-minus": 62235,
            "image-gallery": 62236,
            "image-gallery-plus": 62237,
            "image-download": 62238,
            "image-check": 62239,
            "id-card": 62240,
            "id-badge": 62241,
            "hourglass": 62242,
            "hospital": 62243,
            "hospital-h-sign-square": 62244,
            "hospital-h-sign-circle": 62245,
            "home": 62246,
            "home-wifi": 62247,
            "home-user": 62248,
            "home-trend-up": 62249,
            "home-trend-down": 62250,
            "home-star": 62251,
            "home-shield": 62252,
            "home-search": 62253,
            "home-roof": 62254,
            "home-roof-wifi": 62255,
            "home-roof-user": 62256,
            "home-roof-trend-up": 62257,
            "home-roof-trend-down": 62258,
            "home-roof-star": 62259,
            "home-roof-shield": 62260,
            "home-roof-search": 62261,
            "home-roof-lock": 62262,
            "home-roof-heart": 62263,
            "home-roof-dollar": 62264,
            "home-roof-activity": 62265,
            "home-lock": 62266,
            "home-heart": 62267,
            "home-dollar": 62268,
            "home-dash": 62269,
            "home-dash-wifi": 62270,
            "home-dash-user": 62271,
            "home-dash-trend-up": 62272,
            "home-dash-trend-down": 62273,
            "home-dash-star": 62274,
            "home-dash-shield": 62275,
            "home-dash-search": 62276,
            "home-dash-lock": 62277,
            "home-dash-heart": 62278,
            "home-dash-dollar": 62279,
            "home-dash-activity": 62280,
            "home-activity": 62281,
            "heart": 62282,
            "heart-times": 62283,
            "heart-tag": 62284,
            "heart-square": 62285,
            "heart-slash": 62286,
            "heart-pulse": 62287,
            "heart-plus": 62288,
            "heart-minus": 62289,
            "heart-circle": 62290,
            "heart-check": 62291,
            "headphones": 62292,
            "hashtag": 62293,
            "hard-drive": 62294,
            "hand-holding-user": 62295,
            "hand-holding-dollar": 62296,
            "hand-holding-dollar-circle": 62297,
            "grid-web-7": 62298,
            "grid-web-6": 62299,
            "grid-web-5": 62300,
            "grid-web-4": 62301,
            "grid-web-3": 62302,
            "grid-web-2": 62303,
            "grid-web-1": 62304,
            "grid-square": 62305,
            "grid-square-plus": 62306,
            "grid-square-circle": 62307,
            "grid-dividers": 62308,
            "grid-circle": 62309,
            "grid-2": 62310,
            "grid-1": 62311,
            "graduation-cap": 62312,
            "globe": 62313,
            "globe-stand": 62314,
            "globe-earth": 62315,
            "glasses": 62316,
            "gift": 62317,
            "game-controller": 62318,
            "forward": 62319,
            "food-tray": 62320,
            "folder": 62321,
            "folder-user": 62322,
            "folder-upload": 62323,
            "folder-times": 62324,
            "folder-star": 62325,
            "folder-shield": 62326,
            "folder-settings": 62327,
            "folder-search": 62328,
            "folder-plus": 62329,
            "folder-open": 62330,
            "folder-music": 62331,
            "folder-minus": 62332,
            "folder-lock": 62333,
            "folder-import": 62334,
            "folder-heart": 62335,
            "folder-export": 62336,
            "folder-edit": 62337,
            "folder-download": 62338,
            "folder-connection": 62339,
            "folder-code": 62340,
            "folder-clock": 62341,
            "folder-check": 62342,
            "folder-ban": 62343,
            "folder-alt": 62344,
            "floppy-disk": 62345,
            "flask": 62346,
            "flask-round": 62347,
            "flashlight": 62348,
            "flashlight-fill": 62349,
            "flag": 62350,
            "flag-triangle": 62351,
            "fire": 62352,
            "fingerprint": 62353,
            "fingerprint-viewfinder": 62354,
            "filter": 62355,
            "filter-times": 62356,
            "filter-plus": 62357,
            "filter-minus": 62358,
            "filter-check": 62359,
            "film": 62360,
            "file": 62361,
            "file-user": 62362,
            "file-upload": 62363,
            "file-times": 62364,
            "file-text": 62365,
            "file-text-times": 62366,
            "file-text-star": 62367,
            "file-text-shield": 62368,
            "file-text-search": 62369,
            "file-text-plus": 62370,
            "file-text-minus": 62371,
            "file-text-lock": 62372,
            "file-text-heart": 62373,
            "file-text-edit": 62374,
            "file-text-check": 62375,
            "file-text-ban": 62376,
            "file-star": 62377,
            "file-shield": 62378,
            "file-settings": 62379,
            "file-search": 62380,
            "file-plus": 62381,
            "file-music": 62382,
            "file-minus": 62383,
            "file-lock": 62384,
            "file-list": 62385,
            "file-list-times": 62386,
            "file-list-star": 62387,
            "file-list-shield": 62388,
            "file-list-search": 62389,
            "file-list-plus": 62390,
            "file-list-minus": 62391,
            "file-list-lock": 62392,
            "file-list-heart": 62393,
            "file-list-edit": 62394,
            "file-list-check": 62395,
            "file-list-ban": 62396,
            "file-import": 62397,
            "file-import-alt": 62398,
            "file-heart": 62399,
            "file-export": 62400,
            "file-export-alt": 62401,
            "file-edit": 62402,
            "file-download": 62403,
            "file-copy": 62404,
            "file-code": 62405,
            "file-clock": 62406,
            "file-check": 62407,
            "file-ban": 62408,
            "fast-forward": 62409,
            "fast-backward": 62410,
            "eye": 62411,
            "eye-slash": 62412,
            "eye-closed": 62413,
            "expand": 62414,
            "exclamation-square": 62415,
            "exclamation-circle": 62416,
            "exchange-vertical": 62417,
            "exchange-vertical-square": 62418,
            "exchange-vertical-circle": 62419,
            "exchange-horizontal": 62420,
            "exchange-horizontal-square": 62421,
            "exchange-horizontal-circle": 62422,
            "euro": 62423,
            "euro-square": 62424,
            "euro-circle": 62425,
            "ethereum": 62426,
            "ethereum-square": 62427,
            "ethereum-circle": 62428,
            "envelopes": 62429,
            "envelope": 62430,
            "envelope-times": 62431,
            "envelope-star": 62432,
            "envelope-shield": 62433,
            "envelope-settings": 62434,
            "envelope-search": 62435,
            "envelope-plus": 62436,
            "envelope-open": 62437,
            "envelope-notification": 62438,
            "envelope-minus": 62439,
            "envelope-lock": 62440,
            "envelope-heart": 62441,
            "envelope-eye": 62442,
            "envelope-edit": 62443,
            "envelope-clock": 62444,
            "envelope-check": 62445,
            "envelope-ban": 62446,
            "eject": 62447,
            "edit": 62448,
            "droplet": 62449,
            "droplet-slash": 62450,
            "drag-vertical": 62451,
            "drag-lines-vertical": 62452,
            "drag-lines-horizontal": 62453,
            "drag-horizontal": 62454,
            "download": 62455,
            "download-alt": 62456,
            "door-open": 62457,
            "door-closed": 62458,
            "dollar": 62459,
            "dollar-square": 62460,
            "dollar-send-circle": 62461,
            "dollar-receive-square": 62462,
            "dollar-receive-square-1": 62463,
            "dollar-receive-circle": 62464,
            "dollar-circle": 62465,
            "document": 62466,
            "document-list": 62467,
            "document-list-check": 62468,
            "dna": 62469,
            "dislike": 62470,
            "dislike-tag": 62471,
            "dislike-square": 62472,
            "dislike-circle": 62473,
            "discount-percent-fill": 62474,
            "disc": 62475,
            "diamond": 62476,
            "diamond-exclamation": 62477,
            "desktop": 62478,
            "desktop-mobile": 62479,
            "desktop-code": 62480,
            "delivery-cart": 62481,
            "delivery-cart-arrow-up": 62482,
            "delivery-cart-arrow-down": 62483,
            "delete-right": 62484,
            "delete-left": 62485,
            "database": 62486,
            "cursor": 62487,
            "cursor-click": 62488,
            "crown": 62489,
            "crown-alt": 62490,
            "credit-card": 62491,
            "credit-card-times": 62492,
            "credit-card-slash": 62493,
            "credit-card-plus": 62494,
            "credit-card-minus": 62495,
            "credit-card-edit": 62496,
            "credit-card-convert": 62497,
            "credit-card-check": 62498,
            "credit-card-change": 62499,
            "credit-card-ban": 62500,
            "cpu": 62501,
            "coupon": 62502,
            "coupon-star": 62503,
            "coupon-percent": 62504,
            "coupon-heart": 62505,
            "copyright-square": 62506,
            "copyright-circle": 62507,
            "copy": 62508,
            "copy-plus": 62509,
            "copy-check": 62510,
            "copy-alt": 62511,
            "contrast": 62512,
            "compress": 62513,
            "compass": 62514,
            "compass-needle": 62515,
            "comments": 62516,
            "comments-text": 62517,
            "comments-dots": 62518,
            "comment": 62519,
            "comment-times": 62520,
            "comment-times-alt": 62521,
            "comment-text": 62522,
            "comment-text-times": 62523,
            "comment-text-plus": 62524,
            "comment-text-notification": 62525,
            "comment-text-minus": 62526,
            "comment-text-check": 62527,
            "comment-star": 62528,
            "comment-shield": 62529,
            "comment-settings": 62530,
            "comment-search": 62531,
            "comment-question": 62532,
            "comment-plus": 62533,
            "comment-plus-alt": 62534,
            "comment-notification": 62535,
            "comment-minus": 62536,
            "comment-minus-alt": 62537,
            "comment-lock": 62538,
            "comment-info": 62539,
            "comment-heart": 62540,
            "comment-exclamation": 62541,
            "comment-edit": 62542,
            "comment-dots": 62543,
            "comment-dots-times": 62544,
            "comment-dots-plus": 62545,
            "comment-dots-notification": 62546,
            "comment-dots-minus": 62547,
            "comment-dots-check": 62548,
            "comment-code": 62549,
            "comment-clock": 62550,
            "comment-check": 62551,
            "comment-check-alt": 62552,
            "comment-activity": 62553,
            "coins": 62554,
            "coin": 62555,
            "coin-convert": 62556,
            "coin-card-transfer": 62557,
            "code": 62558,
            "code-square": 62559,
            "code-circle": 62560,
            "cloud": 62561,
            "cloud-upload": 62562,
            "cloud-times": 62563,
            "cloud-slash": 62564,
            "cloud-shield": 62565,
            "cloud-share": 62566,
            "cloud-plus": 62567,
            "cloud-minus": 62568,
            "cloud-lock": 62569,
            "cloud-download": 62570,
            "cloud-connection": 62571,
            "cloud-check": 62572,
            "closed-captioning": 62573,
            "clock": 62574,
            "clock-square": 62575,
            "clock-square-alt": 62576,
            "clock-alt": 62577,
            "clipboard": 62578,
            "clipboard-times": 62579,
            "clipboard-text": 62580,
            "clipboard-star": 62581,
            "clipboard-search": 62582,
            "clipboard-plus": 62583,
            "clipboard-minus": 62584,
            "clipboard-list": 62585,
            "clipboard-list-check": 62586,
            "clipboard-heart": 62587,
            "clipboard-edit": 62588,
            "clipboard-check": 62589,
            "chromecast": 62590,
            "chevron-up": 62591,
            "chevron-right": 62592,
            "chevron-left": 62593,
            "chevron-down": 62594,
            "chevron-big-up": 62595,
            "chevron-big-right": 62596,
            "chevron-big-left": 62597,
            "chevron-big-down": 62598,
            "checkbox-square-fill": 62599,
            "check": 62600,
            "check-square": 62601,
            "check-double": 62602,
            "check-circle": 62603,
            "chats": 62604,
            "chats-text": 62605,
            "chats-dots": 62606,
            "chat": 62607,
            "chat-times": 62608,
            "chat-times-alt": 62609,
            "chat-text": 62610,
            "chat-text-times": 62611,
            "chat-text-plus": 62612,
            "chat-text-notification": 62613,
            "chat-text-minus": 62614,
            "chat-text-check": 62615,
            "chat-star": 62616,
            "chat-shield": 62617,
            "chat-settings": 62618,
            "chat-search": 62619,
            "chat-question": 62620,
            "chat-plus": 62621,
            "chat-plus-alt": 62622,
            "chat-notification": 62623,
            "chat-minus": 62624,
            "chat-minus-alt": 62625,
            "chat-lock": 62626,
            "chat-info": 62627,
            "chat-heart": 62628,
            "chat-exclamation": 62629,
            "chat-edit": 62630,
            "chat-dots": 62631,
            "chat-dots-times": 62632,
            "chat-dots-plus": 62633,
            "chat-dots-notification": 62634,
            "chat-dots-minus": 62635,
            "chat-dots-check": 62636,
            "chat-code": 62637,
            "chat-clock": 62638,
            "chat-check": 62639,
            "chat-check-alt": 62640,
            "chat-activity": 62641,
            "chart-trend-up": 62642,
            "chart-trend-down": 62643,
            "chart-pyramid": 62644,
            "chart-pie": 62645,
            "chart-line": 62646,
            "chart-line-down": 62647,
            "chart-line-dots": 62648,
            "chart-line-1": 62649,
            "chart-bar": 62650,
            "chart-bar-vertical": 62651,
            "chart-bar-square": 62652,
            "chart-bar-horizontal": 62653,
            "chart-bar-circle": 62654,
            "chart-bar-alt": 62655,
            "certificate": 62656,
            "castle": 62657,
            "caret-up": 62658,
            "caret-up-square": 62659,
            "caret-up-circle": 62660,
            "caret-right": 62661,
            "caret-right-square": 62662,
            "caret-right-circle": 62663,
            "caret-left": 62664,
            "caret-left-square": 62665,
            "caret-left-circle": 62666,
            "caret-down": 62667,
            "caret-down-square": 62668,
            "caret-down-circle": 62669,
            "camera": 62670,
            "camera-square": 62671,
            "camera-slash": 62672,
            "camera-rotate": 62673,
            "camera-circle": 62674,
            "calendar": 62675,
            "calendar-times": 62676,
            "calendar-times-alt": 62677,
            "calendar-star": 62678,
            "calendar-search": 62679,
            "calendar-plus": 62680,
            "calendar-plus-alt": 62681,
            "calendar-minus": 62682,
            "calendar-minus-alt": 62683,
            "calendar-lock": 62684,
            "calendar-heart": 62685,
            "calendar-empty": 62686,
            "calendar-empty-alt": 62687,
            "calendar-edit": 62688,
            "calendar-clock": 62689,
            "calendar-check": 62690,
            "calendar-check-alt": 62691,
            "calculator": 62692,
            "calculator-simple": 62693,
            "cake": 62694,
            "cabinet-filing": 62695,
            "bus": 62696,
            "buildings": 62697,
            "buildings-alt": 62698,
            "building": 62699,
            "building-tree": 62700,
            "building-coins": 62701,
            "bug": 62702,
            "bug-slash": 62703,
            "brush": 62704,
            "brush-alt": 62705,
            "briefcase": 62706,
            "briefcase-times": 62707,
            "briefcase-plus": 62708,
            "briefcase-money": 62709,
            "briefcase-minus": 62710,
            "briefcase-check": 62711,
            "brain": 62712,
            "boxes": 62713,
            "box": 62714,
            "box-times": 62715,
            "box-search": 62716,
            "box-plus": 62717,
            "box-minus": 62718,
            "box-check": 62719,
            "books": 62720,
            "bookmarks": 62721,
            "bookmarks-user": 62722,
            "bookmarks-times": 62723,
            "bookmarks-star": 62724,
            "bookmarks-settings": 62725,
            "bookmarks-plus": 62726,
            "bookmarks-minus": 62727,
            "bookmarks-heart": 62728,
            "bookmarks-check": 62729,
            "bookmark": 62730,
            "bookmark-user": 62731,
            "bookmark-times": 62732,
            "bookmark-star": 62733,
            "bookmark-settings": 62734,
            "bookmark-plus": 62735,
            "bookmark-minus": 62736,
            "bookmark-heart": 62737,
            "bookmark-check": 62738,
            "book": 62739,
            "book-text": 62740,
            "book-open": 62741,
            "book-open-text": 62742,
            "book-open-reader": 62743,
            "book-open-bookmark": 62744,
            "book-empty": 62745,
            "book-bookmark": 62746,
            "book-alt": 62747,
            "bone": 62748,
            "bone-break": 62749,
            "bolt": 62750,
            "bolt-square": 62751,
            "bolt-square-alt": 62752,
            "bolt-slash": 62753,
            "bolt-slash-alt": 62754,
            "bolt-circle": 62755,
            "bolt-circle-alt": 62756,
            "bolt-alt": 62757,
            "bluetooth": 62758,
            "bitcoin": 62759,
            "bitcoin-square": 62760,
            "bitcoin-circle": 62761,
            "bezier": 62762,
            "bell": 62763,
            "bell-times": 62764,
            "bell-slash": 62765,
            "bell-plus": 62766,
            "bell-on": 62767,
            "bell-notification": 62768,
            "bell-minus": 62769,
            "bell-exclamation": 62770,
            "bed": 62771,
            "battery-half": 62772,
            "battery-full": 62773,
            "battery-empty": 62774,
            "battery-bolt": 62775,
            "bank": 62776,
            "bandage": 62777,
            "ban": 62778,
            "badge": 62779,
            "badge-like": 62780,
            "badge-dollar": 62781,
            "badge-discount": 62782,
            "badge-discount-alt": 62783,
            "badge-check": 62784,
            "backward": 62785,
            "backpack": 62786,
            "award": 62787,
            "award-star": 62788,
            "award-check": 62789,
            "atom": 62790,
            "at": 62791,
            "arrows-up-down": 62792,
            "arrows-repeat": 62793,
            "arrows-repeat-square": 62794,
            "arrows-repeat-circle": 62795,
            "arrows-move": 62796,
            "arrows-left-right": 62797,
            "arrows-expand": 62798,
            "arrows-compress": 62799,
            "arrow-up": 62800,
            "arrow-up-to-line": 62801,
            "arrow-up-square": 62802,
            "arrow-up-small": 62803,
            "arrow-up-right": 62804,
            "arrow-up-right-square": 62805,
            "arrow-up-right-small": 62806,
            "arrow-up-right-circle": 62807,
            "arrow-up-left": 62808,
            "arrow-up-left-square": 62809,
            "arrow-up-left-small": 62810,
            "arrow-up-left-circle": 62811,
            "arrow-up-from-line": 62812,
            "arrow-up-circle": 62813,
            "arrow-turn-up-right": 62814,
            "arrow-turn-up-left": 62815,
            "arrow-turn-right-up": 62816,
            "arrow-turn-right-down": 62817,
            "arrow-turn-left-up": 62818,
            "arrow-turn-left-down": 62819,
            "arrow-turn-down-right": 62820,
            "arrow-turn-down-left": 62821,
            "arrow-share": 62822,
            "arrow-right": 62823,
            "arrow-right-to-line": 62824,
            "arrow-right-square": 62825,
            "arrow-right-small": 62826,
            "arrow-right-line": 62827,
            "arrow-right-from-line": 62828,
            "arrow-right-circle": 62829,
            "arrow-reply": 62830,
            "arrow-left": 62831,
            "arrow-left-to-line": 62832,
            "arrow-left-square": 62833,
            "arrow-left-small": 62834,
            "arrow-left-from-line": 62835,
            "arrow-left-circle": 62836,
            "arrow-left-arrow-right": 62837,
            "arrow-left-arrow-right-square": 62838,
            "arrow-left-arrow-right-circle": 62839,
            "arrow-import": 62840,
            "arrow-forward": 62841,
            "arrow-forward-square": 62842,
            "arrow-forward-square-alt": 62843,
            "arrow-forward-circle": 62844,
            "arrow-forward-circle-alt": 62845,
            "arrow-forward-alt": 62846,
            "arrow-export": 62847,
            "arrow-down": 62848,
            "arrow-down-to-line": 62849,
            "arrow-down-square": 62850,
            "arrow-down-small": 62851,
            "arrow-down-right": 62852,
            "arrow-down-right-square": 62853,
            "arrow-down-right-small": 62854,
            "arrow-down-right-circle": 62855,
            "arrow-down-left": 62856,
            "arrow-down-left-square": 62857,
            "arrow-down-left-small": 62858,
            "arrow-down-left-circle": 62859,
            "arrow-down-from-line": 62860,
            "arrow-down-circle": 62861,
            "arrow-down-arrow-up": 62862,
            "arrow-down-arrow-up-square": 62863,
            "arrow-down-arrow-up-circle": 62864,
            "arrow-back": 62865,
            "arrow-back-square": 62866,
            "arrow-back-square-alt": 62867,
            "arrow-back-circle": 62868,
            "arrow-back-circle-alt": 62869,
            "arrow-back-alt": 62870,
            "archway": 62871,
            "archive": 62872,
            "angles-up": 62873,
            "angles-up-small": 62874,
            "angles-right": 62875,
            "angles-right-small": 62876,
            "angles-left": 62877,
            "angles-left-small": 62878,
            "angles-left-right": 62879,
            "angles-down": 62880,
            "angles-down-up": 62881,
            "angles-down-small": 62882,
            "angle-up": 62883,
            "angle-up-square": 62884,
            "angle-up-small": 62885,
            "angle-up-circle": 62886,
            "angle-right": 62887,
            "angle-right-square": 62888,
            "angle-right-small": 62889,
            "angle-right-circle": 62890,
            "angle-left": 62891,
            "angle-left-square": 62892,
            "angle-left-small": 62893,
            "angle-left-circle": 62894,
            "angle-down": 62895,
            "angle-down-square": 62896,
            "angle-down-small": 62897,
            "angle-down-circle": 62898,
            "alarm-times": 62899,
            "alarm-times-alt": 62900,
            "alarm-plus": 62901,
            "alarm-plus-alt": 62902,
            "alarm-minus": 62903,
            "alarm-minus-alt": 62904,
            "alarm-edit": 62905,
            "alarm-clock": 62906,
            "alarm-clock-empty": 62907,
            "alarm-clock-alt": 62908,
            "alarm-check": 62909,
            "alarm-check-alt": 62910,
            "airplay": 62911,
            "airplay-alt": 62912,
            "address-book": 62913,
            "activity-star-square": 62914,
            "activity-star-circle": 62915,
            "activity-square": 62916,
            "activity-notification-square": 62917,
            "activity-notification-circle": 62918,
            "activity-heart-square": 62919,
            "activity-heart-circle": 62920,
            "activity-circle": 62921
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
            "verified": 61724,
            "vector": 61725,
            "users": 61726,
            "users-slash": 61727,
            "users-group": 61728,
            "users-group-slash": 61729,
            "users-group-alt": 61730,
            "users-alt": 61731,
            "user": 61732,
            "user-viewfinder": 61733,
            "user-times": 61734,
            "user-times-bottom": 61735,
            "user-times-alt": 61736,
            "user-tag": 61737,
            "user-star": 61738,
            "user-square": 61739,
            "user-slash": 61740,
            "user-shield": 61741,
            "user-settings": 61742,
            "user-search": 61743,
            "user-plus": 61744,
            "user-plus-bottom": 61745,
            "user-plus-alt": 61746,
            "user-minus": 61747,
            "user-minus-bottom": 61748,
            "user-minus-alt": 61749,
            "user-lock": 61750,
            "user-heart": 61751,
            "user-eye": 61752,
            "user-edit": 61753,
            "user-dollar": 61754,
            "user-code": 61755,
            "user-clock": 61756,
            "user-circle": 61757,
            "user-check": 61758,
            "user-check-bottom": 61759,
            "user-check-alt": 61760,
            "user-change": 61761,
            "user-ban": 61762,
            "user-alt": 61763,
            "usb-drive": 61764,
            "upload": 61765,
            "upload-alt": 61766,
            "unlock": 61767,
            "university": 61768,
            "tv": 61769,
            "tv-retro": 61770,
            "tv-play": 61771,
            "truck": 61772,
            "trophy": 61773,
            "trophy-star": 61774,
            "triangle": 61775,
            "triangle-exclamation": 61776,
            "trend-up": 61777,
            "trend-up-square": 61778,
            "trend-up-circle": 61779,
            "trend-down": 61780,
            "trend-down-square": 61781,
            "trend-down-circle": 61782,
            "tree": 61783,
            "trash": 61784,
            "trash-undo": 61785,
            "trash-times": 61786,
            "trash-slash": 61787,
            "trash-redo": 61788,
            "trash-plus": 61789,
            "trash-minus": 61790,
            "trash-check": 61791,
            "traffic-cone": 61792,
            "tooth": 61793,
            "tool": 61794,
            "toggle-on": 61795,
            "toggle-on-rectangle": 61796,
            "toggle-on-alt": 61797,
            "toggle-off": 61798,
            "toggle-off-rectangle": 61799,
            "toggle-off-alt": 61800,
            "times": 61801,
            "times-square": 61802,
            "times-circle": 61803,
            "time-past": 61804,
            "time-forward": 61805,
            "thumbtack": 61806,
            "thumbtack-vertical": 61807,
            "thermometer": 61808,
            "test-tube": 61809,
            "test-tube-alt": 61810,
            "telescope": 61811,
            "taxi": 61812,
            "target": 61813,
            "tags": 61814,
            "tag": 61815,
            "tablet": 61816,
            "syringe": 61817,
            "sun": 61818,
            "story": 61819,
            "store": 61820,
            "stopwatch": 61821,
            "stopwatch-times": 61822,
            "stopwatch-times-alt": 61823,
            "stopwatch-plus": 61824,
            "stopwatch-plus-alt": 61825,
            "stopwatch-minus": 61826,
            "stopwatch-minus-alt": 61827,
            "stopwatch-empty": 61828,
            "stopwatch-edit": 61829,
            "stopwatch-check": 61830,
            "stopwatch-check-alt": 61831,
            "stopwatch-alt": 61832,
            "stop": 61833,
            "stop-circle": 61834,
            "sticky-note-text-square": 61835,
            "sticky-note-text-circle": 61836,
            "sticky-note-square": 61837,
            "sticky-note-circle": 61838,
            "stethoscope": 61839,
            "step-forward": 61840,
            "step-backward": 61841,
            "star": 61842,
            "star-tag": 61843,
            "star-square": 61844,
            "star-slash": 61845,
            "star-shooting": 61846,
            "star-shooting-horizontal": 61847,
            "star-magic": 61848,
            "star-half": 61849,
            "star-circle": 61850,
            "speedometer": 61851,
            "speaker": 61852,
            "sparkle": 61853,
            "sort": 61854,
            "sort-vertical": 61855,
            "sort-horizontal": 61856,
            "sort-descending": 61857,
            "sort-descending-square": 61858,
            "sort-descending-circle": 61859,
            "sort-ascending": 61860,
            "sort-ascending-square": 61861,
            "sort-ascending-circle": 61862,
            "sofa": 61863,
            "sliders-vertical": 61864,
            "sliders-vertical-alt": 61865,
            "sliders-horizontal": 61866,
            "sliders-horizontal-alt": 61867,
            "sim-card": 61868,
            "sim-card-2": 61869,
            "sim-card-1": 61870,
            "signs-direction": 61871,
            "signal-stream": 61872,
            "sign-direction-right": 61873,
            "sign-direction-left": 61874,
            "shuffle": 61875,
            "shopping-cart": 61876,
            "shopping-cart-times": 61877,
            "shopping-cart-star": 61878,
            "shopping-cart-plus": 61879,
            "shopping-cart-minus": 61880,
            "shopping-cart-heart": 61881,
            "shopping-cart-check": 61882,
            "shopping-cart-arrow-top": 61883,
            "shopping-cart-arrow-down": 61884,
            "shopping-basket": 61885,
            "shopping-basket-times": 61886,
            "shopping-basket-star": 61887,
            "shopping-basket-plus": 61888,
            "shopping-basket-minus": 61889,
            "shopping-basket-heart": 61890,
            "shopping-basket-check": 61891,
            "shopping-basket-arrow-up": 61892,
            "shopping-basket-arrow-down": 61893,
            "shopping-bag": 61894,
            "shopping-bag-alt": 61895,
            "shield": 61896,
            "shield-user": 61897,
            "shield-times": 61898,
            "shield-star": 61899,
            "shield-slash": 61900,
            "shield-search": 61901,
            "shield-question": 61902,
            "shield-plus": 61903,
            "shield-play": 61904,
            "shield-minus": 61905,
            "shield-lock": 61906,
            "shield-heart": 61907,
            "shield-exclamation": 61908,
            "shield-check": 61909,
            "shield-bolt": 61910,
            "share": 61911,
            "settings": 61912,
            "server": 61913,
            "send": 61914,
            "send-right": 61915,
            "search": 61916,
            "search-text": 61917,
            "search-plus": 61918,
            "search-minus": 61919,
            "sd-card": 61920,
            "scissors": 61921,
            "school": 61922,
            "scanner": 61923,
            "scan": 61924,
            "scan-qr": 61925,
            "scan-circle": 61926,
            "sack-dollar": 61927,
            "route": 61928,
            "rotate": 61929,
            "rotate-square": 61930,
            "rotate-right": 61931,
            "rotate-right-square": 61932,
            "rotate-right-circle": 61933,
            "rotate-left": 61934,
            "rotate-left-square": 61935,
            "rotate-left-circle": 61936,
            "rotate-circle": 61937,
            "rocket": 61938,
            "rocket-launch": 61939,
            "road": 61940,
            "restaurant": 61941,
            "repeat": 61942,
            "registered-square": 61943,
            "registered-circle": 61944,
            "receipt": 61945,
            "receipt-text": 61946,
            "receipt-text-alt": 61947,
            "receipt-star": 61948,
            "receipt-star-alt": 61949,
            "receipt-percent": 61950,
            "receipt-percent-alt": 61951,
            "receipt-list": 61952,
            "receipt-list-alt": 61953,
            "receipt-heart": 61954,
            "receipt-heart-alt": 61955,
            "receipt-alt": 61956,
            "ranking": 61957,
            "radio": 61958,
            "radio-button-fill": 61959,
            "radiation": 61960,
            "radiation-circle": 61961,
            "radar": 61962,
            "question-square": 61963,
            "question-circle": 61964,
            "puzzle": 61965,
            "print": 61966,
            "print-slash": 61967,
            "presentation": 61968,
            "presentation-user": 61969,
            "presentation-trend-up": 61970,
            "presentation-trend-down": 61971,
            "presentation-text": 61972,
            "presentation-poll": 61973,
            "presentation-play": 61974,
            "presentation-pen": 61975,
            "presentation-lightbulb": 61976,
            "presentation-dollar": 61977,
            "presentation-chart-pie": 61978,
            "presentation-chart-line": 61979,
            "power-off": 61980,
            "power-off-square": 61981,
            "power-off-circle": 61982,
            "poll-vertical-square": 61983,
            "poll-vertical-circle": 61984,
            "poll-horizontal-square": 61985,
            "poll-horizontal-circle": 61986,
            "plus": 61987,
            "plus-square": 61988,
            "plus-circle": 61989,
            "plug": 61990,
            "playlist": 61991,
            "play": 61992,
            "play-square": 61993,
            "play-pause": 61994,
            "play-circle": 61995,
            "pills": 61996,
            "phone": 61997,
            "phone-times": 61998,
            "phone-slash": 61999,
            "phone-plus": 62e3,
            "phone-outgoing": 62001,
            "phone-office": 62002,
            "phone-missed": 62003,
            "phone-incoming": 62004,
            "phone-hangup": 62005,
            "phone-flip": 62006,
            "phone-call": 62007,
            "phone-2": 62008,
            "phone-1": 62009,
            "percent": 62010,
            "percent-tag": 62011,
            "percent-square": 62012,
            "percent-circle": 62013,
            "pen": 62014,
            "pen-tool": 62015,
            "pen-line": 62016,
            "pause": 62017,
            "pause-circle": 62018,
            "parking-square": 62019,
            "parking-circle": 62020,
            "papers": 62021,
            "papers-text": 62022,
            "paperclip": 62023,
            "palette": 62024,
            "package": 62025,
            "package-star": 62026,
            "package-heart": 62027,
            "package-dollar": 62028,
            "package-check": 62029,
            "octagon": 62030,
            "octagon-times": 62031,
            "octagon-plus": 62032,
            "octagon-minus": 62033,
            "octagon-exclamation": 62034,
            "octagon-check": 62035,
            "nut": 62036,
            "notebook": 62037,
            "note": 62038,
            "note-text": 62039,
            "note-text-square": 62040,
            "note-list": 62041,
            "note-list-square": 62042,
            "note-list-check": 62043,
            "note-list-check-square": 62044,
            "newspaper": 62045,
            "music": 62046,
            "music-note": 62047,
            "music-list": 62048,
            "mug": 62049,
            "mug-hot": 62050,
            "mouse": 62051,
            "mosque": 62052,
            "mortar-pestle": 62053,
            "more-vertical": 62054,
            "more-vertical-square": 62055,
            "more-vertical-circle": 62056,
            "more-horizontal": 62057,
            "more-horizontal-square": 62058,
            "more-horizontal-circle": 62059,
            "moon": 62060,
            "monitor-waveform": 62061,
            "money-withdrawal": 62062,
            "money-convert": 62063,
            "money-bills": 62064,
            "money-bill": 62065,
            "money-bill-times": 62066,
            "money-bill-send": 62067,
            "money-bill-receive": 62068,
            "money-bill-plus": 62069,
            "money-bill-minus": 62070,
            "money-bill-convert": 62071,
            "money-bill-clock": 62072,
            "money-bill-check": 62073,
            "money-bill-ban": 62074,
            "mobile": 62075,
            "minus": 62076,
            "minus-square": 62077,
            "minus-circle": 62078,
            "minimize": 62079,
            "microscope": 62080,
            "microphone": 62081,
            "microphone-stand": 62082,
            "microphone-slash": 62083,
            "messages": 62084,
            "messages-text": 62085,
            "messages-dots": 62086,
            "message": 62087,
            "message-times": 62088,
            "message-times-alt": 62089,
            "message-text": 62090,
            "message-text-times": 62091,
            "message-text-plus": 62092,
            "message-text-notification": 62093,
            "message-text-minus": 62094,
            "message-text-check": 62095,
            "message-star": 62096,
            "message-shield": 62097,
            "message-settings": 62098,
            "message-search": 62099,
            "message-question": 62100,
            "message-plus": 62101,
            "message-plus-alt": 62102,
            "message-notification": 62103,
            "message-minus": 62104,
            "message-minus-alt": 62105,
            "message-lock": 62106,
            "message-info": 62107,
            "message-heart": 62108,
            "message-exclamation": 62109,
            "message-edit": 62110,
            "message-dots": 62111,
            "message-dots-times": 62112,
            "message-dots-plus": 62113,
            "message-dots-notification": 62114,
            "message-dots-minus": 62115,
            "message-dots-check": 62116,
            "message-code": 62117,
            "message-clock": 62118,
            "message-check": 62119,
            "message-check-alt": 62120,
            "message-activity": 62121,
            "menu": 62122,
            "menu-square": 62123,
            "menu-square-alt": 62124,
            "menu-right": 62125,
            "menu-right-square": 62126,
            "menu-right-square-alt": 62127,
            "menu-right-circle": 62128,
            "menu-right-circle-alt": 62129,
            "menu-right-alt": 62130,
            "menu-left": 62131,
            "menu-left-square": 62132,
            "menu-left-square-alt": 62133,
            "menu-left-circle": 62134,
            "menu-left-circle-alt": 62135,
            "menu-left-alt": 62136,
            "menu-duo": 62137,
            "menu-duo-square": 62138,
            "menu-duo-circle": 62139,
            "menu-circle": 62140,
            "menu-circle-alt": 62141,
            "menu-alt": 62142,
            "megaphone": 62143,
            "medal": 62144,
            "medal-star": 62145,
            "medal-check": 62146,
            "maximize": 62147,
            "mask-face": 62148,
            "map": 62149,
            "map-pin": 62150,
            "map-location": 62151,
            "magnet": 62152,
            "log-out": 62153,
            "log-in": 62154,
            "lock": 62155,
            "lock-viewfinder": 62156,
            "location-pin": 62157,
            "location-pin-times": 62158,
            "location-pin-star": 62159,
            "location-pin-slash": 62160,
            "location-pin-slash-alt": 62161,
            "location-pin-search": 62162,
            "location-pin-question": 62163,
            "location-pin-plus": 62164,
            "location-pin-minus": 62165,
            "location-pin-lock": 62166,
            "location-pin-heart": 62167,
            "location-pin-eye": 62168,
            "location-pin-exclamation": 62169,
            "location-pin-edit": 62170,
            "location-pin-check": 62171,
            "location-pin-alt": 62172,
            "location-crosshairs": 62173,
            "location-crosshairs-slash": 62174,
            "location-arrow": 62175,
            "location-arrow-square": 62176,
            "location-arrow-circle": 62177,
            "list": 62178,
            "link": 62179,
            "link-horizontal": 62180,
            "link-horizontal-alt": 62181,
            "link-broken": 62182,
            "link-broken-horizontal": 62183,
            "link-alt": 62184,
            "line-up-square": 62185,
            "line-up-circle": 62186,
            "line-down-square": 62187,
            "line-down-circle": 62188,
            "line-chart-dots": 62189,
            "line-chart-dots-square": 62190,
            "line-chart-dots-circle": 62191,
            "like": 62192,
            "like-tag": 62193,
            "like-square": 62194,
            "like-circle": 62195,
            "lightbulb": 62196,
            "light-emergency": 62197,
            "light-emergency-on": 62198,
            "life-ring": 62199,
            "leaf": 62200,
            "layout-web-9": 62201,
            "layout-web-8": 62202,
            "layout-web-7": 62203,
            "layout-web-6": 62204,
            "layout-web-5": 62205,
            "layout-web-4": 62206,
            "layout-web-3": 62207,
            "layout-web-2": 62208,
            "layout-web-12": 62209,
            "layout-web-11": 62210,
            "layout-web-10": 62211,
            "layout-web-1": 62212,
            "layer-group": 62213,
            "laptop": 62214,
            "laptop-code": 62215,
            "keypad": 62216,
            "keyhole-square": 62217,
            "keyhole-circle": 62218,
            "keyboard": 62219,
            "key": 62220,
            "key-square": 62221,
            "key-circle": 62222,
            "kaaba": 62223,
            "invoice": 62224,
            "info-square": 62225,
            "info-circle": 62226,
            "inbox": 62227,
            "inbox-upload": 62228,
            "inbox-empty": 62229,
            "inbox-download": 62230,
            "image": 62231,
            "image-upload": 62232,
            "image-times": 62233,
            "image-plus": 62234,
            "image-minus": 62235,
            "image-gallery": 62236,
            "image-gallery-plus": 62237,
            "image-download": 62238,
            "image-check": 62239,
            "id-card": 62240,
            "id-badge": 62241,
            "hourglass": 62242,
            "hospital": 62243,
            "hospital-h-sign-square": 62244,
            "hospital-h-sign-circle": 62245,
            "home": 62246,
            "home-wifi": 62247,
            "home-user": 62248,
            "home-trend-up": 62249,
            "home-trend-down": 62250,
            "home-star": 62251,
            "home-shield": 62252,
            "home-search": 62253,
            "home-roof": 62254,
            "home-roof-wifi": 62255,
            "home-roof-user": 62256,
            "home-roof-trend-up": 62257,
            "home-roof-trend-down": 62258,
            "home-roof-star": 62259,
            "home-roof-shield": 62260,
            "home-roof-search": 62261,
            "home-roof-lock": 62262,
            "home-roof-heart": 62263,
            "home-roof-dollar": 62264,
            "home-roof-activity": 62265,
            "home-lock": 62266,
            "home-heart": 62267,
            "home-dollar": 62268,
            "home-dash": 62269,
            "home-dash-wifi": 62270,
            "home-dash-user": 62271,
            "home-dash-trend-up": 62272,
            "home-dash-trend-down": 62273,
            "home-dash-star": 62274,
            "home-dash-shield": 62275,
            "home-dash-search": 62276,
            "home-dash-lock": 62277,
            "home-dash-heart": 62278,
            "home-dash-dollar": 62279,
            "home-dash-activity": 62280,
            "home-activity": 62281,
            "heart": 62282,
            "heart-times": 62283,
            "heart-tag": 62284,
            "heart-square": 62285,
            "heart-slash": 62286,
            "heart-pulse": 62287,
            "heart-plus": 62288,
            "heart-minus": 62289,
            "heart-circle": 62290,
            "heart-check": 62291,
            "headphones": 62292,
            "hashtag": 62293,
            "hard-drive": 62294,
            "hand-holding-user": 62295,
            "hand-holding-dollar": 62296,
            "hand-holding-dollar-circle": 62297,
            "grid-web-7": 62298,
            "grid-web-6": 62299,
            "grid-web-5": 62300,
            "grid-web-4": 62301,
            "grid-web-3": 62302,
            "grid-web-2": 62303,
            "grid-web-1": 62304,
            "grid-square": 62305,
            "grid-square-plus": 62306,
            "grid-square-circle": 62307,
            "grid-dividers": 62308,
            "grid-circle": 62309,
            "grid-2": 62310,
            "grid-1": 62311,
            "graduation-cap": 62312,
            "globe": 62313,
            "globe-stand": 62314,
            "globe-earth": 62315,
            "glasses": 62316,
            "gift": 62317,
            "game-controller": 62318,
            "forward": 62319,
            "food-tray": 62320,
            "folder": 62321,
            "folder-user": 62322,
            "folder-upload": 62323,
            "folder-times": 62324,
            "folder-star": 62325,
            "folder-shield": 62326,
            "folder-settings": 62327,
            "folder-search": 62328,
            "folder-plus": 62329,
            "folder-open": 62330,
            "folder-music": 62331,
            "folder-minus": 62332,
            "folder-lock": 62333,
            "folder-import": 62334,
            "folder-heart": 62335,
            "folder-export": 62336,
            "folder-edit": 62337,
            "folder-download": 62338,
            "folder-connection": 62339,
            "folder-code": 62340,
            "folder-clock": 62341,
            "folder-check": 62342,
            "folder-ban": 62343,
            "folder-alt": 62344,
            "floppy-disk": 62345,
            "flask": 62346,
            "flask-round": 62347,
            "flashlight": 62348,
            "flashlight-fill": 62349,
            "flag": 62350,
            "flag-triangle": 62351,
            "fire": 62352,
            "fingerprint": 62353,
            "fingerprint-viewfinder": 62354,
            "filter": 62355,
            "filter-times": 62356,
            "filter-plus": 62357,
            "filter-minus": 62358,
            "filter-check": 62359,
            "film": 62360,
            "file": 62361,
            "file-user": 62362,
            "file-upload": 62363,
            "file-times": 62364,
            "file-text": 62365,
            "file-text-times": 62366,
            "file-text-star": 62367,
            "file-text-shield": 62368,
            "file-text-search": 62369,
            "file-text-plus": 62370,
            "file-text-minus": 62371,
            "file-text-lock": 62372,
            "file-text-heart": 62373,
            "file-text-edit": 62374,
            "file-text-check": 62375,
            "file-text-ban": 62376,
            "file-star": 62377,
            "file-shield": 62378,
            "file-settings": 62379,
            "file-search": 62380,
            "file-plus": 62381,
            "file-music": 62382,
            "file-minus": 62383,
            "file-lock": 62384,
            "file-list": 62385,
            "file-list-times": 62386,
            "file-list-star": 62387,
            "file-list-shield": 62388,
            "file-list-search": 62389,
            "file-list-plus": 62390,
            "file-list-minus": 62391,
            "file-list-lock": 62392,
            "file-list-heart": 62393,
            "file-list-edit": 62394,
            "file-list-check": 62395,
            "file-list-ban": 62396,
            "file-import": 62397,
            "file-import-alt": 62398,
            "file-heart": 62399,
            "file-export": 62400,
            "file-export-alt": 62401,
            "file-edit": 62402,
            "file-download": 62403,
            "file-copy": 62404,
            "file-code": 62405,
            "file-clock": 62406,
            "file-check": 62407,
            "file-ban": 62408,
            "fast-forward": 62409,
            "fast-backward": 62410,
            "eye": 62411,
            "eye-slash": 62412,
            "eye-closed": 62413,
            "expand": 62414,
            "exclamation-square": 62415,
            "exclamation-circle": 62416,
            "exchange-vertical": 62417,
            "exchange-vertical-square": 62418,
            "exchange-vertical-circle": 62419,
            "exchange-horizontal": 62420,
            "exchange-horizontal-square": 62421,
            "exchange-horizontal-circle": 62422,
            "euro": 62423,
            "euro-square": 62424,
            "euro-circle": 62425,
            "ethereum": 62426,
            "ethereum-square": 62427,
            "ethereum-circle": 62428,
            "envelopes": 62429,
            "envelope": 62430,
            "envelope-times": 62431,
            "envelope-star": 62432,
            "envelope-shield": 62433,
            "envelope-settings": 62434,
            "envelope-search": 62435,
            "envelope-plus": 62436,
            "envelope-open": 62437,
            "envelope-notification": 62438,
            "envelope-minus": 62439,
            "envelope-lock": 62440,
            "envelope-heart": 62441,
            "envelope-eye": 62442,
            "envelope-edit": 62443,
            "envelope-clock": 62444,
            "envelope-check": 62445,
            "envelope-ban": 62446,
            "eject": 62447,
            "edit": 62448,
            "droplet": 62449,
            "droplet-slash": 62450,
            "drag-vertical": 62451,
            "drag-lines-vertical": 62452,
            "drag-lines-horizontal": 62453,
            "drag-horizontal": 62454,
            "download": 62455,
            "download-alt": 62456,
            "door-open": 62457,
            "door-closed": 62458,
            "dollar": 62459,
            "dollar-square": 62460,
            "dollar-send-square": 62461,
            "dollar-send-circle": 62462,
            "dollar-receive-square": 62463,
            "dollar-receive-circle": 62464,
            "dollar-circle": 62465,
            "document": 62466,
            "document-list": 62467,
            "document-list-check": 62468,
            "dna": 62469,
            "dislike": 62470,
            "dislike-tag": 62471,
            "dislike-square": 62472,
            "dislike-circle": 62473,
            "discount-percent-fill": 62474,
            "disc": 62475,
            "diamond": 62476,
            "diamond-exclamation": 62477,
            "desktop": 62478,
            "desktop-mobile": 62479,
            "desktop-code": 62480,
            "delivery-cart": 62481,
            "delivery-cart-arrow-up": 62482,
            "delivery-cart-arrow-down": 62483,
            "delete-right": 62484,
            "delete-left": 62485,
            "database": 62486,
            "cursor": 62487,
            "cursor-click": 62488,
            "crown": 62489,
            "crown-alt": 62490,
            "credit-card": 62491,
            "credit-card-times": 62492,
            "credit-card-slash": 62493,
            "credit-card-plus": 62494,
            "credit-card-minus": 62495,
            "credit-card-edit": 62496,
            "credit-card-convert": 62497,
            "credit-card-check": 62498,
            "credit-card-change": 62499,
            "credit-card-ban": 62500,
            "cpu": 62501,
            "coupon": 62502,
            "coupon-star": 62503,
            "coupon-percent": 62504,
            "coupon-heart": 62505,
            "copy2right-square": 62506,
            "copy2right-circle": 62507,
            "copy": 62508,
            "copy-plus": 62509,
            "copy-check": 62510,
            "copy-alt": 62511,
            "contrast": 62512,
            "compress": 62513,
            "compass": 62514,
            "compass-needle": 62515,
            "comments": 62516,
            "comments-text": 62517,
            "comments-dots": 62518,
            "comment": 62519,
            "comment-times": 62520,
            "comment-times-alt": 62521,
            "comment-text": 62522,
            "comment-text-times": 62523,
            "comment-text-plus": 62524,
            "comment-text-notification": 62525,
            "comment-text-minus": 62526,
            "comment-text-check": 62527,
            "comment-star": 62528,
            "comment-shield": 62529,
            "comment-settings": 62530,
            "comment-search": 62531,
            "comment-question": 62532,
            "comment-plus": 62533,
            "comment-plus-alt": 62534,
            "comment-notification": 62535,
            "comment-minus": 62536,
            "comment-minus-alt": 62537,
            "comment-lock": 62538,
            "comment-info": 62539,
            "comment-heart": 62540,
            "comment-exclamation": 62541,
            "comment-edit": 62542,
            "comment-dots": 62543,
            "comment-dots-times": 62544,
            "comment-dots-plus": 62545,
            "comment-dots-notification": 62546,
            "comment-dots-minus": 62547,
            "comment-dots-check": 62548,
            "comment-code": 62549,
            "comment-clock": 62550,
            "comment-check": 62551,
            "comment-check-alt": 62552,
            "comment-activity": 62553,
            "coins": 62554,
            "coin": 62555,
            "coin-convert": 62556,
            "coin-card-transfer": 62557,
            "code": 62558,
            "code-square": 62559,
            "code-circle": 62560,
            "cloud": 62561,
            "cloud-upload": 62562,
            "cloud-times": 62563,
            "cloud-slash": 62564,
            "cloud-shield": 62565,
            "cloud-share": 62566,
            "cloud-plus": 62567,
            "cloud-minus": 62568,
            "cloud-lock": 62569,
            "cloud-download": 62570,
            "cloud-connection": 62571,
            "cloud-check": 62572,
            "closed-captioning": 62573,
            "clock": 62574,
            "clock-square": 62575,
            "clock-square-alt": 62576,
            "clock-alt": 62577,
            "clipboard": 62578,
            "clipboard-times": 62579,
            "clipboard-text": 62580,
            "clipboard-star": 62581,
            "clipboard-search": 62582,
            "clipboard-plus": 62583,
            "clipboard-minus": 62584,
            "clipboard-list": 62585,
            "clipboard-list-check": 62586,
            "clipboard-heart": 62587,
            "clipboard-edit": 62588,
            "clipboard-check": 62589,
            "chromecast": 62590,
            "chevron-up": 62591,
            "chevron-right": 62592,
            "chevron-left": 62593,
            "chevron-down": 62594,
            "chevron-big-up": 62595,
            "chevron-big-right": 62596,
            "chevron-big-left": 62597,
            "chevron-big-down": 62598,
            "checkbox-square-fill": 62599,
            "check": 62600,
            "check-square": 62601,
            "check-double": 62602,
            "check-circle": 62603,
            "chats": 62604,
            "chats-text": 62605,
            "chats-dots": 62606,
            "chat": 62607,
            "chat-times": 62608,
            "chat-times-alt": 62609,
            "chat-text": 62610,
            "chat-text-times": 62611,
            "chat-text-plus": 62612,
            "chat-text-notification": 62613,
            "chat-text-minus": 62614,
            "chat-text-check": 62615,
            "chat-star": 62616,
            "chat-shield": 62617,
            "chat-settings": 62618,
            "chat-search": 62619,
            "chat-question": 62620,
            "chat-plus": 62621,
            "chat-plus-alt": 62622,
            "chat-notification": 62623,
            "chat-minus": 62624,
            "chat-minus-alt": 62625,
            "chat-lock": 62626,
            "chat-info": 62627,
            "chat-heart": 62628,
            "chat-exclamation": 62629,
            "chat-edit": 62630,
            "chat-dots": 62631,
            "chat-dots-times": 62632,
            "chat-dots-plus": 62633,
            "chat-dots-notification": 62634,
            "chat-dots-minus": 62635,
            "chat-dots-check": 62636,
            "chat-code": 62637,
            "chat-clock": 62638,
            "chat-check": 62639,
            "chat-check-alt": 62640,
            "chat-activity": 62641,
            "chart-trend-up": 62642,
            "chart-trend-down": 62643,
            "chart-pyramid": 62644,
            "chart-pie": 62645,
            "chart-line": 62646,
            "chart-line-up": 62647,
            "chart-line-down": 62648,
            "chart-line-dots": 62649,
            "chart-bar": 62650,
            "chart-bar-vertical": 62651,
            "chart-bar-square": 62652,
            "chart-bar-horizontal": 62653,
            "chart-bar-circle": 62654,
            "chart-bar-alt": 62655,
            "certificate": 62656,
            "castle": 62657,
            "caret-up": 62658,
            "caret-up-square": 62659,
            "caret-up-circle": 62660,
            "caret-right": 62661,
            "caret-right-square": 62662,
            "caret-right-circle": 62663,
            "caret-left": 62664,
            "caret-left-square": 62665,
            "caret-left-circle": 62666,
            "caret-down": 62667,
            "caret-down-square": 62668,
            "caret-down-circle": 62669,
            "camera": 62670,
            "camera-square": 62671,
            "camera-slash": 62672,
            "camera-rotate": 62673,
            "camera-circle": 62674,
            "calendar": 62675,
            "calendar-times": 62676,
            "calendar-times-alt": 62677,
            "calendar-star": 62678,
            "calendar-search": 62679,
            "calendar-plus": 62680,
            "calendar-plus-alt": 62681,
            "calendar-minus": 62682,
            "calendar-minus-alt": 62683,
            "calendar-lock": 62684,
            "calendar-heart": 62685,
            "calendar-empty": 62686,
            "calendar-empty-alt": 62687,
            "calendar-edit": 62688,
            "calendar-clock": 62689,
            "calendar-check": 62690,
            "calendar-check-alt": 62691,
            "calculator": 62692,
            "calculator-simple": 62693,
            "cake": 62694,
            "cabinet-filing": 62695,
            "bus": 62696,
            "buildings": 62697,
            "buildings-alt": 62698,
            "building": 62699,
            "building-tree": 62700,
            "building-coins": 62701,
            "bug": 62702,
            "bug-slash": 62703,
            "brush": 62704,
            "brush-alt": 62705,
            "briefcase": 62706,
            "briefcase-times": 62707,
            "briefcase-plus": 62708,
            "briefcase-money": 62709,
            "briefcase-minus": 62710,
            "briefcase-check": 62711,
            "brain": 62712,
            "boxes": 62713,
            "box": 62714,
            "box-times": 62715,
            "box-search": 62716,
            "box-plus": 62717,
            "box-minus": 62718,
            "box-check": 62719,
            "books": 62720,
            "bookmarks": 62721,
            "bookmarks-user": 62722,
            "bookmarks-times": 62723,
            "bookmarks-star": 62724,
            "bookmarks-settings": 62725,
            "bookmarks-plus": 62726,
            "bookmarks-minus": 62727,
            "bookmarks-heart": 62728,
            "bookmarks-check": 62729,
            "bookmark": 62730,
            "bookmark-user": 62731,
            "bookmark-times": 62732,
            "bookmark-star": 62733,
            "bookmark-settings": 62734,
            "bookmark-plus": 62735,
            "bookmark-minus": 62736,
            "bookmark-heart": 62737,
            "bookmark-check": 62738,
            "book": 62739,
            "book-text": 62740,
            "book-open": 62741,
            "book-open-text": 62742,
            "book-open-reader": 62743,
            "book-open-bookmark": 62744,
            "book-empty": 62745,
            "book-bookmark": 62746,
            "book-alt": 62747,
            "bone": 62748,
            "bone-break": 62749,
            "bolt": 62750,
            "bolt-square": 62751,
            "bolt-square-alt": 62752,
            "bolt-slash": 62753,
            "bolt-slash-alt": 62754,
            "bolt-circle": 62755,
            "bolt-circle-alt": 62756,
            "bolt-alt": 62757,
            "bluetooth": 62758,
            "bitcoin": 62759,
            "bitcoin-square": 62760,
            "bitcoin-circle": 62761,
            "bezier": 62762,
            "bell": 62763,
            "bell-times": 62764,
            "bell-slash": 62765,
            "bell-plus": 62766,
            "bell-on": 62767,
            "bell-notification": 62768,
            "bell-minus": 62769,
            "bell-exclamation": 62770,
            "bed": 62771,
            "battery-half": 62772,
            "battery-full": 62773,
            "battery-empty": 62774,
            "battery-bolt": 62775,
            "bank": 62776,
            "bandage": 62777,
            "ban": 62778,
            "badge": 62779,
            "badge-like": 62780,
            "badge-dollar": 62781,
            "badge-discount": 62782,
            "badge-discount-alt": 62783,
            "badge-check": 62784,
            "backward": 62785,
            "backpack": 62786,
            "award": 62787,
            "award-star": 62788,
            "award-check": 62789,
            "atom": 62790,
            "at": 62791,
            "arrows-up-down": 62792,
            "arrows-repeat": 62793,
            "arrows-repeat-square": 62794,
            "arrows-repeat-circle": 62795,
            "arrows-move": 62796,
            "arrows-left-right": 62797,
            "arrows-expand": 62798,
            "arrows-compress": 62799,
            "arrow-up": 62800,
            "arrow-up-to-line": 62801,
            "arrow-up-square": 62802,
            "arrow-up-small": 62803,
            "arrow-up-right": 62804,
            "arrow-up-right-square": 62805,
            "arrow-up-right-small": 62806,
            "arrow-up-right-circle": 62807,
            "arrow-up-left": 62808,
            "arrow-up-left-square": 62809,
            "arrow-up-left-small": 62810,
            "arrow-up-left-circle": 62811,
            "arrow-up-from-line": 62812,
            "arrow-up-circle": 62813,
            "arrow-turn-up-right": 62814,
            "arrow-turn-up-left": 62815,
            "arrow-turn-right-up": 62816,
            "arrow-turn-right-down": 62817,
            "arrow-turn-left-up": 62818,
            "arrow-turn-left-down": 62819,
            "arrow-turn-down-right": 62820,
            "arrow-turn-down-left": 62821,
            "arrow-share": 62822,
            "arrow-right": 62823,
            "arrow-right-to-line": 62824,
            "arrow-right-square": 62825,
            "arrow-right-small": 62826,
            "arrow-right-line": 62827,
            "arrow-right-from-line": 62828,
            "arrow-right-circle": 62829,
            "arrow-reply": 62830,
            "arrow-left": 62831,
            "arrow-left-to-line": 62832,
            "arrow-left-square": 62833,
            "arrow-left-small": 62834,
            "arrow-left-from-line": 62835,
            "arrow-left-circle": 62836,
            "arrow-left-arrow-right": 62837,
            "arrow-left-arrow-right-square": 62838,
            "arrow-left-arrow-right-circle": 62839,
            "arrow-import": 62840,
            "arrow-forward": 62841,
            "arrow-forward-square": 62842,
            "arrow-forward-square-alt": 62843,
            "arrow-forward-circle": 62844,
            "arrow-forward-circle-alt": 62845,
            "arrow-forward-alt": 62846,
            "arrow-export": 62847,
            "arrow-down": 62848,
            "arrow-down-to-line": 62849,
            "arrow-down-square": 62850,
            "arrow-down-small": 62851,
            "arrow-down-right": 62852,
            "arrow-down-right-square": 62853,
            "arrow-down-right-small": 62854,
            "arrow-down-right-circle": 62855,
            "arrow-down-left": 62856,
            "arrow-down-left-square": 62857,
            "arrow-down-left-small": 62858,
            "arrow-down-left-circle": 62859,
            "arrow-down-from-line": 62860,
            "arrow-down-circle": 62861,
            "arrow-down-arrow-up": 62862,
            "arrow-down-arrow-up-square": 62863,
            "arrow-down-arrow-up-circle": 62864,
            "arrow-back": 62865,
            "arrow-back-square": 62866,
            "arrow-back-square-alt": 62867,
            "arrow-back-circle": 62868,
            "arrow-back-circle-alt": 62869,
            "arrow-back-alt": 62870,
            "archway": 62871,
            "archive": 62872,
            "angles-up": 62873,
            "angles-up-small": 62874,
            "angles-right": 62875,
            "angles-right-small": 62876,
            "angles-left": 62877,
            "angles-left-small": 62878,
            "angles-left-right": 62879,
            "angles-down": 62880,
            "angles-down-up": 62881,
            "angles-down-small": 62882,
            "angle-up": 62883,
            "angle-up-square": 62884,
            "angle-up-small": 62885,
            "angle-up-circle": 62886,
            "angle-right": 62887,
            "angle-right-square": 62888,
            "angle-right-small": 62889,
            "angle-right-circle": 62890,
            "angle-left": 62891,
            "angle-left-square": 62892,
            "angle-left-small": 62893,
            "angle-left-circle": 62894,
            "angle-down": 62895,
            "angle-down-square": 62896,
            "angle-down-small": 62897,
            "angle-down-circle": 62898,
            "alarm-times": 62899,
            "alarm-times-alt": 62900,
            "alarm-plus": 62901,
            "alarm-plus-alt": 62902,
            "alarm-minus": 62903,
            "alarm-minus-alt": 62904,
            "alarm-edit": 62905,
            "alarm-clock": 62906,
            "alarm-clock-empty": 62907,
            "alarm-clock-alt": 62908,
            "alarm-check": 62909,
            "alarm-check-alt": 62910,
            "airplay": 62911,
            "airplay-alt": 62912,
            "address-book": 62913,
            "activity-star-square": 62914,
            "activity-star-circle": 62915,
            "activity-square": 62916,
            "activity-notification-square": 62917,
            "activity-notification-circle": 62918,
            "activity-heart-square": 62919,
            "activity-heart-circle": 62920,
            "activity-circle": 62921
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
