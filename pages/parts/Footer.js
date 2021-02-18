"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Footer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

class Footer extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/footerData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        store: body.store,
        coupon: body.coupon,
        deal: body.deal
      });
    });
    this.state = {
      store: [],
      coupon: [],
      deal: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid py-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Stores"), /*#__PURE__*/_react.default.createElement("ul", null, this.state.store.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, i.name))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Coupons"), /*#__PURE__*/_react.default.createElement("ul", null, this.state.coupon.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, i.title))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Deals"), /*#__PURE__*/_react.default.createElement("ul", null, this.state.deal.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, i.title))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Important Links"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/"
    }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/blog"
    }, "Blog")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/shop"
    }, "Shop")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/faq"
    }, "FAQ")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/about-us"
    }, "About Us")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/contact-us"
    }, "Contact Us")))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "social"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "social-container"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "social-icons"
    }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/facebook-white.svg",
      className: "first"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/facebook.svg",
      className: "second"
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/linkedin-white.svg",
      className: "first"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/linkedin.svg",
      className: "second"
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/twitter-white.svg",
      className: "first"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/twitter.svg",
      className: "second"
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/instagram-white.svg",
      className: "first"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/instagram.svg",
      className: "second"
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/whatsapp-white.svg",
      className: "first"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/whatsapp-button.svg",
      className: "second"
    }))))), /*#__PURE__*/_react.default.createElement("span", null, "Copyrights 2021, Casley India Pvt.Ltd."), /*#__PURE__*/_react.default.createElement("span", null, "Email: hello@rewardeagle.com")));
  }

}

exports.Footer = Footer;
var _default = Footer;
exports.default = _default;