(window["webpackJsonp_planet4_gpca_plugin_blocks"] = window["webpackJsonp_planet4_gpca_plugin_blocks"] || []).push([["style-index"],{

/***/ "./src/card/style.scss":
/*!*****************************!*\
  !*** ./src/card/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/category/style.scss":
/*!*********************************!*\
  !*** ./src/category/style.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/list/style.scss":
/*!*****************************!*\
  !*** ./src/list/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_planet4_gpca_plugin_blocks"] = window["webpackJsonp_planet4_gpca_plugin_blocks"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./src/card/edit.js":
/*!**************************!*\
  !*** ./src/card/edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_updater__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/updater */ "./src/common/updater.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/card/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_7__);








var commonRichTextOptions = {
  keepPlaceholderOnFocus: true
};

function Edit(_ref) {
  var _ref$attributes = _ref.attributes,
      url = _ref$attributes.url,
      imgSrc = _ref$attributes.imgSrc,
      mediaId = _ref$attributes.mediaId,
      mediaUrl = _ref$attributes.mediaUrl,
      imgUrl = _ref$attributes.imgUrl,
      imgAlt = _ref$attributes.imgAlt,
      title = _ref$attributes.title,
      desc = _ref$attributes.desc,
      eventDate = _ref$attributes.eventDate,
      eventLocation = _ref$attributes.eventLocation,
      setAttributes = _ref.setAttributes;
  var imageUrl = imgSrc === 'lib' ? mediaUrl : imgUrl;
  var updateAttribute = Object(_common_updater__WEBPACK_IMPORTED_MODULE_6__["default"])(setAttributes);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "card-settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    className: "card-settings-link".concat(!url ? ' warn' : ''),
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Link', 'cards'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
    type: "string",
    value: url,
    onChange: updateAttribute('url'),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('URL', 'cards')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image', 'cards'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
    type: "string",
    value: imgAlt,
    onChange: updateAttribute('imgAlt'),
    placeholder: 'alt'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], {
    initialTabName: imgSrc,
    onSelect: updateAttribute('imgSrc'),
    tabs: [{
      name: 'lib',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Media Library', 'cards'),
      el: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "tab-panel"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
        allowedTypes: ['image'],
        onSelect: function onSelect(media) {
          setAttributes({
            mediaId: media.id,
            mediaUrl: media.url
          });
        },
        value: mediaId,
        render: function render(_ref2) {
          var open = _ref2.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, mediaUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: "card-image"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
            src: mediaUrl,
            alt: imgAlt || title || url
          }))), !mediaUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: open
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Open Media Library', 'cards')), mediaUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: function onClick() {
              setAttributes({
                mediaId: 0,
                mediaUrl: ''
              });
            }
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Remove Image', 'cards')));
        }
      })))
    }, {
      name: 'url',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image URL', 'cards'),
      el: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
        type: "url",
        value: imgUrl,
        onChange: updateAttribute('imgUrl'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image URL', 'cards')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "card-image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: imgUrl,
        alt: title || url
      })))
    }]
  }, function (tab) {
    return tab.el;
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "aCard card-editor"
  }, imageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "card-image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    src: imageUrl,
    alt: title || url
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "card-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    className: "card-url",
    href: url
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    tagName: "strong",
    value: title,
    onChange: updateAttribute('title'),
    allowedFormats: ['core/italic'],
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Title', 'cards')
  }, commonRichTextOptions))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "card-event-date",
    tagName: "em",
    value: eventDate,
    onChange: updateAttribute('eventDate'),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Event date', 'cards')
  }, commonRichTextOptions)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "card-desc",
    tagName: "p",
    value: desc,
    onChange: updateAttribute('desc'),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Description…', 'cards')
  }, commonRichTextOptions)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "card-event-location",
    tagName: "span",
    value: eventLocation,
    onChange: updateAttribute('eventLocation'),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Event location', 'cards')
  }, commonRichTextOptions))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, _ref3) {
  var mediaId = _ref3.attributes.mediaId;
  return {
    media: mediaId ? select('core').getMedia(mediaId) : undefined
  };
})(Edit));

/***/ }),

/***/ "./src/card/editor.scss":
/*!******************************!*\
  !*** ./src/card/editor.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/card/save.js":
/*!**************************!*\
  !*** ./src/card/save.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(_ref) {
  var _ref$attributes = _ref.attributes,
      url = _ref$attributes.url,
      title = _ref$attributes.title,
      desc = _ref$attributes.desc,
      imgSrc = _ref$attributes.imgSrc,
      mediaUrl = _ref$attributes.mediaUrl,
      imgUrl = _ref$attributes.imgUrl,
      eventDate = _ref$attributes.eventDate,
      eventLocation = _ref$attributes.eventLocation;
  var imageUrl = imgSrc === 'lib' ? mediaUrl : imgUrl;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "aCard"
  }, imageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card-image",
    "data-imgsrc": imgSrc
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imageUrl,
    alt: title || url
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", {
    className: "card-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: url
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: title || url
  }))), eventDate && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("em", {
    className: "card-event-date"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: eventDate
  })), desc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "card-desc"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: desc
  })), eventLocation && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "card-event-location"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    value: eventLocation
  }))));
}

/***/ }),

/***/ "./src/category/edit.js":
/*!******************************!*\
  !*** ./src/category/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/category/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);




var ALLOWED_BLOCKS = ['cards-block/card'];
function Edit(_ref) {
  var title = _ref.attributes.title,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: "category-title",
    tagName: "h2",
    value: title,
    onChange: function onChange(newTitle) {
      setAttributes({
        title: newTitle
      });
    },
    allowedFormats: ['core/italic'],
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Category Title', 'category'),
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cards-list-category-contents"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    orientation: "vertical"
  })));
}

/***/ }),

/***/ "./src/category/editor.scss":
/*!**********************************!*\
  !*** ./src/category/editor.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/category/save.js":
/*!******************************!*\
  !*** ./src/category/save.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_sanitize_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/sanitize-title */ "./src/common/sanitize-title.js");



function save(_ref) {
  var title = _ref.attributes.title;
  var cleanTitle = Object(_common_sanitize_title__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
  var categoryUrl = "#".concat(cleanTitle);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "category-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    id: cleanTitle,
    href: categoryUrl,
    title: title
  }, title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cards-list-category-contents"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)));
}

/***/ }),

/***/ "./src/common/sanitize-title.js":
/*!**************************************!*\
  !*** ./src/common/sanitize-title.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sanitizeTitle; });
function sanitizeTitle(str) {
  var newStr = str.replace(/^\s+|\s+$/g, ''); // trim

  newStr = newStr.toLowerCase();
  var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
  var to = 'aaaaaeeeeeiiiiooooouuuunc------';

  for (var i = 0, l = from.length; i < l; i += 1) {
    newStr = newStr.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  newStr = newStr.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, '-') // collapse whitespace and replace by -
  .replace(/-+/g, '-'); // collapse dashes

  return newStr;
}

/***/ }),

/***/ "./src/common/updater.js":
/*!*******************************!*\
  !*** ./src/common/updater.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updater; });
function updater(setAttributes) {
  return function (attributeName) {
    return function (value) {
      var attributeUpdate = {};
      attributeUpdate[attributeName] = value;
      setAttributes(attributeUpdate);
    };
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/edit */ "./src/card/edit.js");
/* harmony import */ var _card_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/save */ "./src/card/save.js");
/* harmony import */ var _card_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/style.scss */ "./src/card/style.scss");
/* harmony import */ var _card_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _category_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/edit */ "./src/category/edit.js");
/* harmony import */ var _category_save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/save */ "./src/category/save.js");
/* harmony import */ var _category_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/style.scss */ "./src/category/style.scss");
/* harmony import */ var _category_style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_category_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _list_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/edit */ "./src/list/edit.js");
/* harmony import */ var _list_save__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/save */ "./src/list/save.js");
/* harmony import */ var _list_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/style.scss */ "./src/list/style.scss");
/* harmony import */ var _list_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_list_style_scss__WEBPACK_IMPORTED_MODULE_10__);











Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('cards-block/card', {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Card', 'cards'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cards with clickable title, description, image, and more', 'cards'),
  category: 'text',
  icon: 'admin-links',
  edit: _card_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _card_save__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: {
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    imgSrc: {
      type: 'string',
      default: 'lib'
    },
    imgUrl: {
      type: 'string'
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string'
    },
    imageUrl: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    imgAlt: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'alt'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: 'a'
    },
    desc: {
      type: 'string',
      source: 'html',
      selector: '.card-desc'
    },
    eventLocation: {
      type: 'string',
      source: 'html',
      selector: '.card-event-location'
    },
    eventDate: {
      type: 'string',
      source: 'html',
      selector: '.card-event-date'
    }
  },
  example: {
    attributes: {
      url: 'http://perdu.com',
      title: "Perdu sur l'Internet?",
      desc: 'Pas de panique, on va vous aider',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Perdu.svg',
      mediaId: 0,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Perdu.svg'
    }
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('cards-block/category', {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('List Category', 'category'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Collapsible category for searchable lists of cards', 'category'),
  supports: {
    align: true
  },
  icon: 'admin-links',
  edit: _category_edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _category_save__WEBPACK_IMPORTED_MODULE_6__["default"],
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.category-title'
    }
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('cards-block/list', {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('List of cards', 'cards'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('List of cards with categories, search and more', 'cards'),
  supports: {
    align: true
  },
  category: 'text',
  icon: 'admin-links',
  edit: _list_edit__WEBPACK_IMPORTED_MODULE_8__["default"],
  save: _list_save__WEBPACK_IMPORTED_MODULE_9__["default"],
  attributes: {
    showSearch: {
      type: 'string',
      source: 'attribute',
      selector: '.show-search',
      attribute: 'value',
      default: 'false'
    }
  }
});

/***/ }),

/***/ "./src/list/edit.js":
/*!**************************!*\
  !*** ./src/list/edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./src/list/search.js");
/* harmony import */ var _common_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/updater */ "./src/common/updater.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/list/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_6__);







var ALLOWED_BLOCKS = ['cards-block/category'];
function Edit(_ref) {
  var showSearch = _ref.attributes.showSearch,
      setAttributes = _ref.setAttributes;
  var updateAttribute = Object(_common_updater__WEBPACK_IMPORTED_MODULE_5__["default"])(setAttributes);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cards-list-settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Search', 'cards'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enable Search', 'cards'),
    checked: showSearch === 'true',
    onChange: function onChange(bool) {
      return updateAttribute('showSearch')(bool ? 'true' : 'false');
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: showSearch
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS
  }));
}

/***/ }),

/***/ "./src/list/editor.scss":
/*!******************************!*\
  !*** ./src/list/editor.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/list/save.js":
/*!**************************!*\
  !*** ./src/list/save.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/list/search.js");



function save(_ref) {
  var showSearch = _ref.attributes.showSearch;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: showSearch
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/list/search.js":
/*!****************************!*\
  !*** ./src/list/search.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function Search(_ref) {
  var show = _ref.show;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cards-list-search ".concat(show === 'true' ? 'is-visible' : 'is-hidden')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "show-search",
    type: "hidden",
    value: show
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cards-list-search-controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "icon",
    role: "img",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Search', 'list')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
  }))), ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ol", {
    className: "cards-list-search-results"
  }));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map