"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlogList = void 0;

var _react = _interopRequireWildcard(require("react"));

class BlogList extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.blogs ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.blogs.map((i, index) => {
      let alt = i.coverImg.replace('.jpg', '').replace(/_/g, ' ').replace(/-/g, ' ');
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm-4 ",
        key: index
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "/blog/" + i.url
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/blog/" + i.coverImg,
        alt: alt
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "name"
      }, /*#__PURE__*/_react.default.createElement("h2", null, i.title)))));
    })) : null);
  }

}

exports.BlogList = BlogList;
var _default = BlogList;
exports.default = _default;