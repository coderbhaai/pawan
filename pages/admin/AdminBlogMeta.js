"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _reactstrap = require("reactstrap");

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class AdminBlogMeta extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/adminBlogMeta');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        metas: body.data
      });
    });
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "addMetaModalOn", () => {
      this.setState({
        addMetaModalIsOpen: true
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
    (0, _defineProperty2.default)(this, "resetData", () => {
      this.setState({
        addMetaModalIsOpen: false,
        name: '',
        url: '',
        type: '',
        editMetaModalIsOpen: false,
        name: '',
        url: '',
        type: '',
        selectedMeta: '',
        cover: null,
        coverPreview: '',
        oldCover: ''
      });
      window.scrollTo(0, 0);
    });
    (0, _defineProperty2.default)(this, "addBlogMetaData", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('type', this.state.type);
      data.append('name', this.state.name);
      data.append('url', this.state.url.replace(/ /g, "-"));
      data.append('cover', this.state.cover);

      _axios.default.post('/admin/addBlogMeta', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            metas: [...this.state.metas, res.data.data]
          });
        }

        func.callSwal(res.data.message);
      });

      this.resetData();
    });
    (0, _defineProperty2.default)(this, "editMetaModalOn", i => {
      this.setState({
        editMetaModalIsOpen: true,
        name: i.name,
        url: i.url,
        type: i.type,
        selectedMeta: i.id,
        oldCover: i.name
      });
    });
    (0, _defineProperty2.default)(this, "updateBlogMetaData", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('id', this.state.selectedMeta);
      data.append('type', this.state.type);
      data.append('name', this.state.name);
      data.append('url', this.state.url.replace(/ /g, "-"));
      data.append('cover', this.state.cover);
      data.append('oldCover', this.state.oldCover);

      _axios.default.post('/admin/updateBlogMeta', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            metas: this.state.metas.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          });
        }

        func.callSwal(res.data.message);
      });

      this.resetData();
    });
    (0, _defineProperty2.default)(this, "addCover", e => {
      this.setState({
        cover: e.target.files[0],
        coverPreview: URL.createObjectURL(e.target.files[0])
      });
    });
    this.state = {
      metas: [],
      addMetaModalIsOpen: false,
      editMetaModalIsOpen: false,
      name: '',
      url: '',
      type: '',
      cover: null,
      coverPreview: '',
      oldCover: '',
      selectedMeta: '',
      currentPage: 1,
      itemsPerPage: 100,
      search: ''
    };
  }

  componentDidMount() {
    this.callApi();
    window.scrollTo(0, 0);
  }

  render() {
    const {
      currentPage,
      itemsPerPage
    } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const renderItems = this.state.metas.filter(i => {
      if (this.state.search == null) return i;else if (i.name.toLowerCase().includes(this.state.search.toLowerCase()) || i.url.toLowerCase().includes(this.state.search.toLowerCase()) || i.type.toLowerCase().includes(this.state.search.toLowerCase())) {
        return i;
      }
    }).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, i.type), /*#__PURE__*/_react.default.createElement("td", null, i.name), /*#__PURE__*/_react.default.createElement("td", null, i.url), /*#__PURE__*/_react.default.createElement("td", {
        className: "editIcon text-center"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/icons/edit.svg",
        alt: "Edit Icon",
        onClick: () => this.editMetaModalOn(i)
      })));
    });
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(this.state.metas.length / itemsPerPage); i++) {
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
      className: "row admin"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Admin Panel"), "(Blog Meta)"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: this.addMetaModalOn
    }, "Add Blog Meta"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("select", {
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
    }, "100")), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      placeholder: "Search here",
      className: "form-control",
      onChange: e => this.searchSpace(e),
      style: {
        width: '400px',
        marginRight: "1em"
      }
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
      className: "page-numbers"
    }, renderPagination)))), /*#__PURE__*/_react.default.createElement("table", {
      className: "table table-hover table-responsive"
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sl no."), /*#__PURE__*/_react.default.createElement("td", null, "Type"), /*#__PURE__*/_react.default.createElement("td", null, "Name"), /*#__PURE__*/_react.default.createElement("td", null, "URL"), /*#__PURE__*/_react.default.createElement("td", null, "Edit"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "5",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems)), /*#__PURE__*/_react.default.createElement("ul", {
      className: "page-numbers"
    }, renderPagination)))), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.addMetaModalIsOpen,
      className: "adminModal tightModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Add Blog Meta Here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      className: "modal-form",
      encType: "multipart/form-data",
      onSubmit: this.addBlogMetaData
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "type",
      value: this.state.type,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", null, "Select Type"), /*#__PURE__*/_react.default.createElement("option", {
      value: "category"
    }, "Category"), /*#__PURE__*/_react.default.createElement("option", {
      value: "tag"
    }, "Tag"), /*#__PURE__*/_react.default.createElement("option", {
      value: "page"
    }, "Page"))), this.state.type == 'page' ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Cover Image"), this.state.coverPreview ? /*#__PURE__*/_react.default.createElement("img", {
      className: "preview",
      src: this.state.coverPreview
    }) : null, /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      name: "cover",
      type: "file",
      onChange: this.addCover
    })) : /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "name of Meta",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "URL"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "URL of Page",
      name: "url",
      required: true,
      value: this.state.url,
      onChange: this.onChange
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-btn"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit"))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.editMetaModalIsOpen,
      className: "adminModal tightModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Update Blog Category and Tags Here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      className: "modal-form",
      encType: "multipart/form-data",
      onSubmit: this.updateBlogMetaData
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      value: this.state.type,
      readOnly: true
    })), this.state.type == 'page' ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Update Cover Image"), this.state.coverPreview ? /*#__PURE__*/_react.default.createElement("img", {
      className: "preview",
      src: this.state.coverPreview
    }) : null, /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      name: "cover",
      type: "file",
      onChange: this.addCover
    })) : /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "name of Meta",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "URL"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "URL of Page",
      name: "url",
      required: true,
      value: this.state.url,
      onChange: this.onChange
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-btn"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit"))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

var _default = AdminBlogMeta;
exports.default = _default;