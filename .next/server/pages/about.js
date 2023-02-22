"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"About Us\"\n            }, void 0, false, {\n                fileName: \"/Users/chriskeppler/Projects/next/pages/about.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Welcome to this amazing about page. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore officiis atque voluptas, quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam maxime laborum? Quae omnis eius impedit et?\"\n            }, void 0, false, {\n                fileName: \"/Users/chriskeppler/Projects/next/pages/about.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"I have \",\n                    props.repoCount,\n                    \" public repos on GitHub.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chriskeppler/Projects/next/pages/about.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n// this function name is required to get props\nasync function getStaticProps() {\n    const response = await fetch(\"https://api.github.com/users/ckkeppler\");\n    const data = await response.json();\n    console.log(data);\n    return {\n        // return specific props property\n        props: {\n            repoCount: data.public_repos\n        },\n        // fetches a new updated static copy of the page\n        revalidate: 10\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLFNBQVNBLE1BQU1DLEtBQUssRUFBRTtJQUNuQyxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBTUgsOERBQUNBOztvQkFBRTtvQkFBUUYsTUFBTUcsU0FBUztvQkFBQzs7Ozs7Ozs7O0FBR2pDLENBQUM7QUFDRCw4Q0FBOEM7QUFDdkMsZUFBZUMsaUJBQWlCO0lBQ3JDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtJQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixPQUFPO1FBQ0wsaUNBQWlDO1FBQ2pDUCxPQUFPO1lBQ0xHLFdBQVdJLEtBQUtJLFlBQVk7UUFDOUI7UUFDQSxnREFBZ0Q7UUFDaERDLFlBQVk7SUFDZDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvYWJvdXQuanM/MGM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+QWJvdXQgVXM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFdlbGNvbWUgdG8gdGhpcyBhbWF6aW5nIGFib3V0IHBhZ2UuIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldFxuICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQb3JybyBkb2xvcmUgb2ZmaWNpaXMgYXRxdWUgdm9sdXB0YXMsXG4gICAgICAgIHF1YXMsIHJlcGVsbGVuZHVzIGN1bSwgbWFnbmFtIGEgYWxpYXMgdW5kZSByZWljaWVuZGlzIHZvbHVwdGF0ZXMgYWxpcXVhbVxuICAgICAgICBtYXhpbWUgbGFib3J1bT8gUXVhZSBvbW5pcyBlaXVzIGltcGVkaXQgZXQ/XG4gICAgICA8L3A+XG4gICAgICA8cD5JIGhhdmUge3Byb3BzLnJlcG9Db3VudH0gcHVibGljIHJlcG9zIG9uIEdpdEh1Yi48L3A+XG4gICAgPC8+XG4gICk7XG59XG4vLyB0aGlzIGZ1bmN0aW9uIG5hbWUgaXMgcmVxdWlyZWQgdG8gZ2V0IHByb3BzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2Nra2VwcGxlclwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiB7XG4gICAgLy8gcmV0dXJuIHNwZWNpZmljIHByb3BzIHByb3BlcnR5XG4gICAgcHJvcHM6IHtcbiAgICAgIHJlcG9Db3VudDogZGF0YS5wdWJsaWNfcmVwb3MsXG4gICAgfSxcbiAgICAvLyBmZXRjaGVzIGEgbmV3IHVwZGF0ZWQgc3RhdGljIGNvcHkgb2YgdGhlIHBhZ2VcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwiaDIiLCJwIiwicmVwb0NvdW50IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHVibGljX3JlcG9zIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/about.js"));
module.exports = __webpack_exports__;

})();