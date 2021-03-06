"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AddSurvey = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _semanticUiReact = require("semantic-ui-react");

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class AddSurvey extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/adminQuestionBank');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      body.data.forEach(i => {
        this.state.questionOptions.push({
          'text': i.title,
          'value': i.id
        });
      });
      this.setState({
        data: body.data,
        questionOptions: this.state.questionOptions,
        questionOptionsCopy: this.state.questionOptions,
        questionOptionsSecondCopy: this.state.questionOptions,
        loading: false
      });
    });
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "setMinNum", async e => {
      var data = await func.setMinNum(e);
      this.setState({
        reward: data
      });
    });
    (0, _defineProperty2.default)(this, "questionSelected", (e, {
      value
    }) => {
      // this.state.questionOptionsCopy.forEach((i, index) => {
      //     if(this.state.questions.includes(i.value) || value== i.value){ this.state.questionOptionsCopy.splice(index, 1) }
      // });
      if (value.initialized <= this.state.count.length) {
        this.state.questions[value.initialized] = value.value;
        this.setState({
          questions: this.state.questions
        });
      } else {
        this.setState({
          questions: [...this.state.questions, value.value],
          heirarchy: [...this.state.heirarchy, {
            'quest': value.value,
            'options': []
          }] // questionOptions:        this.state.questionOptionsCopy,
          // questionOptionsCopy:    this.state.questionOptionsSecondCopy

        });
        this.state.data.forEach(i => {
          if (i.type == 2) {
            var next = new Array(JSON.parse(i.options).length).fill('blank');
          } else {
            var next = null;
          }

          const entry = {
            'quest': i.id,
            'next': next,
            "last": true
          };

          if (i.id === value.value) {
            this.setState({
              heirarchy: [...this.state.heirarchy, entry]
            });
          }
        });
      }
    });
    (0, _defineProperty2.default)(this, "addHandler", e => {
      e.preventDefault();
      const data = {};

      _axios.default.post('/admin/addBlog', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          localStorage.setItem('message', res.data.message); // window.location.href = '/admin/blogs'
        }

        func.callSwal(res.data.message);
      });
    });
    (0, _defineProperty2.default)(this, "addQuestion", () => {
      if (this.state.count.length === this.state.questions.length || !this.state.count.length) {
        // this.setState({ questions: [...this.state.questions, ''] })
        this.setState({
          count: [...this.state.count, '']
        }); // this.setState({ count: this.state.count +1 })
      } else {
        func.callSwal('Please select the earlier question first');
      }
    });
    this.state = {
      title: '',
      status: '',
      reward: '',
      data: [],
      questionOptions: [],
      questionOptionsCopy: [],
      questionOptionsSecondCopy: [],
      questions: [],
      heirarchy: [],
      count: [],
      loading: true
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), !this.state.loading ? /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid admin"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "Create Survey"), /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addHandler
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Survey Title",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Status"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "status",
      required: true,
      value: this.state.status,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Status?"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Active"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Not Active"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Reward"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 1,
      className: "form-control",
      name: "reward",
      value: this.state.reward,
      onChange: this.setMinNum,
      placeholder: "Display Order",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.addQuestion,
      className: "casleyBtn"
    }, "Add Question")), this.state.count.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12 card",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Add Question Here"), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select Question",
      fluid: true,
      search: true,
      selection: true,
      onChange: this.questionSelected,
      options: this.state.questionOptions.map(x => {
        return {
          key: x.value,
          text: x.text,
          value: {
            value: x.value,
            initialized: index
          },
          initialized: index
        };
      })
    })), this.state.data.filter(j => j.id == this.state.questions[index]).map((j, index2) => /*#__PURE__*/_react.default.createElement("div", {
      key: index2
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Question : ", j.title), j.type == 2 ? /*#__PURE__*/_react.default.createElement("div", null, JSON.parse(j.options).map((k, index3) => /*#__PURE__*/_react.default.createElement("div", {
      key: index3
    }, /*#__PURE__*/_react.default.createElement("span", null, "Option ", index3, " - ", k), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select Question",
      fluid: true,
      search: true,
      selection: true,
      onChange: this.questionSelected,
      options: this.state.questionOptions.map(x => {
        return {
          key: x.value,
          text: x.text,
          value: {
            value: x.value,
            initialized: index3
          },
          initialized: index3
        };
      })
    })))) : null))))))))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    })), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.AddSurvey = AddSurvey;
var _default = AddSurvey;
exports.default = _default;