"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Stores = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _StoreSidebar = _interopRequireDefault(require("../parts/StoreSidebar"));

var _moment = _interopRequireDefault(require("moment"));

class Stores extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "changeActive", id => {
      this.setState({
        active: id
      });
    });
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const url = window.location.href.split("/").pop();
      const response = await fetch('/storeData/' + url);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        storeData: body.storeData,
        coupon: body.coupon,
        couponCopy: body.coupon,
        deal: body.deal,
        dealCopy: body.deal,
        store: body.store
      }, () => this.setAll());
    });
    (0, _defineProperty2.default)(this, "renderCoupon", i => {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "offer"
      }, /*#__PURE__*/_react.default.createElement("p", null, i.offer)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
        href: i.url
      }, /*#__PURE__*/_react.default.createElement("h3", null, i.title), /*#__PURE__*/_react.default.createElement("p", null, "Expires on ", (0, _moment.default)(i.expiry).format("DD MMMM  YYYY"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "showMore"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: i.url
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "casleyBtn"
      }, "Get the Deal")), /*#__PURE__*/_react.default.createElement("span", {
        onClick: () => this.showData(i.url)
      }, "Show More"))), /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/icons/scissor-red.svg",
        className: "scissor"
      })), i.url == this.state.show ? /*#__PURE__*/_react.default.createElement("p", {
        className: "desc"
      }, i.offer) : null);
    });
    (0, _defineProperty2.default)(this, "renderDeal", i => {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "offer"
      }, /*#__PURE__*/_react.default.createElement("p", null, "Upto ", /*#__PURE__*/_react.default.createElement("span", {
        className: "percent"
      }, i.percent, "%"), " Off")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
        href: i.url
      }, /*#__PURE__*/_react.default.createElement("h3", null, i.title), /*#__PURE__*/_react.default.createElement("p", null, i.tagline)), /*#__PURE__*/_react.default.createElement("div", {
        className: "showMore"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: i.url
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "casleyBtn"
      }, "Get the Deal")), /*#__PURE__*/_react.default.createElement("span", {
        onClick: () => this.showData(i.url)
      }, "Show More")), i.url == this.state.show ? /*#__PURE__*/_react.default.createElement("p", {
        className: "desc"
      }, i.cutoff) : null), /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/icons/scissor-red.svg",
        className: "scissor"
      }));
    });
    (0, _defineProperty2.default)(this, "callbackFunction", (childData1, childData2) => {
      this.setState({
        catSelected: childData1,
        storeSelected: childData2
      }, () => this.filterData());
    });
    (0, _defineProperty2.default)(this, "filterData", () => {
      if (!this.state.catSelected.length && !this.state.storeSelected.length) {
        this.resetAll();
      } else {
        if (this.state.catSelected.length) {
          this.setState({
            coupon: this.state.couponCopy.filter(i => this.state.catSelected.includes(i.category)),
            deal: this.state.dealCopy.filter(i => this.state.catSelected.includes(i.category))
          }, () => this.setAll());
        }

        if (this.state.storeSelected.length) {
          this.setState({
            coupon: this.state.couponCopy.filter(i => this.state.storeSelected.includes(i.store)),
            deal: this.state.dealCopy.filter(i => this.state.storeSelected.includes(i.store))
          }, () => this.setAll());
        }
      }
    });
    (0, _defineProperty2.default)(this, "resetAll", () => {
      this.setState({
        coupon: this.state.couponCopy,
        deal: this.state.dealCopy,
        all: [...this.state.couponCopy, ...this.state.dealCopy].map(a => ({
          sort: Math.random(),
          value: a
        })).sort((a, b) => a.sort - b.sort).map(a => a.value)
      });
    });
    (0, _defineProperty2.default)(this, "setAll", () => {
      this.setState({
        all: [...this.state.coupon, ...this.state.deal].map(a => ({
          sort: Math.random(),
          value: a
        })).sort((a, b) => a.sort - b.sort).map(a => a.value)
      });
    });
    this.state = {
      storeData: this.props.storeData,
      coupon: this.props.coupon,
      deal: this.props.deal,
      store: this.props.store,
      all: [],
      active: 'all',
      show: '',
      catSelected: [],
      storeSelected: [],
      couponCopy: [],
      dealCopy: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container my-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement(_StoreSidebar.default, {
      parentCallback: this.callbackFunction
    }), this.state.storeData ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, this.state.storeData.name), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-center"
    }, this.state.storeData.title), /*#__PURE__*/_react.default.createElement("div", {
      className: "row listFilter"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "recomStore col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("ul", null, this.state.coupon && this.state.coupon.length || this.state.deal && this.state.deal.length ? /*#__PURE__*/_react.default.createElement("li", {
      className: this.state.active == 'all' ? 'active' : null,
      onClick: () => this.changeActive('all')
    }, "All ", /*#__PURE__*/_react.default.createElement("span", null, "(", this.state.coupon.length + this.state.deal.length, ")")) : null, this.state.coupon && this.state.coupon.length ? /*#__PURE__*/_react.default.createElement("li", {
      className: this.state.active == 'coupon' ? 'active' : null,
      onClick: () => this.changeActive('coupon')
    }, "Coupon ", /*#__PURE__*/_react.default.createElement("span", null, "(", this.state.coupon.length, ")")) : null, this.state.deal && this.state.deal.length ? /*#__PURE__*/_react.default.createElement("li", {
      className: this.state.active == 'deal' ? 'active' : null,
      onClick: () => this.changeActive('deal')
    }, "Deal ", /*#__PURE__*/_react.default.createElement("span", null, "(", this.state.deal.length, ")")) : null, this.state.store && this.state.store.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
      className: "storeImg"
    }, "Recommended Stores", this.state.store.map((i, index) => /*#__PURE__*/_react.default.createElement("span", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/store" + i.url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/logo/" + i.logo
    })))))) : null))), /*#__PURE__*/_react.default.createElement("div", {
      className: "dealData"
    }, this.state.active == 'all' && this.state.all ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.all.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.all.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6",
      key: index
    }, i.type == 'coupon' ? this.renderCoupon(i) : i.type == 'deal' ? this.renderDeal(i) : null))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "w-100"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "No Products for these filters"))) : this.state.active == 'coupon' && this.state.coupon ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.coupon.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.coupon.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6",
      key: index
    }, this.renderCoupon(i)))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "w-100"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "No Products for these filters"))) : this.state.active == 'deal' && this.state.deal ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.deal.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.deal.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6",
      key: index
    }, this.renderDeal(i)))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "w-100"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "No Products for these filters"))) : null)) : null)), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.Stores = Stores;
var _default = Stores;
exports.default = _default;