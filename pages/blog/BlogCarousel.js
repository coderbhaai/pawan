"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function BlogCarousel(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, props.blogs ? /*#__PURE__*/_react.default.createElement("div", {
    className: "container blogs py-5"
  }, props.blogs.length ? /*#__PURE__*/_react.default.createElement("h2", {
    className: "heading"
  }, "Interesting Reads") : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, props.blogs.sort(() => 0.5 - Math.random()).slice(0, 3).map((i, index) => {
    let alt = i.coverImg.replace('.jpg', '').replace(/_/g, ' ').replace(/-/g, ' ');
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4",
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/blog/" + i.url
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/blog/" + i.coverImg,
      alt: alt
    })), /*#__PURE__*/_react.default.createElement("h3", null, i.title), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn"
    }, "Read More")));
  }))) : null);
}

var _default = BlogCarousel;
exports.default = _default;