"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Coupon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

class Coupon extends _react.Component {
  render() {
    const params3 = {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2500
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 10
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "container my-5"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "shopHead"
    }, "Coupon of the day"), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, params3, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/static/banner-1.jpg",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/static/banner-2.jpg",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/static/banner-3.jpg",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/static/banner-4.jpg",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/static/banner-5.jpg",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/static/banner-1.jpg",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/static/banner-2.jpg",
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/static/banner-3.jpg",
      alt: ""
    }))))));
  }

}

exports.Coupon = Coupon;
var _default = Coupon;
exports.default = _default;