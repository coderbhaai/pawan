"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Header = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _sweetalert = _interopRequireDefault(require("sweetalert"));

var _DropStores = _interopRequireDefault(require("./DropStores"));

var _axios = _interopRequireDefault(require("axios"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

const func = require('./functions');

class Header extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/headerData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      const basic = [];
      body.basicList.forEach(i => {
        i.start = 0;
        i.end = 3;
        basic.push(i);
      });
      this.setState({
        basicList: basic,
        storeList: body.storeList,
        ads: body.ads,
        categories: body.categories,
        recomStores: body.recomStores // loading:                    false

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
    (0, _defineProperty2.default)(this, "toSentenceCase", str => {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    });
    (0, _defineProperty2.default)(this, "logout", e => {
      e.preventDefault();

      _axios.default.post('/auth/logOut').then(res => {
        if (res.data.success) {
          localStorage.clear();
          this.setState({
            user: []
          });
          localStorage.setItem('message', res.data.message);
          window.location.href = '/login';
        }
      }).catch(err => func.printError(err));
    });
    this.state = {
      user: [],
      basicList: [],
      storeList: [],
      ads: [],
      categories: [],
      recomStores: []
    };
  }

  componentDidMount() {
    if (typeof Storage !== "undefined" && localStorage.getItem('message')) {
      (0, _sweetalert.default)({
        title: localStorage.getItem('message'),
        timer: 4000
      });
      setTimeout(function () {
        localStorage.removeItem('message');
      }, 4000);
    }

    if (typeof Storage !== "undefined") {
      this.setState({
        user: JSON.parse(localStorage.getItem('user')) || []
      });
    }

    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !this.state.user.role ? /*#__PURE__*/_react.default.createElement("div", {
      className: "topRow"
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/login"
    }, "Login"), " / ", /*#__PURE__*/_react.default.createElement("a", {
      href: "/register"
    }, "SignUp"))) : null, /*#__PURE__*/_react.default.createElement("nav", {
      className: "navbar sticky-top"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "logo",
      href: "/"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/logo.png"
    })), /*#__PURE__*/_react.default.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavDropdown",
      "aria-controls": "navbarNavDropdown",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "navbar-toggler-icon"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbarNavDropdown"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "navbar-nav"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "searchInput",
      placeholder: "Search.."
    }), /*#__PURE__*/_react.default.createElement("div", {
      id: "submitsearch"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Search"))), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link",
      href: "/shop"
    }, "Shop")), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item dropdown"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "nav-link changeCategory"
    }, "Categories"), /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown-menu swiperInDropDown showCategoryMenu",
      "aria-labelledby": "navbarDropdown"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "headerCatBox row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Categories"), /*#__PURE__*/_react.default.createElement("ul", null, this.state.categories.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      // href={"/store/"+i.url}
      href: "#"
    }, i.name)))), /*#__PURE__*/_react.default.createElement("a", {
      href: "#",
      className: "viewAll"
    }, "View All categories")), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Recommended Stores"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", null, this.state.recomStores.slice(0, 4).map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, /*#__PURE__*/_react.default.createElement("p", null, i.name), /*#__PURE__*/_react.default.createElement("p", null, "Upto ", i.cashback, " cashback"))))), /*#__PURE__*/_react.default.createElement("ul", null, this.state.recomStores.slice(0, 4).map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, /*#__PURE__*/_react.default.createElement("p", null, i.name), /*#__PURE__*/_react.default.createElement("p", null, "Upto ", i.cashback, " cashback"))))), /*#__PURE__*/_react.default.createElement("ul", null, this.state.recomStores.slice(0, 4).map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, /*#__PURE__*/_react.default.createElement("p", null, i.name), /*#__PURE__*/_react.default.createElement("p", null, "Upto ", i.cashback, " cashback")))))))))), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item dropdown"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "nav-link changeStore"
    }, "Stores"), /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown-menu swiperInDropDown showStoreMenu",
      "aria-labelledby": "navbarDropdown"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "linkBox mb-3"
    }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.paramHeader, this.state.basicList.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "shopBox",
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("h3", null, i.name), this.state.storeList.slice(i.start, i.end).map((j, index2) => /*#__PURE__*/_react.default.createElement("div", {
      key: index2
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/shop/" + j.url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/logo/" + j.logo
    }), /*#__PURE__*/_react.default.createElement("p", {
      className: "cashback"
    }, "Upto ", j.cashback, " cashback")), /*#__PURE__*/_react.default.createElement("hr", null))), /*#__PURE__*/_react.default.createElement("div", {
      className: "leftRightArrow"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/leftArrowRed.svg",
      className: "rightArrow",
      onClick: () => this.downSlice(index)
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/rightArrowRed.svg",
      className: "rightArrow",
      onClick: () => this.upSlice(index)
    }))))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "headerImgBox"
    }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.paramAdsHeader, this.state.ads.filter(i => i.type == 20).map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image
    }))))))), /*#__PURE__*/_react.default.createElement("li", {
      style: {
        color: '#fff'
      }
    }, " | "), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item active"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link",
      href: "#"
    }, "Shopping Assistant")), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link",
      href: "/"
    }, "Navneet", /*#__PURE__*/_react.default.createElement("br", null), "\u20B9 5000")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
      className: "secondBtn",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavDropdown2",
      "aria-controls": "navbarNavDropdown2",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "navbar-toggler-icon"
    }))))), this.state.user.role ? /*#__PURE__*/_react.default.createElement("ul", {
      className: "collapse secondNav",
      id: "navbarNavDropdown2"
    }, this.state.user.role === "Admin" ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link",
      href: "/admin/admin"
    }, "Admin Panel"))) : this.state.user.role === "User" ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link",
      href: "/user/refer-and-earn"
    }, "Refer & Earn")), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link",
      href: "/user/your-surveys"
    }, "YourSurveys"))) : null, /*#__PURE__*/_react.default.createElement("li", {
      className: "dropdown-item logout",
      onClick: this.logout
    }, "Log Out")) : null));
  }

}

exports.Header = Header;
var _default = Header;
exports.default = _default;