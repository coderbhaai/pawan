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

var _reactFacebookLogin = _interopRequireDefault(require("react-facebook-login"));

var _reactGoogleLogin = _interopRequireDefault(require("react-google-login"));

const func = require('../parts/functions');

class Login extends _react.Component {
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
        email: this.state.email,
        password: this.state.password
      };

      _axios.default.post('/auth/login', data).then(res => {
        if (res.data.success) {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          localStorage.setItem('message', res.data.message);
          _global.default.location.href = '/';
        } else {
          func.callSwal(res.data.message);
        }
      }).catch(err => func.printError(err));
    });
    (0, _defineProperty2.default)(this, "gofbLogin", (res, type) => {
      if (type == 'Google') {
        var data = {
          email: res.profileObj.email,
          password: res.googleId
        };
      } else if (type == 'FB') {
        var data = {
          email: res.email,
          password: res.userID
        };
      }

      _axios.default.post(api.login, data).then(res => {
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
    });
    this.state = {
      // email:              '',
      // password:           '',
      email: 'test@test.com',
      password: '123456789',
      auth: false,
      // blogs:           this.props.blogs,
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
    }

    const url = _global.default.location.href.split("e=");

    if (url[1]) {
      localStorage.removeItem('user');
      this.setState({
        auth: false
      });
      _global.default.location.href = '/login';
    }
  }

  render() {
    if (this.state.auth) {
      _global.default.location.href = '/';
    }

    const loginGoogle = res => {
      this.gofbLogin(res, 'Google');
    };

    const loginFB = res => {
      this.gofbLogin(res, 'FB');
    };

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
      className: "login auth py-5"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, "Login"), /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.submitHandler
    }, /*#__PURE__*/_react.default.createElement("label", null, "E-Mail Address"), /*#__PURE__*/_react.default.createElement("input", {
      type: "email",
      className: "form-control",
      name: "email",
      required: true,
      placeholder: "Email Please",
      onChange: this.onChange,
      value: this.state.email
    }), /*#__PURE__*/_react.default.createElement("label", null, "Password"), /*#__PURE__*/_react.default.createElement("input", {
      type: "password",
      className: "form-control",
      name: "password",
      required: true,
      placeholder: "Password Please",
      onChange: this.onChange,
      value: this.state.password
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Login")), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/forgot-password",
      className: "casleyBtnInverse"
    }, "Forgot Password"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "gofb"
    }, /*#__PURE__*/_react.default.createElement(_reactGoogleLogin.default, {
      clientId: this.state.clientId,
      buttonText: "Login with Google",
      onSuccess: loginGoogle,
      onFailure: loginGoogle
    }), /*#__PURE__*/_react.default.createElement(_reactFacebookLogin.default, {
      appId: "885798875528804",
      autoLoad: false,
      fields: "name,email,picture",
      callback: loginFB
    }))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

var _default = Login;
exports.default = _default;