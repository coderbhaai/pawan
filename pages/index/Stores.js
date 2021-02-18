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

const func = require('../parts/functions');

class Stores extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/allStoreData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        data: body.data,
        dataCopy: body.data
      });
    });
    (0, _defineProperty2.default)(this, "callbackFunction", (childData1, childData2) => {
      this.setState({
        catSelected: childData1 // storeSelected:          childData2

      }, () => this.filterData());
    });
    (0, _defineProperty2.default)(this, "filterData", () => {
      if (!this.state.catSelected.length && !this.state.storeSelected.length) {
        // this.resetAll()
        this.setState({
          data: this.state.dataCopy
        });
      } else {
        if (this.state.catSelected.length) {
          this.setState({
            data: this.state.dataCopy.filter(i => this.state.catSelected.includes(i.category)) // coupon:                 this.state.couponCopy.filter(i=> this.state.catSelected.includes(i.category)),
            // deal:                   this.state.dealCopy.filter(i=> this.state.catSelected.includes(i.category))

          } // ,()=>this.setAll()
          );
        } // if(this.state.storeSelected.length){
        //     this.setState({
        //         coupon:                 this.state.couponCopy.filter(i=> this.state.storeSelected.includes(i.store)),
        //         deal:                   this.state.dealCopy.filter(i=> this.state.storeSelected.includes(i.store))
        //     },()=>this.setAll())
        // }

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
    (0, _defineProperty2.default)(this, "activeChange", id => {
      this.setState({
        active: id
      });

      if (id == '0') {
        this.setState({
          data: this.state.dataCopy
        });
      } else {
        var xx = [];
        this.state.dataCopy.forEach(i => {
          if (i.name.toLowerCase().indexOf(id) === 0) {
            xx.push(i);
          }
        });
        this.setState({
          data: xx
        });
      }
    });
    this.state = {
      data: this.props.data,
      dataCopy: [],
      catSelected: [],
      storeSelected: [],
      active: "0"
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
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/_react.default.createElement("h4", null, "All Stores"), /*#__PURE__*/_react.default.createElement("ul", {
      className: "alphabet"
    }, func.storeFilter.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: this.state.active == i.value ? 'active' : null,
      onClick: () => this.activeChange(i.value)
    }, " ", i.text, " "))), this.state.data ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row storesData"
    }, this.state.data.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4",
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/store/" + i.url
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/logo/" + i.logo
    }), /*#__PURE__*/_react.default.createElement("p", null, i.name), /*#__PURE__*/_react.default.createElement("p", {
      className: "cashback"
    }, "Upto ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, i.cashback), "Cashback"), /*#__PURE__*/_react.default.createElement("p", {
      className: "getDeal"
    }, "GET THE DEALS")))))) : null))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.Stores = Stores;
var _default = Stores;
exports.default = _default;