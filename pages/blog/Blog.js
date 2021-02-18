"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Blog = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _BlogList = _interopRequireDefault(require("./BlogList"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

class Blog extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "catApi", async (type, url) => {
      const response = await fetch('/blog/list/' + type + '/' + url);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        blogs: body.blogs,
        title: body.title
      });
    });
    this.state = {
      blogs: this.props.blogs,
      title: this.props.title
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const slug = window.location.pathname.split("/").pop();

    if (slug === 'blog') {
      const url = 'All';
      const type = "All";
      this.catApi(type, url);
    }

    if (slug !== 'blog') {
      const url = slug;
      const type = window.location.pathname.split("/")[1];
      this.catApi(type, url);
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container mt-5"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, "Interesting Reads"), /*#__PURE__*/_react.default.createElement("div", {
      className: "row blogs"
    }, /*#__PURE__*/_react.default.createElement(_BlogList.default, {
      blogs: this.state.blogs
    }))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.Blog = Blog;
var _default = Blog;
exports.default = _default;