"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MyProfile = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

const func = require('../parts/functions');

class MyProfile extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "uploadImage", e => {
      this.setState({
        image: e.target.files[0]
      });
    });
    this.state = {
      loading: false,
      phone: '',
      image: null,
      oldImage: ''
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), !this.state.loading ? /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid admin"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "My Profile"), /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addHandler
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Phone"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Your Phone",
      name: "phone",
      required: true,
      value: this.state.phone,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Profile Pic"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "file",
      className: "form-control",
      required: true,
      onChange: this.uploadImage
    }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Create Profile")))))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    })), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.MyProfile = MyProfile;
var _default = MyProfile;
exports.default = _default;