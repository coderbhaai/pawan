"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Career = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _Brands = _interopRequireDefault(require("../parts/Brands"));

var _NewsLetter = _interopRequireDefault(require("../parts/NewsLetter"));

var _reactstrap = require("reactstrap");

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class Career extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/adminCareer');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        data: body.data
      });
    });
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "showDisplay", index => {
      this.setState({
        active: index
      });
    });
    (0, _defineProperty2.default)(this, "hideDisplay", () => {
      this.setState({
        active: null
      });
    });
    (0, _defineProperty2.default)(this, "addModalOn", id => {
      this.setState({
        addmodalIsOpen: true,
        careerId: id
      });
    });
    (0, _defineProperty2.default)(this, "uploadImage", e => {
      this.setState({
        file: e.target.files[0]
      });
    });
    (0, _defineProperty2.default)(this, "resetData", () => {
      this.setState({
        addmodalIsOpen: false,
        name: '',
        email: '',
        phone: '',
        file: null,
        jobId: ''
      });
      window.scrollTo(0, 0);
    });
    (0, _defineProperty2.default)(this, "addHandler", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('careerId', this.state.careerId);
      data.append('name', this.state.name);
      data.append('email', this.state.email);
      data.append('phone', this.state.phone);
      data.append('file', this.state.file);

      _axios.default.post('/admin/applyForJob', data).catch(err => func.printError(err)).then(res => {
        func.callSwal(res.data.message);
      });

      this.resetData();
    });
    this.state = {
      data: [],
      careerId: '',
      active: null,
      addmodalIsOpen: false,
      name: '',
      email: '',
      phone: '',
      file: null,
      jobId: ''
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid dailyRanking"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "Work with us"), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12 career"
    }, this.state.data.filter(i => i.status == 1).map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "card",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, i.role), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Location : "), " ", i.location), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, "qualification : "), " ", i.qualification), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, "experience : "), " ", i.experience)), /*#__PURE__*/_react.default.createElement("p", {
      className: "jd",
      onClick: () => this.showDisplay(index)
    }, "Job Description ", /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/arrow-down-red.svg",
      className: "fsIcon"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: this.state.active == index ? "show" : "hide"
    }, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, i.description), /*#__PURE__*/_react.default.createElement("p", {
      className: "jd",
      onClick: () => this.hideDisplay()
    }, "Job Description ", /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/arrow-up-red.svg",
      className: "fsIcon"
    })), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: () => this.addModalOn(i.id)
    }, "Apply for the opening")))))))), /*#__PURE__*/_react.default.createElement(_NewsLetter.default, null), /*#__PURE__*/_react.default.createElement(_Brands.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.addmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Apply for job opening here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addHandler
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Name",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Email"), /*#__PURE__*/_react.default.createElement("input", {
      name: "email",
      type: "email",
      className: "form-control",
      placeholder: "Email",
      value: this.state.email,
      required: true,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Phone"), /*#__PURE__*/_react.default.createElement("input", {
      name: "phone",
      type: "tel",
      className: "form-control",
      placeholder: "Phone",
      value: this.state.phone,
      required: true,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Resume"), /*#__PURE__*/_react.default.createElement("input", {
      type: "file",
      className: "form-control",
      required: true,
      onChange: this.uploadImage
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Apply For the role", /*#__PURE__*/_react.default.createElement("span", null)), " ")))));
  }

}

exports.Career = Career;
var _default = Career;
exports.default = _default;