"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AddBlog = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _semanticUiReact = require("semantic-ui-react");

var _ckeditor4React = _interopRequireDefault(require("ckeditor4-react"));

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class AddBlog extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/blogMetaOptions');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        catOptions: body.catOptions,
        tagOptions: body.tagOptions
      });
    });
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "categorySelected", (e, {
      value
    }) => {
      this.setState({
        selectedCategory: value
      });
    });
    (0, _defineProperty2.default)(this, "tagSelected", (e, {
      value
    }) => {
      this.setState({
        selectedTag: value
      });
    });
    (0, _defineProperty2.default)(this, "blogImage", e => {
      this.setState({
        blogImage: e.target.files[0],
        previewImg: URL.createObjectURL(e.target.files[0])
      });
    });
    (0, _defineProperty2.default)(this, "addBlogData", e => {
      e.preventDefault();
      const data = new FormData();
      data.append('file', this.state.blogImage);
      data.append('title', this.state.title);
      data.append('url', this.state.replace(/ /g, "-blogURL"));
      data.append('content', this.state.content);
      data.append('category', JSON.stringify(this.state.selectedCategory));
      data.append('tag', JSON.stringify(this.state.selectedTag));

      _axios.default.post('/admin/addBlog', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          localStorage.setItem('message', res.data.message);
          window.location.href = '/admin/blogs';
        }

        func.callSwal(res.data.message);
      });
    });
    this.state = {
      title: '',
      blogURL: '',
      content: '',
      catOptions: [],
      tagOptions: [],
      selectedCategory: [],
      selectedTag: [],
      blogImage: null,
      previewImg: null,
      category: [],
      tag: []
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.onEditorChange1 = this.onEditorChange1.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi();
  }

  onEditorChange1(evt1) {
    this.setState({
      content: evt1.editor.getData()
    });
  }

  handleChange1(changeEvent1) {
    this.setState({
      content: changeEvent1.target.value
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid admin"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row admin"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Admin Panel"), "(Add Blog)"), /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addBlogData
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Title"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Blog Title",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Blog URL"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Blog URL",
      name: "blogURL",
      required: true,
      value: this.state.blogURL,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, this.state.previewImg ? /*#__PURE__*/_react.default.createElement("img", {
      src: this.state.previewImg,
      alt: "",
      className: "img-fluid tableImg"
    }) : null, /*#__PURE__*/_react.default.createElement("label", null, "Featured Image"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.blogImage
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Blog Content"), /*#__PURE__*/_react.default.createElement(_ckeditor4React.default, {
      onBeforeLoad: CKEDITOR => CKEDITOR.disableAutoInline = true,
      content: this.state.content,
      onChange: this.onEditorChange1,
      config: {
        extraAllowedContent: "*(*); div(col-sm-*, container-fluid, container, row)"
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 blogMeta compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Categories"), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select category",
      multiple: true,
      fluid: true,
      search: true,
      selection: true,
      onChange: this.categorySelected,
      options: this.state.catOptions
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 blogMeta compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Tags"), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select Tags",
      multiple: true,
      fluid: true,
      search: true,
      selection: true,
      onChange: this.tagSelected,
      options: this.state.tagOptions
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "my-div"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "casleyBtn",
      type: "submit"
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null))))))));
  }

}

exports.AddBlog = AddBlog;
var _default = AddBlog;
exports.default = _default;