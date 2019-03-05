import * as d3 from 'd3';
import { selection } from 'd3';
import merge from 'lodash/merge';
import { feature } from 'topojson';

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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
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
  }

  return _assertThisInitialized(self);
}

selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}; // ... and the important addition. ⬇️⬇️⬇️

/**
 * appendSelect either selects a matching child element of your current
 * selection if one exists or appends that child and selects it. It's useful
 * for writing idempotent chart functions.
 *
 * Use it like this:
 *
 * selection.appendSelect(<element selector>, <class string>)
 *
 * It can be chained like any normal d3 selection:
 *
 * const g = d3.select(myNode).appendSelect('g', 'viz-group');
 * g.appendSelect('rect')
 *   .attr('x', 0); etc.
 *
 * @param  {string} el  String representation of element to be appended/selected.
 * @param  {string} cls Class string (w/out dots) of element to be appended/
 *                      selected. Can pass none or multiple separated by whitespace.
 * @return {object}     d3 selection of child element
 */


selection.prototype.appendSelect = function (el, cls) {
  var selected = cls ? this.select("".concat(el, ".").concat(cls.split(' ').join('.'))) : this.select(el);

  if (selected.empty()) {
    return cls ? this.append(el).classed(cls, true) : this.append(el);
  }

  return selected;
};

var ChartError =
/*#__PURE__*/
function (_Error) {
  _inherits(ChartError, _Error);

  function ChartError() {
    var _this;

    var constructorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Chart component';

    _classCallCheck(this, ChartError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartError).call(this, constructorName));
    _this.constructorName = constructorName;
    _this.name = 'ChartComponentError';
    return _this;
  }

  return ChartError;
}(_wrapNativeSuper(Error));
var ErrorDrawMethodUndefined =
/*#__PURE__*/
function (_ChartError) {
  _inherits(ErrorDrawMethodUndefined, _ChartError);

  function ErrorDrawMethodUndefined() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, ErrorDrawMethodUndefined);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorDrawMethodUndefined)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "message", "".concat(_this2.constructorName, " should have a draw method"));

    return _this2;
  }

  return ErrorDrawMethodUndefined;
}(ChartError);
var ErrorSelectorType =
/*#__PURE__*/
function (_ChartError2) {
  _inherits(ErrorSelectorType, _ChartError2);

  function ErrorSelectorType() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, ErrorSelectorType);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ErrorSelectorType)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "message", "".concat(_this3.constructorName, " selector should be a DOM Element or selector string"));

    return _this3;
  }

  return ErrorSelectorType;
}(ChartError);
var ErrorPropsType =
/*#__PURE__*/
function (_ChartError3) {
  _inherits(ErrorPropsType, _ChartError3);

  function ErrorPropsType() {
    var _getPrototypeOf4;

    var _this4;

    _classCallCheck(this, ErrorPropsType);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(ErrorPropsType)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this4), "message", "".concat(_this4.constructorName, " props should be an Object"));

    return _this4;
  }

  return ErrorPropsType;
}(ChartError);
var ErrorDataType =
/*#__PURE__*/
function (_ChartError4) {
  _inherits(ErrorDataType, _ChartError4);

  function ErrorDataType() {
    var _getPrototypeOf5;

    var _this5;

    _classCallCheck(this, ErrorDataType);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(ErrorDataType)).call.apply(_getPrototypeOf5, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this5), "message", "".concat(_this5.constructorName, " data should be an Array"));

    return _this5;
  }

  return ErrorDataType;
}(ChartError);

var ChartComponent =
/*#__PURE__*/
function () {
  function ChartComponent(selector, props, data) {
    _classCallCheck(this, ChartComponent);

    _defineProperty(this, "defaultProps", {});

    _defineProperty(this, "defaultData", []);

    this.selection(selector);
    this.props(props);
    this.data(data);
  }
  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */


  _createClass(ChartComponent, [{
    key: "selection",
    value: function selection$$1(selector) {
      if (!selector) return this._selection;

      if (!(selector instanceof Element) && typeof selector !== 'string') {
        throw new ErrorSelectorType(this.constructor.name);
      }

      this._selection = d3.select(selector);
      return this;
    }
    /**
     * Default props
     * @type {Object}
     */

  }, {
    key: "props",

    /**
     * Getter/setter for props object
     * @param  {Object} obj props
     */
    value: function props(obj) {
      if (!obj) return this._props || this.defaultProps;

      if (!(obj instanceof Object)) {
        throw new ErrorPropsType(this.constructor.name);
      }

      this._props = merge(this._props || this.defaultProps, obj);
      return this;
    }
    /**
     * Default data
     * @type {Array}
     */

  }, {
    key: "data",

    /**
     * Getter/setter for chart data
     * @param  {Array} arr data
     */
    value: function data(arr) {
      if (!arr) return this._data || this.defaultData;

      if (!(arr instanceof Array)) {
        throw new ErrorDataType(this.constructor.name);
      }

      this._data = arr;
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      throw new ErrorDrawMethodUndefined(this.constructor.name);
    }
  }]);

  return ChartComponent;
}();

var type = "Topology";
var transform = {
	scale: [
		0.004671304679801704,
		0.0029693131255879085
	],
	translate: [
		-176.9217774217422,
		18.9221910490049
	]
};
var objects = {
	us_states: {
		type: "GeometryCollection",
		geometries: [
			{
				arcs: [
					[
						[
							0,
							1,
							2,
							3
						]
					],
					[
						[
							4,
							-2
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "ME",
					NAME: "Maine"
				}
			},
			{
				arcs: [
					[
						[
							5
						]
					],
					[
						[
							6,
							7,
							8,
							9,
							10,
							11,
							12,
							13
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "MA",
					NAME: "Massachusetts"
				}
			},
			{
				arcs: [
					[
						[
							14
						]
					],
					[
						[
							15,
							16,
							17,
							18
						]
					],
					[
						[
							19,
							20,
							21
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "MI",
					NAME: "Michigan"
				}
			},
			{
				arcs: [
					[
						22,
						23,
						24,
						25,
						26
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "MT",
					NAME: "Montana"
				}
			},
			{
				arcs: [
					[
						27,
						28,
						29,
						30,
						31
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "NV",
					NAME: "Nevada"
				}
			},
			{
				arcs: [
					[
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "NJ",
					NAME: "New Jersey"
				}
			},
			{
				arcs: [
					[
						[
							40,
							41,
							-35,
							42,
							43,
							44,
							-14,
							45,
							46
						]
					],
					[
						[
							47,
							48,
							-37,
							49,
							-41,
							50
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "NY",
					NAME: "New York"
				}
			},
			{
				arcs: [
					[
						51,
						52,
						53,
						54,
						55
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "NC",
					NAME: "North Carolina"
				}
			},
			{
				arcs: [
					[
						56,
						57,
						58,
						-20,
						59,
						60,
						61
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "OH",
					NAME: "Ohio"
				}
			},
			{
				arcs: [
					[
						62,
						63,
						64,
						-61,
						65,
						-43,
						-34
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "PA",
					NAME: "Pennsylvania"
				}
			},
			{
				arcs: [
					[
						[
							66,
							-10
						]
					],
					[
						[
							67,
							68,
							-12
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "RI",
					NAME: "Rhode Island"
				}
			},
			{
				arcs: [
					[
						-56,
						69,
						70,
						71,
						72,
						73,
						74,
						75
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "TN",
					NAME: "Tennessee"
				}
			},
			{
				arcs: [
					[
						[
							76
						]
					],
					[
						[
							77,
							78,
							79,
							80,
							81,
							82
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "TX",
					NAME: "Texas"
				}
			},
			{
				arcs: [
					[
						-32,
						83,
						84,
						85,
						86
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "UT",
					NAME: "Utah"
				}
			},
			{
				arcs: [
					[
						[
							87,
							88
						]
					],
					[
						[
							89,
							90,
							91,
							92,
							-88,
							93,
							94
						]
					],
					[
						[
							-92,
							95
						]
					],
					[
						[
							96,
							97
						]
					],
					[
						[
							-97,
							98
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "WA",
					NAME: "Washington"
				}
			},
			{
				arcs: [
					[
						99,
						100,
						101,
						-19,
						102,
						-17,
						103,
						104
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "WI",
					NAME: "Wisconsin"
				}
			},
			{
				arcs: [
					[
						105,
						106,
						107,
						108,
						109,
						-64,
						110,
						111,
						112
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "MD",
					NAME: "Maryland"
				}
			},
			{
				arcs: [
					[
						113,
						114,
						115,
						-71,
						116
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "AL",
					NAME: "Alabama"
				}
			},
			{
				arcs: [
					[
						[
							117
						]
					],
					[
						[
							118
						]
					],
					[
						[
							119
						]
					],
					[
						[
							120
						]
					],
					[
						[
							121,
							122
						]
					],
					[
						[
							123
						]
					],
					[
						[
							124
						]
					],
					[
						[
							125
						]
					],
					[
						[
							126
						]
					],
					[
						[
							127
						]
					],
					[
						[
							128
						]
					],
					[
						[
							129
						]
					],
					[
						[
							130
						]
					],
					[
						[
							131
						]
					],
					[
						[
							132
						]
					],
					[
						[
							133
						]
					],
					[
						[
							134,
							135,
							136,
							-122,
							137
						]
					],
					[
						[
							138
						]
					],
					[
						[
							139
						]
					],
					[
						[
							140
						]
					],
					[
						[
							141
						]
					],
					[
						[
							142
						]
					],
					[
						[
							143
						]
					],
					[
						[
							144
						]
					],
					[
						[
							145
						]
					],
					[
						[
							146
						]
					],
					[
						[
							147
						]
					],
					[
						[
							148
						]
					],
					[
						[
							149
						]
					],
					[
						[
							-135,
							150
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "AK",
					NAME: "Alaska"
				}
			},
			{
				arcs: [
					[
						151,
						152,
						153,
						-28,
						-87
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "AZ",
					NAME: "Arizona"
				}
			},
			{
				arcs: [
					[
						-73,
						154,
						155,
						-81,
						156,
						157
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "AR",
					NAME: "Arkansas"
				}
			},
			{
				arcs: [
					[
						158,
						-29,
						-154,
						159
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "CA",
					NAME: "California"
				}
			},
			{
				arcs: [
					[
						160,
						161,
						-86,
						162,
						163,
						164
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "CO",
					NAME: "Colorado"
				}
			},
			{
				arcs: [
					[
						-46,
						-13,
						-69,
						165
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "CT",
					NAME: "Connecticut"
				}
			},
			{
				arcs: [
					[
						166,
						-111,
						-63,
						-33
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "DE",
					NAME: "Delaware"
				}
			},
			{
				arcs: [
					[
						-114,
						167,
						168
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "FL",
					NAME: "Florida"
				}
			},
			{
				arcs: [
					[
						-117,
						-70,
						-55,
						169,
						170,
						-168
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "GA",
					NAME: "Georgia"
				}
			},
			{
				arcs: [
					[
						[
							171
						]
					],
					[
						[
							172
						]
					],
					[
						[
							173
						]
					],
					[
						[
							174
						]
					],
					[
						[
							175
						]
					],
					[
						[
							176
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "HI",
					NAME: "Hawaii"
				}
			},
			{
				arcs: [
					[
						-84,
						-31,
						177,
						-95,
						178,
						-24,
						179
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "ID",
					NAME: "Idaho"
				}
			},
			{
				arcs: [
					[
						180,
						181,
						-182,
						182,
						183,
						-105,
						184,
						185
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "IL",
					NAME: "Illinois"
				}
			},
			{
				arcs: [
					[
						-186,
						186,
						-21,
						-59,
						187
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "IN",
					NAME: "Indiana"
				}
			},
			{
				arcs: [
					[
						188,
						189,
						190,
						-100,
						-184,
						191
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "IA",
					NAME: "Iowa"
				}
			},
			{
				arcs: [
					[
						192,
						-165,
						193,
						194
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "KS",
					NAME: "Kansas"
				}
			},
			{
				arcs: [
					[
						-75,
						195,
						-182,
						-181,
						-188,
						-58,
						196,
						197,
						198
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "KY",
					NAME: "Kentucky"
				}
			},
			{
				arcs: [
					[
						-82,
						-156,
						199,
						200
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "LA",
					NAME: "Louisiana"
				}
			},
			{
				arcs: [
					[
						201,
						202,
						203,
						-101,
						-191
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "MN",
					NAME: "Minnesota"
				}
			},
			{
				arcs: [
					[
						204,
						-200,
						-155,
						-72,
						-116
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "MS",
					NAME: "Mississippi"
				}
			},
			{
				arcs: [
					[
						-158,
						205,
						-195,
						206,
						-192,
						-183,
						181,
						-196,
						-74
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "MO",
					NAME: "Missouri"
				}
			},
			{
				arcs: [
					[
						-207,
						-194,
						-164,
						207,
						208,
						-189
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "NE",
					NAME: "Nebraska"
				}
			},
			{
				arcs: [
					[
						209,
						210,
						-4,
						211,
						-8
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "NH",
					NAME: "New Hampshire"
				}
			},
			{
				arcs: [
					[
						-162,
						212,
						-79,
						213,
						-152
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "NM",
					NAME: "New Mexico"
				}
			},
			{
				arcs: [
					[
						214,
						-26,
						215,
						-203
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "ND",
					NAME: "North Dakota"
				}
			},
			{
				arcs: [
					[
						-157,
						-80,
						-213,
						-161,
						-193,
						-206
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "OK",
					NAME: "Oklahoma"
				}
			},
			{
				arcs: [
					[
						-30,
						-159,
						216,
						-90,
						-178
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "OR",
					NAME: "Oregon"
				}
			},
			{
				arcs: [
					[
						217,
						-170,
						-54
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "SC",
					NAME: "South Carolina"
				}
			},
			{
				arcs: [
					[
						-209,
						218,
						-27,
						-215,
						-202,
						-190
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "SD",
					NAME: "South Dakota"
				}
			},
			{
				arcs: [
					[
						-7,
						-45,
						219,
						-210
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "VT",
					NAME: "Vermont"
				}
			},
			{
				arcs: [
					[
						[
							220,
							-113
						]
					],
					[
						[
							221,
							-109,
							222,
							-107,
							223,
							-52,
							-76,
							-199
						]
					]
				],
				type: "MultiPolygon",
				properties: {
					ABBREVIATION: "VA",
					NAME: "Virginia"
				}
			},
			{
				arcs: [
					[
						-198,
						-197,
						-57,
						-62,
						-65,
						-110,
						-222
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "WV",
					NAME: "West Virginia"
				}
			},
			{
				arcs: [
					[
						-85,
						-180,
						-23,
						-219,
						-208,
						-163
					]
				],
				type: "Polygon",
				properties: {
					ABBREVIATION: "WY",
					NAME: "Wyoming"
				}
			}
		]
	}
};
var arcs = [
	[
		[
			22654,
			8885
		],
		[
			23,
			9
		],
		[
			30,
			-34
		],
		[
			8,
			67
		],
		[
			23,
			45
		],
		[
			69,
			56
		],
		[
			23,
			48
		],
		[
			-7,
			65
		],
		[
			23,
			96
		],
		[
			30,
			23
		],
		[
			16,
			94
		],
		[
			161,
			257
		],
		[
			39,
			-11
		],
		[
			0,
			-61
		],
		[
			30,
			-21
		],
		[
			162,
			48
		],
		[
			77,
			-84
		],
		[
			0,
			-471
		],
		[
			38,
			-25
		],
		[
			38,
			0
		],
		[
			0,
			-97
		],
		[
			16,
			-56
		],
		[
			46,
			6
		],
		[
			8,
			-42
		],
		[
			30,
			-45
		],
		[
			-7,
			-47
		],
		[
			-62,
			-52
		],
		[
			-54,
			2
		],
		[
			-7,
			-31
		],
		[
			-54,
			4
		],
		[
			-8,
			-36
		],
		[
			-54,
			-16
		],
		[
			0,
			19
		],
		[
			-38,
			-73
		],
		[
			-31,
			25
		]
	],
	[
		[
			23222,
			8547
		],
		[
			8,
			20
		],
		[
			0,
			5
		]
	],
	[
		[
			23230,
			8572
		],
		[
			-31,
			-14
		],
		[
			-38,
			-4
		],
		[
			-54,
			36
		],
		[
			-31,
			-142
		],
		[
			-115,
			-58
		],
		[
			-38,
			-38
		],
		[
			-39,
			29
		],
		[
			-38,
			-12
		],
		[
			0,
			-71
		],
		[
			-39,
			-18
		],
		[
			0,
			-39
		],
		[
			-46,
			-42
		],
		[
			0,
			-34
		],
		[
			-23,
			-36
		]
	],
	[
		[
			22738,
			8129
		],
		[
			-23,
			20
		],
		[
			0,
			41
		],
		[
			-38,
			40
		],
		[
			0,
			302
		],
		[
			-8,
			15
		],
		[
			0,
			184
		],
		[
			-8,
			28
		],
		[
			0,
			107
		],
		[
			-7,
			19
		]
	],
	[
		[
			23222,
			8547
		],
		[
			8,
			25
		]
	],
	[
		[
			22761,
			7594
		],
		[
			31,
			-41
		],
		[
			-54,
			-2
		],
		[
			23,
			43
		]
	],
	[
		[
			22193,
			8023
		],
		[
			169,
			-6
		]
	],
	[
		[
			22362,
			8017
		],
		[
			253,
			-10
		],
		[
			23,
			37
		],
		[
			77,
			22
		]
	],
	[
		[
			22715,
			8066
		],
		[
			8,
			-63
		],
		[
			-8,
			-41
		],
		[
			-31,
			-44
		],
		[
			8,
			-45
		],
		[
			46,
			-30
		],
		[
			16,
			-42
		],
		[
			-16,
			-34
		],
		[
			31,
			-18
		],
		[
			8,
			-47
		],
		[
			61,
			-20
		],
		[
			54,
			26
		],
		[
			15,
			-47
		],
		[
			-100,
			-15
		],
		[
			-30,
			-27
		],
		[
			-23,
			13
		],
		[
			0,
			45
		],
		[
			-47,
			-41
		],
		[
			-23,
			-27
		],
		[
			-38,
			-6
		]
	],
	[
		[
			22646,
			7603
		],
		[
			-15,
			60
		]
	],
	[
		[
			22631,
			7663
		],
		[
			0,
			12
		]
	],
	[
		[
			22631,
			7675
		],
		[
			-31,
			27
		],
		[
			-8,
			76
		],
		[
			-84,
			-4
		]
	],
	[
		[
			22508,
			7774
		],
		[
			-8,
			6
		],
		[
			-261,
			5
		],
		[
			-100,
			4
		]
	],
	[
		[
			22139,
			7789
		],
		[
			30,
			155
		],
		[
			24,
			79
		]
	],
	[
		[
			18888,
			9831
		],
		[
			8,
			-34
		],
		[
			-69,
			-29
		],
		[
			-46,
			3
		],
		[
			107,
			60
		]
	],
	[
		[
			18519,
			9310
		],
		[
			93,
			42
		],
		[
			38,
			43
		],
		[
			92,
			13
		],
		[
			46,
			43
		],
		[
			39,
			4
		],
		[
			15,
			36
		],
		[
			92,
			70
		],
		[
			16,
			25
		],
		[
			77,
			31
		],
		[
			53,
			-2
		],
		[
			16,
			-24
		],
		[
			-108,
			-64
		],
		[
			-31,
			-45
		],
		[
			-23,
			-64
		],
		[
			123,
			8
		],
		[
			62,
			-36
		],
		[
			46,
			-96
		],
		[
			31,
			-11
		],
		[
			53,
			15
		],
		[
			39,
			-33
		],
		[
			54,
			18
		],
		[
			84,
			56
		],
		[
			69,
			13
		],
		[
			77,
			-4
		],
		[
			54,
			25
		],
		[
			46,
			2
		],
		[
			0,
			-93
		],
		[
			46,
			-13
		],
		[
			39,
			13
		],
		[
			15,
			-22
		],
		[
			38,
			31
		],
		[
			54,
			-13
		],
		[
			0,
			-68
		],
		[
			23,
			-76
		],
		[
			23,
			-29
		],
		[
			-107,
			0
		],
		[
			-46,
			31
		],
		[
			-47,
			-60
		],
		[
			-30,
			45
		],
		[
			-85,
			31
		],
		[
			-31,
			0
		],
		[
			-23,
			-41
		],
		[
			-99,
			-2
		],
		[
			-39,
			-9
		],
		[
			-15,
			-52
		],
		[
			-92,
			25
		],
		[
			-8,
			-40
		],
		[
			-77,
			-36
		],
		[
			-31,
			-76
		],
		[
			-38,
			-63
		],
		[
			-23,
			-27
		],
		[
			0,
			-7
		],
		[
			0,
			-3
		],
		[
			0,
			-4
		],
		[
			-16,
			5
		]
	],
	[
		[
			19103,
			8822
		],
		[
			-7,
			11
		],
		[
			0,
			40
		],
		[
			-31,
			25
		],
		[
			15,
			43
		],
		[
			0,
			79
		]
	],
	[
		[
			19080,
			9020
		],
		[
			-38,
			29
		],
		[
			-31,
			0
		]
	],
	[
		[
			19011,
			9049
		],
		[
			0,
			45
		],
		[
			-84,
			33
		],
		[
			-54,
			-2
		],
		[
			-69,
			41
		],
		[
			-223,
			67
		],
		[
			-15,
			52
		],
		[
			-47,
			25
		]
	],
	[
		[
			20010,
			7682
		],
		[
			-292,
			-12
		]
	],
	[
		[
			19718,
			7670
		],
		[
			0,
			21
		],
		[
			-261,
			0
		],
		[
			-169,
			0
		]
	],
	[
		[
			19288,
			7691
		],
		[
			46,
			45
		],
		[
			8,
			37
		],
		[
			38,
			66
		],
		[
			31,
			83
		],
		[
			7,
			47
		],
		[
			0,
			137
		],
		[
			-69,
			198
		],
		[
			0,
			34
		],
		[
			23,
			31
		],
		[
			-15,
			102
		],
		[
			23,
			27
		],
		[
			31,
			83
		],
		[
			0,
			103
		],
		[
			38,
			18
		],
		[
			0,
			50
		],
		[
			54,
			13
		],
		[
			46,
			68
		],
		[
			8,
			-135
		],
		[
			38,
			61
		],
		[
			0,
			114
		],
		[
			39,
			30
		],
		[
			23,
			40
		],
		[
			-8,
			31
		],
		[
			38,
			57
		],
		[
			54,
			13
		],
		[
			54,
			-42
		],
		[
			54,
			-5
		],
		[
			15,
			-41
		],
		[
			46,
			-9
		],
		[
			23,
			-24
		],
		[
			69,
			-25
		],
		[
			39,
			-68
		],
		[
			-31,
			-27
		],
		[
			0,
			-44
		],
		[
			31,
			-18
		],
		[
			0,
			-131
		],
		[
			-8,
			-52
		],
		[
			-46,
			-36
		],
		[
			0,
			-42
		],
		[
			-77,
			-63
		],
		[
			0,
			-84
		],
		[
			54,
			-22
		],
		[
			38,
			65
		],
		[
			47,
			48
		],
		[
			76,
			45
		],
		[
			39,
			-25
		],
		[
			23,
			-56
		],
		[
			0,
			-54
		],
		[
			15,
			-55
		],
		[
			8,
			-116
		],
		[
			23,
			-52
		],
		[
			-15,
			-36
		],
		[
			0,
			-67
		],
		[
			-23,
			-50
		],
		[
			-62,
			-4
		],
		[
			0,
			-48
		],
		[
			-54,
			-45
		],
		[
			-7,
			-83
		],
		[
			-39,
			-31
		],
		[
			-23,
			-65
		]
	],
	[
		[
			15599,
			8781
		],
		[
			-207,
			2
		],
		[
			-269,
			-2
		],
		[
			-430,
			2
		],
		[
			-277,
			0
		],
		[
			-315,
			0
		],
		[
			0,
			-179
		]
	],
	[
		[
			14101,
			8604
		],
		[
			-15,
			8
		],
		[
			-39,
			70
		],
		[
			-38,
			2
		],
		[
			-8,
			-42
		],
		[
			-61,
			-23
		],
		[
			-16,
			16
		],
		[
			-100,
			-7
		],
		[
			-23,
			-22
		],
		[
			-115,
			-14
		],
		[
			-15,
			83
		],
		[
			-16,
			32
		],
		[
			-69,
			31
		],
		[
			0,
			65
		],
		[
			-23,
			18
		],
		[
			-38,
			72
		],
		[
			0,
			52
		],
		[
			-16,
			43
		],
		[
			-31,
			31
		],
		[
			-23,
			-36
		],
		[
			-38,
			-17
		],
		[
			-15,
			-28
		],
		[
			-54,
			36
		],
		[
			15,
			30
		],
		[
			-15,
			40
		],
		[
			31,
			27
		],
		[
			-8,
			139
		],
		[
			23,
			135
		],
		[
			-54,
			-13
		],
		[
			-31,
			43
		],
		[
			-38,
			24
		],
		[
			0,
			30
		],
		[
			-69,
			78
		],
		[
			-16,
			38
		],
		[
			-46,
			14
		],
		[
			-38,
			38
		],
		[
			0,
			97
		],
		[
			-69,
			90
		],
		[
			0,
			346
		]
	],
	[
		[
			13033,
			10130
		],
		[
			353,
			0
		],
		[
			292,
			0
		],
		[
			254,
			-2
		],
		[
			207,
			0
		],
		[
			292,
			2
		],
		[
			385,
			0
		],
		[
			230,
			0
		],
		[
			292,
			0
		],
		[
			261,
			0
		]
	],
	[
		[
			15599,
			10130
		],
		[
			0,
			-422
		],
		[
			0,
			-309
		],
		[
			0,
			-297
		]
	],
	[
		[
			15599,
			9102
		],
		[
			0,
			-321
		]
	],
	[
		[
			13455,
			6089
		],
		[
			0,
			-128
		],
		[
			8,
			-42
		],
		[
			0,
			-102
		],
		[
			-23,
			-58
		],
		[
			-23,
			-3
		],
		[
			-23,
			43
		],
		[
			-46,
			3
		],
		[
			-39,
			-16
		],
		[
			8,
			-47
		],
		[
			0,
			-88
		],
		[
			8,
			-86
		],
		[
			23,
			-62
		],
		[
			0,
			-46
		],
		[
			-16,
			-42
		]
	],
	[
		[
			13332,
			5415
		],
		[
			-99,
			133
		],
		[
			-85,
			99
		],
		[
			-23,
			35
		],
		[
			-108,
			122
		],
		[
			-76,
			103
		],
		[
			-116,
			129
		],
		[
			-23,
			35
		],
		[
			-130,
			144
		],
		[
			-31,
			41
		],
		[
			-85,
			90
		],
		[
			-153,
			182
		],
		[
			-23,
			18
		],
		[
			-177,
			193
		],
		[
			-16,
			23
		],
		[
			0,
			504
		],
		[
			0,
			231
		],
		[
			0,
			274
		]
	],
	[
		[
			12187,
			7771
		],
		[
			216,
			0
		],
		[
			292,
			0
		],
		[
			130,
			2
		]
	],
	[
		[
			12825,
			7773
		],
		[
			238,
			-2
		],
		[
			185,
			0
		],
		[
			215,
			0
		]
	],
	[
		[
			13463,
			7771
		],
		[
			0,
			-413
		],
		[
			0,
			-428
		],
		[
			0,
			-252
		],
		[
			-8,
			-8
		],
		[
			0,
			-324
		],
		[
			0,
			-257
		]
	],
	[
		[
			21708,
			6993
		],
		[
			23,
			39
		]
	],
	[
		[
			21731,
			7032
		],
		[
			62,
			31
		],
		[
			0,
			25
		],
		[
			69,
			52
		],
		[
			-31,
			85
		],
		[
			-53,
			63
		],
		[
			0,
			70
		],
		[
			23,
			9
		],
		[
			-8,
			71
		],
		[
			23,
			10
		],
		[
			31,
			49
		],
		[
			0,
			23
		],
		[
			38,
			36
		]
	],
	[
		[
			21885,
			7556
		],
		[
			46,
			-37
		],
		[
			123,
			-83
		],
		[
			-23,
			-99
		]
	],
	[
		[
			22031,
			7337
		],
		[
			-8,
			-4
		],
		[
			-7,
			-16
		]
	],
	[
		[
			22016,
			7317
		],
		[
			-23,
			-2
		],
		[
			0,
			-4
		],
		[
			-8,
			-23
		]
	],
	[
		[
			21985,
			7288
		],
		[
			0,
			-2
		],
		[
			-8,
			-5
		]
	],
	[
		[
			21977,
			7281
		],
		[
			0,
			-15
		]
	],
	[
		[
			21977,
			7266
		],
		[
			54,
			-28
		],
		[
			0,
			-60
		],
		[
			-15,
			-86
		],
		[
			0,
			-74
		],
		[
			-31,
			-68
		],
		[
			-38,
			-62
		],
		[
			-54,
			-52
		],
		[
			-39,
			-90
		],
		[
			-30,
			-4
		],
		[
			23,
			69
		],
		[
			-116,
			72
		],
		[
			-30,
			77
		],
		[
			0,
			6
		],
		[
			0,
			9
		],
		[
			7,
			18
		]
	],
	[
		[
			22023,
			7302
		],
		[
			0,
			2
		]
	],
	[
		[
			22023,
			7304
		],
		[
			8,
			33
		]
	],
	[
		[
			21885,
			7556
		],
		[
			-8,
			24
		],
		[
			-38,
			3
		],
		[
			-31,
			42
		],
		[
			0,
			68
		],
		[
			-69,
			80
		],
		[
			-207,
			-2
		],
		[
			-169,
			2
		],
		[
			-346,
			-2
		],
		[
			-215,
			2
		],
		[
			0,
			90
		]
	],
	[
		[
			20802,
			7863
		],
		[
			77,
			66
		],
		[
			53,
			29
		],
		[
			16,
			40
		],
		[
			46,
			34
		],
		[
			-8,
			50
		],
		[
			-31,
			25
		],
		[
			-7,
			91
		],
		[
			123,
			37
		],
		[
			107,
			-1
		],
		[
			54,
			-11
		],
		[
			38,
			-33
		],
		[
			47,
			13
		],
		[
			84,
			-4
		],
		[
			62,
			33
		],
		[
			46,
			48
		],
		[
			53,
			18
		],
		[
			0,
			65
		],
		[
			16,
			47
		],
		[
			-16,
			59
		],
		[
			-23,
			-9
		],
		[
			0,
			53
		],
		[
			93,
			66
		],
		[
			23,
			40
		],
		[
			100,
			113
		],
		[
			99,
			54
		],
		[
			108,
			-7
		],
		[
			215,
			7
		]
	],
	[
		[
			22177,
			8786
		],
		[
			-8,
			-34
		],
		[
			0,
			-119
		],
		[
			16,
			-19
		],
		[
			-8,
			-89
		],
		[
			-15,
			-12
		],
		[
			0,
			-132
		],
		[
			31,
			-79
		],
		[
			0,
			-180
		],
		[
			-8,
			-33
		],
		[
			8,
			-66
		]
	],
	[
		[
			22139,
			7789
		],
		[
			0,
			-144
		],
		[
			-8,
			-110
		],
		[
			15,
			-27
		],
		[
			-53,
			-38
		]
	],
	[
		[
			22093,
			7470
		],
		[
			15,
			-40
		],
		[
			-31,
			-34
		],
		[
			85,
			24
		],
		[
			38,
			-17
		],
		[
			16,
			22
		],
		[
			76,
			-2
		],
		[
			47,
			11
		],
		[
			46,
			47
		],
		[
			15,
			-29
		],
		[
			38,
			-16
		],
		[
			-76,
			-54
		],
		[
			-123,
			-60
		],
		[
			-70,
			-11
		],
		[
			-46,
			-19
		],
		[
			-46,
			3
		],
		[
			-30,
			-14
		],
		[
			-24,
			21
		]
	],
	[
		[
			21977,
			7266
		],
		[
			0,
			8
		],
		[
			0,
			7
		]
	],
	[
		[
			21977,
			7281
		],
		[
			8,
			7
		]
	],
	[
		[
			22016,
			7317
		],
		[
			7,
			-13
		]
	],
	[
		[
			22023,
			7302
		],
		[
			-46,
			-36
		]
	],
	[
		[
			20387,
			5950
		],
		[
			299,
			-16
		],
		[
			285,
			0
		],
		[
			200,
			0
		],
		[
			199,
			2
		],
		[
			262,
			1
		]
	],
	[
		[
			21632,
			5937
		],
		[
			-8,
			-79
		],
		[
			8,
			-43
		],
		[
			-77,
			-31
		],
		[
			-39,
			-7
		],
		[
			-23,
			-23
		],
		[
			-38,
			12
		],
		[
			0,
			-34
		],
		[
			61,
			15
		],
		[
			116,
			-2
		],
		[
			30,
			-43
		],
		[
			0,
			-82
		],
		[
			-38,
			-12
		],
		[
			-46,
			-83
		],
		[
			-77,
			-2
		],
		[
			0,
			-36
		],
		[
			-31,
			-75
		],
		[
			69,
			7
		],
		[
			39,
			-9
		],
		[
			-39,
			-45
		],
		[
			-46,
			-79
		],
		[
			-46,
			27
		],
		[
			-92,
			-26
		],
		[
			-92,
			-74
		],
		[
			-39,
			-52
		],
		[
			-38,
			-113
		],
		[
			-92,
			-4
		],
		[
			-31,
			-16
		]
	],
	[
		[
			21063,
			5028
		],
		[
			-85,
			104
		],
		[
			-84,
			121
		],
		[
			-77,
			96
		],
		[
			-238,
			5
		],
		[
			0,
			49
		],
		[
			-31,
			48
		],
		[
			-23,
			15
		],
		[
			-254,
			16
		],
		[
			-38,
			-2
		],
		[
			-61,
			-32
		],
		[
			-93,
			-33
		]
	],
	[
		[
			20079,
			5415
		],
		[
			-107,
			-5
		],
		[
			-146,
			2
		]
	],
	[
		[
			19826,
			5412
		],
		[
			7,
			86
		],
		[
			54,
			14
		],
		[
			0,
			44
		],
		[
			23,
			27
		],
		[
			46,
			23
		],
		[
			46,
			-2
		],
		[
			70,
			69
		],
		[
			46,
			9
		],
		[
			7,
			50
		],
		[
			100,
			22
		],
		[
			16,
			36
		],
		[
			46,
			11
		],
		[
			31,
			-8
		],
		[
			7,
			35
		],
		[
			31,
			41
		],
		[
			23,
			-2
		],
		[
			8,
			83
		]
	],
	[
		[
			20195,
			6562
		],
		[
			0,
			6
		]
	],
	[
		[
			20195,
			6568
		],
		[
			-31,
			45
		],
		[
			-23,
			5
		],
		[
			-8,
			61
		],
		[
			-38,
			-12
		],
		[
			-16,
			-31
		],
		[
			-38,
			2
		],
		[
			-46,
			23
		],
		[
			-54,
			-16
		],
		[
			-15,
			34
		],
		[
			-85,
			20
		],
		[
			-15,
			72
		],
		[
			-23,
			22
		],
		[
			-85,
			3
		]
	],
	[
		[
			19718,
			6796
		],
		[
			0,
			177
		],
		[
			0,
			342
		],
		[
			0,
			355
		]
	],
	[
		[
			20010,
			7682
		],
		[
			92,
			-66
		],
		[
			39,
			11
		],
		[
			46,
			-47
		],
		[
			31,
			-16
		],
		[
			100,
			45
		],
		[
			61,
			-9
		],
		[
			77,
			81
		],
		[
			77,
			41
		],
		[
			107,
			43
		]
	],
	[
		[
			20640,
			7765
		],
		[
			0,
			-452
		]
	],
	[
		[
			20640,
			7313
		],
		[
			-23,
			-34
		],
		[
			0,
			-92
		],
		[
			-23,
			-36
		],
		[
			-7,
			-83
		],
		[
			-24,
			-45
		],
		[
			0,
			-52
		],
		[
			-30,
			-16
		],
		[
			-69,
			-78
		],
		[
			-47,
			6
		],
		[
			-46,
			-58
		],
		[
			0,
			-90
		],
		[
			-61,
			24
		],
		[
			-31,
			-76
		],
		[
			0,
			-59
		],
		[
			-23,
			-42
		],
		[
			-61,
			-20
		]
	],
	[
		[
			21731,
			7032
		],
		[
			-53,
			9
		],
		[
			-31,
			-36
		]
	],
	[
		[
			21647,
			7005
		],
		[
			-369,
			-1
		],
		[
			-253,
			1
		],
		[
			-162,
			0
		]
	],
	[
		[
			20863,
			7005
		],
		[
			-223,
			0
		],
		[
			0,
			308
		]
	],
	[
		[
			20640,
			7765
		],
		[
			162,
			98
		]
	],
	[
		[
			22646,
			7603
		],
		[
			-15,
			-14
		],
		[
			0,
			57
		],
		[
			-8,
			-1
		],
		[
			0,
			-45
		],
		[
			-23,
			-13
		],
		[
			0,
			4
		],
		[
			0,
			7
		],
		[
			0,
			-2
		],
		[
			8,
			4
		],
		[
			7,
			45
		],
		[
			16,
			18
		]
	],
	[
		[
			22631,
			7675
		],
		[
			-16,
			-23
		],
		[
			-23,
			-18
		],
		[
			-15,
			-69
		],
		[
			-85,
			-21
		],
		[
			16,
			32
		]
	],
	[
		[
			22508,
			7576
		],
		[
			0,
			198
		]
	],
	[
		[
			19826,
			5412
		],
		[
			-277,
			-2
		]
	],
	[
		[
			19549,
			5410
		],
		[
			-269,
			2
		],
		[
			-77,
			3
		],
		[
			-207,
			-2
		]
	],
	[
		[
			18996,
			5413
		],
		[
			-269,
			0
		],
		[
			-185,
			0
		]
	],
	[
		[
			18542,
			5413
		],
		[
			47,
			67
		],
		[
			0,
			86
		],
		[
			30,
			53
		],
		[
			0,
			45
		],
		[
			31,
			7
		],
		[
			15,
			81
		]
	],
	[
		[
			18665,
			5752
		],
		[
			31,
			54
		],
		[
			16,
			59
		],
		[
			-8,
			54
		],
		[
			15,
			0
		],
		[
			16,
			0
		]
	],
	[
		[
			18735,
			5919
		],
		[
			292,
			0
		],
		[
			0,
			49
		],
		[
			38,
			-4
		],
		[
			292,
			8
		],
		[
			131,
			-11
		],
		[
			123,
			2
		],
		[
			161,
			-11
		],
		[
			184,
			-4
		],
		[
			8,
			6
		]
	],
	[
		[
			19964,
			5954
		],
		[
			138,
			-2
		],
		[
			285,
			-2
		]
	],
	[
		[
			17075,
			2406
		],
		[
			-8,
			27
		],
		[
			0,
			41
		],
		[
			-8,
			29
		],
		[
			0,
			34
		],
		[
			-7,
			6
		],
		[
			-8,
			18
		],
		[
			-15,
			61
		],
		[
			0,
			220
		],
		[
			23,
			54
		],
		[
			0,
			27
		],
		[
			30,
			74
		],
		[
			16,
			9
		],
		[
			-16,
			-33
		],
		[
			-46,
			-135
		],
		[
			-7,
			-47
		],
		[
			0,
			-113
		],
		[
			23,
			-108
		],
		[
			7,
			-40
		],
		[
			8,
			-43
		],
		[
			8,
			-38
		],
		[
			0,
			-43
		]
	],
	[
		[
			17075,
			2406
		],
		[
			0,
			-34
		],
		[
			-77,
			-27
		],
		[
			-23,
			45
		],
		[
			-85,
			16
		],
		[
			-30,
			-5
		],
		[
			-62,
			50
		],
		[
			-46,
			22
		],
		[
			-61,
			45
		],
		[
			-31,
			0
		],
		[
			-16,
			46
		],
		[
			-7,
			63
		],
		[
			-23,
			65
		],
		[
			-16,
			6
		],
		[
			-7,
			93
		],
		[
			-16,
			17
		],
		[
			0,
			81
		],
		[
			-7,
			34
		],
		[
			-31,
			12
		],
		[
			-46,
			54
		],
		[
			-8,
			62
		],
		[
			-61,
			70
		],
		[
			-31,
			67
		],
		[
			0,
			41
		],
		[
			-31,
			50
		],
		[
			0,
			27
		],
		[
			-31,
			56
		],
		[
			0,
			43
		],
		[
			-30,
			72
		],
		[
			-23,
			11
		],
		[
			-39,
			63
		],
		[
			-38,
			20
		],
		[
			0,
			27
		],
		[
			-31,
			45
		],
		[
			-38,
			11
		],
		[
			-123,
			11
		],
		[
			-31,
			25
		],
		[
			-23,
			-38
		],
		[
			-46,
			-11
		],
		[
			-31,
			-46
		],
		[
			-31,
			-96
		],
		[
			8,
			-32
		],
		[
			-31,
			-13
		],
		[
			-23,
			-65
		],
		[
			-38,
			-2
		],
		[
			-39,
			29
		],
		[
			-15,
			31
		],
		[
			-39,
			9
		],
		[
			-23,
			32
		],
		[
			-30,
			6
		],
		[
			-39,
			28
		],
		[
			-7,
			31
		],
		[
			-31,
			16
		],
		[
			-46,
			53
		],
		[
			0,
			32
		],
		[
			-31,
			61
		],
		[
			0,
			96
		],
		[
			-38,
			64
		],
		[
			0,
			42
		],
		[
			-47,
			65
		],
		[
			-61,
			34
		],
		[
			-69,
			97
		],
		[
			-54,
			61
		],
		[
			-8,
			26
		],
		[
			-38,
			16
		],
		[
			-46,
			99
		],
		[
			-31,
			16
		]
	],
	[
		[
			15069,
			4331
		],
		[
			-23,
			23
		],
		[
			8,
			51
		],
		[
			253,
			0
		],
		[
			300,
			0
		],
		[
			207,
			0
		],
		[
			0,
			351
		],
		[
			0,
			236
		],
		[
			0,
			295
		],
		[
			0,
			211
		],
		[
			0,
			421
		],
		[
			8,
			0
		]
	],
	[
		[
			15822,
			5919
		],
		[
			162,
			0
		],
		[
			253,
			0
		],
		[
			231,
			0
		],
		[
			0,
			-443
		],
		[
			0,
			-210
		],
		[
			38,
			-20
		],
		[
			23,
			-40
		],
		[
			39,
			11
		],
		[
			69,
			-25
		],
		[
			0,
			-42
		],
		[
			46,
			-3
		],
		[
			107,
			-45
		],
		[
			23,
			29
		],
		[
			47,
			-15
		],
		[
			15,
			-38
		],
		[
			31,
			-1
		],
		[
			15,
			-49
		],
		[
			46,
			47
		],
		[
			46,
			-56
		],
		[
			46,
			16
		],
		[
			8,
			-39
		],
		[
			62,
			46
		],
		[
			84,
			-41
		],
		[
			31,
			-29
		],
		[
			46,
			29
		],
		[
			0,
			23
		],
		[
			77,
			6
		],
		[
			38,
			25
		],
		[
			16,
			-18
		],
		[
			53,
			-2
		],
		[
			16,
			29
		],
		[
			53,
			-36
		],
		[
			8,
			-22
		],
		[
			39,
			-10
		],
		[
			7,
			-24
		],
		[
			54,
			-16
		]
	],
	[
		[
			17651,
			4956
		],
		[
			46,
			-29
		],
		[
			46,
			0
		],
		[
			0,
			-180
		]
	],
	[
		[
			17743,
			4747
		],
		[
			0,
			-344
		],
		[
			46,
			-67
		],
		[
			0,
			-82
		],
		[
			31,
			-49
		],
		[
			0,
			-38
		],
		[
			31,
			-38
		],
		[
			0,
			-72
		],
		[
			-16,
			-92
		],
		[
			-23,
			-36
		],
		[
			0,
			-180
		],
		[
			-46,
			-91
		],
		[
			23,
			-31
		]
	],
	[
		[
			17789,
			3627
		],
		[
			-53,
			-7
		],
		[
			-93,
			-56
		],
		[
			-7,
			23
		],
		[
			-46,
			-16
		],
		[
			15,
			58
		],
		[
			-31,
			20
		],
		[
			-7,
			-29
		],
		[
			-31,
			-4
		],
		[
			0,
			-47
		],
		[
			23,
			-29
		],
		[
			0,
			-46
		],
		[
			-85,
			-125
		],
		[
			-107,
			-88
		],
		[
			-39,
			-20
		],
		[
			-53,
			20
		],
		[
			-54,
			-30
		],
		[
			15,
			-45
		],
		[
			-38,
			-24
		],
		[
			-46,
			13
		],
		[
			0,
			-62
		],
		[
			-54,
			-52
		],
		[
			-16,
			-57
		],
		[
			-23,
			-24
		],
		[
			0,
			4
		],
		[
			0,
			5
		],
		[
			-7,
			6
		],
		[
			-23,
			-11
		],
		[
			0,
			-34
		],
		[
			23,
			-15
		],
		[
			-39,
			-129
		],
		[
			0,
			-76
		],
		[
			-7,
			-7
		],
		[
			0,
			-11
		],
		[
			0,
			-13
		],
		[
			-16,
			-57
		],
		[
			31,
			-85
		],
		[
			-8,
			-41
		],
		[
			31,
			-60
		],
		[
			0,
			-56
		],
		[
			31,
			-14
		]
	],
	[
		[
			13463,
			7771
		],
		[
			223,
			0
		],
		[
			415,
			2
		]
	],
	[
		[
			14101,
			7773
		],
		[
			0,
			-339
		],
		[
			200,
			0
		],
		[
			230,
			2
		]
	],
	[
		[
			14531,
			7436
		],
		[
			0,
			-276
		],
		[
			0,
			-230
		],
		[
			0,
			-337
		],
		[
			0,
			-200
		],
		[
			0,
			-304
		]
	],
	[
		[
			14531,
			6089
		],
		[
			-307,
			-2
		],
		[
			-200,
			2
		],
		[
			-330,
			0
		],
		[
			-239,
			0
		]
	],
	[
		[
			11619,
			9930
		],
		[
			7,
			2
		]
	],
	[
		[
			11626,
			9932
		],
		[
			24,
			-31
		],
		[
			-39,
			-27
		],
		[
			23,
			-18
		],
		[
			0,
			-29
		],
		[
			46,
			-23
		],
		[
			-15,
			-24
		],
		[
			-39,
			24
		],
		[
			0,
			43
		],
		[
			-30,
			16
		],
		[
			23,
			67
		]
	],
	[
		[
			12848,
			9118
		],
		[
			-261,
			2
		],
		[
			-184,
			0
		],
		[
			-31,
			-24
		],
		[
			-31,
			4
		],
		[
			-84,
			-29
		],
		[
			-62,
			-11
		],
		[
			-54,
			-32
		],
		[
			-61,
			-11
		],
		[
			-15,
			14
		],
		[
			-70,
			-27
		],
		[
			-38,
			-2
		],
		[
			-100,
			26
		],
		[
			-61,
			-8
		],
		[
			-16,
			-18
		],
		[
			-77,
			-36
		],
		[
			-92,
			24
		],
		[
			-23,
			21
		],
		[
			0,
			85
		],
		[
			-23,
			43
		],
		[
			-54,
			44
		],
		[
			-31,
			-15
		]
	],
	[
		[
			11480,
			9168
		],
		[
			-53,
			40
		],
		[
			-108,
			21
		],
		[
			8,
			49
		],
		[
			23,
			32
		],
		[
			-39,
			56
		],
		[
			-30,
			189
		],
		[
			-23,
			20
		],
		[
			-16,
			124
		],
		[
			-46,
			53
		],
		[
			-15,
			46
		],
		[
			7,
			127
		],
		[
			116,
			-65
		],
		[
			146,
			-27
		],
		[
			69,
			10
		],
		[
			54,
			-12
		],
		[
			38,
			-33
		],
		[
			8,
			-52
		],
		[
			31,
			7
		],
		[
			0,
			-104
		],
		[
			-8,
			-59
		],
		[
			0,
			-13
		],
		[
			-16,
			-31
		]
	],
	[
		[
			11626,
			9546
		],
		[
			-7,
			2
		],
		[
			-8,
			2
		]
	],
	[
		[
			11611,
			9550
		],
		[
			-8,
			-16
		],
		[
			0,
			-4
		],
		[
			23,
			-18
		],
		[
			16,
			51
		],
		[
			46,
			9
		],
		[
			-23,
			99
		],
		[
			46,
			131
		],
		[
			-31,
			23
		],
		[
			-7,
			78
		],
		[
			-47,
			29
		]
	],
	[
		[
			11619,
			9930
		],
		[
			38,
			22
		],
		[
			8,
			50
		],
		[
			-46,
			25
		],
		[
			-16,
			31
		],
		[
			-7,
			72
		],
		[
			215,
			-2
		],
		[
			292,
			2
		],
		[
			269,
			0
		],
		[
			238,
			0
		],
		[
			208,
			0
		]
	],
	[
		[
			12818,
			10130
		],
		[
			0,
			-213
		],
		[
			0,
			-408
		],
		[
			0,
			-276
		],
		[
			15,
			-13
		],
		[
			15,
			-102
		]
	],
	[
		[
			11626,
			9546
		],
		[
			-15,
			4
		]
	],
	[
		[
			11588,
			9995
		],
		[
			-8,
			0
		]
	],
	[
		[
			11580,
			9995
		],
		[
			-46,
			3
		],
		[
			0,
			2
		],
		[
			31,
			34
		],
		[
			23,
			-39
		]
	],
	[
		[
			11588,
			9995
		],
		[
			-8,
			-4
		],
		[
			0,
			4
		]
	],
	[
		[
			18473,
			7944
		],
		[
			-15,
			43
		],
		[
			-77,
			34
		],
		[
			-23,
			68
		],
		[
			0,
			69
		],
		[
			23,
			30
		],
		[
			-31,
			38
		],
		[
			0,
			51
		]
	],
	[
		[
			18350,
			8277
		],
		[
			-15,
			36
		],
		[
			0,
			83
		],
		[
			-38,
			54
		],
		[
			-47,
			19
		],
		[
			-46,
			44
		],
		[
			-7,
			46
		],
		[
			-85,
			53
		],
		[
			0,
			20
		],
		[
			-69,
			21
		],
		[
			-31,
			56
		],
		[
			8,
			178
		],
		[
			23,
			29
		],
		[
			-15,
			49
		],
		[
			-39,
			9
		],
		[
			0,
			45
		],
		[
			31,
			56
		],
		[
			100,
			70
		],
		[
			0,
			194
		],
		[
			54,
			18
		]
	],
	[
		[
			18174,
			9357
		],
		[
			53,
			-3
		],
		[
			93,
			41
		],
		[
			53,
			13
		],
		[
			54,
			34
		],
		[
			16,
			-34
		],
		[
			-23,
			-31
		],
		[
			-8,
			-61
		],
		[
			46,
			27
		],
		[
			61,
			-33
		]
	],
	[
		[
			19011,
			9049
		],
		[
			69,
			-29
		]
	],
	[
		[
			19103,
			8822
		],
		[
			16,
			-3
		],
		[
			7,
			-4
		],
		[
			-15,
			-41
		],
		[
			-69,
			-78
		],
		[
			-8,
			-50
		],
		[
			54,
			16
		],
		[
			31,
			67
		],
		[
			46,
			7
		],
		[
			0,
			25
		],
		[
			31,
			49
		],
		[
			0,
			29
		],
		[
			46,
			18
		],
		[
			0,
			-45
		],
		[
			-23,
			-26
		],
		[
			-77,
			-180
		],
		[
			-8,
			-61
		],
		[
			8,
			-40
		],
		[
			-31,
			-25
		],
		[
			-15,
			-48
		],
		[
			0,
			-108
		],
		[
			-16,
			-60
		],
		[
			-23,
			-36
		],
		[
			0,
			-119
		],
		[
			31,
			-70
		],
		[
			-15,
			-50
		],
		[
			7,
			-51
		]
	],
	[
		[
			19080,
			7938
		],
		[
			-246,
			0
		],
		[
			-361,
			6
		]
	],
	[
		[
			21678,
			6409
		],
		[
			-23,
			7
		],
		[
			-39,
			72
		],
		[
			8,
			47
		],
		[
			-46,
			-21
		],
		[
			-31,
			18
		],
		[
			-15,
			52
		],
		[
			38,
			52
		],
		[
			-38,
			51
		],
		[
			30,
			12
		],
		[
			-15,
			130
		],
		[
			46,
			83
		],
		[
			-77,
			-60
		],
		[
			-7,
			-41
		],
		[
			15,
			-45
		],
		[
			-23,
			-13
		],
		[
			-8,
			-158
		],
		[
			31,
			-38
		],
		[
			-8,
			-45
		],
		[
			8,
			-52
		],
		[
			-115,
			63
		],
		[
			-23,
			52
		],
		[
			-39,
			-27
		],
		[
			-15,
			50
		]
	],
	[
		[
			21332,
			6598
		],
		[
			31,
			40
		],
		[
			23,
			54
		]
	],
	[
		[
			21386,
			6692
		],
		[
			23,
			31
		],
		[
			-31,
			34
		],
		[
			-15,
			-18
		]
	],
	[
		[
			21363,
			6739
		],
		[
			-23,
			32
		],
		[
			-47,
			15
		],
		[
			-23,
			79
		],
		[
			-30,
			5
		]
	],
	[
		[
			21240,
			6870
		],
		[
			-23,
			71
		],
		[
			-46,
			23
		],
		[
			-8,
			23
		],
		[
			-69,
			-12
		],
		[
			-16,
			-40
		],
		[
			-77,
			16
		],
		[
			-30,
			-38
		],
		[
			-23,
			11
		],
		[
			-46,
			-61
		],
		[
			-47,
			-32
		],
		[
			0,
			110
		],
		[
			8,
			64
		]
	],
	[
		[
			21647,
			7005
		],
		[
			8,
			-57
		],
		[
			0,
			-130
		],
		[
			7,
			-7
		],
		[
			0,
			-110
		],
		[
			8,
			-121
		],
		[
			138,
			-3
		]
	],
	[
		[
			21808,
			6577
		],
		[
			-38,
			-143
		]
	],
	[
		[
			21770,
			6434
		],
		[
			-85,
			-10
		],
		[
			-7,
			-15
		]
	],
	[
		[
			19680,
			4068
		],
		[
			-192,
			-3
		],
		[
			-369,
			1
		],
		[
			0,
			-61
		],
		[
			46,
			-47
		],
		[
			-8,
			-102
		],
		[
			-15,
			-31
		]
	],
	[
		[
			19142,
			3825
		],
		[
			-31,
			-11
		],
		[
			-54,
			54
		],
		[
			0,
			70
		],
		[
			-38,
			9
		],
		[
			-8,
			-102
		],
		[
			-61,
			11
		]
	],
	[
		[
			18950,
			3856
		],
		[
			0,
			169
		],
		[
			-8,
			43
		],
		[
			0,
			168
		],
		[
			-8,
			41
		],
		[
			0,
			104
		],
		[
			8,
			37
		],
		[
			0,
			90
		],
		[
			15,
			108
		],
		[
			0,
			82
		],
		[
			8,
			117
		],
		[
			46,
			566
		],
		[
			-15,
			32
		]
	],
	[
		[
			19549,
			5410
		],
		[
			8,
			-94
		],
		[
			31,
			-196
		],
		[
			0,
			-42
		],
		[
			15,
			-84
		],
		[
			23,
			-216
		],
		[
			15,
			-103
		],
		[
			16,
			-63
		],
		[
			23,
			-31
		],
		[
			0,
			-70
		],
		[
			15,
			-32
		],
		[
			-31,
			-25
		],
		[
			0,
			-62
		],
		[
			-15,
			-23
		],
		[
			0,
			-69
		],
		[
			15,
			-18
		],
		[
			0,
			-82
		],
		[
			-7,
			-78
		],
		[
			23,
			-54
		]
	],
	[
		[
			2382,
			11871
		],
		[
			-8,
			-32
		],
		[
			-46,
			-11
		],
		[
			-15,
			34
		],
		[
			23,
			24
		],
		[
			46,
			-15
		]
	],
	[
		[
			2182,
			11814
		],
		[
			39,
			-42
		],
		[
			92,
			-7
		],
		[
			-8,
			-41
		],
		[
			-84,
			-35
		],
		[
			-8,
			-32
		],
		[
			-46,
			-27
		],
		[
			-54,
			-2
		],
		[
			-130,
			-66
		],
		[
			0,
			46
		],
		[
			99,
			26
		],
		[
			8,
			46
		],
		[
			31,
			53
		],
		[
			-31,
			36
		],
		[
			46,
			36
		],
		[
			46,
			9
		]
	],
	[
		[
			1867,
			11563
		],
		[
			-23,
			-10
		],
		[
			-30,
			-58
		],
		[
			-62,
			-34
		],
		[
			-15,
			68
		],
		[
			38,
			36
		],
		[
			62,
			0
		],
		[
			-16,
			52
		],
		[
			46,
			40
		],
		[
			39,
			11
		],
		[
			46,
			-16
		],
		[
			-8,
			-47
		],
		[
			-77,
			-42
		]
	],
	[
		[
			74861,
			11417
		],
		[
			-30,
			35
		],
		[
			23,
			28
		],
		[
			77,
			-5
		],
		[
			38,
			-23
		],
		[
			-38,
			-47
		],
		[
			-47,
			-9
		],
		[
			-23,
			21
		]
	],
	[
		[
			8860,
			12986
		],
		[
			-31,
			-36
		]
	],
	[
		[
			8829,
			12950
		],
		[
			-38,
			5
		],
		[
			-54,
			76
		],
		[
			-23,
			7
		],
		[
			-31,
			65
		],
		[
			-46,
			29
		],
		[
			0,
			50
		],
		[
			46,
			29
		],
		[
			0,
			25
		],
		[
			85,
			-5
		],
		[
			31,
			25
		],
		[
			115,
			-63
		],
		[
			77,
			-25
		],
		[
			-23,
			-81
		],
		[
			38,
			-52
		],
		[
			8,
			-44
		],
		[
			-46,
			-14
		],
		[
			-116,
			74
		],
		[
			8,
			-65
		]
	],
	[
		[
			9060,
			13218
		],
		[
			92,
			-3
		],
		[
			-38,
			-56
		],
		[
			61,
			-108
		],
		[
			31,
			-20
		],
		[
			8,
			-86
		],
		[
			-108,
			-92
		],
		[
			-38,
			-22
		],
		[
			-16,
			74
		],
		[
			23,
			25
		],
		[
			-15,
			67
		],
		[
			-31,
			70
		],
		[
			8,
			20
		],
		[
			-16,
			106
		],
		[
			-30,
			40
		],
		[
			-8,
			66
		],
		[
			77,
			-81
		]
	],
	[
		[
			4557,
			12462
		],
		[
			31,
			-4
		],
		[
			0,
			-57
		],
		[
			-62,
			-6
		],
		[
			-8,
			36
		],
		[
			39,
			31
		]
	],
	[
		[
			9698,
			12253
		],
		[
			-46,
			-38
		],
		[
			-8,
			78
		],
		[
			54,
			-40
		]
	],
	[
		[
			3512,
			12266
		],
		[
			7,
			-51
		],
		[
			-76,
			4
		],
		[
			0,
			45
		],
		[
			38,
			21
		],
		[
			31,
			-19
		]
	],
	[
		[
			9705,
			12246
		],
		[
			39,
			-22
		],
		[
			15,
			-52
		],
		[
			-46,
			-14
		],
		[
			-8,
			88
		]
	],
	[
		[
			9329,
			12404
		],
		[
			38,
			18
		],
		[
			-30,
			60
		],
		[
			-47,
			-2
		],
		[
			-38,
			-29
		],
		[
			-23,
			27
		],
		[
			54,
			54
		],
		[
			-23,
			47
		],
		[
			7,
			29
		],
		[
			93,
			-9
		],
		[
			30,
			-31
		],
		[
			0,
			-39
		],
		[
			93,
			-69
		],
		[
			30,
			-47
		],
		[
			16,
			-90
		],
		[
			69,
			-79
		],
		[
			23,
			-85
		],
		[
			-8,
			-109
		],
		[
			-61,
			5
		],
		[
			-16,
			67
		],
		[
			-53,
			16
		],
		[
			15,
			50
		],
		[
			-69,
			42
		],
		[
			-77,
			16
		],
		[
			46,
			30
		],
		[
			-77,
			83
		],
		[
			8,
			45
		]
	],
	[
		[
			8852,
			12905
		],
		[
			-15,
			-74
		],
		[
			-38,
			29
		],
		[
			-8,
			77
		],
		[
			61,
			-32
		]
	],
	[
		[
			5248,
			13098
		],
		[
			-23,
			-27
		],
		[
			39,
			-36
		],
		[
			0,
			-69
		],
		[
			-62,
			-7
		],
		[
			0,
			-27
		],
		[
			-46,
			-18
		],
		[
			-7,
			-40
		],
		[
			-77,
			-25
		],
		[
			-69,
			6
		],
		[
			-31,
			-55
		],
		[
			-54,
			-61
		],
		[
			-46,
			-2
		],
		[
			61,
			69
		],
		[
			-23,
			16
		],
		[
			-69,
			-25
		],
		[
			-46,
			23
		],
		[
			0,
			71
		],
		[
			-38,
			28
		],
		[
			0,
			54
		],
		[
			38,
			44
		],
		[
			62,
			30
		],
		[
			61,
			15
		],
		[
			0,
			36
		],
		[
			61,
			23
		],
		[
			123,
			-5
		],
		[
			23,
			28
		],
		[
			39,
			-12
		],
		[
			100,
			-4
		],
		[
			-16,
			-30
		]
	],
	[
		[
			4918,
			12674
		],
		[
			-61,
			-21
		],
		[
			0,
			39
		],
		[
			61,
			-18
		]
	],
	[
		[
			9498,
			12691
		],
		[
			-54,
			-36
		],
		[
			-54,
			7
		],
		[
			-30,
			-24
		],
		[
			-100,
			-1
		],
		[
			-8,
			115
		],
		[
			-38,
			20
		],
		[
			0,
			84
		],
		[
			107,
			-30
		],
		[
			62,
			0
		],
		[
			38,
			-69
		],
		[
			77,
			-66
		]
	],
	[
		[
			9406,
			12635
		],
		[
			77,
			-6
		],
		[
			-8,
			-50
		],
		[
			-46,
			-11
		],
		[
			-39,
			27
		],
		[
			16,
			40
		]
	],
	[
		[
			8891,
			12894
		],
		[
			-16,
			13
		],
		[
			-7,
			0
		]
	],
	[
		[
			8868,
			12907
		],
		[
			-16,
			-2
		]
	],
	[
		[
			8852,
			12905
		],
		[
			-23,
			45
		]
	],
	[
		[
			8860,
			12986
		],
		[
			39,
			23
		],
		[
			61,
			-45
		],
		[
			46,
			-1
		],
		[
			0,
			-56
		],
		[
			54,
			-206
		],
		[
			-8,
			-147
		],
		[
			-15,
			-7
		],
		[
			-54,
			72
		],
		[
			-46,
			97
		],
		[
			-54,
			48
		],
		[
			23,
			31
		],
		[
			-15,
			99
		]
	],
	[
		[
			9160,
			12511
		],
		[
			-39,
			73
		],
		[
			16,
			31
		],
		[
			46,
			14
		],
		[
			-77,
			87
		],
		[
			-8,
			59
		],
		[
			69,
			25
		],
		[
			24,
			-34
		],
		[
			53,
			-18
		],
		[
			-23,
			-68
		],
		[
			0,
			-99
		],
		[
			-23,
			-24
		],
		[
			0,
			-43
		],
		[
			-38,
			-3
		]
	],
	[
		[
			1637,
			14960
		],
		[
			123,
			-13
		],
		[
			-31,
			-54
		],
		[
			-92,
			9
		],
		[
			-100,
			-72
		],
		[
			-15,
			41
		],
		[
			-93,
			33
		],
		[
			-53,
			56
		],
		[
			-93,
			27
		],
		[
			-77,
			-13
		],
		[
			-38,
			-27
		],
		[
			-61,
			20
		],
		[
			-23,
			41
		],
		[
			23,
			53
		],
		[
			46,
			5
		],
		[
			138,
			-29
		],
		[
			92,
			43
		],
		[
			77,
			-28
		],
		[
			15,
			-45
		],
		[
			162,
			-47
		]
	],
	[
		[
			6286,
			14029
		],
		[
			-23,
			-56
		],
		[
			-8,
			-70
		],
		[
			-54,
			7
		],
		[
			31,
			84
		],
		[
			54,
			35
		]
	],
	[
		[
			2398,
			13892
		],
		[
			15,
			-61
		],
		[
			23,
			-24
		],
		[
			-100,
			-18
		],
		[
			-38,
			-39
		],
		[
			-39,
			34
		],
		[
			-54,
			0
		],
		[
			-76,
			48
		],
		[
			-77,
			26
		],
		[
			7,
			57
		],
		[
			77,
			-12
		],
		[
			39,
			36
		],
		[
			138,
			34
		],
		[
			8,
			-29
		],
		[
			84,
			-9
		],
		[
			-7,
			-43
		]
	],
	[
		[
			5909,
			13813
		],
		[
			-53,
			-9
		],
		[
			-16,
			-56
		],
		[
			-46,
			-7
		],
		[
			-54,
			-53
		],
		[
			-69,
			-43
		],
		[
			-69,
			-5
		],
		[
			-31,
			-56
		],
		[
			-46,
			-16
		],
		[
			-69,
			12
		],
		[
			-69,
			-29
		],
		[
			-46,
			29
		],
		[
			15,
			60
		],
		[
			100,
			39
		],
		[
			54,
			8
		],
		[
			23,
			77
		],
		[
			-92,
			-54
		],
		[
			-77,
			36
		],
		[
			30,
			92
		],
		[
			70,
			74
		],
		[
			23,
			52
		],
		[
			0,
			45
		],
		[
			-23,
			70
		],
		[
			76,
			22
		],
		[
			77,
			56
		],
		[
			62,
			27
		],
		[
			69,
			-42
		],
		[
			61,
			18
		],
		[
			-30,
			97
		],
		[
			-123,
			-1
		],
		[
			-16,
			10
		],
		[
			-100,
			-36
		],
		[
			-30,
			-45
		],
		[
			-62,
			-10
		],
		[
			-54,
			-33
		],
		[
			-30,
			-63
		],
		[
			-100,
			-77
		],
		[
			23,
			-35
		],
		[
			-85,
			-59
		],
		[
			8,
			-61
		],
		[
			-85,
			-83
		],
		[
			-15,
			-34
		],
		[
			-61,
			-24
		],
		[
			-23,
			24
		],
		[
			-54,
			-76
		],
		[
			-92,
			-56
		],
		[
			-16,
			-50
		],
		[
			39,
			-25
		],
		[
			69,
			0
		],
		[
			46,
			-27
		],
		[
			23,
			-54
		],
		[
			-8,
			-38
		],
		[
			-54,
			-38
		],
		[
			-53,
			-2
		],
		[
			-54,
			-83
		],
		[
			-8,
			-72
		],
		[
			-69,
			-30
		],
		[
			-108,
			-18
		],
		[
			-7,
			-40
		],
		[
			-115,
			-38
		],
		[
			-31,
			-74
		],
		[
			-39,
			-5
		],
		[
			-23,
			-32
		],
		[
			-69,
			-8
		],
		[
			8,
			-79
		],
		[
			-54,
			-54
		],
		[
			-92,
			-38
		],
		[
			-46,
			-48
		],
		[
			-54,
			12
		],
		[
			-46,
			-65
		],
		[
			-46,
			-12
		],
		[
			0,
			-33
		],
		[
			-92,
			2
		],
		[
			-39,
			-34
		],
		[
			62,
			-38
		],
		[
			-39,
			-38
		],
		[
			0,
			-30
		],
		[
			-46,
			-6
		],
		[
			-8,
			-30
		],
		[
			-184,
			-34
		],
		[
			-8,
			-71
		],
		[
			-30,
			11
		],
		[
			15,
			42
		],
		[
			-39,
			18
		],
		[
			-38,
			-17
		],
		[
			-31,
			-48
		],
		[
			-61,
			-20
		],
		[
			-31,
			-43
		],
		[
			-100,
			-15
		],
		[
			-46,
			-25
		],
		[
			-100,
			16
		],
		[
			-38,
			-47
		],
		[
			-31,
			-9
		],
		[
			15,
			-45
		],
		[
			-53,
			-27
		],
		[
			-47,
			4
		],
		[
			-23,
			72
		],
		[
			-38,
			-18
		],
		[
			31,
			-61
		],
		[
			-62,
			-31
		],
		[
			-38,
			6
		],
		[
			-77,
			-51
		],
		[
			-8,
			-45
		],
		[
			-30,
			-16
		],
		[
			-85,
			7
		],
		[
			-61,
			-20
		],
		[
			-47,
			-52
		],
		[
			-84,
			0
		],
		[
			-15,
			63
		],
		[
			46,
			20
		],
		[
			61,
			90
		],
		[
			31,
			-9
		],
		[
			107,
			50
		],
		[
			108,
			-36
		],
		[
			-8,
			58
		],
		[
			146,
			83
		],
		[
			16,
			34
		],
		[
			69,
			77
		],
		[
			100,
			69
		],
		[
			84,
			22
		],
		[
			77,
			-2
		],
		[
			16,
			-49
		],
		[
			92,
			49
		],
		[
			31,
			108
		],
		[
			115,
			90
		],
		[
			107,
			41
		],
		[
			70,
			49
		],
		[
			76,
			-9
		],
		[
			0,
			92
		],
		[
			62,
			72
		],
		[
			77,
			43
		],
		[
			61,
			54
		],
		[
			46,
			306
		],
		[
			92,
			79
		],
		[
			24,
			63
		],
		[
			-254,
			-93
		],
		[
			-46,
			45
		],
		[
			-85,
			39
		],
		[
			-23,
			-48
		],
		[
			31,
			-76
		],
		[
			-15,
			-30
		],
		[
			-54,
			3
		],
		[
			-85,
			128
		],
		[
			-46,
			16
		],
		[
			-54,
			-23
		],
		[
			-30,
			36
		],
		[
			-46,
			5
		],
		[
			-23,
			54
		],
		[
			-85,
			-52
		],
		[
			-123,
			-54
		],
		[
			-8,
			-25
		],
		[
			-84,
			-24
		],
		[
			-23,
			24
		],
		[
			23,
			36
		],
		[
			-16,
			92
		],
		[
			-46,
			68
		],
		[
			62,
			74
		],
		[
			0,
			29
		],
		[
			-69,
			133
		],
		[
			-62,
			76
		],
		[
			-23,
			-60
		],
		[
			-92,
			-25
		],
		[
			-54,
			-27
		],
		[
			-84,
			-14
		],
		[
			-77,
			0
		],
		[
			-62,
			37
		],
		[
			8,
			38
		],
		[
			-46,
			16
		],
		[
			-69,
			72
		],
		[
			-54,
			17
		],
		[
			-46,
			54
		],
		[
			38,
			128
		],
		[
			-77,
			63
		],
		[
			-46,
			16
		],
		[
			-15,
			61
		],
		[
			-39,
			4
		],
		[
			-15,
			120
		],
		[
			-38,
			52
		],
		[
			69,
			2
		],
		[
			15,
			107
		],
		[
			123,
			129
		],
		[
			62,
			38
		],
		[
			-8,
			68
		],
		[
			46,
			87
		],
		[
			46,
			40
		],
		[
			85,
			16
		],
		[
			69,
			-26
		],
		[
			84,
			-50
		],
		[
			62,
			9
		],
		[
			38,
			45
		],
		[
			62,
			29
		],
		[
			69,
			86
		],
		[
			46,
			-30
		],
		[
			108,
			0
		],
		[
			84,
			29
		],
		[
			77,
			73
		],
		[
			-38,
			99
		],
		[
			0,
			53
		],
		[
			-77,
			66
		],
		[
			23,
			33
		],
		[
			84,
			38
		],
		[
			8,
			36
		],
		[
			-92,
			55
		],
		[
			-46,
			-41
		],
		[
			-54,
			11
		],
		[
			-192,
			-92
		],
		[
			-16,
			-45
		],
		[
			-115,
			81
		],
		[
			-61,
			-31
		],
		[
			-77,
			15
		],
		[
			-92,
			-4
		],
		[
			-162,
			-45
		],
		[
			-84,
			22
		],
		[
			-177,
			29
		],
		[
			-54,
			46
		],
		[
			16,
			51
		],
		[
			-93,
			68
		],
		[
			77,
			31
		],
		[
			31,
			38
		],
		[
			-161,
			37
		],
		[
			-70,
			4
		],
		[
			-92,
			47
		],
		[
			-54,
			12
		],
		[
			0,
			36
		],
		[
			169,
			69
		],
		[
			100,
			56
		],
		[
			246,
			104
		],
		[
			108,
			34
		],
		[
			169,
			40
		],
		[
			138,
			0
		],
		[
			-38,
			-131
		],
		[
			30,
			-38
		],
		[
			131,
			-7
		],
		[
			92,
			10
		],
		[
			77,
			-21
		],
		[
			54,
			14
		],
		[
			61,
			-16
		],
		[
			77,
			81
		],
		[
			62,
			-18
		],
		[
			23,
			40
		],
		[
			-92,
			23
		],
		[
			-77,
			2
		],
		[
			0,
			38
		],
		[
			-77,
			66
		],
		[
			-54,
			11
		],
		[
			-31,
			36
		],
		[
			62,
			29
		],
		[
			46,
			-47
		],
		[
			15,
			-50
		],
		[
			39,
			-38
		],
		[
			69,
			-33
		],
		[
			46,
			13
		],
		[
			-115,
			77
		],
		[
			15,
			60
		],
		[
			31,
			27
		],
		[
			-31,
			29
		],
		[
			-92,
			-18
		],
		[
			-138,
			3
		],
		[
			-185,
			40
		],
		[
			0,
			45
		],
		[
			-69,
			112
		],
		[
			-100,
			46
		],
		[
			-154,
			92
		],
		[
			-123,
			34
		],
		[
			-61,
			46
		],
		[
			-123,
			46
		],
		[
			69,
			17
		],
		[
			39,
			86
		],
		[
			-8,
			68
		],
		[
			192,
			-7
		],
		[
			231,
			24
		],
		[
			130,
			54
		],
		[
			115,
			95
		],
		[
			16,
			130
		],
		[
			123,
			75
		],
		[
			31,
			42
		],
		[
			84,
			63
		],
		[
			85,
			-20
		],
		[
			146,
			36
		],
		[
			76,
			41
		],
		[
			177,
			112
		],
		[
			77,
			-12
		],
		[
			138,
			9
		],
		[
			177,
			25
		],
		[
			123,
			65
		],
		[
			92,
			79
		],
		[
			54,
			7
		],
		[
			108,
			-23
		],
		[
			7,
			-24
		],
		[
			100,
			-2
		],
		[
			8,
			-32
		],
		[
			-62,
			-34
		],
		[
			-30,
			-47
		],
		[
			69,
			-2
		],
		[
			38,
			42
		],
		[
			85,
			43
		],
		[
			61,
			3
		],
		[
			46,
			-32
		],
		[
			-7,
			-52
		],
		[
			92,
			-22
		],
		[
			46,
			36
		],
		[
			154,
			16
		],
		[
			207,
			-27
		],
		[
			-38,
			-77
		],
		[
			130,
			-24
		],
		[
			-15,
			-37
		],
		[
			123,
			-8
		],
		[
			192,
			29
		],
		[
			77,
			-20
		],
		[
			46,
			26
		],
		[
			146,
			-9
		],
		[
			46,
			-22
		],
		[
			85,
			-4
		],
		[
			153,
			-39
		],
		[
			16,
			-25
		],
		[
			315,
			-13
		],
		[
			107,
			-14
		],
		[
			131,
			-49
		],
		[
			123,
			-9
		],
		[
			215,
			63
		],
		[
			185,
			-38
		],
		[
			138,
			-61
		],
		[
			146,
			-56
		],
		[
			92,
			-16
		],
		[
			0,
			-387
		],
		[
			0,
			-895
		],
		[
			0,
			-1252
		],
		[
			0,
			-149
		],
		[
			0,
			-463
		],
		[
			100,
			-27
		],
		[
			8,
			29
		],
		[
			107,
			-42
		],
		[
			62,
			52
		],
		[
			130,
			6
		],
		[
			-23,
			-90
		],
		[
			39,
			-33
		],
		[
			69,
			-28
		],
		[
			8,
			-40
		],
		[
			222,
			-186
		],
		[
			39,
			-111
		],
		[
			130,
			84
		],
		[
			54,
			2
		],
		[
			23,
			40
		],
		[
			0,
			61
		],
		[
			39,
			0
		],
		[
			7,
			54
		],
		[
			70,
			13
		],
		[
			99,
			45
		],
		[
			93,
			-79
		],
		[
			-8,
			-47
		],
		[
			23,
			-49
		],
		[
			54,
			-11
		],
		[
			46,
			-39
		],
		[
			54,
			-92
		],
		[
			84,
			-43
		],
		[
			139,
			-191
		],
		[
			23,
			-54
		],
		[
			153,
			-220
		],
		[
			23,
			-45
		],
		[
			-23,
			-40
		],
		[
			69,
			-16
		],
		[
			-15,
			-59
		],
		[
			54,
			-24
		],
		[
			8,
			-68
		],
		[
			53,
			5
		],
		[
			108,
			-70
		],
		[
			61,
			-13
		],
		[
			70,
			-43
		],
		[
			7,
			-34
		],
		[
			69,
			-7
		],
		[
			24,
			-69
		],
		[
			-31,
			-41
		],
		[
			7,
			-94
		],
		[
			31,
			-79
		],
		[
			-31,
			-27
		],
		[
			-46,
			-94
		],
		[
			-53,
			-43
		],
		[
			-54,
			-9
		],
		[
			-23,
			15
		],
		[
			-8,
			93
		],
		[
			-23,
			36
		],
		[
			46,
			40
		],
		[
			-23,
			23
		],
		[
			-15,
			-30
		],
		[
			-23,
			-31
		],
		[
			-108,
			47
		],
		[
			-38,
			45
		],
		[
			30,
			29
		],
		[
			-7,
			65
		],
		[
			-23,
			32
		],
		[
			0,
			-60
		],
		[
			-31,
			-55
		],
		[
			-46,
			28
		],
		[
			7,
			112
		],
		[
			-46,
			0
		],
		[
			-23,
			49
		],
		[
			-46,
			5
		],
		[
			-8,
			47
		],
		[
			39,
			38
		],
		[
			46,
			5
		],
		[
			0,
			106
		],
		[
			-31,
			6
		],
		[
			-69,
			59
		],
		[
			-69,
			80
		],
		[
			-85,
			28
		],
		[
			0,
			24
		],
		[
			23,
			32
		],
		[
			-23,
			69
		],
		[
			-30,
			21
		],
		[
			-8,
			61
		],
		[
			-38,
			62
		],
		[
			-39,
			30
		],
		[
			-8,
			40
		],
		[
			-115,
			22
		],
		[
			-77,
			145
		],
		[
			16,
			22
		],
		[
			-92,
			49
		],
		[
			46,
			-92
		],
		[
			-8,
			-24
		],
		[
			23,
			-66
		],
		[
			-8,
			-49
		],
		[
			-46,
			13
		],
		[
			-61,
			63
		],
		[
			-62,
			-16
		],
		[
			-23,
			36
		],
		[
			23,
			39
		],
		[
			-38,
			69
		],
		[
			-39,
			-18
		],
		[
			-146,
			73
		],
		[
			0,
			-25
		],
		[
			77,
			-20
		],
		[
			69,
			-64
		],
		[
			39,
			-60
		],
		[
			-8,
			-43
		],
		[
			-130,
			-20
		],
		[
			-62,
			42
		],
		[
			-31,
			0
		],
		[
			-92,
			61
		],
		[
			-77,
			65
		],
		[
			0,
			36
		],
		[
			-77,
			57
		],
		[
			-69,
			24
		],
		[
			-46,
			32
		],
		[
			-154,
			67
		],
		[
			-38,
			27
		],
		[
			8,
			29
		],
		[
			-8,
			7
		],
		[
			38,
			43
		],
		[
			-46,
			36
		],
		[
			-107,
			-49
		],
		[
			-139,
			15
		],
		[
			-107,
			45
		],
		[
			31,
			52
		],
		[
			-100,
			-23
		],
		[
			-169,
			41
		],
		[
			-62,
			4
		],
		[
			-169,
			-20
		],
		[
			-61,
			-18
		],
		[
			-77,
			61
		],
		[
			-85,
			13
		],
		[
			-30,
			30
		],
		[
			-8,
			51
		],
		[
			-69,
			-8
		],
		[
			-39,
			-28
		],
		[
			-100,
			61
		],
		[
			-7,
			32
		],
		[
			-123,
			27
		],
		[
			-69,
			89
		],
		[
			-85,
			-6
		],
		[
			-54,
			-21
		],
		[
			-54,
			30
		],
		[
			-53,
			-48
		],
		[
			-54,
			1
		],
		[
			-23,
			-37
		],
		[
			8,
			-37
		],
		[
			46,
			-30
		],
		[
			7,
			-33
		],
		[
			-53,
			-28
		],
		[
			30,
			-47
		],
		[
			-15,
			-49
		],
		[
			-62,
			-34
		],
		[
			-107,
			5
		],
		[
			-85,
			-10
		]
	],
	[
		[
			561,
			11234
		],
		[
			23,
			47
		],
		[
			46,
			-31
		],
		[
			-54,
			-76
		],
		[
			-15,
			60
		]
	],
	[
		[
			31,
			11095
		],
		[
			46,
			-9
		],
		[
			61,
			11
		],
		[
			0,
			-43
		],
		[
			-53,
			5
		],
		[
			-16,
			-22
		],
		[
			-61,
			2
		],
		[
			-8,
			38
		],
		[
			31,
			18
		]
	],
	[
		[
			5287,
			13242
		],
		[
			-8,
			-40
		],
		[
			-46,
			2
		],
		[
			-108,
			-49
		],
		[
			-92,
			29
		],
		[
			46,
			47
		],
		[
			23,
			-6
		],
		[
			93,
			107
		],
		[
			0,
			27
		],
		[
			69,
			16
		],
		[
			-39,
			-70
		],
		[
			8,
			-25
		],
		[
			108,
			-2
		],
		[
			0,
			-45
		],
		[
			-54,
			9
		]
	],
	[
		[
			6547,
			13993
		],
		[
			0,
			-4
		],
		[
			-15,
			-45
		],
		[
			-54,
			-29
		],
		[
			-15,
			52
		],
		[
			46,
			33
		],
		[
			38,
			-7
		]
	],
	[
		[
			6224,
			13755
		],
		[
			-15,
			23
		],
		[
			46,
			54
		],
		[
			69,
			45
		],
		[
			77,
			74
		],
		[
			15,
			-32
		],
		[
			-53,
			-36
		],
		[
			-85,
			-97
		],
		[
			-54,
			-31
		]
	],
	[
		[
			3389,
			13346
		],
		[
			8,
			51
		],
		[
			61,
			25
		],
		[
			-23,
			-65
		],
		[
			-46,
			-11
		]
	],
	[
		[
			9459,
			12039
		],
		[
			-30,
			11
		],
		[
			-77,
			127
		],
		[
			0,
			53
		],
		[
			23,
			7
		],
		[
			46,
			-117
		],
		[
			38,
			-31
		],
		[
			0,
			-50
		]
	],
	[
		[
			8891,
			12894
		],
		[
			-16,
			-7
		],
		[
			-7,
			20
		]
	],
	[
		[
			14531,
			6089
		],
		[
			0,
			-467
		],
		[
			0,
			-369
		],
		[
			0,
			-490
		],
		[
			0,
			-329
		],
		[
			0,
			-254
		]
	],
	[
		[
			14531,
			4180
		],
		[
			-169,
			0
		],
		[
			-269,
			0
		],
		[
			-246,
			124
		],
		[
			-138,
			65
		],
		[
			-292,
			144
		],
		[
			-123,
			58
		],
		[
			23,
			75
		]
	],
	[
		[
			13317,
			4646
		],
		[
			31,
			6
		],
		[
			23,
			36
		],
		[
			-8,
			63
		],
		[
			-38,
			1
		],
		[
			0,
			83
		],
		[
			-8,
			45
		],
		[
			38,
			44
		],
		[
			8,
			140
		],
		[
			16,
			50
		],
		[
			46,
			27
		],
		[
			15,
			44
		],
		[
			-38,
			45
		],
		[
			-31,
			88
		],
		[
			-39,
			52
		],
		[
			0,
			45
		]
	],
	[
		[
			18542,
			5413
		],
		[
			16,
			-30
		],
		[
			-46,
			-24
		],
		[
			-8,
			-63
		],
		[
			-38,
			-92
		],
		[
			-39,
			-34
		],
		[
			8,
			-43
		],
		[
			-31,
			-43
		],
		[
			-38,
			-81
		],
		[
			0,
			-117
		],
		[
			7,
			-101
		],
		[
			-15,
			-43
		]
	],
	[
		[
			18358,
			4742
		],
		[
			-223,
			1
		],
		[
			-130,
			4
		],
		[
			-262,
			0
		]
	],
	[
		[
			17651,
			4956
		],
		[
			0,
			339
		],
		[
			8,
			72
		],
		[
			0,
			216
		],
		[
			-16,
			77
		],
		[
			0,
			58
		],
		[
			-15,
			84
		],
		[
			-8,
			117
		]
	],
	[
		[
			17620,
			5919
		],
		[
			277,
			0
		],
		[
			215,
			0
		],
		[
			277,
			0
		],
		[
			184,
			0
		],
		[
			16,
			-50
		],
		[
			-8,
			-41
		],
		[
			-23,
			-15
		],
		[
			-31,
			-63
		],
		[
			138,
			2
		]
	],
	[
		[
			11281,
			7771
		],
		[
			123,
			0
		],
		[
			353,
			3
		],
		[
			100,
			-3
		],
		[
			261,
			-2
		],
		[
			69,
			2
		]
	],
	[
		[
			13317,
			4646
		],
		[
			-161,
			-18
		],
		[
			-354,
			-43
		],
		[
			-7,
			45
		],
		[
			-24,
			0
		],
		[
			0,
			88
		],
		[
			-7,
			54
		],
		[
			-54,
			92
		],
		[
			-123,
			132
		],
		[
			-31,
			-18
		],
		[
			-30,
			10
		],
		[
			7,
			36
		],
		[
			-15,
			44
		],
		[
			-23,
			23
		],
		[
			-54,
			-9
		],
		[
			-69,
			29
		],
		[
			-23,
			21
		],
		[
			-8,
			36
		],
		[
			-61,
			49
		],
		[
			-69,
			-2
		],
		[
			-24,
			18
		],
		[
			-99,
			-3
		],
		[
			-23,
			36
		],
		[
			-24,
			117
		],
		[
			8,
			81
		],
		[
			-54,
			27
		],
		[
			8,
			59
		],
		[
			-46,
			36
		],
		[
			-23,
			43
		],
		[
			-23,
			9
		],
		[
			-8,
			40
		],
		[
			-31,
			34
		],
		[
			-53,
			105
		],
		[
			-31,
			21
		],
		[
			-16,
			49
		],
		[
			0,
			56
		],
		[
			24,
			25
		],
		[
			7,
			54
		],
		[
			-15,
			43
		],
		[
			-54,
			7
		],
		[
			-61,
			78
		],
		[
			0,
			65
		],
		[
			-23,
			39
		],
		[
			0,
			101
		],
		[
			23,
			6
		],
		[
			0,
			-69
		],
		[
			53,
			-14
		],
		[
			-7,
			43
		],
		[
			-31,
			29
		],
		[
			-8,
			122
		],
		[
			-30,
			-9
		],
		[
			0,
			-99
		],
		[
			-108,
			76
		],
		[
			8,
			77
		],
		[
			-23,
			9
		],
		[
			-8,
			51
		],
		[
			-31,
			20
		],
		[
			-46,
			75
		],
		[
			-54,
			61
		],
		[
			8,
			47
		],
		[
			-31,
			96
		],
		[
			16,
			74
		],
		[
			-16,
			81
		],
		[
			-54,
			93
		],
		[
			-61,
			60
		],
		[
			-8,
			70
		],
		[
			62,
			178
		],
		[
			-8,
			52
		],
		[
			23,
			99
		],
		[
			-23,
			101
		],
		[
			-23,
			18
		],
		[
			8,
			69
		]
	],
	[
		[
			16030,
			6085
		],
		[
			-208,
			4
		]
	],
	[
		[
			15822,
			6089
		],
		[
			-154,
			-2
		],
		[
			-215,
			0
		],
		[
			-207,
			0
		],
		[
			-246,
			-2
		],
		[
			-8,
			4
		],
		[
			-238,
			0
		],
		[
			-223,
			0
		]
	],
	[
		[
			14531,
			7436
		],
		[
			361,
			0
		],
		[
			346,
			-2
		],
		[
			192,
			0
		],
		[
			169,
			2
		]
	],
	[
		[
			15599,
			7436
		],
		[
			262,
			0
		],
		[
			169,
			0
		],
		[
			0,
			-337
		]
	],
	[
		[
			16030,
			7099
		],
		[
			0,
			-400
		],
		[
			0,
			-346
		],
		[
			0,
			-268
		]
	],
	[
		[
			22508,
			7576
		],
		[
			-16,
			-29
		],
		[
			-84,
			-16
		],
		[
			-146,
			-9
		],
		[
			-46,
			-38
		],
		[
			-39,
			-9
		],
		[
			-38,
			-34
		],
		[
			-31,
			-5
		],
		[
			-15,
			34
		]
	],
	[
		[
			21708,
			6993
		],
		[
			-15,
			-33
		],
		[
			0,
			-50
		],
		[
			38,
			-60
		],
		[
			0,
			-68
		],
		[
			24,
			-49
		],
		[
			38,
			-45
		],
		[
			15,
			-41
		],
		[
			0,
			-70
		]
	],
	[
		[
			19680,
			4068
		],
		[
			30,
			-97
		],
		[
			77,
			-7
		],
		[
			231,
			-17
		],
		[
			253,
			-25
		],
		[
			8,
			-66
		],
		[
			31,
			-4
		],
		[
			8,
			88
		],
		[
			-8,
			43
		],
		[
			15,
			24
		],
		[
			116,
			-38
		]
	],
	[
		[
			20441,
			3969
		],
		[
			7,
			-146
		],
		[
			31,
			-131
		],
		[
			0,
			-49
		],
		[
			23,
			-63
		],
		[
			38,
			-137
		],
		[
			23,
			-45
		],
		[
			31,
			-86
		],
		[
			31,
			-54
		],
		[
			8,
			-40
		],
		[
			-16,
			-29
		],
		[
			8,
			-99
		],
		[
			31,
			-79
		],
		[
			38,
			-162
		],
		[
			23,
			-63
		],
		[
			0,
			-29
		],
		[
			23,
			-85
		],
		[
			0,
			-117
		],
		[
			-15,
			-122
		],
		[
			0,
			-119
		],
		[
			-31,
			-23
		],
		[
			-15,
			-63
		],
		[
			0,
			-67
		],
		[
			-16,
			-31
		],
		[
			-61,
			-34
		],
		[
			-85,
			-7
		],
		[
			-15,
			11
		],
		[
			0,
			102
		],
		[
			-38,
			87
		],
		[
			0,
			25
		],
		[
			-39,
			36
		],
		[
			-54,
			16
		],
		[
			-15,
			87
		],
		[
			0,
			41
		],
		[
			-38,
			61
		],
		[
			-24,
			-9
		],
		[
			0,
			72
		],
		[
			-30,
			29
		],
		[
			-31,
			69
		],
		[
			-8,
			38
		],
		[
			-53,
			131
		],
		[
			61,
			103
		],
		[
			0,
			30
		],
		[
			-31,
			-12
		],
		[
			-15,
			-49
		],
		[
			-23,
			-2
		],
		[
			-23,
			40
		],
		[
			0,
			50
		],
		[
			7,
			16
		],
		[
			31,
			154
		],
		[
			0,
			77
		],
		[
			-31,
			151
		],
		[
			-61,
			16
		],
		[
			0,
			24
		],
		[
			-31,
			57
		],
		[
			-38,
			27
		],
		[
			0,
			53
		],
		[
			-31,
			21
		],
		[
			-15,
			51
		],
		[
			-77,
			72
		],
		[
			-54,
			-4
		],
		[
			-31,
			-21
		],
		[
			8,
			-44
		],
		[
			-38,
			6
		],
		[
			-62,
			-52
		],
		[
			-38,
			-15
		],
		[
			-69,
			-7
		],
		[
			0,
			52
		],
		[
			-62,
			74
		],
		[
			-69,
			58
		],
		[
			-77,
			43
		],
		[
			-77,
			11
		],
		[
			-46,
			-6
		],
		[
			-138,
			-34
		]
	],
	[
		[
			20079,
			5415
		],
		[
			0,
			-25
		],
		[
			-38,
			-34
		],
		[
			-8,
			-49
		],
		[
			39,
			-25
		],
		[
			23,
			-40
		],
		[
			38,
			-3
		],
		[
			8,
			-40
		],
		[
			23,
			-36
		],
		[
			0,
			-36
		],
		[
			31,
			-59
		],
		[
			69,
			-65
		],
		[
			15,
			-56
		],
		[
			39,
			-22
		],
		[
			15,
			-68
		],
		[
			38,
			-45
		],
		[
			0,
			-24
		],
		[
			54,
			-37
		],
		[
			16,
			-53
		],
		[
			7,
			-93
		],
		[
			39,
			-27
		],
		[
			15,
			-65
		],
		[
			8,
			-72
		],
		[
			46,
			-25
		]
	],
	[
		[
			20556,
			4416
		],
		[
			-8,
			-47
		],
		[
			-38,
			-58
		],
		[
			-16,
			-74
		],
		[
			-23,
			-46
		],
		[
			0,
			-54
		],
		[
			-23,
			-24
		],
		[
			0,
			-75
		],
		[
			-7,
			-69
		]
	],
	[
		[
			3742,
			1111
		],
		[
			23,
			-3
		],
		[
			0,
			-85
		],
		[
			-23,
			-25
		],
		[
			-46,
			10
		],
		[
			-31,
			35
		],
		[
			16,
			45
		],
		[
			31,
			23
		],
		[
			30,
			0
		]
	],
	[
		[
			4034,
			917
		],
		[
			23,
			23
		],
		[
			31,
			-61
		],
		[
			-8,
			-22
		],
		[
			47,
			-52
		],
		[
			-31,
			-13
		],
		[
			-39,
			18
		],
		[
			-23,
			-10
		],
		[
			-30,
			55
		],
		[
			0,
			27
		],
		[
			30,
			35
		]
	],
	[
		[
			4211,
			776
		],
		[
			77,
			-21
		],
		[
			-39,
			-20
		],
		[
			-38,
			-4
		],
		[
			0,
			45
		]
	],
	[
		[
			4265,
			675
		],
		[
			23,
			-3
		],
		[
			15,
			-42
		],
		[
			-38,
			-12
		],
		[
			0,
			57
		]
	],
	[
		[
			4349,
			708
		],
		[
			31,
			-43
		],
		[
			39,
			18
		],
		[
			46,
			-47
		],
		[
			15,
			-38
		],
		[
			-31,
			-22
		],
		[
			-54,
			-18
		],
		[
			-30,
			67
		],
		[
			-31,
			31
		],
		[
			15,
			52
		]
	],
	[
		[
			4526,
			447
		],
		[
			31,
			-35
		],
		[
			69,
			-36
		],
		[
			46,
			-55
		],
		[
			0,
			-51
		],
		[
			62,
			-81
		],
		[
			-31,
			-40
		],
		[
			-39,
			-30
		],
		[
			-30,
			0
		],
		[
			-54,
			-49
		],
		[
			-15,
			-54
		],
		[
			-16,
			-16
		],
		[
			-54,
			54
		],
		[
			8,
			99
		],
		[
			-15,
			70
		],
		[
			-23,
			40
		],
		[
			0,
			27
		],
		[
			30,
			23
		],
		[
			23,
			62
		],
		[
			-23,
			57
		],
		[
			31,
			15
		]
	],
	[
		[
			12825,
			7773
		],
		[
			0,
			343
		],
		[
			0,
			285
		],
		[
			23,
			104
		],
		[
			-15,
			24
		],
		[
			-54,
			14
		],
		[
			0,
			67
		],
		[
			16,
			13
		],
		[
			23,
			75
		],
		[
			46,
			52
		],
		[
			0,
			45
		],
		[
			23,
			35
		],
		[
			7,
			61
		],
		[
			47,
			84
		],
		[
			-16,
			62
		],
		[
			-54,
			23
		],
		[
			-23,
			58
		]
	],
	[
		[
			12818,
			10130
		],
		[
			215,
			0
		]
	],
	[
		[
			14101,
			8604
		],
		[
			0,
			-471
		],
		[
			0,
			-360
		]
	],
	[
		[
			19027,
			6357
		],
		[
			-23,
			-36
		],
		[
			15,
			-74
		],
		[
			-85,
			-21
		],
		[
			-7,
			-54
		],
		[
			15,
			-51
		],
		[
			-23,
			-11
		],
		[
			-54,
			42
		],
		[
			-46,
			12
		],
		[
			-38,
			-72
		]
	],
	[
		[
			18781,
			6092
		],
		[
			15,
			-11
		]
	],
	[
		[
			18781,
			6092
		],
		[
			-39,
			6
		],
		[
			0,
			27
		],
		[
			-30,
			52
		],
		[
			23,
			40
		],
		[
			-23,
			41
		],
		[
			0,
			67
		],
		[
			-31,
			32
		],
		[
			-62,
			25
		],
		[
			0,
			33
		],
		[
			-61,
			41
		],
		[
			-31,
			45
		],
		[
			0,
			38
		],
		[
			39,
			83
		],
		[
			0,
			54
		],
		[
			15,
			36
		],
		[
			-23,
			23
		],
		[
			-54,
			15
		],
		[
			-23,
			-31
		],
		[
			-23,
			43
		],
		[
			0,
			72
		],
		[
			-23,
			36
		],
		[
			-54,
			47
		],
		[
			-23,
			47
		],
		[
			-46,
			43
		],
		[
			-23,
			94
		],
		[
			0,
			104
		],
		[
			15,
			20
		],
		[
			0,
			2
		]
	],
	[
		[
			18304,
			7227
		],
		[
			8,
			65
		],
		[
			54,
			28
		],
		[
			7,
			60
		],
		[
			31,
			29
		],
		[
			0,
			66
		],
		[
			-31,
			33
		],
		[
			8,
			68
		],
		[
			85,
			15
		],
		[
			69,
			43
		],
		[
			7,
			54
		],
		[
			31,
			34
		],
		[
			0,
			92
		],
		[
			-54,
			36
		],
		[
			0,
			34
		],
		[
			-46,
			60
		]
	],
	[
		[
			19080,
			7938
		],
		[
			-7,
			-88
		],
		[
			30,
			-52
		],
		[
			16,
			-85
		],
		[
			15,
			-40
		]
	],
	[
		[
			19134,
			7673
		],
		[
			0,
			-234
		],
		[
			0,
			-336
		],
		[
			0,
			-227
		],
		[
			-23,
			-80
		],
		[
			31,
			-50
		],
		[
			-8,
			-45
		],
		[
			8,
			-41
		],
		[
			-31,
			-36
		],
		[
			0,
			-29
		],
		[
			-46,
			-69
		],
		[
			-15,
			-3
		],
		[
			-23,
			-85
		],
		[
			0,
			-81
		]
	],
	[
		[
			19134,
			7673
		],
		[
			62,
			-28
		],
		[
			92,
			46
		]
	],
	[
		[
			19718,
			6796
		],
		[
			-15,
			-68
		],
		[
			15,
			-40
		],
		[
			-38,
			-1
		],
		[
			-46,
			-31
		],
		[
			-16,
			20
		],
		[
			-38,
			-9
		],
		[
			8,
			-65
		],
		[
			-47,
			-34
		],
		[
			0,
			-33
		],
		[
			-38,
			-14
		],
		[
			-23,
			-92
		],
		[
			-23,
			-5
		],
		[
			-92,
			45
		],
		[
			-16,
			-60
		],
		[
			-46,
			-20
		],
		[
			-7,
			33
		],
		[
			-54,
			-29
		],
		[
			-8,
			-40
		],
		[
			-77,
			53
		],
		[
			-54,
			-24
		],
		[
			-30,
			2
		],
		[
			-16,
			-25
		],
		[
			-30,
			-2
		]
	],
	[
		[
			17374,
			7295
		],
		[
			-23,
			40
		],
		[
			8,
			97
		],
		[
			-23,
			151
		],
		[
			-31,
			27
		],
		[
			0,
			99
		],
		[
			-23,
			67
		],
		[
			-31,
			45
		],
		[
			-23,
			115
		]
	],
	[
		[
			17228,
			7936
		],
		[
			-15,
			53
		],
		[
			-23,
			18
		],
		[
			15,
			45
		],
		[
			8,
			73
		],
		[
			15,
			33
		],
		[
			-15,
			52
		],
		[
			15,
			67
		]
	],
	[
		[
			17228,
			8277
		],
		[
			262,
			0
		],
		[
			238,
			0
		],
		[
			353,
			0
		],
		[
			269,
			0
		]
	],
	[
		[
			18304,
			7227
		],
		[
			-69,
			79
		],
		[
			-69,
			-5
		],
		[
			-254,
			-8
		],
		[
			-138,
			-1
		],
		[
			-238,
			0
		],
		[
			-162,
			3
		]
	],
	[
		[
			17620,
			6087
		],
		[
			-230,
			2
		],
		[
			-215,
			0
		],
		[
			-192,
			-2
		],
		[
			-177,
			0
		],
		[
			-292,
			2
		],
		[
			-231,
			-2
		],
		[
			-253,
			-2
		]
	],
	[
		[
			16030,
			7099
		],
		[
			292,
			0
		],
		[
			184,
			0
		],
		[
			246,
			0
		],
		[
			146,
			0
		],
		[
			238,
			0
		],
		[
			338,
			0
		]
	],
	[
		[
			17474,
			7099
		],
		[
			31,
			-41
		],
		[
			46,
			7
		],
		[
			16,
			-58
		],
		[
			-39,
			-21
		],
		[
			0,
			-71
		],
		[
			31,
			-29
		],
		[
			0,
			-28
		],
		[
			31,
			-38
		],
		[
			30,
			-15
		],
		[
			0,
			-300
		],
		[
			0,
			-418
		]
	],
	[
		[
			18735,
			5919
		],
		[
			0,
			20
		],
		[
			46,
			15
		],
		[
			0,
			70
		],
		[
			15,
			57
		]
	],
	[
		[
			20195,
			6568
		],
		[
			0,
			-4
		],
		[
			0,
			-2
		]
	],
	[
		[
			20195,
			6562
		],
		[
			-8,
			-97
		],
		[
			31,
			-40
		],
		[
			0,
			-30
		],
		[
			30,
			-42
		],
		[
			8,
			-37
		],
		[
			38,
			-42
		],
		[
			31,
			-5
		]
	],
	[
		[
			20325,
			6269
		],
		[
			-84,
			-94
		],
		[
			-77,
			-45
		],
		[
			0,
			-34
		],
		[
			-31,
			-15
		],
		[
			0,
			-32
		],
		[
			-46,
			-9
		],
		[
			-8,
			-38
		],
		[
			-115,
			-48
		]
	],
	[
		[
			18358,
			4742
		],
		[
			-8,
			-33
		],
		[
			8,
			-88
		],
		[
			38,
			-77
		],
		[
			0,
			-67
		],
		[
			-23,
			-76
		],
		[
			-53,
			-47
		],
		[
			-16,
			-100
		],
		[
			-30,
			-40
		],
		[
			7,
			-56
		],
		[
			-23,
			-2
		],
		[
			23,
			-88
		],
		[
			139,
			0
		],
		[
			245,
			0
		],
		[
			-7,
			-52
		],
		[
			-16,
			-18
		],
		[
			0,
			-63
		],
		[
			46,
			-88
		],
		[
			0,
			-44
		],
		[
			24,
			-12
		]
	],
	[
		[
			18712,
			3791
		],
		[
			-24,
			-7
		],
		[
			-53,
			-53
		],
		[
			38,
			-45
		],
		[
			23,
			4
		],
		[
			16,
			52
		],
		[
			30,
			-23
		],
		[
			0,
			-61
		],
		[
			-69,
			-62
		],
		[
			0,
			-30
		],
		[
			39,
			-42
		],
		[
			30,
			2
		],
		[
			39,
			-22
		],
		[
			30,
			-86
		],
		[
			-30,
			-20
		],
		[
			-46,
			34
		],
		[
			-16,
			35
		],
		[
			-38,
			25
		],
		[
			-39,
			7
		],
		[
			-23,
			-14
		],
		[
			-46,
			-56
		],
		[
			-31,
			23
		],
		[
			0,
			31
		],
		[
			-46,
			9
		],
		[
			-30,
			-58
		],
		[
			-39,
			-18
		],
		[
			-23,
			38
		],
		[
			-31,
			4
		],
		[
			-46,
			25
		],
		[
			23,
			34
		],
		[
			-15,
			40
		],
		[
			-54,
			16
		],
		[
			-23,
			72
		],
		[
			-46,
			27
		],
		[
			-31,
			2
		],
		[
			-30,
			-38
		],
		[
			30,
			-36
		],
		[
			-7,
			-7
		],
		[
			-62,
			-20
		],
		[
			-92,
			29
		],
		[
			-39,
			29
		],
		[
			-53,
			23
		],
		[
			-62,
			0
		],
		[
			-61,
			-13
		],
		[
			-16,
			-14
		]
	],
	[
		[
			17228,
			8277
		],
		[
			0,
			236
		],
		[
			0,
			372
		],
		[
			-53,
			36
		],
		[
			-31,
			81
		],
		[
			38,
			27
		],
		[
			23,
			69
		]
	],
	[
		[
			17205,
			9098
		],
		[
			-7,
			9
		],
		[
			0,
			124
		],
		[
			-31,
			34
		],
		[
			-15,
			63
		],
		[
			-8,
			117
		],
		[
			0,
			215
		],
		[
			-8,
			2
		],
		[
			-54,
			165
		],
		[
			0,
			216
		],
		[
			-15,
			24
		],
		[
			-8,
			63
		]
	],
	[
		[
			17059,
			10130
		],
		[
			269,
			0
		],
		[
			177,
			0
		],
		[
			0,
			128
		],
		[
			69,
			-20
		],
		[
			46,
			-202
		],
		[
			77,
			-7
		],
		[
			0,
			-16
		],
		[
			92,
			-9
		],
		[
			0,
			-34
		],
		[
			39,
			-4
		],
		[
			84,
			43
		],
		[
			54,
			-7
		],
		[
			54,
			-27
		],
		[
			15,
			-34
		],
		[
			39,
			3
		],
		[
			7,
			-45
		],
		[
			85,
			15
		],
		[
			15,
			-38
		],
		[
			62,
			-16
		],
		[
			0,
			-29
		],
		[
			54,
			-22
		],
		[
			38,
			9
		],
		[
			31,
			31
		],
		[
			61,
			27
		],
		[
			16,
			-51
		],
		[
			138,
			6
		],
		[
			31,
			-33
		],
		[
			69,
			-1
		],
		[
			-8,
			-24
		],
		[
			-69,
			-41
		],
		[
			-138,
			-54
		],
		[
			-100,
			-87
		],
		[
			-23,
			-37
		],
		[
			-123,
			-121
		],
		[
			-46,
			-33
		],
		[
			0,
			-43
		]
	],
	[
		[
			18950,
			3856
		],
		[
			-8,
			-15
		],
		[
			-84,
			25
		],
		[
			-31,
			-3
		],
		[
			-77,
			-34
		],
		[
			-38,
			-38
		]
	],
	[
		[
			17620,
			5919
		],
		[
			0,
			168
		]
	],
	[
		[
			17474,
			7099
		],
		[
			-23,
			9
		],
		[
			-15,
			74
		],
		[
			-39,
			38
		],
		[
			-7,
			57
		],
		[
			-16,
			18
		]
	],
	[
		[
			15599,
			7436
		],
		[
			0,
			246
		],
		[
			0,
			427
		]
	],
	[
		[
			15599,
			8109
		],
		[
			154,
			0
		],
		[
			346,
			-2
		],
		[
			230,
			0
		],
		[
			323,
			0
		],
		[
			138,
			2
		],
		[
			8,
			-25
		],
		[
			100,
			-54
		],
		[
			23,
			32
		],
		[
			46,
			-5
		],
		[
			92,
			4
		],
		[
			116,
			-67
		],
		[
			0,
			-29
		],
		[
			53,
			-29
		]
	],
	[
		[
			22362,
			8017
		],
		[
			-16,
			22
		],
		[
			0,
			58
		],
		[
			23,
			36
		],
		[
			8,
			72
		],
		[
			0,
			97
		],
		[
			15,
			43
		],
		[
			31,
			31
		],
		[
			31,
			93
		],
		[
			-8,
			74
		],
		[
			54,
			20
		],
		[
			46,
			45
		],
		[
			8,
			103
		],
		[
			15,
			75
		]
	],
	[
		[
			22569,
			8786
		],
		[
			15,
			78
		],
		[
			70,
			21
		]
	],
	[
		[
			22738,
			8129
		],
		[
			-23,
			-63
		]
	],
	[
		[
			15822,
			6089
		],
		[
			0,
			-170
		]
	],
	[
		[
			15069,
			4331
		],
		[
			-192,
			0
		],
		[
			-169,
			0
		],
		[
			0,
			-151
		],
		[
			-177,
			0
		]
	],
	[
		[
			17205,
			9098
		],
		[
			-215,
			0
		],
		[
			-230,
			0
		],
		[
			-239,
			2
		],
		[
			-222,
			0
		],
		[
			-331,
			0
		],
		[
			-369,
			2
		]
	],
	[
		[
			15599,
			10130
		],
		[
			392,
			0
		],
		[
			285,
			0
		],
		[
			207,
			0
		],
		[
			223,
			0
		],
		[
			353,
			0
		]
	],
	[
		[
			11281,
			7771
		],
		[
			-31,
			39
		],
		[
			-15,
			71
		],
		[
			7,
			115
		],
		[
			-30,
			59
		],
		[
			23,
			54
		],
		[
			0,
			43
		],
		[
			30,
			87
		],
		[
			31,
			142
		],
		[
			8,
			78
		],
		[
			0,
			99
		],
		[
			7,
			12
		],
		[
			0,
			155
		],
		[
			23,
			88
		],
		[
			0,
			224
		],
		[
			8,
			122
		],
		[
			39,
			31
		],
		[
			46,
			16
		],
		[
			53,
			-38
		]
	],
	[
		[
			21063,
			5028
		],
		[
			-62,
			-36
		],
		[
			-69,
			-115
		],
		[
			-7,
			-78
		],
		[
			-31,
			-27
		],
		[
			-8,
			-29
		],
		[
			-46,
			6
		],
		[
			-15,
			-51
		],
		[
			-39,
			-32
		],
		[
			-38,
			-56
		],
		[
			-46,
			-18
		],
		[
			-46,
			-45
		],
		[
			-8,
			-36
		],
		[
			-31,
			-20
		],
		[
			-61,
			-75
		]
	],
	[
		[
			15599,
			8109
		],
		[
			0,
			422
		],
		[
			0,
			250
		]
	],
	[
		[
			22177,
			8786
		],
		[
			162,
			-1
		],
		[
			230,
			1
		]
	],
	[
		[
			21770,
			6434
		],
		[
			-46,
			-52
		],
		[
			-31,
			-57
		],
		[
			-15,
			-92
		],
		[
			-31,
			-43
		],
		[
			0,
			-35
		],
		[
			-31,
			-25
		],
		[
			-15,
			24
		],
		[
			0,
			46
		],
		[
			31,
			125
		],
		[
			30,
			36
		],
		[
			16,
			48
		]
	],
	[
		[
			20325,
			6269
		],
		[
			8,
			-60
		],
		[
			54,
			-54
		],
		[
			30,
			2
		],
		[
			47,
			33
		],
		[
			23,
			-22
		],
		[
			76,
			31
		],
		[
			77,
			50
		],
		[
			31,
			-2
		],
		[
			31,
			51
		],
		[
			-16,
			30
		],
		[
			23,
			52
		],
		[
			39,
			40
		],
		[
			15,
			68
		],
		[
			31,
			26
		],
		[
			23,
			56
		],
		[
			0,
			45
		],
		[
			31,
			-4
		],
		[
			15,
			-32
		],
		[
			39,
			-15
		],
		[
			61,
			137
		],
		[
			31,
			-20
		],
		[
			23,
			56
		],
		[
			38,
			20
		],
		[
			31,
			48
		],
		[
			15,
			62
		],
		[
			0,
			52
		],
		[
			116,
			-114
		],
		[
			23,
			63
		],
		[
			0,
			2
		]
	],
	[
		[
			21363,
			6739
		],
		[
			23,
			-47
		]
	],
	[
		[
			21332,
			6598
		],
		[
			0,
			-61
		],
		[
			54,
			18
		],
		[
			15,
			-61
		],
		[
			69,
			-20
		],
		[
			46,
			-59
		],
		[
			23,
			-49
		],
		[
			0,
			-88
		],
		[
			16,
			-47
		],
		[
			-39,
			-58
		],
		[
			31,
			-55
		],
		[
			-15,
			-44
		],
		[
			53,
			-16
		],
		[
			24,
			-32
		],
		[
			23,
			-89
		]
	]
];
var usmap = {
	type: type,
	transform: transform,
	objects: objects,
	arcs: arcs
};

var unemployment = [
  {
    "State": "Alabama",
    "Dec-08": 8.1,
    "Jan-09": 8.9,
    "Feb-09": 9.6,
    "Mar-09": 10.2,
    "Apr-09": 10.7,
    "May-09": 11,
    "Jun-09": 11.3,
    "Jul-09": 11.5,
    "Aug-09": 11.6,
    "Sep-09": 11.7,
    "Oct-09": 11.8,
    "Nov-09": 11.8,
    "Dec-09": 11.8,
    "Jan-10": 11.7,
    "Feb-10": 11.6,
    "Mar-10": 11.4,
    "Apr-10": 10.8,
    "May-10": 10.4,
    "Jun-10": 10.1,
    "Jul-10": 10,
    "Aug-10": 9.9,
    "Sep-10": 10,
    "Oct-10": 10.1,
    "Nov-10": 10.2,
    "Dec-10": 10.3,
    "Jan-11": 10.2,
    "Feb-11": 10.2,
    "Mar-11": 10.1,
    "Apr-11": 10,
    "May-11": 10,
    "Jun-11": 10,
    "Jul-11": 9.9,
    "Aug-11": 9.7,
    "Sep-11": 9.4,
    "Oct-11": 9,
    "Nov-11": 8.6,
    "Dec-11": 8.3,
    "Jan-12": 8.1,
    "Feb-12": 7.9,
    "Mar-12": 8,
    "Apr-12": 8.1,
    "May-12": 8.2,
    "Jun-12": 8.3,
    "Jul-12": 8.2,
    "Aug-12": 8.1,
    "Sep-12": 7.9,
    "Oct-12": 7.8,
    "Nov-12": 7.6,
    "Dec-12": 7.6,
    "Jan-13": 7.5,
    "Feb-13": 7.4,
    "Mar-13": 7.3,
    "Apr-13": 7.2,
    "May-13": 7.1,
    "Jun-13": 7,
    "Jul-13": 7.1,
    "Aug-13": 7.1,
    "Sep-13": 7.2,
    "Oct-13": 7.2,
    "Nov-13": 7.2,
    "Dec-13": 7.3,
    "Jan-14": 7.3,
    "Feb-14": 7.2,
    "Mar-14": 7.2,
    "Apr-14": 7.1,
    "May-14": 7,
    "Jun-14": 6.9,
    "Jul-14": 6.7,
    "Aug-14": 6.6,
    "Sep-14": 6.5,
    "Oct-14": 6.4,
    "Nov-14": 6.2,
    "Dec-14": 6.1,
    "Jan-15": 6.1,
    "Feb-15": 6.1,
    "Mar-15": 6.1,
    "Apr-15": 6.1,
    "May-15": 6.2,
    "Jun-15": 6.2,
    "Jul-15": 6.1,
    "Aug-15": 6.1,
    "Sep-15": 6.1,
    "Oct-15": 6,
    "Nov-15": 6,
    "Dec-15": 6,
    "Jan-16": 6,
    "Feb-16": 6,
    "Mar-16": 5.9,
    "Apr-16": 5.9,
    "May-16": 5.8,
    "Jun-16": 5.8,
    "Jul-16": 5.8,
    "Aug-16": 5.8,
    "Sep-16": 5.9,
    "Oct-16": 5.9,
    "Nov-16": 5.8,
    "Dec-16": 5.7,
    "Jan-17": 5.5,
    "Feb-17": 5.3,
    "Mar-17": 5,
    "Apr-17": 4.8,
    "May-17": 4.6,
    "Jun-17": 4.3,
    "Jul-17": 4.1,
    "Aug-17": 4,
    "Sep-17": 3.9,
    "Oct-17": 3.8,
    "Nov-17": 3.8,
    "Dec-17": 3.8,
    "Jan-18": 3.7,
    "Feb-18": 3.7,
    "Mar-18": 3.8,
    "Apr-18": 3.8,
    "May-18": 3.9,
    "Jun-18": 4.1,
    "Jul-18": 4.1,
    "Aug-18": 4.1,
    "Sep-18": 4.1,
    "Oct-18": 4.1,
    "Nov-18": 4,
    "Dec-18": 3.9
  },
  {
    "State": "Alaska",
    "Dec-08": 7,
    "Jan-09": 7.1,
    "Feb-09": 7.3,
    "Mar-09": 7.4,
    "Apr-09": 7.6,
    "May-09": 7.7,
    "Jun-09": 7.8,
    "Jul-09": 7.9,
    "Aug-09": 8,
    "Sep-09": 8,
    "Oct-09": 8,
    "Nov-09": 8,
    "Dec-09": 8,
    "Jan-10": 8,
    "Feb-10": 8,
    "Mar-10": 8,
    "Apr-10": 8,
    "May-10": 7.9,
    "Jun-10": 7.8,
    "Jul-10": 7.8,
    "Aug-10": 7.8,
    "Sep-10": 7.8,
    "Oct-10": 7.8,
    "Nov-10": 7.8,
    "Dec-10": 7.8,
    "Jan-11": 7.8,
    "Feb-11": 7.7,
    "Mar-11": 7.7,
    "Apr-11": 7.6,
    "May-11": 7.6,
    "Jun-11": 7.5,
    "Jul-11": 7.5,
    "Aug-11": 7.5,
    "Sep-11": 7.5,
    "Oct-11": 7.5,
    "Nov-11": 7.5,
    "Dec-11": 7.4,
    "Jan-12": 7.4,
    "Feb-12": 7.3,
    "Mar-12": 7.3,
    "Apr-12": 7.2,
    "May-12": 7.2,
    "Jun-12": 7.1,
    "Jul-12": 7.1,
    "Aug-12": 7,
    "Sep-12": 7,
    "Oct-12": 7,
    "Nov-12": 7,
    "Dec-12": 7,
    "Jan-13": 7,
    "Feb-13": 7,
    "Mar-13": 7,
    "Apr-13": 7,
    "May-13": 7,
    "Jun-13": 7,
    "Jul-13": 7,
    "Aug-13": 7,
    "Sep-13": 7,
    "Oct-13": 7,
    "Nov-13": 7,
    "Dec-13": 7,
    "Jan-14": 7,
    "Feb-14": 7,
    "Mar-14": 7,
    "Apr-14": 7,
    "May-14": 7,
    "Jun-14": 7,
    "Jul-14": 6.9,
    "Aug-14": 6.9,
    "Sep-14": 6.8,
    "Oct-14": 6.7,
    "Nov-14": 6.6,
    "Dec-14": 6.5,
    "Jan-15": 6.5,
    "Feb-15": 6.5,
    "Mar-15": 6.5,
    "Apr-15": 6.5,
    "May-15": 6.5,
    "Jun-15": 6.5,
    "Jul-15": 6.5,
    "Aug-15": 6.5,
    "Sep-15": 6.5,
    "Oct-15": 6.6,
    "Nov-15": 6.6,
    "Dec-15": 6.7,
    "Jan-16": 6.7,
    "Feb-16": 6.8,
    "Mar-16": 6.8,
    "Apr-16": 6.8,
    "May-16": 6.9,
    "Jun-16": 6.9,
    "Jul-16": 7,
    "Aug-16": 7,
    "Sep-16": 7,
    "Oct-16": 7,
    "Nov-16": 7,
    "Dec-16": 7,
    "Jan-17": 7,
    "Feb-17": 7,
    "Mar-17": 7.1,
    "Apr-17": 7.1,
    "May-17": 7.1,
    "Jun-17": 7.2,
    "Jul-17": 7.2,
    "Aug-17": 7.2,
    "Sep-17": 7.2,
    "Oct-17": 7.2,
    "Nov-17": 7.2,
    "Dec-17": 7.2,
    "Jan-18": 7.3,
    "Feb-18": 7.3,
    "Mar-18": 7.3,
    "Apr-18": 7.3,
    "May-18": 7.2,
    "Jun-18": 7.1,
    "Jul-18": 6.9,
    "Aug-18": 6.7,
    "Sep-18": 6.5,
    "Oct-18": 6.4,
    "Nov-18": 6.3,
    "Dec-18": 6.3
  },
  {
    "State": "Arizona",
    "Dec-08": 8,
    "Jan-09": 8.4,
    "Feb-09": 8.8,
    "Mar-09": 9.1,
    "Apr-09": 9.4,
    "May-09": 9.7,
    "Jun-09": 9.9,
    "Jul-09": 10.2,
    "Aug-09": 10.4,
    "Sep-09": 10.6,
    "Oct-09": 10.8,
    "Nov-09": 10.9,
    "Dec-09": 10.9,
    "Jan-10": 10.9,
    "Feb-10": 10.8,
    "Mar-10": 10.7,
    "Apr-10": 10.6,
    "May-10": 10.4,
    "Jun-10": 10.3,
    "Jul-10": 10.2,
    "Aug-10": 10.2,
    "Sep-10": 10.1,
    "Oct-10": 10.1,
    "Nov-10": 10,
    "Dec-10": 9.9,
    "Jan-11": 9.8,
    "Feb-11": 9.7,
    "Mar-11": 9.7,
    "Apr-11": 9.7,
    "May-11": 9.7,
    "Jun-11": 9.7,
    "Jul-11": 9.7,
    "Aug-11": 9.6,
    "Sep-11": 9.4,
    "Oct-11": 9.2,
    "Nov-11": 9,
    "Dec-11": 8.8,
    "Jan-12": 8.7,
    "Feb-12": 8.7,
    "Mar-12": 8.6,
    "Apr-12": 8.6,
    "May-12": 8.5,
    "Jun-12": 8.5,
    "Jul-12": 8.3,
    "Aug-12": 8.2,
    "Sep-12": 8.1,
    "Oct-12": 8,
    "Nov-12": 7.9,
    "Dec-12": 7.9,
    "Jan-13": 7.9,
    "Feb-13": 7.9,
    "Mar-13": 7.9,
    "Apr-13": 7.9,
    "May-13": 7.8,
    "Jun-13": 7.8,
    "Jul-13": 7.8,
    "Aug-13": 7.7,
    "Sep-13": 7.7,
    "Oct-13": 7.6,
    "Nov-13": 7.5,
    "Dec-13": 7.4,
    "Jan-14": 7.3,
    "Feb-14": 7.1,
    "Mar-14": 7,
    "Apr-14": 6.9,
    "May-14": 6.8,
    "Jun-14": 6.8,
    "Jul-14": 6.7,
    "Aug-14": 6.6,
    "Sep-14": 6.6,
    "Oct-14": 6.6,
    "Nov-14": 6.5,
    "Dec-14": 6.5,
    "Jan-15": 6.4,
    "Feb-15": 6.3,
    "Mar-15": 6.3,
    "Apr-15": 6.2,
    "May-15": 6.1,
    "Jun-15": 6,
    "Jul-15": 6,
    "Aug-15": 6,
    "Sep-15": 5.9,
    "Oct-15": 5.8,
    "Nov-15": 5.8,
    "Dec-15": 5.7,
    "Jan-16": 5.7,
    "Feb-16": 5.6,
    "Mar-16": 5.5,
    "Apr-16": 5.5,
    "May-16": 5.4,
    "Jun-16": 5.4,
    "Jul-16": 5.3,
    "Aug-16": 5.3,
    "Sep-16": 5.2,
    "Oct-16": 5.2,
    "Nov-16": 5.2,
    "Dec-16": 5.2,
    "Jan-17": 5.2,
    "Feb-17": 5.1,
    "Mar-17": 5.1,
    "Apr-17": 5,
    "May-17": 4.9,
    "Jun-17": 4.8,
    "Jul-17": 4.7,
    "Aug-17": 4.7,
    "Sep-17": 4.7,
    "Oct-17": 4.7,
    "Nov-17": 4.7,
    "Dec-17": 4.7,
    "Jan-18": 4.8,
    "Feb-18": 4.9,
    "Mar-18": 4.9,
    "Apr-18": 4.9,
    "May-18": 4.7,
    "Jun-18": 4.7,
    "Jul-18": 4.6,
    "Aug-18": 4.6,
    "Sep-18": 4.6,
    "Oct-18": 4.6,
    "Nov-18": 4.7,
    "Dec-18": 4.8
  },
  {
    "State": "Arkansas",
    "Dec-08": 6.8,
    "Jan-09": 7.1,
    "Feb-09": 7.4,
    "Mar-09": 7.6,
    "Apr-09": 7.8,
    "May-09": 7.9,
    "Jun-09": 7.9,
    "Jul-09": 7.9,
    "Aug-09": 8,
    "Sep-09": 8,
    "Oct-09": 8,
    "Nov-09": 8.1,
    "Dec-09": 8.2,
    "Jan-10": 8.2,
    "Feb-10": 8.2,
    "Mar-10": 8.2,
    "Apr-10": 8.1,
    "May-10": 8.1,
    "Jun-10": 8.1,
    "Jul-10": 8.1,
    "Aug-10": 8.1,
    "Sep-10": 8.2,
    "Oct-10": 8.3,
    "Nov-10": 8.3,
    "Dec-10": 8.4,
    "Jan-11": 8.5,
    "Feb-11": 8.5,
    "Mar-11": 8.5,
    "Apr-11": 8.5,
    "May-11": 8.5,
    "Jun-11": 8.4,
    "Jul-11": 8.4,
    "Aug-11": 8.3,
    "Sep-11": 8.2,
    "Oct-11": 8,
    "Nov-11": 7.9,
    "Dec-11": 7.8,
    "Jan-12": 7.7,
    "Feb-12": 7.6,
    "Mar-12": 7.6,
    "Apr-12": 7.6,
    "May-12": 7.6,
    "Jun-12": 7.6,
    "Jul-12": 7.6,
    "Aug-12": 7.6,
    "Sep-12": 7.5,
    "Oct-12": 7.5,
    "Nov-12": 7.5,
    "Dec-12": 7.5,
    "Jan-13": 7.4,
    "Feb-13": 7.4,
    "Mar-13": 7.4,
    "Apr-13": 7.4,
    "May-13": 7.4,
    "Jun-13": 7.3,
    "Jul-13": 7.3,
    "Aug-13": 7.2,
    "Sep-13": 7.1,
    "Oct-13": 7,
    "Nov-13": 6.9,
    "Dec-13": 6.8,
    "Jan-14": 6.6,
    "Feb-14": 6.5,
    "Mar-14": 6.3,
    "Apr-14": 6.2,
    "May-14": 6.1,
    "Jun-14": 6,
    "Jul-14": 5.9,
    "Aug-14": 5.9,
    "Sep-14": 5.8,
    "Oct-14": 5.7,
    "Nov-14": 5.7,
    "Dec-14": 5.6,
    "Jan-15": 5.6,
    "Feb-15": 5.6,
    "Mar-15": 5.5,
    "Apr-15": 5.4,
    "May-15": 5.3,
    "Jun-15": 5.2,
    "Jul-15": 5,
    "Aug-15": 4.8,
    "Sep-15": 4.7,
    "Oct-15": 4.5,
    "Nov-15": 4.4,
    "Dec-15": 4.3,
    "Jan-16": 4.2,
    "Feb-16": 4.1,
    "Mar-16": 4.1,
    "Apr-16": 4,
    "May-16": 4,
    "Jun-16": 4,
    "Jul-16": 3.9,
    "Aug-16": 3.9,
    "Sep-16": 3.9,
    "Oct-16": 3.8,
    "Nov-16": 3.8,
    "Dec-16": 3.7,
    "Jan-17": 3.7,
    "Feb-17": 3.6,
    "Mar-17": 3.6,
    "Apr-17": 3.6,
    "May-17": 3.6,
    "Jun-17": 3.7,
    "Jul-17": 3.7,
    "Aug-17": 3.7,
    "Sep-17": 3.7,
    "Oct-17": 3.7,
    "Nov-17": 3.7,
    "Dec-17": 3.7,
    "Jan-18": 3.7,
    "Feb-18": 3.8,
    "Mar-18": 3.8,
    "Apr-18": 3.8,
    "May-18": 3.8,
    "Jun-18": 3.8,
    "Jul-18": 3.7,
    "Aug-18": 3.6,
    "Sep-18": 3.5,
    "Oct-18": 3.5,
    "Nov-18": 3.6,
    "Dec-18": 3.6
  },
  {
    "State": "California",
    "Dec-08": 9.2,
    "Jan-09": 9.7,
    "Feb-09": 10.1,
    "Mar-09": 10.5,
    "Apr-09": 10.8,
    "May-09": 11,
    "Jun-09": 11.2,
    "Jul-09": 11.4,
    "Aug-09": 11.5,
    "Sep-09": 11.7,
    "Oct-09": 11.8,
    "Nov-09": 11.9,
    "Dec-09": 12.1,
    "Jan-10": 12.2,
    "Feb-10": 12.2,
    "Mar-10": 12.3,
    "Apr-10": 12.2,
    "May-10": 12.2,
    "Jun-10": 12.2,
    "Jul-10": 12.2,
    "Aug-10": 12.2,
    "Sep-10": 12.2,
    "Oct-10": 12.3,
    "Nov-10": 12.3,
    "Dec-10": 12.2,
    "Jan-11": 12.1,
    "Feb-11": 12,
    "Mar-11": 11.9,
    "Apr-11": 11.8,
    "May-11": 11.8,
    "Jun-11": 11.8,
    "Jul-11": 11.8,
    "Aug-11": 11.7,
    "Sep-11": 11.6,
    "Oct-11": 11.5,
    "Nov-11": 11.3,
    "Dec-11": 11.2,
    "Jan-12": 11,
    "Feb-12": 10.9,
    "Mar-12": 10.8,
    "Apr-12": 10.7,
    "May-12": 10.6,
    "Jun-12": 10.5,
    "Jul-12": 10.4,
    "Aug-12": 10.2,
    "Sep-12": 10,
    "Oct-12": 9.9,
    "Nov-12": 9.8,
    "Dec-12": 9.7,
    "Jan-13": 9.6,
    "Feb-13": 9.4,
    "Mar-13": 9.3,
    "Apr-13": 9.2,
    "May-13": 9.1,
    "Jun-13": 9,
    "Jul-13": 8.9,
    "Aug-13": 8.8,
    "Sep-13": 8.7,
    "Oct-13": 8.6,
    "Nov-13": 8.4,
    "Dec-13": 8.3,
    "Jan-14": 8.2,
    "Feb-14": 8,
    "Mar-14": 7.9,
    "Apr-14": 7.8,
    "May-14": 7.7,
    "Jun-14": 7.5,
    "Jul-14": 7.4,
    "Aug-14": 7.3,
    "Sep-14": 7.2,
    "Oct-14": 7.1,
    "Nov-14": 7,
    "Dec-14": 6.9,
    "Jan-15": 6.8,
    "Feb-15": 6.7,
    "Mar-15": 6.6,
    "Apr-15": 6.5,
    "May-15": 6.4,
    "Jun-15": 6.2,
    "Jul-15": 6.1,
    "Aug-15": 6,
    "Sep-15": 5.9,
    "Oct-15": 5.8,
    "Nov-15": 5.7,
    "Dec-15": 5.7,
    "Jan-16": 5.7,
    "Feb-16": 5.6,
    "Mar-16": 5.6,
    "Apr-16": 5.5,
    "May-16": 5.5,
    "Jun-16": 5.5,
    "Jul-16": 5.5,
    "Aug-16": 5.4,
    "Sep-16": 5.4,
    "Oct-16": 5.4,
    "Nov-16": 5.4,
    "Dec-16": 5.3,
    "Jan-17": 5.2,
    "Feb-17": 5.1,
    "Mar-17": 5,
    "Apr-17": 5,
    "May-17": 4.9,
    "Jun-17": 4.8,
    "Jul-17": 4.7,
    "Aug-17": 4.6,
    "Sep-17": 4.5,
    "Oct-17": 4.5,
    "Nov-17": 4.5,
    "Dec-17": 4.5,
    "Jan-18": 4.4,
    "Feb-18": 4.3,
    "Mar-18": 4.3,
    "Apr-18": 4.2,
    "May-18": 4.2,
    "Jun-18": 4.2,
    "Jul-18": 4.2,
    "Aug-18": 4.2,
    "Sep-18": 4.1,
    "Oct-18": 4.1,
    "Nov-18": 4.1,
    "Dec-18": 4.2
  },
  {
    "State": "Colorado",
    "Dec-08": 5.9,
    "Jan-09": 6.1,
    "Feb-09": 6.4,
    "Mar-09": 6.7,
    "Apr-09": 7,
    "May-09": 7.2,
    "Jun-09": 7.4,
    "Jul-09": 7.5,
    "Aug-09": 7.6,
    "Sep-09": 7.7,
    "Oct-09": 7.8,
    "Nov-09": 8,
    "Dec-09": 8.2,
    "Jan-10": 8.3,
    "Feb-10": 8.5,
    "Mar-10": 8.6,
    "Apr-10": 8.7,
    "May-10": 8.7,
    "Jun-10": 8.7,
    "Jul-10": 8.8,
    "Aug-10": 8.8,
    "Sep-10": 8.9,
    "Oct-10": 8.9,
    "Nov-10": 8.9,
    "Dec-10": 8.9,
    "Jan-11": 8.8,
    "Feb-11": 8.7,
    "Mar-11": 8.5,
    "Apr-11": 8.4,
    "May-11": 8.3,
    "Jun-11": 8.3,
    "Jul-11": 8.3,
    "Aug-11": 8.2,
    "Sep-11": 8.2,
    "Oct-11": 8.2,
    "Nov-11": 8.2,
    "Dec-11": 8.2,
    "Jan-12": 8.2,
    "Feb-12": 8.1,
    "Mar-12": 8.1,
    "Apr-12": 8.1,
    "May-12": 8,
    "Jun-12": 8,
    "Jul-12": 7.9,
    "Aug-12": 7.8,
    "Sep-12": 7.7,
    "Oct-12": 7.7,
    "Nov-12": 7.6,
    "Dec-12": 7.5,
    "Jan-13": 7.4,
    "Feb-13": 7.3,
    "Mar-13": 7.2,
    "Apr-13": 7.1,
    "May-13": 7.1,
    "Jun-13": 7,
    "Jul-13": 6.9,
    "Aug-13": 6.8,
    "Sep-13": 6.6,
    "Oct-13": 6.4,
    "Nov-13": 6.3,
    "Dec-13": 6.1,
    "Jan-14": 6,
    "Feb-14": 5.8,
    "Mar-14": 5.6,
    "Apr-14": 5.4,
    "May-14": 5.2,
    "Jun-14": 5,
    "Jul-14": 4.8,
    "Aug-14": 4.6,
    "Sep-14": 4.5,
    "Oct-14": 4.4,
    "Nov-14": 4.4,
    "Dec-14": 4.3,
    "Jan-15": 4.3,
    "Feb-15": 4.2,
    "Mar-15": 4.2,
    "Apr-15": 4.1,
    "May-15": 4,
    "Jun-15": 3.9,
    "Jul-15": 3.8,
    "Aug-15": 3.7,
    "Sep-15": 3.7,
    "Oct-15": 3.6,
    "Nov-15": 3.5,
    "Dec-15": 3.5,
    "Jan-16": 3.5,
    "Feb-16": 3.4,
    "Mar-16": 3.4,
    "Apr-16": 3.4,
    "May-16": 3.4,
    "Jun-16": 3.4,
    "Jul-16": 3.3,
    "Aug-16": 3.3,
    "Sep-16": 3.2,
    "Oct-16": 3.1,
    "Nov-16": 3,
    "Dec-16": 2.9,
    "Jan-17": 2.8,
    "Feb-17": 2.7,
    "Mar-17": 2.6,
    "Apr-17": 2.6,
    "May-17": 2.6,
    "Jun-17": 2.7,
    "Jul-17": 2.8,
    "Aug-17": 2.9,
    "Sep-17": 3,
    "Oct-17": 3,
    "Nov-17": 3,
    "Dec-17": 3,
    "Jan-18": 3,
    "Feb-18": 3,
    "Mar-18": 3,
    "Apr-18": 2.9,
    "May-18": 2.8,
    "Jun-18": 2.7,
    "Jul-18": 2.8,
    "Aug-18": 2.9,
    "Sep-18": 3.1,
    "Oct-18": 3.2,
    "Nov-18": 3.3,
    "Dec-18": 3.5
  },
  {
    "State": "Connecticut",
    "Dec-08": 6.6,
    "Jan-09": 6.9,
    "Feb-09": 7.1,
    "Mar-09": 7.3,
    "Apr-09": 7.5,
    "May-09": 7.7,
    "Jun-09": 7.9,
    "Jul-09": 8.1,
    "Aug-09": 8.2,
    "Sep-09": 8.4,
    "Oct-09": 8.5,
    "Nov-09": 8.7,
    "Dec-09": 8.8,
    "Jan-10": 9,
    "Feb-10": 9,
    "Mar-10": 9.1,
    "Apr-10": 9.1,
    "May-10": 9.1,
    "Jun-10": 9.1,
    "Jul-10": 9.1,
    "Aug-10": 9.1,
    "Sep-10": 9.2,
    "Oct-10": 9.2,
    "Nov-10": 9.3,
    "Dec-10": 9.3,
    "Jan-11": 9.2,
    "Feb-11": 9.2,
    "Mar-11": 9.2,
    "Apr-11": 9.1,
    "May-11": 9,
    "Jun-11": 8.9,
    "Jul-11": 8.8,
    "Aug-11": 8.7,
    "Sep-11": 8.6,
    "Oct-11": 8.5,
    "Nov-11": 8.4,
    "Dec-11": 8.3,
    "Jan-12": 8.2,
    "Feb-12": 8.2,
    "Mar-12": 8.3,
    "Apr-12": 8.3,
    "May-12": 8.4,
    "Jun-12": 8.5,
    "Jul-12": 8.5,
    "Aug-12": 8.5,
    "Sep-12": 8.4,
    "Oct-12": 8.4,
    "Nov-12": 8.3,
    "Dec-12": 8.2,
    "Jan-13": 8.2,
    "Feb-13": 8.1,
    "Mar-13": 8.1,
    "Apr-13": 8,
    "May-13": 7.9,
    "Jun-13": 7.9,
    "Jul-13": 7.8,
    "Aug-13": 7.8,
    "Sep-13": 7.7,
    "Oct-13": 7.5,
    "Nov-13": 7.4,
    "Dec-13": 7.3,
    "Jan-14": 7.2,
    "Feb-14": 7,
    "Mar-14": 6.9,
    "Apr-14": 6.8,
    "May-14": 6.7,
    "Jun-14": 6.6,
    "Jul-14": 6.5,
    "Aug-14": 6.5,
    "Sep-14": 6.4,
    "Oct-14": 6.3,
    "Nov-14": 6.3,
    "Dec-14": 6.2,
    "Jan-15": 6.1,
    "Feb-15": 6,
    "Mar-15": 5.9,
    "Apr-15": 5.8,
    "May-15": 5.7,
    "Jun-15": 5.7,
    "Jul-15": 5.6,
    "Aug-15": 5.6,
    "Sep-15": 5.6,
    "Oct-15": 5.6,
    "Nov-15": 5.6,
    "Dec-15": 5.6,
    "Jan-16": 5.5,
    "Feb-16": 5.5,
    "Mar-16": 5.4,
    "Apr-16": 5.3,
    "May-16": 5.3,
    "Jun-16": 5.2,
    "Jul-16": 5.1,
    "Aug-16": 5,
    "Sep-16": 5,
    "Oct-16": 4.9,
    "Nov-16": 4.9,
    "Dec-16": 4.9,
    "Jan-17": 4.9,
    "Feb-17": 4.9,
    "Mar-17": 4.9,
    "Apr-17": 4.8,
    "May-17": 4.7,
    "Jun-17": 4.7,
    "Jul-17": 4.6,
    "Aug-17": 4.5,
    "Sep-17": 4.5,
    "Oct-17": 4.5,
    "Nov-17": 4.5,
    "Dec-17": 4.5,
    "Jan-18": 4.5,
    "Feb-18": 4.6,
    "Mar-18": 4.5,
    "Apr-18": 4.5,
    "May-18": 4.5,
    "Jun-18": 4.4,
    "Jul-18": 4.4,
    "Aug-18": 4.3,
    "Sep-18": 4.2,
    "Oct-18": 4.2,
    "Nov-18": 4.1,
    "Dec-18": 4
  },
  {
    "State": "Delaware",
    "Dec-08": 6.8,
    "Jan-09": 7.2,
    "Feb-09": 7.6,
    "Mar-09": 7.9,
    "Apr-09": 8.1,
    "May-09": 8.3,
    "Jun-09": 8.4,
    "Jul-09": 8.5,
    "Aug-09": 8.5,
    "Sep-09": 8.6,
    "Oct-09": 8.6,
    "Nov-09": 8.7,
    "Dec-09": 8.7,
    "Jan-10": 8.8,
    "Feb-10": 8.7,
    "Mar-10": 8.7,
    "Apr-10": 8.6,
    "May-10": 8.5,
    "Jun-10": 8.4,
    "Jul-10": 8.4,
    "Aug-10": 8.3,
    "Sep-10": 8.3,
    "Oct-10": 8.2,
    "Nov-10": 8.1,
    "Dec-10": 8,
    "Jan-11": 7.9,
    "Feb-11": 7.8,
    "Mar-11": 7.7,
    "Apr-11": 7.6,
    "May-11": 7.5,
    "Jun-11": 7.5,
    "Jul-11": 7.5,
    "Aug-11": 7.4,
    "Sep-11": 7.4,
    "Oct-11": 7.3,
    "Nov-11": 7.2,
    "Dec-11": 7.2,
    "Jan-12": 7.1,
    "Feb-12": 7.1,
    "Mar-12": 7.1,
    "Apr-12": 7.2,
    "May-12": 7.2,
    "Jun-12": 7.2,
    "Jul-12": 7.2,
    "Aug-12": 7.3,
    "Sep-12": 7.3,
    "Oct-12": 7.3,
    "Nov-12": 7.3,
    "Dec-12": 7.2,
    "Jan-13": 7.2,
    "Feb-13": 7.1,
    "Mar-13": 7.1,
    "Apr-13": 7,
    "May-13": 6.9,
    "Jun-13": 6.8,
    "Jul-13": 6.6,
    "Aug-13": 6.5,
    "Sep-13": 6.4,
    "Oct-13": 6.3,
    "Nov-13": 6.2,
    "Dec-13": 6.2,
    "Jan-14": 6.1,
    "Feb-14": 6.1,
    "Mar-14": 6,
    "Apr-14": 6,
    "May-14": 5.9,
    "Jun-14": 5.8,
    "Jul-14": 5.7,
    "Aug-14": 5.6,
    "Sep-14": 5.5,
    "Oct-14": 5.4,
    "Nov-14": 5.3,
    "Dec-14": 5.2,
    "Jan-15": 5.1,
    "Feb-15": 5,
    "Mar-15": 5,
    "Apr-15": 4.9,
    "May-15": 4.9,
    "Jun-15": 4.9,
    "Jul-15": 4.8,
    "Aug-15": 4.8,
    "Sep-15": 4.8,
    "Oct-15": 4.7,
    "Nov-15": 4.7,
    "Dec-15": 4.6,
    "Jan-16": 4.6,
    "Feb-16": 4.5,
    "Mar-16": 4.5,
    "Apr-16": 4.5,
    "May-16": 4.5,
    "Jun-16": 4.5,
    "Jul-16": 4.5,
    "Aug-16": 4.5,
    "Sep-16": 4.5,
    "Oct-16": 4.5,
    "Nov-16": 4.6,
    "Dec-16": 4.6,
    "Jan-17": 4.6,
    "Feb-17": 4.6,
    "Mar-17": 4.6,
    "Apr-17": 4.6,
    "May-17": 4.6,
    "Jun-17": 4.6,
    "Jul-17": 4.6,
    "Aug-17": 4.6,
    "Sep-17": 4.5,
    "Oct-17": 4.5,
    "Nov-17": 4.5,
    "Dec-17": 4.5,
    "Jan-18": 4.5,
    "Feb-18": 4.4,
    "Mar-18": 4.3,
    "Apr-18": 4.2,
    "May-18": 4,
    "Jun-18": 3.9,
    "Jul-18": 3.9,
    "Aug-18": 3.9,
    "Sep-18": 4,
    "Oct-18": 3.9,
    "Nov-18": 3.8,
    "Dec-18": 3.7
  },
  {
    "State": "District of Columbia",
    "Dec-08": 7.7,
    "Jan-09": 8,
    "Feb-09": 8.3,
    "Mar-09": 8.6,
    "Apr-09": 8.9,
    "May-09": 9.1,
    "Jun-09": 9.3,
    "Jul-09": 9.6,
    "Aug-09": 9.7,
    "Sep-09": 9.9,
    "Oct-09": 10,
    "Nov-09": 10,
    "Dec-09": 9.9,
    "Jan-10": 9.8,
    "Feb-10": 9.7,
    "Mar-10": 9.5,
    "Apr-10": 9.4,
    "May-10": 9.3,
    "Jun-10": 9.3,
    "Jul-10": 9.2,
    "Aug-10": 9.2,
    "Sep-10": 9.3,
    "Oct-10": 9.3,
    "Nov-10": 9.4,
    "Dec-10": 9.5,
    "Jan-11": 9.6,
    "Feb-11": 9.8,
    "Mar-11": 10.1,
    "Apr-11": 10.3,
    "May-11": 10.4,
    "Jun-11": 10.5,
    "Jul-11": 10.5,
    "Aug-11": 10.4,
    "Sep-11": 10.3,
    "Oct-11": 10.1,
    "Nov-11": 10,
    "Dec-11": 9.9,
    "Jan-12": 9.8,
    "Feb-12": 9.6,
    "Mar-12": 9.4,
    "Apr-12": 9.3,
    "May-12": 9.1,
    "Jun-12": 8.9,
    "Jul-12": 8.8,
    "Aug-12": 8.8,
    "Sep-12": 8.7,
    "Oct-12": 8.7,
    "Nov-12": 8.7,
    "Dec-12": 8.7,
    "Jan-13": 8.7,
    "Feb-13": 8.7,
    "Mar-13": 8.7,
    "Apr-13": 8.6,
    "May-13": 8.6,
    "Jun-13": 8.6,
    "Jul-13": 8.5,
    "Aug-13": 8.5,
    "Sep-13": 8.4,
    "Oct-13": 8.3,
    "Nov-13": 8.2,
    "Dec-13": 8.1,
    "Jan-14": 8,
    "Feb-14": 7.9,
    "Mar-14": 7.9,
    "Apr-14": 7.9,
    "May-14": 7.8,
    "Jun-14": 7.8,
    "Jul-14": 7.8,
    "Aug-14": 7.7,
    "Sep-14": 7.7,
    "Oct-14": 7.6,
    "Nov-14": 7.6,
    "Dec-14": 7.5,
    "Jan-15": 7.4,
    "Feb-15": 7.3,
    "Mar-15": 7.2,
    "Apr-15": 7.1,
    "May-15": 7,
    "Jun-15": 6.9,
    "Jul-15": 6.8,
    "Aug-15": 6.7,
    "Sep-15": 6.6,
    "Oct-15": 6.6,
    "Nov-15": 6.5,
    "Dec-15": 6.4,
    "Jan-16": 6.4,
    "Feb-16": 6.3,
    "Mar-16": 6.2,
    "Apr-16": 6.1,
    "May-16": 6.1,
    "Jun-16": 6.1,
    "Jul-16": 6.1,
    "Aug-16": 6,
    "Sep-16": 6,
    "Oct-16": 6,
    "Nov-16": 6,
    "Dec-16": 6,
    "Jan-17": 6,
    "Feb-17": 6.1,
    "Mar-17": 6.1,
    "Apr-17": 6.2,
    "May-17": 6.2,
    "Jun-17": 6.2,
    "Jul-17": 6.2,
    "Aug-17": 6.1,
    "Sep-17": 6,
    "Oct-17": 5.9,
    "Nov-17": 5.9,
    "Dec-17": 5.9,
    "Jan-18": 5.8,
    "Feb-18": 5.7,
    "Mar-18": 5.6,
    "Apr-18": 5.6,
    "May-18": 5.6,
    "Jun-18": 5.6,
    "Jul-18": 5.6,
    "Aug-18": 5.6,
    "Sep-18": 5.7,
    "Oct-18": 5.6,
    "Nov-18": 5.6,
    "Dec-18": 5.5
  },
  {
    "State": "Florida",
    "Dec-08": 8.3,
    "Jan-09": 8.8,
    "Feb-09": 9.3,
    "Mar-09": 9.8,
    "Apr-09": 10.1,
    "May-09": 10.4,
    "Jun-09": 10.5,
    "Jul-09": 10.7,
    "Aug-09": 10.8,
    "Sep-09": 10.9,
    "Oct-09": 11,
    "Nov-09": 11.2,
    "Dec-09": 11.2,
    "Jan-10": 11.3,
    "Feb-10": 11.2,
    "Mar-10": 11.2,
    "Apr-10": 11.1,
    "May-10": 11,
    "Jun-10": 10.9,
    "Jul-10": 10.9,
    "Aug-10": 11,
    "Sep-10": 11,
    "Oct-10": 11,
    "Nov-10": 11,
    "Dec-10": 10.8,
    "Jan-11": 10.7,
    "Feb-11": 10.5,
    "Mar-11": 10.4,
    "Apr-11": 10.3,
    "May-11": 10.2,
    "Jun-11": 10.2,
    "Jul-11": 10.1,
    "Aug-11": 9.9,
    "Sep-11": 9.7,
    "Oct-11": 9.5,
    "Nov-11": 9.3,
    "Dec-11": 9.1,
    "Jan-12": 8.9,
    "Feb-12": 8.8,
    "Mar-12": 8.7,
    "Apr-12": 8.7,
    "May-12": 8.7,
    "Jun-12": 8.6,
    "Jul-12": 8.5,
    "Aug-12": 8.4,
    "Sep-12": 8.3,
    "Oct-12": 8.1,
    "Nov-12": 8.1,
    "Dec-12": 8,
    "Jan-13": 7.9,
    "Feb-13": 7.8,
    "Mar-13": 7.6,
    "Apr-13": 7.5,
    "May-13": 7.4,
    "Jun-13": 7.3,
    "Jul-13": 7.2,
    "Aug-13": 7,
    "Sep-13": 6.9,
    "Oct-13": 6.8,
    "Nov-13": 6.7,
    "Dec-13": 6.7,
    "Jan-14": 6.6,
    "Feb-14": 6.6,
    "Mar-14": 6.6,
    "Apr-14": 6.5,
    "May-14": 6.4,
    "Jun-14": 6.3,
    "Jul-14": 6.2,
    "Aug-14": 6.1,
    "Sep-14": 6.1,
    "Oct-14": 6,
    "Nov-14": 5.9,
    "Dec-14": 5.9,
    "Jan-15": 5.8,
    "Feb-15": 5.7,
    "Mar-15": 5.7,
    "Apr-15": 5.6,
    "May-15": 5.6,
    "Jun-15": 5.5,
    "Jul-15": 5.4,
    "Aug-15": 5.3,
    "Sep-15": 5.3,
    "Oct-15": 5.2,
    "Nov-15": 5.1,
    "Dec-15": 5.1,
    "Jan-16": 5,
    "Feb-16": 5,
    "Mar-16": 4.9,
    "Apr-16": 4.8,
    "May-16": 4.8,
    "Jun-16": 4.8,
    "Jul-16": 4.8,
    "Aug-16": 4.8,
    "Sep-16": 4.8,
    "Oct-16": 4.8,
    "Nov-16": 4.7,
    "Dec-16": 4.7,
    "Jan-17": 4.6,
    "Feb-17": 4.5,
    "Mar-17": 4.4,
    "Apr-17": 4.3,
    "May-17": 4.2,
    "Jun-17": 4.1,
    "Jul-17": 4.1,
    "Aug-17": 4,
    "Sep-17": 3.9,
    "Oct-17": 3.9,
    "Nov-17": 3.9,
    "Dec-17": 3.9,
    "Jan-18": 3.9,
    "Feb-18": 3.9,
    "Mar-18": 3.9,
    "Apr-18": 3.9,
    "May-18": 3.8,
    "Jun-18": 3.8,
    "Jul-18": 3.7,
    "Aug-18": 3.7,
    "Sep-18": 3.5,
    "Oct-18": 3.4,
    "Nov-18": 3.3,
    "Dec-18": 3.3
  },
  {
    "State": "Georgia",
    "Dec-08": 8.2,
    "Jan-09": 8.7,
    "Feb-09": 9.1,
    "Mar-09": 9.5,
    "Apr-09": 9.7,
    "May-09": 9.9,
    "Jun-09": 10,
    "Jul-09": 10.2,
    "Aug-09": 10.3,
    "Sep-09": 10.4,
    "Oct-09": 10.4,
    "Nov-09": 10.5,
    "Dec-09": 10.5,
    "Jan-10": 10.5,
    "Feb-10": 10.6,
    "Mar-10": 10.6,
    "Apr-10": 10.5,
    "May-10": 10.4,
    "Jun-10": 10.3,
    "Jul-10": 10.3,
    "Aug-10": 10.4,
    "Sep-10": 10.5,
    "Oct-10": 10.6,
    "Nov-10": 10.6,
    "Dec-10": 10.6,
    "Jan-11": 10.5,
    "Feb-11": 10.4,
    "Mar-11": 10.3,
    "Apr-11": 10.3,
    "May-11": 10.3,
    "Jun-11": 10.3,
    "Jul-11": 10.4,
    "Aug-11": 10.3,
    "Sep-11": 10.2,
    "Oct-11": 10.1,
    "Nov-11": 9.9,
    "Dec-11": 9.8,
    "Jan-12": 9.7,
    "Feb-12": 9.6,
    "Mar-12": 9.5,
    "Apr-12": 9.5,
    "May-12": 9.4,
    "Jun-12": 9.3,
    "Jul-12": 9.1,
    "Aug-12": 9,
    "Sep-12": 8.9,
    "Oct-12": 8.8,
    "Nov-12": 8.8,
    "Dec-12": 8.7,
    "Jan-13": 8.7,
    "Feb-13": 8.6,
    "Mar-13": 8.6,
    "Apr-13": 8.5,
    "May-13": 8.4,
    "Jun-13": 8.3,
    "Jul-13": 8.2,
    "Aug-13": 8.1,
    "Sep-13": 7.9,
    "Oct-13": 7.8,
    "Nov-13": 7.7,
    "Dec-13": 7.6,
    "Jan-14": 7.5,
    "Feb-14": 7.4,
    "Mar-14": 7.3,
    "Apr-14": 7.3,
    "May-14": 7.3,
    "Jun-14": 7.3,
    "Jul-14": 7.2,
    "Aug-14": 7.1,
    "Sep-14": 6.9,
    "Oct-14": 6.8,
    "Nov-14": 6.6,
    "Dec-14": 6.5,
    "Jan-15": 6.4,
    "Feb-15": 6.3,
    "Mar-15": 6.3,
    "Apr-15": 6.2,
    "May-15": 6.1,
    "Jun-15": 6,
    "Jul-15": 5.9,
    "Aug-15": 5.8,
    "Sep-15": 5.7,
    "Oct-15": 5.6,
    "Nov-15": 5.6,
    "Dec-15": 5.6,
    "Jan-16": 5.5,
    "Feb-16": 5.5,
    "Mar-16": 5.4,
    "Apr-16": 5.4,
    "May-16": 5.3,
    "Jun-16": 5.3,
    "Jul-16": 5.3,
    "Aug-16": 5.3,
    "Sep-16": 5.3,
    "Oct-16": 5.4,
    "Nov-16": 5.4,
    "Dec-16": 5.3,
    "Jan-17": 5.3,
    "Feb-17": 5.2,
    "Mar-17": 5,
    "Apr-17": 4.9,
    "May-17": 4.8,
    "Jun-17": 4.7,
    "Jul-17": 4.6,
    "Aug-17": 4.5,
    "Sep-17": 4.5,
    "Oct-17": 4.5,
    "Nov-17": 4.5,
    "Dec-17": 4.5,
    "Jan-18": 4.5,
    "Feb-18": 4.4,
    "Mar-18": 4.4,
    "Apr-18": 4.3,
    "May-18": 4.2,
    "Jun-18": 4.1,
    "Jul-18": 3.9,
    "Aug-18": 3.8,
    "Sep-18": 3.7,
    "Oct-18": 3.6,
    "Nov-18": 3.5,
    "Dec-18": 3.6
  },
  {
    "State": "Hawaii",
    "Dec-08": 6,
    "Jan-09": 6.4,
    "Feb-09": 6.7,
    "Mar-09": 7,
    "Apr-09": 7.2,
    "May-09": 7.3,
    "Jun-09": 7.3,
    "Jul-09": 7.3,
    "Aug-09": 7.3,
    "Sep-09": 7.3,
    "Oct-09": 7.3,
    "Nov-09": 7.2,
    "Dec-09": 7.2,
    "Jan-10": 7.1,
    "Feb-10": 7,
    "Mar-10": 7,
    "Apr-10": 6.9,
    "May-10": 6.9,
    "Jun-10": 6.9,
    "Jul-10": 7,
    "Aug-10": 7,
    "Sep-10": 7,
    "Oct-10": 6.9,
    "Nov-10": 6.9,
    "Dec-10": 6.8,
    "Jan-11": 6.8,
    "Feb-11": 6.7,
    "Mar-11": 6.7,
    "Apr-11": 6.7,
    "May-11": 6.7,
    "Jun-11": 6.8,
    "Jul-11": 6.8,
    "Aug-11": 6.9,
    "Sep-11": 6.9,
    "Oct-11": 6.9,
    "Nov-11": 6.9,
    "Dec-11": 6.8,
    "Jan-12": 6.7,
    "Feb-12": 6.7,
    "Mar-12": 6.6,
    "Apr-12": 6.4,
    "May-12": 6.3,
    "Jun-12": 6.1,
    "Jul-12": 6,
    "Aug-12": 5.8,
    "Sep-12": 5.6,
    "Oct-12": 5.4,
    "Nov-12": 5.3,
    "Dec-12": 5.2,
    "Jan-13": 5.1,
    "Feb-13": 5.1,
    "Mar-13": 5,
    "Apr-13": 4.9,
    "May-13": 4.9,
    "Jun-13": 4.8,
    "Jul-13": 4.8,
    "Aug-13": 4.8,
    "Sep-13": 4.8,
    "Oct-13": 4.8,
    "Nov-13": 4.8,
    "Dec-13": 4.8,
    "Jan-14": 4.7,
    "Feb-14": 4.6,
    "Mar-14": 4.6,
    "Apr-14": 4.5,
    "May-14": 4.5,
    "Jun-14": 4.4,
    "Jul-14": 4.3,
    "Aug-14": 4.2,
    "Sep-14": 4.2,
    "Oct-14": 4.1,
    "Nov-14": 4.1,
    "Dec-14": 4,
    "Jan-15": 4,
    "Feb-15": 3.9,
    "Mar-15": 3.9,
    "Apr-15": 3.8,
    "May-15": 3.7,
    "Jun-15": 3.6,
    "Jul-15": 3.5,
    "Aug-15": 3.4,
    "Sep-15": 3.4,
    "Oct-15": 3.3,
    "Nov-15": 3.2,
    "Dec-15": 3.1,
    "Jan-16": 3.1,
    "Feb-16": 3,
    "Mar-16": 3,
    "Apr-16": 3,
    "May-16": 3,
    "Jun-16": 3,
    "Jul-16": 3,
    "Aug-16": 2.9,
    "Sep-16": 2.9,
    "Oct-16": 2.9,
    "Nov-16": 2.8,
    "Dec-16": 2.8,
    "Jan-17": 2.7,
    "Feb-17": 2.7,
    "Mar-17": 2.6,
    "Apr-17": 2.5,
    "May-17": 2.4,
    "Jun-17": 2.4,
    "Jul-17": 2.3,
    "Aug-17": 2.2,
    "Sep-17": 2.2,
    "Oct-17": 2.1,
    "Nov-17": 2.1,
    "Dec-17": 2.1,
    "Jan-18": 2.1,
    "Feb-18": 2.1,
    "Mar-18": 2.1,
    "Apr-18": 2,
    "May-18": 2,
    "Jun-18": 2.1,
    "Jul-18": 2.1,
    "Aug-18": 2.1,
    "Sep-18": 2.2,
    "Oct-18": 2.3,
    "Nov-18": 2.4,
    "Dec-18": 2.5
  },
  {
    "State": "Idaho",
    "Dec-08": 6.9,
    "Jan-09": 7.2,
    "Feb-09": 7.4,
    "Mar-09": 7.6,
    "Apr-09": 7.6,
    "May-09": 9.2,
    "Jun-09": 9.6,
    "Jul-09": 9.6,
    "Aug-09": 9.5,
    "Sep-09": 9.4,
    "Oct-09": 9.3,
    "Nov-09": 9.2,
    "Dec-09": 9.2,
    "Jan-10": 9.2,
    "Feb-10": 9.2,
    "Mar-10": 9.1,
    "Apr-10": 9.1,
    "May-10": 9,
    "Jun-10": 9,
    "Jul-10": 8.9,
    "Aug-10": 8.9,
    "Sep-10": 8.8,
    "Oct-10": 8.8,
    "Nov-10": 8.8,
    "Dec-10": 8.8,
    "Jan-11": 8.7,
    "Feb-11": 8.7,
    "Mar-11": 8.6,
    "Apr-11": 8.6,
    "May-11": 8.5,
    "Jun-11": 8.4,
    "Jul-11": 8.3,
    "Aug-11": 8.2,
    "Sep-11": 8.1,
    "Oct-11": 8,
    "Nov-11": 7.9,
    "Dec-11": 7.8,
    "Jan-12": 7.7,
    "Feb-12": 7.6,
    "Mar-12": 7.5,
    "Apr-12": 7.5,
    "May-12": 7.4,
    "Jun-12": 7.3,
    "Jul-12": 7.2,
    "Aug-12": 7.1,
    "Sep-12": 7,
    "Oct-12": 6.8,
    "Nov-12": 6.7,
    "Dec-12": 6.6,
    "Jan-13": 6.7,
    "Feb-13": 6.6,
    "Mar-13": 6.5,
    "Apr-13": 6.4,
    "May-13": 6.3,
    "Jun-13": 6.2,
    "Jul-13": 6.1,
    "Aug-13": 6,
    "Sep-13": 5.9,
    "Oct-13": 5.7,
    "Nov-13": 5.6,
    "Dec-13": 5.4,
    "Jan-14": 5.3,
    "Feb-14": 5.2,
    "Mar-14": 5.1,
    "Apr-14": 5,
    "May-14": 5,
    "Jun-14": 4.9,
    "Jul-14": 4.9,
    "Aug-14": 4.8,
    "Sep-14": 4.7,
    "Oct-14": 4.6,
    "Nov-14": 4.5,
    "Dec-14": 4.4,
    "Jan-15": 4.4,
    "Feb-15": 4.3,
    "Mar-15": 4.3,
    "Apr-15": 4.3,
    "May-15": 4.3,
    "Jun-15": 4.3,
    "Jul-15": 4.2,
    "Aug-15": 4.2,
    "Sep-15": 4.2,
    "Oct-15": 4.1,
    "Nov-15": 4.1,
    "Dec-15": 4,
    "Jan-16": 4,
    "Feb-16": 3.9,
    "Mar-16": 3.9,
    "Apr-16": 3.9,
    "May-16": 3.8,
    "Jun-16": 3.8,
    "Jul-16": 3.8,
    "Aug-16": 3.7,
    "Sep-16": 3.7,
    "Oct-16": 3.6,
    "Nov-16": 3.6,
    "Dec-16": 3.5,
    "Jan-17": 3.5,
    "Feb-17": 3.4,
    "Mar-17": 3.3,
    "Apr-17": 3.3,
    "May-17": 3.2,
    "Jun-17": 3.2,
    "Jul-17": 3.1,
    "Aug-17": 3.1,
    "Sep-17": 3,
    "Oct-17": 3,
    "Nov-17": 3,
    "Dec-17": 3,
    "Jan-18": 3,
    "Feb-18": 3,
    "Mar-18": 2.9,
    "Apr-18": 2.9,
    "May-18": 2.9,
    "Jun-18": 2.9,
    "Jul-18": 2.9,
    "Aug-18": 2.8,
    "Sep-18": 2.7,
    "Oct-18": 2.7,
    "Nov-18": 2.6,
    "Dec-18": 2.6
  },
  {
    "State": "Illinois",
    "Dec-08": 7.8,
    "Jan-09": 8.3,
    "Feb-09": 8.9,
    "Mar-09": 9.4,
    "Apr-09": 9.8,
    "May-09": 10.2,
    "Jun-09": 10.4,
    "Jul-09": 10.5,
    "Aug-09": 10.7,
    "Sep-09": 10.8,
    "Oct-09": 11,
    "Nov-09": 11.1,
    "Dec-09": 11.3,
    "Jan-10": 11.3,
    "Feb-10": 11.3,
    "Mar-10": 11.1,
    "Apr-10": 10.8,
    "May-10": 10.6,
    "Jun-10": 10.3,
    "Jul-10": 10.1,
    "Aug-10": 10,
    "Sep-10": 9.9,
    "Oct-10": 9.8,
    "Nov-10": 9.7,
    "Dec-10": 9.5,
    "Jan-11": 9.4,
    "Feb-11": 9.4,
    "Mar-11": 9.4,
    "Apr-11": 9.5,
    "May-11": 9.7,
    "Jun-11": 9.9,
    "Jul-11": 10,
    "Aug-11": 10.1,
    "Sep-11": 10,
    "Oct-11": 9.9,
    "Nov-11": 9.6,
    "Dec-11": 9.4,
    "Jan-12": 9.1,
    "Feb-12": 9,
    "Mar-12": 8.9,
    "Apr-12": 8.9,
    "May-12": 9,
    "Jun-12": 9,
    "Jul-12": 9,
    "Aug-12": 9,
    "Sep-12": 8.9,
    "Oct-12": 9,
    "Nov-12": 9,
    "Dec-12": 9.1,
    "Jan-13": 9.2,
    "Feb-13": 9.3,
    "Mar-13": 9.3,
    "Apr-13": 9.2,
    "May-13": 9.2,
    "Jun-13": 9.1,
    "Jul-13": 9.1,
    "Aug-13": 9.1,
    "Sep-13": 9,
    "Oct-13": 8.8,
    "Nov-13": 8.7,
    "Dec-13": 8.5,
    "Jan-14": 8.3,
    "Feb-14": 8.1,
    "Mar-14": 7.8,
    "Apr-14": 7.6,
    "May-14": 7.3,
    "Jun-14": 7.1,
    "Jul-14": 6.9,
    "Aug-14": 6.7,
    "Sep-14": 6.6,
    "Oct-14": 6.4,
    "Nov-14": 6.3,
    "Dec-14": 6.1,
    "Jan-15": 6,
    "Feb-15": 6,
    "Mar-15": 6,
    "Apr-15": 6,
    "May-15": 6,
    "Jun-15": 5.9,
    "Jul-15": 5.9,
    "Aug-15": 5.9,
    "Sep-15": 5.9,
    "Oct-15": 5.9,
    "Nov-15": 6,
    "Dec-15": 6.1,
    "Jan-16": 6.1,
    "Feb-16": 6.1,
    "Mar-16": 6.1,
    "Apr-16": 6,
    "May-16": 5.9,
    "Jun-16": 5.9,
    "Jul-16": 5.8,
    "Aug-16": 5.7,
    "Sep-16": 5.7,
    "Oct-16": 5.6,
    "Nov-16": 5.5,
    "Dec-16": 5.4,
    "Jan-17": 5.2,
    "Feb-17": 5.1,
    "Mar-17": 5,
    "Apr-17": 4.9,
    "May-17": 4.9,
    "Jun-17": 4.9,
    "Jul-17": 5,
    "Aug-17": 5,
    "Sep-17": 5,
    "Oct-17": 4.9,
    "Nov-17": 4.9,
    "Dec-17": 4.9,
    "Jan-18": 4.8,
    "Feb-18": 4.7,
    "Mar-18": 4.6,
    "Apr-18": 4.4,
    "May-18": 4.3,
    "Jun-18": 4.3,
    "Jul-18": 4.2,
    "Aug-18": 4.1,
    "Sep-18": 4.1,
    "Oct-18": 4.2,
    "Nov-18": 4.2,
    "Dec-18": 4.3
  },
  {
    "State": "Indiana",
    "Dec-08": 8.2,
    "Jan-09": 8.9,
    "Feb-09": 9.5,
    "Mar-09": 10,
    "Apr-09": 10.3,
    "May-09": 10.5,
    "Jun-09": 10.6,
    "Jul-09": 10.6,
    "Aug-09": 10.5,
    "Sep-09": 10.5,
    "Oct-09": 10.6,
    "Nov-09": 10.7,
    "Dec-09": 10.8,
    "Jan-10": 11,
    "Feb-10": 11,
    "Mar-10": 10.9,
    "Apr-10": 10.8,
    "May-10": 10.6,
    "Jun-10": 10.4,
    "Jul-10": 10.3,
    "Aug-10": 10.1,
    "Sep-10": 10,
    "Oct-10": 9.9,
    "Nov-10": 9.7,
    "Dec-10": 9.4,
    "Jan-11": 9.2,
    "Feb-11": 9,
    "Mar-11": 8.9,
    "Apr-11": 8.9,
    "May-11": 9,
    "Jun-11": 9.2,
    "Jul-11": 9.3,
    "Aug-11": 9.4,
    "Sep-11": 9.4,
    "Oct-11": 9.2,
    "Nov-11": 9,
    "Dec-11": 8.8,
    "Jan-12": 8.6,
    "Feb-12": 8.4,
    "Mar-12": 8.3,
    "Apr-12": 8.3,
    "May-12": 8.3,
    "Jun-12": 8.3,
    "Jul-12": 8.3,
    "Aug-12": 8.3,
    "Sep-12": 8.3,
    "Oct-12": 8.3,
    "Nov-12": 8.4,
    "Dec-12": 8.4,
    "Jan-13": 8.5,
    "Feb-13": 8.4,
    "Mar-13": 8.3,
    "Apr-13": 8.1,
    "May-13": 8,
    "Jun-13": 7.8,
    "Jul-13": 7.6,
    "Aug-13": 7.5,
    "Sep-13": 7.2,
    "Oct-13": 7,
    "Nov-13": 6.7,
    "Dec-13": 6.5,
    "Jan-14": 6.4,
    "Feb-14": 6.3,
    "Mar-14": 6.2,
    "Apr-14": 6.1,
    "May-14": 6.1,
    "Jun-14": 6,
    "Jul-14": 5.9,
    "Aug-14": 5.9,
    "Sep-14": 5.8,
    "Oct-14": 5.7,
    "Nov-14": 5.6,
    "Dec-14": 5.5,
    "Jan-15": 5.4,
    "Feb-15": 5.3,
    "Mar-15": 5.1,
    "Apr-15": 5,
    "May-15": 4.9,
    "Jun-15": 4.8,
    "Jul-15": 4.7,
    "Aug-15": 4.6,
    "Sep-15": 4.6,
    "Oct-15": 4.5,
    "Nov-15": 4.6,
    "Dec-15": 4.6,
    "Jan-16": 4.6,
    "Feb-16": 4.7,
    "Mar-16": 4.7,
    "Apr-16": 4.7,
    "May-16": 4.6,
    "Jun-16": 4.5,
    "Jul-16": 4.4,
    "Aug-16": 4.3,
    "Sep-16": 4.3,
    "Oct-16": 4.2,
    "Nov-16": 4.1,
    "Dec-16": 4,
    "Jan-17": 3.8,
    "Feb-17": 3.7,
    "Mar-17": 3.6,
    "Apr-17": 3.5,
    "May-17": 3.5,
    "Jun-17": 3.5,
    "Jul-17": 3.6,
    "Aug-17": 3.6,
    "Sep-17": 3.5,
    "Oct-17": 3.5,
    "Nov-17": 3.4,
    "Dec-17": 3.4,
    "Jan-18": 3.3,
    "Feb-18": 3.2,
    "Mar-18": 3.2,
    "Apr-18": 3.2,
    "May-18": 3.2,
    "Jun-18": 3.3,
    "Jul-18": 3.4,
    "Aug-18": 3.5,
    "Sep-18": 3.5,
    "Oct-18": 3.5,
    "Nov-18": 3.6,
    "Dec-18": 3.6
  },
  {
    "State": "Iowa",
    "Dec-08": 5.3,
    "Jan-09": 5.7,
    "Feb-09": 6,
    "Mar-09": 6.3,
    "Apr-09": 6.5,
    "May-09": 6.6,
    "Jun-09": 6.6,
    "Jul-09": 6.6,
    "Aug-09": 6.6,
    "Sep-09": 6.5,
    "Oct-09": 6.5,
    "Nov-09": 6.4,
    "Dec-09": 6.4,
    "Jan-10": 6.4,
    "Feb-10": 6.3,
    "Mar-10": 6.2,
    "Apr-10": 6.1,
    "May-10": 6,
    "Jun-10": 5.9,
    "Jul-10": 5.9,
    "Aug-10": 5.9,
    "Sep-10": 5.9,
    "Oct-10": 5.9,
    "Nov-10": 5.8,
    "Dec-10": 5.8,
    "Jan-11": 5.7,
    "Feb-11": 5.7,
    "Mar-11": 5.6,
    "Apr-11": 5.6,
    "May-11": 5.5,
    "Jun-11": 5.5,
    "Jul-11": 5.5,
    "Aug-11": 5.5,
    "Sep-11": 5.5,
    "Oct-11": 5.5,
    "Nov-11": 5.4,
    "Dec-11": 5.3,
    "Jan-12": 5.2,
    "Feb-12": 5.1,
    "Mar-12": 5.1,
    "Apr-12": 5.1,
    "May-12": 5,
    "Jun-12": 5.1,
    "Jul-12": 5,
    "Aug-12": 5,
    "Sep-12": 5,
    "Oct-12": 5,
    "Nov-12": 4.9,
    "Dec-12": 4.9,
    "Jan-13": 4.9,
    "Feb-13": 4.9,
    "Mar-13": 4.9,
    "Apr-13": 4.9,
    "May-13": 4.9,
    "Jun-13": 4.8,
    "Jul-13": 4.7,
    "Aug-13": 4.7,
    "Sep-13": 4.6,
    "Oct-13": 4.5,
    "Nov-13": 4.5,
    "Dec-13": 4.5,
    "Jan-14": 4.4,
    "Feb-14": 4.4,
    "Mar-14": 4.4,
    "Apr-14": 4.3,
    "May-14": 4.3,
    "Jun-14": 4.3,
    "Jul-14": 4.2,
    "Aug-14": 4.2,
    "Sep-14": 4.2,
    "Oct-14": 4.1,
    "Nov-14": 4.1,
    "Dec-14": 4,
    "Jan-15": 3.9,
    "Feb-15": 3.9,
    "Mar-15": 3.9,
    "Apr-15": 3.8,
    "May-15": 3.8,
    "Jun-15": 3.8,
    "Jul-15": 3.7,
    "Aug-15": 3.7,
    "Sep-15": 3.7,
    "Oct-15": 3.7,
    "Nov-15": 3.7,
    "Dec-15": 3.7,
    "Jan-16": 3.6,
    "Feb-16": 3.6,
    "Mar-16": 3.6,
    "Apr-16": 3.6,
    "May-16": 3.7,
    "Jun-16": 3.7,
    "Jul-16": 3.7,
    "Aug-16": 3.6,
    "Sep-16": 3.6,
    "Oct-16": 3.6,
    "Nov-16": 3.5,
    "Dec-16": 3.5,
    "Jan-17": 3.4,
    "Feb-17": 3.4,
    "Mar-17": 3.3,
    "Apr-17": 3.3,
    "May-17": 3.2,
    "Jun-17": 3.2,
    "Jul-17": 3.1,
    "Aug-17": 3,
    "Sep-17": 3,
    "Oct-17": 2.9,
    "Nov-17": 2.9,
    "Dec-17": 2.9,
    "Jan-18": 2.9,
    "Feb-18": 2.9,
    "Mar-18": 2.8,
    "Apr-18": 2.8,
    "May-18": 2.7,
    "Jun-18": 2.7,
    "Jul-18": 2.6,
    "Aug-18": 2.5,
    "Sep-18": 2.5,
    "Oct-18": 2.4,
    "Nov-18": 2.4,
    "Dec-18": 2.4
  },
  {
    "State": "Kansas",
    "Dec-08": 5.5,
    "Jan-09": 5.8,
    "Feb-09": 6.1,
    "Mar-09": 6.4,
    "Apr-09": 6.7,
    "May-09": 7,
    "Jun-09": 7.1,
    "Jul-09": 7.2,
    "Aug-09": 7.3,
    "Sep-09": 7.2,
    "Oct-09": 7.2,
    "Nov-09": 7.2,
    "Dec-09": 7.2,
    "Jan-10": 7.2,
    "Feb-10": 7.2,
    "Mar-10": 7.2,
    "Apr-10": 7.1,
    "May-10": 7,
    "Jun-10": 7,
    "Jul-10": 7,
    "Aug-10": 7,
    "Sep-10": 7,
    "Oct-10": 7,
    "Nov-10": 7,
    "Dec-10": 7,
    "Jan-11": 6.9,
    "Feb-11": 6.9,
    "Mar-11": 6.8,
    "Apr-11": 6.6,
    "May-11": 6.5,
    "Jun-11": 6.5,
    "Jul-11": 6.4,
    "Aug-11": 6.4,
    "Sep-11": 6.3,
    "Oct-11": 6.3,
    "Nov-11": 6.2,
    "Dec-11": 6.1,
    "Jan-12": 6,
    "Feb-12": 5.9,
    "Mar-12": 5.9,
    "Apr-12": 5.8,
    "May-12": 5.8,
    "Jun-12": 5.7,
    "Jul-12": 5.7,
    "Aug-12": 5.6,
    "Sep-12": 5.6,
    "Oct-12": 5.6,
    "Nov-12": 5.6,
    "Dec-12": 5.6,
    "Jan-13": 5.6,
    "Feb-13": 5.5,
    "Mar-13": 5.5,
    "Apr-13": 5.5,
    "May-13": 5.4,
    "Jun-13": 5.4,
    "Jul-13": 5.3,
    "Aug-13": 5.3,
    "Sep-13": 5.2,
    "Oct-13": 5.1,
    "Nov-13": 5,
    "Dec-13": 4.9,
    "Jan-14": 4.8,
    "Feb-14": 4.8,
    "Mar-14": 4.7,
    "Apr-14": 4.7,
    "May-14": 4.6,
    "Jun-14": 4.6,
    "Jul-14": 4.5,
    "Aug-14": 4.4,
    "Sep-14": 4.4,
    "Oct-14": 4.3,
    "Nov-14": 4.3,
    "Dec-14": 4.3,
    "Jan-15": 4.3,
    "Feb-15": 4.3,
    "Mar-15": 4.4,
    "Apr-15": 4.4,
    "May-15": 4.3,
    "Jun-15": 4.2,
    "Jul-15": 4.1,
    "Aug-15": 4,
    "Sep-15": 4,
    "Oct-15": 4,
    "Nov-15": 3.9,
    "Dec-15": 3.9,
    "Jan-16": 3.9,
    "Feb-16": 3.9,
    "Mar-16": 3.9,
    "Apr-16": 4,
    "May-16": 4,
    "Jun-16": 4.1,
    "Jul-16": 4.1,
    "Aug-16": 4.1,
    "Sep-16": 4.2,
    "Oct-16": 4.1,
    "Nov-16": 4.1,
    "Dec-16": 4,
    "Jan-17": 3.9,
    "Feb-17": 3.8,
    "Mar-17": 3.7,
    "Apr-17": 3.6,
    "May-17": 3.6,
    "Jun-17": 3.6,
    "Jul-17": 3.6,
    "Aug-17": 3.6,
    "Sep-17": 3.6,
    "Oct-17": 3.5,
    "Nov-17": 3.5,
    "Dec-17": 3.5,
    "Jan-18": 3.5,
    "Feb-18": 3.4,
    "Mar-18": 3.4,
    "Apr-18": 3.4,
    "May-18": 3.4,
    "Jun-18": 3.4,
    "Jul-18": 3.4,
    "Aug-18": 3.3,
    "Sep-18": 3.3,
    "Oct-18": 3.3,
    "Nov-18": 3.2,
    "Dec-18": 3.3
  },
  {
    "State": "Kentucky",
    "Dec-08": 8.4,
    "Jan-09": 9,
    "Feb-09": 9.6,
    "Mar-09": 10,
    "Apr-09": 10.4,
    "May-09": 10.6,
    "Jun-09": 10.7,
    "Jul-09": 10.7,
    "Aug-09": 10.6,
    "Sep-09": 10.6,
    "Oct-09": 10.6,
    "Nov-09": 10.6,
    "Dec-09": 10.6,
    "Jan-10": 10.6,
    "Feb-10": 10.6,
    "Mar-10": 10.5,
    "Apr-10": 10.3,
    "May-10": 10.2,
    "Jun-10": 10,
    "Jul-10": 9.9,
    "Aug-10": 9.9,
    "Sep-10": 10,
    "Oct-10": 10,
    "Nov-10": 10,
    "Dec-10": 10,
    "Jan-11": 9.8,
    "Feb-11": 9.7,
    "Mar-11": 9.6,
    "Apr-11": 9.6,
    "May-11": 9.5,
    "Jun-11": 9.5,
    "Jul-11": 9.5,
    "Aug-11": 9.4,
    "Sep-11": 9.3,
    "Oct-11": 9.1,
    "Nov-11": 8.9,
    "Dec-11": 8.6,
    "Jan-12": 8.4,
    "Feb-12": 8.2,
    "Mar-12": 8.1,
    "Apr-12": 8.1,
    "May-12": 8.1,
    "Jun-12": 8.2,
    "Jul-12": 8.2,
    "Aug-12": 8.2,
    "Sep-12": 8.2,
    "Oct-12": 8.1,
    "Nov-12": 8.1,
    "Dec-12": 8.1,
    "Jan-13": 8.1,
    "Feb-13": 8.1,
    "Mar-13": 8.1,
    "Apr-13": 8.1,
    "May-13": 8.1,
    "Jun-13": 8.1,
    "Jul-13": 8.1,
    "Aug-13": 8.1,
    "Sep-13": 8,
    "Oct-13": 7.9,
    "Nov-13": 7.8,
    "Dec-13": 7.7,
    "Jan-14": 7.5,
    "Feb-14": 7.4,
    "Mar-14": 7.2,
    "Apr-14": 7,
    "May-14": 6.8,
    "Jun-14": 6.5,
    "Jul-14": 6.3,
    "Aug-14": 6.1,
    "Sep-14": 5.9,
    "Oct-14": 5.7,
    "Nov-14": 5.6,
    "Dec-14": 5.5,
    "Jan-15": 5.4,
    "Feb-15": 5.4,
    "Mar-15": 5.3,
    "Apr-15": 5.3,
    "May-15": 5.3,
    "Jun-15": 5.3,
    "Jul-15": 5.2,
    "Aug-15": 5.2,
    "Sep-15": 5.2,
    "Oct-15": 5.3,
    "Nov-15": 5.3,
    "Dec-15": 5.3,
    "Jan-16": 5.3,
    "Feb-16": 5.2,
    "Mar-16": 5.1,
    "Apr-16": 5.1,
    "May-16": 5.1,
    "Jun-16": 5.1,
    "Jul-16": 5.1,
    "Aug-16": 5.1,
    "Sep-16": 5.1,
    "Oct-16": 5.2,
    "Nov-16": 5.2,
    "Dec-16": 5.2,
    "Jan-17": 5.2,
    "Feb-17": 5.1,
    "Mar-17": 5.2,
    "Apr-17": 5.2,
    "May-17": 5.1,
    "Jun-17": 5.1,
    "Jul-17": 5,
    "Aug-17": 4.9,
    "Sep-17": 4.7,
    "Oct-17": 4.6,
    "Nov-17": 4.5,
    "Dec-17": 4.5,
    "Jan-18": 4.3,
    "Feb-18": 4.1,
    "Mar-18": 4,
    "Apr-18": 4,
    "May-18": 4.1,
    "Jun-18": 4.2,
    "Jul-18": 4.3,
    "Aug-18": 4.4,
    "Sep-18": 4.5,
    "Oct-18": 4.5,
    "Nov-18": 4.5,
    "Dec-18": 4.4
  },
  {
    "State": "Louisiana",
    "Dec-08": 5.9,
    "Jan-09": 6.1,
    "Feb-09": 6.2,
    "Mar-09": 6.4,
    "Apr-09": 6.6,
    "May-09": 6.7,
    "Jun-09": 6.9,
    "Jul-09": 7,
    "Aug-09": 7.1,
    "Sep-09": 7.1,
    "Oct-09": 7.2,
    "Nov-09": 7.3,
    "Dec-09": 7.3,
    "Jan-10": 7.4,
    "Feb-10": 7.5,
    "Mar-10": 7.6,
    "Apr-10": 7.7,
    "May-10": 7.8,
    "Jun-10": 7.9,
    "Jul-10": 8,
    "Aug-10": 8.2,
    "Sep-10": 8.3,
    "Oct-10": 8.3,
    "Nov-10": 8.4,
    "Dec-10": 8.3,
    "Jan-11": 8.3,
    "Feb-11": 8.2,
    "Mar-11": 8.1,
    "Apr-11": 8,
    "May-11": 7.9,
    "Jun-11": 7.8,
    "Jul-11": 7.7,
    "Aug-11": 7.7,
    "Sep-11": 7.6,
    "Oct-11": 7.6,
    "Nov-11": 7.6,
    "Dec-11": 7.5,
    "Jan-12": 7.5,
    "Feb-12": 7.4,
    "Mar-12": 7.4,
    "Apr-12": 7.4,
    "May-12": 7.3,
    "Jun-12": 7.2,
    "Jul-12": 7,
    "Aug-12": 6.8,
    "Sep-12": 6.7,
    "Oct-12": 6.7,
    "Nov-12": 6.8,
    "Dec-12": 6.9,
    "Jan-13": 7,
    "Feb-13": 7.1,
    "Mar-13": 7.2,
    "Apr-13": 7.1,
    "May-13": 7,
    "Jun-13": 6.9,
    "Jul-13": 6.8,
    "Aug-13": 6.6,
    "Sep-13": 6.4,
    "Oct-13": 6.2,
    "Nov-13": 6,
    "Dec-13": 5.8,
    "Jan-14": 5.7,
    "Feb-14": 5.7,
    "Mar-14": 5.7,
    "Apr-14": 5.9,
    "May-14": 6.1,
    "Jun-14": 6.3,
    "Jul-14": 6.6,
    "Aug-14": 6.8,
    "Sep-14": 6.9,
    "Oct-14": 7,
    "Nov-14": 7,
    "Dec-14": 6.9,
    "Jan-15": 6.9,
    "Feb-15": 6.8,
    "Mar-15": 6.7,
    "Apr-15": 6.5,
    "May-15": 6.4,
    "Jun-15": 6.3,
    "Jul-15": 6.2,
    "Aug-15": 6.1,
    "Sep-15": 6,
    "Oct-15": 6,
    "Nov-15": 6,
    "Dec-15": 6.1,
    "Jan-16": 6.1,
    "Feb-16": 6.1,
    "Mar-16": 6.1,
    "Apr-16": 6.1,
    "May-16": 6.1,
    "Jun-16": 6.1,
    "Jul-16": 6.1,
    "Aug-16": 6.1,
    "Sep-16": 6.1,
    "Oct-16": 6,
    "Nov-16": 5.9,
    "Dec-16": 5.9,
    "Jan-17": 5.8,
    "Feb-17": 5.7,
    "Mar-17": 5.6,
    "Apr-17": 5.4,
    "May-17": 5.3,
    "Jun-17": 5.2,
    "Jul-17": 5,
    "Aug-17": 4.9,
    "Sep-17": 4.8,
    "Oct-17": 4.7,
    "Nov-17": 4.7,
    "Dec-17": 4.7,
    "Jan-18": 4.6,
    "Feb-18": 4.5,
    "Mar-18": 4.4,
    "Apr-18": 4.5,
    "May-18": 4.6,
    "Jun-18": 4.7,
    "Jul-18": 4.9,
    "Aug-18": 5,
    "Sep-18": 5,
    "Oct-18": 5,
    "Nov-18": 5,
    "Dec-18": 4.9
  },
  {
    "State": "Maine",
    "Dec-08": 7,
    "Jan-09": 7.4,
    "Feb-09": 7.7,
    "Mar-09": 8,
    "Apr-09": 8.2,
    "May-09": 8.2,
    "Jun-09": 8.3,
    "Jul-09": 8.2,
    "Aug-09": 8.2,
    "Sep-09": 8.2,
    "Oct-09": 8.2,
    "Nov-09": 8.2,
    "Dec-09": 8.2,
    "Jan-10": 8.2,
    "Feb-10": 8.2,
    "Mar-10": 8.2,
    "Apr-10": 8.1,
    "May-10": 8.1,
    "Jun-10": 8.1,
    "Jul-10": 8.1,
    "Aug-10": 8.1,
    "Sep-10": 8.1,
    "Oct-10": 8.1,
    "Nov-10": 8.1,
    "Dec-10": 8.1,
    "Jan-11": 8.1,
    "Feb-11": 8.1,
    "Mar-11": 8,
    "Apr-11": 8,
    "May-11": 8,
    "Jun-11": 7.9,
    "Jul-11": 7.9,
    "Aug-11": 7.8,
    "Sep-11": 7.8,
    "Oct-11": 7.7,
    "Nov-11": 7.7,
    "Dec-11": 7.7,
    "Jan-12": 7.7,
    "Feb-12": 7.7,
    "Mar-12": 7.6,
    "Apr-12": 7.6,
    "May-12": 7.6,
    "Jun-12": 7.5,
    "Jul-12": 7.5,
    "Aug-12": 7.4,
    "Sep-12": 7.3,
    "Oct-12": 7.3,
    "Nov-12": 7.2,
    "Dec-12": 7.2,
    "Jan-13": 7.1,
    "Feb-13": 7.1,
    "Mar-13": 7,
    "Apr-13": 6.9,
    "May-13": 6.8,
    "Jun-13": 6.7,
    "Jul-13": 6.6,
    "Aug-13": 6.5,
    "Sep-13": 6.4,
    "Oct-13": 6.3,
    "Nov-13": 6.2,
    "Dec-13": 6.2,
    "Jan-14": 6.1,
    "Feb-14": 6.1,
    "Mar-14": 6,
    "Apr-14": 5.9,
    "May-14": 5.8,
    "Jun-14": 5.7,
    "Jul-14": 5.5,
    "Aug-14": 5.5,
    "Sep-14": 5.4,
    "Oct-14": 5.3,
    "Nov-14": 5.2,
    "Dec-14": 5.1,
    "Jan-15": 5,
    "Feb-15": 4.8,
    "Mar-15": 4.7,
    "Apr-15": 4.6,
    "May-15": 4.5,
    "Jun-15": 4.4,
    "Jul-15": 4.3,
    "Aug-15": 4.2,
    "Sep-15": 4.1,
    "Oct-15": 4,
    "Nov-15": 4,
    "Dec-15": 3.9,
    "Jan-16": 3.9,
    "Feb-16": 3.8,
    "Mar-16": 3.8,
    "Apr-16": 3.8,
    "May-16": 3.8,
    "Jun-16": 3.9,
    "Jul-16": 3.9,
    "Aug-16": 3.9,
    "Sep-16": 3.8,
    "Oct-16": 3.7,
    "Nov-16": 3.6,
    "Dec-16": 3.5,
    "Jan-17": 3.4,
    "Feb-17": 3.3,
    "Mar-17": 3.3,
    "Apr-17": 3.3,
    "May-17": 3.4,
    "Jun-17": 3.5,
    "Jul-17": 3.5,
    "Aug-17": 3.4,
    "Sep-17": 3.3,
    "Oct-17": 3.2,
    "Nov-17": 3.1,
    "Dec-17": 3.1,
    "Jan-18": 3,
    "Feb-18": 2.9,
    "Mar-18": 2.7,
    "Apr-18": 2.7,
    "May-18": 2.8,
    "Jun-18": 2.9,
    "Jul-18": 3,
    "Aug-18": 3.2,
    "Sep-18": 3.3,
    "Oct-18": 3.4,
    "Nov-18": 3.4,
    "Dec-18": 3.4
  },
  {
    "State": "Maryland",
    "Dec-08": 5.7,
    "Jan-09": 6.1,
    "Feb-09": 6.4,
    "Mar-09": 6.7,
    "Apr-09": 6.8,
    "May-09": 7,
    "Jun-09": 7,
    "Jul-09": 7.1,
    "Aug-09": 7.2,
    "Sep-09": 7.3,
    "Oct-09": 7.4,
    "Nov-09": 7.5,
    "Dec-09": 7.7,
    "Jan-10": 7.8,
    "Feb-10": 7.8,
    "Mar-10": 7.8,
    "Apr-10": 7.7,
    "May-10": 7.7,
    "Jun-10": 7.6,
    "Jul-10": 7.6,
    "Aug-10": 7.6,
    "Sep-10": 7.6,
    "Oct-10": 7.6,
    "Nov-10": 7.5,
    "Dec-10": 7.5,
    "Jan-11": 7.4,
    "Feb-11": 7.3,
    "Mar-11": 7.3,
    "Apr-11": 7.3,
    "May-11": 7.3,
    "Jun-11": 7.3,
    "Jul-11": 7.3,
    "Aug-11": 7.3,
    "Sep-11": 7.2,
    "Oct-11": 7.2,
    "Nov-11": 7.1,
    "Dec-11": 7,
    "Jan-12": 7,
    "Feb-12": 7,
    "Mar-12": 7,
    "Apr-12": 7,
    "May-12": 7,
    "Jun-12": 7,
    "Jul-12": 7,
    "Aug-12": 7,
    "Sep-12": 6.9,
    "Oct-12": 6.9,
    "Nov-12": 6.9,
    "Dec-12": 6.9,
    "Jan-13": 6.9,
    "Feb-13": 6.8,
    "Mar-13": 6.8,
    "Apr-13": 6.7,
    "May-13": 6.7,
    "Jun-13": 6.6,
    "Jul-13": 6.6,
    "Aug-13": 6.5,
    "Sep-13": 6.4,
    "Oct-13": 6.3,
    "Nov-13": 6.3,
    "Dec-13": 6.2,
    "Jan-14": 6.1,
    "Feb-14": 6,
    "Mar-14": 6,
    "Apr-14": 5.9,
    "May-14": 5.9,
    "Jun-14": 5.9,
    "Jul-14": 5.8,
    "Aug-14": 5.7,
    "Sep-14": 5.7,
    "Oct-14": 5.6,
    "Nov-14": 5.6,
    "Dec-14": 5.5,
    "Jan-15": 5.5,
    "Feb-15": 5.4,
    "Mar-15": 5.3,
    "Apr-15": 5.3,
    "May-15": 5.2,
    "Jun-15": 5.1,
    "Jul-15": 5,
    "Aug-15": 5,
    "Sep-15": 4.9,
    "Oct-15": 4.8,
    "Nov-15": 4.7,
    "Dec-15": 4.7,
    "Jan-16": 4.6,
    "Feb-16": 4.5,
    "Mar-16": 4.5,
    "Apr-16": 4.4,
    "May-16": 4.4,
    "Jun-16": 4.4,
    "Jul-16": 4.4,
    "Aug-16": 4.4,
    "Sep-16": 4.4,
    "Oct-16": 4.4,
    "Nov-16": 4.4,
    "Dec-16": 4.4,
    "Jan-17": 4.3,
    "Feb-17": 4.3,
    "Mar-17": 4.2,
    "Apr-17": 4.2,
    "May-17": 4.1,
    "Jun-17": 4.1,
    "Jul-17": 4.1,
    "Aug-17": 4,
    "Sep-17": 4,
    "Oct-17": 4,
    "Nov-17": 4.1,
    "Dec-17": 4.1,
    "Jan-18": 4.1,
    "Feb-18": 4.2,
    "Mar-18": 4.3,
    "Apr-18": 4.3,
    "May-18": 4.3,
    "Jun-18": 4.3,
    "Jul-18": 4.3,
    "Aug-18": 4.2,
    "Sep-18": 4.2,
    "Oct-18": 4.1,
    "Nov-18": 4,
    "Dec-18": 3.9
  },
  {
    "State": "Massachusetts",
    "Dec-08": 6.8,
    "Jan-09": 7.1,
    "Feb-09": 7.3,
    "Mar-09": 7.5,
    "Apr-09": 7.7,
    "May-09": 7.9,
    "Jun-09": 8.1,
    "Jul-09": 8.3,
    "Aug-09": 8.5,
    "Sep-09": 8.6,
    "Oct-09": 8.7,
    "Nov-09": 8.7,
    "Dec-09": 8.8,
    "Jan-10": 8.8,
    "Feb-10": 8.7,
    "Mar-10": 8.7,
    "Apr-10": 8.6,
    "May-10": 8.4,
    "Jun-10": 8.3,
    "Jul-10": 8.2,
    "Aug-10": 8.1,
    "Sep-10": 8,
    "Oct-10": 8,
    "Nov-10": 7.9,
    "Dec-10": 7.8,
    "Jan-11": 7.8,
    "Feb-11": 7.6,
    "Mar-11": 7.5,
    "Apr-11": 7.4,
    "May-11": 7.4,
    "Jun-11": 7.3,
    "Jul-11": 7.2,
    "Aug-11": 7.1,
    "Sep-11": 7,
    "Oct-11": 6.9,
    "Nov-11": 6.9,
    "Dec-11": 6.8,
    "Jan-12": 6.7,
    "Feb-12": 6.7,
    "Mar-12": 6.6,
    "Apr-12": 6.6,
    "May-12": 6.6,
    "Jun-12": 6.6,
    "Jul-12": 6.6,
    "Aug-12": 6.6,
    "Sep-12": 6.7,
    "Oct-12": 6.7,
    "Nov-12": 6.7,
    "Dec-12": 6.8,
    "Jan-13": 6.8,
    "Feb-13": 6.9,
    "Mar-13": 6.9,
    "Apr-13": 6.9,
    "May-13": 6.9,
    "Jun-13": 6.9,
    "Jul-13": 6.8,
    "Aug-13": 6.7,
    "Sep-13": 6.6,
    "Oct-13": 6.5,
    "Nov-13": 6.4,
    "Dec-13": 6.3,
    "Jan-14": 6.2,
    "Feb-14": 6.1,
    "Mar-14": 6,
    "Apr-14": 5.9,
    "May-14": 5.9,
    "Jun-14": 5.8,
    "Jul-14": 5.7,
    "Aug-14": 5.7,
    "Sep-14": 5.6,
    "Oct-14": 5.5,
    "Nov-14": 5.3,
    "Dec-14": 5.2,
    "Jan-15": 5.1,
    "Feb-15": 5.1,
    "Mar-15": 5,
    "Apr-15": 5,
    "May-15": 4.9,
    "Jun-15": 4.8,
    "Jul-15": 4.8,
    "Aug-15": 4.7,
    "Sep-15": 4.6,
    "Oct-15": 4.6,
    "Nov-15": 4.5,
    "Dec-15": 4.4,
    "Jan-16": 4.3,
    "Feb-16": 4.2,
    "Mar-16": 4.1,
    "Apr-16": 4,
    "May-16": 3.9,
    "Jun-16": 3.8,
    "Jul-16": 3.7,
    "Aug-16": 3.7,
    "Sep-16": 3.7,
    "Oct-16": 3.7,
    "Nov-16": 3.8,
    "Dec-16": 3.8,
    "Jan-17": 3.9,
    "Feb-17": 3.9,
    "Mar-17": 3.9,
    "Apr-17": 3.9,
    "May-17": 3.8,
    "Jun-17": 3.8,
    "Jul-17": 3.7,
    "Aug-17": 3.6,
    "Sep-17": 3.6,
    "Oct-17": 3.5,
    "Nov-17": 3.5,
    "Dec-17": 3.5,
    "Jan-18": 3.5,
    "Feb-18": 3.5,
    "Mar-18": 3.5,
    "Apr-18": 3.5,
    "May-18": 3.5,
    "Jun-18": 3.5,
    "Jul-18": 3.6,
    "Aug-18": 3.6,
    "Sep-18": 3.6,
    "Oct-18": 3.5,
    "Nov-18": 3.4,
    "Dec-18": 3.3
  },
  {
    "State": "Michigan",
    "Dec-08": 9.8,
    "Jan-09": 10.9,
    "Feb-09": 12,
    "Mar-09": 12.9,
    "Apr-09": 13.6,
    "May-09": 14.2,
    "Jun-09": 14.6,
    "Jul-09": 14.5,
    "Aug-09": 14.4,
    "Sep-09": 14.2,
    "Oct-09": 14.1,
    "Nov-09": 14,
    "Dec-09": 13.9,
    "Jan-10": 13.9,
    "Feb-10": 13.7,
    "Mar-10": 13.5,
    "Apr-10": 13.2,
    "May-10": 12.9,
    "Jun-10": 12.6,
    "Jul-10": 12.3,
    "Aug-10": 12.1,
    "Sep-10": 12,
    "Oct-10": 11.8,
    "Nov-10": 11.6,
    "Dec-10": 11.3,
    "Jan-11": 11,
    "Feb-11": 10.8,
    "Mar-11": 10.7,
    "Apr-11": 10.6,
    "May-11": 10.6,
    "Jun-11": 10.6,
    "Jul-11": 10.6,
    "Aug-11": 10.5,
    "Sep-11": 10.2,
    "Oct-11": 10,
    "Nov-11": 9.7,
    "Dec-11": 9.4,
    "Jan-12": 9.2,
    "Feb-12": 9.1,
    "Mar-12": 9.1,
    "Apr-12": 9.2,
    "May-12": 9.2,
    "Jun-12": 9.2,
    "Jul-12": 9.2,
    "Aug-12": 9.1,
    "Sep-12": 9.1,
    "Oct-12": 9,
    "Nov-12": 9,
    "Dec-12": 9.1,
    "Jan-13": 9.1,
    "Feb-13": 9.1,
    "Mar-13": 9,
    "Apr-13": 8.9,
    "May-13": 8.9,
    "Jun-13": 8.8,
    "Jul-13": 8.8,
    "Aug-13": 8.8,
    "Sep-13": 8.7,
    "Oct-13": 8.6,
    "Nov-13": 8.4,
    "Dec-13": 8.3,
    "Jan-14": 8.1,
    "Feb-14": 8,
    "Mar-14": 7.9,
    "Apr-14": 7.7,
    "May-14": 7.5,
    "Jun-14": 7.4,
    "Jul-14": 7.2,
    "Aug-14": 7,
    "Sep-14": 6.8,
    "Oct-14": 6.6,
    "Nov-14": 6.4,
    "Dec-14": 6.2,
    "Jan-15": 6,
    "Feb-15": 5.9,
    "Mar-15": 5.8,
    "Apr-15": 5.7,
    "May-15": 5.6,
    "Jun-15": 5.5,
    "Jul-15": 5.3,
    "Aug-15": 5.2,
    "Sep-15": 5.1,
    "Oct-15": 5,
    "Nov-15": 4.9,
    "Dec-15": 4.9,
    "Jan-16": 4.9,
    "Feb-16": 4.9,
    "Mar-16": 4.9,
    "Apr-16": 4.9,
    "May-16": 4.9,
    "Jun-16": 4.9,
    "Jul-16": 5,
    "Aug-16": 5,
    "Sep-16": 5.1,
    "Oct-16": 5.1,
    "Nov-16": 5.2,
    "Dec-16": 5.1,
    "Jan-17": 5,
    "Feb-17": 4.8,
    "Mar-17": 4.6,
    "Apr-17": 4.4,
    "May-17": 4.4,
    "Jun-17": 4.4,
    "Jul-17": 4.5,
    "Aug-17": 4.6,
    "Sep-17": 4.7,
    "Oct-17": 4.7,
    "Nov-17": 4.7,
    "Dec-17": 4.7,
    "Jan-18": 4.7,
    "Feb-18": 4.8,
    "Mar-18": 4.7,
    "Apr-18": 4.7,
    "May-18": 4.6,
    "Jun-18": 4.4,
    "Jul-18": 4.3,
    "Aug-18": 4.1,
    "Sep-18": 4,
    "Oct-18": 3.9,
    "Nov-18": 3.9,
    "Dec-18": 4
  },
  {
    "State": "Minnesota",
    "Dec-08": 6.7,
    "Jan-09": 7,
    "Feb-09": 7.4,
    "Mar-09": 7.7,
    "Apr-09": 7.9,
    "May-09": 8,
    "Jun-09": 8,
    "Jul-09": 8,
    "Aug-09": 8,
    "Sep-09": 7.9,
    "Oct-09": 7.8,
    "Nov-09": 7.8,
    "Dec-09": 7.7,
    "Jan-10": 7.7,
    "Feb-10": 7.7,
    "Mar-10": 7.6,
    "Apr-10": 7.5,
    "May-10": 7.4,
    "Jun-10": 7.3,
    "Jul-10": 7.3,
    "Aug-10": 7.3,
    "Sep-10": 7.3,
    "Oct-10": 7.3,
    "Nov-10": 7.2,
    "Dec-10": 7.1,
    "Jan-11": 6.9,
    "Feb-11": 6.8,
    "Mar-11": 6.7,
    "Apr-11": 6.7,
    "May-11": 6.7,
    "Jun-11": 6.7,
    "Jul-11": 6.6,
    "Aug-11": 6.5,
    "Sep-11": 6.3,
    "Oct-11": 6.1,
    "Nov-11": 6,
    "Dec-11": 5.9,
    "Jan-12": 5.8,
    "Feb-12": 5.7,
    "Mar-12": 5.7,
    "Apr-12": 5.7,
    "May-12": 5.6,
    "Jun-12": 5.6,
    "Jul-12": 5.6,
    "Aug-12": 5.6,
    "Sep-12": 5.6,
    "Oct-12": 5.5,
    "Nov-12": 5.5,
    "Dec-12": 5.4,
    "Jan-13": 5.3,
    "Feb-13": 5.2,
    "Mar-13": 5.2,
    "Apr-13": 5.1,
    "May-13": 5,
    "Jun-13": 5,
    "Jul-13": 4.9,
    "Aug-13": 4.9,
    "Sep-13": 4.8,
    "Oct-13": 4.7,
    "Nov-13": 4.7,
    "Dec-13": 4.7,
    "Jan-14": 4.6,
    "Feb-14": 4.6,
    "Mar-14": 4.5,
    "Apr-14": 4.4,
    "May-14": 4.3,
    "Jun-14": 4.2,
    "Jul-14": 4,
    "Aug-14": 4,
    "Sep-14": 3.9,
    "Oct-14": 3.9,
    "Nov-14": 3.8,
    "Dec-14": 3.8,
    "Jan-15": 3.8,
    "Feb-15": 3.7,
    "Mar-15": 3.7,
    "Apr-15": 3.7,
    "May-15": 3.7,
    "Jun-15": 3.7,
    "Jul-15": 3.7,
    "Aug-15": 3.6,
    "Sep-15": 3.6,
    "Oct-15": 3.6,
    "Nov-15": 3.6,
    "Dec-15": 3.7,
    "Jan-16": 3.7,
    "Feb-16": 3.7,
    "Mar-16": 3.7,
    "Apr-16": 3.8,
    "May-16": 3.8,
    "Jun-16": 3.8,
    "Jul-16": 3.9,
    "Aug-16": 4,
    "Sep-16": 4,
    "Oct-16": 4,
    "Nov-16": 4,
    "Dec-16": 3.9,
    "Jan-17": 3.8,
    "Feb-17": 3.7,
    "Mar-17": 3.6,
    "Apr-17": 3.5,
    "May-17": 3.5,
    "Jun-17": 3.4,
    "Jul-17": 3.4,
    "Aug-17": 3.4,
    "Sep-17": 3.3,
    "Oct-17": 3.3,
    "Nov-17": 3.3,
    "Dec-17": 3.3,
    "Jan-18": 3.3,
    "Feb-18": 3.2,
    "Mar-18": 3.2,
    "Apr-18": 3.2,
    "May-18": 3.1,
    "Jun-18": 3.1,
    "Jul-18": 3,
    "Aug-18": 2.9,
    "Sep-18": 2.8,
    "Oct-18": 2.8,
    "Nov-18": 2.8,
    "Dec-18": 2.8
  },
  {
    "State": "Mississippi",
    "Dec-08": 7.6,
    "Jan-09": 8,
    "Feb-09": 8.5,
    "Mar-09": 8.9,
    "Apr-09": 9.1,
    "May-09": 9.3,
    "Jun-09": 9.4,
    "Jul-09": 9.5,
    "Aug-09": 9.7,
    "Sep-09": 9.9,
    "Oct-09": 10.2,
    "Nov-09": 10.5,
    "Dec-09": 10.7,
    "Jan-10": 10.8,
    "Feb-10": 10.9,
    "Mar-10": 10.8,
    "Apr-10": 10.7,
    "May-10": 10.6,
    "Jun-10": 10.2,
    "Jul-10": 10,
    "Aug-10": 10,
    "Sep-10": 10,
    "Oct-10": 10.1,
    "Nov-10": 10.1,
    "Dec-10": 10.1,
    "Jan-11": 10.1,
    "Feb-11": 10.1,
    "Mar-11": 10.1,
    "Apr-11": 10.1,
    "May-11": 10.1,
    "Jun-11": 10.2,
    "Jul-11": 10.1,
    "Aug-11": 10.1,
    "Sep-11": 10,
    "Oct-11": 9.8,
    "Nov-11": 9.7,
    "Dec-11": 9.4,
    "Jan-12": 9.2,
    "Feb-12": 9.1,
    "Mar-12": 9,
    "Apr-12": 8.9,
    "May-12": 9,
    "Jun-12": 9,
    "Jul-12": 9.1,
    "Aug-12": 9,
    "Sep-12": 9,
    "Oct-12": 8.9,
    "Nov-12": 8.9,
    "Dec-12": 8.9,
    "Jan-13": 8.9,
    "Feb-13": 8.9,
    "Mar-13": 8.9,
    "Apr-13": 8.8,
    "May-13": 8.7,
    "Jun-13": 8.6,
    "Jul-13": 8.5,
    "Aug-13": 8.4,
    "Sep-13": 8.3,
    "Oct-13": 8.2,
    "Nov-13": 8.1,
    "Dec-13": 8.1,
    "Jan-14": 8,
    "Feb-14": 8,
    "Mar-14": 7.9,
    "Apr-14": 7.8,
    "May-14": 7.7,
    "Jun-14": 7.6,
    "Jul-14": 7.5,
    "Aug-14": 7.4,
    "Sep-14": 7.2,
    "Oct-14": 7.1,
    "Nov-14": 7,
    "Dec-14": 6.8,
    "Jan-15": 6.7,
    "Feb-15": 6.7,
    "Mar-15": 6.6,
    "Apr-15": 6.5,
    "May-15": 6.5,
    "Jun-15": 6.4,
    "Jul-15": 6.3,
    "Aug-15": 6.3,
    "Sep-15": 6.2,
    "Oct-15": 6.2,
    "Nov-15": 6.2,
    "Dec-15": 6.2,
    "Jan-16": 6.2,
    "Feb-16": 6.1,
    "Mar-16": 6,
    "Apr-16": 6,
    "May-16": 5.9,
    "Jun-16": 5.9,
    "Jul-16": 5.8,
    "Aug-16": 5.8,
    "Sep-16": 5.7,
    "Oct-16": 5.6,
    "Nov-16": 5.6,
    "Dec-16": 5.5,
    "Jan-17": 5.4,
    "Feb-17": 5.4,
    "Mar-17": 5.3,
    "Apr-17": 5.3,
    "May-17": 5.3,
    "Jun-17": 5.2,
    "Jul-17": 5.1,
    "Aug-17": 5,
    "Sep-17": 4.9,
    "Oct-17": 4.8,
    "Nov-17": 4.8,
    "Dec-17": 4.8,
    "Jan-18": 4.6,
    "Feb-18": 4.5,
    "Mar-18": 4.5,
    "Apr-18": 4.6,
    "May-18": 4.7,
    "Jun-18": 4.7,
    "Jul-18": 4.8,
    "Aug-18": 4.8,
    "Sep-18": 4.8,
    "Oct-18": 4.7,
    "Nov-18": 4.7,
    "Dec-18": 4.7
  },
  {
    "State": "Missouri",
    "Dec-08": 7.7,
    "Jan-09": 8.1,
    "Feb-09": 8.5,
    "Mar-09": 8.9,
    "Apr-09": 9.1,
    "May-09": 9.3,
    "Jun-09": 9.4,
    "Jul-09": 9.5,
    "Aug-09": 9.6,
    "Sep-09": 9.6,
    "Oct-09": 9.7,
    "Nov-09": 9.7,
    "Dec-09": 9.7,
    "Jan-10": 9.8,
    "Feb-10": 9.8,
    "Mar-10": 9.7,
    "Apr-10": 9.7,
    "May-10": 9.6,
    "Jun-10": 9.5,
    "Jul-10": 9.4,
    "Aug-10": 9.5,
    "Sep-10": 9.5,
    "Oct-10": 9.5,
    "Nov-10": 9.5,
    "Dec-10": 9.4,
    "Jan-11": 9.3,
    "Feb-11": 9.1,
    "Mar-11": 8.9,
    "Apr-11": 8.8,
    "May-11": 8.7,
    "Jun-11": 8.6,
    "Jul-11": 8.5,
    "Aug-11": 8.4,
    "Sep-11": 8.2,
    "Oct-11": 8,
    "Nov-11": 7.8,
    "Dec-11": 7.6,
    "Jan-12": 7.4,
    "Feb-12": 7.2,
    "Mar-12": 7.1,
    "Apr-12": 7,
    "May-12": 7,
    "Jun-12": 6.9,
    "Jul-12": 6.9,
    "Aug-12": 6.8,
    "Sep-12": 6.8,
    "Oct-12": 6.8,
    "Nov-12": 6.9,
    "Dec-12": 6.9,
    "Jan-13": 6.9,
    "Feb-13": 6.8,
    "Mar-13": 6.8,
    "Apr-13": 6.8,
    "May-13": 6.8,
    "Jun-13": 6.8,
    "Jul-13": 6.8,
    "Aug-13": 6.7,
    "Sep-13": 6.6,
    "Oct-13": 6.6,
    "Nov-13": 6.6,
    "Dec-13": 6.6,
    "Jan-14": 6.7,
    "Feb-14": 6.7,
    "Mar-14": 6.6,
    "Apr-14": 6.5,
    "May-14": 6.3,
    "Jun-14": 6.2,
    "Jul-14": 6,
    "Aug-14": 5.9,
    "Sep-14": 5.8,
    "Oct-14": 5.7,
    "Nov-14": 5.6,
    "Dec-14": 5.6,
    "Jan-15": 5.5,
    "Feb-15": 5.5,
    "Mar-15": 5.5,
    "Apr-15": 5.4,
    "May-15": 5.3,
    "Jun-15": 5.1,
    "Jul-15": 4.9,
    "Aug-15": 4.7,
    "Sep-15": 4.6,
    "Oct-15": 4.5,
    "Nov-15": 4.5,
    "Dec-15": 4.4,
    "Jan-16": 4.4,
    "Feb-16": 4.4,
    "Mar-16": 4.4,
    "Apr-16": 4.5,
    "May-16": 4.6,
    "Jun-16": 4.7,
    "Jul-16": 4.8,
    "Aug-16": 4.8,
    "Sep-16": 4.8,
    "Oct-16": 4.7,
    "Nov-16": 4.5,
    "Dec-16": 4.3,
    "Jan-17": 4.1,
    "Feb-17": 4,
    "Mar-17": 3.9,
    "Apr-17": 3.8,
    "May-17": 3.7,
    "Jun-17": 3.7,
    "Jul-17": 3.6,
    "Aug-17": 3.6,
    "Sep-17": 3.6,
    "Oct-17": 3.6,
    "Nov-17": 3.6,
    "Dec-17": 3.7,
    "Jan-18": 3.7,
    "Feb-18": 3.7,
    "Mar-18": 3.6,
    "Apr-18": 3.6,
    "May-18": 3.6,
    "Jun-18": 3.5,
    "Jul-18": 3.4,
    "Aug-18": 3.3,
    "Sep-18": 3.2,
    "Oct-18": 3.1,
    "Nov-18": 3,
    "Dec-18": 3.1
  },
  {
    "State": "Montana",
    "Dec-08": 6.3,
    "Jan-09": 6.5,
    "Feb-09": 6.7,
    "Mar-09": 6.8,
    "Apr-09": 6.9,
    "May-09": 6.9,
    "Jun-09": 6.8,
    "Jul-09": 6.8,
    "Aug-09": 6.8,
    "Sep-09": 6.8,
    "Oct-09": 6.9,
    "Nov-09": 7,
    "Dec-09": 7.2,
    "Jan-10": 7.3,
    "Feb-10": 7.4,
    "Mar-10": 7.4,
    "Apr-10": 7.4,
    "May-10": 7.3,
    "Jun-10": 7.3,
    "Jul-10": 7.2,
    "Aug-10": 7.2,
    "Sep-10": 7.2,
    "Oct-10": 7.3,
    "Nov-10": 7.3,
    "Dec-10": 7.3,
    "Jan-11": 7.3,
    "Feb-11": 7.3,
    "Mar-11": 7.2,
    "Apr-11": 7.2,
    "May-11": 7.1,
    "Jun-11": 7,
    "Jul-11": 7,
    "Aug-11": 6.9,
    "Sep-11": 6.8,
    "Oct-11": 6.6,
    "Nov-11": 6.5,
    "Dec-11": 6.4,
    "Jan-12": 6.3,
    "Feb-12": 6.2,
    "Mar-12": 6.1,
    "Apr-12": 6.1,
    "May-12": 6.1,
    "Jun-12": 6.1,
    "Jul-12": 6,
    "Aug-12": 5.9,
    "Sep-12": 5.9,
    "Oct-12": 5.8,
    "Nov-12": 5.7,
    "Dec-12": 5.6,
    "Jan-13": 5.6,
    "Feb-13": 5.6,
    "Mar-13": 5.5,
    "Apr-13": 5.5,
    "May-13": 5.5,
    "Jun-13": 5.5,
    "Jul-13": 5.4,
    "Aug-13": 5.4,
    "Sep-13": 5.3,
    "Oct-13": 5.3,
    "Nov-13": 5.2,
    "Dec-13": 5.1,
    "Jan-14": 5,
    "Feb-14": 4.9,
    "Mar-14": 4.9,
    "Apr-14": 4.8,
    "May-14": 4.7,
    "Jun-14": 4.7,
    "Jul-14": 4.6,
    "Aug-14": 4.6,
    "Sep-14": 4.5,
    "Oct-14": 4.5,
    "Nov-14": 4.4,
    "Dec-14": 4.3,
    "Jan-15": 4.3,
    "Feb-15": 4.2,
    "Mar-15": 4.2,
    "Apr-15": 4.1,
    "May-15": 4.1,
    "Jun-15": 4.2,
    "Jul-15": 4.2,
    "Aug-15": 4.2,
    "Sep-15": 4.2,
    "Oct-15": 4.2,
    "Nov-15": 4.2,
    "Dec-15": 4.2,
    "Jan-16": 4.2,
    "Feb-16": 4.2,
    "Mar-16": 4.2,
    "Apr-16": 4.2,
    "May-16": 4.2,
    "Jun-16": 4.2,
    "Jul-16": 4.2,
    "Aug-16": 4.1,
    "Sep-16": 4.1,
    "Oct-16": 4,
    "Nov-16": 4,
    "Dec-16": 4,
    "Jan-17": 4,
    "Feb-17": 4,
    "Mar-17": 4,
    "Apr-17": 4,
    "May-17": 4,
    "Jun-17": 4,
    "Jul-17": 4,
    "Aug-17": 4.1,
    "Sep-17": 4.1,
    "Oct-17": 4.1,
    "Nov-17": 4.1,
    "Dec-17": 4.1,
    "Jan-18": 4.1,
    "Feb-18": 4.1,
    "Mar-18": 4.1,
    "Apr-18": 4,
    "May-18": 3.9,
    "Jun-18": 3.8,
    "Jul-18": 3.7,
    "Aug-18": 3.7,
    "Sep-18": 3.6,
    "Oct-18": 3.7,
    "Nov-18": 3.7,
    "Dec-18": 3.7
  },
  {
    "State": "Nebraska",
    "Dec-08": 3.9,
    "Jan-09": 4.1,
    "Feb-09": 4.3,
    "Mar-09": 4.5,
    "Apr-09": 4.6,
    "May-09": 4.7,
    "Jun-09": 4.7,
    "Jul-09": 4.8,
    "Aug-09": 4.8,
    "Sep-09": 4.8,
    "Oct-09": 4.8,
    "Nov-09": 4.8,
    "Dec-09": 4.8,
    "Jan-10": 4.9,
    "Feb-10": 4.8,
    "Mar-10": 4.8,
    "Apr-10": 4.7,
    "May-10": 4.7,
    "Jun-10": 4.6,
    "Jul-10": 4.5,
    "Aug-10": 4.5,
    "Sep-10": 4.5,
    "Oct-10": 4.5,
    "Nov-10": 4.5,
    "Dec-10": 4.5,
    "Jan-11": 4.5,
    "Feb-11": 4.5,
    "Mar-11": 4.5,
    "Apr-11": 4.5,
    "May-11": 4.5,
    "Jun-11": 4.4,
    "Jul-11": 4.4,
    "Aug-11": 4.4,
    "Sep-11": 4.3,
    "Oct-11": 4.3,
    "Nov-11": 4.2,
    "Dec-11": 4.2,
    "Jan-12": 4.1,
    "Feb-12": 4.1,
    "Mar-12": 4,
    "Apr-12": 4,
    "May-12": 4,
    "Jun-12": 4,
    "Jul-12": 4,
    "Aug-12": 4,
    "Sep-12": 4,
    "Oct-12": 4,
    "Nov-12": 4,
    "Dec-12": 4,
    "Jan-13": 3.9,
    "Feb-13": 3.9,
    "Mar-13": 3.9,
    "Apr-13": 3.9,
    "May-13": 3.8,
    "Jun-13": 3.8,
    "Jul-13": 3.8,
    "Aug-13": 3.7,
    "Sep-13": 3.7,
    "Oct-13": 3.6,
    "Nov-13": 3.6,
    "Dec-13": 3.6,
    "Jan-14": 3.5,
    "Feb-14": 3.5,
    "Mar-14": 3.5,
    "Apr-14": 3.4,
    "May-14": 3.4,
    "Jun-14": 3.3,
    "Jul-14": 3.2,
    "Aug-14": 3.2,
    "Sep-14": 3.1,
    "Oct-14": 3.1,
    "Nov-14": 3,
    "Dec-14": 3,
    "Jan-15": 2.9,
    "Feb-15": 2.9,
    "Mar-15": 2.9,
    "Apr-15": 3,
    "May-15": 3,
    "Jun-15": 3,
    "Jul-15": 3,
    "Aug-15": 3.1,
    "Sep-15": 3.1,
    "Oct-15": 3.1,
    "Nov-15": 3.1,
    "Dec-15": 3.1,
    "Jan-16": 3,
    "Feb-16": 3.1,
    "Mar-16": 3.1,
    "Apr-16": 3.1,
    "May-16": 3.1,
    "Jun-16": 3.1,
    "Jul-16": 3.1,
    "Aug-16": 3.1,
    "Sep-16": 3.1,
    "Oct-16": 3.1,
    "Nov-16": 3.1,
    "Dec-16": 3.1,
    "Jan-17": 3.1,
    "Feb-17": 3,
    "Mar-17": 3,
    "Apr-17": 2.9,
    "May-17": 2.9,
    "Jun-17": 2.9,
    "Jul-17": 2.9,
    "Aug-17": 2.9,
    "Sep-17": 2.9,
    "Oct-17": 2.9,
    "Nov-17": 2.9,
    "Dec-17": 2.9,
    "Jan-18": 2.9,
    "Feb-18": 2.8,
    "Mar-18": 2.8,
    "Apr-18": 2.8,
    "May-18": 2.8,
    "Jun-18": 2.9,
    "Jul-18": 2.9,
    "Aug-18": 2.8,
    "Sep-18": 2.8,
    "Oct-18": 2.8,
    "Nov-18": 2.8,
    "Dec-18": 2.8
  },
  {
    "State": "Nevada",
    "Dec-08": 9,
    "Jan-09": 9.5,
    "Feb-09": 9.9,
    "Mar-09": 10.4,
    "Apr-09": 10.7,
    "May-09": 11,
    "Jun-09": 11.3,
    "Jul-09": 11.6,
    "Aug-09": 11.8,
    "Sep-09": 12,
    "Oct-09": 12.2,
    "Nov-09": 12.5,
    "Dec-09": 12.7,
    "Jan-10": 13,
    "Feb-10": 13.2,
    "Mar-10": 13.4,
    "Apr-10": 13.5,
    "May-10": 13.5,
    "Jun-10": 13.5,
    "Jul-10": 13.6,
    "Aug-10": 13.6,
    "Sep-10": 13.7,
    "Oct-10": 13.7,
    "Nov-10": 13.7,
    "Dec-10": 13.6,
    "Jan-11": 13.5,
    "Feb-11": 13.4,
    "Mar-11": 13.3,
    "Apr-11": 13.2,
    "May-11": 13.2,
    "Jun-11": 13.1,
    "Jul-11": 13.1,
    "Aug-11": 13,
    "Sep-11": 12.9,
    "Oct-11": 12.7,
    "Nov-11": 12.5,
    "Dec-11": 12.3,
    "Jan-12": 12,
    "Feb-12": 11.8,
    "Mar-12": 11.6,
    "Apr-12": 11.5,
    "May-12": 11.4,
    "Jun-12": 11.3,
    "Jul-12": 11.1,
    "Aug-12": 11,
    "Sep-12": 10.8,
    "Oct-12": 10.7,
    "Nov-12": 10.6,
    "Dec-12": 10.5,
    "Jan-13": 10.4,
    "Feb-13": 10.3,
    "Mar-13": 10.2,
    "Apr-13": 10,
    "May-13": 9.9,
    "Jun-13": 9.7,
    "Jul-13": 9.6,
    "Aug-13": 9.4,
    "Sep-13": 9.2,
    "Oct-13": 9.1,
    "Nov-13": 8.9,
    "Dec-13": 8.8,
    "Jan-14": 8.6,
    "Feb-14": 8.5,
    "Mar-14": 8.4,
    "Apr-14": 8.2,
    "May-14": 8.1,
    "Jun-14": 7.9,
    "Jul-14": 7.8,
    "Aug-14": 7.7,
    "Sep-14": 7.6,
    "Oct-14": 7.5,
    "Nov-14": 7.4,
    "Dec-14": 7.3,
    "Jan-15": 7.2,
    "Feb-15": 7.1,
    "Mar-15": 7,
    "Apr-15": 7,
    "May-15": 6.9,
    "Jun-15": 6.8,
    "Jul-15": 6.8,
    "Aug-15": 6.7,
    "Sep-15": 6.6,
    "Oct-15": 6.5,
    "Nov-15": 6.4,
    "Dec-15": 6.3,
    "Jan-16": 6.2,
    "Feb-16": 6.1,
    "Mar-16": 6,
    "Apr-16": 5.9,
    "May-16": 5.8,
    "Jun-16": 5.8,
    "Jul-16": 5.7,
    "Aug-16": 5.6,
    "Sep-16": 5.5,
    "Oct-16": 5.5,
    "Nov-16": 5.4,
    "Dec-16": 5.3,
    "Jan-17": 5.3,
    "Feb-17": 5.2,
    "Mar-17": 5.2,
    "Apr-17": 5.1,
    "May-17": 5.1,
    "Jun-17": 5.1,
    "Jul-17": 5,
    "Aug-17": 4.9,
    "Sep-17": 4.9,
    "Oct-17": 4.9,
    "Nov-17": 4.9,
    "Dec-17": 4.9,
    "Jan-18": 4.9,
    "Feb-18": 4.9,
    "Mar-18": 4.9,
    "Apr-18": 4.9,
    "May-18": 4.8,
    "Jun-18": 4.7,
    "Jul-18": 4.6,
    "Aug-18": 4.5,
    "Sep-18": 4.5,
    "Oct-18": 4.4,
    "Nov-18": 4.4,
    "Dec-18": 4.4
  },
  {
    "State": "New Hampshire",
    "Dec-08": 4.8,
    "Jan-09": 5.2,
    "Feb-09": 5.7,
    "Mar-09": 6,
    "Apr-09": 6.3,
    "May-09": 6.5,
    "Jun-09": 6.5,
    "Jul-09": 6.5,
    "Aug-09": 6.5,
    "Sep-09": 6.4,
    "Oct-09": 6.4,
    "Nov-09": 6.4,
    "Dec-09": 6.3,
    "Jan-10": 6.3,
    "Feb-10": 6.2,
    "Mar-10": 6.1,
    "Apr-10": 6,
    "May-10": 5.8,
    "Jun-10": 5.8,
    "Jul-10": 5.7,
    "Aug-10": 5.7,
    "Sep-10": 5.7,
    "Oct-10": 5.6,
    "Nov-10": 5.6,
    "Dec-10": 5.5,
    "Jan-11": 5.4,
    "Feb-11": 5.3,
    "Mar-11": 5.3,
    "Apr-11": 5.3,
    "May-11": 5.3,
    "Jun-11": 5.4,
    "Jul-11": 5.5,
    "Aug-11": 5.5,
    "Sep-11": 5.5,
    "Oct-11": 5.5,
    "Nov-11": 5.5,
    "Dec-11": 5.4,
    "Jan-12": 5.4,
    "Feb-12": 5.4,
    "Mar-12": 5.4,
    "Apr-12": 5.4,
    "May-12": 5.5,
    "Jun-12": 5.5,
    "Jul-12": 5.5,
    "Aug-12": 5.6,
    "Sep-12": 5.6,
    "Oct-12": 5.5,
    "Nov-12": 5.5,
    "Dec-12": 5.5,
    "Jan-13": 5.5,
    "Feb-13": 5.4,
    "Mar-13": 5.3,
    "Apr-13": 5.2,
    "May-13": 5.1,
    "Jun-13": 5.1,
    "Jul-13": 5,
    "Aug-13": 5,
    "Sep-13": 4.9,
    "Oct-13": 4.9,
    "Nov-13": 4.8,
    "Dec-13": 4.8,
    "Jan-14": 4.7,
    "Feb-14": 4.6,
    "Mar-14": 4.6,
    "Apr-14": 4.5,
    "May-14": 4.4,
    "Jun-14": 4.3,
    "Jul-14": 4.2,
    "Aug-14": 4.1,
    "Sep-14": 4.1,
    "Oct-14": 4,
    "Nov-14": 3.9,
    "Dec-14": 3.9,
    "Jan-15": 3.8,
    "Feb-15": 3.7,
    "Mar-15": 3.7,
    "Apr-15": 3.6,
    "May-15": 3.5,
    "Jun-15": 3.4,
    "Jul-15": 3.3,
    "Aug-15": 3.2,
    "Sep-15": 3.2,
    "Oct-15": 3.1,
    "Nov-15": 3,
    "Dec-15": 2.9,
    "Jan-16": 2.9,
    "Feb-16": 2.8,
    "Mar-16": 2.8,
    "Apr-16": 2.9,
    "May-16": 2.9,
    "Jun-16": 2.9,
    "Jul-16": 2.9,
    "Aug-16": 2.9,
    "Sep-16": 2.9,
    "Oct-16": 2.8,
    "Nov-16": 2.8,
    "Dec-16": 2.8,
    "Jan-17": 2.8,
    "Feb-17": 2.8,
    "Mar-17": 2.7,
    "Apr-17": 2.7,
    "May-17": 2.7,
    "Jun-17": 2.7,
    "Jul-17": 2.7,
    "Aug-17": 2.7,
    "Sep-17": 2.6,
    "Oct-17": 2.6,
    "Nov-17": 2.6,
    "Dec-17": 2.6,
    "Jan-18": 2.6,
    "Feb-18": 2.6,
    "Mar-18": 2.6,
    "Apr-18": 2.6,
    "May-18": 2.7,
    "Jun-18": 2.7,
    "Jul-18": 2.7,
    "Aug-18": 2.7,
    "Sep-18": 2.7,
    "Oct-18": 2.6,
    "Nov-18": 2.5,
    "Dec-18": 2.5
  },
  {
    "State": "New Jersey",
    "Dec-08": 6.9,
    "Jan-09": 7.4,
    "Feb-09": 7.9,
    "Mar-09": 8.3,
    "Apr-09": 8.7,
    "May-09": 9,
    "Jun-09": 9.2,
    "Jul-09": 9.4,
    "Aug-09": 9.5,
    "Sep-09": 9.7,
    "Oct-09": 9.7,
    "Nov-09": 9.8,
    "Dec-09": 9.8,
    "Jan-10": 9.8,
    "Feb-10": 9.7,
    "Mar-10": 9.7,
    "Apr-10": 9.6,
    "May-10": 9.5,
    "Jun-10": 9.4,
    "Jul-10": 9.4,
    "Aug-10": 9.4,
    "Sep-10": 9.4,
    "Oct-10": 9.5,
    "Nov-10": 9.5,
    "Dec-10": 9.5,
    "Jan-11": 9.4,
    "Feb-11": 9.4,
    "Mar-11": 9.4,
    "Apr-11": 9.4,
    "May-11": 9.4,
    "Jun-11": 9.4,
    "Jul-11": 9.4,
    "Aug-11": 9.3,
    "Sep-11": 9.3,
    "Oct-11": 9.3,
    "Nov-11": 9.2,
    "Dec-11": 9.2,
    "Jan-12": 9.2,
    "Feb-12": 9.2,
    "Mar-12": 9.3,
    "Apr-12": 9.4,
    "May-12": 9.5,
    "Jun-12": 9.5,
    "Jul-12": 9.4,
    "Aug-12": 9.4,
    "Sep-12": 9.3,
    "Oct-12": 9.3,
    "Nov-12": 9.3,
    "Dec-12": 9.2,
    "Jan-13": 9,
    "Feb-13": 8.9,
    "Mar-13": 8.7,
    "Apr-13": 8.6,
    "May-13": 8.5,
    "Jun-13": 8.4,
    "Jul-13": 8.3,
    "Aug-13": 8.1,
    "Sep-13": 7.9,
    "Oct-13": 7.7,
    "Nov-13": 7.5,
    "Dec-13": 7.3,
    "Jan-14": 7.2,
    "Feb-14": 7.1,
    "Mar-14": 6.9,
    "Apr-14": 6.8,
    "May-14": 6.7,
    "Jun-14": 6.7,
    "Jul-14": 6.6,
    "Aug-14": 6.6,
    "Sep-14": 6.6,
    "Oct-14": 6.6,
    "Nov-14": 6.6,
    "Dec-14": 6.5,
    "Jan-15": 6.5,
    "Feb-15": 6.4,
    "Mar-15": 6.3,
    "Apr-15": 6.2,
    "May-15": 6,
    "Jun-15": 5.9,
    "Jul-15": 5.7,
    "Aug-15": 5.5,
    "Sep-15": 5.4,
    "Oct-15": 5.2,
    "Nov-15": 5.1,
    "Dec-15": 5.1,
    "Jan-16": 5,
    "Feb-16": 5.1,
    "Mar-16": 5.1,
    "Apr-16": 5.1,
    "May-16": 5.1,
    "Jun-16": 5.1,
    "Jul-16": 5,
    "Aug-16": 5,
    "Sep-16": 4.9,
    "Oct-16": 4.9,
    "Nov-16": 4.8,
    "Dec-16": 4.7,
    "Jan-17": 4.6,
    "Feb-17": 4.6,
    "Mar-17": 4.5,
    "Apr-17": 4.5,
    "May-17": 4.5,
    "Jun-17": 4.6,
    "Jul-17": 4.6,
    "Aug-17": 4.7,
    "Sep-17": 4.7,
    "Oct-17": 4.7,
    "Nov-17": 4.7,
    "Dec-17": 4.7,
    "Jan-18": 4.7,
    "Feb-18": 4.6,
    "Mar-18": 4.6,
    "Apr-18": 4.5,
    "May-18": 4.4,
    "Jun-18": 4.3,
    "Jul-18": 4.2,
    "Aug-18": 4.2,
    "Sep-18": 4.2,
    "Oct-18": 4.1,
    "Nov-18": 4,
    "Dec-18": 4
  },
  {
    "State": "New Mexico",
    "Dec-08": 5.8,
    "Jan-09": 6.2,
    "Feb-09": 6.7,
    "Mar-09": 7.1,
    "Apr-09": 7.5,
    "May-09": 7.7,
    "Jun-09": 7.8,
    "Jul-09": 7.9,
    "Aug-09": 7.9,
    "Sep-09": 7.8,
    "Oct-09": 7.8,
    "Nov-09": 7.8,
    "Dec-09": 7.9,
    "Jan-10": 8,
    "Feb-10": 8,
    "Mar-10": 8.1,
    "Apr-10": 8.2,
    "May-10": 8.3,
    "Jun-10": 8.3,
    "Jul-10": 8.3,
    "Aug-10": 8.2,
    "Sep-10": 8.1,
    "Oct-10": 8,
    "Nov-10": 7.9,
    "Dec-10": 7.8,
    "Jan-11": 7.7,
    "Feb-11": 7.5,
    "Mar-11": 7.4,
    "Apr-11": 7.4,
    "May-11": 7.4,
    "Jun-11": 7.4,
    "Jul-11": 7.5,
    "Aug-11": 7.5,
    "Sep-11": 7.6,
    "Oct-11": 7.6,
    "Nov-11": 7.6,
    "Dec-11": 7.6,
    "Jan-12": 7.5,
    "Feb-12": 7.3,
    "Mar-12": 7.2,
    "Apr-12": 7.1,
    "May-12": 7.1,
    "Jun-12": 7,
    "Jul-12": 7,
    "Aug-12": 7,
    "Sep-12": 7,
    "Oct-12": 7.1,
    "Nov-12": 7.1,
    "Dec-12": 7,
    "Jan-13": 7,
    "Feb-13": 7,
    "Mar-13": 6.9,
    "Apr-13": 6.9,
    "May-13": 6.9,
    "Jun-13": 6.9,
    "Jul-13": 6.9,
    "Aug-13": 6.9,
    "Sep-13": 7,
    "Oct-13": 7,
    "Nov-13": 7,
    "Dec-13": 6.9,
    "Jan-14": 6.9,
    "Feb-14": 6.9,
    "Mar-14": 6.9,
    "Apr-14": 6.8,
    "May-14": 6.8,
    "Jun-14": 6.8,
    "Jul-14": 6.7,
    "Aug-14": 6.6,
    "Sep-14": 6.5,
    "Oct-14": 6.5,
    "Nov-14": 6.4,
    "Dec-14": 6.4,
    "Jan-15": 6.5,
    "Feb-15": 6.5,
    "Mar-15": 6.6,
    "Apr-15": 6.6,
    "May-15": 6.6,
    "Jun-15": 6.5,
    "Jul-15": 6.5,
    "Aug-15": 6.5,
    "Sep-15": 6.5,
    "Oct-15": 6.5,
    "Nov-15": 6.5,
    "Dec-15": 6.6,
    "Jan-16": 6.6,
    "Feb-16": 6.6,
    "Mar-16": 6.6,
    "Apr-16": 6.7,
    "May-16": 6.7,
    "Jun-16": 6.7,
    "Jul-16": 6.8,
    "Aug-16": 6.8,
    "Sep-16": 6.7,
    "Oct-16": 6.7,
    "Nov-16": 6.7,
    "Dec-16": 6.6,
    "Jan-17": 6.5,
    "Feb-17": 6.4,
    "Mar-17": 6.3,
    "Apr-17": 6.3,
    "May-17": 6.2,
    "Jun-17": 6.1,
    "Jul-17": 6.1,
    "Aug-17": 6,
    "Sep-17": 6,
    "Oct-17": 6,
    "Nov-17": 6,
    "Dec-17": 6,
    "Jan-18": 5.9,
    "Feb-18": 5.8,
    "Mar-18": 5.6,
    "Apr-18": 5.4,
    "May-18": 5.1,
    "Jun-18": 4.9,
    "Jul-18": 4.7,
    "Aug-18": 4.6,
    "Sep-18": 4.6,
    "Oct-18": 4.6,
    "Nov-18": 4.6,
    "Dec-18": 4.7
  },
  {
    "State": "New York",
    "Dec-08": 6.7,
    "Jan-09": 7.1,
    "Feb-09": 7.5,
    "Mar-09": 7.8,
    "Apr-09": 8.1,
    "May-09": 8.3,
    "Jun-09": 8.4,
    "Jul-09": 8.5,
    "Aug-09": 8.7,
    "Sep-09": 8.8,
    "Oct-09": 8.8,
    "Nov-09": 8.9,
    "Dec-09": 8.9,
    "Jan-10": 8.9,
    "Feb-10": 8.8,
    "Mar-10": 8.8,
    "Apr-10": 8.7,
    "May-10": 8.6,
    "Jun-10": 8.5,
    "Jul-10": 8.5,
    "Aug-10": 8.5,
    "Sep-10": 8.5,
    "Oct-10": 8.5,
    "Nov-10": 8.4,
    "Dec-10": 8.4,
    "Jan-11": 8.3,
    "Feb-11": 8.2,
    "Mar-11": 8.1,
    "Apr-11": 8.1,
    "May-11": 8.1,
    "Jun-11": 8.2,
    "Jul-11": 8.3,
    "Aug-11": 8.3,
    "Sep-11": 8.4,
    "Oct-11": 8.5,
    "Nov-11": 8.5,
    "Dec-11": 8.6,
    "Jan-12": 8.6,
    "Feb-12": 8.6,
    "Mar-12": 8.7,
    "Apr-12": 8.7,
    "May-12": 8.7,
    "Jun-12": 8.7,
    "Jul-12": 8.6,
    "Aug-12": 8.5,
    "Sep-12": 8.4,
    "Oct-12": 8.3,
    "Nov-12": 8.2,
    "Dec-12": 8.2,
    "Jan-13": 8.1,
    "Feb-13": 8.1,
    "Mar-13": 8,
    "Apr-13": 7.9,
    "May-13": 7.8,
    "Jun-13": 7.8,
    "Jul-13": 7.7,
    "Aug-13": 7.7,
    "Sep-13": 7.6,
    "Oct-13": 7.4,
    "Nov-13": 7.3,
    "Dec-13": 7.1,
    "Jan-14": 7,
    "Feb-14": 6.8,
    "Mar-14": 6.7,
    "Apr-14": 6.6,
    "May-14": 6.5,
    "Jun-14": 6.4,
    "Jul-14": 6.2,
    "Aug-14": 6.1,
    "Sep-14": 6,
    "Oct-14": 6,
    "Nov-14": 5.9,
    "Dec-14": 5.8,
    "Jan-15": 5.7,
    "Feb-15": 5.7,
    "Mar-15": 5.6,
    "Apr-15": 5.5,
    "May-15": 5.4,
    "Jun-15": 5.3,
    "Jul-15": 5.2,
    "Aug-15": 5,
    "Sep-15": 5,
    "Oct-15": 4.9,
    "Nov-15": 4.9,
    "Dec-15": 4.9,
    "Jan-16": 4.9,
    "Feb-16": 4.8,
    "Mar-16": 4.8,
    "Apr-16": 4.8,
    "May-16": 4.8,
    "Jun-16": 4.8,
    "Jul-16": 4.9,
    "Aug-16": 4.9,
    "Sep-16": 4.9,
    "Oct-16": 4.9,
    "Nov-16": 4.9,
    "Dec-16": 4.8,
    "Jan-17": 4.7,
    "Feb-17": 4.7,
    "Mar-17": 4.7,
    "Apr-17": 4.7,
    "May-17": 4.7,
    "Jun-17": 4.7,
    "Jul-17": 4.7,
    "Aug-17": 4.7,
    "Sep-17": 4.7,
    "Oct-17": 4.7,
    "Nov-17": 4.7,
    "Dec-17": 4.7,
    "Jan-18": 4.7,
    "Feb-18": 4.6,
    "Mar-18": 4.6,
    "Apr-18": 4.6,
    "May-18": 4.5,
    "Jun-18": 4.5,
    "Jul-18": 4.3,
    "Aug-18": 4.2,
    "Sep-18": 4.1,
    "Oct-18": 4,
    "Nov-18": 3.9,
    "Dec-18": 3.9
  },
  {
    "State": "North Carolina",
    "Dec-08": 9.1,
    "Jan-09": 9.6,
    "Feb-09": 10,
    "Mar-09": 10.3,
    "Apr-09": 10.5,
    "May-09": 10.6,
    "Jun-09": 10.6,
    "Jul-09": 10.6,
    "Aug-09": 10.7,
    "Sep-09": 10.8,
    "Oct-09": 10.9,
    "Nov-09": 11.1,
    "Dec-09": 11.2,
    "Jan-10": 11.4,
    "Feb-10": 11.4,
    "Mar-10": 11.4,
    "Apr-10": 11.2,
    "May-10": 11,
    "Jun-10": 10.7,
    "Jul-10": 10.6,
    "Aug-10": 10.5,
    "Sep-10": 10.4,
    "Oct-10": 10.4,
    "Nov-10": 10.4,
    "Dec-10": 10.4,
    "Jan-11": 10.4,
    "Feb-11": 10.3,
    "Mar-11": 10.3,
    "Apr-11": 10.3,
    "May-11": 10.3,
    "Jun-11": 10.4,
    "Jul-11": 10.5,
    "Aug-11": 10.4,
    "Sep-11": 10.3,
    "Oct-11": 10.2,
    "Nov-11": 10,
    "Dec-11": 9.8,
    "Jan-12": 9.6,
    "Feb-12": 9.5,
    "Mar-12": 9.4,
    "Apr-12": 9.4,
    "May-12": 9.4,
    "Jun-12": 9.3,
    "Jul-12": 9.3,
    "Aug-12": 9.2,
    "Sep-12": 9.2,
    "Oct-12": 9.1,
    "Nov-12": 9.1,
    "Dec-12": 9,
    "Jan-13": 8.9,
    "Feb-13": 8.8,
    "Mar-13": 8.6,
    "Apr-13": 8.4,
    "May-13": 8.2,
    "Jun-13": 8.1,
    "Jul-13": 7.9,
    "Aug-13": 7.7,
    "Sep-13": 7.5,
    "Oct-13": 7.3,
    "Nov-13": 7.1,
    "Dec-13": 7,
    "Jan-14": 6.8,
    "Feb-14": 6.7,
    "Mar-14": 6.6,
    "Apr-14": 6.5,
    "May-14": 6.5,
    "Jun-14": 6.4,
    "Jul-14": 6.3,
    "Aug-14": 6.2,
    "Sep-14": 6.1,
    "Oct-14": 6,
    "Nov-14": 5.9,
    "Dec-14": 5.8,
    "Jan-15": 5.8,
    "Feb-15": 5.8,
    "Mar-15": 5.9,
    "Apr-15": 5.9,
    "May-15": 5.9,
    "Jun-15": 5.9,
    "Jul-15": 5.8,
    "Aug-15": 5.7,
    "Sep-15": 5.6,
    "Oct-15": 5.5,
    "Nov-15": 5.4,
    "Dec-15": 5.4,
    "Jan-16": 5.3,
    "Feb-16": 5.2,
    "Mar-16": 5.2,
    "Apr-16": 5.1,
    "May-16": 5,
    "Jun-16": 5,
    "Jul-16": 5,
    "Aug-16": 5,
    "Sep-16": 5.1,
    "Oct-16": 5.1,
    "Nov-16": 5.1,
    "Dec-16": 5,
    "Jan-17": 4.9,
    "Feb-17": 4.8,
    "Mar-17": 4.7,
    "Apr-17": 4.6,
    "May-17": 4.5,
    "Jun-17": 4.4,
    "Jul-17": 4.4,
    "Aug-17": 4.4,
    "Sep-17": 4.4,
    "Oct-17": 4.5,
    "Nov-17": 4.5,
    "Dec-17": 4.5,
    "Jan-18": 4.5,
    "Feb-18": 4.5,
    "Mar-18": 4.5,
    "Apr-18": 4.4,
    "May-18": 4.3,
    "Jun-18": 4.2,
    "Jul-18": 4.1,
    "Aug-18": 3.9,
    "Sep-18": 3.8,
    "Oct-18": 3.6,
    "Nov-18": 3.6,
    "Dec-18": 3.6
  },
  {
    "State": "North Dakota",
    "Dec-08": 3.7,
    "Jan-09": 3.9,
    "Feb-09": 4.1,
    "Mar-09": 4.2,
    "Apr-09": 4.3,
    "May-09": 4.3,
    "Jun-09": 4.2,
    "Jul-09": 4.1,
    "Aug-09": 4.1,
    "Sep-09": 4,
    "Oct-09": 4,
    "Nov-09": 4,
    "Dec-09": 4,
    "Jan-10": 4,
    "Feb-10": 4,
    "Mar-10": 3.9,
    "Apr-10": 3.9,
    "May-10": 3.8,
    "Jun-10": 3.8,
    "Jul-10": 3.7,
    "Aug-10": 3.7,
    "Sep-10": 3.7,
    "Oct-10": 3.7,
    "Nov-10": 3.6,
    "Dec-10": 3.6,
    "Jan-11": 3.5,
    "Feb-11": 3.5,
    "Mar-11": 3.5,
    "Apr-11": 3.5,
    "May-11": 3.5,
    "Jun-11": 3.5,
    "Jul-11": 3.5,
    "Aug-11": 3.5,
    "Sep-11": 3.5,
    "Oct-11": 3.4,
    "Nov-11": 3.4,
    "Dec-11": 3.3,
    "Jan-12": 3.2,
    "Feb-12": 3.1,
    "Mar-12": 3,
    "Apr-12": 3,
    "May-12": 3,
    "Jun-12": 3,
    "Jul-12": 3,
    "Aug-12": 3.1,
    "Sep-12": 3.1,
    "Oct-12": 3.1,
    "Nov-12": 3.1,
    "Dec-12": 3.1,
    "Jan-13": 3.1,
    "Feb-13": 3.1,
    "Mar-13": 3,
    "Apr-13": 3,
    "May-13": 3,
    "Jun-13": 2.9,
    "Jul-13": 2.9,
    "Aug-13": 2.8,
    "Sep-13": 2.8,
    "Oct-13": 2.8,
    "Nov-13": 2.8,
    "Dec-13": 2.8,
    "Jan-14": 2.7,
    "Feb-14": 2.7,
    "Mar-14": 2.7,
    "Apr-14": 2.6,
    "May-14": 2.6,
    "Jun-14": 2.6,
    "Jul-14": 2.7,
    "Aug-14": 2.7,
    "Sep-14": 2.7,
    "Oct-14": 2.7,
    "Nov-14": 2.7,
    "Dec-14": 2.7,
    "Jan-15": 2.6,
    "Feb-15": 2.7,
    "Mar-15": 2.7,
    "Apr-15": 2.7,
    "May-15": 2.8,
    "Jun-15": 2.8,
    "Jul-15": 2.8,
    "Aug-15": 2.8,
    "Sep-15": 2.8,
    "Oct-15": 2.9,
    "Nov-15": 2.9,
    "Dec-15": 3,
    "Jan-16": 3.1,
    "Feb-16": 3.2,
    "Mar-16": 3.2,
    "Apr-16": 3.2,
    "May-16": 3.2,
    "Jun-16": 3.1,
    "Jul-16": 3.1,
    "Aug-16": 3,
    "Sep-16": 3,
    "Oct-16": 2.9,
    "Nov-16": 2.9,
    "Dec-16": 2.8,
    "Jan-17": 2.8,
    "Feb-17": 2.7,
    "Mar-17": 2.6,
    "Apr-17": 2.5,
    "May-17": 2.5,
    "Jun-17": 2.5,
    "Jul-17": 2.5,
    "Aug-17": 2.6,
    "Sep-17": 2.6,
    "Oct-17": 2.6,
    "Nov-17": 2.6,
    "Dec-17": 2.6,
    "Jan-18": 2.6,
    "Feb-18": 2.6,
    "Mar-18": 2.6,
    "Apr-18": 2.6,
    "May-18": 2.6,
    "Jun-18": 2.6,
    "Jul-18": 2.6,
    "Aug-18": 2.6,
    "Sep-18": 2.7,
    "Oct-18": 2.8,
    "Nov-18": 2.8,
    "Dec-18": 2.7
  },
  {
    "State": "Ohio",
    "Dec-08": 8.1,
    "Jan-09": 8.7,
    "Feb-09": 9.3,
    "Mar-09": 9.8,
    "Apr-09": 10.2,
    "May-09": 10.4,
    "Jun-09": 10.5,
    "Jul-09": 10.6,
    "Aug-09": 10.6,
    "Sep-09": 10.7,
    "Oct-09": 10.8,
    "Nov-09": 10.9,
    "Dec-09": 11,
    "Jan-10": 11.1,
    "Feb-10": 11,
    "Mar-10": 10.9,
    "Apr-10": 10.6,
    "May-10": 10.4,
    "Jun-10": 10.1,
    "Jul-10": 10,
    "Aug-10": 9.9,
    "Sep-10": 9.9,
    "Oct-10": 9.8,
    "Nov-10": 9.7,
    "Dec-10": 9.5,
    "Jan-11": 9.3,
    "Feb-11": 9.1,
    "Mar-11": 9,
    "Apr-11": 9,
    "May-11": 9,
    "Jun-11": 9.1,
    "Jul-11": 9.1,
    "Aug-11": 9,
    "Sep-11": 8.8,
    "Oct-11": 8.5,
    "Nov-11": 8.3,
    "Dec-11": 8,
    "Jan-12": 7.8,
    "Feb-12": 7.6,
    "Mar-12": 7.5,
    "Apr-12": 7.4,
    "May-12": 7.4,
    "Jun-12": 7.3,
    "Jul-12": 7.3,
    "Aug-12": 7.2,
    "Sep-12": 7.2,
    "Oct-12": 7.3,
    "Nov-12": 7.4,
    "Dec-12": 7.5,
    "Jan-13": 7.5,
    "Feb-13": 7.6,
    "Mar-13": 7.6,
    "Apr-13": 7.6,
    "May-13": 7.5,
    "Jun-13": 7.5,
    "Jul-13": 7.6,
    "Aug-13": 7.5,
    "Sep-13": 7.4,
    "Oct-13": 7.3,
    "Nov-13": 7.1,
    "Dec-13": 6.9,
    "Jan-14": 6.6,
    "Feb-14": 6.4,
    "Mar-14": 6.2,
    "Apr-14": 6,
    "May-14": 5.9,
    "Jun-14": 5.8,
    "Jul-14": 5.7,
    "Aug-14": 5.6,
    "Sep-14": 5.5,
    "Oct-14": 5.4,
    "Nov-14": 5.3,
    "Dec-14": 5.2,
    "Jan-15": 5.1,
    "Feb-15": 5.1,
    "Mar-15": 5.1,
    "Apr-15": 5.1,
    "May-15": 5,
    "Jun-15": 4.9,
    "Jul-15": 4.8,
    "Aug-15": 4.7,
    "Sep-15": 4.7,
    "Oct-15": 4.7,
    "Nov-15": 4.8,
    "Dec-15": 4.9,
    "Jan-16": 4.9,
    "Feb-16": 5,
    "Mar-16": 5,
    "Apr-16": 5,
    "May-16": 5,
    "Jun-16": 5,
    "Jul-16": 5,
    "Aug-16": 5,
    "Sep-16": 5.1,
    "Oct-16": 5.2,
    "Nov-16": 5.2,
    "Dec-16": 5.2,
    "Jan-17": 5.2,
    "Feb-17": 5.1,
    "Mar-17": 5.1,
    "Apr-17": 5.1,
    "May-17": 5.1,
    "Jun-17": 5.1,
    "Jul-17": 5.1,
    "Aug-17": 5,
    "Sep-17": 5,
    "Oct-17": 4.9,
    "Nov-17": 4.9,
    "Dec-17": 4.9,
    "Jan-18": 4.7,
    "Feb-18": 4.5,
    "Mar-18": 4.4,
    "Apr-18": 4.3,
    "May-18": 4.3,
    "Jun-18": 4.5,
    "Jul-18": 4.6,
    "Aug-18": 4.6,
    "Sep-18": 4.6,
    "Oct-18": 4.6,
    "Nov-18": 4.6,
    "Dec-18": 4.6
  },
  {
    "State": "Oklahoma",
    "Dec-08": 4.7,
    "Jan-09": 5.1,
    "Feb-09": 5.5,
    "Mar-09": 5.9,
    "Apr-09": 6.2,
    "May-09": 6.4,
    "Jun-09": 6.5,
    "Jul-09": 6.6,
    "Aug-09": 6.7,
    "Sep-09": 6.8,
    "Oct-09": 6.9,
    "Nov-09": 7,
    "Dec-09": 7,
    "Jan-10": 7.1,
    "Feb-10": 7.1,
    "Mar-10": 7,
    "Apr-10": 7,
    "May-10": 6.9,
    "Jun-10": 6.8,
    "Jul-10": 6.7,
    "Aug-10": 6.6,
    "Sep-10": 6.6,
    "Oct-10": 6.6,
    "Nov-10": 6.5,
    "Dec-10": 6.4,
    "Jan-11": 6.2,
    "Feb-11": 6.1,
    "Mar-11": 5.9,
    "Apr-11": 5.9,
    "May-11": 5.8,
    "Jun-11": 5.8,
    "Jul-11": 5.9,
    "Aug-11": 5.9,
    "Sep-11": 5.9,
    "Oct-11": 5.8,
    "Nov-11": 5.7,
    "Dec-11": 5.6,
    "Jan-12": 5.5,
    "Feb-12": 5.4,
    "Mar-12": 5.3,
    "Apr-12": 5.2,
    "May-12": 5.2,
    "Jun-12": 5.2,
    "Jul-12": 5.2,
    "Aug-12": 5.2,
    "Sep-12": 5.2,
    "Oct-12": 5.2,
    "Nov-12": 5.3,
    "Dec-12": 5.3,
    "Jan-13": 5.3,
    "Feb-13": 5.3,
    "Mar-13": 5.4,
    "Apr-13": 5.4,
    "May-13": 5.3,
    "Jun-13": 5.3,
    "Jul-13": 5.3,
    "Aug-13": 5.3,
    "Sep-13": 5.3,
    "Oct-13": 5.2,
    "Nov-13": 5.2,
    "Dec-13": 5.1,
    "Jan-14": 5,
    "Feb-14": 4.9,
    "Mar-14": 4.8,
    "Apr-14": 4.7,
    "May-14": 4.6,
    "Jun-14": 4.5,
    "Jul-14": 4.4,
    "Aug-14": 4.3,
    "Sep-14": 4.3,
    "Oct-14": 4.2,
    "Nov-14": 4.2,
    "Dec-14": 4.2,
    "Jan-15": 4.2,
    "Feb-15": 4.2,
    "Mar-15": 4.3,
    "Apr-15": 4.4,
    "May-15": 4.4,
    "Jun-15": 4.5,
    "Jul-15": 4.4,
    "Aug-15": 4.4,
    "Sep-15": 4.4,
    "Oct-15": 4.5,
    "Nov-15": 4.5,
    "Dec-15": 4.6,
    "Jan-16": 4.6,
    "Feb-16": 4.7,
    "Mar-16": 4.8,
    "Apr-16": 4.8,
    "May-16": 4.9,
    "Jun-16": 4.9,
    "Jul-16": 4.9,
    "Aug-16": 4.9,
    "Sep-16": 4.9,
    "Oct-16": 4.9,
    "Nov-16": 4.8,
    "Dec-16": 4.7,
    "Jan-17": 4.6,
    "Feb-17": 4.6,
    "Mar-17": 4.5,
    "Apr-17": 4.4,
    "May-17": 4.3,
    "Jun-17": 4.3,
    "Jul-17": 4.2,
    "Aug-17": 4.2,
    "Sep-17": 4.1,
    "Oct-17": 4.1,
    "Nov-17": 4.1,
    "Dec-17": 4.1,
    "Jan-18": 4.1,
    "Feb-18": 4.1,
    "Mar-18": 4,
    "Apr-18": 4,
    "May-18": 4,
    "Jun-18": 3.9,
    "Jul-18": 3.8,
    "Aug-18": 3.7,
    "Sep-18": 3.5,
    "Oct-18": 3.4,
    "Nov-18": 3.3,
    "Dec-18": 3.2
  },
  {
    "State": "Oregon",
    "Dec-08": 9.5,
    "Jan-09": 10.3,
    "Feb-09": 11,
    "Mar-09": 11.5,
    "Apr-09": 11.8,
    "May-09": 11.9,
    "Jun-09": 11.8,
    "Jul-09": 11.6,
    "Aug-09": 11.3,
    "Sep-09": 11.1,
    "Oct-09": 11,
    "Nov-09": 10.9,
    "Dec-09": 10.9,
    "Jan-10": 10.9,
    "Feb-10": 10.9,
    "Mar-10": 10.9,
    "Apr-10": 10.9,
    "May-10": 10.8,
    "Jun-10": 10.7,
    "Jul-10": 10.6,
    "Aug-10": 10.5,
    "Sep-10": 10.4,
    "Oct-10": 10.4,
    "Nov-10": 10.2,
    "Dec-10": 10.1,
    "Jan-11": 9.9,
    "Feb-11": 9.7,
    "Mar-11": 9.5,
    "Apr-11": 9.5,
    "May-11": 9.5,
    "Jun-11": 9.5,
    "Jul-11": 9.5,
    "Aug-11": 9.5,
    "Sep-11": 9.5,
    "Oct-11": 9.4,
    "Nov-11": 9.3,
    "Dec-11": 9.2,
    "Jan-12": 9.1,
    "Feb-12": 9,
    "Mar-12": 9,
    "Apr-12": 8.9,
    "May-12": 8.9,
    "Jun-12": 8.9,
    "Jul-12": 8.8,
    "Aug-12": 8.7,
    "Sep-12": 8.7,
    "Oct-12": 8.7,
    "Nov-12": 8.6,
    "Dec-12": 8.6,
    "Jan-13": 8.5,
    "Feb-13": 8.4,
    "Mar-13": 8.3,
    "Apr-13": 8.1,
    "May-13": 8,
    "Jun-13": 7.9,
    "Jul-13": 7.8,
    "Aug-13": 7.7,
    "Sep-13": 7.6,
    "Oct-13": 7.5,
    "Nov-13": 7.4,
    "Dec-13": 7.3,
    "Jan-14": 7.3,
    "Feb-14": 7.3,
    "Mar-14": 7.2,
    "Apr-14": 7.1,
    "May-14": 7,
    "Jun-14": 6.8,
    "Jul-14": 6.7,
    "Aug-14": 6.6,
    "Sep-14": 6.5,
    "Oct-14": 6.4,
    "Nov-14": 6.3,
    "Dec-14": 6.1,
    "Jan-15": 6,
    "Feb-15": 5.9,
    "Mar-15": 5.8,
    "Apr-15": 5.8,
    "May-15": 5.7,
    "Jun-15": 5.7,
    "Jul-15": 5.6,
    "Aug-15": 5.5,
    "Sep-15": 5.4,
    "Oct-15": 5.3,
    "Nov-15": 5.2,
    "Dec-15": 5.1,
    "Jan-16": 5.1,
    "Feb-16": 5,
    "Mar-16": 5,
    "Apr-16": 5,
    "May-16": 5,
    "Jun-16": 5,
    "Jul-16": 4.9,
    "Aug-16": 4.8,
    "Sep-16": 4.7,
    "Oct-16": 4.6,
    "Nov-16": 4.4,
    "Dec-16": 4.3,
    "Jan-17": 4.2,
    "Feb-17": 4.1,
    "Mar-17": 4.1,
    "Apr-17": 4.1,
    "May-17": 4.1,
    "Jun-17": 4.1,
    "Jul-17": 4.1,
    "Aug-17": 4.2,
    "Sep-17": 4.2,
    "Oct-17": 4.2,
    "Nov-17": 4.2,
    "Dec-17": 4.1,
    "Jan-18": 4.1,
    "Feb-18": 4.1,
    "Mar-18": 4.1,
    "Apr-18": 4.1,
    "May-18": 4.1,
    "Jun-18": 4,
    "Jul-18": 3.9,
    "Aug-18": 3.8,
    "Sep-18": 3.8,
    "Oct-18": 3.8,
    "Nov-18": 3.9,
    "Dec-18": 4.1
  },
  {
    "State": "Pennsylvania",
    "Dec-08": 6.6,
    "Jan-09": 7,
    "Feb-09": 7.4,
    "Mar-09": 7.7,
    "Apr-09": 7.9,
    "May-09": 8.1,
    "Jun-09": 8.2,
    "Jul-09": 8.2,
    "Aug-09": 8.3,
    "Sep-09": 8.3,
    "Oct-09": 8.4,
    "Nov-09": 8.5,
    "Dec-09": 8.6,
    "Jan-10": 8.7,
    "Feb-10": 8.8,
    "Mar-10": 8.8,
    "Apr-10": 8.7,
    "May-10": 8.6,
    "Jun-10": 8.5,
    "Jul-10": 8.3,
    "Aug-10": 8.3,
    "Sep-10": 8.2,
    "Oct-10": 8.2,
    "Nov-10": 8.1,
    "Dec-10": 8,
    "Jan-11": 7.9,
    "Feb-11": 7.9,
    "Mar-11": 7.8,
    "Apr-11": 7.8,
    "May-11": 7.9,
    "Jun-11": 8,
    "Jul-11": 8,
    "Aug-11": 8.1,
    "Sep-11": 8,
    "Oct-11": 8,
    "Nov-11": 7.9,
    "Dec-11": 7.8,
    "Jan-12": 7.7,
    "Feb-12": 7.7,
    "Mar-12": 7.7,
    "Apr-12": 7.7,
    "May-12": 7.8,
    "Jun-12": 7.9,
    "Jul-12": 7.9,
    "Aug-12": 7.9,
    "Sep-12": 7.9,
    "Oct-12": 7.9,
    "Nov-12": 7.9,
    "Dec-12": 7.9,
    "Jan-13": 7.9,
    "Feb-13": 7.8,
    "Mar-13": 7.7,
    "Apr-13": 7.6,
    "May-13": 7.5,
    "Jun-13": 7.4,
    "Jul-13": 7.3,
    "Aug-13": 7.3,
    "Sep-13": 7.1,
    "Oct-13": 7,
    "Nov-13": 6.8,
    "Dec-13": 6.7,
    "Jan-14": 6.5,
    "Feb-14": 6.4,
    "Mar-14": 6.2,
    "Apr-14": 6.1,
    "May-14": 6,
    "Jun-14": 5.9,
    "Jul-14": 5.8,
    "Aug-14": 5.7,
    "Sep-14": 5.6,
    "Oct-14": 5.5,
    "Nov-14": 5.4,
    "Dec-14": 5.4,
    "Jan-15": 5.4,
    "Feb-15": 5.4,
    "Mar-15": 5.4,
    "Apr-15": 5.4,
    "May-15": 5.4,
    "Jun-15": 5.3,
    "Jul-15": 5.3,
    "Aug-15": 5.2,
    "Sep-15": 5.2,
    "Oct-15": 5.2,
    "Nov-15": 5.2,
    "Dec-15": 5.2,
    "Jan-16": 5.3,
    "Feb-16": 5.3,
    "Mar-16": 5.3,
    "Apr-16": 5.4,
    "May-16": 5.4,
    "Jun-16": 5.4,
    "Jul-16": 5.5,
    "Aug-16": 5.5,
    "Sep-16": 5.5,
    "Oct-16": 5.5,
    "Nov-16": 5.4,
    "Dec-16": 5.3,
    "Jan-17": 5.2,
    "Feb-17": 5.1,
    "Mar-17": 5,
    "Apr-17": 4.9,
    "May-17": 4.9,
    "Jun-17": 4.8,
    "Jul-17": 4.8,
    "Aug-17": 4.8,
    "Sep-17": 4.8,
    "Oct-17": 4.8,
    "Nov-17": 4.8,
    "Dec-17": 4.8,
    "Jan-18": 4.8,
    "Feb-18": 4.8,
    "Mar-18": 4.8,
    "Apr-18": 4.7,
    "May-18": 4.5,
    "Jun-18": 4.3,
    "Jul-18": 4.2,
    "Aug-18": 4.1,
    "Sep-18": 4.1,
    "Oct-18": 4.1,
    "Nov-18": 4.2,
    "Dec-18": 4.2
  },
  {
    "State": "Rhode Island",
    "Dec-08": 9.7,
    "Jan-09": 10.1,
    "Feb-09": 10.5,
    "Mar-09": 10.8,
    "Apr-09": 11,
    "May-09": 11.2,
    "Jun-09": 11.2,
    "Jul-09": 11.2,
    "Aug-09": 11.2,
    "Sep-09": 11.2,
    "Oct-09": 11.1,
    "Nov-09": 11.1,
    "Dec-09": 11.1,
    "Jan-10": 11.1,
    "Feb-10": 11.1,
    "Mar-10": 11.2,
    "Apr-10": 11.2,
    "May-10": 11.3,
    "Jun-10": 11.3,
    "Jul-10": 11.3,
    "Aug-10": 11.3,
    "Sep-10": 11.2,
    "Oct-10": 11.2,
    "Nov-10": 11.1,
    "Dec-10": 11.1,
    "Jan-11": 11,
    "Feb-11": 11,
    "Mar-11": 10.9,
    "Apr-11": 10.9,
    "May-11": 10.9,
    "Jun-11": 10.9,
    "Jul-11": 11,
    "Aug-11": 11,
    "Sep-11": 11.1,
    "Oct-11": 11.2,
    "Nov-11": 11.2,
    "Dec-11": 11.2,
    "Jan-12": 11.2,
    "Feb-12": 11,
    "Mar-12": 10.9,
    "Apr-12": 10.7,
    "May-12": 10.6,
    "Jun-12": 10.5,
    "Jul-12": 10.3,
    "Aug-12": 10.2,
    "Sep-12": 10.1,
    "Oct-12": 9.9,
    "Nov-12": 9.7,
    "Dec-12": 9.6,
    "Jan-13": 9.5,
    "Feb-13": 9.4,
    "Mar-13": 9.3,
    "Apr-13": 9.3,
    "May-13": 9.3,
    "Jun-13": 9.3,
    "Jul-13": 9.3,
    "Aug-13": 9.3,
    "Sep-13": 9.2,
    "Oct-13": 9.2,
    "Nov-13": 9.1,
    "Dec-13": 9,
    "Jan-14": 8.9,
    "Feb-14": 8.7,
    "Mar-14": 8.5,
    "Apr-14": 8.2,
    "May-14": 8,
    "Jun-14": 7.8,
    "Jul-14": 7.5,
    "Aug-14": 7.3,
    "Sep-14": 7.1,
    "Oct-14": 7,
    "Nov-14": 6.8,
    "Dec-14": 6.7,
    "Jan-15": 6.6,
    "Feb-15": 6.5,
    "Mar-15": 6.4,
    "Apr-15": 6.3,
    "May-15": 6.2,
    "Jun-15": 6,
    "Jul-15": 5.9,
    "Aug-15": 5.8,
    "Sep-15": 5.7,
    "Oct-15": 5.6,
    "Nov-15": 5.5,
    "Dec-15": 5.5,
    "Jan-16": 5.5,
    "Feb-16": 5.4,
    "Mar-16": 5.4,
    "Apr-16": 5.4,
    "May-16": 5.4,
    "Jun-16": 5.3,
    "Jul-16": 5.3,
    "Aug-16": 5.2,
    "Sep-16": 5.1,
    "Oct-16": 5,
    "Nov-16": 4.8,
    "Dec-16": 4.7,
    "Jan-17": 4.6,
    "Feb-17": 4.5,
    "Mar-17": 4.4,
    "Apr-17": 4.4,
    "May-17": 4.4,
    "Jun-17": 4.4,
    "Jul-17": 4.4,
    "Aug-17": 4.4,
    "Sep-17": 4.5,
    "Oct-17": 4.5,
    "Nov-17": 4.5,
    "Dec-17": 4.5,
    "Jan-18": 4.5,
    "Feb-18": 4.6,
    "Mar-18": 4.5,
    "Apr-18": 4.5,
    "May-18": 4.4,
    "Jun-18": 4.3,
    "Jul-18": 4.1,
    "Aug-18": 4,
    "Sep-18": 3.9,
    "Oct-18": 3.8,
    "Nov-18": 3.8,
    "Dec-18": 3.9
  },
  {
    "State": "South Carolina",
    "Dec-08": 9.2,
    "Jan-09": 9.8,
    "Feb-09": 10.5,
    "Mar-09": 10.9,
    "Apr-09": 11.3,
    "May-09": 11.4,
    "Jun-09": 11.5,
    "Jul-09": 11.5,
    "Aug-09": 11.5,
    "Sep-09": 11.5,
    "Oct-09": 11.6,
    "Nov-09": 11.6,
    "Dec-09": 11.7,
    "Jan-10": 11.7,
    "Feb-10": 11.7,
    "Mar-10": 11.5,
    "Apr-10": 11.4,
    "May-10": 11.2,
    "Jun-10": 11,
    "Jul-10": 10.9,
    "Aug-10": 10.8,
    "Sep-10": 10.9,
    "Oct-10": 10.9,
    "Nov-10": 10.8,
    "Dec-10": 10.8,
    "Jan-11": 10.7,
    "Feb-11": 10.7,
    "Mar-11": 10.6,
    "Apr-11": 10.6,
    "May-11": 10.6,
    "Jun-11": 10.7,
    "Jul-11": 10.7,
    "Aug-11": 10.7,
    "Sep-11": 10.6,
    "Oct-11": 10.4,
    "Nov-11": 10.2,
    "Dec-11": 10,
    "Jan-12": 9.8,
    "Feb-12": 9.7,
    "Mar-12": 9.6,
    "Apr-12": 9.5,
    "May-12": 9.5,
    "Jun-12": 9.4,
    "Jul-12": 9.2,
    "Aug-12": 9,
    "Sep-12": 8.9,
    "Oct-12": 8.7,
    "Nov-12": 8.6,
    "Dec-12": 8.5,
    "Jan-13": 8.4,
    "Feb-13": 8.4,
    "Mar-13": 8.2,
    "Apr-13": 8.1,
    "May-13": 7.9,
    "Jun-13": 7.8,
    "Jul-13": 7.6,
    "Aug-13": 7.4,
    "Sep-13": 7.2,
    "Oct-13": 7,
    "Nov-13": 6.8,
    "Dec-13": 6.6,
    "Jan-14": 6.4,
    "Feb-14": 6.3,
    "Mar-14": 6.2,
    "Apr-14": 6.2,
    "May-14": 6.3,
    "Jun-14": 6.4,
    "Jul-14": 6.5,
    "Aug-14": 6.6,
    "Sep-14": 6.7,
    "Oct-14": 6.7,
    "Nov-14": 6.6,
    "Dec-14": 6.5,
    "Jan-15": 6.5,
    "Feb-15": 6.4,
    "Mar-15": 6.4,
    "Apr-15": 6.3,
    "May-15": 6.1,
    "Jun-15": 6,
    "Jul-15": 5.8,
    "Aug-15": 5.7,
    "Sep-15": 5.6,
    "Oct-15": 5.6,
    "Nov-15": 5.5,
    "Dec-15": 5.5,
    "Jan-16": 5.4,
    "Feb-16": 5.4,
    "Mar-16": 5.3,
    "Apr-16": 5.2,
    "May-16": 5.1,
    "Jun-16": 5,
    "Jul-16": 4.9,
    "Aug-16": 4.8,
    "Sep-16": 4.7,
    "Oct-16": 4.7,
    "Nov-16": 4.6,
    "Dec-16": 4.6,
    "Jan-17": 4.5,
    "Feb-17": 4.4,
    "Mar-17": 4.3,
    "Apr-17": 4.3,
    "May-17": 4.2,
    "Jun-17": 4.2,
    "Jul-17": 4.2,
    "Aug-17": 4.2,
    "Sep-17": 4.2,
    "Oct-17": 4.2,
    "Nov-17": 4.2,
    "Dec-17": 4.2,
    "Jan-18": 4.3,
    "Feb-18": 4.4,
    "Mar-18": 4.4,
    "Apr-18": 4.2,
    "May-18": 4,
    "Jun-18": 3.8,
    "Jul-18": 3.6,
    "Aug-18": 3.4,
    "Sep-18": 3.3,
    "Oct-18": 3.3,
    "Nov-18": 3.3,
    "Dec-18": 3.3
  },
  {
    "State": "South Dakota",
    "Dec-08": 4,
    "Jan-09": 4.3,
    "Feb-09": 4.6,
    "Mar-09": 4.8,
    "Apr-09": 5,
    "May-09": 5.1,
    "Jun-09": 5.1,
    "Jul-09": 5,
    "Aug-09": 5,
    "Sep-09": 5,
    "Oct-09": 5,
    "Nov-09": 5.1,
    "Dec-09": 5.1,
    "Jan-10": 5.1,
    "Feb-10": 5.1,
    "Mar-10": 5.1,
    "Apr-10": 5,
    "May-10": 4.9,
    "Jun-10": 4.9,
    "Jul-10": 4.9,
    "Aug-10": 4.9,
    "Sep-10": 4.9,
    "Oct-10": 4.9,
    "Nov-10": 5,
    "Dec-10": 5,
    "Jan-11": 5,
    "Feb-11": 5,
    "Mar-11": 5,
    "Apr-11": 4.9,
    "May-11": 4.8,
    "Jun-11": 4.7,
    "Jul-11": 4.7,
    "Aug-11": 4.6,
    "Sep-11": 4.6,
    "Oct-11": 4.5,
    "Nov-11": 4.5,
    "Dec-11": 4.4,
    "Jan-12": 4.4,
    "Feb-12": 4.3,
    "Mar-12": 4.3,
    "Apr-12": 4.3,
    "May-12": 4.3,
    "Jun-12": 4.3,
    "Jul-12": 4.4,
    "Aug-12": 4.3,
    "Sep-12": 4.3,
    "Oct-12": 4.2,
    "Nov-12": 4.1,
    "Dec-12": 4,
    "Jan-13": 4,
    "Feb-13": 3.9,
    "Mar-13": 3.9,
    "Apr-13": 3.9,
    "May-13": 3.8,
    "Jun-13": 3.8,
    "Jul-13": 3.8,
    "Aug-13": 3.7,
    "Sep-13": 3.7,
    "Oct-13": 3.7,
    "Nov-13": 3.6,
    "Dec-13": 3.6,
    "Jan-14": 3.6,
    "Feb-14": 3.5,
    "Mar-14": 3.5,
    "Apr-14": 3.5,
    "May-14": 3.5,
    "Jun-14": 3.4,
    "Jul-14": 3.4,
    "Aug-14": 3.3,
    "Sep-14": 3.3,
    "Oct-14": 3.3,
    "Nov-14": 3.3,
    "Dec-14": 3.3,
    "Jan-15": 3.3,
    "Feb-15": 3.3,
    "Mar-15": 3.2,
    "Apr-15": 3.2,
    "May-15": 3.2,
    "Jun-15": 3.2,
    "Jul-15": 3.1,
    "Aug-15": 3.1,
    "Sep-15": 3,
    "Oct-15": 3,
    "Nov-15": 2.9,
    "Dec-15": 2.9,
    "Jan-16": 2.9,
    "Feb-16": 2.8,
    "Mar-16": 2.9,
    "Apr-16": 2.9,
    "May-16": 2.9,
    "Jun-16": 3,
    "Jul-16": 3,
    "Aug-16": 3.1,
    "Sep-16": 3.1,
    "Oct-16": 3.1,
    "Nov-16": 3.1,
    "Dec-16": 3.2,
    "Jan-17": 3.2,
    "Feb-17": 3.2,
    "Mar-17": 3.2,
    "Apr-17": 3.3,
    "May-17": 3.3,
    "Jun-17": 3.3,
    "Jul-17": 3.4,
    "Aug-17": 3.4,
    "Sep-17": 3.4,
    "Oct-17": 3.4,
    "Nov-17": 3.4,
    "Dec-17": 3.4,
    "Jan-18": 3.4,
    "Feb-18": 3.4,
    "Mar-18": 3.4,
    "Apr-18": 3.4,
    "May-18": 3.3,
    "Jun-18": 3.2,
    "Jul-18": 3.1,
    "Aug-18": 3,
    "Sep-18": 3,
    "Oct-18": 3,
    "Nov-18": 3,
    "Dec-18": 2.9
  },
  {
    "State": "Tennessee",
    "Dec-08": 8.5,
    "Jan-09": 9.1,
    "Feb-09": 9.8,
    "Mar-09": 10.3,
    "Apr-09": 10.6,
    "May-09": 10.8,
    "Jun-09": 10.9,
    "Jul-09": 10.8,
    "Aug-09": 10.8,
    "Sep-09": 10.7,
    "Oct-09": 10.6,
    "Nov-09": 10.6,
    "Dec-09": 10.5,
    "Jan-10": 10.4,
    "Feb-10": 10.3,
    "Mar-10": 10.1,
    "Apr-10": 9.8,
    "May-10": 9.6,
    "Jun-10": 9.3,
    "Jul-10": 9.2,
    "Aug-10": 9.2,
    "Sep-10": 9.3,
    "Oct-10": 9.4,
    "Nov-10": 9.5,
    "Dec-10": 9.5,
    "Jan-11": 9.5,
    "Feb-11": 9.4,
    "Mar-11": 9.3,
    "Apr-11": 9.2,
    "May-11": 9.2,
    "Jun-11": 9.1,
    "Jul-11": 9.1,
    "Aug-11": 9,
    "Sep-11": 8.8,
    "Oct-11": 8.6,
    "Nov-11": 8.3,
    "Dec-11": 8.1,
    "Jan-12": 7.9,
    "Feb-12": 7.8,
    "Mar-12": 7.8,
    "Apr-12": 7.9,
    "May-12": 7.9,
    "Jun-12": 8,
    "Jul-12": 7.9,
    "Aug-12": 7.8,
    "Sep-12": 7.7,
    "Oct-12": 7.7,
    "Nov-12": 7.7,
    "Dec-12": 7.8,
    "Jan-13": 7.9,
    "Feb-13": 8,
    "Mar-13": 8.1,
    "Apr-13": 8,
    "May-13": 8,
    "Jun-13": 7.9,
    "Jul-13": 7.8,
    "Aug-13": 7.8,
    "Sep-13": 7.6,
    "Oct-13": 7.4,
    "Nov-13": 7.2,
    "Dec-13": 7.1,
    "Jan-14": 6.9,
    "Feb-14": 6.7,
    "Mar-14": 6.6,
    "Apr-14": 6.6,
    "May-14": 6.6,
    "Jun-14": 6.7,
    "Jul-14": 6.6,
    "Aug-14": 6.6,
    "Sep-14": 6.6,
    "Oct-14": 6.5,
    "Nov-14": 6.4,
    "Dec-14": 6.3,
    "Jan-15": 6.2,
    "Feb-15": 6.1,
    "Mar-15": 6,
    "Apr-15": 5.9,
    "May-15": 5.8,
    "Jun-15": 5.7,
    "Jul-15": 5.6,
    "Aug-15": 5.4,
    "Sep-15": 5.3,
    "Oct-15": 5.2,
    "Nov-15": 5,
    "Dec-15": 4.9,
    "Jan-16": 4.8,
    "Feb-16": 4.7,
    "Mar-16": 4.7,
    "Apr-16": 4.7,
    "May-16": 4.7,
    "Jun-16": 4.7,
    "Jul-16": 4.7,
    "Aug-16": 4.7,
    "Sep-16": 4.8,
    "Oct-16": 4.8,
    "Nov-16": 4.7,
    "Dec-16": 4.7,
    "Jan-17": 4.5,
    "Feb-17": 4.4,
    "Mar-17": 4.2,
    "Apr-17": 4,
    "May-17": 3.8,
    "Jun-17": 3.6,
    "Jul-17": 3.5,
    "Aug-17": 3.4,
    "Sep-17": 3.3,
    "Oct-17": 3.3,
    "Nov-17": 3.3,
    "Dec-17": 3.3,
    "Jan-18": 3.3,
    "Feb-18": 3.4,
    "Mar-18": 3.4,
    "Apr-18": 3.4,
    "May-18": 3.5,
    "Jun-18": 3.5,
    "Jul-18": 3.5,
    "Aug-18": 3.6,
    "Sep-18": 3.6,
    "Oct-18": 3.7,
    "Nov-18": 3.6,
    "Dec-18": 3.6
  },
  {
    "State": "Texas",
    "Dec-08": 5.8,
    "Jan-09": 6.1,
    "Feb-09": 6.3,
    "Mar-09": 6.5,
    "Apr-09": 6.6,
    "May-09": 7.6,
    "Jun-09": 8,
    "Jul-09": 8.2,
    "Aug-09": 8.3,
    "Sep-09": 8.3,
    "Oct-09": 8.3,
    "Nov-09": 8.3,
    "Dec-09": 8.3,
    "Jan-10": 8.3,
    "Feb-10": 8.3,
    "Mar-10": 8.3,
    "Apr-10": 8.2,
    "May-10": 8.1,
    "Jun-10": 8,
    "Jul-10": 8,
    "Aug-10": 8,
    "Sep-10": 8.1,
    "Oct-10": 8.1,
    "Nov-10": 8.1,
    "Dec-10": 8.1,
    "Jan-11": 8,
    "Feb-11": 7.9,
    "Mar-11": 7.9,
    "Apr-11": 7.9,
    "May-11": 7.9,
    "Jun-11": 7.9,
    "Jul-11": 7.9,
    "Aug-11": 7.8,
    "Sep-11": 7.7,
    "Oct-11": 7.6,
    "Nov-11": 7.4,
    "Dec-11": 7.2,
    "Jan-12": 7.1,
    "Feb-12": 7,
    "Mar-12": 6.9,
    "Apr-12": 6.9,
    "May-12": 6.9,
    "Jun-12": 6.8,
    "Jul-12": 6.7,
    "Aug-12": 6.6,
    "Sep-12": 6.5,
    "Oct-12": 6.5,
    "Nov-12": 6.5,
    "Dec-12": 6.5,
    "Jan-13": 6.5,
    "Feb-13": 6.5,
    "Mar-13": 6.5,
    "Apr-13": 6.5,
    "May-13": 6.4,
    "Jun-13": 6.3,
    "Jul-13": 6.3,
    "Aug-13": 6.2,
    "Sep-13": 6.1,
    "Oct-13": 6,
    "Nov-13": 5.9,
    "Dec-13": 5.8,
    "Jan-14": 5.7,
    "Feb-14": 5.5,
    "Mar-14": 5.4,
    "Apr-14": 5.3,
    "May-14": 5.2,
    "Jun-14": 5.1,
    "Jul-14": 5.1,
    "Aug-14": 5,
    "Sep-14": 4.9,
    "Oct-14": 4.8,
    "Nov-14": 4.7,
    "Dec-14": 4.6,
    "Jan-15": 4.5,
    "Feb-15": 4.4,
    "Mar-15": 4.4,
    "Apr-15": 4.4,
    "May-15": 4.4,
    "Jun-15": 4.4,
    "Jul-15": 4.4,
    "Aug-15": 4.4,
    "Sep-15": 4.4,
    "Oct-15": 4.4,
    "Nov-15": 4.5,
    "Dec-15": 4.5,
    "Jan-16": 4.5,
    "Feb-16": 4.5,
    "Mar-16": 4.5,
    "Apr-16": 4.5,
    "May-16": 4.6,
    "Jun-16": 4.6,
    "Jul-16": 4.7,
    "Aug-16": 4.7,
    "Sep-16": 4.7,
    "Oct-16": 4.8,
    "Nov-16": 4.8,
    "Dec-16": 4.8,
    "Jan-17": 4.8,
    "Feb-17": 4.7,
    "Mar-17": 4.6,
    "Apr-17": 4.5,
    "May-17": 4.4,
    "Jun-17": 4.2,
    "Jul-17": 4.1,
    "Aug-17": 4,
    "Sep-17": 4,
    "Oct-17": 3.9,
    "Nov-17": 3.9,
    "Dec-17": 4,
    "Jan-18": 4,
    "Feb-18": 4,
    "Mar-18": 4,
    "Apr-18": 4.1,
    "May-18": 4.1,
    "Jun-18": 4,
    "Jul-18": 4,
    "Aug-18": 3.9,
    "Sep-18": 3.8,
    "Oct-18": 3.7,
    "Nov-18": 3.7,
    "Dec-18": 3.7
  },
  {
    "State": "Utah",
    "Dec-08": 5.5,
    "Jan-09": 6.2,
    "Feb-09": 6.7,
    "Mar-09": 7,
    "Apr-09": 7.2,
    "May-09": 7.3,
    "Jun-09": 7.4,
    "Jul-09": 7.5,
    "Aug-09": 7.6,
    "Sep-09": 7.6,
    "Oct-09": 7.7,
    "Nov-09": 7.8,
    "Dec-09": 7.8,
    "Jan-10": 7.9,
    "Feb-10": 7.9,
    "Mar-10": 8,
    "Apr-10": 8,
    "May-10": 7.9,
    "Jun-10": 7.9,
    "Jul-10": 7.9,
    "Aug-10": 7.8,
    "Sep-10": 7.8,
    "Oct-10": 7.7,
    "Nov-10": 7.6,
    "Dec-10": 7.6,
    "Jan-11": 7.5,
    "Feb-11": 7.4,
    "Mar-11": 7.2,
    "Apr-11": 7.1,
    "May-11": 7,
    "Jun-11": 6.8,
    "Jul-11": 6.7,
    "Aug-11": 6.5,
    "Sep-11": 6.4,
    "Oct-11": 6.3,
    "Nov-11": 6.1,
    "Dec-11": 6,
    "Jan-12": 5.9,
    "Feb-12": 5.8,
    "Mar-12": 5.7,
    "Apr-12": 5.6,
    "May-12": 5.5,
    "Jun-12": 5.4,
    "Jul-12": 5.3,
    "Aug-12": 5.2,
    "Sep-12": 5.2,
    "Oct-12": 5.1,
    "Nov-12": 5.1,
    "Dec-12": 5,
    "Jan-13": 5,
    "Feb-13": 4.9,
    "Mar-13": 4.8,
    "Apr-13": 4.8,
    "May-13": 4.7,
    "Jun-13": 4.6,
    "Jul-13": 4.6,
    "Aug-13": 4.5,
    "Sep-13": 4.4,
    "Oct-13": 4.3,
    "Nov-13": 4.3,
    "Dec-13": 4.2,
    "Jan-14": 4.1,
    "Feb-14": 4,
    "Mar-14": 3.9,
    "Apr-14": 3.8,
    "May-14": 3.8,
    "Jun-14": 3.8,
    "Jul-14": 3.8,
    "Aug-14": 3.8,
    "Sep-14": 3.8,
    "Oct-14": 3.7,
    "Nov-14": 3.7,
    "Dec-14": 3.7,
    "Jan-15": 3.6,
    "Feb-15": 3.6,
    "Mar-15": 3.6,
    "Apr-15": 3.6,
    "May-15": 3.6,
    "Jun-15": 3.6,
    "Jul-15": 3.6,
    "Aug-15": 3.6,
    "Sep-15": 3.6,
    "Oct-15": 3.6,
    "Nov-15": 3.6,
    "Dec-15": 3.6,
    "Jan-16": 3.6,
    "Feb-16": 3.6,
    "Mar-16": 3.6,
    "Apr-16": 3.5,
    "May-16": 3.5,
    "Jun-16": 3.5,
    "Jul-16": 3.4,
    "Aug-16": 3.4,
    "Sep-16": 3.3,
    "Oct-16": 3.3,
    "Nov-16": 3.3,
    "Dec-16": 3.3,
    "Jan-17": 3.3,
    "Feb-17": 3.3,
    "Mar-17": 3.3,
    "Apr-17": 3.3,
    "May-17": 3.3,
    "Jun-17": 3.3,
    "Jul-17": 3.3,
    "Aug-17": 3.2,
    "Sep-17": 3.2,
    "Oct-17": 3.2,
    "Nov-17": 3.2,
    "Dec-17": 3.2,
    "Jan-18": 3.1,
    "Feb-18": 3.1,
    "Mar-18": 3.1,
    "Apr-18": 3.1,
    "May-18": 3,
    "Jun-18": 3,
    "Jul-18": 3.1,
    "Aug-18": 3.1,
    "Sep-18": 3.2,
    "Oct-18": 3.2,
    "Nov-18": 3.2,
    "Dec-18": 3.2
  },
  {
    "State": "Vermont",
    "Dec-08": 5.7,
    "Jan-09": 6.1,
    "Feb-09": 6.4,
    "Mar-09": 6.7,
    "Apr-09": 6.9,
    "May-09": 6.9,
    "Jun-09": 6.9,
    "Jul-09": 6.8,
    "Aug-09": 6.6,
    "Sep-09": 6.5,
    "Oct-09": 6.4,
    "Nov-09": 6.3,
    "Dec-09": 6.3,
    "Jan-10": 6.3,
    "Feb-10": 6.3,
    "Mar-10": 6.2,
    "Apr-10": 6.2,
    "May-10": 6.1,
    "Jun-10": 6.1,
    "Jul-10": 6,
    "Aug-10": 6,
    "Sep-10": 6,
    "Oct-10": 6,
    "Nov-10": 5.9,
    "Dec-10": 5.9,
    "Jan-11": 5.8,
    "Feb-11": 5.7,
    "Mar-11": 5.6,
    "Apr-11": 5.5,
    "May-11": 5.5,
    "Jun-11": 5.4,
    "Jul-11": 5.4,
    "Aug-11": 5.4,
    "Sep-11": 5.4,
    "Oct-11": 5.4,
    "Nov-11": 5.3,
    "Dec-11": 5.2,
    "Jan-12": 5.1,
    "Feb-12": 5,
    "Mar-12": 5,
    "Apr-12": 5,
    "May-12": 5,
    "Jun-12": 5,
    "Jul-12": 5,
    "Aug-12": 5,
    "Sep-12": 4.9,
    "Oct-12": 4.8,
    "Nov-12": 4.7,
    "Dec-12": 4.6,
    "Jan-13": 4.6,
    "Feb-13": 4.5,
    "Mar-13": 4.5,
    "Apr-13": 4.5,
    "May-13": 4.5,
    "Jun-13": 4.5,
    "Jul-13": 4.4,
    "Aug-13": 4.4,
    "Sep-13": 4.3,
    "Oct-13": 4.3,
    "Nov-13": 4.2,
    "Dec-13": 4.2,
    "Jan-14": 4.1,
    "Feb-14": 4.1,
    "Mar-14": 4,
    "Apr-14": 4,
    "May-14": 4,
    "Jun-14": 4,
    "Jul-14": 3.9,
    "Aug-14": 3.9,
    "Sep-14": 3.9,
    "Oct-14": 3.9,
    "Nov-14": 3.8,
    "Dec-14": 3.8,
    "Jan-15": 3.8,
    "Feb-15": 3.7,
    "Mar-15": 3.7,
    "Apr-15": 3.6,
    "May-15": 3.6,
    "Jun-15": 3.6,
    "Jul-15": 3.6,
    "Aug-15": 3.5,
    "Sep-15": 3.5,
    "Oct-15": 3.5,
    "Nov-15": 3.4,
    "Dec-15": 3.4,
    "Jan-16": 3.3,
    "Feb-16": 3.3,
    "Mar-16": 3.3,
    "Apr-16": 3.3,
    "May-16": 3.3,
    "Jun-16": 3.3,
    "Jul-16": 3.2,
    "Aug-16": 3.2,
    "Sep-16": 3.2,
    "Oct-16": 3.2,
    "Nov-16": 3.2,
    "Dec-16": 3.1,
    "Jan-17": 3.1,
    "Feb-17": 3.1,
    "Mar-17": 3.1,
    "Apr-17": 3.1,
    "May-17": 3.1,
    "Jun-17": 3,
    "Jul-17": 3,
    "Aug-17": 3,
    "Sep-17": 2.9,
    "Oct-17": 2.9,
    "Nov-17": 2.9,
    "Dec-17": 2.9,
    "Jan-18": 2.9,
    "Feb-18": 2.8,
    "Mar-18": 2.8,
    "Apr-18": 2.8,
    "May-18": 2.8,
    "Jun-18": 2.8,
    "Jul-18": 2.8,
    "Aug-18": 2.8,
    "Sep-18": 2.9,
    "Oct-18": 2.8,
    "Nov-18": 2.7,
    "Dec-18": 2.7
  },
  {
    "State": "Virginia",
    "Dec-08": 5.1,
    "Jan-09": 5.5,
    "Feb-09": 6,
    "Mar-09": 6.3,
    "Apr-09": 6.5,
    "May-09": 6.7,
    "Jun-09": 6.8,
    "Jul-09": 6.8,
    "Aug-09": 6.9,
    "Sep-09": 7,
    "Oct-09": 7.1,
    "Nov-09": 7.2,
    "Dec-09": 7.4,
    "Jan-10": 7.4,
    "Feb-10": 7.5,
    "Mar-10": 7.4,
    "Apr-10": 7.3,
    "May-10": 7.2,
    "Jun-10": 7.1,
    "Jul-10": 7,
    "Aug-10": 7,
    "Sep-10": 7,
    "Oct-10": 6.9,
    "Nov-10": 6.9,
    "Dec-10": 6.8,
    "Jan-11": 6.7,
    "Feb-11": 6.6,
    "Mar-11": 6.5,
    "Apr-11": 6.5,
    "May-11": 6.6,
    "Jun-11": 6.6,
    "Jul-11": 6.7,
    "Aug-11": 6.7,
    "Sep-11": 6.7,
    "Oct-11": 6.6,
    "Nov-11": 6.5,
    "Dec-11": 6.4,
    "Jan-12": 6.3,
    "Feb-12": 6.2,
    "Mar-12": 6.2,
    "Apr-12": 6.2,
    "May-12": 6.2,
    "Jun-12": 6.1,
    "Jul-12": 6.1,
    "Aug-12": 6,
    "Sep-12": 5.9,
    "Oct-12": 5.9,
    "Nov-12": 5.8,
    "Dec-12": 5.8,
    "Jan-13": 5.8,
    "Feb-13": 5.8,
    "Mar-13": 5.8,
    "Apr-13": 5.8,
    "May-13": 5.7,
    "Jun-13": 5.7,
    "Jul-13": 5.7,
    "Aug-13": 5.7,
    "Sep-13": 5.7,
    "Oct-13": 5.6,
    "Nov-13": 5.6,
    "Dec-13": 5.5,
    "Jan-14": 5.5,
    "Feb-14": 5.4,
    "Mar-14": 5.4,
    "Apr-14": 5.4,
    "May-14": 5.3,
    "Jun-14": 5.3,
    "Jul-14": 5.2,
    "Aug-14": 5.2,
    "Sep-14": 5.1,
    "Oct-14": 5.1,
    "Nov-14": 5,
    "Dec-14": 4.9,
    "Jan-15": 4.9,
    "Feb-15": 4.8,
    "Mar-15": 4.8,
    "Apr-15": 4.7,
    "May-15": 4.6,
    "Jun-15": 4.5,
    "Jul-15": 4.4,
    "Aug-15": 4.3,
    "Sep-15": 4.2,
    "Oct-15": 4.1,
    "Nov-15": 4.1,
    "Dec-15": 4.1,
    "Jan-16": 4.1,
    "Feb-16": 4,
    "Mar-16": 4,
    "Apr-16": 4,
    "May-16": 4,
    "Jun-16": 4.1,
    "Jul-16": 4.1,
    "Aug-16": 4.2,
    "Sep-16": 4.2,
    "Oct-16": 4.2,
    "Nov-16": 4.1,
    "Dec-16": 4.1,
    "Jan-17": 4,
    "Feb-17": 4,
    "Mar-17": 3.9,
    "Apr-17": 3.8,
    "May-17": 3.8,
    "Jun-17": 3.7,
    "Jul-17": 3.7,
    "Aug-17": 3.7,
    "Sep-17": 3.6,
    "Oct-17": 3.6,
    "Nov-17": 3.6,
    "Dec-17": 3.6,
    "Jan-18": 3.6,
    "Feb-18": 3.5,
    "Mar-18": 3.4,
    "Apr-18": 3.3,
    "May-18": 3.2,
    "Jun-18": 3.2,
    "Jul-18": 3.1,
    "Aug-18": 3,
    "Sep-18": 2.9,
    "Oct-18": 2.9,
    "Nov-18": 2.8,
    "Dec-18": 2.8
  },
  {
    "State": "Washington",
    "Dec-08": 6.7,
    "Jan-09": 7.1,
    "Feb-09": 7.5,
    "Mar-09": 7.8,
    "Apr-09": 8.4,
    "May-09": 8.8,
    "Jun-09": 9.2,
    "Jul-09": 9.5,
    "Aug-09": 9.9,
    "Sep-09": 10.2,
    "Oct-09": 10.3,
    "Nov-09": 10.3,
    "Dec-09": 10.4,
    "Jan-10": 10.4,
    "Feb-10": 10.4,
    "Mar-10": 10.3,
    "Apr-10": 10.2,
    "May-10": 10,
    "Jun-10": 9.9,
    "Jul-10": 9.8,
    "Aug-10": 9.8,
    "Sep-10": 9.8,
    "Oct-10": 9.8,
    "Nov-10": 9.8,
    "Dec-10": 9.7,
    "Jan-11": 9.6,
    "Feb-11": 9.5,
    "Mar-11": 9.5,
    "Apr-11": 9.4,
    "May-11": 9.4,
    "Jun-11": 9.4,
    "Jul-11": 9.3,
    "Aug-11": 9.3,
    "Sep-11": 9.2,
    "Oct-11": 9,
    "Nov-11": 8.9,
    "Dec-11": 8.8,
    "Jan-12": 8.6,
    "Feb-12": 8.5,
    "Mar-12": 8.5,
    "Apr-12": 8.4,
    "May-12": 8.4,
    "Jun-12": 8.3,
    "Jul-12": 8.2,
    "Aug-12": 8,
    "Sep-12": 7.8,
    "Oct-12": 7.7,
    "Nov-12": 7.5,
    "Dec-12": 7.4,
    "Jan-13": 7.4,
    "Feb-13": 7.3,
    "Mar-13": 7.3,
    "Apr-13": 7.2,
    "May-13": 7.1,
    "Jun-13": 7.1,
    "Jul-13": 7,
    "Aug-13": 7,
    "Sep-13": 6.9,
    "Oct-13": 6.8,
    "Nov-13": 6.7,
    "Dec-13": 6.6,
    "Jan-14": 6.5,
    "Feb-14": 6.4,
    "Mar-14": 6.3,
    "Apr-14": 6.2,
    "May-14": 6.2,
    "Jun-14": 6.1,
    "Jul-14": 6.1,
    "Aug-14": 6,
    "Sep-14": 6,
    "Oct-14": 6,
    "Nov-14": 5.9,
    "Dec-14": 5.8,
    "Jan-15": 5.8,
    "Feb-15": 5.7,
    "Mar-15": 5.7,
    "Apr-15": 5.7,
    "May-15": 5.6,
    "Jun-15": 5.6,
    "Jul-15": 5.6,
    "Aug-15": 5.6,
    "Sep-15": 5.6,
    "Oct-15": 5.6,
    "Nov-15": 5.6,
    "Dec-15": 5.6,
    "Jan-16": 5.5,
    "Feb-16": 5.5,
    "Mar-16": 5.5,
    "Apr-16": 5.4,
    "May-16": 5.4,
    "Jun-16": 5.4,
    "Jul-16": 5.3,
    "Aug-16": 5.2,
    "Sep-16": 5.1,
    "Oct-16": 5.1,
    "Nov-16": 5,
    "Dec-16": 4.9,
    "Jan-17": 4.9,
    "Feb-17": 4.8,
    "Mar-17": 4.8,
    "Apr-17": 4.8,
    "May-17": 4.8,
    "Jun-17": 4.8,
    "Jul-17": 4.8,
    "Aug-17": 4.8,
    "Sep-17": 4.7,
    "Oct-17": 4.7,
    "Nov-17": 4.7,
    "Dec-17": 4.7,
    "Jan-18": 4.7,
    "Feb-18": 4.7,
    "Mar-18": 4.7,
    "Apr-18": 4.8,
    "May-18": 4.7,
    "Jun-18": 4.7,
    "Jul-18": 4.6,
    "Aug-18": 4.5,
    "Sep-18": 4.4,
    "Oct-18": 4.3,
    "Nov-18": 4.3,
    "Dec-18": 4.3
  },
  {
    "State": "West Virginia",
    "Dec-08": 5.3,
    "Jan-09": 5.8,
    "Feb-09": 6.4,
    "Mar-09": 7,
    "Apr-09": 7.5,
    "May-09": 7.9,
    "Jun-09": 8.1,
    "Jul-09": 8.2,
    "Aug-09": 8.2,
    "Sep-09": 8.2,
    "Oct-09": 8.3,
    "Nov-09": 8.4,
    "Dec-09": 8.5,
    "Jan-10": 8.6,
    "Feb-10": 8.6,
    "Mar-10": 8.6,
    "Apr-10": 8.5,
    "May-10": 8.5,
    "Jun-10": 8.5,
    "Jul-10": 8.5,
    "Aug-10": 8.6,
    "Sep-10": 8.7,
    "Oct-10": 8.8,
    "Nov-10": 8.8,
    "Dec-10": 8.8,
    "Jan-11": 8.7,
    "Feb-11": 8.5,
    "Mar-11": 8.3,
    "Apr-11": 8.2,
    "May-11": 8.1,
    "Jun-11": 8,
    "Jul-11": 8,
    "Aug-11": 8,
    "Sep-11": 7.9,
    "Oct-11": 7.8,
    "Nov-11": 7.7,
    "Dec-11": 7.5,
    "Jan-12": 7.4,
    "Feb-12": 7.3,
    "Mar-12": 7.3,
    "Apr-12": 7.4,
    "May-12": 7.5,
    "Jun-12": 7.6,
    "Jul-12": 7.6,
    "Aug-12": 7.7,
    "Sep-12": 7.6,
    "Oct-12": 7.6,
    "Nov-12": 7.5,
    "Dec-12": 7.4,
    "Jan-13": 7.3,
    "Feb-13": 7.1,
    "Mar-13": 6.9,
    "Apr-13": 6.8,
    "May-13": 6.7,
    "Jun-13": 6.6,
    "Jul-13": 6.6,
    "Aug-13": 6.6,
    "Sep-13": 6.6,
    "Oct-13": 6.7,
    "Nov-13": 6.8,
    "Dec-13": 6.8,
    "Jan-14": 6.9,
    "Feb-14": 6.8,
    "Mar-14": 6.8,
    "Apr-14": 6.7,
    "May-14": 6.7,
    "Jun-14": 6.6,
    "Jul-14": 6.6,
    "Aug-14": 6.5,
    "Sep-14": 6.5,
    "Oct-14": 6.5,
    "Nov-14": 6.5,
    "Dec-14": 6.6,
    "Jan-15": 6.7,
    "Feb-15": 6.8,
    "Mar-15": 6.9,
    "Apr-15": 7,
    "May-15": 7.1,
    "Jun-15": 7,
    "Jul-15": 6.9,
    "Aug-15": 6.7,
    "Sep-15": 6.6,
    "Oct-15": 6.5,
    "Nov-15": 6.4,
    "Dec-15": 6.4,
    "Jan-16": 6.4,
    "Feb-16": 6.4,
    "Mar-16": 6.4,
    "Apr-16": 6.3,
    "May-16": 6.2,
    "Jun-16": 6.1,
    "Jul-16": 6.1,
    "Aug-16": 6,
    "Sep-16": 6,
    "Oct-16": 5.9,
    "Nov-16": 5.7,
    "Dec-16": 5.5,
    "Jan-17": 5.3,
    "Feb-17": 5.1,
    "Mar-17": 5,
    "Apr-17": 5,
    "May-17": 5,
    "Jun-17": 5,
    "Jul-17": 5.1,
    "Aug-17": 5.2,
    "Sep-17": 5.3,
    "Oct-17": 5.4,
    "Nov-17": 5.4,
    "Dec-17": 5.4,
    "Jan-18": 5.4,
    "Feb-18": 5.4,
    "Mar-18": 5.4,
    "Apr-18": 5.4,
    "May-18": 5.4,
    "Jun-18": 5.3,
    "Jul-18": 5.4,
    "Aug-18": 5.3,
    "Sep-18": 5.2,
    "Oct-18": 5.2,
    "Nov-18": 5.2,
    "Dec-18": 5.1
  },
  {
    "State": "Wisconsin",
    "Dec-08": 6.5,
    "Jan-09": 7,
    "Feb-09": 7.6,
    "Mar-09": 8.1,
    "Apr-09": 8.4,
    "May-09": 8.7,
    "Jun-09": 8.8,
    "Jul-09": 8.9,
    "Aug-09": 8.9,
    "Sep-09": 9,
    "Oct-09": 9.1,
    "Nov-09": 9.2,
    "Dec-09": 9.2,
    "Jan-10": 9.3,
    "Feb-10": 9.2,
    "Mar-10": 9.1,
    "Apr-10": 8.9,
    "May-10": 8.7,
    "Jun-10": 8.6,
    "Jul-10": 8.5,
    "Aug-10": 8.4,
    "Sep-10": 8.4,
    "Oct-10": 8.3,
    "Nov-10": 8.2,
    "Dec-10": 8.1,
    "Jan-11": 8,
    "Feb-11": 8,
    "Mar-11": 7.9,
    "Apr-11": 7.9,
    "May-11": 7.9,
    "Jun-11": 7.9,
    "Jul-11": 7.8,
    "Aug-11": 7.8,
    "Sep-11": 7.7,
    "Oct-11": 7.5,
    "Nov-11": 7.4,
    "Dec-11": 7.3,
    "Jan-12": 7.2,
    "Feb-12": 7.1,
    "Mar-12": 7.1,
    "Apr-12": 7.1,
    "May-12": 7.1,
    "Jun-12": 7.1,
    "Jul-12": 7.1,
    "Aug-12": 7,
    "Sep-12": 6.9,
    "Oct-12": 6.9,
    "Nov-12": 6.9,
    "Dec-12": 6.9,
    "Jan-13": 7,
    "Feb-13": 7,
    "Mar-13": 7,
    "Apr-13": 6.9,
    "May-13": 6.8,
    "Jun-13": 6.8,
    "Jul-13": 6.7,
    "Aug-13": 6.6,
    "Sep-13": 6.6,
    "Oct-13": 6.5,
    "Nov-13": 6.3,
    "Dec-13": 6.2,
    "Jan-14": 6.1,
    "Feb-14": 5.9,
    "Mar-14": 5.8,
    "Apr-14": 5.7,
    "May-14": 5.6,
    "Jun-14": 5.5,
    "Jul-14": 5.3,
    "Aug-14": 5.2,
    "Sep-14": 5.1,
    "Oct-14": 5,
    "Nov-14": 4.9,
    "Dec-14": 4.9,
    "Jan-15": 4.8,
    "Feb-15": 4.7,
    "Mar-15": 4.7,
    "Apr-15": 4.7,
    "May-15": 4.6,
    "Jun-15": 4.5,
    "Jul-15": 4.5,
    "Aug-15": 4.4,
    "Sep-15": 4.4,
    "Oct-15": 4.4,
    "Nov-15": 4.3,
    "Dec-15": 4.3,
    "Jan-16": 4.2,
    "Feb-16": 4.1,
    "Mar-16": 4.1,
    "Apr-16": 4.1,
    "May-16": 4.1,
    "Jun-16": 4.1,
    "Jul-16": 4,
    "Aug-16": 4,
    "Sep-16": 4,
    "Oct-16": 3.9,
    "Nov-16": 3.8,
    "Dec-16": 3.7,
    "Jan-17": 3.5,
    "Feb-17": 3.4,
    "Mar-17": 3.3,
    "Apr-17": 3.3,
    "May-17": 3.3,
    "Jun-17": 3.3,
    "Jul-17": 3.3,
    "Aug-17": 3.3,
    "Sep-17": 3.3,
    "Oct-17": 3.2,
    "Nov-17": 3.2,
    "Dec-17": 3.2,
    "Jan-18": 3.1,
    "Feb-18": 2.9,
    "Mar-18": 2.9,
    "Apr-18": 2.8,
    "May-18": 2.8,
    "Jun-18": 2.9,
    "Jul-18": 2.9,
    "Aug-18": 3,
    "Sep-18": 3,
    "Oct-18": 3,
    "Nov-18": 3,
    "Dec-18": 3
  },
  {
    "State": "Wyoming",
    "Dec-08": 3.9,
    "Jan-09": 4.4,
    "Feb-09": 5,
    "Mar-09": 5.6,
    "Apr-09": 6.1,
    "May-09": 6.5,
    "Jun-09": 6.7,
    "Jul-09": 6.8,
    "Aug-09": 6.8,
    "Sep-09": 6.9,
    "Oct-09": 7,
    "Nov-09": 7.1,
    "Dec-09": 7.1,
    "Jan-10": 7.1,
    "Feb-10": 7.1,
    "Mar-10": 6.9,
    "Apr-10": 6.7,
    "May-10": 6.5,
    "Jun-10": 6.3,
    "Jul-10": 6.2,
    "Aug-10": 6.1,
    "Sep-10": 6.1,
    "Oct-10": 6.1,
    "Nov-10": 6.1,
    "Dec-10": 6.2,
    "Jan-11": 6.1,
    "Feb-11": 6.1,
    "Mar-11": 6,
    "Apr-11": 5.9,
    "May-11": 5.8,
    "Jun-11": 5.7,
    "Jul-11": 5.7,
    "Aug-11": 5.6,
    "Sep-11": 5.7,
    "Oct-11": 5.7,
    "Nov-11": 5.6,
    "Dec-11": 5.6,
    "Jan-12": 5.5,
    "Feb-12": 5.4,
    "Mar-12": 5.3,
    "Apr-12": 5.3,
    "May-12": 5.3,
    "Jun-12": 5.3,
    "Jul-12": 5.3,
    "Aug-12": 5.4,
    "Sep-12": 5.3,
    "Oct-12": 5.3,
    "Nov-12": 5.2,
    "Dec-12": 5.1,
    "Jan-13": 5.1,
    "Feb-13": 5,
    "Mar-13": 4.9,
    "Apr-13": 4.8,
    "May-13": 4.7,
    "Jun-13": 4.7,
    "Jul-13": 4.6,
    "Aug-13": 4.6,
    "Sep-13": 4.6,
    "Oct-13": 4.6,
    "Nov-13": 4.5,
    "Dec-13": 4.5,
    "Jan-14": 4.4,
    "Feb-14": 4.3,
    "Mar-14": 4.2,
    "Apr-14": 4.1,
    "May-14": 4.1,
    "Jun-14": 4.1,
    "Jul-14": 4.1,
    "Aug-14": 4.2,
    "Sep-14": 4.1,
    "Oct-14": 4.1,
    "Nov-14": 4,
    "Dec-14": 3.9,
    "Jan-15": 3.9,
    "Feb-15": 3.9,
    "Mar-15": 4,
    "Apr-15": 4.1,
    "May-15": 4.2,
    "Jun-15": 4.3,
    "Jul-15": 4.4,
    "Aug-15": 4.4,
    "Sep-15": 4.5,
    "Oct-15": 4.5,
    "Nov-15": 4.7,
    "Dec-15": 4.9,
    "Jan-16": 5.1,
    "Feb-16": 5.3,
    "Mar-16": 5.5,
    "Apr-16": 5.6,
    "May-16": 5.6,
    "Jun-16": 5.5,
    "Jul-16": 5.4,
    "Aug-16": 5.3,
    "Sep-16": 5.1,
    "Oct-16": 5,
    "Nov-16": 5,
    "Dec-16": 4.9,
    "Jan-17": 4.7,
    "Feb-17": 4.5,
    "Mar-17": 4.3,
    "Apr-17": 4.1,
    "May-17": 4,
    "Jun-17": 4,
    "Jul-17": 4,
    "Aug-17": 4.1,
    "Sep-17": 4.1,
    "Oct-17": 4.2,
    "Nov-17": 4.2,
    "Dec-17": 4.1,
    "Jan-18": 4.1,
    "Feb-18": 4,
    "Mar-18": 3.9,
    "Apr-18": 3.8,
    "May-18": 3.7,
    "Jun-18": 3.7,
    "Jul-18": 3.8,
    "Aug-18": 3.9,
    "Sep-18": 4.1,
    "Oct-18": 4.1,
    "Nov-18": 4.1,
    "Dec-18": 4.1
  }
]
;

var ModuleNicar2019Map =
/*#__PURE__*/
function (_ChartComponent) {
  _inherits(ModuleNicar2019Map, _ChartComponent);

  function ModuleNicar2019Map() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModuleNicar2019Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModuleNicar2019Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "defaultProps", {
      highlightState: 'Missouri',
      onClick: function onClick(d) {
        console.log(d);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "usmap", usmap);

    _defineProperty(_assertThisInitialized(_this), "unemployment", unemployment);

    return _this;
  }

  _createClass(ModuleNicar2019Map, [{
    key: "draw",
    value: function draw() {
      // Data processing
      var features = feature(usmap, usmap.objects.us_states);
      features.features.map(function (state) {
        state.currentUnemployment = unemployment.filter(function (d) {
          return d.State === state.properties.NAME;
        })[0]['Dec-18'];
      });
      var props = this.props();
      var node = this.selection().node();

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width,
          height = _node$getBoundingClie.height; // SVG furniture


      var g = this.selection().appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width).attr('height', height); // Color scale

      var color = d3.scaleThreshold().domain([1, 2, 3, 4, 5, 6, 7]).range(['#FFE5D8', '#FFC1AA', '#F59E82', '#E37E61', '#CC5F44', '#B2422C', '#972516', '#7A0001']); // Set up map

      var projection = d3.geoAlbersUsa().fitSize([width, height], features);
      var path = d3.geoPath().projection(projection);
      var paths = g.appendSelect('g').attr('id', 'states').selectAll('path').data(features.features);
      paths.enter().append('path').attr('d', path).on('click', function (d) {
        props.onClick(d.properties.NAME);
      }).merge(paths).style('fill', function (d) {
        if (props.highlightState === null) {
          return color(d.currentUnemployment);
        } else {
          return d.properties.NAME === props.highlightState ? color(d.currentUnemployment) : '#E5E7EB';
        }
      });
      return this;
    }
  }]);

  return ModuleNicar2019Map;
}(ChartComponent);

export default ModuleNicar2019Map;
