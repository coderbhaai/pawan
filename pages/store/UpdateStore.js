"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UpdateStore = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _sweetalert = _interopRequireDefault(require("sweetalert"));

var _axios = _interopRequireDefault(require("axios"));

var _ckeditor4React = _interopRequireDefault(require("ckeditor4-react"));

var _semanticUiReact = require("semantic-ui-react");

const func = require('../parts/functions');

class UpdateStore extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "ckEditorReady", () => {
      this.callApi();
    });
    (0, _defineProperty2.default)(this, "timeout", delay => {
      return new Promise(res => setTimeout(res, delay));
    });
    (0, _defineProperty2.default)(this, "setMinNum", async e => {
      var data = await func.setMinNum(e);
      this.setState({
        display_order: data
      });
    });
    (0, _defineProperty2.default)(this, "callApi", async () => {
      await this.timeout(2000);

      if (this.state.loading && this.state.id) {
        this.setState({
          loading: false
        });

        _axios.default.get('/admin/getStore/' + this.state.id).then(res => {
          this.setState({
            name: res.data.data.name,
            url: res.data.data.url,
            publisher: res.data.data.publisher,
            display_order: res.data.data.display_order,
            title: res.data.data.title,
            description: res.data.data.description,
            category: res.data.data.category,
            tagline: res.data.data.tagline,
            cashback: res.data.data.cashback,
            oldLogoName: res.data.data.logo,
            oldBannerName: res.data.data.banner,
            tagData: res.data.tagData
          });
        });

        const response = await fetch('/admin/publisherList');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.setState({
          publisherList: body.data,
          categoryList: body.categoryList,
          tagOptions: body.tagOptions
        });
      }
    });
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "uploadLogo", e => {
      this.setState({
        logo: e.target.files[0]
      });
    });
    (0, _defineProperty2.default)(this, "uploadBanner", e => {
      this.setState({
        banner: e.target.files[0]
      });
    });
    (0, _defineProperty2.default)(this, "tagSelected", (e, {
      value
    }) => {
      this.setState({
        selectedTag: value
      });
    });
    (0, _defineProperty2.default)(this, "addSubmit", e => {
      e.preventDefault();
      const tagList = [];
      this.state.tagData.forEach(i => {
        tagList.push(i.value);
      });
      var finalTag = Array.from(new Set([...tagList, ...this.state.selectedTag]));
      const data = new FormData();
      data.append('id', this.state.id);
      data.append('name', this.state.name);
      data.append('title', this.state.title);
      data.append('url', this.state.url.replace(/ /g, "-"));
      data.append('display_order', this.state.display_order);
      data.append('description', this.state.description);
      data.append('publisher', this.state.publisher);
      data.append('logo', this.state.logo);
      data.append('banner', this.state.banner);
      data.append('tagline', this.state.tagline);
      data.append('cashback', this.state.cashback);
      data.append('category', this.state.category);
      data.append('tags', JSON.stringify(finalTag));
      data.append('oldLogoName', this.state.oldLogoName);
      data.append('oldBannerName', this.state.oldBannerName);

      _axios.default.post('/admin/updateStore', data).catch(err => func.printError(err)).then(res => {
        if (res.data.success) {
          localStorage.setItem('message', res.data.message);
          window.location.href = '/admin/adminStore';
        }

        func.callSwal(res.data.message);
      });
    });
    this.state = {
      id: '',
      name: '',
      url: '',
      publisher: '',
      display_order: '',
      title: '',
      description: '',
      tagline: '',
      cashback: '',
      logo: null,
      previewLogo: null,
      banner: null,
      previewBanner: null,
      oldLogoName: null,
      oldBannerName: null,
      publisherList: [],
      categoryList: [],
      loading: true,
      tagOptions: [],
      selectedTag: [],
      tagData: []
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.onEditorChange1 = this.onEditorChange1.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const id = window.location.href.split("/").pop();
    this.setState({
      id: id
    });
  }

  onEditorChange1(evt1) {
    this.setState({
      description: evt1.editor.getData()
    });
  }

  handleChange1(changeEvent1) {
    this.setState({
      description: changeEvent1.target.value
    });
  }

  arrayTagRemove(index) {
    this.state.tagData.splice(index, 1);
    this.setState({
      tagData: this.state.tagData
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid admin"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "heading"
    }, "Admin ( Update Store )"), /*#__PURE__*/_react.default.createElement("form", {
      encType: "multipart/form-data",
      onSubmit: this.addSubmit
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Store Name"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Store Name",
      name: "name",
      required: true,
      value: this.state.name,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Category Name"), /*#__PURE__*/_react.default.createElement("select", {
      type: "select",
      className: "form-control",
      required: true,
      name: "category",
      value: this.state.category,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Category"), this.state.categoryList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Store URL"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Store URL",
      name: "url",
      required: true,
      value: this.state.url,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Publisher"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      name: "publisher",
      required: true,
      value: this.state.publisher,
      onChange: this.onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Select Publisher"), this.state.publisherList.map((i, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: i.id,
      key: index
    }, i.name)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Logo"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadLogo
    }), this.state.oldLogoName ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/logo/" + this.state.oldLogoName,
      className: "img-fluid tableImg"
    }) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Banner"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "file",
      onChange: this.uploadBanner
    }), this.state.oldBannerName ? /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/store/banner/" + this.state.oldBannerName,
      className: "img-fluid tableImg"
    }) : null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-4"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Display Order"), /*#__PURE__*/_react.default.createElement("input", {
      type: "number",
      onKeyDown: e => e.key === 'e' && e.preventDefault(),
      min: 1,
      className: "form-control",
      name: "display_order",
      value: this.state.display_order,
      onChange: this.setMinNum,
      placeholder: "Display Order",
      required: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-8"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Store Title"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Store Title",
      name: "title",
      required: true,
      value: this.state.title,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Tagline"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Tagline",
      name: "tagline",
      required: true,
      value: this.state.tagline,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Cashback"), /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Cashback",
      name: "cashback",
      required: true,
      value: this.state.cashback,
      onChange: this.onChange
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Description"), /*#__PURE__*/_react.default.createElement(_ckeditor4React.default, {
      onInstanceReady: this.ckEditorReady(),
      onBeforeLoad: CKEDITOR => CKEDITOR.disableAutoInline = true,
      data: this.state.description,
      content: this.state.description,
      onChange: this.onEditorChange1,
      config: {
        extraAllowedContent: "*(*); div(col-sm-*, container-fluid, container, row)"
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-12 compare"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Add Tags"), /*#__PURE__*/_react.default.createElement("div", {
      className: "update-treat"
    }, this.state.tagData.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.tagData.map((i, index) => /*#__PURE__*/_react.default.createElement("span", {
      className: "ui label mr-3",
      key: index
    }, i.text, /*#__PURE__*/_react.default.createElement("i", {
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
    }, "Submit", /*#__PURE__*/_react.default.createElement("span", null))))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

exports.UpdateStore = UpdateStore;
var _default = UpdateStore;
exports.default = _default;