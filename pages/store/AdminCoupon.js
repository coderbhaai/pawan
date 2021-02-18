"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AdminCoupon = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _reactstrap = require("reactstrap");

var _axios = _interopRequireDefault(require("axios"));

var _moment = _interopRequireDefault(require("moment"));

var _semanticUiReact = require("semantic-ui-react");

const func = require('../parts/functions');

class AdminCoupon extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/couponData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        data: body.data,
        storeList: body.store,
        publisherList: body.publisher,
        categoryList: body.categoryList,
        couponTypeList: body.couponType,
        loading: false
      });
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
    (0, _defineProperty2.default)(this, "uploadImage", e => {
      this.setState({
        image: e.target.files[0]
      });
    });
    (0, _defineProperty2.default)(this, "resetData", () => {
      this.setState({
        addmodalIsOpen: false,
        editmodalIsOpen: false,
        store: '',
        title: '',
        url: '',
        category: '',
        publisher: '',
        commission: '',
        image: null,
        oldImageName: null,
        offer: '',
        cashback: '',
        status: '',
        start: '',
        expiry: '',
        coupon_type: '',
        selectedId: '',
        selectedTag: [],
        oldSelectedtags: []
      });
      window.scrollTo(0, 0);
    });
    (0, _defineProperty2.default)(this, "addSubmit", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('store', this.state.store);
      data.append('category', this.state.category);
      data.append('tags', JSON.stringify(this.state.selectedTag));
      data.append('title', this.state.title);
      data.append('url', this.state.url.replace(/ /g, "-"));
      data.append('publisher', this.state.publisher);
      data.append('commission', this.state.commission);
      data.append('image', this.state.image);
      data.append('offer', this.state.offer);
      data.append('cashback', this.state.cashback);
      data.append('status', this.state.status);
      data.append('start', this.state.start);
      data.append('expiry', this.state.expiry);
      data.append('coupon_type', this.state.coupon_type);

      _axios.default.post('/admin/addCoupon', data).catch(err => func.printError(err)).then(res => {
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
        store: i.store,
        category: i.category,
        title: i.title,
        url: i.url,
        publisher: i.publisher,
        commission: i.commission,
        oldImageName: i.image,
        offer: i.offer,
        cashback: i.cashback,
        status: i.status,
        start: i.start.split('T')[0],
        expiry: i.expiry.split('T')[0],
        coupon_type: i.coupon_type
      });
      const xx = [];
      JSON.parse(i.tags).forEach(i => {
        if (i == '1') {
          xx.push({
            text: 'Recommended',
            value: 1
          });
        } else if (i == '2') {
          xx.push({
            text: 'Special Offers',
            value: 2
          });
        } else if (i == '3') {
          xx.push({
            text: 'Staff Recommended',
            value: 3
          });
        } else if (i == '4') {
          xx.push({
            text: 'Daily Ranking',
            value: 4
          });
        }
      });
      this.setState({
        tagData: xx
      });
    });
    (0, _defineProperty2.default)(this, "updateSubmit", e => {
      e.preventDefault();
      const tagList = [];
      this.state.tagData.forEach(i => {
        tagList.push(i.value);
      });
      var finalTag = Array.from(new Set([...tagList, ...this.state.selectedTag]));
      const data = new FormData();
      data.append('id', this.state.selectedId);
      data.append('store', this.state.store);
      data.append('category', this.state.category);
      data.append('tags', JSON.stringify(finalTag));
      data.append('title', this.state.title);
      data.append('url', this.state.url.replace(/ /g, "-"));
      data.append('publisher', this.state.publisher);
      data.append('commission', this.state.commission);
      data.append('image', this.state.image);
      data.append('offer', this.state.offer);
      data.append('cashback', this.state.cashback);
      data.append('status', this.state.status);
      data.append('start', this.state.start);
      data.append('expiry', this.state.expiry);
      data.append('coupon_type', this.state.coupon_type);
      data.append('oldImageName', this.state.oldImageName);

      _axios.default.post('/admin/updateCoupon', data).catch(err => func.printError(err)).then(res => {
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

      _axios.default.post('/admin/changeCouponStatus', data).then(res => {
        if (res.data.success) {
          this.setState({
            data: this.state.data.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          });
        }

        func.callSwal(res.data.message);
      }).catch(err => func.printError(err));
    });
    (0, _defineProperty2.default)(this, "tagSelected", (e, {
      value
    }) => {
      this.setState({
        selectedTag: value
      });
    });
    this.state = {
      addmodalIsOpen: false,
      editmodalIsOpen: false,
      data: [],
      storeList: [],
      categoryList: [],
      publisherList: [],
      couponTypeList: [],
      selectedTag: [],
      oldSelectedtags: [],
      tagData: [],
      store: '',
      category: '',
      title: '',
      url: '',
      publisher: '',
      commission: '',
      image: null,
      oldImageName: null,
      offer: '',
      cashback: '',
      status: '',
      start: '',
      expiry: '',
      coupon_type: '',
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

  arrayTagRemove(index) {
    this.state.tagData.splice(index, 1);
    this.setState({
      tagData: this.state.tagData
    });
  }

  render() {
    const tagOptions = [{
      text: 'Recommended',
      value: 1
    }, {
      text: 'Special Offers',
      value: 2
    }, {
      text: 'Staff Recommended',
      value: 3
    }, {
      text: 'Daily Ranking',
      value: 4
    }];
    const {
      currentPage,
      itemsPerPage
    } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const renderItems = this.state.data.filter(i => {
      if (this.state.search == null) return i;else if (i.title.toLowerCase().includes(this.state.search.toLowerCase()) || i.status.toLowerCase().includes(this.state.search.toLowerCase())) {
        return i;
      }
    }).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
        href: i.url
      }, i.title)), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/store/coupon/" + i.image,
        className: "tableImg"
      })), /*#__PURE__*/_react.default.createElement("td", null, _moment.default.utc(i.start).format("DD MMMM  YYYY"), " - ", _moment.default.utc(i.expiry).format("DD MMMM  YYYY")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
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
    }, "Admin ( Coupon )"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "perPage"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Add Coupon here"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: this.addModalOn
    }, "Add Coupon")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Items per page"), /*#__PURE__*/_react.default.createElement("select", {
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
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sl no."), /*#__PURE__*/_react.default.createElement("td", null, "Title"), /*#__PURE__*/_react.default.createElement("td", null, "Icon"), /*#__PURE__*/_react.default.createElement("td", null, "Validity"), /*#__PURE__*/_react.default.createElement("td", null, "Status"), /*#__PURE__*/_react.default.createElement("td", null, "Edit"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "5",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.addmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Add Coupon Here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addSubmit
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Store Name"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "store",
      value: this.state.store,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Store"), this.state.storeList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Category Name"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "category",
      value: this.state.category,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Category"), this.state.categoryList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Publisher Name"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "publisher",
      value: this.state.publisher,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Publisher"), this.state.publisherList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
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
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Status"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "status",
      value: this.state.status,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Status"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Active"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Close"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Title Here",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Commission"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Commission Here",
      name: "commission",
      required: true,
      value: this.state.commission,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Cashback"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Cashback Here",
      name: "cashback",
      required: true,
      value: this.state.cashback,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Offer"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add offer Here",
      name: "offer",
      required: true,
      value: this.state.offer,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Start"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "date",
      name: "start",
      required: true,
      value: this.state.start,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Expiry"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "date",
      name: "expiry",
      required: true,
      value: this.state.expiry,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type of Coupon"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "coupon_type",
      value: this.state.coupon_type,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Type"), this.state.couponTypeList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadImage,
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12 compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Add Tags"), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select Tags",
      multiple: true,
      fluid: true,
      search: true,
      selection: true,
      onChange: this.tagSelected,
      options: tagOptions
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit"))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.editmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Update Coupon here "), /*#__PURE__*/_react.default.createElement("div", {
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
    }, /*#__PURE__*/_react.default.createElement("label", null, "Store Name"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "store",
      value: this.state.store,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Store"), this.state.storeList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Category Name"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "category",
      value: this.state.category,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Category"), this.state.categoryList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Publisher Name"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "publisher",
      value: this.state.publisher,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Publisher"), this.state.publisherList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
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
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Status"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "status",
      value: this.state.status,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Status"), /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "Active"), /*#__PURE__*/_react.default.createElement("option", {
      value: "0"
    }, "Close"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Title Here",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Commission"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Commission Here",
      name: "commission",
      required: true,
      value: this.state.commission,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Cashback"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Cashback Here",
      name: "cashback",
      required: true,
      value: this.state.cashback,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Offer"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add offer Here",
      name: "offer",
      required: true,
      value: this.state.offer,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Start"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "date",
      name: "start",
      required: true,
      value: this.state.start,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Expiry"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "date",
      name: "expiry",
      required: true,
      value: this.state.expiry,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Type of Coupon"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "coupon_type",
      value: this.state.coupon_type,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Type"), this.state.couponTypeList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadImage
    }), this.state.oldImageName ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/coupon/" + this.state.oldImageName,
      className: "img-fluid tableImg"
    }) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12 compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Add Tags"), this.state.tagData.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.tagData.map((i, index) => /*#__PURE__*/_react.default.createElement("span", {
      className: "ui label mr-3",
      key: index
    }, i.text, /*#__PURE__*/_react.default.createElement("i", {
      "aria-hidden": "true",
      className: "delete icon",
      onClick: () => this.arrayTagRemove(index)
    })))) : null, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select Tags",
      multiple: true,
      fluid: true,
      search: true,
      selection: true,
      onChange: this.tagSelected,
      options: tagOptions
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit"))))));
  }

}

exports.AdminCoupon = AdminCoupon;
var _default = AdminCoupon;
exports.default = _default;