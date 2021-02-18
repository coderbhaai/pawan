"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ReferNEarn = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _SocialShare = _interopRequireDefault(require("./SocialShare"));

const func = require('../parts/functions');

class ReferNEarn extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {// const response = await fetch('/user/refernearn/'+this.state.user.id)
      // const body = await response.json();
      // if (response.status !== 200) throw Error(body.message)
      // this.setState({
      //     data:                   body.data,
      //     loading:                false,
      // })
    });
    this.state = {
      loading: false,
      user: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (typeof Storage !== "undefined") {
      this.setState({
        user: JSON.parse(localStorage.getItem('user')) || []
      }, () => this.callApi());
    } // this.callApi()

  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), !this.state.loading ? /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid admin"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10 referEarn"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "Refer and Earn"), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/static/refer.png"
    }), /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("span", null, "GET 10%"), " OF YOUR FRIENDS\u2019 EARNINGS WHEN THEY SIGN UP ON REWARD EAGLE USING YOUR REFERRAL CODE"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Refer your referral codes to your Friends and family to Earn 10 Reward Points free. Take Advantage of This Great Referral Scheme at Reward Eagle")), /*#__PURE__*/_react.default.createElement("p", null, "Invite your friends and get 10 Points for free. Whenever you invite 10 of your friends you will get Free 10 Points in your account once they join our website. You can use these free points to get Free Mobile Recharge."), /*#__PURE__*/_react.default.createElement("p", null, "Imagine your mobile bill can become Zero if you refer 10 friends everyday! Also, your friends will love you for letting them save on their online shopping. Now be a real friend and help your friends on their online shopping."), /*#__PURE__*/_react.default.createElement("p", null, "Below is your unique referral link. When your friends click on this link and join they are automatically added to your referral network."), /*#__PURE__*/_react.default.createElement(_SocialShare.default, {
      title: 'Join Reward Eagle and shop now',
      url: "http://www.rewardeagle.com/register/" + this.state.user.referralcode
    })))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    })), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.ReferNEarn = ReferNEarn;
var _default = ReferNEarn;
exports.default = _default;