"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlogBanner = void 0;

var _react = _interopRequireWildcard(require("react"));

class BlogBanner extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.blogs ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.blogs.slice(0, 1).map(i => {
      let alt = i.cover_img.replace('.jpg', '').replace(/_/g, ' ').replace(/-/g, ' ');
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "carousel-item active",
        key: i.id
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/blog/" + i.cover_img,
        alt: alt,
        className: "web"
      }), /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/blog/online-" + i.cover_img,
        alt: alt,
        className: "mobile"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "carousel-caption"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "/" + i.url
      }, /*#__PURE__*/_react.default.createElement("h2", null, i.title)), /*#__PURE__*/_react.default.createElement("a", {
        href: "/" + i.url,
        className: "casleyBtnInverse",
        style: {
          maxWidth: '150px'
        }
      }, "Read More")));
    }), this.props.blogs.slice(1, 3).map(i => {
      let alt = i.cover_img.replace('.jpg', '').replace(/_/g, ' ').replace(/-/g, ' ');
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "carousel-item",
        key: i.id
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/blog/" + i.cover_img,
        alt: alt,
        className: "web"
      }), /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/blog/online-" + i.cover_img,
        alt: alt,
        className: "mobile"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "carousel-caption"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "/" + i.url
      }, /*#__PURE__*/_react.default.createElement("h2", null, i.title)), /*#__PURE__*/_react.default.createElement("a", {
        href: "/" + i.url,
        className: "casleyBtnInverse",
        style: {
          maxWidth: '150px'
        }
      }, "Read More")));
    })) : null);
  }

}

exports.BlogBanner = BlogBanner;
var _default = BlogBanner;
exports.default = _default;