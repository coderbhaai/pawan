"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FAQ = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

const func = require('../parts/functions');

class FAQ extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "changeActive", id => {
      this.setState({
        active: id
      });
    });
    (0, _defineProperty2.default)(this, "showAnswer", id => {
      if (id == this.state.showAnswer) {
        this.setState({
          showAnswer: ''
        });
      } else {
        this.setState({
          showAnswer: id
        });
      }
    });
    this.state = {
      active: 1,
      showAnswer: ''
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
      className: "faqs my-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "menu-btn"
    }, /*#__PURE__*/_react.default.createElement("ul", null, func.faqCat.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      onClick: () => this.changeActive(i.id),
      className: i.id == this.state.active ? "active" : null
    }, i.cat))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "faq-content"
    }, func.faqQA.filter(i => i.catId == this.state.active).map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("h6", {
      onClick: () => this.showAnswer(i.id)
    }, i.quest, /*#__PURE__*/_react.default.createElement("span", null, i.id == this.state.showAnswer ? "-" : "+")), /*#__PURE__*/_react.default.createElement("div", {
      className: i.id == this.state.showAnswer ? "answer active" : "answer"
    }, /*#__PURE__*/_react.default.createElement("p", null, i.ans))))))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.FAQ = FAQ;
var _default = FAQ;
exports.default = _default;