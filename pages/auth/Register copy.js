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

var _api = _interopRequireDefault(require("../parts/api"));

var _reactFacebookLogin = _interopRequireDefault(require("react-facebook-login"));

var _reactGoogleLogin = _interopRequireDefault(require("react-google-login"));

const func = require('../parts/functions');

class Register extends _react.Component {
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
        name: this.state.name,
        email: this.state.email,
        role: this.state.role,
        phone: this.state.phone,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        refrence: this.state.refrence,
        provider: this.state.provider
      };

      _axios.default.post('/auth/register', data).then(res => {
        if (res.data.success) {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          localStorage.setItem('message', res.data.message);
          _global.default.location.href = '/';
        } else {
          func.callSwal(res.data.message);
        }
      }).catch(err => func.printError(err));
    });
    this.state = {
      // name:                       '',
      // email:                      '',
      // phone:                      '',
      // role:                       'User',
      // password:                   '',
      // password_confirmation:      '',
      name: 'Test',
      email: 'test@test.com',
      phone: '123456789',
      role: 'User',
      password: '123456789',
      password_confirmation: '123456789',
      provider: 'Email',
      image: '',
      refrence: '',
      auth: false,
      clientId: '915022609455-gv870i2eefdcl20c41tl4o02nbjr6kno.apps.googleusercontent.com',
      clientSecret: 'g0tpSKG9EjKQnV1OsuZmSjEq'
    };
  }

  componentDidMount() {
    _global.default.scrollTo(0, 0);

    if (typeof Storage !== "undefined" && JSON.parse(localStorage.getItem('user'))) {
      this.setState({
        auth: JSON.parse(localStorage.getItem('user')).auth || false
      });

      if (JSON.parse(localStorage.getItem('user')).auth) {
        _global.default.location.href = '/';
      }
    }

    const url = _global.default.location.href.split("/").pop();

    if (url && url !== 'register') {
      localStorage.setItem('refrence', url);
    }

    if (typeof Storage !== "undefined" && localStorage.getItem('refrence')) {
      this.setState({
        refrence: localStorage.getItem('refrence') || ''
      });
    }
  }

  gofbRegisteration(res, type) {
    if (type == 'Google') {
      var data = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        password: res.googleId,
        image: res.profileObj.imageUrl,
        provider: 'Google',
        role: this.state.role,
        refrence: this.state.refrence
      };
    } else if (type == 'FB') {
      var data = {
        name: res.name,
        email: res.email,
        password: res.userID,
        image: res.picture.data.url,
        provider: 'FB',
        role: this.state.role,
        refrence: this.state.refrence
      };
    }

    _axios.default.post(_api.default.register, data).then(res => {
      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('message', res.data.message);
        _global.default.location.href = '/';
      } else {
        func.callSwal(res.data.message);
      }
    }).catch(err => {
      func.printError(err);
    });
  }

  render() {
    const regGoogle = res => {
      this.gofbRegisteration(res, 'Google');
    };

    const regFB = res => {
      this.gofbRegisteration(res, 'FB');
    };

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
      className: "register py-5"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, "Register"), /*#__PURE__*/_react.default.createElement("div", {
      className: "container my-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 flex-h"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/icons/family-5.svg",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.submitHandler
    }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      name: "name",
      value: this.state.name,
      required: true,
      placeholder: "Name Please",
      onChange: this.onChange
    }), /*#__PURE__*/_react.default.createElement("label", null, "E-Mail Address"), /*#__PURE__*/_react.default.createElement("input", {
      type: "email",
      className: "form-control",
      name: "email",
      value: this.state.email,
      required: true,
      placeholder: "Email Please",
      onChange: this.onChange
    }), /*#__PURE__*/_react.default.createElement("label", null, "Phone"), /*#__PURE__*/_react.default.createElement("input", {
      type: "tel",
      className: "form-control",
      name: "phone",
      value: this.state.phone,
      required: true,
      placeholder: "Contact Number",
      onChange: this.onChange
    }), /*#__PURE__*/_react.default.createElement("label", null, "Password"), /*#__PURE__*/_react.default.createElement("input", {
      type: "password",
      className: "form-control",
      name: "password",
      value: this.state.password,
      required: true,
      placeholder: "Password Please",
      onChange: this.onChange
    }), /*#__PURE__*/_react.default.createElement("label", null, "Confirm Password"), /*#__PURE__*/_react.default.createElement("input", {
      type: "password",
      className: "form-control",
      name: "password_confirmation",
      value: this.state.password_confirmation,
      required: true,
      placeholder: "Confirm Password",
      onChange: this.onChange
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Register"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "gofb"
    }, /*#__PURE__*/_react.default.createElement(_reactGoogleLogin.default, {
      clientId: this.state.clientId,
      buttonText: "Register with Google",
      onSuccess: regGoogle,
      onFailure: regGoogle
    }), /*#__PURE__*/_react.default.createElement(_reactFacebookLogin.default, {
      textButton: "Sign up with Facebook",
      appId: "885798875528804",
      autoLoad: false,
      fields: "name,email,picture",
      callback: regFB
    })))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

var _default = Register;
exports.default = _default;