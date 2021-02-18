"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropStores = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

const func = require('./functions');

class DropStores extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/shopData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      const basic = [];
      body.basicList.forEach(i => {
        i.start = 0;
        i.end = 40;
        basic.push(i);
      });
      this.setState({
        basicList: basic,
        storeList: body.storeList // loading:                    false

      });
    });
    this.state = {
      basicList: [],
      storeList: [] // loading:                true,

    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "container swiperInDropDown"
    }, this.state.basicList.length ? /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.paramHeader, this.state.basicList.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "shopBox",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("h3", null, index))))) : null));
  }

}

exports.DropStores = DropStores;
var _default = DropStores;
exports.default = _default;