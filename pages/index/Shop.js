"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Shop = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _Brands = _interopRequireDefault(require("../parts/Brands"));

var _NewsLetter = _interopRequireDefault(require("../parts/NewsLetter"));

var _RecommendedAds = _interopRequireDefault(require("../parts/RecommendedAds"));

const func = require('../parts/functions');

class Shop extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/shopData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      const basic = [];
      body.basicList.forEach(i => {
        basic.push({
          'id': i.id,
          'name': i.name,
          'start': 0,
          'end': 4
        });
      });
      this.setState({
        ads: body.ads,
        basicList: basic,
        storeList: body.storeList
      });
    });
    (0, _defineProperty2.default)(this, "downSlice", index => {
      if (this.state.basicList[index].start > 0) {
        this.state.basicList[index].start = this.state.basicList[index].start - 4;
        this.state.basicList[index].end = this.state.basicList[index].end - 4;
        this.setState({
          basicList: this.state.basicList
        });
      }
    });
    (0, _defineProperty2.default)(this, "upSlice", index => {
      const id = this.state.basicList[index].id;
      const count = this.state.basicList[index].end;

      if (this.state.storeList.filter(i => JSON.parse(i.tags).includes(id)).length > count) {
        this.state.basicList[index].end = this.state.basicList[index].end + 4;
        this.state.basicList[index].start = this.state.basicList[index].start + 4;
        this.setState({
          basicList: this.state.basicList
        });
      }
    });
    this.state = {
      ads: this.props.ads,
      basicList: this.props.basicList,
      storeList: this.props.storeList
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
    }, "Top Offers"), /*#__PURE__*/_react.default.createElement("p", {
      className: "headingPara"
    }, "Browse our best offers, including cashback deals increased for Limited time only"), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 14 || i.type == 15) return i;
    }).slice(0, 2).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image,
      key: index,
      className: index == 0 ? "mb-3" : null
    })))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8 doubleListdata"
    }, this.state.storeList && this.state.basicList ? /*#__PURE__*/_react.default.createElement("div", {
      className: "row shopBox"
    }, this.state.basicList.map((i, index) =>
    /*#__PURE__*/
    // this.state.storeList.filter().length ?
    _react.default.createElement("div", {
      className: "col-sm-4",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("h3", null, i.name), this.state.storeList.slice(i.start, i.end).map((j, index2) => /*#__PURE__*/_react.default.createElement("a", {
      href: "/shop/" + j.url,
      key: index2
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/logo/" + j.logo
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "arrowBox"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, j.tagline), /*#__PURE__*/_react.default.createElement("p", {
      className: "cashback"
    }, "Upto ", j.cashback, " cashback")), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/rightArrow.svg",
      className: "rightArrow"
    })), /*#__PURE__*/_react.default.createElement("hr", null))), /*#__PURE__*/_react.default.createElement("div", {
      className: "leftRightArrow"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/leftArrowRed.svg",
      className: "rightArrow",
      onClick: () => this.downSlice(index)
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/rightArrowRed.svg",
      className: "rightArrow",
      onClick: () => this.upSlice(index)
    })))) // : null
    )) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 16 || i.type == 17) return i;
    }).slice(0, 2).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image,
      key: index,
      className: index == 0 ? "mb-3" : null
    })))) : null))), this.state.ads ? /*#__PURE__*/_react.default.createElement(_RecommendedAds.default, {
      title: "Today\u2019s Recommended Advertisments",
      ads: this.state.ads
    }) : null, /*#__PURE__*/_react.default.createElement(_NewsLetter.default, null), /*#__PURE__*/_react.default.createElement(_Brands.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.Shop = Shop;
var _default = Shop;
exports.default = _default;