"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StoreSidebar = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

class StoreSidebar extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/storeSidebar');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      const store = [];
      body.store.forEach(i => {
        i.isChecked = false;
        store.push(i);
      });
      const categories = [];
      body.categories.forEach(i => {
        i.isChecked = false;
        categories.push(i);
      });
      this.setState({
        store: store,
        categories: categories
      });
    });
    (0, _defineProperty2.default)(this, "filterCategory", (index, check) => {
      this.state.categories[index].isChecked = check;
      const id = this.state.categories[index].id;
      this.setState({
        categories: this.state.categories
      });

      if (check) {
        this.setState({
          catSelected: [...this.state.catSelected, id]
        }, () => this.sendDataToParent());
      } else {
        this.setState({
          catSelected: this.state.catSelected.filter(i => i !== id)
        }, () => this.sendDataToParent());
      }
    });
    (0, _defineProperty2.default)(this, "filterStore", (index, check) => {
      this.state.store[index].isChecked = check;
      const id = this.state.store[index].id;
      this.setState({
        store: this.state.store
      });

      if (check) {
        this.setState({
          storeSelected: [...this.state.storeSelected, id]
        }, () => this.sendDataToParent());
      } else {
        this.setState({
          storeSelected: this.state.storeSelected.filter(i => i !== id)
        }, () => this.sendDataToParent());
      }
    });
    (0, _defineProperty2.default)(this, "sendDataToParent", () => {
      this.props.parentCallback(this.state.catSelected, this.state.storeSelected);
    });
    this.state = {
      store: this.props.store,
      categories: this.props.categories,
      catSelected: [],
      storeSelected: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3 storeSidebar"
    }, this.state.categories ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.categories.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "filter"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filterHead"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Categories"), /*#__PURE__*/_react.default.createElement("span", null, "Clear All")), this.state.categories.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "filterCover",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "onoffswitch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: "category",
      className: "onoffswitch-checkbox",
      id: 'cat-' + index,
      onChange: e => this.filterCategory(index, e.target.checked),
      value: index,
      checked: i.isChecked
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "onoffswitch-label",
      htmlFor: 'cat-' + index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-inner"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-switch"
    }))), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        marginLeft: '10px'
      }
    }, i.name)))) : null) : null, this.state.store ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.store.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "filter"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filterHead"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Store"), /*#__PURE__*/_react.default.createElement("span", null, "Clear All")), this.state.store.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "filterCover",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "onoffswitch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: "store",
      className: "onoffswitch-checkbox",
      id: 'store' + index,
      onChange: e => this.filterStore(index, e.target.checked),
      value: index,
      checked: i.isChecked
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "onoffswitch-label",
      htmlFor: 'store' + index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-inner"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-switch"
    }))), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        marginLeft: '10px'
      }
    }, i.name)))) : null) : null);
  }

}

exports.StoreSidebar = StoreSidebar;
var _default = StoreSidebar;
exports.default = _default;