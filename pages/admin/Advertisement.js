"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Advertisement = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _reactstrap = require("reactstrap");

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class Advertisement extends _react.Component {
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
    (0, _defineProperty2.default)(this, "uploadImage", e => {
      this.setState({
        image: e.target.files[0]
      });
    });
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/adminAds');
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
        type: '',
        url: '',
        status: '',
        target: '',
        image: null,
        oldImage: '',
        selectedId: '',
        error: false,
        errorMesg: ''
      });
      window.scrollTo(0, 0);
    });
    (0, _defineProperty2.default)(this, "addHandler", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('type', this.state.type);
      data.append('image', this.state.image);
      data.append('url', this.state.url);
      data.append('status', this.state.status);
      data.append('target', this.state.target);

      _axios.default.post('/admin/addAds', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            data: [...this.state.data, res.data.data]
          });
        }

        func.callSwal(res.data.message);
      }); // this.resetData()

    });
    (0, _defineProperty2.default)(this, "editModalOn", i => {
      this.setState({
        editmodalIsOpen: true,
        selectedId: i.id,
        type: i.type,
        status: i.status,
        target: i.target,
        url: i.url,
        oldImage: i.image
      });
    });
    (0, _defineProperty2.default)(this, "updateHandler", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('id', this.state.selectedId);
      data.append('type', this.state.type);
      data.append('image', this.state.image);
      data.append('url', this.state.url);
      data.append('status', this.state.status);
      data.append('target', this.state.target);
      data.append('oldImage', this.state.oldImage);

      _axios.default.post('/admin/updateAds', data).catch(err => func.printError(err)).then(res => {
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

      _axios.default.post('/admin/changeAdStatus', data).then(res => {
        if (res.data.success) {
          this.setState({
            data: this.state.data.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          });
        }

        func.callSwal(res.data.message);
      }).catch(err => func.printError(err));
    });
    this.state = {
      data: [],
      addmodalIsOpen: false,
      editmodalIsOpen: false,
      type: '',
      url: '',
      status: '',
      target: '',
      image: null,
      oldImage: '',
      selectedId: '',
      search: '',
      currentPage: 1,
      itemsPerPage: 100,
      loading: true,
      error: false,
      errorMesg: ''
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
      if (this.state.search == null) return i;else if (i.url.toLowerCase().includes(this.state.search.toLowerCase())) {
        return i;
      }
    }).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, func.adList.map((j, index2) => /*#__PURE__*/_react.default.createElement("span", {
        key: index2
      }, i.type == j.type ? j.text : null))), /*#__PURE__*/_react.default.createElement("td", {
        style: {
          maxWidth: '180px'
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/ads/" + i.image,
        style: {
          maxHeight: '60px',
          width: 'auto',
          display: 'inline'
        }
      })), /*#__PURE__*/_react.default.createElement("td", null, i.url), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
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
    }, "Admin ( Advertisement )"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "perPage"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Add Advertisement here"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: this.addModalOn
    }, "Add Advertisement")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Items per page"), /*#__PURE__*/_react.default.createElement("select", {
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
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sl no."), /*#__PURE__*/_react.default.createElement("td", null, "Position"), /*#__PURE__*/_react.default.createElement("td", null, "Image"), /*#__PURE__*/_react.default.createElement("td", null, "URL"), /*#__PURE__*/_react.default.createElement("td", null, "Status"), /*#__PURE__*/_react.default.createElement("td", null, "Action"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "4",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.addmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Add Advertisement Here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addHandler
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: this.state.type && !this.state.error ? "col-sm-4" : "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Position of Ad"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      name: "type",
      onChange: this.onChange,
      value: this.state.type
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Position of Ad"), func.adList.map((j, index2) => !this.state.data.some(el => el.type == j.type && j.single) ? /*#__PURE__*/_react.default.createElement("option", {
      value: j.type,
      key: index2
    }, j.text) : null)), this.state.error ? /*#__PURE__*/_react.default.createElement("p", null, this.state.errorMesg) : null), this.state.type && !this.state.error ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "file",
      className: "form-control",
      required: true,
      onChange: this.uploadImage
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Ad Status"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "status",
      value: this.state.status,
      required: true,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Status"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Show"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Hide"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Open Ad in "), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "target",
      value: this.state.target,
      required: true,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Window Status"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Same Window"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "New Window"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "URL of Ad"), /*#__PURE__*/_react.default.createElement("input", {
      name: "url",
      type: "text",
      className: "form-control",
      placeholder: "URL",
      value: this.state.url,
      required: true,
      onChange: this.onChange
    }))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null)))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.editmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Update Advertisement here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      className: "modal-form",
      encType: "multipart/form-data",
      onSubmit: this.updateHandler
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Position of Ad"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      name: "type",
      value: this.state.type,
      readOnly: true
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Position of Ad"), func.adList.map((j, index2) => /*#__PURE__*/_react.default.createElement("option", {
      value: j.type,
      key: index2
    }, j.text)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "file",
      className: "form-control",
      onChange: this.uploadImage
    }), this.state.oldImage ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + this.state.oldImage,
      className: "preview"
    }) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Ad Status"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "status",
      value: this.state.status,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Status"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Show"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Hide"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Open Ad in "), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "target",
      value: this.state.target,
      required: true,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Window Status"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Same Window"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "New Window"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "URL of Ad"), /*#__PURE__*/_react.default.createElement("input", {
      name: "url",
      type: "text",
      className: "form-control",
      placeholder: "URL",
      value: this.state.url,
      required: true,
      onChange: this.onChange
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null)))))));
  }

}

exports.Advertisement = Advertisement;
var _default = Advertisement;
exports.default = _default;