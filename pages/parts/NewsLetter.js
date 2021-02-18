"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function NewsLetter() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "newsletter"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Subscribe US and to avail more Offers"), /*#__PURE__*/_react.default.createElement("p", null, "Save upt 90 % on things you love")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    className: "form-control",
    type: "email",
    placeholder: "Subscribe With Us"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "form-control kohei button"
  }, "Subscribe")));
}

var _default = NewsLetter;
exports.default = _default;