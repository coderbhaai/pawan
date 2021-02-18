"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printError = printError;
exports.specialList = specialList;
exports.adHomeList = adHomeList;
exports.adList = adList;
exports.storeData = storeData;
exports.adminQuestionBank = adminQuestionBank;
exports.userQuestionBank = userQuestionBank;
exports.surveyData = surveyData;
exports.getUser = getUser;
exports.allStoreData = allStoreData;
exports.storeSidebar = storeSidebar;
exports.homeData = homeData;
exports.shopData = shopData;
exports.headerData = headerData;
exports.categoryData = categoryData;
exports.updateLeaderBoard = updateLeaderBoard;
exports.getLeaderBoard = getLeaderBoard;
exports.stPub = stPub;
exports.userOptions = userOptions;
exports.getMeta = getMeta;
exports.tagName = tagName;
exports.blogMetaName = blogMetaName;
exports.blogMetaData = blogMetaData;
exports.suggestBlogs = suggestBlogs;
exports.verifyToken = verifyToken;
exports.verifyAdmin = verifyAdmin;
exports.verifyUser = verifyUser;
exports.logError = logError;

var _jsonwebtoken = require("jsonwebtoken");

var mysql = require('mysql');

const jwt = require('jsonwebtoken');

const nodemailer = require("nodemailer");

var pool = require('./mysqlConnector');

const time = new Date().toISOString().slice(0, 19).replace('T', ' ');
const recomStore = 22;

function printError(mesg) {
  console.log('mesg', mesg);
}

function specialList() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT url, image, tag FROM special WHERE status= '1';`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function adHomeList() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT type, url, image, target FROM ads WHERE status= '1';`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function adList(data) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT type, url, image, target FROM ads WHERE type IN (${data});`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function storeData(url) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT id, name, title, tagline FROM store WHERE url= '${url}'`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          if (results[0]) {
            var sql = `SELECT id, type, title, url, commission, offer, cashback, category, store, image, expiry FROM coupon WHERE status= '1' AND store= '${results[0].id}';
                                    SELECT id, type, title, url, percent, tagline, cutoff, current_value, category, store, image FROM deal WHERE status= '1' AND store= '${results[0].id}';
                                    SELECT id, name, logo, url FROM store WHERE status= '1' LIMIT 3;
                                    SELECT id, name, title, tagline FROM store WHERE url= '${url}';`;
            pool.query(sql, [1, 2, 3, 4], (err2, results2) => {
              try {
                if (err2) {
                  throw err2;
                }

                if (results2) {
                  resolve(results2);
                }
              } catch (e) {
                logError(e);
                return;
              }
            });
          }
        } else {
          resolve([]);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function adminQuestionBank() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT id, title, type, mandatory, options, answer, status, updated_at FROM question ORDER BY id DESC;`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve({
            results
          });
        }
      } catch (e) {
        func.logError(e);
        res.status(500);
        return;
      }
    });
  });
}

function userQuestionBank(data) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT id, title, type, mandatory, options, updated_at FROM question WHERE id IN (${data});`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve({
            results
          });
        }
      } catch (e) {
        func.logError(e);
        res.status(500);
        return;
      }
    });
  });
}

function surveyData() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT id, type, name, tab3 FROM basic WHERE type='Survey' AND tab2=1 ORDER BY id DESC;`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve({
            results
          });
        }
      } catch (e) {
        func.logError(e);
        res.status(500);
        return;
      }
    });
  });
}

function getUser(code) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT id FROM users WHERE referralcode='${code}';`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results[0]) {
          resolve(results[0].id);
        } else {
          resolve(null);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
} // export function allStoreData() {
//     return new Promise((resolve, reject) => {
//         var sql = `SELECT id, type, category, title, url, commission, offer, cashback, image, expiry, store FROM coupon WHERE status= '1';
//                     SELECT id, type, category, title, url, percent, tagline, cutoff, current_value, image, store FROM deal WHERE status= '1';
//                     SELECT id, name, category, logo, url FROM store WHERE status= '1';
//                     SELECT id, name, url, icon FROM category WHERE status= '1' AND type='Category' ORDER BY display_order ASC;`;
//         pool.query(sql, [1,2,3,4], (err, results) => {
//             try{
//             if(err){ throw err }
//             if(results){ resolve( results ) }
//             }catch(e){ logError(e); return; }
//         })
//     })
// }


function allStoreData() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT id, name, category, logo, url, cashback FROM store WHERE status= '1';`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function storeSidebar() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT id, name, category, logo, url FROM store WHERE status= '1';
                   SELECT id, name, url, icon FROM category WHERE status= '1' AND type='Category' ORDER BY display_order ASC;`;
    pool.query(sql, [1, 2], (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function homeData() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT name, tab1, tab2 FROM basic WHERE type= 'Carousel';
                    SELECT id, name, url, icon FROM category WHERE status= '1' AND type='Category' ORDER BY display_order ASC;
                    SELECT a.id, a.name, a.url, a.logo, a.category, a.tagline, a.cashback, b.icon, b.banner FROM store as a left join category as b on b.id = a.category WHERE a.status= '1' ORDER BY a.display_order ASC; 
                    SELECT title, url, image, category FROM deal WHERE status= '1';
                    SELECT title, url, image, category, tags, commission, offer, cashback FROM coupon WHERE status= '1';`;
    pool.query(sql, [1, 2, 3, 4, 5], (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function shopData() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT logo, tagline, cashback, url, tags FROM store WHERE status= 1;
                    SELECT id, name FROM basic WHERE type ='Tags'`;
    pool.query(sql, [1, 2], (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function headerData() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT logo, tagline, cashback, url, tags FROM store WHERE status= 1;
                    SELECT id, name FROM basic WHERE type ='Tags';
                    SELECT id, name, url FROM category WHERE status= 1 AND type = 'Category';
                    SELECT id, name, url, cashback FROM store WHERE status= 1 AND tags LIKE '%${recomStore}%';`;
    pool.query(sql, [1, 2], (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function categoryData() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT id, type, category, name, url FROM category WHERE status= 1;`;
    pool.query(sql, (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function updateLeaderBoard(id, points) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT id, reward, redeemed, total FROM leaderboard WHERE userId = '${id}'`;
    pool.query(sql, async (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results.length) {
          let post = {
            'userId': id,
            'reward': parseInt(results[0].reward) + parseInt(points),
            'total': parseInt(results[0].total) + parseInt(points),
            "updated_at": time
          };
          let sql = `UPDATE leaderboard SET ? WHERE userId = ${id}`;
          pool.query(sql, post, (err2, results2) => {
            try {
              if (err2) {
                throw err2;
              }

              if (results2) {
                const leader = getLeaderBoard(id);
                resolve(leader);
              }
            } catch (e) {
              logError(e);
              return;
            }
          });
        } else {
          let post = {
            'userId': id,
            'reward': points,
            'redeemed': 0,
            'total': points,
            "created_at": time,
            "updated_at": time
          };
          let sql = `INSERT INTO leaderboard SET ?`;
          pool.query(sql, post, (err2, results2) => {
            try {
              if (err2) {
                throw err2;
              }

              if (results2) {
                const leader = getLeaderBoard(id);
                resolve(leader);
              }
            } catch (e) {
              logError(e);
              return;
            }
          });
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function getLeaderBoard(id) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT a.id, a.userId, a.reward, a.redeemed, a.total, a.updated_at, b.name, b.email, b.phone FROM leaderboard as a
                    left join users as b on b.id = a.userId WHERE a.userId = '${id}';`;
    pool.query(sql, async (err, results) => {
      try {
        if (err) {
          throw err;
        }

        if (results) {
          resolve(results[0]);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function stPub() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT id, name FROM store ORDER BY id DESC;
                    SELECT id, name FROM basic WHERE type='Publisher' ORDER BY id DESC;`;
    pool.query(sql, (err, rows) => {
      try {
        if (err) {
          throw err;
        }

        if (rows) {
          resolve(rows);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function userOptions() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT name as text, id as value FROM users;`;
    pool.query(sql, (err, rows) => {
      try {
        if (err) {
          throw err;
        }

        if (rows) {
          resolve(rows);
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function getMeta(url) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT title, description, keyword FROM metas WHERE url='${url}';
                    SELECT title, description, keyword FROM metas WHERE url='default';
                    SELECT name FROM blog_metas WHERE type='page' AND url='${url}'`;
    pool.query(sql, [1, 2, 3], (err, rows) => {
      try {
        if (err) throw err;

        if (rows) {
          if (rows[0].length) {
            rows[0][0].url = url;

            if (rows[2].length) {
              rows[0][0].image = 'cover/' + rows[2][0].name;
            }

            resolve(rows[0]);
          } else if (rows[1].length) {
            rows[1][0].url = url;

            if (rows[2].length) {
              rows[1][0].image = 'cover/' + rows[2][0].name;
            }

            resolve(rows[1]);
          }
        } else if (err) {
          throw err;
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function tagName(data) {
  var list = [];
  return new Promise((resolve, reject) => {
    if (data.length > 0) {
      let sql = `SELECT name as text, id as value FROM basic WHERE id IN (${data});`;
      pool.query(sql, (err, results) => {
        try {
          if (err) throw err;

          if (results) {
            resolve(results);
          }
        } catch (e) {
          logError(e);
          return;
        }
      });
    } else {
      resolve(list);
    }
  });
}

function blogMetaName(type, data) {
  var list = [];
  return new Promise((resolve, reject) => {
    if (data.length > 0) {
      for (var i = 0; i < data.length; i++) {
        let sql = `SELECT name, id, url FROM blog_metas WHERE type = '${type}' AND id = '${data[i]}';`;
        pool.query(sql, (err, results) => {
          try {
            if (err) throw err;
            list.push(results[0]);

            if (i == data.length) {
              resolve(list);
            }
          } catch (e) {
            logError(e);
            return;
          }
        });
      }
    } else {
      resolve(list);
    }
  });
}

function blogMetaData(id) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT title, url FROM blogs ORDER BY id DESC;
                    SELECT name, url FROM blog_metas WHERE type = 'category';
                    SELECT name, url FROM blog_metas WHERE type = 'tag';
                    SELECT id, blogId, c_order, commentId, user, email, comment, updated_at FROM comments WHERE blogId = '${id}' AND status='1' AND c_order= '0' ORDER BY id DESC;
                    SELECT id, blogId, c_order, commentId, user, email, comment, updated_at FROM comments WHERE blogId = '${id}' AND status='1' AND c_order= '1' ORDER BY id ASC
                    `;
    pool.query(sql, [1, 2, 3, 4, 5], (err, results) => {
      try {
        if (err) throw err;
        resolve(results);
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function suggestBlogs() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT id, title as heading, url, coverImg FROM blogs ORDER by RAND() LIMIT 10`;
    pool.query(sql, (err, rows) => {
      try {
        if (rows) {
          resolve(rows);
        } else if (err) {
          throw err;
        }
      } catch (e) {
        logError(e);
        return;
      }
    });
  });
}

function verifyToken(req, res, next) {
  if (req.cookies.token) {
    const bearerHeader = req.cookies.token;

    if (typeof bearerHeader !== 'undefined') {
      req.token = bearerHeader;
      const {
        exp
      } = (0, _jsonwebtoken.decode)(bearerHeader);

      if (Date.now() >= exp * 1000) {
        res.redirect('/login?e=' + encodeURIComponent('LoggedOut'));
        return;
      }

      next();
    } else {
      res.sendStatus(403);
      return;
    }
  } else {
    res.redirect('/login?e=' + encodeURIComponent('LoggedOut'));
    return;
  }
}

function verifyAdmin(req, res, next) {
  if (req.cookies.token) {
    const bearerHeader = req.cookies.token;

    try {
      const user = jwt.verify(bearerHeader, 'secretkey');

      if (user.user.role !== 'Admin') {
        res.redirect('/blog');
        res.end();
        return;
      }

      next();
    } catch (e) {
      logError(e);
      res.status(403);
      return;
    }
  } else {
    res.redirect('/login?e=' + encodeURIComponent('LoggedOut'));
  }
}

function verifyUser(req, res, next) {
  if (req.cookies.token) {
    const bearerHeader = req.cookies.token;

    try {
      const user = jwt.verify(bearerHeader, 'secretkey');

      if (user.user.role !== 'User') {
        res.redirect('/blog');
        res.end();
        return;
      }

      next();
    } catch (e) {
      logError(e);
      res.status(403);
      return;
    }
  } else {
    res.redirect('/login?e=' + encodeURIComponent('LoggedOut'));
  }
}

function sendMailOnError(e) {
  const mailBody = `
        <h2><strong>Hi</h2>
        <p>There has been error in India Enigma. Please check if website is running or not.</p>
        <p>Then check the log</p>
        ${e}<br/>
        // ${func}
        <p>Warm Regards</p>
        <p>Team AmitKK</p>
    `;
  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: 'amit@amitkk.com',
      pass: 'coderBhai@2203',
      debug: true
    },
    tls: {
      rejectUnauthorized: false,
      secureProtocol: "TLSv1_method"
    }
  });
  let mailOptions = {
    to: 'amit.khare588@gmail.com',
    from: 'amit@amitkk.com',
    subject: "Error on ✔ www.indiaenigma.com",
    html: mailBody
  };
  transporter.sendMail(mailOptions, (error, info) => {
    res.send({
      success: true,
      message: "Please check your mail"
    });
  });
}

function logError(e) {
  // sendMailOnError(e)
  printError(e);
}