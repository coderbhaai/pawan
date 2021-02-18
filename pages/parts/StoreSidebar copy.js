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
      const url = window.location.href.split("/").pop();

      if (url == 'stores') {
        var api = '/allStoreData';
      } else {
        var api = '/storeData/' + url;
      }

      const response = await fetch(api);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      const store = [];
      body.store.forEach(i => {
        i.checked = false;
        store.push(i);
      });
      const categories = [];
      body.categories.forEach(i => {
        i.checked = false;
        categories.push(i);
      });
      this.setState({
        store: store,
        categories: categories
      });
    });
    (0, _defineProperty2.default)(this, "filterCategory", (cat, check) => {
      if (cat !== this.state.catSelected) {
        this.setState({
          subCatSelected: ''
        });
      }

      this.state.categories.forEach(o => {
        if (o.tab1 == cat) {
          o.isChecked = check;
        } else {
          o.isChecked = false;
        }
      });
      this.setState({
        categories: this.state.categories
      });

      if (check) {
        this.setState({
          catSelected: cat
        }, () => this.catSelected(cat));
      } else {
        this.setState({
          catSelected: '',
          subCategories: [],
          subCatSelected: ''
        }, () => this.finalFilter());
      }
    });
    this.state = {
      store: this.props.store,
      categories: this.props.categories
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3 storeSidebar"
    }, this.props.categories ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.categories.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "filter"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filterHead"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Categories"), /*#__PURE__*/_react.default.createElement("span", null, "Clear All")), this.props.categories.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "filterCover",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "onoffswitch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: "category",
      className: "onoffswitch-checkbox",
      id: i.id,
      onChange: e => this.filterCategory(e.target.value, e.target.checked),
      value: i.id,
      checked: i.isChecked
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "onoffswitch-label",
      htmlFor: i.id
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-inner"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "onoffswitch-switch"
    }))), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        marginLeft: '10px'
      }
    }, i.name)))) : null) : null, this.props.store ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.store.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "filter"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filterHead"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Store"), /*#__PURE__*/_react.default.createElement("span", null, "Clear All")), this.props.store.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "filterCover",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "onoffswitch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: "store",
      className: "onoffswitch-checkbox",
      id: i.id,
      onChange: e => this.filterStore(e.target.value, e.target.checked),
      value: i.id,
      checked: i.isChecked
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "onoffswitch-label",
      htmlFor: i.id
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