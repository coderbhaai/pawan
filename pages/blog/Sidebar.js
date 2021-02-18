"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

class Sidebar extends _react.Component {
  constructor(props) {
    super(props);
    (0, _defineProperty2.default)(this, "onChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
    this.state = {
      search: ''
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-3 mt-5 sidebar"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "Search for",
      name: "search",
      required: true,
      value: this.state.search,
      onChange: this.onChange
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group text-center"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/search/" + this.state.search,
      type: "Submit",
      className: "casleyBtn",
      style: {
        padding: '5px 1em'
      }
    }, "Search"))), this.props.blogList ? /*#__PURE__*/_react.default.createElement("div", {
      className: "list"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Recent Blogs"), /*#__PURE__*/_react.default.createElement("ul", null, this.props.blogList.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/blog/" + i.url
    }, i.title))))) : null, this.props.cats ? /*#__PURE__*/_react.default.createElement("div", {
      className: "list"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Blog Categories"), /*#__PURE__*/_react.default.createElement("ul", null, this.props.cats.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/category/" + i.url
    }, i.name))))) : null, this.props.tags ? /*#__PURE__*/_react.default.createElement("div", {
      className: "list"
    }, /*#__PURE__*/_react.default.createElement("h3", null, "Blog Tags"), /*#__PURE__*/_react.default.createElement("ul", null, this.props.tags.map((i, index) => /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "/tag/" + i.url
    }, i.name))))) : null) // <>
    //     <div className="form-group flex-center-h">
    //         <h3>Search for Blogs here</h3>
    //         <input className="form-control" type="text" placeholder="Search for" name="search" required value={this.state.search} onChange={this.onChange}/>
    //         <div className="form-group text-center">
    //             <a href={"/search/" + this.state.search} type="Submit" className="casleyBtn" style={{padding:'5px 1em'}}>Search</a>
    //         </div>
    //     </div>
    //     {this.props.blogList?
    //         <div className="categories mt-5">
    //             <h3>Recently Published</h3>
    //             <ul>{this.props.blogList.map((i, index) =><li key={index}><a href={"/" + i.url}>{i.title}</a></li> )}</ul>
    //         </div>
    //     :null}
    //     {this.props.cats?
    //         <div className="categories mt-5">
    //             <h3>Category List</h3>
    //             <ul>{ this.props.cats.map((i, index) => <li key={index}><a href={"/category/" + i.url}>{i.name}</a></li> )}</ul>
    //         </div>
    //     :null}
    //     {this.props.tags?
    //         <div className="tags mt-5">
    //             <h3>Tag List</h3>
    //             <ul>{ this.props.tags.map((i, index) => <li key={index}><a href={"/tag/" + i.url}>{i.name}</a></li> )}</ul>
    //         </div>
    //     :null}
    // </>
    ;
  }

}

var _default = Sidebar;
exports.default = _default;