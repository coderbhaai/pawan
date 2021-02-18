"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Index = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _Brands = _interopRequireDefault(require("../parts/Brands"));

var _NewsLetter = _interopRequireDefault(require("../parts/NewsLetter"));

var _RecommendedAds = _interopRequireDefault(require("../parts/RecommendedAds"));

var _SignUp = _interopRequireDefault(require("../parts/SignUp"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

const func = require('../parts/functions');

class Index extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/homeData');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        slider: body.slider,
        category: body.category,
        store: body.store,
        deal: body.deal,
        coupon: body.coupon,
        activeCat: [body.category[0].id, body.category[1].id],
        ads: body.ads,
        special: body.special
      });
      const one = [];
      const two = [];
      const three = [];
      const four = [];
      body.coupon.forEach(i => {
        if (JSON.parse(i.tags).includes(1)) {
          one.push(i);
        }

        if (JSON.parse(i.tags).includes(2)) {
          two.push(i);
        }

        if (JSON.parse(i.tags).includes(3)) {
          three.push(i);
        }

        if (JSON.parse(i.tags).includes(4)) {
          four.push(i);
        }
      });
      this.setState({
        recommended: one,
        // special:            two,
        staff: three,
        daily: four
      });
    });
    (0, _defineProperty2.default)(this, "activeDouble", index => {
      if (index < this.state.category.length - 1) {
        this.setState({
          activeCat: [this.state.category[index].id, this.state.category[index + 1].id],
          activeCatIndex: [index, index + 1]
        });
      } else {
        this.setState({
          activeCat: [this.state.category[index - 1].id, this.state.category[index].id],
          activeCatIndex: [index - 1, index]
        });
      }
    });
    (0, _defineProperty2.default)(this, "showHow", () => {
      this.setState({
        showHow: true
      });
    });
    (0, _defineProperty2.default)(this, "hideHow", () => {
      this.setState({
        showHow: false
      });
    });
    this.state = {
      slider: this.props.slider,
      category: this.props.category,
      store: this.props.store,
      deal: this.props.deal,
      coupon: this.props.coupon,
      activeCat: [],
      activeCatIndex: [0, 1],
      ads: this.props.ads,
      recommended: [],
      special: [],
      staff: [],
      daily: [],
      showHow: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  render() {
    const dealArray = [];

    if (this.state.deal && this.state.deal.length) {
      for (let i = 1; i <= this.state.deal.length; i = i + 4) {
        dealArray.push([i, i + 1, i + 2, i + 3]);
      }
    }

    const couponArray = [];

    if (this.state.coupon && this.state.coupon.length) {
      for (let i = 1; i <= this.state.coupon.length; i = i + 4) {
        couponArray.push([i, i + 1, i + 2, i + 3]);
      }
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 1) return i;
    }).slice(0, 1).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image
    })))) : null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "jhalar"
    }), this.state.slider && this.state.slider.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "banner"
    }, /*#__PURE__*/_react.default.createElement("h1", null, "India's Top Reward Site"), /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.paramSlider, this.state.slider.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/basic/" + i.name,
      alt: ""
    })))))) // <div className="container-fluid banner">
    //     {/* <h1>India's Top Reward Site</h1> */}
    //     <div className="row">
    //         <div className="col-sm-12">
    //             {/* <Swiper {...func.paramSlider}>
    //                 {this.state.slider.slice(0,3).map((i,index)=>( <div key={index}><img src={"images/basic/"+i.name} alt=""/></div>))}
    //             </Swiper> */}
    //         </div>
    //         {/* <div className="col-sm-6">
    //             <Swiper {...func.paramSlider}>
    //                 {this.state.slider.slice(3,6).map((i,index)=>( <div key={index}><img src={"images/basic/"+i.name} alt=""/></div>))}
    //             </Swiper>
    //         </div> */}
    //     </div>
    // </div>
    : null, this.state.category && this.state.category.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid categories imgExpand"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.paramsCatsNStore, this.state.category.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/category/icon/" + i.icon,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("p", null, i.name)))))))) : null, this.state.store && this.state.store.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid categories imgExpand"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.paramsCatsNStore, this.state.store.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/stores/" + i.url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/store/logo/" + i.logo,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("p", null, i.name)))))))) : null, /*#__PURE__*/_react.default.createElement("section", {
      className: "how"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container howItWorks"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "How It ", /*#__PURE__*/_react.default.createElement("span", null, "Works")), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-center"
    }, "Are you new on Reward Eagle?"), /*#__PURE__*/_react.default.createElement("div", {
      className: this.state.showHow ? "row showHow" : "row hideHow"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/browse.svg"
    })), /*#__PURE__*/_react.default.createElement("h3", null, "Browse"), /*#__PURE__*/_react.default.createElement("p", null, "Find your favourite online stores. Browse through popular brands for great deals and offers.")), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/cart-grey.svg"
    })), /*#__PURE__*/_react.default.createElement("h3", null, "Shop"), /*#__PURE__*/_react.default.createElement("p", null, "Get redirected to your favourite online store\u2019s website or app. Paste your coupon and enjoy active deals.")), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/earn.svg"
    })), /*#__PURE__*/_react.default.createElement("h3", null, "Earn"), /*#__PURE__*/_react.default.createElement("p", null, "Shop through us and Relax. We will track your purchase and rewards to your account."))), this.state.showHow ? /*#__PURE__*/_react.default.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "button kohei",
      onClick: this.hideHow
    }, "Show Less")) : /*#__PURE__*/_react.default.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "button kohei",
      onClick: this.showHow
    }, "Know more")))), /*#__PURE__*/_react.default.createElement("section", {
      className: "offers"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 2) return i;
    }).slice(0, 1).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image,
      key: index
    })))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 topNav topNavOffer"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "shopHead"
    }, " Offers of ", /*#__PURE__*/_react.default.createElement("span", null, "the day")), dealArray.length ? /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.params, dealArray.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dealDetail"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "offerHead"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "festText"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Festive Offers")), /*#__PURE__*/_react.default.createElement("div", {
      className: "slashPrice"
    }, /*#__PURE__*/_react.default.createElement("small", null, "Upto 30% Off"), /*#__PURE__*/_react.default.createElement("p", null, "Upto 30% Off"))), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/deal/" + this.state.deal[index].image
    }), /*#__PURE__*/_react.default.createElement("h3", null, "Exciting Offers on Laptop"), /*#__PURE__*/_react.default.createElement("div", {
      className: "offerGroup"
    }, /*#__PURE__*/_react.default.createElement("h5", null, "Get the Deals ", ' >>'), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "50"), /*#__PURE__*/_react.default.createElement("p", null, "Offers"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dealDetail"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "offerHead"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "festText"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Festive Offers")), /*#__PURE__*/_react.default.createElement("div", {
      className: "slashPrice"
    }, /*#__PURE__*/_react.default.createElement("small", null, "Upto 30% Off"), /*#__PURE__*/_react.default.createElement("p", null, "Upto 30% Off"))), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/deal/" + this.state.deal[index + 1].image
    }), /*#__PURE__*/_react.default.createElement("h3", null, "Exciting Offers on Laptop"), /*#__PURE__*/_react.default.createElement("div", {
      className: "offerGroup"
    }, /*#__PURE__*/_react.default.createElement("h5", null, "Get the Deals ", ' >>'), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "50"), /*#__PURE__*/_react.default.createElement("p", null, "Offers"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dealDetail"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "offerHead"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "festText"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Festive Offers")), /*#__PURE__*/_react.default.createElement("div", {
      className: "slashPrice"
    }, /*#__PURE__*/_react.default.createElement("small", null, "Upto 30% Off"), /*#__PURE__*/_react.default.createElement("p", null, "Upto 30% Off"))), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/deal/" + this.state.deal[index + 2].image
    }), /*#__PURE__*/_react.default.createElement("h3", null, "Exciting Offers on Laptop"), /*#__PURE__*/_react.default.createElement("div", {
      className: "offerGroup"
    }, /*#__PURE__*/_react.default.createElement("h5", null, "Get the Deals ", ' >>'), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "50"), /*#__PURE__*/_react.default.createElement("p", null, "Offers"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dealDetail"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "offerHead"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "festText"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Festive Offers")), /*#__PURE__*/_react.default.createElement("div", {
      className: "slashPrice"
    }, /*#__PURE__*/_react.default.createElement("small", null, "Upto 30% Off"), /*#__PURE__*/_react.default.createElement("p", null, "Upto 30% Off"))), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/deal/" + this.state.deal[index + 3].image
    }), /*#__PURE__*/_react.default.createElement("h3", null, "Exciting Offers on Laptop"), /*#__PURE__*/_react.default.createElement("div", {
      className: "offerGroup"
    }, /*#__PURE__*/_react.default.createElement("h5", null, "Get the Deals ", ' >>'), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "50"), /*#__PURE__*/_react.default.createElement("p", null, "Offers"))))))))) : null, /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "button kohei"
    }, "View All"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 topNav topNavCoupon"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "shopHead"
    }, " Coupons of ", /*#__PURE__*/_react.default.createElement("span", null, "the day")), couponArray.length ? /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.params, couponArray.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
      href: this.state.coupon[index].url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/coupon/" + this.state.coupon[index].image
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "couponDetail"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Upto 50% Off"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn"
    }, "Coupon"), /*#__PURE__*/_react.default.createElement("h3", null, this.state.coupon[index].commission), /*#__PURE__*/_react.default.createElement("p", null, this.state.coupon[index].offer), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/scissor.svg",
      className: "scissor"
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
      href: this.state.coupon[index + 1].url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/coupon/" + this.state.coupon[index + 1].image
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "couponDetail"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Upto 50% Off"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn"
    }, "Coupon"), /*#__PURE__*/_react.default.createElement("h3", null, this.state.coupon[index + 1].commission), /*#__PURE__*/_react.default.createElement("p", null, this.state.coupon[index + 1].offer), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/scissor.svg",
      className: "scissor"
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
      href: this.state.coupon[index + 2].url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/coupon/" + this.state.coupon[index + 2].image
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "couponDetail"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Upto 50% Off"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn"
    }, "Coupon"), /*#__PURE__*/_react.default.createElement("h3", null, this.state.coupon[index + 2].commission), /*#__PURE__*/_react.default.createElement("p", null, this.state.coupon[index + 2].offer), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/scissor.svg",
      className: "scissor"
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
      href: this.state.coupon[index + 3].url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/coupon/" + this.state.coupon[index + 3].image
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "couponDetail"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Upto 50% Off"), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn"
    }, "Coupon"), /*#__PURE__*/_react.default.createElement("h3", null, this.state.coupon[index + 3].commission), /*#__PURE__*/_react.default.createElement("p", null, this.state.coupon[index + 3].offer), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/scissor.svg",
      className: "scissor"
    }))))))))) : null, /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "button kohei"
    }, "View All"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 3) return i;
    }).slice(0, 1).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image
    })))) : null)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid dailyRanking"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, " ", /*#__PURE__*/_react.default.createElement("span", null, "Weekly Top "), " Ranking Stores"), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, this.state.category && this.state.category.length ? /*#__PURE__*/_react.default.createElement("ul", {
      className: "doubleList"
    }, this.state.category.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: this.state.activeCat.some(el => el == i.id) ? 'active active-' + this.state.activeCat.indexOf(i.id) : null,
      onClick: () => this.activeDouble(index)
    }, i.name))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 7 || i.type == 8) return i;
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
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.coupon && this.state.coupon.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("h2", null, this.state.category[this.state.activeCatIndex[0]].name), /*#__PURE__*/_react.default.createElement("ul", null, this.state.store.filter(i => {
      if (i.category == this.state.activeCat[0]) return i;
    }).slice(0, 5).map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/stores/" + i.url
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "topTag"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "rank"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/rank" + index + ".png"
    }), /*#__PURE__*/_react.default.createElement("span", null, index + 1)), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/logo/" + i.logo
    })), /*#__PURE__*/_react.default.createElement("p", null, "Upto 5 Reward Points")), /*#__PURE__*/_react.default.createElement("div", {
      className: "tagline"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/banner/" + i.banner
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, i.tagline), /*#__PURE__*/_react.default.createElement("p", null, "Sale is Live")), /*#__PURE__*/_react.default.createElement("h3", null, "Upto ", /*#__PURE__*/_react.default.createElement("span", null, i.cashback), " Cashback")))))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("h2", null, this.state.category[this.state.activeCatIndex[1]].name), /*#__PURE__*/_react.default.createElement("ul", null, this.state.store.filter(i => {
      if (i.category == this.state.activeCat[1]) return i;
    }).slice(0, 5).map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/stores/" + i.url
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "topTag"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "rank"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/rank" + index + ".png"
    }), /*#__PURE__*/_react.default.createElement("span", null, index + 1)), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/logo/" + i.logo
    })), /*#__PURE__*/_react.default.createElement("p", null, "Upto 5 Reward Points")), /*#__PURE__*/_react.default.createElement("div", {
      className: "tagline"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/banner/" + i.banner
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, i.tagline), /*#__PURE__*/_react.default.createElement("p", null, "Sale is Live")), /*#__PURE__*/_react.default.createElement("h3", null, "Upto ", /*#__PURE__*/_react.default.createElement("span", null, i.cashback), " Cashback"))))))))) : null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2 right-side"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 9) return i;
    }).slice(0, 1).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image,
      key: index
    })))) : null))), /*#__PURE__*/_react.default.createElement("div", {
      className: "banner"
    }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, func.params, func.specialSlider.map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/static/" + i.img,
      alt: ""
    })))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "greyBg staffRecommended"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Reward Eagle "), " Collections"), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 4) return i;
    }).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: this.state.ads[1].url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + this.state.ads[1].image,
      key: index
    })))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, this.state.staff ? /*#__PURE__*/_react.default.createElement("ul", null, this.state.staff.slice(0, 4).map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/coupon/" + i.image
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, i.title), /*#__PURE__*/_react.default.createElement("h3", null, i.cashback)), /*#__PURE__*/_react.default.createElement("button", null, "Redeem Coupon"))))) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2"
    }, this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.ads.filter(i => {
      if (i.type == 5) return i;
    }).map((i, index) => /*#__PURE__*/_react.default.createElement("a", {
      href: this.state.ads[1].url,
      target: i.target == 1 ? "_blank" : "",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + this.state.ads[1].image,
      key: index
    })))) : null)))), /*#__PURE__*/_react.default.createElement(_SignUp.default, null), this.state.ads ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
      className: "recommended"
    }, this.state.ads.filter(i => {
      if (i.type == 6) return i;
    }).length ? /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "Special ", /*#__PURE__*/_react.default.createElement("span", null, "Offers")), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, this.state.ads.filter(i => {
      if (i.type == 6) return i;
    }).slice(0, 8).map((i, index) => /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3 mb-3",
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/" + i.url,
      target: i.target == 1 ? "_blank" : ""
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/ads/" + i.image
    })))))) : null)) : null, this.state.ads ? /*#__PURE__*/_react.default.createElement(_RecommendedAds.default, {
      title: "New deals Onboard",
      ads: this.state.ads
    }) : null, /*#__PURE__*/_react.default.createElement(_NewsLetter.default, null), /*#__PURE__*/_react.default.createElement(_Brands.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.Index = Index;
var _default = Index;
exports.default = _default;