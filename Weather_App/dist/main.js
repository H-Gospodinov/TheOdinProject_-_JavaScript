/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/media.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/media.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-ExtraLight.woff2 */ "./src/fonts/Roboto-ExtraLight.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Light.woff2 */ "./src/fonts/Roboto-Light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background.webp */ "./src/images/background.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/* CSS media must be bundled separately
if styles.css is excluded from bundling */

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-position: center top;
    background-attachment: fixed;
    background-repeat: no-repeat;
}
@supports (-webkit-hyphens:none) {
    body {
        background-image: none;
    }
    body::before {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
        background-position: center top;
        background-repeat: no-repeat;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/media.css"],"names":[],"mappings":";AACA;yCACyC;;AAEzC;IACI,qBAAqB;IACrB,4DAA4D;IAC5D,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,4DAAuD;IACvD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,yDAAgD;IAChD,+BAA+B;IAC/B,4BAA4B;IAC5B,4BAA4B;AAChC;AACA;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,yDAAgD;QAChD,+BAA+B;QAC/B,4BAA4B;IAChC;AACJ","sourcesContent":["\r\n/* CSS media must be bundled separately\r\nif styles.css is excluded from bundling */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url('../fonts/Roboto-ExtraLight.woff2') format('woff2');\r\n    font-weight: 200;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    src: url('../fonts/Roboto-Light.woff2') format('woff2');\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-display: swap;\r\n}\r\nbody {\r\n    background-image: url(../images/background.webp);\r\n    background-position: center top;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n}\r\n@supports (-webkit-hyphens:none) {\r\n    body {\r\n        background-image: none;\r\n    }\r\n    body::before {\r\n        background-image: url(../images/background.webp);\r\n        background-position: center top;\r\n        background-repeat: no-repeat;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Roboto-ExtraLight.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/Roboto-ExtraLight.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Roboto-ExtraLight.woff2";

/***/ }),

/***/ "./src/fonts/Roboto-Light.woff2":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Light.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Roboto-Light.woff2";

/***/ }),

/***/ "./src/images/background.webp":
/*!************************************!*\
  !*** ./src/images/background.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5acb6ad8cc73c8b36358.webp";

/***/ }),

/***/ "./src/images/icons lazy recursive ^\\.\\/.*\\.svg$":
/*!***************************************************************!*\
  !*** ./src/images/icons/ lazy ^\.\/.*\.svg$ namespace object ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": [
		"./src/images/icons/clear-day.svg",
		"src_images_icons_clear-day_svg"
	],
	"./clear-night.svg": [
		"./src/images/icons/clear-night.svg",
		"src_images_icons_clear-night_svg"
	],
	"./cloudy.svg": [
		"./src/images/icons/cloudy.svg",
		"src_images_icons_cloudy_svg"
	],
	"./fog.svg": [
		"./src/images/icons/fog.svg",
		"src_images_icons_fog_svg"
	],
	"./hail.svg": [
		"./src/images/icons/hail.svg",
		"src_images_icons_hail_svg"
	],
	"./partly-cloudy-day.svg": [
		"./src/images/icons/partly-cloudy-day.svg",
		"src_images_icons_partly-cloudy-day_svg"
	],
	"./partly-cloudy-night.svg": [
		"./src/images/icons/partly-cloudy-night.svg",
		"src_images_icons_partly-cloudy-night_svg"
	],
	"./rain-snow-showers-day.svg": [
		"./src/images/icons/rain-snow-showers-day.svg",
		"src_images_icons_rain-snow-showers-day_svg"
	],
	"./rain-snow-showers-night.svg": [
		"./src/images/icons/rain-snow-showers-night.svg",
		"src_images_icons_rain-snow-showers-night_svg"
	],
	"./rain-snow.svg": [
		"./src/images/icons/rain-snow.svg",
		"src_images_icons_rain-snow_svg"
	],
	"./rain.svg": [
		"./src/images/icons/rain.svg",
		"src_images_icons_rain_svg"
	],
	"./showers-day.svg": [
		"./src/images/icons/showers-day.svg",
		"src_images_icons_showers-day_svg"
	],
	"./showers-night.svg": [
		"./src/images/icons/showers-night.svg",
		"src_images_icons_showers-night_svg"
	],
	"./sleet.svg": [
		"./src/images/icons/sleet.svg",
		"src_images_icons_sleet_svg"
	],
	"./snow-showers-day.svg": [
		"./src/images/icons/snow-showers-day.svg",
		"src_images_icons_snow-showers-day_svg"
	],
	"./snow-showers-night.svg": [
		"./src/images/icons/snow-showers-night.svg",
		"src_images_icons_snow-showers-night_svg"
	],
	"./snow.svg": [
		"./src/images/icons/snow.svg",
		"src_images_icons_snow_svg"
	],
	"./thunder-rain.svg": [
		"./src/images/icons/thunder-rain.svg",
		"src_images_icons_thunder-rain_svg"
	],
	"./thunder-showers-day.svg": [
		"./src/images/icons/thunder-showers-day.svg",
		"src_images_icons_thunder-showers-day_svg"
	],
	"./thunder-showers-night.svg": [
		"./src/images/icons/thunder-showers-night.svg",
		"src_images_icons_thunder-showers-night_svg"
	],
	"./thunder.svg": [
		"./src/images/icons/thunder.svg",
		"src_images_icons_thunder_svg"
	],
	"./wind.svg": [
		"./src/images/icons/wind.svg",
		"src_images_icons_wind_svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/images/icons lazy recursive ^\\.\\/.*\\.svg$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_media_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/media.css */ "./src/styles/media.css");
/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weather.js */ "./src/modules/weather.js");
/* harmony import */ var _modules_current_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/current.js */ "./src/modules/current.js");
/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ "./src/modules/render.js");
//import "./styles/styles.css"; // do NOT include
 // always include





const pageTitle = document.querySelector('#page_title');
const logoImage = document.querySelector('.logo img');

const tempUnitBtn = document.querySelector('#temp_unit');
tempUnitBtn.setAttribute('data-id', _modules_weather_js__WEBPACK_IMPORTED_MODULE_1__.tempScale.units);

const displayCurrent = document.querySelector('.main .now');
const displayHours = document.querySelector('.main .hours');
const displayDays = document.querySelector('.main .week');

const modalBox = document.querySelector('.modal');
const dataForm = document.querySelector('#locate');
const formInput = document.querySelector('#search');
const dataList = document.querySelector('#result');


// INITIAL LOAD

const render = await (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

async function initialize() {

    document.body.classList.add('loading');
    pageTitle.innerText = _modules_weather_js__WEBPACK_IMPORTED_MODULE_1__.localName.name;

    try {
        await render.currentWeather(displayCurrent);
        await render.forecastHours(displayHours);
        await render.forecastDays(displayDays);

        //logoImage.src = dynamicLogo.src;
        //logoImage.className = 'dynamic';
        // (!) logo img needs 'hidden' attr
        //logoImage.hidden = false;

        document.body.classList.remove('loading');
    }
    catch (error) {
        console.error('No content to render,', error);
        pageTitle.innerText = 'No location or data';
        changeTriggered = false; // reset
    }
} initialize();


// CHANGE LOCATION

function setLocation(e) {

    const inputValue = e.target.value;
    let debounceTimeout;

    if (inputValue.length < 3) {
        dataList.replaceChildren();
        return; // stop
    }
    switch (e.type) { // if change: ignore input

        case 'change':
            changeTriggered = true; break;
            
        case 'input':
            setTimeout(() => {
                changeTriggered ? null : debounceInput();
                changeTriggered = false;
            }, 0);
    }
    const debounceInput = () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            // autocomplete
            render.locationList(inputValue, dataList);
        }, 300);
    }
}
// CHANGE UNITS

async function changeUnits(button) {

    const first = button.firstElementChild;
    const last = button.lastElementChild;

    const toggle = (show, hide) => {
        show.hidden = false;
        hide.hidden = true;
    }
    if (button.dataset.id === 'metric') {

        _modules_weather_js__WEBPACK_IMPORTED_MODULE_1__.tempScale.units = 'us';
        button.dataset.id = 'us';
        toggle (last, first);
    }
    else {
        _modules_weather_js__WEBPACK_IMPORTED_MODULE_1__.tempScale.units = 'metric';
        button.dataset.id = 'metric';
        toggle (first, last);
    }
    await render.updateWeater(null, true);
    await initialize();
}

// EVENT HANDLERS

document.addEventListener('click', (e) => {

    const button = e.target.closest('button');
    if (!button) return; // not a button

    switch (button.id) {

        case 'temp_unit':
            changeUnits(button); break;

        case 'location':
            modalBox.showModal(); break;

        case 'close_btn':
            modalBox.close(); break;
    }
});
// FORM HANDLERS

let changeTriggered = false;

formInput.addEventListener('change', setLocation);
formInput.addEventListener('input', setLocation);

dataForm.addEventListener('submit', async (e) => {

    e.preventDefault();
    
    await render.updateWeater(formInput.value);
    await initialize();
    modalBox.close();
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/current.js":
/*!********************************!*\
  !*** ./src/modules/current.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dynamicLogo: () => (/* binding */ dynamicLogo)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/modules/weather.js");

const dynamicLogo = {src: ''};

class Current {

    constructor(
        {conditions, datetimeEpoch, feelslike, icon, sunrise, sunset, temp}, description
    ) {
        this.conditions = conditions;
        this.datetimeEpoch = datetimeEpoch;
        this.description = description;
        this.feelslike = feelslike;
        this.icon = icon;
        this.sunrise = sunrise.slice(0, 5);
        this.sunset = sunset.slice(0, 5);
        this.temp = temp;
    }
    format() {
        // API time is historical, use system time instead
        const date = new Date(/*(this.datetimeEpoch) * 1000*/);
        const options = { weekday: 'short', day: 'numeric', month: 'short',
                          hour: '2-digit', minute: '2-digit', hour12: false };
        return date.toLocaleString('en-US', options);
    }
    async render() {

        const image = await __webpack_require__("./src/images/icons lazy recursive ^\\.\\/.*\\.svg$")(`./${this.icon}.svg`);
        const units = _weather_js__WEBPACK_IMPORTED_MODULE_0__.tempScale.units === 'metric' ? '°C' : '°F';
        dynamicLogo.src = image.default; // export

        return `
            <div class="box current">
                <div class="date">${this.format()}</div>
                <div class="display">
                    <img src="${image.default}" width="104" height="104" alt="">
                    <span class="temp">${this.temp} ${units}</span>
                </div>
                <div class="details">
                    <div class="wrapper">
                        <span class="feels">
                            Feels like: <span>${this.feelslike} ${units}</span>
                        </span>
                        <span class="sep">/</span>
                        <span class="info short">${this.conditions}</span>
                    </div>
                    <div class="info long">${this.description}</div>
                    <div class="sun">
                        <span>Sunrise ${this.sunrise}</span>
                        <span class="sep">/</span>
                        <span>Sunset ${this.sunset}</span>
                    </div>
                </div>
            </div>
        `;
    }
}
function createCurrent(data, text) {

    const current = new Current(data, text);
    return current.render();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCurrent);

/***/ }),

/***/ "./src/modules/days.js":
/*!*****************************!*\
  !*** ./src/modules/days.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/modules/weather.js");


class Day {

    constructor(
        {conditions, datetimeEpoch, icon, tempmax, tempmin, winddir, windspeed}
    ) {
        this.conditions = conditions;
        this.datetimeEpoch = datetimeEpoch;
        this.icon = icon;
        this.tempmax = tempmax;
        this.tempmin = tempmin;
        this.winddir = winddir;
        this.windspeed = windspeed;
    }
    format() {
        const date = new Date(this.datetimeEpoch * 1000);
        const date1 = date.toLocaleString('en-US', {weekday: 'short'});
        const date2 = date.toLocaleString('en-US', {day: 'numeric', month: 'short'});
        return {date1, date2}
    }
    round (value) {
        if (value % 1 < 0.5) {
            return Math.floor(value);
        }
        else return Math.ceil(value);
    }
    async render() {

        const image = await __webpack_require__("./src/images/icons lazy recursive ^\\.\\/.*\\.svg$")(`./${this.icon}.svg`);
        const pointer = await __webpack_require__.e(/*! import() */ "src_images_arrow_svg").then(__webpack_require__.t.bind(__webpack_require__, /*! ../images/arrow.svg */ "./src/images/arrow.svg", 17));
        const units = _weather_js__WEBPACK_IMPORTED_MODULE_0__.tempScale.units === 'metric' ? 'k/h' : 'm/h';

        return `
            <div class="box day">
                <div class="date">
                    <div class="name">${this.format().date1}</div>
                    <div class="time">${this.format().date2}</div>
                </div>
                <img class="image" src="${image.default}" width="128" height="128" alt="">
                <div class="info">${this.conditions}</div>
                <div class="temp">
                    <span class="min">${this.round(this.tempmin)} °</span>
                    <span class="sep">/&nbsp</span>
                    <span class="max">${this.round(this.tempmax)} °</span>
                </div>
                <div class="wind">
                    <img src="${pointer.default}" width="16" height="16" style="--rotate: ${this.winddir}deg" alt="">
                    <span class="speed">${this.windspeed} &nbsp;${units}</span>
                </div>
            </div>
        `;
    }
}
function createDay(data) {

    const day = new Day(data);
    return day.render();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDay);

/***/ }),

/***/ "./src/modules/hours.js":
/*!******************************!*\
  !*** ./src/modules/hours.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/modules/weather.js");


class Hour {

    constructor (
        {datetime, icon, temp, winddir, windspeed}
    ) {
        this.datetime = datetime.slice(0, 2);
        this.icon = icon;
        this.temp = temp;
        this.winddir = winddir;
        this.windspeed = windspeed;
    }
    format () {
        const hour = parseInt(this.datetime, 10);
        const period = hour >= 12 ? 'PM' : 'AM';
        return `${hour} <small>${period}</small>`;
    }
    split (value) {

        const [integer, decimal] = value.toString().split('.');
        if (!decimal) return integer;
        else return integer + `<small>${decimal}</small>`;
    }
    async render() {

        const image = await __webpack_require__("./src/images/icons lazy recursive ^\\.\\/.*\\.svg$")(`./${this.icon}.svg`);
        const pointer = await __webpack_require__.e(/*! import() */ "src_images_arrow_svg").then(__webpack_require__.t.bind(__webpack_require__, /*! ../images/arrow.svg */ "./src/images/arrow.svg", 17));
        const units = _weather_js__WEBPACK_IMPORTED_MODULE_0__.tempScale.units === 'metric' ? 'k/h' : 'm/h';

        return `
            <div class="box hour">
                <div class="time">${this.format()}</div>
                <img class="image" src="${image.default}" width="128" height="128" alt="">
                <div class="temp">${this.split(this.temp)} °</div>
                <div class="wind">
                    <img src="${pointer.default}" width="16" height="16" style="--rotate: ${this.winddir}deg" alt="">
                    <span class="speed">${this.windspeed} &nbsp;${units}</span>
                </div>
            </div>
        `;
    }
}
function createHour(data) {

    const hour = new Hour(data);
    return hour.render();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHour);

/***/ }),

/***/ "./src/modules/location.js":
/*!*********************************!*\
  !*** ./src/modules/location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// FIND LOCATION

async function findLocation() {
    try {
        const request = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=1892a0be4984422185242d37d697cf21');
        const locationData = await request.json();

        //localStorage.setItem('locationData', JSON.stringify(locationData)); // cache it
        return locationData;
    }
    catch (error) {
        console.error('Error fetching geolocation data,', error);
    }
}
// GET LOCATION

async function getLocation() {

    const storedLocation = localStorage.getItem('locationData');
    let location = {}; // cached or new

    if (storedLocation) {
        location = JSON.parse(storedLocation);
    }
    else {
        location = await findLocation();
    }
    return location;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/modules/weather.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.js */ "./src/modules/search.js");
/* harmony import */ var _current_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current.js */ "./src/modules/current.js");
/* harmony import */ var _hours_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hours.js */ "./src/modules/hours.js");
/* harmony import */ var _days_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./days.js */ "./src/modules/days.js");






// CREATE CONTENT

async function createContent() {

    let weather = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    let currentLocation;

    return { // render

        updateWeater: async (New, current) => {

            if (current) {
                weather = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentLocation); // change units
            }
            else {
                weather = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"])(New); // change location
                currentLocation = New;
            }
        },
        // CURRENT WEATHER

        currentWeather: async (target) => {

            const current = await weather.currentConditions;
            const text = await weather.description;

            target.innerHTML = await (0,_current_js__WEBPACK_IMPORTED_MODULE_2__["default"])(current, text);
        },

        // TODAYS WEATHER

        forecastHours: async (target) => {

            const hours = await weather.days[0].hours;
            const concatHours = [];

            for (let i of [0, 3, 6, 9, 12, 15, 18, 21]) {
                concatHours.push(await (0,_hours_js__WEBPACK_IMPORTED_MODULE_3__["default"])(hours[i]));
            }
            target.innerHTML = concatHours.join('');
        },

        // WEATHER FORECAST

        forecastDays: async (target) => {

            const days = await weather.days;
            const concatDays = [];

            for (let i = 0; i < 7; i++) {
                concatDays.push(await (0,_days_js__WEBPACK_IMPORTED_MODULE_4__["default"])(days[i]));
            }
            target.innerHTML = concatDays.join('');
        },

        // SEARCH LOCATION

        locationList: async (input, target) => {

            const locationList = await (0,_search_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input);

            target.replaceChildren();

            if (locationList && locationList.length) {

                for (const entry of locationList) {

                    const result = document.createElement('option');
                    result.value = entry.properties.formatted.replace(/\s*\(.*?\)/g,'');
                    // remove words in parentheses
                    target.append(result);
                }
            } // skip undefined or empty
        },
    } // content factory
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContent);

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// FIND LOCATION

let pendingRequest = false;

async function findLocation(input) {

    if (pendingRequest) return;
    pendingRequest = true;

    const options = `text=${encodeURIComponent(input)}&type=city&limit=5`;
    const authorize = '4da60ad59b6b4b2b8510107378b5641f';
    try {
        const request = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?${options}&apiKey=${authorize}`);
        const locationData = await request.json();

        storedLocation[input] = locationData.features; // cache it
        return locationData.features;
    }
    catch (error) {
        console.error('Error fetching location suggestions,', error);
    }
    finally {
        pendingRequest = false;
    }
}
// SEARCH LOCATION

const storedLocation = {};

async function searchLocation(input) {

    let locationList = {}; // cached or new

    if (storedLocation[input]) {
        locationList = storedLocation[input];
    }
    else {
        locationList = await findLocation(input);
    }
    return locationList;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchLocation);

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   localName: () => (/* binding */ localName),
/* harmony export */   tempScale: () => (/* binding */ tempScale)
/* harmony export */ });
/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.js */ "./src/modules/location.js");

const tempScale = {units: 'metric'};
const localName = {name: ''};

// FIND WEATHER

async function findWeather(location, units) {

    const options = `&unitGroup=${units}&iconSet=icons2`;
    const authorize = '9RU8UASBJ27STY53UE64S6VR8';
    try {
        const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${authorize}${options}`);

        if (!request.ok && request.status === 400) {
            console.error('Bad Request: location not found');
            return; // stop
        }
        const weatherData = await request.json();
        return weatherData;
    }
    catch (error) {
        console.error('Error fetching weather data,', error);
    }
}
// GET WEATHER

async function getWeather(New) {

    let location = New ? New : await (0,_location_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (!location) return; // stop

    if (New) {
        localName.name = New;
        return await findWeather(New, tempScale.units);
    }
    else {
        if (location.country_code2 === 'US') {
            tempScale.units = 'us';
        }
        const coordinates = location.latitude +','+ location.longitude;
        localName.name = location.city +', '+ location.country_name;
        return await findWeather(coordinates, tempScale.units);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

/***/ }),

/***/ "./src/styles/media.css":
/*!******************************!*\
  !*** ./src/styles/media.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./media.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/media.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map