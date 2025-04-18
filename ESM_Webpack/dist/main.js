/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/TYmp2rf_440.jpg":
/*!*********************************!*\
  !*** ./src/img/TYmp2rf_440.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1937ffc0658e2133ebc.jpg";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f685c0dd00f17b07d3d.jpg";

/***/ }),

/***/ "./src/img/banner.jpg":
/*!****************************!*\
  !*** ./src/img/banner.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eef6ffb732bffba070a1.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c32fd32a85313497d4b.png";

/***/ }),

/***/ "./src/img/mU4vFZw3VP_440.jpg":
/*!************************************!*\
  !*** ./src/img/mU4vFZw3VP_440.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6e4121cca2fdcfc34f6.jpg";

/***/ }),

/***/ "./src/img/ngVcKlCQBY_440.jpg":
/*!************************************!*\
  !*** ./src/img/ngVcKlCQBY_440.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68ac4e646f41dc21f39b.jpg";

/***/ }),

/***/ "./src/img/wTJaQur2HY_440.jpg":
/*!************************************!*\
  !*** ./src/img/wTJaQur2HY_440.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "917f28108302c866a71d.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/_navigation.js */ \"./src/pages/_navigation.js\");\n/* harmony import */ var _pages_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/homepage.js */ \"./src/pages/homepage.js\");\n/* harmony import */ var _pages_infopage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/infopage.js */ \"./src/pages/infopage.js\");\n/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/background.jpg */ \"./src/img/background.jpg\");\n\r\n//import \"./styles.css\"; //excluded to avoid FOUC\r\n\r\n\r\n\r\n\r\nconst navBar = document.querySelector('#navBar');\r\nconst pageBox = document.querySelector('#content');\r\n\r\n// HTML INJECTION\r\n\r\nfunction injectContent(target, data) {\r\n    target.insertAdjacentHTML('afterbegin', data);\r\n}\r\n\r\ndocument.body.style.backgroundImage = `url(${_img_background_jpg__WEBPACK_IMPORTED_MODULE_3__})`;\r\n\r\n// INITIAL LOAD\r\n\r\ninjectContent(navBar, (0,_pages_navigation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\nconst tabs = document.querySelectorAll('.tab');\r\n\r\nlet currentPage = (0,_pages_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\ninjectContent(pageBox, currentPage);\r\n\r\n// NAVIGATION\r\n\r\nconst tabMapping = {\r\n    tab_1: (0,_pages_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\r\n    tab_2: (0,_pages_infopage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n};\r\ntabs.forEach(tab => {\r\n    tab.addEventListener('click', () => {\r\n        currentPage = tabMapping[tab.id];\r\n        pageBox.replaceChildren();\r\n        injectContent(pageBox, currentPage);\r\n    });\r\n});\r\n// SCROLLER\r\n\r\npageBox.addEventListener('click', (e) => {\r\n    const target = e.target;\r\n    if (target.className === 'hero') {\r\n        target.classList.add('fade');\r\n        setTimeout(() => {\r\n            window.scrollTo({\r\n                top: document.body.scrollHeight,\r\n                behavior: 'smooth'\r\n            });\r\n            target.classList.remove('fade');\r\n        }, 1000);\r\n    }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLHlCQUF5QjtBQUN5QjtBQUNEO0FBQ0E7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJDO0FBQzNDLDZDQUE2QyxnREFBTyxDQUFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnRUFBWTtBQUNsQztBQUNBO0FBQ0Esa0JBQWtCLDhEQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUFjO0FBQ3pCLFdBQVcsOERBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy9pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjsgLy9leGNsdWRlZCB0byBhdm9pZCBGT1VDXHJcbmltcG9ydCBjcmVhdGVOYXZCYXIgZnJvbSBcIi4vcGFnZXMvX25hdmlnYXRpb24uanNcIjtcclxuaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL2hvbWVwYWdlLmpzXCI7XHJcbmltcG9ydCBjcmVhdGVJbmZvUGFnZSBmcm9tIFwiLi9wYWdlcy9pbmZvcGFnZS5qc1wiO1xyXG5cclxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdkJhcicpO1xyXG5jb25zdCBwYWdlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbi8vIEhUTUwgSU5KRUNUSU9OXHJcblxyXG5mdW5jdGlvbiBpbmplY3RDb250ZW50KHRhcmdldCwgZGF0YSkge1xyXG4gICAgdGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGRhdGEpO1xyXG59XHJcbmltcG9ydCBiY2tncm5kIGZyb20gXCIuL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiY2tncm5kfSlgO1xyXG5cclxuLy8gSU5JVElBTCBMT0FEXHJcblxyXG5pbmplY3RDb250ZW50KG5hdkJhciwgY3JlYXRlTmF2QmFyKCkpO1xyXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xyXG5cclxubGV0IGN1cnJlbnRQYWdlID0gY3JlYXRlSG9tZVBhZ2UoKTtcclxuaW5qZWN0Q29udGVudChwYWdlQm94LCBjdXJyZW50UGFnZSk7XHJcblxyXG4vLyBOQVZJR0FUSU9OXHJcblxyXG5jb25zdCB0YWJNYXBwaW5nID0ge1xyXG4gICAgdGFiXzE6IGNyZWF0ZUhvbWVQYWdlKCksXHJcbiAgICB0YWJfMjogY3JlYXRlSW5mb1BhZ2UoKVxyXG59O1xyXG50YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IHRhYk1hcHBpbmdbdGFiLmlkXTtcclxuICAgICAgICBwYWdlQm94LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgICAgIGluamVjdENvbnRlbnQocGFnZUJveCwgY3VycmVudFBhZ2UpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLyBTQ1JPTExFUlxyXG5cclxucGFnZUJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnaGVybycpIHtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgdG9wOiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages/_navigation.js":
/*!**********************************!*\
  !*** ./src/pages/_navigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = [\r\n    {\r\n        id: 'tab_1',\r\n        text: 'Home page'\r\n    },\r\n    {\r\n        id: 'tab_2',\r\n        text: 'Some page'\r\n    },\r\n];\r\nfunction createNavBar() {\r\n    // expects an array of data objects\r\n    return tabs.map(({id, text}) => {\r\n        return `<button class=\"tab\" id=\"${id}\">${text}</button>`;\r\n    }).join('');\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQiwwQ0FBMEMsR0FBRyxJQUFJLEtBQUs7QUFDdEQsS0FBSztBQUNMO0FBQ0EsaUVBQWUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fbmF2aWdhdGlvbi5qcz8wOTMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhYnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICd0YWJfMScsXHJcbiAgICAgICAgdGV4dDogJ0hvbWUgcGFnZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICd0YWJfMicsXHJcbiAgICAgICAgdGV4dDogJ1NvbWUgcGFnZSdcclxuICAgIH0sXHJcbl07XHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcclxuICAgIC8vIGV4cGVjdHMgYW4gYXJyYXkgb2YgZGF0YSBvYmplY3RzXHJcbiAgICByZXR1cm4gdGFicy5tYXAoKHtpZCwgdGV4dH0pID0+IHtcclxuICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJ0YWJcIiBpZD1cIiR7aWR9XCI+JHt0ZXh0fTwvYnV0dG9uPmA7XHJcbiAgICB9KS5qb2luKCcnKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOYXZCYXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_navigation.js\n");

/***/ }),

/***/ "./src/pages/_products.js":
/*!********************************!*\
  !*** ./src/pages/_products.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_mU4vFZw3VP_440_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/mU4vFZw3VP_440.jpg */ \"./src/img/mU4vFZw3VP_440.jpg\");\n/* harmony import */ var _img_ngVcKlCQBY_440_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/ngVcKlCQBY_440.jpg */ \"./src/img/ngVcKlCQBY_440.jpg\");\n/* harmony import */ var _img_TYmp2rf_440_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/TYmp2rf_440.jpg */ \"./src/img/TYmp2rf_440.jpg\");\n/* harmony import */ var _img_wTJaQur2HY_440_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/wTJaQur2HY_440.jpg */ \"./src/img/wTJaQur2HY_440.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction htmlBlock(title, image, text, price) {\r\n    return `\r\n    <div class=\"block\">\r\n        <h2>${title}</h2>\r\n        <img src=${image} width=\"340\" height=\"340\" alt=\"\">\r\n        <p>${text}</p>\r\n        <span><strong>€ ${price}</strong> / kg</span>\r\n    </div>`\r\n}; // source code\r\n\r\nconst products = [\r\n    { \r\n        title: 'Green stuff',\r\n        image: _img_mU4vFZw3VP_440_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n        text: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',\r\n        price: '2.65'\r\n    },\r\n    {\r\n        title: 'Red stuff',\r\n        image: _img_ngVcKlCQBY_440_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n        text: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',\r\n        price: '2.49'\r\n    },\r\n    {\r\n        title: 'Brown stuff',\r\n        image: _img_TYmp2rf_440_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n        text: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',\r\n        price: '0.90'\r\n    },\r\n    {\r\n        title: 'Orange stuff',\r\n        image: _img_wTJaQur2HY_440_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n        text: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',\r\n        price: '2.45'\r\n    },\r\n];\r\nfunction createProducts() {\r\n    // expects an array of data objects\r\n    const content = products.map(({title, image, text, price}) => {\r\n        return htmlBlock(title, image, text, price);\r\n    }).join('');\r\n\r\n    return `<div class=\"grid\">${content}</div>`;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBQ0Y7QUFDRDtBQUNJO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCLG1CQUFtQixPQUFPO0FBQzFCLGFBQWEsS0FBSztBQUNsQiwwQkFBMEIsTUFBTTtBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQVU7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZSxvREFBUTtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlLGlEQUFVO0FBQ3pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGVBQWUsb0RBQVc7QUFDMUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19wcm9kdWN0cy5qcz83ODMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncmVlbkltYWdlIGZyb20gXCIuLi9pbWcvbVU0dkZadzNWUF80NDAuanBnXCI7XHJcbmltcG9ydCByZWRJbWFnZSBmcm9tIFwiLi4vaW1nL25nVmNLbENRQllfNDQwLmpwZ1wiO1xyXG5pbXBvcnQgYnJvd25JbWFnZSBmcm9tIFwiLi4vaW1nL1RZbXAycmZfNDQwLmpwZ1wiO1xyXG5pbXBvcnQgb3JhbmdlSW1hZ2UgZnJvbSBcIi4uL2ltZy93VEphUXVyMkhZXzQ0MC5qcGdcIjtcclxuXHJcbmZ1bmN0aW9uIGh0bWxCbG9jayh0aXRsZSwgaW1hZ2UsIHRleHQsIHByaWNlKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XHJcbiAgICAgICAgPGgyPiR7dGl0bGV9PC9oMj5cclxuICAgICAgICA8aW1nIHNyYz0ke2ltYWdlfSB3aWR0aD1cIjM0MFwiIGhlaWdodD1cIjM0MFwiIGFsdD1cIlwiPlxyXG4gICAgICAgIDxwPiR7dGV4dH08L3A+XHJcbiAgICAgICAgPHNwYW4+PHN0cm9uZz7igqwgJHtwcmljZX08L3N0cm9uZz4gLyBrZzwvc3Bhbj5cclxuICAgIDwvZGl2PmBcclxufTsgLy8gc291cmNlIGNvZGVcclxuXHJcbmNvbnN0IHByb2R1Y3RzID0gW1xyXG4gICAgeyBcclxuICAgICAgICB0aXRsZTogJ0dyZWVuIHN0dWZmJyxcclxuICAgICAgICBpbWFnZTogZ3JlZW5JbWFnZSxcclxuICAgICAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gaXMgYSBkdW1teSBvciBwbGFjZWhvbGRlciB0ZXh0IGNvbW1vbmx5IHVzZWQgaW4gZ3JhcGhpYyBkZXNpZ24sIHB1Ymxpc2hpbmcsIGFuZCB3ZWIgZGV2ZWxvcG1lbnQuJyxcclxuICAgICAgICBwcmljZTogJzIuNjUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUmVkIHN0dWZmJyxcclxuICAgICAgICBpbWFnZTogcmVkSW1hZ2UsXHJcbiAgICAgICAgdGV4dDogJ0xvcmVtIGlwc3VtIGlzIGEgZHVtbXkgb3IgcGxhY2Vob2xkZXIgdGV4dCBjb21tb25seSB1c2VkIGluIGdyYXBoaWMgZGVzaWduLCBwdWJsaXNoaW5nLCBhbmQgd2ViIGRldmVsb3BtZW50LicsXHJcbiAgICAgICAgcHJpY2U6ICcyLjQ5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Jyb3duIHN0dWZmJyxcclxuICAgICAgICBpbWFnZTogYnJvd25JbWFnZSxcclxuICAgICAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gaXMgYSBkdW1teSBvciBwbGFjZWhvbGRlciB0ZXh0IGNvbW1vbmx5IHVzZWQgaW4gZ3JhcGhpYyBkZXNpZ24sIHB1Ymxpc2hpbmcsIGFuZCB3ZWIgZGV2ZWxvcG1lbnQuJyxcclxuICAgICAgICBwcmljZTogJzAuOTAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnT3JhbmdlIHN0dWZmJyxcclxuICAgICAgICBpbWFnZTogb3JhbmdlSW1hZ2UsXHJcbiAgICAgICAgdGV4dDogJ0xvcmVtIGlwc3VtIGlzIGEgZHVtbXkgb3IgcGxhY2Vob2xkZXIgdGV4dCBjb21tb25seSB1c2VkIGluIGdyYXBoaWMgZGVzaWduLCBwdWJsaXNoaW5nLCBhbmQgd2ViIGRldmVsb3BtZW50LicsXHJcbiAgICAgICAgcHJpY2U6ICcyLjQ1J1xyXG4gICAgfSxcclxuXTtcclxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdHMoKSB7XHJcbiAgICAvLyBleHBlY3RzIGFuIGFycmF5IG9mIGRhdGEgb2JqZWN0c1xyXG4gICAgY29uc3QgY29udGVudCA9IHByb2R1Y3RzLm1hcCgoe3RpdGxlLCBpbWFnZSwgdGV4dCwgcHJpY2V9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxCbG9jayh0aXRsZSwgaW1hZ2UsIHRleHQsIHByaWNlKTtcclxuICAgIH0pLmpvaW4oJycpO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyaWRcIj4ke2NvbnRlbnR9PC9kaXY+YDtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9kdWN0czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_products.js\n");

/***/ }),

/***/ "./src/pages/_textinfo.js":
/*!********************************!*\
  !*** ./src/pages/_textinfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst info = [\r\n    {\r\n        text: 'Component-based website prototype with no static content, just a demo for ES6 Modules & Webpack bundling.'\r\n    },\r\n    {\r\n        text: `Check source code on <a href=\"https://github.com/H-Gospodinov/TheOdinProject_-_JavaScript/tree/main/ESM_Webpack\" target=\"_blank\" rel=\"noopener\">GitHub</a>`\r\n    },\r\n];\r\nfunction createInfo() {\r\n    // expects an array of data objects\r\n    const content = info.map(item => {\r\n        return `<p>${item.text}</p>`;\r\n    }).join('');\r\n\r\n    return `<div class=\"info\">${content}</div>`;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX3RleHRpbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVO0FBQy9CLEtBQUs7QUFDTDtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0EsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fdGV4dGluZm8uanM/YTE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbmZvID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRleHQ6ICdDb21wb25lbnQtYmFzZWQgd2Vic2l0ZSBwcm90b3R5cGUgd2l0aCBubyBzdGF0aWMgY29udGVudCwganVzdCBhIGRlbW8gZm9yIEVTNiBNb2R1bGVzICYgV2VicGFjayBidW5kbGluZy4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IGBDaGVjayBzb3VyY2UgY29kZSBvbiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0gtR29zcG9kaW5vdi9UaGVPZGluUHJvamVjdF8tX0phdmFTY3JpcHQvdHJlZS9tYWluL0VTTV9XZWJwYWNrXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5HaXRIdWI8L2E+YFxyXG4gICAgfSxcclxuXTtcclxuZnVuY3Rpb24gY3JlYXRlSW5mbygpIHtcclxuICAgIC8vIGV4cGVjdHMgYW4gYXJyYXkgb2YgZGF0YSBvYmplY3RzXHJcbiAgICBjb25zdCBjb250ZW50ID0gaW5mby5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGA8cD4ke2l0ZW0udGV4dH08L3A+YDtcclxuICAgIH0pLmpvaW4oJycpO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImluZm9cIj4ke2NvbnRlbnR9PC9kaXY+YDtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmZvOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_textinfo.js\n");

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/banner.jpg */ \"./src/img/banner.jpg\");\n/* harmony import */ var _textinfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_textinfo.js */ \"./src/pages/_textinfo.js\");\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_products.js */ \"./src/pages/_products.js\");\n\r\n\r\n\r\n\r\nconst pageTitle = `\r\n    <h1 class=\"page-title\">ESM & Webpack demo</h1>\r\n`;\r\nconst heroBanner = `\r\n    <div class=\"big-banner\">\r\n        <img class=\"hero\" src=\"${_img_banner_jpg__WEBPACK_IMPORTED_MODULE_0__}\" width=\"1600\" height=\"500\" alt=\"\">\r\n    </div>\r\n`;\r\nfunction createHomePage() {\r\n    return pageTitle + heroBanner + (0,_textinfo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() + (0,_products_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNDO0FBQ0k7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDRDQUFNLENBQUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdEQUFVLEtBQUssd0RBQWM7QUFDakU7QUFDQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWVwYWdlLmpzPzZjOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhbm5lciBmcm9tIFwiLi4vaW1nL2Jhbm5lci5qcGdcIjtcclxuaW1wb3J0IGNyZWF0ZUluZm8gZnJvbSBcIi4vX3RleHRpbmZvLmpzXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9kdWN0cyBmcm9tIFwiLi9fcHJvZHVjdHMuanNcIjtcclxuXHJcbmNvbnN0IHBhZ2VUaXRsZSA9IGBcclxuICAgIDxoMSBjbGFzcz1cInBhZ2UtdGl0bGVcIj5FU00gJiBXZWJwYWNrIGRlbW88L2gxPlxyXG5gO1xyXG5jb25zdCBoZXJvQmFubmVyID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJpZy1iYW5uZXJcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiaGVyb1wiIHNyYz1cIiR7YmFubmVyfVwiIHdpZHRoPVwiMTYwMFwiIGhlaWdodD1cIjUwMFwiIGFsdD1cIlwiPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xyXG4gICAgcmV0dXJuIHBhZ2VUaXRsZSArIGhlcm9CYW5uZXIgKyBjcmVhdGVJbmZvKCkgKyBjcmVhdGVQcm9kdWN0cygpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/homepage.js\n");

/***/ }),

/***/ "./src/pages/infopage.js":
/*!*******************************!*\
  !*** ./src/pages/infopage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _textinfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_textinfo.js */ \"./src/pages/_textinfo.js\");\n\r\n\r\n\r\nfunction createInfoPage() {\r\n    return `<img src=\"${_img_logo_png__WEBPACK_IMPORTED_MODULE_0__}\" width=\"150\" alt=\"\">` + (0,_textinfo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInfoPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5mb3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ0s7QUFDeEM7QUFDQTtBQUNBLHdCQUF3QiwwQ0FBSSxDQUFDLHlCQUF5Qix3REFBVTtBQUNoRTtBQUNBLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5mb3BhZ2UuanM/MTM5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaWNvbiBmcm9tIFwiLi4vaW1nL2xvZ28ucG5nXCI7XHJcbmltcG9ydCBjcmVhdGVJbmZvIGZyb20gXCIuL190ZXh0aW5mby5qc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5mb1BhZ2UoKSB7XHJcbiAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHtpY29ufVwiIHdpZHRoPVwiMTUwXCIgYWx0PVwiXCI+YCArIGNyZWF0ZUluZm8oKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmZvUGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/infopage.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;