"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Comments = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _ckeditor4React = _interopRequireDefault(require("ckeditor4-react"));

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

const block = ['sex', 'girl', 'porn', 'nude', 'horny', 'bitch', 'Viagra', 'Gambling', 'Cryptocurrencies', 'Cryptocurrency', '$', 'Bitcoin', 'USD', 'www', 'htttp'];

class Comments extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      }, () => this.checkForHTML());
    });
    (0, _defineProperty2.default)(this, "checkForHTML", () => {
      block.map(i => {
        if (this.state.name.includes(i) || this.state.comment.includes(i)) {
          this.setState({
            error: "Error in inputs being provided",
            errorReason: i
          });
        }
      });
    });
    (0, _defineProperty2.default)(this, "addUserModalOn", i => {
      this.setState({
        commentId: i.id,
        order: 1
      });

      if (this.state.role == 'Admin') {
        this.setState({
          status: 1
        });
      } else {
        this.setState({
          status: 0
        });
      }
    });
    (0, _defineProperty2.default)(this, "resetData", () => {
      this.setState({
        comment: '',
        commentId: 0,
        order: 0,
        status: 0,
        error: '',
        errorReason: ''
      });
    });
    (0, _defineProperty2.default)(this, "submitComment", e => {
      e.preventDefault();

      if (this.state.comment) {
        const data = {
          id: this.props.blogId,
          order: this.state.order,
          status: this.state.status,
          commentId: this.state.commentId,
          name: this.state.name,
          email: this.state.email,
          comment: this.state.comment
        };

        _axios.default.post('/admin/addComment', data).catch(err => func.printError(err)).then(res => {
          func.callSwal(res.data.message);
        });

        this.resetData();
      } else {
        func.callSwal("No comments not allowed");
      }
    });
    this.state = {
      user: [],
      name: '',
      email: '',
      role: '',
      comment: '',
      error: '',
      order: 0,
      status: 0,
      commentId: 0,
      message: '',
      errorReason: ''
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.onEditorChange1 = this.onEditorChange1.bind(this);
  }

  onEditorChange1(evt1) {
    this.setState({
      comment: evt1.editor.getData()
    }, () => this.checkForHTML());
  }

  handleChange1(changeEvent1) {
    this.setState({
      comment: changeEvent1.target.value
    });
  }

  componentDidMount() {
    if (typeof Storage !== "undefined") {
      this.setState({
        user: JSON.parse(localStorage.getItem('user')) || []
      });
    }

    if (typeof Storage !== "undefined" && JSON.parse(localStorage.getItem('user'))) {
      if (JSON.parse(localStorage.getItem('user')).role == 'Admin') {
        this.setState({
          name: 'Reward Eagle',
          email: 'contact@rewardeagle.com'
        });
      } else {
        this.setState({
          name: JSON.parse(localStorage.getItem('user')).name || '',
          email: JSON.parse(localStorage.getItem('user')).email || '',
          role: JSON.parse(localStorage.getItem('user')).role || ''
        });
      }
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "container comments"
    }, /*#__PURE__*/_react.default.createElement("h3", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Share your "), "Views"), /*#__PURE__*/_react.default.createElement("p", null, "Please keep your views respectful and not include any anchors, promotional content or obscene words in them. Such comments will be definitely removed and your IP be blocked for future purpose."), /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.submitComment
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-5"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      name: "name",
      required: true,
      placeholder: "Name Please",
      value: this.state.name,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-7"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Email"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "email",
      name: "email",
      required: true,
      placeholder: "Email Please",
      value: this.state.email,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Comment"), /*#__PURE__*/_react.default.createElement(_ckeditor4React.default, {
      onBeforeLoad: CKEDITOR => CKEDITOR.disableAutoInline = true,
      data: this.state.comment,
      content: this.state.comment,
      onChange: this.onEditorChange1
    }), this.state.error ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, this.state.error), /*#__PURE__*/_react.default.createElement("p", null, "Do not include - ", this.state.errorReason), /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      onClick: this.resetData,
      style: {
        margin: 'auto'
      }
    }, "Try Again", /*#__PURE__*/_react.default.createElement("span", null))) : /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      style: {
        margin: '1em auto'
      }
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null)), this.state.message ? /*#__PURE__*/_react.default.createElement("p", null, this.state.message) : null)))), this.props.comments ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.comments.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Some love showed "), "by people "), /*#__PURE__*/_react.default.createElement("div", {
      className: "row comments"
    }, this.props.comments.map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm-12 mb-5",
        key: index
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "card"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "originalComment",
        dangerouslySetInnerHTML: {
          __html: i.comment
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, i.user)), this.props.response.map((j, index) => {
        if (i.id === j.commentId) {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "adminReply",
            key: index
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "not-found-controller",
            dangerouslySetInnerHTML: {
              __html: j.comment
            }
          }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, j.user)));
        }
      }), i.id === this.state.commentId ? /*#__PURE__*/_react.default.createElement("form", {
        encType: "multipart/form-data",
        onSubmit: this.submitComment
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, !this.state.user.role ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/_react.default.createElement("label", null, "Name"), /*#__PURE__*/_react.default.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "Your Name",
        name: "name",
        required: true,
        value: this.state.name,
        onChange: this.onChange
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm-6"
      }, /*#__PURE__*/_react.default.createElement("label", null, "Email"), /*#__PURE__*/_react.default.createElement("input", {
        className: "form-control",
        type: "email",
        placeholder: "Your Email ID",
        name: "email",
        required: true,
        value: this.state.email,
        onChange: this.onChange
      }))) : null, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm-12 comments"
      }, /*#__PURE__*/_react.default.createElement("label", null, "Comment"), /*#__PURE__*/_react.default.createElement(_ckeditor4React.default, {
        onBeforeLoad: CKEDITOR => CKEDITOR.disableAutoInline = true,
        content: this.state.comment,
        onChange: this.onEditorChange1
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "my-btn my-3 flex-he"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "action-btn",
        type: "submit",
        style: {
          maxWidth: '300px'
        }
      }, "Submit"), /*#__PURE__*/_react.default.createElement("button", {
        className: "btn btn-danger",
        onClick: this.resetData
      }, "Cancel"))) : /*#__PURE__*/_react.default.createElement("div", {
        className: "forAdmin"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "btn-0",
        onClick: () => this.addUserModalOn(i),
        style: {
          margin: 'auto'
        }
      }, "Reply", /*#__PURE__*/_react.default.createElement("span", null)))));
    }))) : null) : null));
  }

}

exports.Comments = Comments;
var _default = Comments;
exports.default = _default;