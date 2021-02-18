"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

const func = require('../parts/functions');

function Brands() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "brands"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 topNav"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "heading"
  }, "Trusted Brands ", /*#__PURE__*/_react.default.createElement("span", null, "we serve")), /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.params4, func.brands.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/static/brands/" + i.img
  }))))))));
}

var _default = Brands;
exports.default = _default;