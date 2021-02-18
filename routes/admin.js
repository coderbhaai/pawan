"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

const router = _express.default.Router();

var pool = require('./mysqlConnector');

const asyncMiddleware = require('./asyncMiddleware');

const func = require('./functions');

const time = new Date().toISOString().slice(0, 19).replace('T', ' ');

const upload = require('express-fileupload');

const fs = require('fs');

router.use(upload()); // const storage = '/var/www/totalinfrasolutions.in/public_html/public/images/'

const storage = '/upload/public/images/'; // const storage = './src/public/images/'

router.get('/AdminUsers', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT name, email, role, phone, created_at FROM users`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results
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
router.get('/AdminMetas', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, title, url, description, keyword, updated_at FROM metas ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results
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
router.post('/addMeta', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "url": req.body.url,
    "title": req.body.title,
    "description": req.body.description,
    "keyword": req.body.keyword,
    "created_at": time,
    "updated_at": time
  };
  let sql = 'INSERT INTO metas SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, title, url, description, keyword, updated_at FROM metas ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Meta added successfuly'
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
}));
router.post('/updateMeta', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "url": req.body.url,
    "title": req.body.title,
    "description": req.body.description,
    "keyword": req.body.keyword,
    "updated_at": time
  };
  let sql = `UPDATE metas SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, title, url, description, keyword, updated_at FROM metas WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Meta updated successfuly'
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
}));
router.get('/adminBlogMeta', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, type, name, url FROM blog_metas ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results
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
router.post('/addBlogMeta', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "type": req.body.type,
    "url": req.body.url,
    "created_at": time,
    "updated_at": time
  };

  if (req.body.type === 'page') {
    if (req.files.cover) {
      var file = req.files.cover;
      var filename = file.name;
      file.mv(storage + 'cover/' + filename, function (err) {
        if (err) {
          func.printError(err);
        }
      });
      post.name = filename;
    }
  } else {
    post.name = req.body.name;
  }

  let sql = 'INSERT INTO blog_metas SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (err) throw err;

      if (results) {
        let sql = `SELECT id, type, name, url, updated_at FROM blog_metas ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err, results2) => {
          try {
            if (err) throw err;
            res.send({
              success: true,
              data: results2[0],
              message: 'Blog meta added successfuly'
            });
          } catch (e) {
            func.logError(e);
            res.status(403);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(403);
      return;
    }
  });
}));
router.post('/updateBlogMeta', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "type": req.body.type,
    "url": req.body.url,
    "updated_at": time
  };

  if (req.body.type === 'page') {
    if (req.files.cover) {
      var file = req.files.cover;
      var filename = file.name;
      var oldCover = req.body.oldCover;

      if (oldCover) {
        if (fs.existsSync(storage + 'cover/' + oldCover)) {
          fs.unlinkSync(storage + 'cover/' + oldCover);
        }

        file.mv(storage + 'cover/' + filename, function (err) {
          if (err) {
            func.printError(err);
          }
        });
      }

      post.name = filename;
    }
  } else {
    post.name = req.body.name;
  }

  let sql = `UPDATE blog_metas SET ? WHERE id = ${req.body.id} `;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) throw err;

      if (err) {
        res.send({
          success: false,
          message: err.sqlMessage
        });
      }

      if (results) {
        let sql = `SELECT id, type, name, url, updated_at FROM blog_metas WHERE id = ${req.body.id}`;
        pool.query(sql, (err, results2) => {
          try {
            if (err) throw err;
            res.send({
              success: true,
              data: results2[0],
              message: 'Blog meta updated successfuly'
            });
          } catch (e) {
            func.logError(e);
            res.status(403);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(403);
      return;
    }
  });
}));
router.get('/adminBlogs', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, title, url, coverImg, updated_at FROM blogs ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results
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
router.get('/blogMetaOptions', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT name as text, id as value FROM blog_metas WHERE type = 'category';
                SELECT name as text, id as value FROM blog_metas WHERE type = 'tag';`;
  pool.query(sql, [1, 2], (err, results) => {
    try {
      if (results) {
        res.send({
          catOptions: results[0],
          tagOptions: results[1]
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
router.post('/addBlog', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'title': req.body.title,
    'url': req.body.url,
    'content': req.body.content,
    'category': req.body.category,
    'tag': req.body.tag,
    "created_at": time,
    "updated_at": time
  };

  if (req.files) {
    var file = req.files.file;
    var filename = file.name;
    post.coverImg = filename;
    file.mv(storage + 'blog/' + filename, function (err) {
      if (err) {
        func.logError(err);
      }
    });
  }

  let sql = `INSERT INTO blogs SET ?`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        res.send({
          success: true,
          message: 'Blog added successfuly'
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
router.get('/getBlog/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, title, url, coverImg, content, category, tag, updated_at FROM blogs WHERE id = '${req.params.id}'`;
  pool.query(sql, async (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        const catList = await func.blogMetaName('category', JSON.parse(results[0].category));
        const tagList = await func.blogMetaName('tag', JSON.parse(results[0].tag));
        res.send({
          data: results[0],
          catList,
          tagList
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/updateBlog', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'title': req.body.title,
    'url': req.body.url,
    'content': req.body.content,
    'category': req.body.category,
    'tag': req.body.tag,
    "updated_at": time
  };

  if (req.files) {
    var file = req.files.file;
    var filename = file.name;
    post.coverImg = filename;

    if (fs.existsSync(storage + 'blog/' + req.body.oldCoverImg)) {
      fs.unlinkSync(storage + 'blog/' + req.body.oldCoverImg);
    }

    file.mv(storage + 'blog/' + filename, function (err) {
      if (err) {
        func.logError(e);
      }
    });
  }

  let sql = `UPDATE blogs SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, title, url, coverImg, category, tag, content, updated_at FROM blogs WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Blog updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/addComment', asyncMiddleware(async (req, res, next) => {
  let post = {
    "blogId": req.body.id,
    "c_order": req.body.order,
    "status": req.body.status,
    "commentId": req.body.commentId,
    "user": req.body.name,
    "email": req.body.email,
    "comment": req.body.comment,
    "created_at": time,
    "updated_at": time
  };
  let sql = 'INSERT INTO comments SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        res.send({
          success: true,
          message: 'Comment submitted for approval'
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
router.post('/updateComment', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'user': req.body.name,
    'email': req.body.email,
    'comment': req.body.comment,
    'status': req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE comments SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT a.id, a.blogId, a.c_order, a.commentId, a.user, a.email, a.comment, a.status, a.updated_at, b.url, b.title FROM comments as a
                    left join blogs as b on b.id = a.blogId WHERE a.id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Comment updated successfuly'
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
}));
router.get('/adminComments', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT a.id, a.blogId, a.c_order, a.commentId, a.user, a.email, a.comment, a.status, a.updated_at, b.url, b.title FROM comments as a
                left join blogs as b on b.id = a.blogId  ORDER BY a.id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results
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
router.get('/adminContacts', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT name, email, phone, message, created_at FROM contact_forms ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results
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
router.get('/adminBasic', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, type, name, tab1, tab2, tab3 FROM basic ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results
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
router.post('/addBasic', asyncMiddleware(async (req, res, next) => {
  let post = {
    "type": req.body.type,
    "tab1": req.body.tab1,
    "tab2": req.body.tab2,
    "created_at": time,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = Date.now() + '-' + file.name;
      file.mv(storage + 'basic/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });

      if (req.body.type == 'Survey') {
        post.name = req.body.name;
        post.tab3 = imageName;
      } else {
        post.name = imageName;
      }
    } else {
      post.name = req.body.name;
    }

    let sql = 'INSERT INTO basic SET ?';
    pool.query(sql, post, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          let sql = `SELECT id, type, name, tab1, tab2, tab3 FROM basic ORDER BY id DESC LIMIT 1`;
          pool.query(sql, (err2, results2) => {
            try {
              if (err2) throw err;
              res.send({
                success: true,
                data: results2[0],
                message: 'Basic added successfuly'
              });
            } catch (e) {
              func.logError(e);
              res.status(403);
              return;
            }
          });
        }
      } catch (e) {
        func.logError(e);
        res.status(403);
        return;
      }
    });
  }
}));
router.post('/updateBasic', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "type": req.body.type,
    "tab1": req.body.tab1,
    "tab2": req.body.tab2,
    "updated_at": time
  }; // if(req.files){
  //     if(req.files.image){
  //         var file = req.files.image
  //         var imageName = file.name
  //         post.name = imageName
  //         if (fs.existsSync(storage+'basic/'+req.body.oldImage)) { fs.unlinkSync(storage+'basic/'+req.body.oldImage) }
  //         file.mv(storage+'basic/'+imageName, function(err){ if(err){ func.logError(err) } })
  //     }
  // }else{
  //     post.name = req.body.name
  // }

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = Date.now() + '-' + file.name;
      file.mv(storage + 'basic/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });

      if (fs.existsSync(storage + 'basic/' + req.body.oldImage)) {
        fs.unlinkSync(storage + 'basic/' + req.body.oldImage);
      }

      if (req.body.type == 'Survey') {
        post.name = req.body.name;
        post.tab3 = imageName;
      } else {
        post.name = imageName;
      }
    } else {
      post.name = req.body.name;
    }
  }

  let sql = `UPDATE basic SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, type, name, tab1, tab2, tab3 FROM basic WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Basic updated successfuly'
              });
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
}));
router.get('/publisherList', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT name, id FROM basic WHERE type = 'publisher';
                SELECT name, id FROM category;
                SELECT name as text, id as value FROM basic WHERE type = 'Tags';`;
  pool.query(sql, [1, 2, 3], (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          success: true,
          data: results[0],
          categoryList: results[1],
          tagOptions: results[2]
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/fetchStore', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, title, url, name, logo, category, display_order, status, updated_at FROM store ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results
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
router.post('/addStore', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'name': req.body.name,
    'url': req.body.url,
    'publisher': req.body.publisher,
    'display_order': req.body.display_order,
    'title': req.body.title,
    'description': req.body.description,
    'category': req.body.category,
    'tags': req.body.tags,
    'tagline': req.body.tagline,
    'cashback': req.body.cashback,
    'status': 1,
    "created_at": time,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.logo) {
      var file = req.files.logo;
      var logoName = file.name;
      post.logo = logoName;
      file.mv(storage + 'store/logo/' + logoName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }

    if (req.files.banner) {
      var file = req.files.banner;
      var bannerName = file.name;
      post.banner = bannerName;
      file.mv(storage + 'store/banner/' + bannerName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `INSERT INTO store SET ?`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          success: true,
          message: 'Store created successfuly'
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/getStore/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, name, url, publisher, title, description, category, tags, logo, display_order, banner, tagline, cashback, updated_at FROM store WHERE id = '${req.params.id}';`;
  pool.query(sql, async (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        const tagData = await func.tagName(JSON.parse(results[0].tags));
        res.send({
          data: results[0],
          tagData: tagData
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/updateStore', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'name': req.body.name,
    'url': req.body.url,
    'publisher': req.body.publisher,
    'display_order': req.body.display_order,
    'title': req.body.title,
    'description': req.body.description,
    'category': req.body.category,
    'tags': req.body.tags,
    'tagline': req.body.tagline,
    'cashback': req.body.cashback,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.logo) {
      var file = req.files.logo;
      var logoName = file.name;
      post.logo = logoName;

      if (fs.existsSync(storage + 'store/logo/' + req.body.oldLogoName)) {
        fs.unlinkSync(storage + 'store/logo/' + req.body.oldLogoName);
      }

      file.mv(storage + 'store/logo/' + logoName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }

    if (req.files.banner) {
      var file = req.files.banner;
      var bannerName = file.name;
      post.banner = bannerName;

      if (fs.existsSync(storage + 'store/banner/' + req.body.oldBannerName)) {
        fs.unlinkSync(storage + 'store/banner/' + req.body.oldBannerName);
      }

      file.mv(storage + 'store/banner/' + bannerName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `UPDATE store SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          success: true,
          message: 'Store updated successfuly'
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/changeStoreStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE store SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, title, url, name, logo, display_order, status, updated_at FROM store WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'store updated successfuly'
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
}));
router.get('/fetchCategory', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, type, category, title, url, name, icon, display_order, banner, status, updated_at FROM category ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/addCategory', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "type": req.body.type,
    "name": req.body.name,
    "url": req.body.url,
    "title": req.body.title,
    "display_order": req.body.display_order,
    "status": 1,
    "created_at": time,
    "updated_at": time
  };

  if (req.body.type == 'SubCategory') {
    post.category = req.body.category;
  }

  if (req.files) {
    if (req.files.icon) {
      var file = req.files.icon;
      var iconName = file.name;
      post.icon = iconName;
      file.mv(storage + 'category/icon/' + iconName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }

    if (req.files.banner) {
      var file = req.files.banner;
      var bannerName = file.name;
      post.banner = bannerName;
      file.mv(storage + 'category/banner/' + bannerName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `INSERT INTO category SET ?`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, type, category, title, url, name, icon, display_order, banner, status, updated_at FROM category ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Category added successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/updateCategory', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "type": req.body.type,
    "name": req.body.name,
    "url": req.body.url,
    "title": req.body.title,
    "status": req.body.status,
    "display_order": req.body.display_order,
    "updated_at": time
  };

  if (req.body.type == 'SubCategory') {
    post.category = req.body.category;
  }

  if (req.files) {
    if (req.files.icon) {
      var file = req.files.icon;
      var iconName = file.name;
      post.icon = iconName;

      if (fs.existsSync(storage + 'category/icon/' + req.body.oldIconName)) {
        fs.unlinkSync(storage + 'category/icon/' + req.body.oldIconName);
      }

      file.mv(storage + 'category/icon/' + iconName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }

    if (req.files.banner) {
      var file = req.files.banner;
      var bannerName = file.name;
      post.banner = bannerName;

      if (fs.existsSync(storage + 'category/banner/' + req.body.oldBannerName)) {
        fs.unlinkSync(storage + 'category/banner/' + req.body.oldBannerName);
      }

      file.mv(storage + 'category/banner/' + bannerName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `UPDATE category SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, type, category, title, url, name, icon, display_order, banner, status, updated_at FROM category WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Category updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/changeCategoryStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE category SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, title, url, name, icon, display_order, banner, status, updated_at FROM category WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Category updated successfuly'
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
}));
router.get('/couponData', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  const stPub = await func.stPub();
  let sql = `SELECT id, store, title, category, tags, url, publisher, commission, image, offer, cashback, status, start, expiry, coupon_type, updated_at FROM coupon ORDER BY id DESC;
                SELECT id, name FROM basic WHERE type='CouponType' ORDER BY id DESC;
                SELECT id, name FROM category ORDER BY id DESC;`;
  pool.query(sql, [1, 2], (err, results) => {
    try {
      if (results) {
        res.send({
          data: results[0],
          couponType: results[1],
          categoryList: results[2],
          store: stPub[0],
          publisher: stPub[1]
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
router.post('/addCoupon', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'type': 'coupon',
    'store': req.body.store,
    'category': req.body.category,
    'tags': req.body.tags,
    'title': req.body.title,
    'url': req.body.url,
    'publisher': req.body.publisher,
    'commission': req.body.commission,
    'offer': req.body.offer,
    'cashback': req.body.cashback,
    'status': req.body.status,
    'start': req.body.start,
    'expiry': req.body.expiry,
    'coupon_type': req.body.coupon_type,
    "created_at": time,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = file.name;
      post.image = imageName;
      file.mv(storage + 'store/coupon/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `INSERT INTO coupon SET ?`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, store, title, category, tags, url, publisher, commission, image, offer, cashback, status, start, expiry, coupon_type, updated_at from coupon ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Meta added successfuly'
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
}));
router.post('/changeCouponStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE coupon SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, store, title, url, publisher, commission, image, offer, cashback, status, start, expiry, type, updated_at FROM coupon WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Category updated successfuly'
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
}));
router.post('/updateCoupon', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'store': req.body.store,
    'category': req.body.category,
    'tags': req.body.tags,
    'title': req.body.title,
    'url': req.body.url,
    'publisher': req.body.publisher,
    'commission': req.body.commission,
    'offer': req.body.offer,
    'cashback': req.body.cashback,
    'status': req.body.status,
    'start': req.body.start,
    'expiry': req.body.expiry,
    'coupon_type': req.body.coupon_type,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = file.name;
      post.image = imageName;

      if (fs.existsSync(storage + 'store/coupon/' + req.body.oldImageName)) {
        fs.unlinkSync(storage + 'store/coupon/' + req.body.oldImageName);
      }

      file.mv(storage + 'store/coupon/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `UPDATE coupon SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, store, title, category, tags, url, publisher, commission, image, offer, cashback, status, start, expiry, coupon_type, updated_at FROM coupon WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Coupon updated successfuly'
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
}));
router.get('/dealData', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, store, url, category, title, percent, image, tagline, cutoff, current_value, status, updated_at FROM deal ORDER BY id DESC;
    SELECT id, name FROM store ORDER BY id DESC;
    SELECT id, name FROM category ORDER BY id DESC;`;
  pool.query(sql, [1, 2, 3], (err, results) => {
    try {
      if (results) {
        res.send({
          data: results[0],
          store: results[1],
          categoryList: results[2]
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
router.post('/addDeal', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'type': 'deal',
    'store': req.body.store,
    'url': req.body.url,
    'category': req.body.category,
    'title': req.body.title,
    'percent': req.body.percent,
    'tagline': req.body.tagline,
    'cutoff': req.body.cutoff,
    'current_value': req.body.current_value,
    'status': req.body.status,
    "created_at": time,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = file.name;
      post.image = imageName;
      file.mv(storage + 'store/deal/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `INSERT INTO deal SET ?`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, store, url, category, title, percent, image, tagline, cutoff, current_value, status, updated_at FROM deal ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Deal added successfuly'
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
}));
router.post('/changeDealStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE deal SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, store, url, category, title, percent, image, tagline, cutoff, current_value, status, updated_at FROM deal WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Deal updated successfuly'
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
}));
router.post('/updateDeal', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'store': req.body.store,
    'url': req.body.url,
    'category': req.body.category,
    'title': req.body.title,
    'percent': req.body.percent,
    'tagline': req.body.tagline,
    'cutoff': req.body.cutoff,
    'current_value': req.body.current_value,
    'status': req.body.status,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = file.name;
      post.image = imageName;

      if (fs.existsSync(storage + 'store/deal/' + req.body.oldImageName)) {
        fs.unlinkSync(storage + 'store/deal/' + req.body.oldImageName);
      }

      file.mv(storage + 'store/deal/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `UPDATE deal SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, store, url, category, title, percent, image, tagline, cutoff, current_value, status, updated_at FROM deal WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Deal updated successfuly'
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
}));
router.get('/adminLeaderBoard', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  const stPub = await func.stPub();
  const users = await func.userOptions();
  let sql = `SELECT a.id, a.userId, a.reward, a.redeemed, a.total, a.updated_at, b.name, b.email, b.phone FROM leaderboard as a
                    left join users as b on b.id = a.userId;`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        res.send({
          data: results,
          users: users,
          store: stPub[0],
          publisher: stPub[1]
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
router.post('/addCashback', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'userId': req.body.userId,
    'publisher': req.body.publisher,
    'date': req.body.date,
    'store': req.body.store,
    'amount': req.body.amount,
    'rewardPayout': req.body.rewardPayout,
    'description': req.body.description,
    'customerPayout': req.body.customerPayout,
    "created_at": time,
    "updated_at": time
  };
  let sql = `INSERT INTO cashback SET ?`;
  pool.query(sql, post, async (err, results) => {
    try {
      if (results) {
        const data = await func.updateLeaderBoard(req.body.userId, req.body.points);
        res.send({
          success: true,
          data: data,
          message: 'Cashback updated successfuly'
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
router.get('/adminCashbackData', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  const data = await func.userOptions();
  const stPub = await func.stPub();
  let sql = `SELECT a.id, a.userId, a.publisher, a.date, a.store, a.amount, a.rewardPayout, a.customerPayout, a.description, a.updated_at, b.name, b.email, b.phone, c.name as store, d.name as publisher FROM cashback as a 
    left join users as b on b.id = a.userId 
    left join store as c on c.id = a.store
    left join basic as d on d.id = a.publisher;`;
  pool.query(sql, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results,
          userOptions: data,
          store: stPub[0],
          publisher: stPub[1]
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/footerData', asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, name, url FROM store WHERE status= 1 ORDER BY display_order ASC;
                SELECT id, title, url FROM coupon WHERE status= 1;
                SELECT id, title, url FROM deal WHERE status= 1;`;
  pool.query(sql, [1, 2, 3], (err, results) => {
    try {
      if (results) {
        res.send({
          store: results[0],
          coupon: results[1],
          deal: results[2]
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
router.get('/adminAds', asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, type, image, url, status, target, updated_at FROM ads ORDER BY id DESC;`;
  pool.query(sql, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/addAds', asyncMiddleware(async (req, res, next) => {
  let post = {
    "type": req.body.type,
    "url": req.body.url,
    "status": req.body.status,
    "target": req.body.target,
    "created_at": time,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = file.name;
      post.image = imageName;
      file.mv(storage + 'ads/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = 'INSERT INTO ads SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, type, image, url, target, status, updated_at FROM ads ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) throw err;
            res.send({
              success: true,
              data: results2[0],
              message: 'Advertisement added successfuly'
            });
          } catch (e) {
            func.logError(e);
            res.status(403);
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
}));
router.post('/updateAds', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "type": req.body.type,
    "url": req.body.url,
    "status": req.body.status,
    "target": req.body.target,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = file.name;
      post.image = imageName;

      if (fs.existsSync(storage + 'ads/' + req.body.oldImage)) {
        fs.unlinkSync(storage + 'ads/' + req.body.oldImage);
      }

      file.mv(storage + 'ads/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `UPDATE ads SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, type, image, url, target, status, updated_at FROM ads WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Advertisement updated successfuly'
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
}));
router.post('/changeAdStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE ads SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, type, image, url, target, status, updated_at FROM ads WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Advertisement updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/getSpecial', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, image, url, status, tag, updated_at FROM special ORDER BY id DESC;`;
  pool.query(sql, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/addSpecial', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  let post = {
    "url": req.body.url,
    "status": req.body.status,
    "tag": req.body.tag,
    "created_at": time,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = file.name;
      post.image = imageName;
      file.mv(storage + 'special/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = 'INSERT INTO special SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, image, url, status, tag, updated_at FROM special ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) throw err;
            res.send({
              success: true,
              data: results2[0],
              message: 'Special added successfuly'
            });
          } catch (e) {
            func.logError(e);
            res.status(403);
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
}));
router.post('/updateSpecial', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "url": req.body.url,
    "status": req.body.status,
    "tag": req.body.tag,
    "updated_at": time
  };

  if (req.files) {
    if (req.files.image) {
      var file = req.files.image;
      var imageName = file.name;
      post.image = imageName;

      if (fs.existsSync(storage + 'special/' + req.body.oldImage)) {
        fs.unlinkSync(storage + 'special/' + req.body.oldImage);
      }

      file.mv(storage + 'special/' + imageName, function (err) {
        if (err) {
          func.logError(err);
        }
      });
    }
  }

  let sql = `UPDATE special SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, image, url, status, tag, updated_at FROM special WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Special updated successfuly'
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
}));
router.post('/changeSpecialStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE special SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, image, url, status, tag, updated_at FROM special WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Special updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/adminQuestionBank', asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, title, type, mandatory, options, answer, status, updated_at FROM question ORDER BY id DESC;`;
  pool.query(sql, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/addQuestion', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  let post = {
    "title": req.body.title,
    "type": req.body.type,
    "options": req.body.options,
    "mandatory": req.body.mandatory,
    "answer": req.body.answer,
    "status": req.body.status,
    "created_at": time,
    "updated_at": time
  };
  let sql = 'INSERT INTO question SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, title, type, mandatory, options, answer, status, updated_at FROM question ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) throw err;
            res.send({
              success: true,
              data: results2[0],
              message: 'Question added successfuly'
            });
          } catch (e) {
            func.logError(e);
            res.status(403);
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
}));
router.post('/changeQuestionStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE question SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, title, type, mandatory, options, answer, status, updated_at FROM question WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Special updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/updateQuestion', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "title": req.body.title,
    "type": req.body.type,
    "options": req.body.options,
    "mandatory": req.body.mandatory,
    "answer": req.body.answer,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE question SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, title, type, mandatory, options, answer, status, updated_at FROM question WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Question updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/adminQuestionBank', asyncMiddleware(async (req, res) => {
  const data = await func.adminQuestionBank();
  res.send({
    data
  });
}));
router.get('/adminSurvey', asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, title, status, reward, updated_at FROM survey ORDER BY id DESC;`;
  pool.query(sql, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/addSurvey', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  let post = {
    "title": req.body.title,
    "status": req.body.status,
    "reward": req.body.reward,
    "questions": req.body.questions,
    "created_at": time,
    "updated_at": time
  };
  let sql = 'INSERT INTO survey SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          success: true
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/changeSurveyStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE survey SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, title, status, reward, updated_at FROM survey WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Special updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/getSurvey/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  const data = await func.adminQuestionBank();
  let sql = `SELECT id, title, questions, status, reward, updated_at FROM survey WHERE id = '${req.params.id}'`;
  pool.query(sql, async (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          questions: results[0],
          data
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/updateSurvey', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "title": req.body.title,
    "status": req.body.status,
    "reward": req.body.reward,
    "questions": req.body.questions,
    "updated_at": time
  };
  let sql = `UPDATE survey SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          success: true
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/surveyQuestionnaire/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, title, questions, status, reward, updated_at FROM survey WHERE id = '${req.params.id}'`;
  pool.query(sql, async (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        const data = await func.userQuestionBank(JSON.parse(results[0].questions));
        res.send({
          questions: results[0],
          data
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/submitSurvey', [func.verifyToken], asyncMiddleware(async (req, res) => {
  let post = {
    "surveyId": req.body.surveyId,
    "userId": req.body.userId,
    "answers": req.body.answers,
    "created_at": time,
    "updated_at": time
  };
  let sql = 'INSERT INTO surveyresponse SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          success: true
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/surveyResponse', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let sql = `SELECT a.id, a.surveyId, a.userId, a.answers, a.updated_at, b.name, b.email, b.phone, c.title, c.reward FROM surveyresponse as a 
    left join users as b on b.id = a.userId left join survey as c on c.id = a.id;`;
  pool.query(sql, async (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/checkSurveyData/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  // let sql = `SELECT id, title, questions, status, reward, updated_at FROM survey WHERE id = '${req.params.id}'`
  let sql = `SELECT a.id, a.surveyId, a.userId, a.answers, a.updated_at, b.name, b.email, b.phone, c.title, c.reward, c.questions FROM surveyresponse as a 
    left join users as b on b.id = a.userId left join survey as c on c.id = a.surveyId WHERE a.id = '${req.params.id}';`;
  pool.query(sql, async (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        const data = await func.userQuestionBank(JSON.parse(results[0].questions));
        res.send({
          questions: results[0],
          data
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/userSurveyList/:id', [func.verifyToken], asyncMiddleware(async (req, res) => {
  let sql = `SELECT a.id, a.surveyId, a.updated_at, b.title, b.reward FROM surveyresponse as a left join survey as b on b.id = a.surveyId WHERE a.userId = '${req.params.id}'`;
  pool.query(sql, async (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/userCashback/:id', [func.verifyToken], asyncMiddleware(async (req, res) => {
  let sql = `SELECT a.id, a.publisher, a.date, a.store, a.customerPayout as payout, a.updated_at, b.name as store, b.url FROM cashback as a left join store as b on b.id = a.store WHERE a.userId = '${req.params.id}'`;
  pool.query(sql, async (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/adminCareer', asyncMiddleware(async (req, res) => {
  let sql = `SELECT id, role, location, qualification, experience, description, status, updated_at FROM career ORDER BY id DESC;`;
  pool.query(sql, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/addCareer', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  let post = {
    "role": req.body.role,
    "location": req.body.location,
    "qualification": req.body.qualification,
    "experience": req.body.experience,
    "description": req.body.description,
    "status": req.body.status,
    "created_at": time,
    "updated_at": time
  };
  let sql = 'INSERT INTO career SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (results) {
        let sql = `SELECT id, role, location, qualification, experience, description, status, updated_at FROM career ORDER BY id DESC LIMIT 1`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) throw err;
            res.send({
              success: true,
              data: results2[0],
              message: 'Job Listed successfuly'
            });
          } catch (e) {
            func.logError(e);
            res.status(403);
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
}));
router.post('/changeCareerStatus', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "id": req.body.id,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE career SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, role, location, qualification, experience, description, status, updated_at FROM career WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Job updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/updateCareer', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    "role": req.body.role,
    "location": req.body.location,
    "qualification": req.body.qualification,
    "experience": req.body.experience,
    "description": req.body.description,
    "status": req.body.status,
    "updated_at": time
  };
  let sql = `UPDATE career SET ? WHERE id = ${req.body.id}`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        let sql = `SELECT id, role, location, qualification, experience, description, status, updated_at FROM career WHERE id = ${req.body.id}`;
        pool.query(sql, (err2, results2) => {
          try {
            if (err2) {
              throw err2;
            }

            if (results2) {
              res.send({
                success: true,
                data: results2[0],
                message: 'Job updated successfuly'
              });
            }
          } catch (e) {
            func.logError(e);
            res.status(500);
            return;
          }
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/applyForJob', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res) => {
  let post = {
    'careerId': req.body.careerId,
    'name': req.body.name,
    'email': req.body.email,
    'phone': req.body.phone,
    "created_at": time,
    "updated_at": time
  };

  if (req.files) {
    var file = req.files.file;
    var filename = file.name;
    post.resume = filename;
    file.mv(storage + 'career/' + filename, function (err) {
      if (err) {
        func.logError(err);
      }
    });
  }

  let sql = `INSERT INTO jobapplication SET ?`;
  pool.query(sql, post, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          success: true,
          message: 'Job Applied successfuly'
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.get('/jobApplications', asyncMiddleware(async (req, res) => {
  let sql = `SELECT a.id, a.careerId, a.name, a.email, a.phone, a.resume, a.updated_at, b.role, b.location FROM jobapplication as a
                left join career as b on b.id = a.careerId ORDER BY id DESC;`;
  pool.query(sql, (err, results) => {
    try {
      if (err) {
        throw err;
      }

      if (results) {
        res.send({
          data: results
        });
      }
    } catch (e) {
      func.logError(e);
      res.status(500);
      return;
    }
  });
}));
router.post('/contactForm', (req, res, next) => {
  let post = {
    "name": req.body.name,
    "email": req.body.email,
    "phone": req.body.phone,
    "message": req.body.message,
    "created_at": time,
    "updated_at": time
  };
  let sql = 'INSERT INTO contact_forms SET ?';
  pool.query(sql, post, (err, results) => {
    try {
      if (err) throw err; // const mailBody =`
      //   <h2><strong>Dear ${req.body.name}</strong></h2>
      //   <p>Thanks for connecting with us.</p>
      //   <p>The details provided by you are:</p>
      //   <ul>
      //     <li>Email: ${req.body.email}</li>
      //     <li>Phone: ${req.body.phone}</li>
      //     <li>Message: ${req.body.message}</li>
      //   </ul>
      //   <p>We will reach back to you on priority. If anything urgent, you can call me on +91-84240 03840 / +91-93548 11331</p><br/>
      //   <p>Warm Regards</p>
      //   <p>Amit Kumar Khare</p>
      //   <a href="https://www.linkedin.com/in/amitkhare588/"><p>Connect on Linkedin</p></a>
      //   `
      // let mailOptions = { to: req.body.email, from: '"AmitKK"<amit@amitkk.com>', cc: "amit.khare588@gmail.com", subject: "Form filled on website ✔ www.amitkk.com", html: mailBody }
      // transporter.sendMail( mailOptions, (error, info)=>{
      //   if(error){ func.printError(err) }
      //   func.printError("Message sent: %s")
      // });

      res.send({
        success: true,
        message: "Mail Sent"
      });
    } catch (e) {
      func.logError(e);
      res.status(403);
      return;
    }
  });
});
module.exports = router;