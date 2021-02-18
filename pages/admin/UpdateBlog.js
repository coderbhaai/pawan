"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UpdateBlog = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _semanticUiReact = require("semantic-ui-react");

var _ckeditor4React = _interopRequireDefault(require("ckeditor4-react"));

var _axios = _interopRequireDefault(require("axios"));

var _global = _interopRequireDefault(require("global"));

const func = require('../parts/functions');

class UpdateBlog extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "ckEditorReady", () => {
      this.callApi();
    });
    (0, _defineProperty2.default)(this, "timeout", delay => {
      return new Promise(res => setTimeout(res, delay));
    });
    (0, _defineProperty2.default)(this, "callApi", async () => {
      await this.timeout(2000);

      if (this.state.loading && this.state.id) {
        this.setState({
          loading: false
        });

        _axios.default.get('/admin/getBlog/' + this.state.id).then(res => {
          this.setState({
            title: res.data.data.title,
            content: res.data.data.content,
            blogURL: res.data.data.url,
            oldCoverImg: res.data.data.coverImg,
            category: res.data.catList,
            tag: res.data.tagList
          });
        });

        const response = await fetch('/admin/blogMetaOptions');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.setState({
          catOptions: body.catOptions,
          tagOptions: body.tagOptions
        });
      }
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
    (0, _defineProperty2.default)(this, "updateBlogData", e => {
      e.preventDefault();
      const catList = [];
      this.state.category.forEach(i => {
        catList.push(i.id);
      });
      const tagList = [];
      this.state.tag.forEach(i => {
        tagList.push(i.id);
      });
      var finalCategory = Array.from(new Set([...catList, ...this.state.selectedCategory]));
      var finalTag = Array.from(new Set([...tagList, ...this.state.selectedTag]));
      const data = new FormData();
      data.append('id', this.state.id);
      data.append('file', this.state.blogImage);
      data.append('oldCoverImg', this.state.oldCoverImg);
      data.append('title', this.state.title);
      data.append('url', this.state.blogURL.replace(/ /g, "-"));
      data.append('content', this.state.content);
      data.append('category', JSON.stringify(finalCategory));
      data.append('tag', JSON.stringify(finalTag));

      _axios.default.post('/admin/updateBlog', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          localStorage.setItem('message', res.data.message);
          _global.default.location.href = '/admin/blogs';
        }

        func.callSwal(res.data.message);
      });
    });
    this.state = {
      id: '',
      title: '',
      blogURL: '',
      content: '',
      catOptions: [],
      tagOptions: [],
      selectedCategory: [],
      selectedTag: [],
      oldCoverImg: '',
      blogImage: null,
      previewImg: null,
      category: [],
      tag: [],
      loading: true
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.onEditorChange1 = this.onEditorChange1.bind(this);
  }

  componentDidMount() {
    _global.default.scrollTo(0, 0);

    const id = _global.default.location.href.split("/").pop();

    this.setState({
      id: id
    });
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

  arrayCategoryRemove(index) {
    this.state.category.splice(index, 1);
    this.setState({
      category: this.state.category
    });
  }

  arrayTagRemove(index) {
    this.state.tag.splice(index, 1);
    this.setState({
      tag: this.state.tag
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
    }, /*#__PURE__*/_react.default.createElement("span", null, "Admin Panel"), "(Update Blog)"), /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.updateBlogData
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
      value: this.state.blogURL,
      readOnly: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Featured Image"), this.state.previewImg ? /*#__PURE__*/_react.default.createElement("img", {
      src: this.state.previewImg,
      alt: "",
      className: "img-fluid tableImg"
    }) : null, /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.blogImage
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/blog/" + this.state.oldCoverImg,
      alt: "",
      className: "img-fluid tableImg"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Blog Content"), /*#__PURE__*/_react.default.createElement(_ckeditor4React.default, {
      onInstanceReady: this.ckEditorReady(),
      onBeforeLoad: CKEDITOR => CKEDITOR.disableAutoInline = true,
      data: this.state.content,
      content: this.state.content,
      onChange: this.onEditorChange1
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 blogMeta compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", {
      className: "mb-0"
    }, "Categories"), /*#__PURE__*/_react.default.createElement("div", {
      className: "update-treat"
    }, this.state.category.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.category.map((i, index) => /*#__PURE__*/_react.default.createElement("span", {
      className: "ui label mr-3",
      key: index
    }, i.name, /*#__PURE__*/_react.default.createElement("i", {
      "aria-hidden": "true",
      className: "delete icon",
      onClick: () => this.arrayCategoryRemove(index)
    })))) : null), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      placeholder: "Select category",
      multiple: true,
      fluid: true,
      search: true,
      selection: true,
      onChange: this.categorySelected,
      options: this.state.catOptions
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 blogMeta compare label-down"
    }, /*#__PURE__*/_react.default.createElement("label", {
      className: "mb-0"
    }, "Tags"), /*#__PURE__*/_react.default.createElement("div", {
      className: "update-treat"
    }, this.state.tag.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.tag.map((i, index) => /*#__PURE__*/_react.default.createElement("span", {
      className: "ui label mr-3",
      key: index
    }, i.name, /*#__PURE__*/_react.default.createElement("i", {
      "aria-hidden": "true",
      className: "delete icon",
      onClick: () => this.arrayTagRemove(index)
    })))) : null), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
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

exports.UpdateBlog = UpdateBlog;
var _default = UpdateBlog;
exports.default = _default;