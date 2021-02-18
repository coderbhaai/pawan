"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function RecommendedAds(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.ads ? /*#__PURE__*/_react.default.createElement("section", {
    className: "recommended"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "heading"
  }, "New deals Onboard"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-2"
  }, props.ads.filter(i => {
    if (i.type == 12) return i;
  }).slice(0, 1).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
    href: i.url,
    target: i.target == 1 ? "_blank" : "",
    key: index
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/ads/" + i.image
  })))), props.ads.filter(i => {
    if (i.type == 11) return i;
  }).slice(0, 2).map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-4",
    key: index
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: i.url,
    target: i.target == 1 ? "_blank" : ""
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/ads/" + i.image
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-2"
  }, props.ads.filter(i => {
    if (i.type == 13) return i;
  }).slice(0, 1).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
    href: i.url,
    target: i.target == 1 ? "_blank" : "",
    key: index
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/ads/" + i.image
  }))))))) : null);
}

var _default = RecommendedAds;
exports.default = _default;