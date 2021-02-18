"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AdminCategory = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _reactstrap = require("reactstrap");

var _axios = _interopRequireDefault(require("axios"));

var _semanticUiReact = require("semantic-ui-react");

const func = require('../parts/functions');

class AdminCategory extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/fetchCategory');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      const sub = [];
      body.data.filter(i => i.type == 'Category').forEach(i => {
        sub.push({
          'text': i.name,
          'value': i.id
        });
      });
      this.setState({
        data: body.data,
        catOptions: sub,
        loading: false
      }, () => this.setDuplicate());
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
    (0, _defineProperty2.default)(this, "uploadIcon", e => {
      this.setState({
        icon: e.target.files[0]
      });
    });
    (0, _defineProperty2.default)(this, "uploadBanner", e => {
      this.setState({
        banner: e.target.files[0]
      });
    });
    (0, _defineProperty2.default)(this, "setMinNum", async e => {
      var data = await func.setMinNum(e);
      this.setState({
        display_order: data
      });
    });
    (0, _defineProperty2.default)(this, "catSelected", (e, {
      value
    }) => {
      this.setState({
        selectedCat: value
      });
    });
    (0, _defineProperty2.default)(this, "setDuplicate", async () => {
      var orderList = [];
      this.state.data.filter(i => i.type == 'Category').forEach(i => {
        orderList.push(i.display_order);
      });
      var data = await func.checkDuplicate(orderList);
      this.setState({
        duplicate: data.dup
      });
    });
    (0, _defineProperty2.default)(this, "resetData", () => {
      this.setState({
        addmodalIsOpen: false,
        editmodalIsOpen: false,
        type: '',
        name: '',
        url: '',
        title: '',
        icon: null,
        oldIconName: null,
        status: '',
        display_order: '',
        banner: null,
        previewBanner: null,
        oldBannerName: null,
        selectedId: '',
        selectedCat: '',
        category: ''
      });
      window.scrollTo(0, 0);
    });
    (0, _defineProperty2.default)(this, "addSubmit", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('type', this.state.type);
      data.append('name', this.state.name);
      data.append('category', this.state.selectedCat);
      data.append('url', this.state.url.replace(/ /g, "-"));
      data.append('title', this.state.title);
      data.append('icon', this.state.icon);
      data.append('status', this.state.status);
      data.append('display_order', this.state.display_order);
      data.append('banner', this.state.banner);

      _axios.default.post('/admin/addCategory', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            data: [...this.state.data, res.data.data]
          }, () => this.setDuplicate());
        }

        if (res.data.data.type == 'Category') {
          this.state.catOptions.push({
            'text': res.data.data.name,
            'value': res.data.data.id
          });
          this.setState({
            catOptions: this.state.catOptions
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
        type: i.type,
        name: i.name,
        url: i.url,
        title: i.title,
        status: i.status,
        display_order: i.display_order,
        oldIconName: i.icon,
        oldBannerName: i.banner,
        category: i.category,
        oldCategory: i.category,
        selectedCat: i.category
      });
    });
    (0, _defineProperty2.default)(this, "updateSubmit", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('id', this.state.selectedId);
      data.append('type', this.state.type);
      data.append('name', this.state.name);
      data.append('category', this.state.selectedCat);
      data.append('url', this.state.url.replace(/ /g, "-"));
      data.append('title', this.state.title);
      data.append('icon', this.state.icon);
      data.append('status', this.state.status);
      data.append('display_order', this.state.display_order);
      data.append('banner', this.state.banner);
      data.append('oldIconName', this.state.oldIconName);
      data.append('oldBannerName', this.state.oldBannerName);

      _axios.default.post('/admin/updateCategory', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.setState({
            data: this.state.data.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          }, () => this.setDuplicate());
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

      _axios.default.post('/admin/changeCategoryStatus', data).then(res => {
        if (res.data.success) {
          this.setState({
            data: this.state.data.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          });
        }

        func.callSwal(res.data.message);
      }).catch(err => func.printError(err));
    });
    this.state = {
      addmodalIsOpen: false,
      editmodalIsOpen: false,
      catOptions: [],
      selectedCat: '',
      data: [],
      type: '',
      name: '',
      url: '',
      title: '',
      icon: null,
      oldIconName: null,
      status: '',
      display_order: '',
      banner: null,
      previewBanner: null,
      oldBannerName: null,
      selectedId: '',
      search: '',
      currentPage: 1,
      itemsPerPage: 100,
      loading: true,
      duplicate: [],
      category: '',
      oldCategory: ''
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
      if (this.state.search == null) return i;else if (i.name.toLowerCase().includes(this.state.search.toLowerCase()) || i.title.toLowerCase().includes(this.state.search.toLowerCase())) {
        return i;
      }
    }).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, i.type), /*#__PURE__*/_react.default.createElement("td", null, i.name, /*#__PURE__*/_react.default.createElement("br", null), i.url), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/category/icon/" + i.icon,
        className: "tableImg"
      })), /*#__PURE__*/_react.default.createElement("td", null, i.display_order), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "onoffswitch"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: "category",
        className: "onoffswitch-checkbox",
        id: 'Switch-' + i.url,
        onChange: e => this.changeStatus(i.id, e.target.value),
        value: i.status,
        checked: i.status == 1 ? true : false
      }), /*#__PURE__*/_react.default.createElement("label", {
        className: "onoffswitch-label",
        htmlFor: 'Switch-' + i.url
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
    }, "Admin ( Category )"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "perPage"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Add Category here"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: this.addModalOn
    }, "Add Category")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Items per page"), /*#__PURE__*/_react.default.createElement("select", {
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
    }, renderPagination, " ")))), this.state.duplicate.length ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Note: "), " Duplicate display orders in the list at order ", this.state.duplicate.map((i, index) => /*#__PURE__*/_react.default.createElement("strong", {
      key: index
    }, " ", i, " ", index < this.state.duplicate.length - 1 ? ', ' : null)), " ") : null, /*#__PURE__*/_react.default.createElement("table", {
      className: "table table-hover table-responsive"
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sl no."), /*#__PURE__*/_react.default.createElement("td", null, "Type"), /*#__PURE__*/_react.default.createElement("td", null, "Name | URL"), /*#__PURE__*/_react.default.createElement("td", null, "Icon"), /*#__PURE__*/_react.default.createElement("td", null, "Order"), /*#__PURE__*/_react.default.createElement("td", null, "Status"), /*#__PURE__*/_react.default.createElement("td", null, "Edit"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "8",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.addmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Add Meta Tags Here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addSubmit
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "type",
      required: true,
      value: this.state.type,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Type"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Category"
    }, "Category"), /*#__PURE__*/_react.default.createElement("option", {
      value: "SubCategory"
    }, "Sub Category"))), this.state.type == 'SubCategory' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3 compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Select Category"), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select Category",
      fluid: true,
      search: true,
      selection: true,
      onChange: this.catSelected,
      options: this.state.catOptions,
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Sub Category Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Name of sub category",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.onChange
    }))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Category Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Name of category",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "URL"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "URL of Page",
      name: "url",
      required: true,
      value: this.state.url,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Icon"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadIcon,
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Banner"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadBanner,
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Display Order"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 1,
      className: "form-control",
      name: "display_order",
      value: this.state.display_order,
      onChange: this.setMinNum,
      placeholder: "Display Order",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("textarea", {
      className: "form-control",
      type: "text",
      placeholder: "Add Title Here",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit"))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.editmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Update Meta Tags here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      className: "modal-form",
      encType: "multipart/form-data",
      onSubmit: this.updateSubmit
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "type",
      required: true,
      value: this.state.type,
      readOnly: true
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Type"), /*#__PURE__*/_react.default.createElement("option", {
      value: "Category"
    }, "Category"), /*#__PURE__*/_react.default.createElement("option", {
      value: "SubCategory"
    }, "Sub Category"))), this.state.type == 'SubCategory' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3 compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Selected Category -  ", this.state.data.filter(i => i.id == this.state.oldCategory).map((j, index) => /*#__PURE__*/_react.default.createElement("span", {
      style: {
        margin: 0
      }
    }, j.name)), " "), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select Category",
      fluid: true,
      search: true,
      selection: true,
      onChange: this.catSelected,
      options: this.state.catOptions,
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Sub Category Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Name of sub category",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.onChange
    }))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Category Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Name of category",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "URL"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "URL of Page",
      name: "url",
      required: true,
      value: this.state.url,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Icon"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadIcon
    }), this.state.oldIconName ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/category/icon/" + this.state.oldIconName,
      className: "img-fluid tableImg"
    }) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Banner"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadBanner
    }), this.state.oldBannerName ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/category/banner/" + this.state.oldBannerName,
      className: "img-fluid tableImg"
    }) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Display Order"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 1,
      className: "form-control",
      name: "display_order",
      value: this.state.display_order,
      onChange: this.setMinNum,
      placeholder: "Display Order",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("textarea", {
      className: "form-control",
      type: "text",
      placeholder: "Add Title Here",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null)))))));
  }

}

exports.AdminCategory = AdminCategory;
var _default = AdminCategory;
exports.default = _default;