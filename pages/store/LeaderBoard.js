"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LeaderBoard = void 0;

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

class LeaderBoard extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/adminLeaderBoard');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        data: body.data,
        userOptions: body.users,
        storeList: body.store,
        publisherList: body.publisher,
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
    (0, _defineProperty2.default)(this, "setMinNum", async e => {
      var data = await func.setMinNum(e);
      this.setState({
        [e.target.name]: data
      });
    });
    (0, _defineProperty2.default)(this, "userSelected", (e, {
      value
    }) => {
      this.setState({
        userId: value
      });
    });
    (0, _defineProperty2.default)(this, "resetData", () => {
      this.setState({
        addmodalIsOpen: false,
        editmodalIsOpen: false,
        userId: '',
        reward: '',
        points: '',
        description: '',
        store: '',
        publisher: '',
        date: '',
        amount: '',
        rewardPayout: '',
        customerPayout: '',
        selectedId: ''
      });
      window.scrollTo(0, 0);
    });
    (0, _defineProperty2.default)(this, "addSubmit", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('userId', this.state.userId);
      data.append('store', this.state.store);
      data.append('publisher', this.state.publisher);
      data.append('date', this.state.date);
      data.append('amount', this.state.amount);
      data.append('rewardPayout', this.state.rewardPayout);
      data.append('customerPayout', this.state.customerPayout);
      data.append('points', this.state.points);
      data.append('description', this.state.description);

      _axios.default.post('/admin/addCashback', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          this.state.data.some(el => el.id === res.data.data.id) ? this.setState({
            data: this.state.data.map(x => x.id === parseInt(res.data.data.id) ? x = res.data.data : x)
          }) : this.setState({
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
        selectedId: i.id
      });
    });
    (0, _defineProperty2.default)(this, "updateSubmit", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('id', this.state.selectedId);
      data.append('store', this.state.store);
      data.append('url', this.state.url.replace(/ /g, "-"));
      data.append('category', this.state.category);
      data.append('title', this.state.title);
      data.append('percent', this.state.percent);
      data.append('image', this.state.image);
      data.append('tagline', this.state.tagline);
      data.append('cutoff', this.state.cutoff);
      data.append('current_value', this.state.current_value);
      data.append('status', this.state.status);
      data.append('oldImageName', this.state.oldImageName);

      _axios.default.post('/admin/updateDeal', data).catch(err => func.printError(err)).then(res => {
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
      addmodalIsOpen: false,
      editmodalIsOpen: false,
      data: [],
      userOptions: [],
      storeList: [],
      publisherList: [],
      userId: '',
      reward: '',
      points: '',
      description: '',
      store: '',
      publisher: '',
      date: '',
      amount: '',
      rewardPayout: '',
      customerPayout: '',
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
      if (this.state.search == null) return i;else if (i.name.toLowerCase().includes(this.state.search.toLowerCase()) || i.email.toLowerCase().includes(this.state.search.toLowerCase())) {
        return i;
      }
    }).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, i.name, /*#__PURE__*/_react.default.createElement("br", null), i.email, " / ", i.phone), /*#__PURE__*/_react.default.createElement("td", null, i.reward), /*#__PURE__*/_react.default.createElement("td", null, i.redeemed), /*#__PURE__*/_react.default.createElement("td", null, i.total), /*#__PURE__*/_react.default.createElement("td", {
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
    }, "Admin ( LeaderBoard )"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "perPage"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Add Cashback here"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: this.addModalOn
    }, "Add Cashback")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Items per page"), /*#__PURE__*/_react.default.createElement("select", {
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
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sl no."), /*#__PURE__*/_react.default.createElement("td", null, "User"), /*#__PURE__*/_react.default.createElement("td", null, "Cashback won"), /*#__PURE__*/_react.default.createElement("td", null, "Redeemed"), /*#__PURE__*/_react.default.createElement("td", null, "Total"), /*#__PURE__*/_react.default.createElement("td", null, "Edit"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "6",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.addmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Add Cashback Here "), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeModal",
      onClick: this.resetData
    }, "X"), /*#__PURE__*/_react.default.createElement(_reactstrap.ModalBody, null, /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addSubmit
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 blogMeta compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", {
      className: "mb-0"
    }, "Select User"), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select User",
      fluid: true,
      search: true,
      selection: true,
      onChange: this.userSelected,
      options: this.state.userOptions
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Cashback Points"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 0,
      className: "form-control",
      name: "points",
      value: this.state.points,
      onChange: this.setMinNum,
      placeholder: "Add Cahback Points Here",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Description"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Desscription Here",
      name: "description",
      value: this.state.description,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
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
    }, /*#__PURE__*/_react.default.createElement("label", null, "Publisher"), /*#__PURE__*/_react.default.createElement("select", {
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
    }, /*#__PURE__*/_react.default.createElement("label", null, "Date"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "date",
      name: "date",
      required: true,
      value: this.state.date,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Amount"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 0,
      className: "form-control",
      name: "amount",
      value: this.state.amount,
      onChange: this.setMinNum,
      placeholder: "Enter Amount",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Reward Payout"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 0,
      className: "form-control",
      name: "rewardPayout",
      value: this.state.rewardPayout,
      onChange: this.setMinNum,
      placeholder: "Reward Payout",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Customer Payout"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 0,
      className: "form-control",
      name: "customerPayout",
      value: this.state.customerPayout,
      onChange: this.setMinNum,
      placeholder: "Customer Payout",
      required: true
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit"))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Modal, {
      isOpen: this.state.editmodalIsOpen,
      className: "adminModal"
    }, /*#__PURE__*/_react.default.createElement(_reactstrap.ModalHeader, null, " Update Deal here "), /*#__PURE__*/_react.default.createElement("div", {
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
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Title Here",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Percent"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 0,
      className: "form-control",
      name: "percent",
      value: this.state.percent,
      onChange: this.setMinNum,
      placeholder: "Add Percent Here",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Image"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadImage
    }), this.state.oldImageName ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/deal/" + this.state.oldImageName,
      className: "img-fluid tableImg"
    }) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Tagline"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Add Tagline Here",
      name: "tagline",
      required: true,
      value: this.state.tagline,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Cut off"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 0,
      className: "form-control",
      name: "cutoff",
      value: this.state.cutoff,
      onChange: this.setMinNum,
      placeholder: "Add Cutoff Here",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Current Value"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 0,
      className: "form-control",
      name: "current_value",
      value: this.state.current_value,
      onChange: this.setMinNum,
      placeholder: "Add Current Value Here",
      required: true
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit"))))));
  }

}

exports.LeaderBoard = LeaderBoard;
var _default = LeaderBoard;
exports.default = _default;