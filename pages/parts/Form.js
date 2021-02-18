"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Form = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class Form extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "setMinNum", async e => {
      var data = await func.setMinNum(e);
      this.setState({
        phone: data
      });
    });
    (0, _defineProperty2.default)(this, "addHandler", e => {
      e.preventDefault();
      const data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      };

      _axios.default.post('/admin/contactForm', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          localStorage.setItem('message', res.data.message); // window.location.href = '/admin/blogs'
        }

        func.callSwal(res.data.message);
      });
    });
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addHandler,
      className: "card mb-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      required: true,
      name: "name",
      placeholder: "Name",
      onChange: this.onChange,
      value: this.state.name
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "E-mail address"), /*#__PURE__*/_react.default.createElement("input", {
      type: "email",
      className: "form-control",
      required: true,
      name: "email",
      placeholder: "Email",
      onChange: this.onChange,
      value: this.state.email
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Mobile number"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 0,
      className: "form-control",
      required: true,
      name: "phone",
      placeholder: "Phone",
      onChange: this.setMinNum,
      value: this.state.phone
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Message"), /*#__PURE__*/_react.default.createElement("textarea", {
      type: "text",
      className: "form-control",
      required: true,
      name: "message",
      placeholder: "message",
      onChange: this.onChange,
      value: this.state.message
    })), /*#__PURE__*/_react.default.createElement("button", {
      type: "submit",
      className: "casleyBtn"
    }, "Submit")));
  }

}

exports.Form = Form;
var _default = Form;
exports.default = _default;