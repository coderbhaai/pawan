"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server");

var _Blog = _interopRequireDefault(require("../pages/blog/Blog"));

var _Single = _interopRequireDefault(require("../pages/blog/Single"));

const router = _express.default.Router();

var pool = require('./mysqlConnector');

const asyncMiddleware = require('./asyncMiddleware');

const func = require('./functions');

router.get('/', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta('/blog');
  let sql = `SELECT id, title, url, coverImg, updated_at FROM blogs ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        var title = `<h1 class="heading"><span>Interesting Reads </span> For you</h1>`;
        const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Blog.default, {
          blogs: results,
          title: title
        }));
        res.status(200).render('blog/Blog', {
          reactApp: reactComp,
          meta: meta
        });
      } else if (err) {
        throw err;
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/:url', asyncMiddleware(async (req, res, next) => {
  let sql = `SELECT * FROM blogs WHERE url = '${req.params.url}'`;
  const meta = await func.getMeta(`/blog/${req.params.url}`);
  const blogs = await func.suggestBlogs();
  pool.query(sql, async (err, results) => {
    try {
      if (results[0]) {
        const sidebar = await func.blogMetaData(results[0].id); // if(results[0] && meta){
        //     meta[0].img = results[0].coverImg
        // }

        const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Single.default, {
          blogs: blogs,
          data: results[0],
          blogList: sidebar[0],
          cats: sidebar[1],
          tags: sidebar[2],
          comments: sidebar[3],
          response: sidebar[4]
        }));
        res.status(200).render('blog/Single', {
          reactApp: reactComp,
          meta: meta
        });
      } else if (err) {
        throw err;
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/list/:type/:url', asyncMiddleware(async (req, res, next) => {
  if (req.params.type == "All") {
    var sql = `SELECT id, title, url, coverImg, updated_at FROM blogs ORDER BY id DESC`;
    var title = `<h1 class="heading"><span>Interesting Reads </span> For you</h1>`;
    pool.query(sql, (err, results) => {
      try {
        if (results) {
          res.send({
            blogs: results,
            title: title
          });
        } else if (err) {
          throw err;
        }
      } catch (e) {
        func.logError(e);
        res.status(500);
        return;
      }
    });
  }

  if (req.params.type == "category") {
    var sql1 = `SELECT name FROM blog_metas WHERE url= '${req.params.url}'`;
    pool.query(sql1, (err, results) => {
      try {
        if (results) {
          var sql2 = `SELECT id, title, url, coverImg, updated_at FROM blogs  WHERE category LIKE '%${results[0].name}%' ORDER BY id DESC`;
          pool.query(sql2, (err2, results2) => {
            try {
              if (results2) {
                var title = `<h1 class="heading"><span>Blogs of category: </span> ${results[0].name}</h1>`;
                res.send({
                  blogs: results2,
                  title: title
                });
              } else if (err2) {
                throw err2;
              }
            } catch (e) {
              func.logError(e);
              res.status(500);
              return;
            }
          });
        } else if (err) {
          throw err;
        }
      } catch (e) {
        func.logError(e);
        res.status(500);
        return;
      }
    });
  }

  if (req.params.type == "tag") {
    var sql1 = `SELECT name FROM blog_metas WHERE url= '${req.params.url}'`;
    pool.query(sql1, (err, results) => {
      try {
        if (results) {
          var sql2 = `SELECT id, title, url, coverImg, updated_at FROM blogs  WHERE tag LIKE '%${results[0].name}%' ORDER BY id DESC`;
          pool.query(sql2, (err2, results2) => {
            try {
              if (results2) {
                var title = `<h1 class="heading"><span>Blogs of tag: </span> ${results[0].name}</h1>`;
                res.send({
                  blogs: results2,
                  title: title
                });
              } else if (err2) {
                throw err2;
              }
            } catch (e) {
              func.logError(e);
              res.status(500);
              return;
            }
          });
        } else if (err) {
          throw err;
        }
      } catch (e) {
        func.logError(e);
        res.status(500);
        return;
      }
    });
  }

  if (req.params.type == "search") {
    var sql = `SELECT id, title, url, coverImg, updated_at FROM blogs  WHERE title LIKE '%${req.params.url}%' OR content LIKE '%${req.params.url}%' ORDER BY id DESC`;
    pool.query(sql, (err, results) => {
      try {
        if (results) {
          var title = `<h1 class="heading"><span>You searched for blogs containing : </span>${req.params.url}</h1>`;
          res.send({
            blogs: results,
            title: title
          });
        } else if (err) {
          throw err;
        }
      } catch (e) {
        func.logError(e);
        res.status(500);
        return;
      }
    });
  }
}));
router.get('/single/:url', asyncMiddleware(async (req, res, next) => {
  const blogs = await func.suggestBlogs();
  let sql = `SELECT id, title, url, coverImg, content, category, tag FROM blogs WHERE url = '${req.params.url}'`;
  pool.query(sql, async (err, results) => {
    try {
      if (results) {
        const sidebar = await func.blogMetaData(results[0].id);
        res.send({
          data: results[0],
          blogs: blogs,
          blogList: sidebar[0],
          cats: sidebar[1],
          tags: sidebar[2],
          comments: sidebar[3],
          response: sidebar[4]
        });
      } else if (err) {
        throw err;
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/blogMetaData', asyncMiddleware(async (req, res, next) => {
  let sql = `SELECT title, url FROM blogs ORDER BY id DESC; SELECT name, url FROM blog_metas WHERE type = 'category'; SELECT name, url FROM blog_metas WHERE type = 'tag'`;
  pool.query(sql, [1, 2, 3], (err, results) => {
    try {
      if (results) {
        res.send({
          blogs: results[0],
          category: results[1],
          tag: results[2]
        });
      } else if (err) {
        throw err;
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
module.exports = router;