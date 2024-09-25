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
            "storeforgood": 61820,
            "store": 61821,
            "stopwatch": 61822,
            "stopwatch-times": 61823,
            "stopwatch-times-alt": 61824,
            "stopwatch-plus": 61825,
            "stopwatch-plus-alt": 61826,
            "stopwatch-minus": 61827,
            "stopwatch-minus-alt": 61828,
            "stopwatch-empty": 61829,
            "stopwatch-edit": 61830,
            "stopwatch-check": 61831,
            "stopwatch-check-alt": 61832,
            "stopwatch-alt": 61833,
            "stop": 61834,
            "stop-circle": 61835,
            "sticky-note-text-square": 61836,
            "sticky-note-text-circle": 61837,
            "sticky-note-square": 61838,
            "sticky-note-circle": 61839,
            "stethoscope": 61840,
            "step-forward": 61841,
            "step-backward": 61842,
            "star": 61843,
            "star-tag": 61844,
            "star-square": 61845,
            "star-slash": 61846,
            "star-shooting": 61847,
            "star-shooting-horizontal": 61848,
            "star-magic": 61849,
            "star-half": 61850,
            "star-circle": 61851,
            "speedometer": 61852,
            "speaker": 61853,
            "sparkle": 61854,
            "sort": 61855,
            "sort-vertical": 61856,
            "sort-horizontal": 61857,
            "sort-descending": 61858,
            "sort-descending-square": 61859,
            "sort-descending-circle": 61860,
            "sort-ascending": 61861,
            "sort-ascending-square": 61862,
            "sort-ascending-circle": 61863,
            "sofa": 61864,
            "sliders-vertical": 61865,
            "sliders-vertical-alt": 61866,
            "sliders-horizontal": 61867,
            "sliders-horizontal-alt": 61868,
            "sim-card": 61869,
            "sim-card-2": 61870,
            "sim-card-1": 61871,
            "signs-direction": 61872,
            "signal-stream": 61873,
            "sign-direction-right": 61874,
            "sign-direction-left": 61875,
            "shuffle": 61876,
            "shopping-cart": 61877,
            "shopping-cart-times": 61878,
            "shopping-cart-star": 61879,
            "shopping-cart-plus": 61880,
            "shopping-cart-minus": 61881,
            "shopping-cart-heart": 61882,
            "shopping-cart-check": 61883,
            "shopping-cart-arrow-top": 61884,
            "shopping-cart-arrow-down": 61885,
            "shopping-basket": 61886,
            "shopping-basket-times": 61887,
            "shopping-basket-star": 61888,
            "shopping-basket-plus": 61889,
            "shopping-basket-minus": 61890,
            "shopping-basket-heart": 61891,
            "shopping-basket-check": 61892,
            "shopping-basket-arrow-up": 61893,
            "shopping-basket-arrow-down": 61894,
            "shopping-bag": 61895,
            "shopping-bag-alt": 61896,
            "shield": 61897,
            "shield-user": 61898,
            "shield-times": 61899,
            "shield-star": 61900,
            "shield-slash": 61901,
            "shield-search": 61902,
            "shield-question": 61903,
            "shield-plus": 61904,
            "shield-play": 61905,
            "shield-minus": 61906,
            "shield-lock": 61907,
            "shield-heart": 61908,
            "shield-exclamation": 61909,
            "shield-check": 61910,
            "shield-bolt": 61911,
            "share": 61912,
            "settings": 61913,
            "server": 61914,
            "send": 61915,
            "send-right": 61916,
            "search": 61917,
            "search-text": 61918,
            "search-plus": 61919,
            "search-minus": 61920,
            "sd-card": 61921,
            "scissors": 61922,
            "school": 61923,
            "scanner": 61924,
            "scan": 61925,
            "scan-qr": 61926,
            "scan-circle": 61927,
            "sack-dollar": 61928,
            "route": 61929,
            "rotate": 61930,
            "rotate-square": 61931,
            "rotate-right": 61932,
            "rotate-right-square": 61933,
            "rotate-right-circle": 61934,
            "rotate-left": 61935,
            "rotate-left-square": 61936,
            "rotate-left-circle": 61937,
            "rotate-circle": 61938,
            "rocket": 61939,
            "rocket-launch": 61940,
            "road": 61941,
            "restaurant": 61942,
            "repeat": 61943,
            "registered-square": 61944,
            "registered-circle": 61945,
            "receipt": 61946,
            "receipt-text": 61947,
            "receipt-text-alt": 61948,
            "receipt-star": 61949,
            "receipt-star-alt": 61950,
            "receipt-percent": 61951,
            "receipt-percent-alt": 61952,
            "receipt-list": 61953,
            "receipt-list-alt": 61954,
            "receipt-heart": 61955,
            "receipt-heart-alt": 61956,
            "receipt-alt": 61957,
            "ranking": 61958,
            "radio": 61959,
            "radio-button-fill": 61960,
            "radiation": 61961,
            "radiation-circle": 61962,
            "radar": 61963,
            "question-square": 61964,
            "question-circle": 61965,
            "puzzle": 61966,
            "print": 61967,
            "print-slash": 61968,
            "presentation": 61969,
            "presentation-user": 61970,
            "presentation-trend-up": 61971,
            "presentation-trend-down": 61972,
            "presentation-text": 61973,
            "presentation-poll": 61974,
            "presentation-play": 61975,
            "presentation-pen": 61976,
            "presentation-lightbulb": 61977,
            "presentation-dollar": 61978,
            "presentation-chart-pie": 61979,
            "presentation-chart-line": 61980,
            "power-off": 61981,
            "power-off-square": 61982,
            "power-off-circle": 61983,
            "poll-vertical-square": 61984,
            "poll-vertical-circle": 61985,
            "poll-horizontal-square": 61986,
            "poll-horizontal-circle": 61987,
            "plus": 61988,
            "plus-square": 61989,
            "plus-circle": 61990,
            "plug": 61991,
            "playlist": 61992,
            "play": 61993,
            "play-square": 61994,
            "play-pause": 61995,
            "play-circle": 61996,
            "pills": 61997,
            "phone": 61998,
            "phone-times": 61999,
            "phone-slash": 62e3,
            "phone-plus": 62001,
            "phone-outgoing": 62002,
            "phone-office": 62003,
            "phone-missed": 62004,
            "phone-incoming": 62005,
            "phone-hangup": 62006,
            "phone-flip": 62007,
            "phone-call": 62008,
            "phone-2": 62009,
            "phone-1": 62010,
            "percent": 62011,
            "percent-tag": 62012,
            "percent-square": 62013,
            "percent-circle": 62014,
            "pen": 62015,
            "pen-tool": 62016,
            "pen-line": 62017,
            "pause": 62018,
            "pause-circle": 62019,
            "parking-square": 62020,
            "parking-circle": 62021,
            "papers": 62022,
            "papers-text": 62023,
            "paperclip": 62024,
            "palette": 62025,
            "package": 62026,
            "package-star": 62027,
            "package-heart": 62028,
            "package-dollar": 62029,
            "package-check": 62030,
            "octagon": 62031,
            "octagon-times": 62032,
            "octagon-plus": 62033,
            "octagon-minus": 62034,
            "octagon-exclamation": 62035,
            "octagon-check": 62036,
            "nut": 62037,
            "notebook": 62038,
            "note": 62039,
            "note-text": 62040,
            "note-text-square": 62041,
            "note-list": 62042,
            "note-list-square": 62043,
            "note-list-check": 62044,
            "note-list-check-square": 62045,
            "newspaper": 62046,
            "music": 62047,
            "music-note": 62048,
            "music-list": 62049,
            "mug": 62050,
            "mug-hot": 62051,
            "mouse": 62052,
            "mosque": 62053,
            "mortar-pestle": 62054,
            "more-vertical": 62055,
            "more-vertical-square": 62056,
            "more-vertical-circle": 62057,
            "more-horizontal": 62058,
            "more-horizontal-square": 62059,
            "more-horizontal-circle": 62060,
            "moon": 62061,
            "monitor-waveform": 62062,
            "money-withdrawal": 62063,
            "money-convert": 62064,
            "money-bills": 62065,
            "money-bill": 62066,
            "money-bill-times": 62067,
            "money-bill-send": 62068,
            "money-bill-receive": 62069,
            "money-bill-plus": 62070,
            "money-bill-minus": 62071,
            "money-bill-convert": 62072,
            "money-bill-clock": 62073,
            "money-bill-check": 62074,
            "money-bill-ban": 62075,
            "mobile": 62076,
            "minus": 62077,
            "minus-square": 62078,
            "minus-circle": 62079,
            "minimize": 62080,
            "microscope": 62081,
            "microphone": 62082,
            "microphone-stand": 62083,
            "microphone-slash": 62084,
            "messages": 62085,
            "messages-text": 62086,
            "messages-dots": 62087,
            "message": 62088,
            "message-times": 62089,
            "message-times-alt": 62090,
            "message-text": 62091,
            "message-text-times": 62092,
            "message-text-plus": 62093,
            "message-text-notification": 62094,
            "message-text-minus": 62095,
            "message-text-check": 62096,
            "message-star": 62097,
            "message-shield": 62098,
            "message-settings": 62099,
            "message-search": 62100,
            "message-question": 62101,
            "message-plus": 62102,
            "message-plus-alt": 62103,
            "message-notification": 62104,
            "message-minus": 62105,
            "message-minus-alt": 62106,
            "message-lock": 62107,
            "message-info": 62108,
            "message-heart": 62109,
            "message-exclamation": 62110,
            "message-edit": 62111,
            "message-dots": 62112,
            "message-dots-times": 62113,
            "message-dots-plus": 62114,
            "message-dots-notification": 62115,
            "message-dots-minus": 62116,
            "message-dots-check": 62117,
            "message-code": 62118,
            "message-clock": 62119,
            "message-check": 62120,
            "message-check-alt": 62121,
            "message-activity": 62122,
            "menu": 62123,
            "menu-square": 62124,
            "menu-square-alt": 62125,
            "menu-right": 62126,
            "menu-right-square": 62127,
            "menu-right-square-alt": 62128,
            "menu-right-circle": 62129,
            "menu-right-circle-alt": 62130,
            "menu-right-alt": 62131,
            "menu-left": 62132,
            "menu-left-square": 62133,
            "menu-left-square-alt": 62134,
            "menu-left-circle": 62135,
            "menu-left-circle-alt": 62136,
            "menu-left-alt": 62137,
            "menu-duo": 62138,
            "menu-duo-square": 62139,
            "menu-duo-circle": 62140,
            "menu-circle": 62141,
            "menu-circle-alt": 62142,
            "menu-alt": 62143,
            "megaphone": 62144,
            "medal": 62145,
            "medal-star": 62146,
            "medal-check": 62147,
            "maximize": 62148,
            "mask-face": 62149,
            "map": 62150,
            "map-pin": 62151,
            "map-location": 62152,
            "magnet": 62153,
            "log-out": 62154,
            "log-in": 62155,
            "lock": 62156,
            "lock-viewfinder": 62157,
            "location-pin": 62158,
            "location-pin-times": 62159,
            "location-pin-star": 62160,
            "location-pin-slash": 62161,
            "location-pin-slash-alt": 62162,
            "location-pin-search": 62163,
            "location-pin-question": 62164,
            "location-pin-plus": 62165,
            "location-pin-minus": 62166,
            "location-pin-lock": 62167,
            "location-pin-heart": 62168,
            "location-pin-eye": 62169,
            "location-pin-exclamation": 62170,
            "location-pin-edit": 62171,
            "location-pin-check": 62172,
            "location-pin-alt": 62173,
            "location-crosshairs": 62174,
            "location-crosshairs-slash": 62175,
            "location-arrow": 62176,
            "location-arrow-square": 62177,
            "location-arrow-circle": 62178,
            "list": 62179,
            "link": 62180,
            "link-horizontal": 62181,
            "link-horizontal-alt": 62182,
            "link-broken": 62183,
            "link-broken-horizontal": 62184,
            "link-alt": 62185,
            "line-up-square": 62186,
            "line-up-circle": 62187,
            "line-down-square": 62188,
            "line-down-circle": 62189,
            "line-chart-dots": 62190,
            "line-chart-dots-square": 62191,
            "line-chart-dots-circle": 62192,
            "like": 62193,
            "like-tag": 62194,
            "like-square": 62195,
            "like-circle": 62196,
            "lightbulb": 62197,
            "light-emergency": 62198,
            "light-emergency-on": 62199,
            "life-ring": 62200,
            "leaf": 62201,
            "layout-web-9": 62202,
            "layout-web-8": 62203,
            "layout-web-7": 62204,
            "layout-web-6": 62205,
            "layout-web-5": 62206,
            "layout-web-4": 62207,
            "layout-web-3": 62208,
            "layout-web-2": 62209,
            "layout-web-12": 62210,
            "layout-web-11": 62211,
            "layout-web-10": 62212,
            "layout-web-1": 62213,
            "layer-group": 62214,
            "laptop": 62215,
            "laptop-code": 62216,
            "keypad": 62217,
            "keyhole-square": 62218,
            "keyhole-circle": 62219,
            "keyboard": 62220,
            "key": 62221,
            "key-square": 62222,
            "key-circle": 62223,
            "kaaba": 62224,
            "invoice": 62225,
            "info-square": 62226,
            "info-circle": 62227,
            "inbox": 62228,
            "inbox-upload": 62229,
            "inbox-empty": 62230,
            "inbox-download": 62231,
            "image": 62232,
            "image-upload": 62233,
            "image-times": 62234,
            "image-plus": 62235,
            "image-minus": 62236,
            "image-gallery": 62237,
            "image-gallery-plus": 62238,
            "image-download": 62239,
            "image-check": 62240,
            "id-card": 62241,
            "id-badge": 62242,
            "hourglass": 62243,
            "hospital": 62244,
            "hospital-h-sign-square": 62245,
            "hospital-h-sign-circle": 62246,
            "home": 62247,
            "home-wifi": 62248,
            "home-user": 62249,
            "home-trend-up": 62250,
            "home-trend-down": 62251,
            "home-star": 62252,
            "home-shield": 62253,
            "home-search": 62254,
            "home-roof": 62255,
            "home-roof-wifi": 62256,
            "home-roof-user": 62257,
            "home-roof-trend-up": 62258,
            "home-roof-trend-down": 62259,
            "home-roof-star": 62260,
            "home-roof-shield": 62261,
            "home-roof-search": 62262,
            "home-roof-lock": 62263,
            "home-roof-heart": 62264,
            "home-roof-dollar": 62265,
            "home-roof-activity": 62266,
            "home-lock": 62267,
            "home-heart": 62268,
            "home-dollar": 62269,
            "home-dash": 62270,
            "home-dash-wifi": 62271,
            "home-dash-user": 62272,
            "home-dash-trend-up": 62273,
            "home-dash-trend-down": 62274,
            "home-dash-star": 62275,
            "home-dash-shield": 62276,
            "home-dash-search": 62277,
            "home-dash-lock": 62278,
            "home-dash-heart": 62279,
            "home-dash-dollar": 62280,
            "home-dash-activity": 62281,
            "home-activity": 62282,
            "heart": 62283,
            "heart-times": 62284,
            "heart-tag": 62285,
            "heart-square": 62286,
            "heart-slash": 62287,
            "heart-pulse": 62288,
            "heart-plus": 62289,
            "heart-minus": 62290,
            "heart-circle": 62291,
            "heart-check": 62292,
            "headphones": 62293,
            "hashtag": 62294,
            "hard-drive": 62295,
            "hand-holding-user": 62296,
            "hand-holding-dollar": 62297,
            "hand-holding-dollar-circle": 62298,
            "grid-web-7": 62299,
            "grid-web-6": 62300,
            "grid-web-5": 62301,
            "grid-web-4": 62302,
            "grid-web-3": 62303,
            "grid-web-2": 62304,
            "grid-web-1": 62305,
            "grid-square": 62306,
            "grid-square-plus": 62307,
            "grid-square-circle": 62308,
            "grid-dividers": 62309,
            "grid-circle": 62310,
            "grid-2": 62311,
            "grid-1": 62312,
            "graduation-cap": 62313,
            "globe": 62314,
            "globe-stand": 62315,
            "globe-earth": 62316,
            "glasses": 62317,
            "gift": 62318,
            "game-controller": 62319,
            "forward": 62320,
            "food-tray": 62321,
            "folder": 62322,
            "folder-user": 62323,
            "folder-upload": 62324,
            "folder-times": 62325,
            "folder-star": 62326,
            "folder-shield": 62327,
            "folder-settings": 62328,
            "folder-search": 62329,
            "folder-plus": 62330,
            "folder-open": 62331,
            "folder-music": 62332,
            "folder-minus": 62333,
            "folder-lock": 62334,
            "folder-import": 62335,
            "folder-heart": 62336,
            "folder-export": 62337,
            "folder-edit": 62338,
            "folder-download": 62339,
            "folder-connection": 62340,
            "folder-code": 62341,
            "folder-clock": 62342,
            "folder-check": 62343,
            "folder-ban": 62344,
            "folder-alt": 62345,
            "floppy-disk": 62346,
            "flask": 62347,
            "flask-round": 62348,
            "flashlight": 62349,
            "flashlight-fill": 62350,
            "flag": 62351,
            "flag-triangle": 62352,
            "fire": 62353,
            "fingerprint": 62354,
            "fingerprint-viewfinder": 62355,
            "filter": 62356,
            "filter-times": 62357,
            "filter-plus": 62358,
            "filter-minus": 62359,
            "filter-check": 62360,
            "film": 62361,
            "file": 62362,
            "file-user": 62363,
            "file-upload": 62364,
            "file-times": 62365,
            "file-text": 62366,
            "file-text-times": 62367,
            "file-text-star": 62368,
            "file-text-shield": 62369,
            "file-text-search": 62370,
            "file-text-plus": 62371,
            "file-text-minus": 62372,
            "file-text-lock": 62373,
            "file-text-heart": 62374,
            "file-text-edit": 62375,
            "file-text-check": 62376,
            "file-text-ban": 62377,
            "file-star": 62378,
            "file-shield": 62379,
            "file-settings": 62380,
            "file-search": 62381,
            "file-plus": 62382,
            "file-music": 62383,
            "file-minus": 62384,
            "file-lock": 62385,
            "file-list": 62386,
            "file-list-times": 62387,
            "file-list-star": 62388,
            "file-list-shield": 62389,
            "file-list-search": 62390,
            "file-list-plus": 62391,
            "file-list-minus": 62392,
            "file-list-lock": 62393,
            "file-list-heart": 62394,
            "file-list-edit": 62395,
            "file-list-check": 62396,
            "file-list-ban": 62397,
            "file-import": 62398,
            "file-import-alt": 62399,
            "file-heart": 62400,
            "file-export": 62401,
            "file-export-alt": 62402,
            "file-edit": 62403,
            "file-download": 62404,
            "file-copy": 62405,
            "file-code": 62406,
            "file-clock": 62407,
            "file-check": 62408,
            "file-ban": 62409,
            "fast-forward": 62410,
            "fast-backward": 62411,
            "eye": 62412,
            "eye-slash": 62413,
            "eye-closed": 62414,
            "expand": 62415,
            "exclamation-square": 62416,
            "exclamation-circle": 62417,
            "exchange-vertical": 62418,
            "exchange-vertical-square": 62419,
            "exchange-vertical-circle": 62420,
            "exchange-horizontal": 62421,
            "exchange-horizontal-square": 62422,
            "exchange-horizontal-circle": 62423,
            "euro": 62424,
            "euro-square": 62425,
            "euro-circle": 62426,
            "ethereum": 62427,
            "ethereum-square": 62428,
            "ethereum-circle": 62429,
            "envelopes": 62430,
            "envelope": 62431,
            "envelope-times": 62432,
            "envelope-star": 62433,
            "envelope-shield": 62434,
            "envelope-settings": 62435,
            "envelope-search": 62436,
            "envelope-plus": 62437,
            "envelope-open": 62438,
            "envelope-notification": 62439,
            "envelope-minus": 62440,
            "envelope-lock": 62441,
            "envelope-heart": 62442,
            "envelope-eye": 62443,
            "envelope-edit": 62444,
            "envelope-clock": 62445,
            "envelope-check": 62446,
            "envelope-ban": 62447,
            "eject": 62448,
            "edit": 62449,
            "droplet": 62450,
            "droplet-slash": 62451,
            "drag-vertical": 62452,
            "drag-lines-vertical": 62453,
            "drag-lines-horizontal": 62454,
            "drag-horizontal": 62455,
            "download": 62456,
            "download-alt": 62457,
            "door-open": 62458,
            "door-closed": 62459,
            "dollar": 62460,
            "dollar-square": 62461,
            "dollar-send-circle": 62462,
            "dollar-receive-square": 62463,
            "dollar-receive-square-1": 62464,
            "dollar-receive-circle": 62465,
            "dollar-circle": 62466,
            "document": 62467,
            "document-list": 62468,
            "document-list-check": 62469,
            "dna": 62470,
            "dislike": 62471,
            "dislike-tag": 62472,
            "dislike-square": 62473,
            "dislike-circle": 62474,
            "discount-percent-fill": 62475,
            "disc": 62476,
            "diamond": 62477,
            "diamond-exclamation": 62478,
            "desktop": 62479,
            "desktop-mobile": 62480,
            "desktop-code": 62481,
            "delivery-cart": 62482,
            "delivery-cart-arrow-up": 62483,
            "delivery-cart-arrow-down": 62484,
            "delete-right": 62485,
            "delete-left": 62486,
            "database": 62487,
            "cursor": 62488,
            "cursor-click": 62489,
            "crown": 62490,
            "crown-alt": 62491,
            "credit-card": 62492,
            "credit-card-times": 62493,
            "credit-card-slash": 62494,
            "credit-card-plus": 62495,
            "credit-card-minus": 62496,
            "credit-card-edit": 62497,
            "credit-card-convert": 62498,
            "credit-card-check": 62499,
            "credit-card-change": 62500,
            "credit-card-ban": 62501,
            "cpu": 62502,
            "coupon": 62503,
            "coupon-star": 62504,
            "coupon-percent": 62505,
            "coupon-heart": 62506,
            "copyright-square": 62507,
            "copyright-circle": 62508,
            "copy": 62509,
            "copy-plus": 62510,
            "copy-check": 62511,
            "copy-alt": 62512,
            "contrast": 62513,
            "compress": 62514,
            "compass": 62515,
            "compass-needle": 62516,
            "comments": 62517,
            "comments-text": 62518,
            "comments-dots": 62519,
            "comment": 62520,
            "comment-times": 62521,
            "comment-times-alt": 62522,
            "comment-text": 62523,
            "comment-text-times": 62524,
            "comment-text-plus": 62525,
            "comment-text-notification": 62526,
            "comment-text-minus": 62527,
            "comment-text-check": 62528,
            "comment-star": 62529,
            "comment-shield": 62530,
            "comment-settings": 62531,
            "comment-search": 62532,
            "comment-question": 62533,
            "comment-plus": 62534,
            "comment-plus-alt": 62535,
            "comment-notification": 62536,
            "comment-minus": 62537,
            "comment-minus-alt": 62538,
            "comment-lock": 62539,
            "comment-info": 62540,
            "comment-heart": 62541,
            "comment-exclamation": 62542,
            "comment-edit": 62543,
            "comment-dots": 62544,
            "comment-dots-times": 62545,
            "comment-dots-plus": 62546,
            "comment-dots-notification": 62547,
            "comment-dots-minus": 62548,
            "comment-dots-check": 62549,
            "comment-code": 62550,
            "comment-clock": 62551,
            "comment-check": 62552,
            "comment-check-alt": 62553,
            "comment-activity": 62554,
            "coins": 62555,
            "coin": 62556,
            "coin-convert": 62557,
            "coin-card-transfer": 62558,
            "code": 62559,
            "code-square": 62560,
            "code-circle": 62561,
            "cloud": 62562,
            "cloud-upload": 62563,
            "cloud-times": 62564,
            "cloud-slash": 62565,
            "cloud-shield": 62566,
            "cloud-share": 62567,
            "cloud-plus": 62568,
            "cloud-minus": 62569,
            "cloud-lock": 62570,
            "cloud-download": 62571,
            "cloud-connection": 62572,
            "cloud-check": 62573,
            "closed-captioning": 62574,
            "clock": 62575,
            "clock-square": 62576,
            "clock-square-alt": 62577,
            "clock-alt": 62578,
            "clipboard": 62579,
            "clipboard-times": 62580,
            "clipboard-text": 62581,
            "clipboard-star": 62582,
            "clipboard-search": 62583,
            "clipboard-plus": 62584,
            "clipboard-minus": 62585,
            "clipboard-list": 62586,
            "clipboard-list-check": 62587,
            "clipboard-heart": 62588,
            "clipboard-edit": 62589,
            "clipboard-check": 62590,
            "chromecast": 62591,
            "chevron-up": 62592,
            "chevron-right": 62593,
            "chevron-left": 62594,
            "chevron-down": 62595,
            "chevron-big-up": 62596,
            "chevron-big-right": 62597,
            "chevron-big-left": 62598,
            "chevron-big-down": 62599,
            "checkbox-square-fill": 62600,
            "check": 62601,
            "check-square": 62602,
            "check-double": 62603,
            "check-circle": 62604,
            "chats": 62605,
            "chats-text": 62606,
            "chats-dots": 62607,
            "chat": 62608,
            "chat-times": 62609,
            "chat-times-alt": 62610,
            "chat-text": 62611,
            "chat-text-times": 62612,
            "chat-text-plus": 62613,
            "chat-text-notification": 62614,
            "chat-text-minus": 62615,
            "chat-text-check": 62616,
            "chat-star": 62617,
            "chat-shield": 62618,
            "chat-settings": 62619,
            "chat-search": 62620,
            "chat-question": 62621,
            "chat-plus": 62622,
            "chat-plus-alt": 62623,
            "chat-notification": 62624,
            "chat-minus": 62625,
            "chat-minus-alt": 62626,
            "chat-lock": 62627,
            "chat-info": 62628,
            "chat-heart": 62629,
            "chat-exclamation": 62630,
            "chat-edit": 62631,
            "chat-dots": 62632,
            "chat-dots-times": 62633,
            "chat-dots-plus": 62634,
            "chat-dots-notification": 62635,
            "chat-dots-minus": 62636,
            "chat-dots-check": 62637,
            "chat-code": 62638,
            "chat-clock": 62639,
            "chat-check": 62640,
            "chat-check-alt": 62641,
            "chat-activity": 62642,
            "chart-trend-up": 62643,
            "chart-trend-down": 62644,
            "chart-pyramid": 62645,
            "chart-pie": 62646,
            "chart-line": 62647,
            "chart-line-down": 62648,
            "chart-line-dots": 62649,
            "chart-line-1": 62650,
            "chart-bar": 62651,
            "chart-bar-vertical": 62652,
            "chart-bar-square": 62653,
            "chart-bar-horizontal": 62654,
            "chart-bar-circle": 62655,
            "chart-bar-alt": 62656,
            "certificate": 62657,
            "castle": 62658,
            "caret-up": 62659,
            "caret-up-square": 62660,
            "caret-up-circle": 62661,
            "caret-right": 62662,
            "caret-right-square": 62663,
            "caret-right-circle": 62664,
            "caret-left": 62665,
            "caret-left-square": 62666,
            "caret-left-circle": 62667,
            "caret-down": 62668,
            "caret-down-square": 62669,
            "caret-down-circle": 62670,
            "camera": 62671,
            "camera-square": 62672,
            "camera-slash": 62673,
            "camera-rotate": 62674,
            "camera-circle": 62675,
            "calendar": 62676,
            "calendar-times": 62677,
            "calendar-times-alt": 62678,
            "calendar-star": 62679,
            "calendar-search": 62680,
            "calendar-plus": 62681,
            "calendar-plus-alt": 62682,
            "calendar-minus": 62683,
            "calendar-minus-alt": 62684,
            "calendar-lock": 62685,
            "calendar-heart": 62686,
            "calendar-empty": 62687,
            "calendar-empty-alt": 62688,
            "calendar-edit": 62689,
            "calendar-clock": 62690,
            "calendar-check": 62691,
            "calendar-check-alt": 62692,
            "calculator": 62693,
            "calculator-simple": 62694,
            "cake": 62695,
            "cabinet-filing": 62696,
            "bus": 62697,
            "buildings": 62698,
            "buildings-alt": 62699,
            "building": 62700,
            "building-tree": 62701,
            "building-coins": 62702,
            "bug": 62703,
            "bug-slash": 62704,
            "brush": 62705,
            "brush-alt": 62706,
            "briefcase": 62707,
            "briefcase-times": 62708,
            "briefcase-plus": 62709,
            "briefcase-money": 62710,
            "briefcase-minus": 62711,
            "briefcase-check": 62712,
            "brain": 62713,
            "boxes": 62714,
            "box": 62715,
            "box-times": 62716,
            "box-search": 62717,
            "box-plus": 62718,
            "box-minus": 62719,
            "box-check": 62720,
            "books": 62721,
            "bookmarks": 62722,
            "bookmarks-user": 62723,
            "bookmarks-times": 62724,
            "bookmarks-star": 62725,
            "bookmarks-settings": 62726,
            "bookmarks-plus": 62727,
            "bookmarks-minus": 62728,
            "bookmarks-heart": 62729,
            "bookmarks-check": 62730,
            "bookmark": 62731,
            "bookmark-user": 62732,
            "bookmark-times": 62733,
            "bookmark-star": 62734,
            "bookmark-settings": 62735,
            "bookmark-plus": 62736,
            "bookmark-minus": 62737,
            "bookmark-heart": 62738,
            "bookmark-check": 62739,
            "book": 62740,
            "book-text": 62741,
            "book-open": 62742,
            "book-open-text": 62743,
            "book-open-reader": 62744,
            "book-open-bookmark": 62745,
            "book-empty": 62746,
            "book-bookmark": 62747,
            "book-alt": 62748,
            "bone": 62749,
            "bone-break": 62750,
            "bolt": 62751,
            "bolt-square": 62752,
            "bolt-square-alt": 62753,
            "bolt-slash": 62754,
            "bolt-slash-alt": 62755,
            "bolt-circle": 62756,
            "bolt-circle-alt": 62757,
            "bolt-alt": 62758,
            "bluetooth": 62759,
            "bitcoin": 62760,
            "bitcoin-square": 62761,
            "bitcoin-circle": 62762,
            "bezier": 62763,
            "bell": 62764,
            "bell-times": 62765,
            "bell-slash": 62766,
            "bell-plus": 62767,
            "bell-on": 62768,
            "bell-notification": 62769,
            "bell-minus": 62770,
            "bell-exclamation": 62771,
            "bed": 62772,
            "battery-half": 62773,
            "battery-full": 62774,
            "battery-empty": 62775,
            "battery-bolt": 62776,
            "bank": 62777,
            "bandage": 62778,
            "ban": 62779,
            "badge": 62780,
            "badge-like": 62781,
            "badge-dollar": 62782,
            "badge-discount": 62783,
            "badge-discount-alt": 62784,
            "badge-check": 62785,
            "backward": 62786,
            "backpack": 62787,
            "award": 62788,
            "award-star": 62789,
            "award-check": 62790,
            "atom": 62791,
            "at": 62792,
            "arrows-up-down": 62793,
            "arrows-repeat": 62794,
            "arrows-repeat-square": 62795,
            "arrows-repeat-circle": 62796,
            "arrows-move": 62797,
            "arrows-left-right": 62798,
            "arrows-expand": 62799,
            "arrows-compress": 62800,
            "arrow-up": 62801,
            "arrow-up-to-line": 62802,
            "arrow-up-square": 62803,
            "arrow-up-small": 62804,
            "arrow-up-right": 62805,
            "arrow-up-right-square": 62806,
            "arrow-up-right-small": 62807,
            "arrow-up-right-circle": 62808,
            "arrow-up-left": 62809,
            "arrow-up-left-square": 62810,
            "arrow-up-left-small": 62811,
            "arrow-up-left-circle": 62812,
            "arrow-up-from-line": 62813,
            "arrow-up-circle": 62814,
            "arrow-turn-up-right": 62815,
            "arrow-turn-up-left": 62816,
            "arrow-turn-right-up": 62817,
            "arrow-turn-right-down": 62818,
            "arrow-turn-left-up": 62819,
            "arrow-turn-left-down": 62820,
            "arrow-turn-down-right": 62821,
            "arrow-turn-down-left": 62822,
            "arrow-share": 62823,
            "arrow-right": 62824,
            "arrow-right-to-line": 62825,
            "arrow-right-square": 62826,
            "arrow-right-small": 62827,
            "arrow-right-line": 62828,
            "arrow-right-from-line": 62829,
            "arrow-right-circle": 62830,
            "arrow-reply": 62831,
            "arrow-left": 62832,
            "arrow-left-to-line": 62833,
            "arrow-left-square": 62834,
            "arrow-left-small": 62835,
            "arrow-left-from-line": 62836,
            "arrow-left-circle": 62837,
            "arrow-left-arrow-right": 62838,
            "arrow-left-arrow-right-square": 62839,
            "arrow-left-arrow-right-circle": 62840,
            "arrow-import": 62841,
            "arrow-forward": 62842,
            "arrow-forward-square": 62843,
            "arrow-forward-square-alt": 62844,
            "arrow-forward-circle": 62845,
            "arrow-forward-circle-alt": 62846,
            "arrow-forward-alt": 62847,
            "arrow-export": 62848,
            "arrow-down": 62849,
            "arrow-down-to-line": 62850,
            "arrow-down-square": 62851,
            "arrow-down-small": 62852,
            "arrow-down-right": 62853,
            "arrow-down-right-square": 62854,
            "arrow-down-right-small": 62855,
            "arrow-down-right-circle": 62856,
            "arrow-down-left": 62857,
            "arrow-down-left-square": 62858,
            "arrow-down-left-small": 62859,
            "arrow-down-left-circle": 62860,
            "arrow-down-from-line": 62861,
            "arrow-down-circle": 62862,
            "arrow-down-arrow-up": 62863,
            "arrow-down-arrow-up-square": 62864,
            "arrow-down-arrow-up-circle": 62865,
            "arrow-back": 62866,
            "arrow-back-square": 62867,
            "arrow-back-square-alt": 62868,
            "arrow-back-circle": 62869,
            "arrow-back-circle-alt": 62870,
            "arrow-back-alt": 62871,
            "archway": 62872,
            "archive": 62873,
            "angles-up": 62874,
            "angles-up-small": 62875,
            "angles-right": 62876,
            "angles-right-small": 62877,
            "angles-left": 62878,
            "angles-left-small": 62879,
            "angles-left-right": 62880,
            "angles-down": 62881,
            "angles-down-up": 62882,
            "angles-down-small": 62883,
            "angle-up": 62884,
            "angle-up-square": 62885,
            "angle-up-small": 62886,
            "angle-up-circle": 62887,
            "angle-right": 62888,
            "angle-right-square": 62889,
            "angle-right-small": 62890,
            "angle-right-circle": 62891,
            "angle-left": 62892,
            "angle-left-square": 62893,
            "angle-left-small": 62894,
            "angle-left-circle": 62895,
            "angle-down": 62896,
            "angle-down-square": 62897,
            "angle-down-small": 62898,
            "angle-down-circle": 62899,
            "alarm-times": 62900,
            "alarm-times-alt": 62901,
            "alarm-plus": 62902,
            "alarm-plus-alt": 62903,
            "alarm-minus": 62904,
            "alarm-minus-alt": 62905,
            "alarm-edit": 62906,
            "alarm-clock": 62907,
            "alarm-clock-empty": 62908,
            "alarm-clock-alt": 62909,
            "alarm-check": 62910,
            "alarm-check-alt": 62911,
            "airplay": 62912,
            "airplay-alt": 62913,
            "address-book": 62914,
            "activity-star-square": 62915,
            "activity-star-circle": 62916,
            "activity-square": 62917,
            "activity-notification-square": 62918,
            "activity-notification-circle": 62919,
            "activity-heart-square": 62920,
            "activity-heart-circle": 62921,
            "activity-circle": 62922
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
            "storeforgood": 61820,
            "store": 61821,
            "stopwatch": 61822,
            "stopwatch-times": 61823,
            "stopwatch-times-alt": 61824,
            "stopwatch-plus": 61825,
            "stopwatch-plus-alt": 61826,
            "stopwatch-minus": 61827,
            "stopwatch-minus-alt": 61828,
            "stopwatch-empty": 61829,
            "stopwatch-edit": 61830,
            "stopwatch-check": 61831,
            "stopwatch-check-alt": 61832,
            "stopwatch-alt": 61833,
            "stop": 61834,
            "stop-circle": 61835,
            "sticky-note-text-square": 61836,
            "sticky-note-text-circle": 61837,
            "sticky-note-square": 61838,
            "sticky-note-circle": 61839,
            "stethoscope": 61840,
            "step-forward": 61841,
            "step-backward": 61842,
            "star": 61843,
            "star-tag": 61844,
            "star-square": 61845,
            "star-slash": 61846,
            "star-shooting": 61847,
            "star-shooting-horizontal": 61848,
            "star-magic": 61849,
            "star-half": 61850,
            "star-circle": 61851,
            "speedometer": 61852,
            "speaker": 61853,
            "sparkle": 61854,
            "sort": 61855,
            "sort-vertical": 61856,
            "sort-horizontal": 61857,
            "sort-descending": 61858,
            "sort-descending-square": 61859,
            "sort-descending-circle": 61860,
            "sort-ascending": 61861,
            "sort-ascending-square": 61862,
            "sort-ascending-circle": 61863,
            "sofa": 61864,
            "sliders-vertical": 61865,
            "sliders-vertical-alt": 61866,
            "sliders-horizontal": 61867,
            "sliders-horizontal-alt": 61868,
            "sim-card": 61869,
            "sim-card-2": 61870,
            "sim-card-1": 61871,
            "signs-direction": 61872,
            "signal-stream": 61873,
            "sign-direction-right": 61874,
            "sign-direction-left": 61875,
            "shuffle": 61876,
            "shopping-cart": 61877,
            "shopping-cart-times": 61878,
            "shopping-cart-star": 61879,
            "shopping-cart-plus": 61880,
            "shopping-cart-minus": 61881,
            "shopping-cart-heart": 61882,
            "shopping-cart-check": 61883,
            "shopping-cart-arrow-top": 61884,
            "shopping-cart-arrow-down": 61885,
            "shopping-basket": 61886,
            "shopping-basket-times": 61887,
            "shopping-basket-star": 61888,
            "shopping-basket-plus": 61889,
            "shopping-basket-minus": 61890,
            "shopping-basket-heart": 61891,
            "shopping-basket-check": 61892,
            "shopping-basket-arrow-up": 61893,
            "shopping-basket-arrow-down": 61894,
            "shopping-bag": 61895,
            "shopping-bag-alt": 61896,
            "shield": 61897,
            "shield-user": 61898,
            "shield-times": 61899,
            "shield-star": 61900,
            "shield-slash": 61901,
            "shield-search": 61902,
            "shield-question": 61903,
            "shield-plus": 61904,
            "shield-play": 61905,
            "shield-minus": 61906,
            "shield-lock": 61907,
            "shield-heart": 61908,
            "shield-exclamation": 61909,
            "shield-check": 61910,
            "shield-bolt": 61911,
            "share": 61912,
            "settings": 61913,
            "server": 61914,
            "send": 61915,
            "send-right": 61916,
            "search": 61917,
            "search-text": 61918,
            "search-plus": 61919,
            "search-minus": 61920,
            "sd-card": 61921,
            "scissors": 61922,
            "school": 61923,
            "scanner": 61924,
            "scan": 61925,
            "scan-qr": 61926,
            "scan-circle": 61927,
            "sack-dollar": 61928,
            "route": 61929,
            "rotate": 61930,
            "rotate-square": 61931,
            "rotate-right": 61932,
            "rotate-right-square": 61933,
            "rotate-right-circle": 61934,
            "rotate-left": 61935,
            "rotate-left-square": 61936,
            "rotate-left-circle": 61937,
            "rotate-circle": 61938,
            "rocket": 61939,
            "rocket-launch": 61940,
            "road": 61941,
            "restaurant": 61942,
            "repeat": 61943,
            "registered-square": 61944,
            "registered-circle": 61945,
            "receipt": 61946,
            "receipt-text": 61947,
            "receipt-text-alt": 61948,
            "receipt-star": 61949,
            "receipt-star-alt": 61950,
            "receipt-percent": 61951,
            "receipt-percent-alt": 61952,
            "receipt-list": 61953,
            "receipt-list-alt": 61954,
            "receipt-heart": 61955,
            "receipt-heart-alt": 61956,
            "receipt-alt": 61957,
            "ranking": 61958,
            "radio": 61959,
            "radio-button-fill": 61960,
            "radiation": 61961,
            "radiation-circle": 61962,
            "radar": 61963,
            "question-square": 61964,
            "question-circle": 61965,
            "puzzle": 61966,
            "print": 61967,
            "print-slash": 61968,
            "presentation": 61969,
            "presentation-user": 61970,
            "presentation-trend-up": 61971,
            "presentation-trend-down": 61972,
            "presentation-text": 61973,
            "presentation-poll": 61974,
            "presentation-play": 61975,
            "presentation-pen": 61976,
            "presentation-lightbulb": 61977,
            "presentation-dollar": 61978,
            "presentation-chart-pie": 61979,
            "presentation-chart-line": 61980,
            "power-off": 61981,
            "power-off-square": 61982,
            "power-off-circle": 61983,
            "poll-vertical-square": 61984,
            "poll-vertical-circle": 61985,
            "poll-horizontal-square": 61986,
            "poll-horizontal-circle": 61987,
            "plus": 61988,
            "plus-square": 61989,
            "plus-circle": 61990,
            "plug": 61991,
            "playlist": 61992,
            "play": 61993,
            "play-square": 61994,
            "play-pause": 61995,
            "play-circle": 61996,
            "pills": 61997,
            "phone": 61998,
            "phone-times": 61999,
            "phone-slash": 62e3,
            "phone-plus": 62001,
            "phone-outgoing": 62002,
            "phone-office": 62003,
            "phone-missed": 62004,
            "phone-incoming": 62005,
            "phone-hangup": 62006,
            "phone-flip": 62007,
            "phone-call": 62008,
            "phone-2": 62009,
            "phone-1": 62010,
            "percent": 62011,
            "percent-tag": 62012,
            "percent-square": 62013,
            "percent-circle": 62014,
            "pen": 62015,
            "pen-tool": 62016,
            "pen-line": 62017,
            "pause": 62018,
            "pause-circle": 62019,
            "parking-square": 62020,
            "parking-circle": 62021,
            "papers": 62022,
            "papers-text": 62023,
            "paperclip": 62024,
            "palette": 62025,
            "package": 62026,
            "package-star": 62027,
            "package-heart": 62028,
            "package-dollar": 62029,
            "package-check": 62030,
            "octagon": 62031,
            "octagon-times": 62032,
            "octagon-plus": 62033,
            "octagon-minus": 62034,
            "octagon-exclamation": 62035,
            "octagon-check": 62036,
            "nut": 62037,
            "notebook": 62038,
            "note": 62039,
            "note-text": 62040,
            "note-text-square": 62041,
            "note-list": 62042,
            "note-list-square": 62043,
            "note-list-check": 62044,
            "note-list-check-square": 62045,
            "newspaper": 62046,
            "music": 62047,
            "music-note": 62048,
            "music-list": 62049,
            "mug": 62050,
            "mug-hot": 62051,
            "mouse": 62052,
            "mosque": 62053,
            "mortar-pestle": 62054,
            "more-vertical": 62055,
            "more-vertical-square": 62056,
            "more-vertical-circle": 62057,
            "more-horizontal": 62058,
            "more-horizontal-square": 62059,
            "more-horizontal-circle": 62060,
            "moon": 62061,
            "monitor-waveform": 62062,
            "money-withdrawal": 62063,
            "money-convert": 62064,
            "money-bills": 62065,
            "money-bill": 62066,
            "money-bill-times": 62067,
            "money-bill-send": 62068,
            "money-bill-receive": 62069,
            "money-bill-plus": 62070,
            "money-bill-minus": 62071,
            "money-bill-convert": 62072,
            "money-bill-clock": 62073,
            "money-bill-check": 62074,
            "money-bill-ban": 62075,
            "mobile": 62076,
            "minus": 62077,
            "minus-square": 62078,
            "minus-circle": 62079,
            "minimize": 62080,
            "microscope": 62081,
            "microphone": 62082,
            "microphone-stand": 62083,
            "microphone-slash": 62084,
            "messages": 62085,
            "messages-text": 62086,
            "messages-dots": 62087,
            "message": 62088,
            "message-times": 62089,
            "message-times-alt": 62090,
            "message-text": 62091,
            "message-text-times": 62092,
            "message-text-plus": 62093,
            "message-text-notification": 62094,
            "message-text-minus": 62095,
            "message-text-check": 62096,
            "message-star": 62097,
            "message-shield": 62098,
            "message-settings": 62099,
            "message-search": 62100,
            "message-question": 62101,
            "message-plus": 62102,
            "message-plus-alt": 62103,
            "message-notification": 62104,
            "message-minus": 62105,
            "message-minus-alt": 62106,
            "message-lock": 62107,
            "message-info": 62108,
            "message-heart": 62109,
            "message-exclamation": 62110,
            "message-edit": 62111,
            "message-dots": 62112,
            "message-dots-times": 62113,
            "message-dots-plus": 62114,
            "message-dots-notification": 62115,
            "message-dots-minus": 62116,
            "message-dots-check": 62117,
            "message-code": 62118,
            "message-clock": 62119,
            "message-check": 62120,
            "message-check-alt": 62121,
            "message-activity": 62122,
            "menu": 62123,
            "menu-square": 62124,
            "menu-square-alt": 62125,
            "menu-right": 62126,
            "menu-right-square": 62127,
            "menu-right-square-alt": 62128,
            "menu-right-circle": 62129,
            "menu-right-circle-alt": 62130,
            "menu-right-alt": 62131,
            "menu-left": 62132,
            "menu-left-square": 62133,
            "menu-left-square-alt": 62134,
            "menu-left-circle": 62135,
            "menu-left-circle-alt": 62136,
            "menu-left-alt": 62137,
            "menu-duo": 62138,
            "menu-duo-square": 62139,
            "menu-duo-circle": 62140,
            "menu-circle": 62141,
            "menu-circle-alt": 62142,
            "menu-alt": 62143,
            "megaphone": 62144,
            "medal": 62145,
            "medal-star": 62146,
            "medal-check": 62147,
            "maximize": 62148,
            "mask-face": 62149,
            "map": 62150,
            "map-pin": 62151,
            "map-location": 62152,
            "magnet": 62153,
            "log-out": 62154,
            "log-in": 62155,
            "lock": 62156,
            "lock-viewfinder": 62157,
            "location-pin": 62158,
            "location-pin-times": 62159,
            "location-pin-star": 62160,
            "location-pin-slash": 62161,
            "location-pin-slash-alt": 62162,
            "location-pin-search": 62163,
            "location-pin-question": 62164,
            "location-pin-plus": 62165,
            "location-pin-minus": 62166,
            "location-pin-lock": 62167,
            "location-pin-heart": 62168,
            "location-pin-eye": 62169,
            "location-pin-exclamation": 62170,
            "location-pin-edit": 62171,
            "location-pin-check": 62172,
            "location-pin-alt": 62173,
            "location-crosshairs": 62174,
            "location-crosshairs-slash": 62175,
            "location-arrow": 62176,
            "location-arrow-square": 62177,
            "location-arrow-circle": 62178,
            "list": 62179,
            "link": 62180,
            "link-horizontal": 62181,
            "link-horizontal-alt": 62182,
            "link-broken": 62183,
            "link-broken-horizontal": 62184,
            "link-alt": 62185,
            "line-up-square": 62186,
            "line-up-circle": 62187,
            "line-down-square": 62188,
            "line-down-circle": 62189,
            "line-chart-dots": 62190,
            "line-chart-dots-square": 62191,
            "line-chart-dots-circle": 62192,
            "like": 62193,
            "like-tag": 62194,
            "like-square": 62195,
            "like-circle": 62196,
            "lightbulb": 62197,
            "light-emergency": 62198,
            "light-emergency-on": 62199,
            "life-ring": 62200,
            "leaf": 62201,
            "layout-web-9": 62202,
            "layout-web-8": 62203,
            "layout-web-7": 62204,
            "layout-web-6": 62205,
            "layout-web-5": 62206,
            "layout-web-4": 62207,
            "layout-web-3": 62208,
            "layout-web-2": 62209,
            "layout-web-12": 62210,
            "layout-web-11": 62211,
            "layout-web-10": 62212,
            "layout-web-1": 62213,
            "layer-group": 62214,
            "laptop": 62215,
            "laptop-code": 62216,
            "keypad": 62217,
            "keyhole-square": 62218,
            "keyhole-circle": 62219,
            "keyboard": 62220,
            "key": 62221,
            "key-square": 62222,
            "key-circle": 62223,
            "kaaba": 62224,
            "invoice": 62225,
            "info-square": 62226,
            "info-circle": 62227,
            "inbox": 62228,
            "inbox-upload": 62229,
            "inbox-empty": 62230,
            "inbox-download": 62231,
            "image": 62232,
            "image-upload": 62233,
            "image-times": 62234,
            "image-plus": 62235,
            "image-minus": 62236,
            "image-gallery": 62237,
            "image-gallery-plus": 62238,
            "image-download": 62239,
            "image-check": 62240,
            "id-card": 62241,
            "id-badge": 62242,
            "hourglass": 62243,
            "hospital": 62244,
            "hospital-h-sign-square": 62245,
            "hospital-h-sign-circle": 62246,
            "home": 62247,
            "home-wifi": 62248,
            "home-user": 62249,
            "home-trend-up": 62250,
            "home-trend-down": 62251,
            "home-star": 62252,
            "home-shield": 62253,
            "home-search": 62254,
            "home-roof": 62255,
            "home-roof-wifi": 62256,
            "home-roof-user": 62257,
            "home-roof-trend-up": 62258,
            "home-roof-trend-down": 62259,
            "home-roof-star": 62260,
            "home-roof-shield": 62261,
            "home-roof-search": 62262,
            "home-roof-lock": 62263,
            "home-roof-heart": 62264,
            "home-roof-dollar": 62265,
            "home-roof-activity": 62266,
            "home-lock": 62267,
            "home-heart": 62268,
            "home-dollar": 62269,
            "home-dash": 62270,
            "home-dash-wifi": 62271,
            "home-dash-user": 62272,
            "home-dash-trend-up": 62273,
            "home-dash-trend-down": 62274,
            "home-dash-star": 62275,
            "home-dash-shield": 62276,
            "home-dash-search": 62277,
            "home-dash-lock": 62278,
            "home-dash-heart": 62279,
            "home-dash-dollar": 62280,
            "home-dash-activity": 62281,
            "home-activity": 62282,
            "heart": 62283,
            "heart-times": 62284,
            "heart-tag": 62285,
            "heart-square": 62286,
            "heart-slash": 62287,
            "heart-pulse": 62288,
            "heart-plus": 62289,
            "heart-minus": 62290,
            "heart-circle": 62291,
            "heart-check": 62292,
            "headphones": 62293,
            "hashtag": 62294,
            "hard-drive": 62295,
            "hand-holding-user": 62296,
            "hand-holding-dollar": 62297,
            "hand-holding-dollar-circle": 62298,
            "grid-web-7": 62299,
            "grid-web-6": 62300,
            "grid-web-5": 62301,
            "grid-web-4": 62302,
            "grid-web-3": 62303,
            "grid-web-2": 62304,
            "grid-web-1": 62305,
            "grid-square": 62306,
            "grid-square-plus": 62307,
            "grid-square-circle": 62308,
            "grid-dividers": 62309,
            "grid-circle": 62310,
            "grid-2": 62311,
            "grid-1": 62312,
            "graduation-cap": 62313,
            "globe": 62314,
            "globe-stand": 62315,
            "globe-earth": 62316,
            "glasses": 62317,
            "gift": 62318,
            "game-controller": 62319,
            "forward": 62320,
            "food-tray": 62321,
            "folder": 62322,
            "folder-user": 62323,
            "folder-upload": 62324,
            "folder-times": 62325,
            "folder-star": 62326,
            "folder-shield": 62327,
            "folder-settings": 62328,
            "folder-search": 62329,
            "folder-plus": 62330,
            "folder-open": 62331,
            "folder-music": 62332,
            "folder-minus": 62333,
            "folder-lock": 62334,
            "folder-import": 62335,
            "folder-heart": 62336,
            "folder-export": 62337,
            "folder-edit": 62338,
            "folder-download": 62339,
            "folder-connection": 62340,
            "folder-code": 62341,
            "folder-clock": 62342,
            "folder-check": 62343,
            "folder-ban": 62344,
            "folder-alt": 62345,
            "floppy-disk": 62346,
            "flask": 62347,
            "flask-round": 62348,
            "flashlight": 62349,
            "flashlight-fill": 62350,
            "flag": 62351,
            "flag-triangle": 62352,
            "fire": 62353,
            "fingerprint": 62354,
            "fingerprint-viewfinder": 62355,
            "filter": 62356,
            "filter-times": 62357,
            "filter-plus": 62358,
            "filter-minus": 62359,
            "filter-check": 62360,
            "film": 62361,
            "file": 62362,
            "file-user": 62363,
            "file-upload": 62364,
            "file-times": 62365,
            "file-text": 62366,
            "file-text-times": 62367,
            "file-text-star": 62368,
            "file-text-shield": 62369,
            "file-text-search": 62370,
            "file-text-plus": 62371,
            "file-text-minus": 62372,
            "file-text-lock": 62373,
            "file-text-heart": 62374,
            "file-text-edit": 62375,
            "file-text-check": 62376,
            "file-text-ban": 62377,
            "file-star": 62378,
            "file-shield": 62379,
            "file-settings": 62380,
            "file-search": 62381,
            "file-plus": 62382,
            "file-music": 62383,
            "file-minus": 62384,
            "file-lock": 62385,
            "file-list": 62386,
            "file-list-times": 62387,
            "file-list-star": 62388,
            "file-list-shield": 62389,
            "file-list-search": 62390,
            "file-list-plus": 62391,
            "file-list-minus": 62392,
            "file-list-lock": 62393,
            "file-list-heart": 62394,
            "file-list-edit": 62395,
            "file-list-check": 62396,
            "file-list-ban": 62397,
            "file-import": 62398,
            "file-import-alt": 62399,
            "file-heart": 62400,
            "file-export": 62401,
            "file-export-alt": 62402,
            "file-edit": 62403,
            "file-download": 62404,
            "file-copy": 62405,
            "file-code": 62406,
            "file-clock": 62407,
            "file-check": 62408,
            "file-ban": 62409,
            "fast-forward": 62410,
            "fast-backward": 62411,
            "eye": 62412,
            "eye-slash": 62413,
            "eye-closed": 62414,
            "expand": 62415,
            "exclamation-square": 62416,
            "exclamation-circle": 62417,
            "exchange-vertical": 62418,
            "exchange-vertical-square": 62419,
            "exchange-vertical-circle": 62420,
            "exchange-horizontal": 62421,
            "exchange-horizontal-square": 62422,
            "exchange-horizontal-circle": 62423,
            "euro": 62424,
            "euro-square": 62425,
            "euro-circle": 62426,
            "ethereum": 62427,
            "ethereum-square": 62428,
            "ethereum-circle": 62429,
            "envelopes": 62430,
            "envelope": 62431,
            "envelope-times": 62432,
            "envelope-star": 62433,
            "envelope-shield": 62434,
            "envelope-settings": 62435,
            "envelope-search": 62436,
            "envelope-plus": 62437,
            "envelope-open": 62438,
            "envelope-notification": 62439,
            "envelope-minus": 62440,
            "envelope-lock": 62441,
            "envelope-heart": 62442,
            "envelope-eye": 62443,
            "envelope-edit": 62444,
            "envelope-clock": 62445,
            "envelope-check": 62446,
            "envelope-ban": 62447,
            "eject": 62448,
            "edit": 62449,
            "droplet": 62450,
            "droplet-slash": 62451,
            "drag-vertical": 62452,
            "drag-lines-vertical": 62453,
            "drag-lines-horizontal": 62454,
            "drag-horizontal": 62455,
            "download": 62456,
            "download-alt": 62457,
            "door-open": 62458,
            "door-closed": 62459,
            "dollar": 62460,
            "dollar-square": 62461,
            "dollar-send-square": 62462,
            "dollar-send-circle": 62463,
            "dollar-receive-square": 62464,
            "dollar-receive-circle": 62465,
            "dollar-circle": 62466,
            "document": 62467,
            "document-list": 62468,
            "document-list-check": 62469,
            "dna": 62470,
            "dislike": 62471,
            "dislike-tag": 62472,
            "dislike-square": 62473,
            "dislike-circle": 62474,
            "discount-percent-fill": 62475,
            "disc": 62476,
            "diamond": 62477,
            "diamond-exclamation": 62478,
            "desktop": 62479,
            "desktop-mobile": 62480,
            "desktop-code": 62481,
            "delivery-cart": 62482,
            "delivery-cart-arrow-up": 62483,
            "delivery-cart-arrow-down": 62484,
            "delete-right": 62485,
            "delete-left": 62486,
            "database": 62487,
            "cursor": 62488,
            "cursor-click": 62489,
            "crown": 62490,
            "crown-alt": 62491,
            "credit-card": 62492,
            "credit-card-times": 62493,
            "credit-card-slash": 62494,
            "credit-card-plus": 62495,
            "credit-card-minus": 62496,
            "credit-card-edit": 62497,
            "credit-card-convert": 62498,
            "credit-card-check": 62499,
            "credit-card-change": 62500,
            "credit-card-ban": 62501,
            "cpu": 62502,
            "coupon": 62503,
            "coupon-star": 62504,
            "coupon-percent": 62505,
            "coupon-heart": 62506,
            "copy2right-square": 62507,
            "copy2right-circle": 62508,
            "copy": 62509,
            "copy-plus": 62510,
            "copy-check": 62511,
            "copy-alt": 62512,
            "contrast": 62513,
            "compress": 62514,
            "compass": 62515,
            "compass-needle": 62516,
            "comments": 62517,
            "comments-text": 62518,
            "comments-dots": 62519,
            "comment": 62520,
            "comment-times": 62521,
            "comment-times-alt": 62522,
            "comment-text": 62523,
            "comment-text-times": 62524,
            "comment-text-plus": 62525,
            "comment-text-notification": 62526,
            "comment-text-minus": 62527,
            "comment-text-check": 62528,
            "comment-star": 62529,
            "comment-shield": 62530,
            "comment-settings": 62531,
            "comment-search": 62532,
            "comment-question": 62533,
            "comment-plus": 62534,
            "comment-plus-alt": 62535,
            "comment-notification": 62536,
            "comment-minus": 62537,
            "comment-minus-alt": 62538,
            "comment-lock": 62539,
            "comment-info": 62540,
            "comment-heart": 62541,
            "comment-exclamation": 62542,
            "comment-edit": 62543,
            "comment-dots": 62544,
            "comment-dots-times": 62545,
            "comment-dots-plus": 62546,
            "comment-dots-notification": 62547,
            "comment-dots-minus": 62548,
            "comment-dots-check": 62549,
            "comment-code": 62550,
            "comment-clock": 62551,
            "comment-check": 62552,
            "comment-check-alt": 62553,
            "comment-activity": 62554,
            "coins": 62555,
            "coin": 62556,
            "coin-convert": 62557,
            "coin-card-transfer": 62558,
            "code": 62559,
            "code-square": 62560,
            "code-circle": 62561,
            "cloud": 62562,
            "cloud-upload": 62563,
            "cloud-times": 62564,
            "cloud-slash": 62565,
            "cloud-shield": 62566,
            "cloud-share": 62567,
            "cloud-plus": 62568,
            "cloud-minus": 62569,
            "cloud-lock": 62570,
            "cloud-download": 62571,
            "cloud-connection": 62572,
            "cloud-check": 62573,
            "closed-captioning": 62574,
            "clock": 62575,
            "clock-square": 62576,
            "clock-square-alt": 62577,
            "clock-alt": 62578,
            "clipboard": 62579,
            "clipboard-times": 62580,
            "clipboard-text": 62581,
            "clipboard-star": 62582,
            "clipboard-search": 62583,
            "clipboard-plus": 62584,
            "clipboard-minus": 62585,
            "clipboard-list": 62586,
            "clipboard-list-check": 62587,
            "clipboard-heart": 62588,
            "clipboard-edit": 62589,
            "clipboard-check": 62590,
            "chromecast": 62591,
            "chevron-up": 62592,
            "chevron-right": 62593,
            "chevron-left": 62594,
            "chevron-down": 62595,
            "chevron-big-up": 62596,
            "chevron-big-right": 62597,
            "chevron-big-left": 62598,
            "chevron-big-down": 62599,
            "checkbox-square-fill": 62600,
            "check": 62601,
            "check-square": 62602,
            "check-double": 62603,
            "check-circle": 62604,
            "chats": 62605,
            "chats-text": 62606,
            "chats-dots": 62607,
            "chat": 62608,
            "chat-times": 62609,
            "chat-times-alt": 62610,
            "chat-text": 62611,
            "chat-text-times": 62612,
            "chat-text-plus": 62613,
            "chat-text-notification": 62614,
            "chat-text-minus": 62615,
            "chat-text-check": 62616,
            "chat-star": 62617,
            "chat-shield": 62618,
            "chat-settings": 62619,
            "chat-search": 62620,
            "chat-question": 62621,
            "chat-plus": 62622,
            "chat-plus-alt": 62623,
            "chat-notification": 62624,
            "chat-minus": 62625,
            "chat-minus-alt": 62626,
            "chat-lock": 62627,
            "chat-info": 62628,
            "chat-heart": 62629,
            "chat-exclamation": 62630,
            "chat-edit": 62631,
            "chat-dots": 62632,
            "chat-dots-times": 62633,
            "chat-dots-plus": 62634,
            "chat-dots-notification": 62635,
            "chat-dots-minus": 62636,
            "chat-dots-check": 62637,
            "chat-code": 62638,
            "chat-clock": 62639,
            "chat-check": 62640,
            "chat-check-alt": 62641,
            "chat-activity": 62642,
            "chart-trend-up": 62643,
            "chart-trend-down": 62644,
            "chart-pyramid": 62645,
            "chart-pie": 62646,
            "chart-line": 62647,
            "chart-line-up": 62648,
            "chart-line-down": 62649,
            "chart-line-dots": 62650,
            "chart-bar": 62651,
            "chart-bar-vertical": 62652,
            "chart-bar-square": 62653,
            "chart-bar-horizontal": 62654,
            "chart-bar-circle": 62655,
            "chart-bar-alt": 62656,
            "certificate": 62657,
            "castle": 62658,
            "caret-up": 62659,
            "caret-up-square": 62660,
            "caret-up-circle": 62661,
            "caret-right": 62662,
            "caret-right-square": 62663,
            "caret-right-circle": 62664,
            "caret-left": 62665,
            "caret-left-square": 62666,
            "caret-left-circle": 62667,
            "caret-down": 62668,
            "caret-down-square": 62669,
            "caret-down-circle": 62670,
            "camera": 62671,
            "camera-square": 62672,
            "camera-slash": 62673,
            "camera-rotate": 62674,
            "camera-circle": 62675,
            "calendar": 62676,
            "calendar-times": 62677,
            "calendar-times-alt": 62678,
            "calendar-star": 62679,
            "calendar-search": 62680,
            "calendar-plus": 62681,
            "calendar-plus-alt": 62682,
            "calendar-minus": 62683,
            "calendar-minus-alt": 62684,
            "calendar-lock": 62685,
            "calendar-heart": 62686,
            "calendar-empty": 62687,
            "calendar-empty-alt": 62688,
            "calendar-edit": 62689,
            "calendar-clock": 62690,
            "calendar-check": 62691,
            "calendar-check-alt": 62692,
            "calculator": 62693,
            "calculator-simple": 62694,
            "cake": 62695,
            "cabinet-filing": 62696,
            "bus": 62697,
            "buildings": 62698,
            "buildings-alt": 62699,
            "building": 62700,
            "building-tree": 62701,
            "building-coins": 62702,
            "bug": 62703,
            "bug-slash": 62704,
            "brush": 62705,
            "brush-alt": 62706,
            "briefcase": 62707,
            "briefcase-times": 62708,
            "briefcase-plus": 62709,
            "briefcase-money": 62710,
            "briefcase-minus": 62711,
            "briefcase-check": 62712,
            "brain": 62713,
            "boxes": 62714,
            "box": 62715,
            "box-times": 62716,
            "box-search": 62717,
            "box-plus": 62718,
            "box-minus": 62719,
            "box-check": 62720,
            "books": 62721,
            "bookmarks": 62722,
            "bookmarks-user": 62723,
            "bookmarks-times": 62724,
            "bookmarks-star": 62725,
            "bookmarks-settings": 62726,
            "bookmarks-plus": 62727,
            "bookmarks-minus": 62728,
            "bookmarks-heart": 62729,
            "bookmarks-check": 62730,
            "bookmark": 62731,
            "bookmark-user": 62732,
            "bookmark-times": 62733,
            "bookmark-star": 62734,
            "bookmark-settings": 62735,
            "bookmark-plus": 62736,
            "bookmark-minus": 62737,
            "bookmark-heart": 62738,
            "bookmark-check": 62739,
            "book": 62740,
            "book-text": 62741,
            "book-open": 62742,
            "book-open-text": 62743,
            "book-open-reader": 62744,
            "book-open-bookmark": 62745,
            "book-empty": 62746,
            "book-bookmark": 62747,
            "book-alt": 62748,
            "bone": 62749,
            "bone-break": 62750,
            "bolt": 62751,
            "bolt-square": 62752,
            "bolt-square-alt": 62753,
            "bolt-slash": 62754,
            "bolt-slash-alt": 62755,
            "bolt-circle": 62756,
            "bolt-circle-alt": 62757,
            "bolt-alt": 62758,
            "bluetooth": 62759,
            "bitcoin": 62760,
            "bitcoin-square": 62761,
            "bitcoin-circle": 62762,
            "bezier": 62763,
            "bell": 62764,
            "bell-times": 62765,
            "bell-slash": 62766,
            "bell-plus": 62767,
            "bell-on": 62768,
            "bell-notification": 62769,
            "bell-minus": 62770,
            "bell-exclamation": 62771,
            "bed": 62772,
            "battery-half": 62773,
            "battery-full": 62774,
            "battery-empty": 62775,
            "battery-bolt": 62776,
            "bank": 62777,
            "bandage": 62778,
            "ban": 62779,
            "badge": 62780,
            "badge-like": 62781,
            "badge-dollar": 62782,
            "badge-discount": 62783,
            "badge-discount-alt": 62784,
            "badge-check": 62785,
            "backward": 62786,
            "backpack": 62787,
            "award": 62788,
            "award-star": 62789,
            "award-check": 62790,
            "atom": 62791,
            "at": 62792,
            "arrows-up-down": 62793,
            "arrows-repeat": 62794,
            "arrows-repeat-square": 62795,
            "arrows-repeat-circle": 62796,
            "arrows-move": 62797,
            "arrows-left-right": 62798,
            "arrows-expand": 62799,
            "arrows-compress": 62800,
            "arrow-up": 62801,
            "arrow-up-to-line": 62802,
            "arrow-up-square": 62803,
            "arrow-up-small": 62804,
            "arrow-up-right": 62805,
            "arrow-up-right-square": 62806,
            "arrow-up-right-small": 62807,
            "arrow-up-right-circle": 62808,
            "arrow-up-left": 62809,
            "arrow-up-left-square": 62810,
            "arrow-up-left-small": 62811,
            "arrow-up-left-circle": 62812,
            "arrow-up-from-line": 62813,
            "arrow-up-circle": 62814,
            "arrow-turn-up-right": 62815,
            "arrow-turn-up-left": 62816,
            "arrow-turn-right-up": 62817,
            "arrow-turn-right-down": 62818,
            "arrow-turn-left-up": 62819,
            "arrow-turn-left-down": 62820,
            "arrow-turn-down-right": 62821,
            "arrow-turn-down-left": 62822,
            "arrow-share": 62823,
            "arrow-right": 62824,
            "arrow-right-to-line": 62825,
            "arrow-right-square": 62826,
            "arrow-right-small": 62827,
            "arrow-right-line": 62828,
            "arrow-right-from-line": 62829,
            "arrow-right-circle": 62830,
            "arrow-reply": 62831,
            "arrow-left": 62832,
            "arrow-left-to-line": 62833,
            "arrow-left-square": 62834,
            "arrow-left-small": 62835,
            "arrow-left-from-line": 62836,
            "arrow-left-circle": 62837,
            "arrow-left-arrow-right": 62838,
            "arrow-left-arrow-right-square": 62839,
            "arrow-left-arrow-right-circle": 62840,
            "arrow-import": 62841,
            "arrow-forward": 62842,
            "arrow-forward-square": 62843,
            "arrow-forward-square-alt": 62844,
            "arrow-forward-circle": 62845,
            "arrow-forward-circle-alt": 62846,
            "arrow-forward-alt": 62847,
            "arrow-export": 62848,
            "arrow-down": 62849,
            "arrow-down-to-line": 62850,
            "arrow-down-square": 62851,
            "arrow-down-small": 62852,
            "arrow-down-right": 62853,
            "arrow-down-right-square": 62854,
            "arrow-down-right-small": 62855,
            "arrow-down-right-circle": 62856,
            "arrow-down-left": 62857,
            "arrow-down-left-square": 62858,
            "arrow-down-left-small": 62859,
            "arrow-down-left-circle": 62860,
            "arrow-down-from-line": 62861,
            "arrow-down-circle": 62862,
            "arrow-down-arrow-up": 62863,
            "arrow-down-arrow-up-square": 62864,
            "arrow-down-arrow-up-circle": 62865,
            "arrow-back": 62866,
            "arrow-back-square": 62867,
            "arrow-back-square-alt": 62868,
            "arrow-back-circle": 62869,
            "arrow-back-circle-alt": 62870,
            "arrow-back-alt": 62871,
            "archway": 62872,
            "archive": 62873,
            "angles-up": 62874,
            "angles-up-small": 62875,
            "angles-right": 62876,
            "angles-right-small": 62877,
            "angles-left": 62878,
            "angles-left-small": 62879,
            "angles-left-right": 62880,
            "angles-down": 62881,
            "angles-down-up": 62882,
            "angles-down-small": 62883,
            "angle-up": 62884,
            "angle-up-square": 62885,
            "angle-up-small": 62886,
            "angle-up-circle": 62887,
            "angle-right": 62888,
            "angle-right-square": 62889,
            "angle-right-small": 62890,
            "angle-right-circle": 62891,
            "angle-left": 62892,
            "angle-left-square": 62893,
            "angle-left-small": 62894,
            "angle-left-circle": 62895,
            "angle-down": 62896,
            "angle-down-square": 62897,
            "angle-down-small": 62898,
            "angle-down-circle": 62899,
            "alarm-times": 62900,
            "alarm-times-alt": 62901,
            "alarm-plus": 62902,
            "alarm-plus-alt": 62903,
            "alarm-minus": 62904,
            "alarm-minus-alt": 62905,
            "alarm-edit": 62906,
            "alarm-clock": 62907,
            "alarm-clock-empty": 62908,
            "alarm-clock-alt": 62909,
            "alarm-check": 62910,
            "alarm-check-alt": 62911,
            "airplay": 62912,
            "airplay-alt": 62913,
            "address-book": 62914,
            "activity-star-square": 62915,
            "activity-star-circle": 62916,
            "activity-square": 62917,
            "activity-notification-square": 62918,
            "activity-notification-circle": 62919,
            "activity-heart-square": 62920,
            "activity-heart-circle": 62921,
            "activity-circle": 62922
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
