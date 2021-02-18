"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _global = _interopRequireDefault(require("global"));

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class ResetPassword extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "submitHandler", e => {
      e.preventDefault();
      const data = {
        token: _global.default.location.href.split("/").pop(),
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.confirm_password
      };

      _axios.default.post('/auth/resetPassword', data).then(res => {
        if (res.data.success) {
          localStorage.setItem('message', res.data.message);
          _global.default.location.href = '/login';
        } else {
          func.callSwal(res.data.message);
        }
      }).catch(err => func.printError(err));
    });
    this.state = {
      token: '',
      email: '',
      password: '',
      confirm_password: ''
    };
  }

  componentDidMount() {
    _global.default.scrollTo(0, 0);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container my-5"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Reset "), "Password "), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.submitHandler,
      className: "auth"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "E-Mail Address"), /*#__PURE__*/_react.default.createElement("input", {
      id: "emailRegister",
      type: "email",
      className: "form-control",
      name: "email",
      required: true,
      autoComplete: "email",
      value: this.state.email,
      onChange: this.onChange,
      placeholder: "Email Please"
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Password"), /*#__PURE__*/_react.default.createElement("input", {
      id: "password",
      type: "password",
      className: "form-control",
      name: "password",
      required: true,
      autoComplete: "new-password",
      value: this.state.password,
      onChange: this.onChange,
      placeholder: "Password Please"
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Confirm Password"), /*#__PURE__*/_react.default.createElement("input", {
      id: "password-confirm",
      type: "password",
      className: "form-control",
      name: "confirm_password",
      required: true,
      autoComplete: "new-password",
      value: this.state.confirm_password,
      onChange: this.onChange,
      placeholder: "Confirm Password"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "submit",
      className: "casleyBtn"
    }, "Reset Password")))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

var _default = ResetPassword;
exports.default = _default;