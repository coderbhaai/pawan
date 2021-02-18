"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ForgotPassword = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _global = _interopRequireDefault(require("global"));

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class ForgotPassword extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "ResetPassword", e => {
      e.preventDefault();
      const data = {
        email: this.state.email
      };

      _axios.default.post('/auth/forgotPassword', data).then(res => {
        if (res.data.success) {
          localStorage.setItem('message', res.data.message);
          _global.default.location.href = '/';
        } else {
          func.callSwal(res.data.message);
        }
      }).catch(err => func.printError(err));
    });
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    _global.default.scrollTo(0, 0); // this.callApi()

  } // callApi = async () => {
  //     const response = await fetch('/suggest')
  //     const body = await response.json();
  //     if (response.status !== 200) throw Error(body.message)
  //     this.setState({ blogs: body.blogs })
  // }


  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container my-5"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, "Forgot Password"), /*#__PURE__*/_react.default.createElement("div", {
      className: "row blogs"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.ResetPassword
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "E-Mail Address"), /*#__PURE__*/_react.default.createElement("input", {
      id: "emailRegister",
      type: "email",
      className: "form-control",
      name: "email",
      required: true,
      placeholder: "Email Please",
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Reset Password")))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.ForgotPassword = ForgotPassword;
var _default = ForgotPassword;
exports.default = _default;