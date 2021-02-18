"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Survey = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _Brands = _interopRequireDefault(require("../parts/Brands"));

var _NewsLetter = _interopRequireDefault(require("../parts/NewsLetter"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

const func = require('../parts/functions');

class Survey extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/surveyData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        ads: body.ads,
        surveyCat: body.surveyCat
      });
    });
    (0, _defineProperty2.default)(this, "nextStep", () => {
      if (this.state.user.id) {
        window.location.href = '/take-survey';
      } else {
        window.location.href = '/login';
      }
    });
    this.state = {
      user: '',
      ads: [],
      surveyCat: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();

    if (typeof Storage !== "undefined") {
      this.setState({
        user: JSON.parse(localStorage.getItem('user')) || []
      });
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid dailyRanking"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "Online Survey"), /*#__PURE__*/_react.default.createElement("p", {
      className: "headingPara"
    }, "If you\u2019re interested in earning money by participating in free online surveys, join our Online Survey and get upto 100 points on each survey response."), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "banner"
    }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.params, func.specialSlider.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/static/" + i.img,
      alt: ""
    }))))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12 surveyCatList"
    }, /*#__PURE__*/_react.default.createElement("ul", null, this.state.surveyCat.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/basic/" + i.tab3
    }), /*#__PURE__*/_react.default.createElement("p", null, i.name)))), /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.nextStep
    }, "Next")))), /*#__PURE__*/_react.default.createElement(_NewsLetter.default, null), /*#__PURE__*/_react.default.createElement(_Brands.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.Survey = Survey;
var _default = Survey;
exports.default = _default;