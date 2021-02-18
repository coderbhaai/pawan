"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckSurvey = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class CheckSurvey extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const id = window.location.href.split("/").pop();
      const response = await fetch('/admin/checkSurveyData/' + id);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        questions: body.questions,
        questionList: JSON.parse(body.questions.questions),
        answers: JSON.parse(body.questions.answers),
        data: body.data.results
      });
    });
    this.state = {
      user: [],
      title: '',
      data: [],
      questions: [],
      answers: [],
      questionList: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container my-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, " Survey taken by ", this.state.questions.name), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("strong", null, this.state.questions.email, " | ", this.state.questions.phone)), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-center"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "row listFilter"
    }, this.state.questionList.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.questionList.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12 card",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Question ", index + 1), this.state.data.filter(j => j.id == i).map((j, index2) => /*#__PURE__*/_react.default.createElement("div", {
      key: index2
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Question : ", j.title), j.type == 2 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, JSON.parse(j.options).map((k, index3) => /*#__PURE__*/_react.default.createElement("div", {
      key: index3,
      className: "optionList"
    }, /*#__PURE__*/_react.default.createElement("span", null, index3 + 1, " - ", k), /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      value: index,
      name: index,
      checked: parseInt(this.state.answers[index]) == parseInt(index3) ? true : false
    })))) : j.type == 1 ? /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control",
      value: this.state.answers[index],
      name: index,
      onChange: e => this.checked(e, index, 'text'),
      placeholder: "Your Answer"
    }) : null)))))) : null)))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.CheckSurvey = CheckSurvey;
var _default = CheckSurvey;
exports.default = _default;