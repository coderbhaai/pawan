"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ShopCategory = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _Brands = _interopRequireDefault(require("../parts/Brands"));

var _NewsLetter = _interopRequireDefault(require("../parts/NewsLetter"));

class ShopCategory extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/categoryData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      const basic = [];
      body.data.filter(i => i.type == 'Category').forEach(i => {
        if (body.data.filter(j => j.type == 'SubCategory').filter(j => j.category == i.id).length) {
          var show = true;
        } else {
          var show = false;
        }

        basic.push({
          'id': i.id,
          'name': i.name,
          'url': i.url,
          'start': 0,
          'end': 4,
          'show': show
        });
      });
      this.setState({
        ads: body.ads,
        data: body.data,
        category: basic
      });
    });
    (0, _defineProperty2.default)(this, "downSlice", index => {
      if (this.state.category[index].start > 0) {
        this.state.category[index].start = this.state.category[index].start - 4;
        this.state.category[index].end = this.state.category[index].end - 4;
        this.setState({
          category: this.state.category
        });
      }
    });
    (0, _defineProperty2.default)(this, "upSlice", index => {
      const id = this.state.category[index].id;
      const count = this.state.category[index].end;

      if (this.state.data.filter(j => j.type == 'SubCategory').filter(i => i.category == id).length > count) {
        this.state.category[index].end = this.state.category[index].end + 4;
        this.state.category[index].start = this.state.category[index].start + 4;
        this.setState({
          category: this.state.category
        });
      }
    });
    this.state = {
      ads: this.props.ads,
      data: this.props.data,
      category: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid dailyRanking"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "All Categories & Sub Categories"), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 18) return i;
    }).slice(0, 2).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image,
      key: index,
      className: index == 0 ? "mb-3" : null
    })))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8 greyBg"
    }, this.state.category ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row catBox"
    }, this.state.category.filter(j => j.show).map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("h3", null, i.name), /*#__PURE__*/_react.default.createElement("ul", null, this.state.data.filter(j => j.type == 'SubCategory').filter(j => j.category == i.id).slice(i.start, i.end).map((j, index2) => /*#__PURE__*/_react.default.createElement("li", {
      key: index2
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/category/" + i.url
    }, j.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "leftRightArrow"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/leftArrowRed.svg",
      className: "rightArrow",
      onClick: () => this.downSlice(index)
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/rightArrowRed.svg",
      className: "rightArrow",
      onClick: () => this.upSlice(index)
    })))))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 19) return i;
    }).slice(0, 2).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image,
      key: index,
      className: index == 0 ? "mb-3" : null
    })))) : null))), /*#__PURE__*/_react.default.createElement(_NewsLetter.default, null), /*#__PURE__*/_react.default.createElement(_Brands.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.ShopCategory = ShopCategory;
var _default = ShopCategory;
exports.default = _default;