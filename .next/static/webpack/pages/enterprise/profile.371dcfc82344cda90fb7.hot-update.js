webpackHotUpdate_N_E("pages/enterprise/profile",{

/***/ "./pages/enterprise/profile.js":
/*!*************************************!*\
  !*** ./pages/enterprise/profile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! variables/variable.js */ "./variables/variable.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(variables_variable_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! layouts/Enterprise.js */ "./layouts/Enterprise.js");
/* harmony import */ var components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Headers/EnterpriseHeader.js */ "./components/Headers/EnterpriseHeader.js");







var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\enterprise\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // reactstrap components

 // layout for this page

 // core components



var Profile = function Profile(_ref) {
  _s();

  var sam = _ref.sam;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      modalDefaultOpen = _React$useState2[0],
      setModalDefaultOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(undefined),
      _React$useState4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      orgData = _React$useState4[0],
      setOrgData = _React$useState4[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {
      var org, getResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              org = JSON.parse(localStorage.getItem("vh-org"));
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:3001/data/enterpriseData/".concat(org.NameofOrg));

            case 4:
              getResponse = _context.sent;
              console.log(getResponse.data);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var updateOrg = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(event) {
      var org, postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              org = JSON.parse(localStorage.getItem("vh-org"));
              event.preventDefault(); //console.log(event);

              postData = _objectSpread(_objectSpread({}, event.target[0].value && {
                NameofOrg: event.target[0].value
              }), event.target[3].value && {
                Email: event.target[3].value
              });
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.patch("http://localhost:3001/data/enterprise/".concat(org.NameofOrg), postData);

            case 5:
              postResponse = _context2.sent;
              console.log(postResponse.data);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updateOrg(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        form: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              defaultValue: variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default.a.enterpriseProfileData.organizationName,
              type: "text",
              name: "name",
              id: "nameOfOrganization",
              placeholder: "Name Of Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              defaultValue: variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default.a.enterpriseProfileData.addressOfOrganization,
              type: "text",
              name: "type",
              id: "typeOfOrganization",
              placeholder: "Type Of Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
          "for": "exampleAddress",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          defaultValue: variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default.a.enterpriseProfileData.typeOfOrganization,
          type: "text",
          name: "address",
          id: "addressOfOrganization",
          placeholder: "Address Of Organization"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "warning",
        type: "button",
        children: "Update Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Profile, "rwsFCStIgeUAFSlKTeZr/REPDPQ=");

_c = Profile;
Profile.layout = layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_10__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJzYW0iLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kYWxEZWZhdWx0T3BlbiIsInNldE1vZGFsRGVmYXVsdE9wZW4iLCJ1bmRlZmluZWQiLCJvcmdEYXRhIiwic2V0T3JnRGF0YSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvcmciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJnZXQiLCJOYW1lb2ZPcmciLCJnZXRSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXBkYXRlT3JnIiwicG9zdERhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkVtYWlsIiwicGF0Y2giLCJwb3N0UmVzcG9uc2UiLCJEYXRhIiwiZW50ZXJwcmlzZVByb2ZpbGVEYXRhIiwib3JnYW5pemF0aW9uTmFtZSIsImFkZHJlc3NPZk9yZ2FuaXphdGlvbiIsInR5cGVPZk9yZ2FuaXphdGlvbiIsImxheW91dCIsIkVudGVycHJpc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQXlCQTs7Q0FFQTs7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFXO0FBQUE7O0FBQUEsTUFBVEMsR0FBUyxRQUFUQSxHQUFTOztBQUFBLHdCQUN1QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEdkI7QUFBQTtBQUFBLE1BQ2xCQyxnQkFEa0I7QUFBQSxNQUNBQyxtQkFEQTs7QUFBQSx5QkFHS0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlRyxTQUFmLENBSEw7QUFBQTtBQUFBLE1BR2xCQyxPQUhrQjtBQUFBLE1BR1RDLFVBSFM7O0FBS3pCLE1BQU1DLFlBQVk7QUFB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QTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFlSSxxRUFBQyxvREFBRDtBQUFBLGdDQUNFLHFFQUFDLGdEQUFEO0FBQU8saUJBQUksZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFPLHNCQUFZLEVBQUVILDREQUFJLENBQUNDLHFCQUFMLENBQTJCRyxrQkFBaEQ7QUFBb0UsY0FBSSxFQUFDLE1BQXpFO0FBQWdGLGNBQUksRUFBQyxTQUFyRjtBQUErRixZQUFFLEVBQUMsdUJBQWxHO0FBQTBILHFCQUFXLEVBQUM7QUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSixlQW1CSSxxRUFBQyxpREFBRDtBQUNFLGFBQUssRUFBQyxTQURSO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQWlDRCxDQTFERDs7R0FBTW5DLE87O0tBQUFBLE87QUE0RE5BLE9BQU8sQ0FBQ29DLE1BQVIsR0FBaUJDLDhEQUFqQjtBQUVlckMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW50ZXJwcmlzZS9wcm9maWxlLjM3MWRjZmM4MjM0NGNkYTkwZmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbCwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgRm9ybVRleHQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwidmFyaWFibGVzL3ZhcmlhYmxlLmpzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xyXG5pbXBvcnQge1xyXG4gIEJhZGdlLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkRm9vdGVyLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgTWVkaWEsXHJcbiAgUGFnaW5hdGlvbixcclxuICBQYWdpbmF0aW9uSXRlbSxcclxuICBQYWdpbmF0aW9uTGluayxcclxuICBQcm9ncmVzcyxcclxuICBUYWJsZSxcclxuICBJbnB1dCxcclxuICBJbnB1dEdyb3VwQWRkb24sXHJcbiAgSW5wdXRHcm91cFRleHQsXHJcbiAgSW5wdXRHcm91cCxcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIE1vZGFsLFxyXG4gIFVuY29udHJvbGxlZFRvb2x0aXAsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuLy8gbGF5b3V0IGZvciB0aGlzIHBhZ2VcclxuaW1wb3J0IEVudGVycHJpc2UgZnJvbSBcImxheW91dHMvRW50ZXJwcmlzZS5qc1wiO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXJzL0VudGVycHJpc2VIZWFkZXIuanNcIjtcclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKHtzYW19KSA9PiB7XHJcbiAgY29uc3QgW21vZGFsRGVmYXVsdE9wZW4sIHNldE1vZGFsRGVmYXVsdE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbb3JnRGF0YSwgc2V0T3JnRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBvcmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmgtb3JnXCIpKTtcclxuICAgIGNvbnN0IGdldFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZGF0YS9lbnRlcnByaXNlRGF0YS8ke29yZy5OYW1lb2ZPcmd9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhnZXRSZXNwb25zZS5kYXRhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZU9yZyA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgdmFyIG9yZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2aC1vcmdcIikpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgIC4uLihldmVudC50YXJnZXRbMF0udmFsdWUpICYmIHtOYW1lb2ZPcmc6IGV2ZW50LnRhcmdldFswXS52YWx1ZX0sXHJcbiAgICAgIC8vLi4uKGV2ZW50LnRhcmdldFsxXS52YWx1ZSkgJiYge3Bob25lTnVtYmVyOiBldmVudC50YXJnZXRbMV0udmFsdWV9LFxyXG4gICAgICAuLi4oZXZlbnQudGFyZ2V0WzNdLnZhbHVlKSAmJiB7RW1haWw6IGV2ZW50LnRhcmdldFszXS52YWx1ZX0sXHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3N0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvZW50ZXJwcmlzZS8ke29yZy5OYW1lb2ZPcmd9YCwgcG9zdERhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocG9zdFJlc3BvbnNlLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgey8qIFBhZ2UgY29udGVudCAqL31cclxuXHJcbiAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPFJvdyBmb3JtPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs2fT5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsID5OYW1lPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBkZWZhdWx0VmFsdWU9e0RhdGEuZW50ZXJwcmlzZVByb2ZpbGVEYXRhLm9yZ2FuaXphdGlvbk5hbWV9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVPZk9yZ2FuaXphdGlvblwiIHBsYWNlaG9sZGVyPVwiTmFtZSBPZiBPcmdhbml6YXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA+VHlwZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgZGVmYXVsdFZhbHVlPXtEYXRhLmVudGVycHJpc2VQcm9maWxlRGF0YS5hZGRyZXNzT2ZPcmdhbml6YXRpb259IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR5cGVcIiBpZD1cInR5cGVPZk9yZ2FuaXphdGlvblwiIHBsYWNlaG9sZGVyPVwiVHlwZSBPZiBPcmdhbml6YXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPExhYmVsIGZvcj1cImV4YW1wbGVBZGRyZXNzXCI+QWRkcmVzczwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCBkZWZhdWx0VmFsdWU9e0RhdGEuZW50ZXJwcmlzZVByb2ZpbGVEYXRhLnR5cGVPZk9yZ2FuaXphdGlvbn0gdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc1wiIGlkPVwiYWRkcmVzc09mT3JnYW5pemF0aW9uXCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIE9mIE9yZ2FuaXphdGlvblwiLz5cclxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVXBkYXRlIERldGFpbHNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblByb2ZpbGUubGF5b3V0ID0gRW50ZXJwcmlzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=