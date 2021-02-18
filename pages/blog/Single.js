"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Single = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

var _BlogCarousel = _interopRequireDefault(require("./BlogCarousel"));

var _SocialShare = _interopRequireDefault(require("./SocialShare"));

var _Comments = _interopRequireDefault(require("./Comments"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

class Single extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const url = window.location.href.split("/").pop();
      const response = await fetch('/blog/single/' + url);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        data: body.data,
        coverImg: body.data.coverImg,
        blogs: body.blogs,
        blogList: body.blogList,
        cats: body.cats,
        tags: body.tags,
        comments: body.comments,
        response: body.response
      });
    });
    this.state = {
      data: this.props.data,
      blogs: this.props.blogs,
      blogList: this.props.blogList,
      cats: this.props.cats,
      tags: this.props.tags,
      comments: this.props.comments,
      response: this.props.response,
      coverImg: ''
    };
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), this.state.data ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "slider"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/blog/" + this.state.data.coverImg,
      alt: this.state.data.coverImg.replace('.jpg', '').replace(/_/g, ' ').replace(/-/g, ' ')
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "slider-caption"
    }, /*#__PURE__*/_react.default.createElement("h1", null, this.state.data.title))), /*#__PURE__*/_react.default.createElement("div", {
      className: "page container py-5"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, this.state.data.title, " "), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-9"
    }, /*#__PURE__*/_react.default.createElement("section", {
      className: "not-found-controller mb-5",
      dangerouslySetInnerHTML: {
        __html: this.state.data.content
      }
    }), /*#__PURE__*/_react.default.createElement(_Comments.default, {
      comments: this.state.comments,
      response: this.state.response,
      blogId: this.state.data.id
    })), /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
      blogList: this.state.blogList,
      cats: this.state.cats,
      tags: this.state.tags
    }))), /*#__PURE__*/_react.default.createElement(_Footer.default, null)) : null);
  }

}

exports.Single = Single;
var _default = Single;
exports.default = _default;