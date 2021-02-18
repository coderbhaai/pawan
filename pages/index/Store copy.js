"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Store = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _moment = _interopRequireDefault(require("moment"));

class Store extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const url = window.location.href.split("/").pop();

      if (url == 'stores') {
        var api = '/allStoreData';
      } else {
        var api = '/storeData/' + url;
      }

      const response = await fetch(api);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        coupon: body.coupon,
        deal: body.deal,
        all: [...body.coupon, ...body.deal].map(a => ({
          sort: Math.random(),
          value: a
        })).sort((a, b) => a.sort - b.sort).map(a => a.value),
        store: body.store
      });
    });
    (0, _defineProperty2.default)(this, "changeActive", id => {
      this.setState({
        active: id
      });
    });
    (0, _defineProperty2.default)(this, "showData", url => {
      if (this.state.show == url) {
        this.setState({
          show: ''
        });
      } else {
        this.setState({
          show: url
        });
      }
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
      }, "Show More")))), i.url == this.state.show ? /*#__PURE__*/_react.default.createElement("p", {
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
      }, i.cutoff) : null));
    });
    this.state = {
      store: this.props.store,
      coupon: this.props.coupon,
      deal: this.props.deal,
      all: [this.props.coupon, this.props.deal],
      active: 'all',
      show: ''
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
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3 storeSidebar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filter"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filterHead"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Categories"), /*#__PURE__*/_react.default.createElement("span", null, "Clear All")), this.state.coupon ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.coupon.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "filterCover",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "onoffswitch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: "category",
      className: "onoffswitch-checkbox",
      id: i.tab1,
      onChange: e => this.filterCategory(e.target.value, e.target.checked),
      value: i.tab1,
      checked: i.isChecked
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "onoffswitch-label",
      htmlFor: i.tab1
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-inner"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-switch"
    }))), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        marginLeft: '10px'
      }
    }, i.title)))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "filter"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filterHead"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Store"), /*#__PURE__*/_react.default.createElement("span", null, "Clear All")), this.state.coupon ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.coupon.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "filterCover",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "onoffswitch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: "category",
      className: "onoffswitch-checkbox",
      id: i.tab1,
      onChange: e => this.filterCategory(e.target.value, e.target.checked),
      value: i.tab1,
      checked: i.isChecked
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "onoffswitch-label",
      htmlFor: i.tab1
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-inner"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-switch"
    }))), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        marginLeft: '10px'
      }
    }, i.name)))) : null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "Fashion & Lifestyle Discount Coupons & Offers"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-center"
    }, "Save with active lifestyle discount promo coupon codes at RewardEagle.com."), /*#__PURE__*/_react.default.createElement("div", {
      className: "row listFilter"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("ul", null, this.state.coupon && this.state.deal && this.state.deal.length && this.state.coupon.length ? /*#__PURE__*/_react.default.createElement("li", {
      className: this.state.active == 'all' ? 'active' : null,
      onClick: () => this.changeActive('all')
    }, "All (", this.state.coupon.length + this.state.deal.length, ")") : null, this.state.coupon && this.state.coupon.length ? /*#__PURE__*/_react.default.createElement("li", {
      className: this.state.active == 'coupon' ? 'active' : null,
      onClick: () => this.changeActive('coupon')
    }, "Coupon (", this.state.coupon.length, ")") : null, this.state.deal && this.state.deal.length ? /*#__PURE__*/_react.default.createElement("li", {
      className: this.state.active == 'deal' ? 'active' : null,
      onClick: () => this.changeActive('deal')
    }, "Deal (", this.state.deal.length, ")") : null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Recommended Stores"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Recommended Stores")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "dealData"
    }, this.state.active == 'all' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.all[0] && this.state.all.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.all.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6",
      key: index
    }, i.type == 'coupon' ? this.renderCoupon(i) : i.type == 'deal' ? this.renderDeal(i) : null))) : null) : this.state.active == 'coupon' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.coupon ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.coupon.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6",
      key: index
    }, this.renderCoupon(i)))) : null) : this.state.active == 'deal' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.deal ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.deal.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6",
      key: index
    }, this.renderDeal(i)))) : null) : null)))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.Store = Store;
var _default = Store;
exports.default = _default;