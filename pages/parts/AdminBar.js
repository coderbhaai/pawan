"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AdminBar = void 0;

var _react = _interopRequireWildcard(require("react"));

class AdminBar extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      user: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (typeof Storage !== "undefined") {
      this.setState({
        user: JSON.parse(localStorage.getItem('user')) || []
      });
    }

    this.setState({
      active: window.location.pathname
    });

    if (window.location.pathname === '/admin/admin') {
      this.setState({
        active: '/admin/users'
      });
    }

    if (window.location.pathname === '/admin/addBlog') {
      this.setState({
        active: '/admin/blogs'
      });
    }

    if (window.location.pathname.split("/")[2] === 'updateBlog') {
      this.setState({
        active: '/admin/blogs'
      });
    }

    if (window.location.pathname === '/admin/createStore') {
      this.setState({
        active: '/admin/adminStore'
      });
    }

    if (window.location.pathname.split("/")[2] === 'updateStore') {
      this.setState({
        active: '/admin/adminStore'
      });
    }
  }

  render() {
    const adminLinks = [{
      url: "/admin/users",
      text: "Users",
      active: "/admin/users"
    }, {
      url: "/admin/basics",
      text: "Basics",
      active: "/admin/basics"
    }, {
      url: "/admin/meta",
      text: "Meta",
      active: "/admin/meta"
    }, {
      url: "/admin/blogs",
      text: "Blogs",
      active: "/admin/blogs"
    }, {
      url: "/admin/blogmeta",
      text: "Blog Meta",
      active: "/admin/blogmeta"
    }, {
      url: "/admin/comments",
      text: "Comments",
      active: "/admin/comments"
    }, {
      url: "/admin/contacts",
      text: "Contact",
      active: "/admin/contacts"
    }, {
      url: "/admin/adminStore",
      text: "adminStore",
      active: "/admin/adminStore"
    }, {
      url: "/admin/adminCategory",
      text: "adminCategory",
      active: "/admin/adminCategory"
    }, {
      url: "/admin/adminCoupon",
      text: "adminCoupon",
      active: "/admin/adminCoupon"
    }, {
      url: "/admin/adminDeal",
      text: "adminDeal",
      active: "/admin/adminDeal"
    }, {
      url: "/admin/adminCashback",
      text: "adminCashback",
      active: "/admin/adminCashback"
    }, {
      url: "/admin/leaderboard",
      text: "leaderboard",
      active: "/admin/leaderboard"
    }, {
      url: "/admin/advertisement",
      text: "Advertisement",
      active: "/admin/advertisement"
    }, {
      url: "/admin/questionBank",
      text: "QuestionBank",
      active: "/admin/questionBank"
    }, {
      url: "/admin/survey",
      text: "Survey",
      active: "/admin/survey"
    }, {
      url: "/admin/survey-response",
      text: "Survey Response",
      active: "/admin/survey-response"
    }, {
      url: "/admin/cashback",
      text: "Cashback",
      active: "/admin/cashback"
    }, {
      url: "/admin/career",
      text: "Career",
      active: "/admin/career"
    }, {
      url: "/admin/job-applications",
      text: "Resume",
      active: "/admin/job-applications"
    } // { url: "/admin/special", text: "Special", active:  "/admin/special" },
    ];
    const userLinks = [// { url: "/user/my-account", text: "My Account", active: "/user/my-account" },
    {
      url: "/user/refer-and-earn",
      text: "Refer & Earn",
      active: "/user/refer-and-earn"
    }, {
      url: "/user/your-surveys",
      text: "Your Surveys",
      active: "/user/your-surveys"
    }, {
      url: "/user/cashback-history",
      text: "Cashback History",
      active: "/user/cashback-history"
    } // { url: "/user/my-profile", text: "Your Surveys", active: "/user/my-profile" },
    // { url: "/user/applied-jobs", text: "Your Surveys", active: "/user/applied-jobs" },
    // { url: "/user/your-surveys", text: "Your Surveys", active: "/user/your-surveys" },
    // { url: "/user/your-surveys", text: "Your Surveys", active: "/user/your-surveys" },
    // { url: "/user/your-surveys", text: "Your Surveys", active: "/user/your-surveys" },
    ];
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-2 adminSidebar"
    }, this.state.user.role ? /*#__PURE__*/_react.default.createElement("ul", null, this.state.user.role === "Admin" ? adminLinks.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      className: this.state.active === i.active ? "active" : null
    }, i.text))) : this.state.user.role === "User" ? userLinks.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: i.url,
      className: this.state.active === i.active ? "active" : null
    }, i.text))) : null) : null);
  }

}

exports.AdminBar = AdminBar;
var _default = AdminBar;
exports.default = _default;