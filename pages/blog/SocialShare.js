"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SocialShare = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactShare = require("react-share");

class SocialShare extends _react.Component {
  render() {
    const shareUrl = this.props.url;
    const title = this.props.title;
    const media = this.props.media;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", {
      className: "heading"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Share the "), "Blog"), /*#__PURE__*/_react.default.createElement("div", {
      className: "socialShare"
    }, /*#__PURE__*/_react.default.createElement(_reactShare.FacebookShareButton, {
      url: shareUrl,
      quote: title
    }, " ", /*#__PURE__*/_react.default.createElement(_reactShare.FacebookIcon, {
      size: 32,
      round: true
    }), " "), /*#__PURE__*/_react.default.createElement(_reactShare.FacebookMessengerShareButton, {
      url: shareUrl,
      appId: "154761472308630"
    }, " ", /*#__PURE__*/_react.default.createElement(_reactShare.FacebookMessengerIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.TwitterShareButton, {
      url: shareUrl,
      title: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.TwitterIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.TelegramShareButton, {
      url: shareUrl,
      title: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.TelegramIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.WhatsappShareButton, {
      url: shareUrl,
      title: title,
      separator: ":: "
    }, /*#__PURE__*/_react.default.createElement(_reactShare.WhatsappIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.LinkedinShareButton, {
      url: shareUrl
    }, /*#__PURE__*/_react.default.createElement(_reactShare.LinkedinIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.RedditShareButton, {
      url: shareUrl,
      title: title,
      windowWidth: 660,
      windowHeight: 460
    }, /*#__PURE__*/_react.default.createElement(_reactShare.RedditIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.TumblrShareButton, {
      url: shareUrl,
      title: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.TumblrIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.LivejournalShareButton, {
      url: shareUrl,
      title: title,
      description: shareUrl
    }, /*#__PURE__*/_react.default.createElement(_reactShare.LivejournalIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.MailruShareButton, {
      url: shareUrl,
      title: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.MailruIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.EmailShareButton, {
      url: shareUrl,
      subject: title,
      body: "body"
    }, /*#__PURE__*/_react.default.createElement(_reactShare.EmailIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.ViberShareButton, {
      url: shareUrl,
      title: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.ViberIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.WorkplaceShareButton, {
      url: shareUrl,
      quote: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.WorkplaceIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.LineShareButton, {
      url: shareUrl,
      title: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.LineIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.PocketShareButton, {
      url: shareUrl,
      title: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.PocketIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.InstapaperShareButton, {
      url: shareUrl,
      title: title
    }, /*#__PURE__*/_react.default.createElement(_reactShare.InstapaperIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.PinterestShareButton, {
      url: shareUrl,
      media: media
    }, /*#__PURE__*/_react.default.createElement(_reactShare.PinterestIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.VKShareButton, {
      url: shareUrl,
      image: media
    }, /*#__PURE__*/_react.default.createElement(_reactShare.VKIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.OKShareButton, {
      url: shareUrl,
      image: media
    }, /*#__PURE__*/_react.default.createElement(_reactShare.OKIcon, {
      size: 32,
      round: true
    })), /*#__PURE__*/_react.default.createElement(_reactShare.WeiboShareButton, {
      url: shareUrl,
      title: title,
      image: media
    }, /*#__PURE__*/_react.default.createElement(_reactShare.WeiboIcon, {
      size: 32,
      round: true
    }))));
  }

}

exports.SocialShare = SocialShare;
var _default = SocialShare;
exports.default = _default;
{
  /* <PinterestShareButton url={String(window.location)} media={media}><PinterestIcon size={32} round /></PinterestShareButton> */
}