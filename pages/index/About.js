"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.About = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

class About extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
      className: "about my-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "loader"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loader.gif"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "about-content"
    }, /*#__PURE__*/_react.default.createElement("h1", null, "Reward Eagle"), /*#__PURE__*/_react.default.createElement("p", null, "Reward Eagle is a Japanese JV initiative based on the CSV model to create a shared value among the merchants and subscribers. We aim to create shared value in our business for the society and clients. Our mission is focused to the highest quality of customer service provided with a sense of trust, individual pride, warmth & higher satisfaction. Reward Eagle is a conglomerate for online surveys and research, HR solutions and e-commerce online purchase with best deals and offers available to our users. Reward Eagle conducts online polls / surveys as a part of online research. A user can take part in these surveys to project the growing interest or liking towards a particular domain and can avail rewards for the same. The greater the number of participations in our surveys leads to greater rewards at user\u2019s end. These rewards are liable to cashback in your account as per our terms & conditions."), /*#__PURE__*/_react.default.createElement("p", null, "Reward Eagle wings HR solutions to connect job seekers with job providers. A user can create, edit and modify their profile and can apply to jobs as and when projected. We connect our users with the right companies to achieve their dream jobs and get rewarded simultaneously. Reward Eagle curates the best deals, coupons and cashback offers from all top retailers on one platform to customize and reward user online shopping experience. We reward end consumers with benefits, rewards and surprise as they embark a journey with us. Users can enjoy savings through these shopping, coupons and also earn extra Reward Points on all their purchases, etc. It can be used for Mobile Recharge, and soon you can transfer to PayTM wallet very easily. Also, New Services are coming soon in 2020.")))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.About = About;
var _default = About;
exports.default = _default;