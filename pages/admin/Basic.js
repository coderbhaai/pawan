"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _reactstrap = require("reactstrap");

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class Basic extends _react.Component {
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
    (0, _defineProperty2.default)(this, "setMinNum", async e => {
      var data = await func.setMinNum(e);
      this.setState({
        tab1: data
      });
    });
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/adminBasic');
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
        name: '',
        image: null,
        oldImage: '',
        tab1: '',
        tab2: '',
        tab3: '',
        selectedId: ''
      });
      window.scrollTo(0, 0);
    });
    (0, _defineProperty2.default)(this, "addBasic", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('type', this.state.type);
      data.append('name', this.state.name);
      data.append('tab1', this.state.tab1);
      data.append('tab2', this.state.tab2);
      data.append('tab3', this.state.tab3);
      data.append('image', this.state.image);

      _axios.default.post('/admin/addBasic', data).catch(err => func.printError(err)).then(res => {
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
        type: i.type,
        name: i.name,
        tab1: i.tab1,
        tab2: i.tab2,
        tab3: i.tab3,
        selectedId: i.id
      });

      if (i.type == 'Survey') {
        this.setState({
          oldImage: i.tab3
        });
      } else {
        this.setState({
          oldImage: i.name
        });
      }
    });
    (0, _defineProperty2.default)(this, "updateBasic", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('id', this.state.selectedId);
      data.append('name', this.state.name);
      data.append('type', this.state.type);
      data.append('tab1', this.state.tab1);
      data.append('tab2', this.state.tab2);
      data.append('tab3', this.state.tab3);
      data.append('image', this.state.image);
      data.append('oldImage', this.state.oldImage);

      _axios.default.post('/admin/updateBasic', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            data: this.state.data.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          });
        }

        func.callSwal(res.data.message);
      });

      this.resetData();
    });
    this.state = {
      data: [],
      addmodalIsOpen: false,
      editmodalIsOpen: false,
      type: '',
      name: '',
      tab1: '',
      tab2: '',
      tab3: '',
      image: null,
      oldImage: '',
      selectedId: '',
      search: '',
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
      if (this.state.search == null) return i;else if (i.type.toLowerCase().includes(this.state.search.toLowerCase()) || i.name.toLowerCase().includes(this.state.search.toLowerCase())) {
        return i;
      }
    }).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, i.type == 'CouponType' ? 'Coupon Type' : i.type), /*#__PURE__*/_react.default.createElement("td", {
        style: {
          display: 'flex'
        }
      }, i.type == 'Carousel' ? /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/basic/" + i.name,
        className: "preview"
      }) : i.type == 'Survey' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/basic/" + i.tab3,
        className: "preview",
        style: {
          maxWidth: '30px',
          marginRight: '10px'
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, i.name)) : i.name), /*#__PURE__*/_react.default.createElement("td", null, i.tab1), /*#__PURE__*/_react.default.createElement("td", null, i.type == 'Survey' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, i.tab2 == 1 ? 'Show' : 'Hide') : i.tab2), /*#__PURE__*/_react.default.createElement("td", {
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
    }, "Admin ( Basic )"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "perPage"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Add Basic here"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: this.addModalOn
    }, "Add Basic")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Items per page"), /*#__PURE__*/_react.default.createElement("select", {
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
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sl no."), /*#__PURE__*/_react.default.createElement("td", null, "Type"), /*#__PURE__*/_react.default.createElement("td", null, "Name"), /*#__PURE__*/_react.default.createElement("td", null, "Tab1"), /*#__PURE__*/_react.default.createElement("td", null, "Tab2"), /*#__PURE__*/_react.default.createElement("td", null, "Action"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "4",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.addmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Add Basic Here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addBasic
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: this.state.type ? "col-sm-4" : "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type of Basic"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      name: "type",
      onChange: this.onChange,
      value: this.state.type
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Type"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Publisher"
    }, "Publisher"), /*#__PURE__*/_react.default.createElement("option", {
      value: "CouponType"
    }, "Type of Coupon"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Carousel"
    }, "Carousel"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Tags"
    }, "Tags"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Survey"
    }, "Survey Category"))), this.state.type === 'Publisher' ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Publisher Name"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Publisher Name",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    })) : null, this.state.type === 'CouponType' ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Coupon Type"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Coupon Type",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    })) : null, this.state.type === 'Carousel' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "file",
      className: "form-control",
      required: true,
      onChange: this.uploadImage
    }))) : null, this.state.type === 'Tags' ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Tag Name"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Tag Name",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    })) : null, this.state.type === 'Survey' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "file",
      className: "form-control",
      required: true,
      onChange: this.uploadImage
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Display Order"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 1,
      className: "form-control",
      name: "tab1",
      value: this.state.tab1,
      onChange: this.setMinNum,
      placeholder: "Display Order",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Display Status"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      name: "tab2",
      onChange: this.onChange,
      value: this.state.tab2
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Display Status"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Show"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Hide"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Survey Name"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Survey category Name",
      value: this.state.name,
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
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Update Basic here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      className: "modal-form",
      encType: "multipart/form-data",
      onSubmit: this.updateBasic
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type of Basic"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      name: "type",
      onChange: this.onChange,
      value: this.state.type,
      readOnly: true
    }, /*#__PURE__*/_react.default.createElement("option", null, this.state.type))), this.state.type === 'Publisher' ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Publisher name"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Publisher Name",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    })) : null, this.state.type === 'CouponType' ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Coupon Type"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Coupon Type",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    })) : null, this.state.type === 'Carousel' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "file",
      className: "form-control",
      required: true,
      onChange: this.uploadImage
    }), this.state.oldImage ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/basic/" + this.state.oldImage,
      className: "img-fluid tableImg"
    }) : null)) : null, this.state.type === 'Tags' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Tag Name"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Tag Name",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Tag Name"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Tag Name",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    }))) : null, this.state.type === 'Survey' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "file",
      className: "form-control",
      onChange: this.uploadImage
    }), this.state.oldImage ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/basic/" + this.state.oldImage,
      className: "img-fluid tableImg"
    }) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Display Order"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 1,
      className: "form-control",
      name: "tab1",
      value: this.state.tab1,
      onChange: this.setMinNum,
      placeholder: "Display Order",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Display Status"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      name: "tab2",
      onChange: this.onChange,
      value: this.state.tab2
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Display Status"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Show"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Hide"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Survey Name"), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      type: "text",
      className: "form-control",
      placeholder: "Survey category Name",
      value: this.state.name,
      required: true,
      onChange: this.onChange
    }))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null)))))));
  }

}

exports.Basic = Basic;
var _default = Basic;
exports.default = _default;