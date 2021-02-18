"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("../parts/Header"));

var _Footer = _interopRequireDefault(require("../parts/Footer"));

var _AdminBar = _interopRequireDefault(require("../parts/AdminBar"));

var _reactstrap = require("reactstrap");

var _semanticUiReact = require("semantic-ui-react");

var _ckeditor4React = _interopRequireDefault(require("ckeditor4-react"));

var _axios = _interopRequireDefault(require("axios"));

const func = require('../parts/functions');

class AdminBlogs extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "callApi", async () => {
      const response = await fetch('/admin/adminBlogs');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      this.setState({
        blogList: body.data
      });
      const response2 = await fetch('/admin/blogMetaOptions');
      const body2 = await response2.json();
      if (response2.status !== 200) throw Error(body2.message);
      this.setState({
        catOptions: body2.catOptions,
        tagOptions: body2.tagOptions
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
    (0, _defineProperty2.default)(this, "handleClick", e => {
      this.setState({
        currentPage: Number(e.target.id)
      });
    });
    (0, _defineProperty2.default)(this, "changeitemsPerPage", e => {
      this.setState({
        itemsPerPage: e.target.value
      });
    });
    (0, _defineProperty2.default)(this, "searchSpace", e => {
      this.setState({
        search: e.target.value
      });
    });
    this.state = {
      editBlogModalIsOpen: false,
      title: '',
      blogURL: '',
      content: '',
      catOptions: [],
      tagOptions: [],
      selectedCategory: [],
      selectedTag: [],
      blogImage: null,
      blogUpdateImage: null,
      blogList: [],
      previewImg: null,
      category: [],
      tag: [],
      blogId: '',
      currentPage: 1,
      itemsPerPage: 100,
      search: ''
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

  // resetData = ()=>{
  //     this.setState({
  //         blogImage:                      null,
  //         title:                          '',
  //         blogURL:                        '',
  //         content:                        '',
  //         selectedCategory:               [],
  //         selectedTag:                    [],
  //         editBlogModalIsOpen:            false,
  //         blogUpdateImage:                null,
  //         title:                          '',
  //         blogURL:                        '',
  //         content:                        '',
  //         category:                       [],
  //         tag:                            [],
  //         previewImg:                     null
  //     })
  //     window.scrollTo(0, 0)
  // }
  // editBlogOn = (i)=>{        
  //     this.setState({
  //         editBlogModalIsOpen:            true,
  //         blogId:                         i.id,
  //         blogUpdateImage:                null,
  //         title:                          i.title,
  //         blogURL:                        i.url,
  //         content:                        i.content,
  //         previewImg:                     i.cover_img,
  //         // category:                       JSON.parse(i.category),
  //         // tag:                            JSON.parse(i.tag)
  //     })             
  // }
  // arrayCategoryRemove(index){
  //     this.state.category.splice(index, 1)
  //     this.setState({category: this.state.category})
  // }
  // arrayTagRemove(index){
  //     this.state.tag.splice(index, 1)
  //     this.setState({tag: this.state.tag})
  // }
  // updateBlogData= (e)=>{
  //     e.preventDefault()
  //     if(this.state.category){ var finalCategory = Array.from(new Set( [...this.state.category, ...this.state.selectedCategory])); }else{ var finalCategory = this.state.selectedCategory }
  //     if(this.state.tag){ var finalTag = Array.from(new Set( [...this.state.tag, ...this.state.selectedTag])); }else{ var finalTag = this.state.selectedTag }
  //     const data = new FormData()
  //     data.append('id', this.state.blogId)
  //     data.append('file', this.state.blogUpdateImage)
  //     data.append('title', this.state.title)
  //     data.append('url', this.state.blogURL)
  //     data.append('content', this.state.content)
  //     data.append('category', JSON.stringify(finalCategory) )
  //     data.append('tag', JSON.stringify(finalTag) )
  //     axios.post('/admin/updateBlog', data)
  //         .catch(err=>func.printError(err))
  //         .then(res=>{
  //             if(res.data.success){
  //                 this.setState({ blogList: this.state.blogList.map(x => x.id === parseInt(res.data.data.id) ? x= res.data.data :x ) }) 
  //             }
  //             func.callSwal(res.data.message)
  //         })
  //     this. resetData()
  // }    
  render() {
    const imgPath = "/images/blog/";
    const {
      currentPage,
      itemsPerPage
    } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const renderItems = this.state.blogList.filter(i => {
      if (this.state.search == null) return i;else if (i.title.toLowerCase().includes(this.state.search.toLowerCase()) || i.url.toLowerCase().includes(this.state.search.toLowerCase())) {
        return i;
      }
    }).slice(indexOfFirstItem, indexOfLastItem).map((i, index) => {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("td", null, index + 1), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "/blog/" + i.url,
        target: "_blank"
      }, i.title)), /*#__PURE__*/_react.default.createElement("td", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: '/images/blog/' + i.coverImg,
        className: "img-fluid tableImg"
      })), /*#__PURE__*/_react.default.createElement("td", {
        className: "editIcon text-center"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "/admin/updateBlog/" + i.id
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "/images/icons/edit.svg"
      }))));
    });
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(this.state.blogList.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPagination = pageNumbers.map(number => {
      if (currentPage == number) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: number,
          id: number,
          onClick: this.handleClick,
          className: "active"
        }, " ", number);
      } else {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: number,
          id: number,
          onClick: this.handleClick
        }, " ", number);
      }
    });
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid admin"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row admin"
    }, /*#__PURE__*/_react.default.createElement(_AdminBar.default, null), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Admin Panel"), "(Blogs)"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn-pag"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "perPage"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Add Blog here"), /*#__PURE__*/_react.default.createElement("a", {
      href: "/admin/addBlog",
      className: "casleyBtn"
    }, "Add Blogs")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Blogs per page"), /*#__PURE__*/_react.default.createElement("select", {
      className: "form-control",
      required: true,
      value: itemsPerPage,
      onChange: e => this.changeitemsPerPage(e)
    }, /*#__PURE__*/_react.default.createElement("option", null, itemsPerPage), /*#__PURE__*/_react.default.createElement("option", {
      value: "10"
    }, "10"), /*#__PURE__*/_react.default.createElement("option", {
      value: "25"
    }, "25"), /*#__PURE__*/_react.default.createElement("option", {
      value: "50"
    }, "50"), /*#__PURE__*/_react.default.createElement("option", {
      value: "100"
    }, "100")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "search"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "noFlex searchInput"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Search Here"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      placeholder: "Search here",
      className: "form-control",
      onChange: e => this.searchSpace(e)
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "noFlex"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Page Numbers"), /*#__PURE__*/_react.default.createElement("ul", {
      className: "page-numbers"
    }, renderPagination, " ")))), /*#__PURE__*/_react.default.createElement("table", {
      className: "table table-hover table-responsive"
    }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Sl no."), /*#__PURE__*/_react.default.createElement("td", null, "Blog Name"), /*#__PURE__*/_react.default.createElement("td", null, "Cover Image"), /*#__PURE__*/_react.default.createElement("td", null, "Edit"))), /*#__PURE__*/_react.default.createElement("tbody", null, this.state.loading ? /*#__PURE__*/_react.default.createElement("tr", {
      className: "loading"
    }, /*#__PURE__*/_react.default.createElement("td", {
      colSpan: "4",
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/icons/loading.gif"
    }))) : renderItems)), /*#__PURE__*/_react.default.createElement("ul", {
      className: "page-numbers"
    }, renderPagination)))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
  }

}

var _default = AdminBlogs;
exports.default = _default;