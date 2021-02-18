"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Contact = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _Form = _interopRequireDefault(require("../parts/Form"));

class Contact extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
      className: "contactUs my-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, "Contact Us"), /*#__PURE__*/_react.default.createElement(_Form.default, null)), /*#__PURE__*/_react.default.createElement("iframe", {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.1902936075026!2d77.09790081507835!3d28.44367948249271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194533ed0481%3A0x3a015633ca93639a!2sCasley%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1613373726962!5m2!1sen!2sin"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    })), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.Contact = Contact;
var _default = Contact;
exports.default = _default;