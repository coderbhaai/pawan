"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AdminComments = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _reactstrap = require("reactstrap");

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class AdminComments extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const res = await fetch('/admin/adminComments');
      const body = await res.json();
      if (res.status !== 200) throw Error(body.message);
      this.setState({
        comments: body.data,
        loading: false
      });
    });
    (0, _defineProperty2.default)(this, "editModalOn", i => {
      this.setState({
        editmodalIsOpen: true,
        name: i.user,
        email: i.email,
        comment: i.comment,
        status: i.status,
        selectedComment: i.id
      });
    });
    (0, _defineProperty2.default)(this, "resetData", () => {
      this.setState({
        editmodalIsOpen: false,
        name: '',
        email: '',
        comment: '',
        status: '',
        selectedComment: ''
      });
      window.scrollTo(0, 0);
    });
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
    (0, _defineProperty2.default)(this, "updateComment", e => {
      e.preventDefault();
      const data = {
        id: this.state.selectedComment,
        name: this.state.name,
        email: this.state.email,
        comment: this.state.comment,
        status: this.state.status
      };

      _axios.default.post('/admin/updateComment', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            comments: this.state.comments.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          });
        }

        func.callSwal(res.data.message);
      });

      this.resetData();
    });
    this.state = {
      currentPage: 1,
      itemsPerPage: 100,
      comments: [],
      loading: true,
      name: '',
      email: '',
      comment: '',
      status: '',
      selectedComment: '',
      editmodalIsOpen: false
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
    const renderItems = this.state.comments.slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "/blog/" + i.url,
        target: "_blank"
      }, i.title)), /*#__PURE__*/_react.default.createElement("td", null, i.user, /*#__PURE__*/_react.default.createElement("br", null), i.email), /*#__PURE__*/_react.default.createElement("td", null, i.comment), /*#__PURE__*/_react.default.createElement("td", null, i.status == 1 ? "Show" : "Hide"), /*#__PURE__*/_react.default.createElement("td", null, i.updated_at), /*#__PURE__*/_react.default.createElement("td", {
        className: "text-center editIcon"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/icons/edit.svg",
        alt: "Edit Icon",
        onClick: () => this.editModalOn(i)
      })));
    });
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(this.state.comments.length / itemsPerPage); i++) {
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
      className: "container-fluid admin admin"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row admin"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, {
      active: "Comments"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Admin Panel "), "(Comments)"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "noFlex perPage"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Rows per page"), /*#__PURE__*/_react.default.createElement("select", {
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
    }, "100"))), /*#__PURE__*/_react.default.createElement("div", {
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
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Sl No."), /*#__PURE__*/_react.default.createElement("th", null, "Blog"), /*#__PURE__*/_react.default.createElement("th", null, "Name & Email"), /*#__PURE__*/_react.default.createElement("th", null, "Comment"), /*#__PURE__*/_react.default.createElement("th", null, "Status"), /*#__PURE__*/_react.default.createElement("th", null, "Time"), /*#__PURE__*/_react.default.createElement("th", null, "Action"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "7",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems)), /*#__PURE__*/_react.default.createElement("ul", {
      className: "page-numbers"
    }, renderPagination)))), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.editmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Update Comment  Here"), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X")), /*#__PURE__*/_react.default.createElement("form", {
      className: "modal-form",
      encType: "multipart/form-data",
      onSubmit: this.updateComment
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Name Here",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Email"), /*#__PURE__*/_react.default.createElement("textarea", {
      className: "form-control",
      type: "email",
      placeholder: "Add Email Here",
      name: "title",
      required: true,
      value: this.state.email,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Comment"), /*#__PURE__*/_react.default.createElement("textarea", {
      className: "form-control",
      type: "text",
      placeholder: "Add Comment",
      name: "comment",
      required: true,
      value: this.state.comment,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Status"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      value: this.state.status,
      onChange: this.onChange,
      name: "status"
    }, /*#__PURE__*/_react.default.createElement("option", null, "Select a Role"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Show"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Don't Show")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit")))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.AdminComments = AdminComments;
var _default = AdminComments;
exports.default = _default;