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
      setModalDefaultOpen = _React$useState2[1]; //const [orgData, setOrgData] = React.useState(undefined);


  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(undefined),
      _React$useState4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      orgData = _React$useState4[0],
      setOrgData = _React$useState4[1];

  var loadOrgData = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var org, orgDataGetResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              org = JSON.parse(localStorage.getItem("vh-org"));
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:3001/data/enterpriseData/".concat(org.NameofOrg));

            case 3:
              orgDataGetResponse = _context.sent;
              setOrgData(orgDataGetResponse.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadOrgData() {
      return _ref2.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(loadOrgData, []);

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

    return function updateOrg(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        form: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              defaultValue: variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default.a.enterpriseProfileData.organizationName,
              type: "text",
              name: "name",
              id: "nameOfOrganization",
              placeholder: "Name Of Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              defaultValue: variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default.a.enterpriseProfileData.addressOfOrganization,
              type: "text",
              name: "type",
              id: "typeOfOrganization",
              placeholder: "Type Of Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
          "for": "exampleAddress",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          defaultValue: variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default.a.enterpriseProfileData.typeOfOrganization,
          type: "text",
          name: "address",
          id: "addressOfOrganization",
          placeholder: "Address Of Organization"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "warning",
        type: "button",
        children: "Update Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Profile, "J0vYQUi4AeqMvKXQlyo0wT8y4+Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJzYW0iLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kYWxEZWZhdWx0T3BlbiIsInNldE1vZGFsRGVmYXVsdE9wZW4iLCJ1bmRlZmluZWQiLCJvcmdEYXRhIiwic2V0T3JnRGF0YSIsImxvYWRPcmdEYXRhIiwib3JnIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiZ2V0IiwiTmFtZW9mT3JnIiwib3JnRGF0YUdldFJlc3BvbnNlIiwiZGF0YSIsInVzZUVmZmVjdCIsInVwZGF0ZU9yZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0RGF0YSIsInRhcmdldCIsInZhbHVlIiwiRW1haWwiLCJwYXRjaCIsInBvc3RSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJEYXRhIiwiZW50ZXJwcmlzZVByb2ZpbGVEYXRhIiwib3JnYW5pemF0aW9uTmFtZSIsImFkZHJlc3NPZk9yZ2FuaXphdGlvbiIsInR5cGVPZk9yZ2FuaXphdGlvbiIsImxheW91dCIsIkVudGVycHJpc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQXlCQTs7Q0FFQTs7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFXO0FBQUE7O0FBQUEsTUFBVEMsR0FBUyxRQUFUQSxHQUFTOztBQUFBLHdCQUN1QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEdkI7QUFBQTtBQUFBLE1BQ2xCQyxnQkFEa0I7QUFBQSxNQUNBQyxtQkFEQSx3QkFHekI7OztBQUh5Qix5QkFLS0gsNENBQUssQ0FBQ0MsUUFBTixDQUFlRyxTQUFmLENBTEw7QUFBQTtBQUFBLE1BS2xCQyxP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QUFDLG9CQUFsRztBQUF1SCx5QkFBVyxFQUFDO0FBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWVJLHFFQUFDLG9EQUFEO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTyxpQkFBSSxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLGdEQUFEO0FBQU8sc0JBQVksRUFBRUgsNERBQUksQ0FBQ0MscUJBQUwsQ0FBMkJHLGtCQUFoRDtBQUFvRSxjQUFJLEVBQUMsTUFBekU7QUFBZ0YsY0FBSSxFQUFDLFNBQXJGO0FBQStGLFlBQUUsRUFBQyx1QkFBbEc7QUFBMEgscUJBQVcsRUFBQztBQUF0STtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKLGVBbUJJLHFFQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUFDLFNBRFI7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBaUNELENBOUREOztHQUFNckMsTzs7S0FBQUEsTztBQWdFTkEsT0FBTyxDQUFDc0MsTUFBUixHQUFpQkMsOERBQWpCO0FBRWV2QyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbnRlcnByaXNlL3Byb2ZpbGUuNmJhZWY3MGU1NDU0MThjNThlYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBGb3JtVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCJ2YXJpYWJsZXMvdmFyaWFibGUuanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7XHJcbiAgQmFkZ2UsXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBNZWRpYSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIFBhZ2luYXRpb25JdGVtLFxyXG4gIFBhZ2luYXRpb25MaW5rLFxyXG4gIFByb2dyZXNzLFxyXG4gIFRhYmxlLFxyXG4gIElucHV0LFxyXG4gIElucHV0R3JvdXBBZGRvbixcclxuICBJbnB1dEdyb3VwVGV4dCxcclxuICBJbnB1dEdyb3VwLFxyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgTW9kYWwsXHJcbiAgVW5jb250cm9sbGVkVG9vbHRpcCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG4vLyBsYXlvdXQgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgRW50ZXJwcmlzZSBmcm9tIFwibGF5b3V0cy9FbnRlcnByaXNlLmpzXCI7XHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlcnMvRW50ZXJwcmlzZUhlYWRlci5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe3NhbX0pID0+IHtcclxuICBjb25zdCBbbW9kYWxEZWZhdWx0T3Blbiwgc2V0TW9kYWxEZWZhdWx0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vY29uc3QgW29yZ0RhdGEsIHNldE9yZ0RhdGFdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgW29yZ0RhdGEsIHNldE9yZ0RhdGFdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgbG9hZE9yZ0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB2YXIgb3JnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZoLW9yZ1wiKSk7XHJcbiAgICBjb25zdCBvcmdEYXRhR2V0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL2VudGVycHJpc2VEYXRhLyR7b3JnLk5hbWVvZk9yZ31gKTtcclxuICAgIHNldE9yZ0RhdGEob3JnRGF0YUdldFJlc3BvbnNlLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KGxvYWRPcmdEYXRhLCBbXSk7XHJcblxyXG5cclxuICBjb25zdCB1cGRhdGVPcmcgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHZhciBvcmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmgtb3JnXCIpKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICAuLi4oZXZlbnQudGFyZ2V0WzBdLnZhbHVlKSAmJiB7TmFtZW9mT3JnOiBldmVudC50YXJnZXRbMF0udmFsdWV9LFxyXG4gICAgICAvLy4uLihldmVudC50YXJnZXRbMV0udmFsdWUpICYmIHtwaG9uZU51bWJlcjogZXZlbnQudGFyZ2V0WzFdLnZhbHVlfSxcclxuICAgICAgLi4uKGV2ZW50LnRhcmdldFszXS52YWx1ZSkgJiYge0VtYWlsOiBldmVudC50YXJnZXRbM10udmFsdWV9LFxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL2VudGVycHJpc2UvJHtvcmcuTmFtZW9mT3JnfWAsIHBvc3REYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHBvc3RSZXNwb25zZS5kYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHsvKiBQYWdlIGNvbnRlbnQgKi99XHJcblxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxSb3cgZm9ybT5cclxuICAgICAgICAgICAgPENvbCBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA+TmFtZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgZGVmYXVsdFZhbHVlPXtEYXRhLmVudGVycHJpc2VQcm9maWxlRGF0YS5vcmdhbml6YXRpb25OYW1lfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lT2ZPcmdhbml6YXRpb25cIiBwbGFjZWhvbGRlcj1cIk5hbWUgT2YgT3JnYW5pemF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgPlR5cGU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGRlZmF1bHRWYWx1ZT17RGF0YS5lbnRlcnByaXNlUHJvZmlsZURhdGEuYWRkcmVzc09mT3JnYW5pemF0aW9ufSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eXBlXCIgaWQ9XCJ0eXBlT2ZPcmdhbml6YXRpb25cIiBwbGFjZWhvbGRlcj1cIlR5cGUgT2YgT3JnYW5pemF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlQWRkcmVzc1wiPkFkZHJlc3M8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgZGVmYXVsdFZhbHVlPXtEYXRhLmVudGVycHJpc2VQcm9maWxlRGF0YS50eXBlT2ZPcmdhbml6YXRpb259IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3NcIiBpZD1cImFkZHJlc3NPZk9yZ2FuaXphdGlvblwiIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBPZiBPcmdhbml6YXRpb25cIi8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFVwZGF0ZSBEZXRhaWxzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Qcm9maWxlLmxheW91dCA9IEVudGVycHJpc2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9