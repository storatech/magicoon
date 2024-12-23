"use strict";
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
        if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
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
    // node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
    var require_react_production_min = __commonJS({
        "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js": function(exports) {
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
                if (null === a || "object" !== (typeof a === "undefined" ? "undefined" : _type_of(a))) return null;
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
                if ("object" !== (typeof a === "undefined" ? "undefined" : _type_of(a)) && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
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
                return "object" === (typeof a === "undefined" ? "undefined" : _type_of(a)) && null !== a && a.$$typeof === l;
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
                return "object" === (typeof a === "undefined" ? "undefined" : _type_of(a)) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
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
    // node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.development.js
    var require_react_development = __commonJS({
        "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.development.js": function(exports, module) {
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
                        if (maybeIterable === null || (typeof maybeIterable === "undefined" ? "undefined" : _type_of(maybeIterable)) !== "object") {
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
                        if ((typeof partialState === "undefined" ? "undefined" : _type_of(partialState)) !== "object" && typeof partialState !== "function" && partialState != null) {
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
                        if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object") {
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
                        return (typeof object === "undefined" ? "undefined" : _type_of(object)) === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
                        if ((typeof element === "undefined" ? "undefined" : _type_of(element)) === "object" && element !== null && element.key != null) {
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
                    function createContext2(defaultValue) {
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
                        if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && type !== null) {
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
                    function useContext2(Context) {
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
                                if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && Reflect.construct) {
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
                        if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object") {
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
                        if ((typeof node === "undefined" ? "undefined" : _type_of(node)) !== "object") {
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
                            } else if ((typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
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
                            if (type === void 0 || (typeof type === "undefined" ? "undefined" : _type_of(type)) === "object" && type !== null && Object.keys(type).length === 0) {
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
                            if (result !== null && (typeof result === "undefined" ? "undefined" : _type_of(result)) === "object" && typeof result.then === "function") {
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
                    exports.createContext = createContext2;
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
                    exports.useContext = useContext2;
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
    // node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
    var require_react = __commonJS({
        "node_modules/.pnpm/react@18.3.1/node_modules/react/index.js": function(exports, module) {
            "use strict";
            if (process.env.NODE_ENV === "production") {
                module.exports = require_react_production_min();
            } else {
                module.exports = require_react_development();
            }
        }
    });
    // magicoon_react/Magicoon.tsx
    var import_react2 = __toESM(require_react(), 1);
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
            "settings-line": 61920,
            "server": 61921,
            "send": 61922,
            "send-right": 61923,
            "search": 61924,
            "search-text": 61925,
            "search-plus": 61926,
            "search-minus": 61927,
            "search-line": 61928,
            "sd-card": 61929,
            "scissors": 61930,
            "school": 61931,
            "scanner": 61932,
            "scan": 61933,
            "scan-qr": 61934,
            "scan-circle": 61935,
            "sack-dollar": 61936,
            "route": 61937,
            "rotate": 61938,
            "rotate-square": 61939,
            "rotate-right": 61940,
            "rotate-right-square": 61941,
            "rotate-right-circle": 61942,
            "rotate-left": 61943,
            "rotate-left-square": 61944,
            "rotate-left-circle": 61945,
            "rotate-circle": 61946,
            "rocket": 61947,
            "rocket-launch": 61948,
            "road": 61949,
            "road-map-line": 61950,
            "restaurant": 61951,
            "repeat": 61952,
            "registered-square": 61953,
            "registered-circle": 61954,
            "receipt": 61955,
            "receipt-text": 61956,
            "receipt-text-alt": 61957,
            "receipt-star": 61958,
            "receipt-star-alt": 61959,
            "receipt-percent": 61960,
            "receipt-percent-alt": 61961,
            "receipt-list": 61962,
            "receipt-list-alt": 61963,
            "receipt-heart": 61964,
            "receipt-heart-alt": 61965,
            "receipt-alt": 61966,
            "ranking": 61967,
            "radio": 61968,
            "radio-button-fill": 61969,
            "radiation": 61970,
            "radiation-circle": 61971,
            "radar": 61972,
            "question-square": 61973,
            "question-circle": 61974,
            "puzzle": 61975,
            "print": 61976,
            "print-slash": 61977,
            "presentation": 61978,
            "presentation-user": 61979,
            "presentation-trend-up": 61980,
            "presentation-trend-down": 61981,
            "presentation-text": 61982,
            "presentation-poll": 61983,
            "presentation-play": 61984,
            "presentation-pen": 61985,
            "presentation-lightbulb": 61986,
            "presentation-dollar": 61987,
            "presentation-chart-pie": 61988,
            "presentation-chart-line": 61989,
            "power-off": 61990,
            "power-off-square": 61991,
            "power-off-circle": 61992,
            "poll-vertical-square": 61993,
            "poll-vertical-circle": 61994,
            "poll-horizontal-square": 61995,
            "poll-horizontal-circle": 61996,
            "plus": 61997,
            "plus-square": 61998,
            "plus-circle": 61999,
            "plug": 62e3,
            "playlist": 62001,
            "play": 62002,
            "play-square": 62003,
            "play-pause": 62004,
            "play-circle": 62005,
            "pills": 62006,
            "phone": 62007,
            "phone-times": 62008,
            "phone-slash": 62009,
            "phone-plus": 62010,
            "phone-outgoing": 62011,
            "phone-office": 62012,
            "phone-missed": 62013,
            "phone-line": 62014,
            "phone-incoming": 62015,
            "phone-hangup": 62016,
            "phone-flip": 62017,
            "phone-call": 62018,
            "phone-2": 62019,
            "phone-1": 62020,
            "percent": 62021,
            "percent-tag": 62022,
            "percent-square": 62023,
            "percent-circle": 62024,
            "pen": 62025,
            "pen-tool": 62026,
            "pen-line": 62027,
            "pause": 62028,
            "pause-circle": 62029,
            "parking-square": 62030,
            "parking-circle": 62031,
            "papers": 62032,
            "papers-text": 62033,
            "paperclip": 62034,
            "palette": 62035,
            "package": 62036,
            "package-star": 62037,
            "package-heart": 62038,
            "package-dollar": 62039,
            "package-check": 62040,
            "octagon": 62041,
            "octagon-times": 62042,
            "octagon-plus": 62043,
            "octagon-minus": 62044,
            "octagon-exclamation": 62045,
            "octagon-check": 62046,
            "nut": 62047,
            "notification-line": 62048,
            "notebook": 62049,
            "note": 62050,
            "note-text": 62051,
            "note-text-square": 62052,
            "note-list": 62053,
            "note-list-square": 62054,
            "note-list-check": 62055,
            "note-list-check-square": 62056,
            "newspaper": 62057,
            "music": 62058,
            "music-note": 62059,
            "music-list": 62060,
            "mug": 62061,
            "mug-hot": 62062,
            "mouse": 62063,
            "mosque": 62064,
            "mortar-pestle": 62065,
            "more-vertical": 62066,
            "more-vertical-square": 62067,
            "more-vertical-circle": 62068,
            "more-horizontal": 62069,
            "more-horizontal-square": 62070,
            "more-horizontal-circle": 62071,
            "moon": 62072,
            "monitor-waveform": 62073,
            "money-withdrawal": 62074,
            "money-convert": 62075,
            "money-bills": 62076,
            "money-bill": 62077,
            "money-bill-times": 62078,
            "money-bill-send": 62079,
            "money-bill-receive": 62080,
            "money-bill-plus": 62081,
            "money-bill-minus": 62082,
            "money-bill-convert": 62083,
            "money-bill-clock": 62084,
            "money-bill-check": 62085,
            "money-bill-ban": 62086,
            "mobile": 62087,
            "minus": 62088,
            "minus-square": 62089,
            "minus-circle": 62090,
            "minimize": 62091,
            "microscope": 62092,
            "microphone": 62093,
            "microphone-stand": 62094,
            "microphone-slash": 62095,
            "messages": 62096,
            "messages-text": 62097,
            "messages-dots": 62098,
            "message": 62099,
            "message-times": 62100,
            "message-times-alt": 62101,
            "message-text": 62102,
            "message-text-times": 62103,
            "message-text-plus": 62104,
            "message-text-notification": 62105,
            "message-text-minus": 62106,
            "message-text-check": 62107,
            "message-star": 62108,
            "message-shield": 62109,
            "message-settings": 62110,
            "message-search": 62111,
            "message-question": 62112,
            "message-plus": 62113,
            "message-plus-alt": 62114,
            "message-notification": 62115,
            "message-minus": 62116,
            "message-minus-alt": 62117,
            "message-lock": 62118,
            "message-info": 62119,
            "message-heart": 62120,
            "message-exclamation": 62121,
            "message-edit": 62122,
            "message-dots": 62123,
            "message-dots-times": 62124,
            "message-dots-plus": 62125,
            "message-dots-notification": 62126,
            "message-dots-minus": 62127,
            "message-dots-check": 62128,
            "message-code": 62129,
            "message-clock": 62130,
            "message-check": 62131,
            "message-check-alt": 62132,
            "message-activity": 62133,
            "menu": 62134,
            "menu-square": 62135,
            "menu-square-alt": 62136,
            "menu-search": 62137,
            "menu-right": 62138,
            "menu-right-square": 62139,
            "menu-right-square-alt": 62140,
            "menu-right-circle": 62141,
            "menu-right-circle-alt": 62142,
            "menu-right-alt": 62143,
            "menu-line": 62144,
            "menu-left": 62145,
            "menu-left-square": 62146,
            "menu-left-square-alt": 62147,
            "menu-left-circle": 62148,
            "menu-left-circle-alt": 62149,
            "menu-left-alt": 62150,
            "menu-duo": 62151,
            "menu-duo-square": 62152,
            "menu-duo-circle": 62153,
            "menu-circle": 62154,
            "menu-circle-alt": 62155,
            "menu-alt": 62156,
            "megaphone": 62157,
            "medal": 62158,
            "medal-star": 62159,
            "medal-check": 62160,
            "maximize": 62161,
            "mask-face": 62162,
            "map": 62163,
            "map-pin": 62164,
            "map-pin-line": 62165,
            "map-location": 62166,
            "magnet": 62167,
            "log-out": 62168,
            "log-in": 62169,
            "lock": 62170,
            "lock-viewfinder": 62171,
            "location-pin": 62172,
            "location-pin-times": 62173,
            "location-pin-star": 62174,
            "location-pin-slash": 62175,
            "location-pin-slash-alt": 62176,
            "location-pin-search": 62177,
            "location-pin-question": 62178,
            "location-pin-plus": 62179,
            "location-pin-minus": 62180,
            "location-pin-lock": 62181,
            "location-pin-heart": 62182,
            "location-pin-eye": 62183,
            "location-pin-exclamation": 62184,
            "location-pin-edit": 62185,
            "location-pin-check": 62186,
            "location-pin-alt": 62187,
            "location-crosshairs": 62188,
            "location-crosshairs-slash": 62189,
            "location-arrow": 62190,
            "location-arrow-square": 62191,
            "location-arrow-circle": 62192,
            "list": 62193,
            "link": 62194,
            "link-horizontal": 62195,
            "link-horizontal-alt": 62196,
            "link-broken": 62197,
            "link-broken-horizontal": 62198,
            "link-alt": 62199,
            "line-up-square": 62200,
            "line-up-circle": 62201,
            "line-down-square": 62202,
            "line-down-circle": 62203,
            "line-chart-dots": 62204,
            "line-chart-dots-square": 62205,
            "line-chart-dots-circle": 62206,
            "like": 62207,
            "like-tag": 62208,
            "like-square": 62209,
            "like-circle": 62210,
            "lightbulb": 62211,
            "light-emergency": 62212,
            "light-emergency-on": 62213,
            "life-ring": 62214,
            "leaf": 62215,
            "layout-web-9": 62216,
            "layout-web-8": 62217,
            "layout-web-7": 62218,
            "layout-web-6": 62219,
            "layout-web-5": 62220,
            "layout-web-4": 62221,
            "layout-web-3": 62222,
            "layout-web-2": 62223,
            "layout-web-12": 62224,
            "layout-web-11": 62225,
            "layout-web-10": 62226,
            "layout-web-1": 62227,
            "layer-group": 62228,
            "laptop": 62229,
            "laptop-code": 62230,
            "keypad": 62231,
            "keyhole-square": 62232,
            "keyhole-circle": 62233,
            "keyboard": 62234,
            "key": 62235,
            "key-square": 62236,
            "key-circle": 62237,
            "kaaba": 62238,
            "invoice": 62239,
            "info-square": 62240,
            "info-circle": 62241,
            "inbox": 62242,
            "inbox-upload": 62243,
            "inbox-empty": 62244,
            "inbox-download": 62245,
            "image": 62246,
            "image-upload": 62247,
            "image-times": 62248,
            "image-plus": 62249,
            "image-minus": 62250,
            "image-gallery": 62251,
            "image-gallery-plus": 62252,
            "image-download": 62253,
            "image-check": 62254,
            "id-card": 62255,
            "id-badge": 62256,
            "hourglass": 62257,
            "hospital": 62258,
            "hospital-h-sign-square": 62259,
            "hospital-h-sign-circle": 62260,
            "home": 62261,
            "home-wifi": 62262,
            "home-user": 62263,
            "home-trend-up": 62264,
            "home-trend-down": 62265,
            "home-star": 62266,
            "home-shield": 62267,
            "home-search": 62268,
            "home-roof": 62269,
            "home-roof-wifi": 62270,
            "home-roof-user": 62271,
            "home-roof-trend-up": 62272,
            "home-roof-trend-down": 62273,
            "home-roof-star": 62274,
            "home-roof-shield": 62275,
            "home-roof-search": 62276,
            "home-roof-lock": 62277,
            "home-roof-heart": 62278,
            "home-roof-dollar": 62279,
            "home-roof-activity": 62280,
            "home-lock": 62281,
            "home-line": 62282,
            "home-heart": 62283,
            "home-dollar": 62284,
            "home-dash": 62285,
            "home-dash-wifi": 62286,
            "home-dash-user": 62287,
            "home-dash-trend-up": 62288,
            "home-dash-trend-down": 62289,
            "home-dash-star": 62290,
            "home-dash-shield": 62291,
            "home-dash-search": 62292,
            "home-dash-lock": 62293,
            "home-dash-heart": 62294,
            "home-dash-dollar": 62295,
            "home-dash-activity": 62296,
            "home-activity": 62297,
            "history-line": 62298,
            "heart": 62299,
            "heart-times": 62300,
            "heart-tag": 62301,
            "heart-square": 62302,
            "heart-slash": 62303,
            "heart-pulse": 62304,
            "heart-plus": 62305,
            "heart-minus": 62306,
            "heart-line": 62307,
            "heart-circle": 62308,
            "heart-check": 62309,
            "headphones": 62310,
            "hashtag": 62311,
            "hard-drive": 62312,
            "hand-holding-user": 62313,
            "hand-holding-dollar": 62314,
            "hand-holding-dollar-circle": 62315,
            "grid-web-7": 62316,
            "grid-web-6": 62317,
            "grid-web-5": 62318,
            "grid-web-4": 62319,
            "grid-web-3": 62320,
            "grid-web-2": 62321,
            "grid-web-1": 62322,
            "grid-square": 62323,
            "grid-square-plus": 62324,
            "grid-square-circle": 62325,
            "grid-dividers": 62326,
            "grid-circle": 62327,
            "grid-2": 62328,
            "grid-1": 62329,
            "graduation-cap": 62330,
            "globe": 62331,
            "globe-stand": 62332,
            "globe-line": 62333,
            "globe-earth": 62334,
            "glasses": 62335,
            "gift": 62336,
            "gift-line": 62337,
            "game-controller": 62338,
            "forward": 62339,
            "food-tray": 62340,
            "folder": 62341,
            "folder-user": 62342,
            "folder-upload": 62343,
            "folder-times": 62344,
            "folder-star": 62345,
            "folder-shield": 62346,
            "folder-settings": 62347,
            "folder-search": 62348,
            "folder-plus": 62349,
            "folder-open": 62350,
            "folder-music": 62351,
            "folder-minus": 62352,
            "folder-lock": 62353,
            "folder-import": 62354,
            "folder-heart": 62355,
            "folder-export": 62356,
            "folder-edit": 62357,
            "folder-download": 62358,
            "folder-connection": 62359,
            "folder-code": 62360,
            "folder-clock": 62361,
            "folder-check": 62362,
            "folder-ban": 62363,
            "folder-alt": 62364,
            "floppy-disk": 62365,
            "flask": 62366,
            "flask-round": 62367,
            "flashlight": 62368,
            "flashlight-fill": 62369,
            "flag": 62370,
            "flag-triangle": 62371,
            "fire": 62372,
            "fingerprint": 62373,
            "fingerprint-viewfinder": 62374,
            "filter": 62375,
            "filter-times": 62376,
            "filter-plus": 62377,
            "filter-minus": 62378,
            "filter-check": 62379,
            "film": 62380,
            "file": 62381,
            "file-user": 62382,
            "file-upload": 62383,
            "file-times": 62384,
            "file-text": 62385,
            "file-text-times": 62386,
            "file-text-star": 62387,
            "file-text-shield": 62388,
            "file-text-search": 62389,
            "file-text-plus": 62390,
            "file-text-minus": 62391,
            "file-text-lock": 62392,
            "file-text-heart": 62393,
            "file-text-edit": 62394,
            "file-text-check": 62395,
            "file-text-ban": 62396,
            "file-star": 62397,
            "file-shield": 62398,
            "file-settings": 62399,
            "file-search": 62400,
            "file-plus": 62401,
            "file-music": 62402,
            "file-minus": 62403,
            "file-lock": 62404,
            "file-list": 62405,
            "file-list-times": 62406,
            "file-list-star": 62407,
            "file-list-shield": 62408,
            "file-list-search": 62409,
            "file-list-plus": 62410,
            "file-list-minus": 62411,
            "file-list-lock": 62412,
            "file-list-heart": 62413,
            "file-list-edit": 62414,
            "file-list-check": 62415,
            "file-list-ban": 62416,
            "file-list-3-line": 62417,
            "file-import": 62418,
            "file-import-alt": 62419,
            "file-heart": 62420,
            "file-export": 62421,
            "file-export-alt": 62422,
            "file-edit": 62423,
            "file-download": 62424,
            "file-copy": 62425,
            "file-code": 62426,
            "file-clock": 62427,
            "file-check": 62428,
            "file-ban": 62429,
            "fast-forward": 62430,
            "fast-backward": 62431,
            "eye": 62432,
            "eye-slash": 62433,
            "eye-closed": 62434,
            "expand": 62435,
            "exclamation-square": 62436,
            "exclamation-circle": 62437,
            "exchange-vertical": 62438,
            "exchange-vertical-square": 62439,
            "exchange-vertical-circle": 62440,
            "exchange-horizontal": 62441,
            "exchange-horizontal-square": 62442,
            "exchange-horizontal-circle": 62443,
            "euro": 62444,
            "euro-square": 62445,
            "euro-circle": 62446,
            "ethereum": 62447,
            "ethereum-square": 62448,
            "ethereum-circle": 62449,
            "envelopes": 62450,
            "envelope": 62451,
            "envelope-times": 62452,
            "envelope-star": 62453,
            "envelope-shield": 62454,
            "envelope-settings": 62455,
            "envelope-search": 62456,
            "envelope-plus": 62457,
            "envelope-open": 62458,
            "envelope-notification": 62459,
            "envelope-minus": 62460,
            "envelope-lock": 62461,
            "envelope-heart": 62462,
            "envelope-eye": 62463,
            "envelope-edit": 62464,
            "envelope-clock": 62465,
            "envelope-check": 62466,
            "envelope-ban": 62467,
            "eject": 62468,
            "edit": 62469,
            "droplet": 62470,
            "droplet-slash": 62471,
            "drag-vertical": 62472,
            "drag-lines-vertical": 62473,
            "drag-lines-horizontal": 62474,
            "drag-horizontal": 62475,
            "download": 62476,
            "download-alt": 62477,
            "door-open": 62478,
            "door-closed": 62479,
            "dollar": 62480,
            "dollar-square": 62481,
            "dollar-send-square": 62482,
            "dollar-send-circle": 62483,
            "dollar-receive-square": 62484,
            "dollar-receive-circle": 62485,
            "dollar-circle": 62486,
            "document": 62487,
            "document-list": 62488,
            "document-list-check": 62489,
            "dna": 62490,
            "dislike": 62491,
            "dislike-tag": 62492,
            "dislike-square": 62493,
            "dislike-circle": 62494,
            "discount-percent-fill": 62495,
            "disc": 62496,
            "diamond": 62497,
            "diamond-exclamation": 62498,
            "desktop": 62499,
            "desktop-mobile": 62500,
            "desktop-code": 62501,
            "delivery-cart": 62502,
            "delivery-cart-arrow-up": 62503,
            "delivery-cart-arrow-down": 62504,
            "delete-right": 62505,
            "delete-left": 62506,
            "database": 62507,
            "customer-service-line": 62508,
            "cursor": 62509,
            "cursor-click": 62510,
            "crown": 62511,
            "crown-alt": 62512,
            "credit-card": 62513,
            "credit-card-times": 62514,
            "credit-card-slash": 62515,
            "credit-card-plus": 62516,
            "credit-card-minus": 62517,
            "credit-card-edit": 62518,
            "credit-card-convert": 62519,
            "credit-card-check": 62520,
            "credit-card-change": 62521,
            "credit-card-ban": 62522,
            "cpu": 62523,
            "coupon": 62524,
            "coupon-star": 62525,
            "coupon-percent": 62526,
            "coupon-heart": 62527,
            "copyright-square": 62528,
            "copyright-circle": 62529,
            "copy": 62530,
            "copy-plus": 62531,
            "copy-check": 62532,
            "copy-alt": 62533,
            "contrast": 62534,
            "compress": 62535,
            "compass": 62536,
            "compass-needle": 62537,
            "comments": 62538,
            "comments-text": 62539,
            "comments-dots": 62540,
            "comment": 62541,
            "comment-times": 62542,
            "comment-times-alt": 62543,
            "comment-text": 62544,
            "comment-text-times": 62545,
            "comment-text-plus": 62546,
            "comment-text-notification": 62547,
            "comment-text-minus": 62548,
            "comment-text-check": 62549,
            "comment-star": 62550,
            "comment-shield": 62551,
            "comment-settings": 62552,
            "comment-search": 62553,
            "comment-question": 62554,
            "comment-plus": 62555,
            "comment-plus-alt": 62556,
            "comment-notification": 62557,
            "comment-minus": 62558,
            "comment-minus-alt": 62559,
            "comment-lock": 62560,
            "comment-info": 62561,
            "comment-heart": 62562,
            "comment-exclamation": 62563,
            "comment-edit": 62564,
            "comment-dots": 62565,
            "comment-dots-times": 62566,
            "comment-dots-plus": 62567,
            "comment-dots-notification": 62568,
            "comment-dots-minus": 62569,
            "comment-dots-check": 62570,
            "comment-code": 62571,
            "comment-clock": 62572,
            "comment-check": 62573,
            "comment-check-alt": 62574,
            "comment-activity": 62575,
            "coins": 62576,
            "coin": 62577,
            "coin-convert": 62578,
            "coin-card-transfer": 62579,
            "code": 62580,
            "code-square": 62581,
            "code-circle": 62582,
            "cloud": 62583,
            "cloud-upload": 62584,
            "cloud-times": 62585,
            "cloud-slash": 62586,
            "cloud-shield": 62587,
            "cloud-share": 62588,
            "cloud-plus": 62589,
            "cloud-minus": 62590,
            "cloud-lock": 62591,
            "cloud-download": 62592,
            "cloud-connection": 62593,
            "cloud-check": 62594,
            "closed-captioning": 62595,
            "clock": 62596,
            "clock-square": 62597,
            "clock-square-alt": 62598,
            "clock-alt": 62599,
            "clipboard": 62600,
            "clipboard-times": 62601,
            "clipboard-text": 62602,
            "clipboard-star": 62603,
            "clipboard-search": 62604,
            "clipboard-plus": 62605,
            "clipboard-minus": 62606,
            "clipboard-list": 62607,
            "clipboard-list-check": 62608,
            "clipboard-heart": 62609,
            "clipboard-edit": 62610,
            "clipboard-check": 62611,
            "chromecast": 62612,
            "chevron-up": 62613,
            "chevron-right": 62614,
            "chevron-left": 62615,
            "chevron-down": 62616,
            "chevron-big-up": 62617,
            "chevron-big-right": 62618,
            "chevron-big-left": 62619,
            "chevron-big-down": 62620,
            "checkbox-square-fill": 62621,
            "check": 62622,
            "check-square": 62623,
            "check-double": 62624,
            "check-circle": 62625,
            "chats": 62626,
            "chats-text": 62627,
            "chats-dots": 62628,
            "chat": 62629,
            "chat-times": 62630,
            "chat-times-alt": 62631,
            "chat-text": 62632,
            "chat-text-times": 62633,
            "chat-text-plus": 62634,
            "chat-text-notification": 62635,
            "chat-text-minus": 62636,
            "chat-text-check": 62637,
            "chat-star": 62638,
            "chat-shield": 62639,
            "chat-settings": 62640,
            "chat-search": 62641,
            "chat-question": 62642,
            "chat-plus": 62643,
            "chat-plus-alt": 62644,
            "chat-notification": 62645,
            "chat-minus": 62646,
            "chat-minus-alt": 62647,
            "chat-lock": 62648,
            "chat-info": 62649,
            "chat-heart": 62650,
            "chat-exclamation": 62651,
            "chat-edit": 62652,
            "chat-dots": 62653,
            "chat-dots-times": 62654,
            "chat-dots-plus": 62655,
            "chat-dots-notification": 62656,
            "chat-dots-minus": 62657,
            "chat-dots-check": 62658,
            "chat-code": 62659,
            "chat-clock": 62660,
            "chat-check": 62661,
            "chat-check-alt": 62662,
            "chat-activity": 62663,
            "chart-trend-up": 62664,
            "chart-trend-down": 62665,
            "chart-pyramid": 62666,
            "chart-pie": 62667,
            "chart-line": 62668,
            "chart-line-up": 62669,
            "chart-line-down": 62670,
            "chart-line-dots": 62671,
            "chart-bar": 62672,
            "chart-bar-vertical": 62673,
            "chart-bar-square": 62674,
            "chart-bar-horizontal": 62675,
            "chart-bar-circle": 62676,
            "chart-bar-alt": 62677,
            "certificate": 62678,
            "castle": 62679,
            "caret-up": 62680,
            "caret-up-square": 62681,
            "caret-up-circle": 62682,
            "caret-right": 62683,
            "caret-right-square": 62684,
            "caret-right-circle": 62685,
            "caret-left": 62686,
            "caret-left-square": 62687,
            "caret-left-circle": 62688,
            "caret-down": 62689,
            "caret-down-square": 62690,
            "caret-down-circle": 62691,
            "camera": 62692,
            "camera-square": 62693,
            "camera-slash": 62694,
            "camera-rotate": 62695,
            "camera-circle": 62696,
            "calendar": 62697,
            "calendar-times": 62698,
            "calendar-times-alt": 62699,
            "calendar-star": 62700,
            "calendar-search": 62701,
            "calendar-plus": 62702,
            "calendar-plus-alt": 62703,
            "calendar-minus": 62704,
            "calendar-minus-alt": 62705,
            "calendar-lock": 62706,
            "calendar-heart": 62707,
            "calendar-empty": 62708,
            "calendar-empty-alt": 62709,
            "calendar-edit": 62710,
            "calendar-clock": 62711,
            "calendar-check": 62712,
            "calendar-check-alt": 62713,
            "calculator": 62714,
            "calculator-simple": 62715,
            "cake": 62716,
            "cabinet-filing": 62717,
            "bus": 62718,
            "buildings": 62719,
            "buildings-alt": 62720,
            "building": 62721,
            "building-tree": 62722,
            "building-coins": 62723,
            "bug": 62724,
            "bug-slash": 62725,
            "brush": 62726,
            "brush-alt": 62727,
            "briefcase": 62728,
            "briefcase-times": 62729,
            "briefcase-plus": 62730,
            "briefcase-money": 62731,
            "briefcase-minus": 62732,
            "briefcase-check": 62733,
            "brain": 62734,
            "boxes": 62735,
            "box": 62736,
            "box-times": 62737,
            "box-search": 62738,
            "box-plus": 62739,
            "box-minus": 62740,
            "box-check": 62741,
            "books": 62742,
            "bookmarks": 62743,
            "bookmarks-user": 62744,
            "bookmarks-times": 62745,
            "bookmarks-star": 62746,
            "bookmarks-settings": 62747,
            "bookmarks-plus": 62748,
            "bookmarks-minus": 62749,
            "bookmarks-heart": 62750,
            "bookmarks-check": 62751,
            "bookmark": 62752,
            "bookmark-user": 62753,
            "bookmark-times": 62754,
            "bookmark-star": 62755,
            "bookmark-settings": 62756,
            "bookmark-plus": 62757,
            "bookmark-minus": 62758,
            "bookmark-heart": 62759,
            "bookmark-check": 62760,
            "book": 62761,
            "book-text": 62762,
            "book-open": 62763,
            "book-open-text": 62764,
            "book-open-reader": 62765,
            "book-open-bookmark": 62766,
            "book-empty": 62767,
            "book-bookmark": 62768,
            "book-alt": 62769,
            "bone": 62770,
            "bone-break": 62771,
            "bolt": 62772,
            "bolt-square": 62773,
            "bolt-square-alt": 62774,
            "bolt-slash": 62775,
            "bolt-slash-alt": 62776,
            "bolt-circle": 62777,
            "bolt-circle-alt": 62778,
            "bolt-alt": 62779,
            "bluetooth": 62780,
            "bitcoin": 62781,
            "bitcoin-square": 62782,
            "bitcoin-circle": 62783,
            "bezier": 62784,
            "bell": 62785,
            "bell-times": 62786,
            "bell-slash": 62787,
            "bell-plus": 62788,
            "bell-on": 62789,
            "bell-notification": 62790,
            "bell-minus": 62791,
            "bell-exclamation": 62792,
            "bed": 62793,
            "battery-half": 62794,
            "battery-full": 62795,
            "battery-empty": 62796,
            "battery-bolt": 62797,
            "bank": 62798,
            "bank-card-line": 62799,
            "bandage": 62800,
            "ban": 62801,
            "badge": 62802,
            "badge-like": 62803,
            "badge-dollar": 62804,
            "badge-discount": 62805,
            "badge-discount-alt": 62806,
            "badge-check": 62807,
            "backward": 62808,
            "backpack": 62809,
            "award": 62810,
            "award-star": 62811,
            "award-check": 62812,
            "atom": 62813,
            "at": 62814,
            "arrows-up-down": 62815,
            "arrows-repeat": 62816,
            "arrows-repeat-square": 62817,
            "arrows-repeat-circle": 62818,
            "arrows-move": 62819,
            "arrows-left-right": 62820,
            "arrows-expand": 62821,
            "arrows-compress": 62822,
            "arrow-up": 62823,
            "arrow-up-to-line": 62824,
            "arrow-up-square": 62825,
            "arrow-up-small": 62826,
            "arrow-up-right": 62827,
            "arrow-up-right-square": 62828,
            "arrow-up-right-small": 62829,
            "arrow-up-right-circle": 62830,
            "arrow-up-left": 62831,
            "arrow-up-left-square": 62832,
            "arrow-up-left-small": 62833,
            "arrow-up-left-circle": 62834,
            "arrow-up-from-line": 62835,
            "arrow-up-circle": 62836,
            "arrow-turn-up-right": 62837,
            "arrow-turn-up-left": 62838,
            "arrow-turn-right-up": 62839,
            "arrow-turn-right-down": 62840,
            "arrow-turn-left-up": 62841,
            "arrow-turn-left-down": 62842,
            "arrow-turn-down-right": 62843,
            "arrow-turn-down-left": 62844,
            "arrow-share": 62845,
            "arrow-right": 62846,
            "arrow-right-to-line": 62847,
            "arrow-right-square": 62848,
            "arrow-right-small": 62849,
            "arrow-right-line": 62850,
            "arrow-right-from-line": 62851,
            "arrow-right-circle": 62852,
            "arrow-reply": 62853,
            "arrow-left": 62854,
            "arrow-left-to-line": 62855,
            "arrow-left-square": 62856,
            "arrow-left-small": 62857,
            "arrow-left-from-line": 62858,
            "arrow-left-circle": 62859,
            "arrow-left-arrow-right": 62860,
            "arrow-left-arrow-right-square": 62861,
            "arrow-left-arrow-right-circle": 62862,
            "arrow-import": 62863,
            "arrow-forward": 62864,
            "arrow-forward-square": 62865,
            "arrow-forward-square-alt": 62866,
            "arrow-forward-circle": 62867,
            "arrow-forward-circle-alt": 62868,
            "arrow-forward-alt": 62869,
            "arrow-export": 62870,
            "arrow-down": 62871,
            "arrow-down-to-line": 62872,
            "arrow-down-square": 62873,
            "arrow-down-small": 62874,
            "arrow-down-right": 62875,
            "arrow-down-right-square": 62876,
            "arrow-down-right-small": 62877,
            "arrow-down-right-circle": 62878,
            "arrow-down-left": 62879,
            "arrow-down-left-square": 62880,
            "arrow-down-left-small": 62881,
            "arrow-down-left-circle": 62882,
            "arrow-down-from-line": 62883,
            "arrow-down-circle": 62884,
            "arrow-down-arrow-up": 62885,
            "arrow-down-arrow-up-square": 62886,
            "arrow-down-arrow-up-circle": 62887,
            "arrow-back": 62888,
            "arrow-back-square": 62889,
            "arrow-back-square-alt": 62890,
            "arrow-back-circle": 62891,
            "arrow-back-circle-alt": 62892,
            "arrow-back-alt": 62893,
            "archway": 62894,
            "archive": 62895,
            "angles-up": 62896,
            "angles-up-small": 62897,
            "angles-right": 62898,
            "angles-right-small": 62899,
            "angles-left": 62900,
            "angles-left-small": 62901,
            "angles-left-right": 62902,
            "angles-down": 62903,
            "angles-down-up": 62904,
            "angles-down-small": 62905,
            "angle-up": 62906,
            "angle-up-square": 62907,
            "angle-up-small": 62908,
            "angle-up-circle": 62909,
            "angle-right": 62910,
            "angle-right-square": 62911,
            "angle-right-small": 62912,
            "angle-right-circle": 62913,
            "angle-left": 62914,
            "angle-left-square": 62915,
            "angle-left-small": 62916,
            "angle-left-circle": 62917,
            "angle-down": 62918,
            "angle-down-square": 62919,
            "angle-down-small": 62920,
            "angle-down-circle": 62921,
            "alarm-times": 62922,
            "alarm-times-alt": 62923,
            "alarm-plus": 62924,
            "alarm-plus-alt": 62925,
            "alarm-minus": 62926,
            "alarm-minus-alt": 62927,
            "alarm-edit": 62928,
            "alarm-clock": 62929,
            "alarm-clock-empty": 62930,
            "alarm-clock-alt": 62931,
            "alarm-check": 62932,
            "alarm-check-alt": 62933,
            "airplay": 62934,
            "airplay-alt": 62935,
            "address-book": 62936,
            "activity-star-square": 62937,
            "activity-star-circle": 62938,
            "activity-square": 62939,
            "activity-notification-square": 62940,
            "activity-notification-circle": 62941,
            "activity-heart-square": 62942,
            "activity-heart-circle": 62943,
            "activity-circle": 62944
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
            "settings-line": 61920,
            "server": 61921,
            "send": 61922,
            "send-right": 61923,
            "search": 61924,
            "search-text": 61925,
            "search-plus": 61926,
            "search-minus": 61927,
            "search-line": 61928,
            "sd-card": 61929,
            "scissors": 61930,
            "school": 61931,
            "scanner": 61932,
            "scan": 61933,
            "scan-qr": 61934,
            "scan-circle": 61935,
            "sack-dollar": 61936,
            "route": 61937,
            "rotate": 61938,
            "rotate-square": 61939,
            "rotate-right": 61940,
            "rotate-right-square": 61941,
            "rotate-right-circle": 61942,
            "rotate-left": 61943,
            "rotate-left-square": 61944,
            "rotate-left-circle": 61945,
            "rotate-circle": 61946,
            "rocket": 61947,
            "rocket-launch": 61948,
            "road": 61949,
            "road-map-line": 61950,
            "restaurant": 61951,
            "repeat": 61952,
            "registered-square": 61953,
            "registered-circle": 61954,
            "receipt": 61955,
            "receipt-text": 61956,
            "receipt-text-alt": 61957,
            "receipt-star": 61958,
            "receipt-star-alt": 61959,
            "receipt-percent": 61960,
            "receipt-percent-alt": 61961,
            "receipt-list": 61962,
            "receipt-list-alt": 61963,
            "receipt-heart": 61964,
            "receipt-heart-alt": 61965,
            "receipt-alt": 61966,
            "ranking": 61967,
            "radio": 61968,
            "radio-button-fill": 61969,
            "radiation": 61970,
            "radiation-circle": 61971,
            "radar": 61972,
            "question-square": 61973,
            "question-circle": 61974,
            "puzzle": 61975,
            "print": 61976,
            "print-slash": 61977,
            "presentation": 61978,
            "presentation-user": 61979,
            "presentation-trend-up": 61980,
            "presentation-trend-down": 61981,
            "presentation-text": 61982,
            "presentation-poll": 61983,
            "presentation-play": 61984,
            "presentation-pen": 61985,
            "presentation-lightbulb": 61986,
            "presentation-dollar": 61987,
            "presentation-chart-pie": 61988,
            "presentation-chart-line": 61989,
            "power-off": 61990,
            "power-off-square": 61991,
            "power-off-circle": 61992,
            "poll-vertical-square": 61993,
            "poll-vertical-circle": 61994,
            "poll-horizontal-square": 61995,
            "poll-horizontal-circle": 61996,
            "plus": 61997,
            "plus-square": 61998,
            "plus-circle": 61999,
            "plug": 62e3,
            "playlist": 62001,
            "play": 62002,
            "play-square": 62003,
            "play-pause": 62004,
            "play-circle": 62005,
            "pills": 62006,
            "phone": 62007,
            "phone-times": 62008,
            "phone-slash": 62009,
            "phone-plus": 62010,
            "phone-outgoing": 62011,
            "phone-office": 62012,
            "phone-missed": 62013,
            "phone-line": 62014,
            "phone-incoming": 62015,
            "phone-hangup": 62016,
            "phone-flip": 62017,
            "phone-call": 62018,
            "phone-2": 62019,
            "phone-1": 62020,
            "percent": 62021,
            "percent-tag": 62022,
            "percent-square": 62023,
            "percent-circle": 62024,
            "pen": 62025,
            "pen-tool": 62026,
            "pen-line": 62027,
            "pause": 62028,
            "pause-circle": 62029,
            "parking-square": 62030,
            "parking-circle": 62031,
            "papers": 62032,
            "papers-text": 62033,
            "paperclip": 62034,
            "palette": 62035,
            "package": 62036,
            "package-star": 62037,
            "package-heart": 62038,
            "package-dollar": 62039,
            "package-check": 62040,
            "octagon": 62041,
            "octagon-times": 62042,
            "octagon-plus": 62043,
            "octagon-minus": 62044,
            "octagon-exclamation": 62045,
            "octagon-check": 62046,
            "nut": 62047,
            "notification-line": 62048,
            "notebook": 62049,
            "note": 62050,
            "note-text": 62051,
            "note-text-square": 62052,
            "note-list": 62053,
            "note-list-square": 62054,
            "note-list-check": 62055,
            "note-list-check-square": 62056,
            "newspaper": 62057,
            "music": 62058,
            "music-note": 62059,
            "music-list": 62060,
            "mug": 62061,
            "mug-hot": 62062,
            "mouse": 62063,
            "mosque": 62064,
            "mortar-pestle": 62065,
            "more-vertical": 62066,
            "more-vertical-square": 62067,
            "more-vertical-circle": 62068,
            "more-horizontal": 62069,
            "more-horizontal-square": 62070,
            "more-horizontal-circle": 62071,
            "moon": 62072,
            "monitor-waveform": 62073,
            "money-withdrawal": 62074,
            "money-convert": 62075,
            "money-bills": 62076,
            "money-bill": 62077,
            "money-bill-times": 62078,
            "money-bill-send": 62079,
            "money-bill-receive": 62080,
            "money-bill-plus": 62081,
            "money-bill-minus": 62082,
            "money-bill-convert": 62083,
            "money-bill-clock": 62084,
            "money-bill-check": 62085,
            "money-bill-ban": 62086,
            "mobile": 62087,
            "minus": 62088,
            "minus-square": 62089,
            "minus-circle": 62090,
            "minimize": 62091,
            "microscope": 62092,
            "microphone": 62093,
            "microphone-stand": 62094,
            "microphone-slash": 62095,
            "messages": 62096,
            "messages-text": 62097,
            "messages-dots": 62098,
            "message": 62099,
            "message-times": 62100,
            "message-times-alt": 62101,
            "message-text": 62102,
            "message-text-times": 62103,
            "message-text-plus": 62104,
            "message-text-notification": 62105,
            "message-text-minus": 62106,
            "message-text-check": 62107,
            "message-star": 62108,
            "message-shield": 62109,
            "message-settings": 62110,
            "message-search": 62111,
            "message-question": 62112,
            "message-plus": 62113,
            "message-plus-alt": 62114,
            "message-notification": 62115,
            "message-minus": 62116,
            "message-minus-alt": 62117,
            "message-lock": 62118,
            "message-info": 62119,
            "message-heart": 62120,
            "message-exclamation": 62121,
            "message-edit": 62122,
            "message-dots": 62123,
            "message-dots-times": 62124,
            "message-dots-plus": 62125,
            "message-dots-notification": 62126,
            "message-dots-minus": 62127,
            "message-dots-check": 62128,
            "message-code": 62129,
            "message-clock": 62130,
            "message-check": 62131,
            "message-check-alt": 62132,
            "message-activity": 62133,
            "menu": 62134,
            "menu-square": 62135,
            "menu-square-alt": 62136,
            "menu-search": 62137,
            "menu-right": 62138,
            "menu-right-square": 62139,
            "menu-right-square-alt": 62140,
            "menu-right-circle": 62141,
            "menu-right-circle-alt": 62142,
            "menu-right-alt": 62143,
            "menu-line": 62144,
            "menu-left": 62145,
            "menu-left-square": 62146,
            "menu-left-square-alt": 62147,
            "menu-left-circle": 62148,
            "menu-left-circle-alt": 62149,
            "menu-left-alt": 62150,
            "menu-duo": 62151,
            "menu-duo-square": 62152,
            "menu-duo-circle": 62153,
            "menu-circle": 62154,
            "menu-circle-alt": 62155,
            "menu-alt": 62156,
            "megaphone": 62157,
            "medal": 62158,
            "medal-star": 62159,
            "medal-check": 62160,
            "maximize": 62161,
            "mask-face": 62162,
            "map": 62163,
            "map-pin": 62164,
            "map-pin-line": 62165,
            "map-location": 62166,
            "magnet": 62167,
            "log-out": 62168,
            "log-in": 62169,
            "lock": 62170,
            "lock-viewfinder": 62171,
            "location-pin": 62172,
            "location-pin-times": 62173,
            "location-pin-star": 62174,
            "location-pin-slash": 62175,
            "location-pin-slash-alt": 62176,
            "location-pin-search": 62177,
            "location-pin-question": 62178,
            "location-pin-plus": 62179,
            "location-pin-minus": 62180,
            "location-pin-lock": 62181,
            "location-pin-heart": 62182,
            "location-pin-eye": 62183,
            "location-pin-exclamation": 62184,
            "location-pin-edit": 62185,
            "location-pin-check": 62186,
            "location-pin-alt": 62187,
            "location-crosshairs": 62188,
            "location-crosshairs-slash": 62189,
            "location-arrow": 62190,
            "location-arrow-square": 62191,
            "location-arrow-circle": 62192,
            "list": 62193,
            "link": 62194,
            "link-horizontal": 62195,
            "link-horizontal-alt": 62196,
            "link-broken": 62197,
            "link-broken-horizontal": 62198,
            "link-alt": 62199,
            "line-up-square": 62200,
            "line-up-circle": 62201,
            "line-down-square": 62202,
            "line-down-circle": 62203,
            "line-chart-dots": 62204,
            "line-chart-dots-square": 62205,
            "line-chart-dots-circle": 62206,
            "like": 62207,
            "like-tag": 62208,
            "like-square": 62209,
            "like-circle": 62210,
            "lightbulb": 62211,
            "light-emergency": 62212,
            "light-emergency-on": 62213,
            "life-ring": 62214,
            "leaf": 62215,
            "layout-web-9": 62216,
            "layout-web-8": 62217,
            "layout-web-7": 62218,
            "layout-web-6": 62219,
            "layout-web-5": 62220,
            "layout-web-4": 62221,
            "layout-web-3": 62222,
            "layout-web-2": 62223,
            "layout-web-12": 62224,
            "layout-web-11": 62225,
            "layout-web-10": 62226,
            "layout-web-1": 62227,
            "layer-group": 62228,
            "laptop": 62229,
            "laptop-code": 62230,
            "keypad": 62231,
            "keyhole-square": 62232,
            "keyhole-circle": 62233,
            "keyboard": 62234,
            "key": 62235,
            "key-square": 62236,
            "key-circle": 62237,
            "kaaba": 62238,
            "invoice": 62239,
            "info-square": 62240,
            "info-circle": 62241,
            "inbox": 62242,
            "inbox-upload": 62243,
            "inbox-empty": 62244,
            "inbox-download": 62245,
            "image": 62246,
            "image-upload": 62247,
            "image-times": 62248,
            "image-plus": 62249,
            "image-minus": 62250,
            "image-gallery": 62251,
            "image-gallery-plus": 62252,
            "image-download": 62253,
            "image-check": 62254,
            "id-card": 62255,
            "id-badge": 62256,
            "hourglass": 62257,
            "hospital": 62258,
            "hospital-h-sign-square": 62259,
            "hospital-h-sign-circle": 62260,
            "home": 62261,
            "home-wifi": 62262,
            "home-user": 62263,
            "home-trend-up": 62264,
            "home-trend-down": 62265,
            "home-star": 62266,
            "home-shield": 62267,
            "home-search": 62268,
            "home-roof": 62269,
            "home-roof-wifi": 62270,
            "home-roof-user": 62271,
            "home-roof-trend-up": 62272,
            "home-roof-trend-down": 62273,
            "home-roof-star": 62274,
            "home-roof-shield": 62275,
            "home-roof-search": 62276,
            "home-roof-lock": 62277,
            "home-roof-heart": 62278,
            "home-roof-dollar": 62279,
            "home-roof-activity": 62280,
            "home-lock": 62281,
            "home-line": 62282,
            "home-heart": 62283,
            "home-dollar": 62284,
            "home-dash": 62285,
            "home-dash-wifi": 62286,
            "home-dash-user": 62287,
            "home-dash-trend-up": 62288,
            "home-dash-trend-down": 62289,
            "home-dash-star": 62290,
            "home-dash-shield": 62291,
            "home-dash-search": 62292,
            "home-dash-lock": 62293,
            "home-dash-heart": 62294,
            "home-dash-dollar": 62295,
            "home-dash-activity": 62296,
            "home-activity": 62297,
            "history-line": 62298,
            "heart": 62299,
            "heart-times": 62300,
            "heart-tag": 62301,
            "heart-square": 62302,
            "heart-slash": 62303,
            "heart-pulse": 62304,
            "heart-plus": 62305,
            "heart-minus": 62306,
            "heart-line": 62307,
            "heart-circle": 62308,
            "heart-check": 62309,
            "headphones": 62310,
            "hashtag": 62311,
            "hard-drive": 62312,
            "hand-holding-user": 62313,
            "hand-holding-dollar": 62314,
            "hand-holding-dollar-circle": 62315,
            "grid-web-7": 62316,
            "grid-web-6": 62317,
            "grid-web-5": 62318,
            "grid-web-4": 62319,
            "grid-web-3": 62320,
            "grid-web-2": 62321,
            "grid-web-1": 62322,
            "grid-square": 62323,
            "grid-square-plus": 62324,
            "grid-square-circle": 62325,
            "grid-dividers": 62326,
            "grid-circle": 62327,
            "grid-2": 62328,
            "grid-1": 62329,
            "graduation-cap": 62330,
            "globe": 62331,
            "globe-stand": 62332,
            "globe-line": 62333,
            "globe-earth": 62334,
            "glasses": 62335,
            "gift": 62336,
            "gift-line": 62337,
            "game-controller": 62338,
            "forward": 62339,
            "food-tray": 62340,
            "folder": 62341,
            "folder-user": 62342,
            "folder-upload": 62343,
            "folder-times": 62344,
            "folder-star": 62345,
            "folder-shield": 62346,
            "folder-settings": 62347,
            "folder-search": 62348,
            "folder-plus": 62349,
            "folder-open": 62350,
            "folder-music": 62351,
            "folder-minus": 62352,
            "folder-lock": 62353,
            "folder-import": 62354,
            "folder-heart": 62355,
            "folder-export": 62356,
            "folder-edit": 62357,
            "folder-download": 62358,
            "folder-connection": 62359,
            "folder-code": 62360,
            "folder-clock": 62361,
            "folder-check": 62362,
            "folder-ban": 62363,
            "folder-alt": 62364,
            "floppy-disk": 62365,
            "flask": 62366,
            "flask-round": 62367,
            "flashlight": 62368,
            "flashlight-fill": 62369,
            "flag": 62370,
            "flag-triangle": 62371,
            "fire": 62372,
            "fingerprint": 62373,
            "fingerprint-viewfinder": 62374,
            "filter": 62375,
            "filter-times": 62376,
            "filter-plus": 62377,
            "filter-minus": 62378,
            "filter-check": 62379,
            "film": 62380,
            "file": 62381,
            "file-user": 62382,
            "file-upload": 62383,
            "file-times": 62384,
            "file-text": 62385,
            "file-text-times": 62386,
            "file-text-star": 62387,
            "file-text-shield": 62388,
            "file-text-search": 62389,
            "file-text-plus": 62390,
            "file-text-minus": 62391,
            "file-text-lock": 62392,
            "file-text-heart": 62393,
            "file-text-edit": 62394,
            "file-text-check": 62395,
            "file-text-ban": 62396,
            "file-star": 62397,
            "file-shield": 62398,
            "file-settings": 62399,
            "file-search": 62400,
            "file-plus": 62401,
            "file-music": 62402,
            "file-minus": 62403,
            "file-lock": 62404,
            "file-list": 62405,
            "file-list-times": 62406,
            "file-list-star": 62407,
            "file-list-shield": 62408,
            "file-list-search": 62409,
            "file-list-plus": 62410,
            "file-list-minus": 62411,
            "file-list-lock": 62412,
            "file-list-heart": 62413,
            "file-list-edit": 62414,
            "file-list-check": 62415,
            "file-list-ban": 62416,
            "file-list-3-line": 62417,
            "file-import": 62418,
            "file-import-alt": 62419,
            "file-heart": 62420,
            "file-export": 62421,
            "file-export-alt": 62422,
            "file-edit": 62423,
            "file-download": 62424,
            "file-copy": 62425,
            "file-code": 62426,
            "file-clock": 62427,
            "file-check": 62428,
            "file-ban": 62429,
            "fast-forward": 62430,
            "fast-backward": 62431,
            "eye": 62432,
            "eye-slash": 62433,
            "eye-closed": 62434,
            "expand": 62435,
            "exclamation-square": 62436,
            "exclamation-circle": 62437,
            "exchange-vertical": 62438,
            "exchange-vertical-square": 62439,
            "exchange-vertical-circle": 62440,
            "exchange-horizontal": 62441,
            "exchange-horizontal-square": 62442,
            "exchange-horizontal-circle": 62443,
            "euro": 62444,
            "euro-square": 62445,
            "euro-circle": 62446,
            "ethereum": 62447,
            "ethereum-square": 62448,
            "ethereum-circle": 62449,
            "envelopes": 62450,
            "envelope": 62451,
            "envelope-times": 62452,
            "envelope-star": 62453,
            "envelope-shield": 62454,
            "envelope-settings": 62455,
            "envelope-search": 62456,
            "envelope-plus": 62457,
            "envelope-open": 62458,
            "envelope-notification": 62459,
            "envelope-minus": 62460,
            "envelope-lock": 62461,
            "envelope-heart": 62462,
            "envelope-eye": 62463,
            "envelope-edit": 62464,
            "envelope-clock": 62465,
            "envelope-check": 62466,
            "envelope-ban": 62467,
            "eject": 62468,
            "edit": 62469,
            "droplet": 62470,
            "droplet-slash": 62471,
            "drag-vertical": 62472,
            "drag-lines-vertical": 62473,
            "drag-lines-horizontal": 62474,
            "drag-horizontal": 62475,
            "download": 62476,
            "download-alt": 62477,
            "door-open": 62478,
            "door-closed": 62479,
            "dollar": 62480,
            "dollar-square": 62481,
            "dollar-send-square": 62482,
            "dollar-send-circle": 62483,
            "dollar-receive-square": 62484,
            "dollar-receive-circle": 62485,
            "dollar-circle": 62486,
            "document": 62487,
            "document-list": 62488,
            "document-list-check": 62489,
            "dna": 62490,
            "dislike": 62491,
            "dislike-tag": 62492,
            "dislike-square": 62493,
            "dislike-circle": 62494,
            "discount-percent-fill": 62495,
            "disc": 62496,
            "diamond": 62497,
            "diamond-exclamation": 62498,
            "desktop": 62499,
            "desktop-mobile": 62500,
            "desktop-code": 62501,
            "delivery-cart": 62502,
            "delivery-cart-arrow-up": 62503,
            "delivery-cart-arrow-down": 62504,
            "delete-right": 62505,
            "delete-left": 62506,
            "database": 62507,
            "customer-service-line": 62508,
            "cursor": 62509,
            "cursor-click": 62510,
            "crown": 62511,
            "crown-alt": 62512,
            "credit-card": 62513,
            "credit-card-times": 62514,
            "credit-card-slash": 62515,
            "credit-card-plus": 62516,
            "credit-card-minus": 62517,
            "credit-card-edit": 62518,
            "credit-card-convert": 62519,
            "credit-card-check": 62520,
            "credit-card-change": 62521,
            "credit-card-ban": 62522,
            "cpu": 62523,
            "coupon": 62524,
            "coupon-star": 62525,
            "coupon-percent": 62526,
            "coupon-heart": 62527,
            "copyright-square": 62528,
            "copyright-circle": 62529,
            "copy": 62530,
            "copy-plus": 62531,
            "copy-check": 62532,
            "copy-alt": 62533,
            "contrast": 62534,
            "compress": 62535,
            "compass": 62536,
            "compass-needle": 62537,
            "comments": 62538,
            "comments-text": 62539,
            "comments-dots": 62540,
            "comment": 62541,
            "comment-times": 62542,
            "comment-times-alt": 62543,
            "comment-text": 62544,
            "comment-text-times": 62545,
            "comment-text-plus": 62546,
            "comment-text-notification": 62547,
            "comment-text-minus": 62548,
            "comment-text-check": 62549,
            "comment-star": 62550,
            "comment-shield": 62551,
            "comment-settings": 62552,
            "comment-search": 62553,
            "comment-question": 62554,
            "comment-plus": 62555,
            "comment-plus-alt": 62556,
            "comment-notification": 62557,
            "comment-minus": 62558,
            "comment-minus-alt": 62559,
            "comment-lock": 62560,
            "comment-info": 62561,
            "comment-heart": 62562,
            "comment-exclamation": 62563,
            "comment-edit": 62564,
            "comment-dots": 62565,
            "comment-dots-times": 62566,
            "comment-dots-plus": 62567,
            "comment-dots-notification": 62568,
            "comment-dots-minus": 62569,
            "comment-dots-check": 62570,
            "comment-code": 62571,
            "comment-clock": 62572,
            "comment-check": 62573,
            "comment-check-alt": 62574,
            "comment-activity": 62575,
            "coins": 62576,
            "coin": 62577,
            "coin-convert": 62578,
            "coin-card-transfer": 62579,
            "code": 62580,
            "code-square": 62581,
            "code-circle": 62582,
            "cloud": 62583,
            "cloud-upload": 62584,
            "cloud-times": 62585,
            "cloud-slash": 62586,
            "cloud-shield": 62587,
            "cloud-share": 62588,
            "cloud-plus": 62589,
            "cloud-minus": 62590,
            "cloud-lock": 62591,
            "cloud-download": 62592,
            "cloud-connection": 62593,
            "cloud-check": 62594,
            "closed-captioning": 62595,
            "clock": 62596,
            "clock-square": 62597,
            "clock-square-alt": 62598,
            "clock-alt": 62599,
            "clipboard": 62600,
            "clipboard-times": 62601,
            "clipboard-text": 62602,
            "clipboard-star": 62603,
            "clipboard-search": 62604,
            "clipboard-plus": 62605,
            "clipboard-minus": 62606,
            "clipboard-list": 62607,
            "clipboard-list-check": 62608,
            "clipboard-heart": 62609,
            "clipboard-edit": 62610,
            "clipboard-check": 62611,
            "chromecast": 62612,
            "chevron-up": 62613,
            "chevron-right": 62614,
            "chevron-left": 62615,
            "chevron-down": 62616,
            "chevron-big-up": 62617,
            "chevron-big-right": 62618,
            "chevron-big-left": 62619,
            "chevron-big-down": 62620,
            "checkbox-square-fill": 62621,
            "check": 62622,
            "check-square": 62623,
            "check-double": 62624,
            "check-circle": 62625,
            "chats": 62626,
            "chats-text": 62627,
            "chats-dots": 62628,
            "chat": 62629,
            "chat-times": 62630,
            "chat-times-alt": 62631,
            "chat-text": 62632,
            "chat-text-times": 62633,
            "chat-text-plus": 62634,
            "chat-text-notification": 62635,
            "chat-text-minus": 62636,
            "chat-text-check": 62637,
            "chat-star": 62638,
            "chat-shield": 62639,
            "chat-settings": 62640,
            "chat-search": 62641,
            "chat-question": 62642,
            "chat-plus": 62643,
            "chat-plus-alt": 62644,
            "chat-notification": 62645,
            "chat-minus": 62646,
            "chat-minus-alt": 62647,
            "chat-lock": 62648,
            "chat-info": 62649,
            "chat-heart": 62650,
            "chat-exclamation": 62651,
            "chat-edit": 62652,
            "chat-dots": 62653,
            "chat-dots-times": 62654,
            "chat-dots-plus": 62655,
            "chat-dots-notification": 62656,
            "chat-dots-minus": 62657,
            "chat-dots-check": 62658,
            "chat-code": 62659,
            "chat-clock": 62660,
            "chat-check": 62661,
            "chat-check-alt": 62662,
            "chat-activity": 62663,
            "chart-trend-up": 62664,
            "chart-trend-down": 62665,
            "chart-pyramid": 62666,
            "chart-pie": 62667,
            "chart-line": 62668,
            "chart-line-up": 62669,
            "chart-line-down": 62670,
            "chart-line-dots": 62671,
            "chart-bar": 62672,
            "chart-bar-vertical": 62673,
            "chart-bar-square": 62674,
            "chart-bar-horizontal": 62675,
            "chart-bar-circle": 62676,
            "chart-bar-alt": 62677,
            "certificate": 62678,
            "castle": 62679,
            "caret-up": 62680,
            "caret-up-square": 62681,
            "caret-up-circle": 62682,
            "caret-right": 62683,
            "caret-right-square": 62684,
            "caret-right-circle": 62685,
            "caret-left": 62686,
            "caret-left-square": 62687,
            "caret-left-circle": 62688,
            "caret-down": 62689,
            "caret-down-square": 62690,
            "caret-down-circle": 62691,
            "camera": 62692,
            "camera-square": 62693,
            "camera-slash": 62694,
            "camera-rotate": 62695,
            "camera-circle": 62696,
            "calendar": 62697,
            "calendar-times": 62698,
            "calendar-times-alt": 62699,
            "calendar-star": 62700,
            "calendar-search": 62701,
            "calendar-plus": 62702,
            "calendar-plus-alt": 62703,
            "calendar-minus": 62704,
            "calendar-minus-alt": 62705,
            "calendar-lock": 62706,
            "calendar-heart": 62707,
            "calendar-empty": 62708,
            "calendar-empty-alt": 62709,
            "calendar-edit": 62710,
            "calendar-clock": 62711,
            "calendar-check": 62712,
            "calendar-check-alt": 62713,
            "calculator": 62714,
            "calculator-simple": 62715,
            "cake": 62716,
            "cabinet-filing": 62717,
            "bus": 62718,
            "buildings": 62719,
            "buildings-alt": 62720,
            "building": 62721,
            "building-tree": 62722,
            "building-coins": 62723,
            "bug": 62724,
            "bug-slash": 62725,
            "brush": 62726,
            "brush-alt": 62727,
            "briefcase": 62728,
            "briefcase-times": 62729,
            "briefcase-plus": 62730,
            "briefcase-money": 62731,
            "briefcase-minus": 62732,
            "briefcase-check": 62733,
            "brain": 62734,
            "boxes": 62735,
            "box": 62736,
            "box-times": 62737,
            "box-search": 62738,
            "box-plus": 62739,
            "box-minus": 62740,
            "box-check": 62741,
            "books": 62742,
            "bookmarks": 62743,
            "bookmarks-user": 62744,
            "bookmarks-times": 62745,
            "bookmarks-star": 62746,
            "bookmarks-settings": 62747,
            "bookmarks-plus": 62748,
            "bookmarks-minus": 62749,
            "bookmarks-heart": 62750,
            "bookmarks-check": 62751,
            "bookmark": 62752,
            "bookmark-user": 62753,
            "bookmark-times": 62754,
            "bookmark-star": 62755,
            "bookmark-settings": 62756,
            "bookmark-plus": 62757,
            "bookmark-minus": 62758,
            "bookmark-heart": 62759,
            "bookmark-check": 62760,
            "book": 62761,
            "book-text": 62762,
            "book-open": 62763,
            "book-open-text": 62764,
            "book-open-reader": 62765,
            "book-open-bookmark": 62766,
            "book-empty": 62767,
            "book-bookmark": 62768,
            "book-alt": 62769,
            "bone": 62770,
            "bone-break": 62771,
            "bolt": 62772,
            "bolt-square": 62773,
            "bolt-square-alt": 62774,
            "bolt-slash": 62775,
            "bolt-slash-alt": 62776,
            "bolt-circle": 62777,
            "bolt-circle-alt": 62778,
            "bolt-alt": 62779,
            "bluetooth": 62780,
            "bitcoin": 62781,
            "bitcoin-square": 62782,
            "bitcoin-circle": 62783,
            "bezier": 62784,
            "bell": 62785,
            "bell-times": 62786,
            "bell-slash": 62787,
            "bell-plus": 62788,
            "bell-on": 62789,
            "bell-notification": 62790,
            "bell-minus": 62791,
            "bell-exclamation": 62792,
            "bed": 62793,
            "battery-half": 62794,
            "battery-full": 62795,
            "battery-empty": 62796,
            "battery-bolt": 62797,
            "bank": 62798,
            "bank-card-line": 62799,
            "bandage": 62800,
            "ban": 62801,
            "badge": 62802,
            "badge-like": 62803,
            "badge-dollar": 62804,
            "badge-discount": 62805,
            "badge-discount-alt": 62806,
            "badge-check": 62807,
            "backward": 62808,
            "backpack": 62809,
            "award": 62810,
            "award-star": 62811,
            "award-check": 62812,
            "atom": 62813,
            "at": 62814,
            "arrows-up-down": 62815,
            "arrows-repeat": 62816,
            "arrows-repeat-square": 62817,
            "arrows-repeat-circle": 62818,
            "arrows-move": 62819,
            "arrows-left-right": 62820,
            "arrows-expand": 62821,
            "arrows-compress": 62822,
            "arrow-up": 62823,
            "arrow-up-to-line": 62824,
            "arrow-up-square": 62825,
            "arrow-up-small": 62826,
            "arrow-up-right": 62827,
            "arrow-up-right-square": 62828,
            "arrow-up-right-small": 62829,
            "arrow-up-right-circle": 62830,
            "arrow-up-left": 62831,
            "arrow-up-left-square": 62832,
            "arrow-up-left-small": 62833,
            "arrow-up-left-circle": 62834,
            "arrow-up-from-line": 62835,
            "arrow-up-circle": 62836,
            "arrow-turn-up-right": 62837,
            "arrow-turn-up-left": 62838,
            "arrow-turn-right-up": 62839,
            "arrow-turn-right-down": 62840,
            "arrow-turn-left-up": 62841,
            "arrow-turn-left-down": 62842,
            "arrow-turn-down-right": 62843,
            "arrow-turn-down-left": 62844,
            "arrow-share": 62845,
            "arrow-right": 62846,
            "arrow-right-to-line": 62847,
            "arrow-right-square": 62848,
            "arrow-right-small": 62849,
            "arrow-right-line": 62850,
            "arrow-right-from-line": 62851,
            "arrow-right-circle": 62852,
            "arrow-reply": 62853,
            "arrow-left": 62854,
            "arrow-left-to-line": 62855,
            "arrow-left-square": 62856,
            "arrow-left-small": 62857,
            "arrow-left-from-line": 62858,
            "arrow-left-circle": 62859,
            "arrow-left-arrow-right": 62860,
            "arrow-left-arrow-right-square": 62861,
            "arrow-left-arrow-right-circle": 62862,
            "arrow-import": 62863,
            "arrow-forward": 62864,
            "arrow-forward-square": 62865,
            "arrow-forward-square-alt": 62866,
            "arrow-forward-circle": 62867,
            "arrow-forward-circle-alt": 62868,
            "arrow-forward-alt": 62869,
            "arrow-export": 62870,
            "arrow-down": 62871,
            "arrow-down-to-line": 62872,
            "arrow-down-square": 62873,
            "arrow-down-small": 62874,
            "arrow-down-right": 62875,
            "arrow-down-right-square": 62876,
            "arrow-down-right-small": 62877,
            "arrow-down-right-circle": 62878,
            "arrow-down-left": 62879,
            "arrow-down-left-square": 62880,
            "arrow-down-left-small": 62881,
            "arrow-down-left-circle": 62882,
            "arrow-down-from-line": 62883,
            "arrow-down-circle": 62884,
            "arrow-down-arrow-up": 62885,
            "arrow-down-arrow-up-square": 62886,
            "arrow-down-arrow-up-circle": 62887,
            "arrow-back": 62888,
            "arrow-back-square": 62889,
            "arrow-back-square-alt": 62890,
            "arrow-back-circle": 62891,
            "arrow-back-circle-alt": 62892,
            "arrow-back-alt": 62893,
            "archway": 62894,
            "archive": 62895,
            "angles-up": 62896,
            "angles-up-small": 62897,
            "angles-right": 62898,
            "angles-right-small": 62899,
            "angles-left": 62900,
            "angles-left-small": 62901,
            "angles-left-right": 62902,
            "angles-down": 62903,
            "angles-down-up": 62904,
            "angles-down-small": 62905,
            "angle-up": 62906,
            "angle-up-square": 62907,
            "angle-up-small": 62908,
            "angle-up-circle": 62909,
            "angle-right": 62910,
            "angle-right-square": 62911,
            "angle-right-small": 62912,
            "angle-right-circle": 62913,
            "angle-left": 62914,
            "angle-left-square": 62915,
            "angle-left-small": 62916,
            "angle-left-circle": 62917,
            "angle-down": 62918,
            "angle-down-square": 62919,
            "angle-down-small": 62920,
            "angle-down-circle": 62921,
            "alarm-times": 62922,
            "alarm-times-alt": 62923,
            "alarm-plus": 62924,
            "alarm-plus-alt": 62925,
            "alarm-minus": 62926,
            "alarm-minus-alt": 62927,
            "alarm-edit": 62928,
            "alarm-clock": 62929,
            "alarm-clock-empty": 62930,
            "alarm-clock-alt": 62931,
            "alarm-check": 62932,
            "alarm-check-alt": 62933,
            "airplay": 62934,
            "airplay-alt": 62935,
            "address-book": 62936,
            "activity-star-square": 62937,
            "activity-star-circle": 62938,
            "activity-square": 62939,
            "activity-notification-square": 62940,
            "activity-notification-circle": 62941,
            "activity-heart-square": 62942,
            "activity-heart-circle": 62943,
            "activity-circle": 62944
        }
    };
    var codepoints_default = codePoints;
    // magicoon_react/get-string.ts
    var getValue = function(variant, icon) {
        var codePoint = codepoints_default[variant][icon];
        if (codePoint === void 0 || codePoint === null || isNaN(codePoint)) return "";
        return String.fromCodePoint(codePoint);
    };
    // magicoon_react/context.ts
    var import_react = __toESM(require_react(), 1);
    var MagicoonContext = (0, import_react.createContext)({});
    // magicoon_react/Magicoon.tsx
    var MagicoonComponent = function(param) {
        var css = param.css, propVariant = param.variant, propFilled = param.filled, icon = param.icon, className = param.className;
        var contextProps = (0, import_react2.useContext)(MagicoonContext);
        var _ref, _ref1;
        var variant = (_ref1 = propVariant !== null && propVariant !== void 0 ? propVariant : contextProps.variant) !== null && _ref1 !== void 0 ? _ref1 : ((_ref = propFilled !== null && propFilled !== void 0 ? propFilled : contextProps.filled) !== null && _ref !== void 0 ? _ref : false) ? "filled" : "regular";
        var value = getValue(variant, icon);
        var _contextProps_className;
        return /* @__PURE__ */ import_react2.default.createElement("span", {
            style: css,
            "data-stora-icon": true,
            "data-magicoon": true,
            "aria-hidden": "true",
            "data-magicoon-variant": variant,
            className: [
                className !== null && className !== void 0 ? className : "",
                (_contextProps_className = contextProps.className) !== null && _contextProps_className !== void 0 ? _contextProps_className : ""
            ].join(" ")
        }, value);
    };
    var Magicoon = Object.assign(MagicoonComponent, {
        Context: MagicoonContext,
        displayName: "Magicoon"
    });
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
