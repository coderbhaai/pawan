"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.QuestionBank = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _reactstrap = require("reactstrap");

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class QuestionBank extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "handleClick", e => {
      this.setState({
        currentPage: Number(e.target.id)
      });
    });
    (0, _defineProperty2.default)(this, "changeitemsPerPage", e => {
      this.setState({
        itemsPerPage: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "searchSpace", e => {
      this.setState({
        search: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "addModalOn", () => {
      this.setState({
        addmodalIsOpen: true
      });
    });
    (0, _defineProperty2.default)(this, "changeType", e => {
      this.setState({
        type: e.target.value,
        options: ['', '']
      });
    });
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/adminQuestionBank');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        data: body.data,
        loading: false
      });
    });
    (0, _defineProperty2.default)(this, "resetData", () => {
      this.setState({
        addmodalIsOpen: false,
        editmodalIsOpen: false,
        title: '',
        type: '',
        mandatory: '',
        options: ['', '', '', ''],
        answer: '',
        status: '',
        selectedId: ''
      });
      window.scrollTo(0, 0);
    });
    (0, _defineProperty2.default)(this, "changeOptions", (index, e) => {
      this.state.options[index] = e.target.value;
      this.setState({
        options: this.state.options
      });
    });
    (0, _defineProperty2.default)(this, "addHandler", e => {
      e.preventDefault();

      if (this.state.type == 1) {
        var options = null;
      } else {
        var options = JSON.stringify(this.state.options);
      }

      const data = {
        title: this.state.title,
        type: this.state.type,
        options: options,
        mandatory: this.state.mandatory,
        answer: parseInt(this.state.answer),
        status: this.state.status
      };

      _axios.default.post('/admin/addQuestion', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            data: [...this.state.data, res.data.data]
          });
        }

        func.callSwal(res.data.message);
      });

      this.resetData();
    });
    (0, _defineProperty2.default)(this, "editModalOn", i => {
      this.setState({
        editmodalIsOpen: true,
        selectedId: i.id,
        title: i.title,
        type: i.type,
        mandatory: i.mandatory,
        options: JSON.parse(i.options),
        answer: parseInt(i.answer),
        status: i.status
      });
    });
    (0, _defineProperty2.default)(this, "updateHandler", e => {
      e.preventDefault();

      if (this.state.type == 1) {
        var options = null;
      } else {
        var options = JSON.stringify(this.state.options);
      }

      const data = {
        id: this.state.selectedId,
        title: this.state.title,
        type: this.state.type,
        options: options,
        mandatory: this.state.mandatory,
        answer: parseInt(this.state.answer),
        status: this.state.status
      };

      _axios.default.post('/admin/updateQuestion', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            data: this.state.data.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          });
        }

        func.callSwal(res.data.message);
      });

      this.resetData();
    });
    (0, _defineProperty2.default)(this, "changeStatus", (id, value) => {
      if (value == 1) {
        var status = 0;
      } else {
        var status = 1;
      }

      const data = {
        id: id,
        status: status
      };

      _axios.default.post('/admin/changeQuestionStatus', data).then(res => {
        if (res.data.success) {
          this.setState({
            data: this.state.data.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          });
        }

        func.callSwal(res.data.message);
      }).catch(err => func.printError(err));
    });
    (0, _defineProperty2.default)(this, "addOption", () => {
      this.setState({
        optionArray: [...this.state.optionArray, ''],
        options: [...this.state.options, '']
      });
    });
    (0, _defineProperty2.default)(this, "closeOption", index => {
      this.state.optionArray.splice(index, 1);
      this.state.options.splice(index, 1);
      this.setState({
        optionArray: this.state.optionArray,
        options: this.state.options
      });
    });
    this.state = {
      addmodalIsOpen: false,
      editmodalIsOpen: false,
      data: [],
      title: '',
      type: '',
      mandatory: '',
      options: ['', ''],
      answer: '',
      status: '',
      optionArray: ['', ''],
      currentPage: 1,
      itemsPerPage: 100,
      loading: true
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    const {
      currentPage,
      itemsPerPage
    } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const renderItems = this.state.data.filter(i => {
      if (this.state.search == null) return i;else if (i.url.toLowerCase().includes(this.state.search.toLowerCase()) || i.title.toLowerCase().includes(this.state.search.toLowerCase())) {
        return i;
      }
    }).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, i.type == 1 ? 'Text Input' : 'MCQ'), /*#__PURE__*/_react.default.createElement("td", null, i.title), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "onoffswitch"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: "category",
        className: "onoffswitch-checkbox",
        id: 'Switch-' + i.id,
        onChange: e => this.changeStatus(i.id, e.target.value),
        value: i.status,
        checked: i.status == 1 ? true : false
      }), /*#__PURE__*/_react.default.createElement("label", {
        className: "onoffswitch-label",
        htmlFor: 'Switch-' + i.id
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "onoffswitch-inner"
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "onoffswitch-switch"
      })))), /*#__PURE__*/_react.default.createElement("td", {
        className: "editIcon text-center"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/icons/edit.svg",
        alt: "Edit Icon",
        onClick: () => this.editModalOn(i)
      })));
    });
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(this.state.data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPagination = pageNumbers.map(number => {
      if (currentPage == number) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: number,
          id: number,
          onClick: this.handleClick,
          className: "active"
        }, " ", number);
      } else {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: number,
          id: number,
          onClick: this.handleClick
        }, " ", number);
      }
    });
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid admin"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "Admin ( Question bank )"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "perPage"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Add Question here"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: this.addModalOn
    }, "Add Question")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "per page"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      value: itemsPerPage,
      onChange: e => this.changeitemsPerPage(e)
    }, /*#__PURE__*/_react.default.createElement("option", null, itemsPerPage), /*#__PURE__*/_react.default.createElement("option", {
      value: "10"
    }, "10"), /*#__PURE__*/_react.default.createElement("option", {
      value: "25"
    }, "25"), /*#__PURE__*/_react.default.createElement("option", {
      value: "50"
    }, "50"), /*#__PURE__*/_react.default.createElement("option", {
      value: "100"
    }, "100")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "search"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "noFlex searchInput"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Search Here"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      placeholder: "Search here",
      className: "form-control",
      onChange: e => this.searchSpace(e)
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "noFlex"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Page Numbers"), /*#__PURE__*/_react.default.createElement("ul", {
      className: "page-numbers"
    }, renderPagination, " ")))), /*#__PURE__*/_react.default.createElement("table", {
      className: "table table-hover table-responsive"
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sl no."), /*#__PURE__*/_react.default.createElement("td", null, "Type"), /*#__PURE__*/_react.default.createElement("td", null, "Title"), /*#__PURE__*/_react.default.createElement("td", null, "Status"), /*#__PURE__*/_react.default.createElement("td", null, "Edit"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "4",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.addmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Add Question Here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addHandler
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Question Title",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "type",
      required: true,
      value: this.state.type,
      onChange: this.changeType
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Type"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Text Box"), /*#__PURE__*/_react.default.createElement("option", {
      value: "2"
    }, "MCQ"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Mandatory"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "mandatory",
      required: true,
      value: this.state.mandatory,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Answer is mandatory?"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Yes"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "No"))), /*#__PURE__*/_react.default.createElement("div", {
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
    }, "Not Active"))), this.state.type == 2 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.optionArray.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6",
      key: index
    }, /*#__PURE__*/_react.default.createElement("label", null, "Option ", index + 1), /*#__PURE__*/_react.default.createElement("div", {
      className: index > 1 ? "delete" : null
    }, /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: `Question for option ${index + 1}`,
      required: true,
      value: i,
      onChange: e => this.changeOptions(index, e)
    }), index > 1 ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/wrong.svg",
      onClick: () => this.closeOption(index)
    }) : null))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.addOption,
      className: "casleyBtn"
    }, "Add Another Option")))) : null, this.state.type == 2 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Answer"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "answer",
      required: true,
      value: this.state.answer,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Answer"), this.state.options.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: index,
      key: index
    }, index + 1)))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null)))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.editmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Update Question here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      className: "modal-form",
      encType: "multipart/form-data",
      onSubmit: this.updateHandler
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Question Title",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "type",
      required: true,
      value: this.state.type,
      onChange: this.changeType
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Type"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Text Box"), /*#__PURE__*/_react.default.createElement("option", {
      value: "2"
    }, "MCQ"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Mandatory"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "mandatory",
      required: true,
      value: this.state.mandatory,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Answer is mandatory?"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Yes"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "No"))), /*#__PURE__*/_react.default.createElement("div", {
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
    }, "Not Active"))), this.state.type == 2 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.options.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6",
      key: index
    }, /*#__PURE__*/_react.default.createElement("label", null, "Option ", index + 1), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: `Question for option ${index + 1}`,
      required: true,
      value: i,
      onChange: e => this.changeOptions(index, e)
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("button", null, "Add Another Option")))) : null, this.state.type == 2 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Answer"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "answer",
      required: true,
      value: this.state.answer,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Answer"), this.state.options.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: index,
      key: index
    }, index + 1)))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null)), " ")))));
  }

}

exports.QuestionBank = QuestionBank;
var _default = QuestionBank;
exports.default = _default;