"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

require("regenerator-runtime/runtime.js");

var _Index = _interopRequireDefault(require("../pages/index/Index"));

var _Stores = _interopRequireDefault(require("../pages/index/Stores"));

var _Store = _interopRequireDefault(require("../pages/index/Store"));

var _Shop = _interopRequireDefault(require("../pages/index/Shop"));

var _Survey = _interopRequireDefault(require("../pages/index/Survey"));

var _TakeSurvey = _interopRequireDefault(require("../pages/index/TakeSurvey"));

var _ShopCategory = _interopRequireDefault(require("../pages/index/ShopCategory"));

var _Career = _interopRequireDefault(require("../pages/index/Career"));

var _CareerSingle = _interopRequireDefault(require("../pages/index/CareerSingle"));

var _FAQ = _interopRequireDefault(require("../pages/index/FAQ"));

var _About = _interopRequireDefault(require("../pages/index/About"));

var _Contact = _interopRequireDefault(require("../pages/index/Contact"));

var _Blog = _interopRequireDefault(require("../pages/blog/Blog"));

var _Register = _interopRequireDefault(require("../pages/auth/Register"));

var _Login = _interopRequireDefault(require("../pages/auth/Login"));

var _ForgotPassword = _interopRequireDefault(require("../pages/auth/ForgotPassword"));

var _ResetPassword = _interopRequireDefault(require("../pages/auth/ResetPassword"));

var _User = _interopRequireDefault(require("../pages/admin/User"));

var _AdminContacts = _interopRequireDefault(require("../pages/admin/AdminContacts"));

var _AdminBlogMeta = _interopRequireDefault(require("../pages/admin/AdminBlogMeta"));

var _AdminBlogs = _interopRequireDefault(require("../pages/admin/AdminBlogs"));

var _AddBlog = _interopRequireDefault(require("../pages/admin/AddBlog"));

var _UpdateBlog = _interopRequireDefault(require("../pages/admin/UpdateBlog"));

var _Meta = _interopRequireDefault(require("../pages/admin/Meta"));

var _AdminComments = _interopRequireDefault(require("../pages/admin/AdminComments"));

var _Basic = _interopRequireDefault(require("../pages/admin/Basic"));

var _SurveyResponse = _interopRequireDefault(require("../pages/admin/SurveyResponse"));

var _CheckSurvey = _interopRequireDefault(require("../pages/admin/CheckSurvey"));

var _AdminCareer = _interopRequireDefault(require("../pages/admin/AdminCareer"));

var _JobApplications = _interopRequireDefault(require("../pages/admin/JobApplications"));

var _AdminCategory = _interopRequireDefault(require("../pages/store/AdminCategory"));

var _AdminCoupon = _interopRequireDefault(require("../pages/store/AdminCoupon"));

var _AdminDeal = _interopRequireDefault(require("../pages/store/AdminDeal"));

var _AdminStore = _interopRequireDefault(require("../pages/store/AdminStore"));

var _CreateStore = _interopRequireDefault(require("../pages/store/CreateStore"));

var _UpdateStore = _interopRequireDefault(require("../pages/store/UpdateStore"));

var _AdminCashback = _interopRequireDefault(require("../pages/store/AdminCashback"));

var _LeaderBoard = _interopRequireDefault(require("../pages/store/LeaderBoard"));

var _Advertisement = _interopRequireDefault(require("../pages/admin/Advertisement"));

var _Special = _interopRequireDefault(require("../pages/admin/Special"));

var _AddSurvey = _interopRequireDefault(require("../pages/admin/AddSurvey"));

var _QuestionBank = _interopRequireDefault(require("../pages/admin/QuestionBank"));

var _Survey2 = _interopRequireDefault(require("../pages/admin/Survey"));

var _UpdateSurvey = _interopRequireDefault(require("../pages/admin/UpdateSurvey"));

var _AppliedJobs = _interopRequireDefault(require("../pages/user/AppliedJobs"));

var _CashbackHistory = _interopRequireDefault(require("../pages/user/CashbackHistory"));

var _MyAccount = _interopRequireDefault(require("../pages/user/MyAccount"));

var _MyProfile = _interopRequireDefault(require("../pages/user/MyProfile"));

var _ReferNEarn = _interopRequireDefault(require("../pages/user/ReferNEarn"));

var _YourSurveys = _interopRequireDefault(require("../pages/user/YourSurveys"));

const router = _express.default.Router();

var pool = require('./mysqlConnector');

const asyncMiddleware = require('./asyncMiddleware');

const func = require('./functions');

const time = new Date().toISOString().slice(0, 19).replace('T', ' ');

var cookieParser = require('cookie-parser');

router.use(cookieParser());

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use('/blog', require('./blog'));
router.use('/auth', require('./auth'));
router.use('/admin', require('./admin'));
const homeAd = [11, 12, 13];
const headerAd = [20];
const shopAd = [11, 12, 13, 14, 15, 16, 17];
const categoryAd = [18, 19];
const surveyAd = [21];
router.get('/', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  const data = await func.homeData();
  const ads = await func.adHomeList();
  const special = await func.specialList();
  const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Index.default, {
    slider: data[0],
    category: data[1],
    store: data[2],
    deal: data[3],
    coupon: data[4],
    ads: ads,
    special: special
  }));
  res.status(200).render('pages/Index', {
    reactApp: reactComp,
    meta: meta
  });
}));
router.get('/homeData', asyncMiddleware(async (req, res, next) => {
  const data = await func.homeData();
  const ads = await func.adHomeList();
  const special = await func.specialList();
  res.send({
    slider: data[0],
    category: data[1],
    store: data[2],
    deal: data[3],
    coupon: data[4],
    ads: ads,
    special: special
  });
}));
router.get('/shop', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  const data = await func.shopData();
  const ads = await func.adList(shopAd);
  const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Shop.default, {
    data: data,
    ads: ads
  }));
  res.status(200).render('pages/Shop', {
    reactApp: reactComp,
    meta: meta
  });
}));
router.get('/shopData', asyncMiddleware(async (req, res, next) => {
  const data = await func.shopData();
  const ads = await func.adList(surveyAd);
  res.send({
    storeList: data[0],
    basicList: data[1],
    ads: ads
  });
}));
router.get('/shopcategory', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  const data = await func.categoryData();
  const ads = await func.adList(surveyAd);
  res.status(200).render('pages/ShopCategory', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_ShopCategory.default, {
      data: data,
      ads: ads
    })),
    meta: meta
  });
}));
router.get('/categoryData', asyncMiddleware(async (req, res, next) => {
  const data = await func.categoryData();
  const ads = await func.adList(categoryAd);
  res.send({
    data: data,
    ads: ads
  });
})); // router.get('/stores', asyncMiddleware( async(req, res, next) => {
//   const meta = await func.getMeta(req.url);
//   const data = await func.allStoreData();
//   const reactComp = renderToString( <Stores coupon={data[0]} deal={data[1]} stores={data[2]} categories={data[3]}/> )
//   res.status(200).render('pages/Stores', { reactApp: reactComp, meta: meta })
// }))
// router.get('/allStoreData', asyncMiddleware( async(req, res, next) => {
//   const data = await func.allStoreData();
//   res.send({ 
//     store:              data[2],
//     coupon:             data[0],
//     deal:               data[1],
//     categories:         data[3],
//   }); 
// }))

router.get('/survey', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  const data = await func.shopData();
  const ads = await func.adList(shopAd);
  const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Survey.default, {
    data: data,
    ads: ads
  }));
  res.status(200).render('pages/Survey', {
    reactApp: reactComp,
    meta: meta
  });
}));
router.get('/surveyData', asyncMiddleware(async (req, res, next) => {
  const data = await func.surveyData();
  const ads = await func.adList(shopAd);
  res.send({
    surveyCat: data.results,
    ads: ads
  });
}));
router.get('/stores', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  const data = await func.allStoreData();
  const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Stores.default, {
    data: data
  }));
  res.status(200).render('pages/Stores', {
    reactApp: reactComp,
    meta: meta
  });
}));
router.get('/allStoreData', asyncMiddleware(async (req, res, next) => {
  const data = await func.allStoreData();
  res.send({
    data: data
  });
}));
router.get('/storeSidebar', asyncMiddleware(async (req, res, next) => {
  const data = await func.storeSidebar();
  res.send({
    store: data[0],
    categories: data[1]
  });
}));
router.get('/store/:url', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  const data = await func.storeData(req.params.url);
  const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Store.default, {
    coupon: data[0],
    deal: data[1],
    store: data[2],
    storeData: data[3][0]
  }));
  res.status(200).render('pages/Store', {
    reactApp: reactComp,
    meta: meta
  });
}));
router.get('/storeData/:url', asyncMiddleware(async (req, res, next) => {
  const data = await func.storeData(req.params.url);
  res.send({
    coupon: data[0],
    deal: data[1],
    store: data[2],
    storeData: data[3][0]
  });
}));
router.get('/headerData', asyncMiddleware(async (req, res, next) => {
  const data = await func.headerData();
  const ads = await func.adList(headerAd);
  res.send({
    storeList: data[0],
    basicList: data[1],
    ads: ads,
    categories: data[2],
    recomStores: data[3]
  });
}));
router.get('/faq', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  res.status(200).render('pages/FAQ', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_FAQ.default, null)),
    meta: meta
  });
}));
router.get('/about-us', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  res.status(200).render('pages/About', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_About.default, null)),
    meta: meta
  });
}));
router.get('/contact-us', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  res.status(200).render('pages/Contact', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Contact.default, null)),
    meta: meta
  });
}));
router.get('/take-survey/:id', [func.verifyToken, func.verifyUser], asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  res.status(200).render('pages/TakeSurvey', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_TakeSurvey.default, null)),
    meta: []
  });
}));
router.get('/career', asyncMiddleware(async (req, res, next) => {
  res.status(200).render('pages/Career', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Career.default, null)),
    meta: []
  });
}));
router.get('/career/:url', asyncMiddleware(async (req, res, next) => {
  res.status(200).render('pages/CareerSingle', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_CareerSingle.default, null)),
    meta: []
  });
})); // // Auth Pages

router.get('/register/:id', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  res.status(200).render('auth/Register', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Register.default, null)),
    meta: meta
  });
}));
router.get('/register', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  res.status(200).render('auth/Register', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Register.default, null)),
    meta: meta
  });
}));
router.get('/login', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  res.status(200).render('auth/Login', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Login.default, null)),
    meta: meta
  });
}));
router.get('/forgot-password', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(req.url);
  res.status(200).render('auth/ForgotPassword', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_ForgotPassword.default, null)),
    meta: meta
  });
}));
router.get('/reset-password/:token', asyncMiddleware(async (req, res, next) => {
  res.status(200).render('auth/ResetPassword', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_ResetPassword.default, null)),
    meta: []
  });
})); // // Auth Pages
// Blog Pages

router.get('/category/:url', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(`/category/${req.params.url}`);
  var sql1 = `SELECT name FROM blog_metas WHERE url= '${req.params.url}'`;
  pool.query(sql1, (err, results) => {
    try {
      if (results[0]) {
        var sql2 = `SELECT id, title, url, coverImg, updated_at FROM blogs  WHERE category LIKE '%${results[0].name}%' ORDER BY id DESC`;
        pool.query(sql2, (err2, results2) => {
          try {
            if (results2) {
              var title = `<h1 class="heading"><span>Blogs of Category:</span>${results[0].name}</h1>`;
              const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Blog.default, {
                blogs: results2,
                title: title
              }));
              res.status(200).render('blog/Blog', {
                reactApp: reactComp,
                meta: meta,
                blogs: results2
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
router.get('/tag/:url', asyncMiddleware(async (req, res, next) => {
  const meta = await func.getMeta(`/tag/${req.params.url}`);
  var sql1 = `SELECT name FROM blog_metas WHERE url= '${req.params.url}'`;
  pool.query(sql1, (err, results) => {
    try {
      if (results[0]) {
        var sql2 = `SELECT id, title, url, coverImg, updated_at FROM blogs  WHERE tag LIKE '%${results[0].name}%' ORDER BY id DESC`;
        pool.query(sql2, (err2, results2) => {
          try {
            if (results2) {
              var title = `<h1 class="heading"><span>Blogs of Tag:</span>${results[0].name}</h1>`;
              const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Blog.default, {
                blogs: results2,
                title: title
              }));
              res.status(200).render('blog/Blog', {
                reactApp: reactComp,
                meta: meta,
                blogs: results2
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
router.get('/search/:url', asyncMiddleware(async (req, res, next) => {
  var sql = `SELECT id, title, url, coverImg, updated_at FROM blogs  WHERE title LIKE '%${req.params.url}%' OR content LIKE '%${req.params.url}%' ORDER BY id DESC`;
  pool.query(sql, (err, results) => {
    try {
      if (results) {
        const reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Blog.default, {
          blogs: results
        }));
        res.status(200).render('blog/Blog', {
          reactApp: reactComp,
          meta: []
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
})); // Blog Pages
// // Admin Pages 

router.get('/admin/admin', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/User', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_User.default, null)),
    meta: []
  });
}));
router.get('/admin/users', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/User', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_User.default, null)),
    meta: []
  });
}));
router.get('/admin/meta', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/Meta', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Meta.default, null)),
    meta: []
  });
}));
router.get('/admin/blogMeta', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/AdminBlogMeta', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminBlogMeta.default, null)),
    meta: []
  });
}));
router.get('/admin/blogs', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/AdminBlogs', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminBlogs.default, null)),
    meta: []
  });
}));
router.get('/admin/addBlog', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/AddBlog', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AddBlog.default, null)),
    meta: []
  });
}));
router.get('/admin/updateBlog/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/UpdateBlog', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_UpdateBlog.default, null)),
    meta: []
  });
}));
router.get('/admin/contacts', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/AdminContacts', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminContacts.default, null)),
    meta: []
  });
}));
router.get('/admin/comments', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/AdminComments', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminComments.default, null)),
    meta: []
  });
}));
router.get('/admin/basics', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/AdminBasics', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Basic.default, null)),
    meta: []
  });
}));
router.get('/admin/addSurvey', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/AddSurvey', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AddSurvey.default, null)),
    meta: []
  });
}));
router.get('/admin/questionBank', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/QuestionBank', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_QuestionBank.default, null)),
    meta: []
  });
}));
router.get('/admin/survey', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/Survey', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Survey2.default, null)),
    meta: []
  });
}));
router.get('/admin/updateSurvey/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/UpdateSurvey', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_UpdateSurvey.default, null)),
    meta: []
  });
}));
router.get('/admin/survey-response', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/SurveyResponse', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_SurveyResponse.default, null)),
    meta: []
  });
}));
router.get('/admin/checkSurvey/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/CheckSurvey', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_CheckSurvey.default, null)),
    meta: []
  });
}));
router.get('/admin/career', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/AdminCareer', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminCareer.default, null)),
    meta: []
  });
}));
router.get('/admin/job-applications', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/JobApplications', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_JobApplications.default, null)),
    meta: []
  });
})); // // Admin Pages
// // Store Pages

router.get('/admin/adminCategory', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('store/AdminCategory', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminCategory.default, null)),
    meta: []
  });
}));
router.get('/admin/adminCoupon', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('store/AdminCoupon', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminCoupon.default, null)),
    meta: []
  });
}));
router.get('/admin/adminDeal', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('store/AdminDeal', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminDeal.default, null)),
    meta: []
  });
}));
router.get('/admin/adminStore', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('store/AdminStore', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminStore.default, null)),
    meta: []
  });
}));
router.get('/admin/createStore', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('store/CreateStore', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_CreateStore.default, null)),
    meta: []
  });
}));
router.get('/admin/updateStore/:id', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('store/UpdateStore', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_UpdateStore.default, null)),
    meta: []
  });
}));
router.get('/admin/adminCashback', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('store/AdminCashback', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AdminCashback.default, null)),
    meta: []
  });
}));
router.get('/admin/leaderboard', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('store/LeaderBoard', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_LeaderBoard.default, null)),
    meta: []
  });
}));
router.get('/admin/advertisement', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/Advertisement', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Advertisement.default, null)),
    meta: []
  });
}));
router.get('/admin/special', [func.verifyToken, func.verifyAdmin], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('admin/Special', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Special.default, null)),
    meta: []
  });
})); // // Store Pages
// User Pages

router.get('/user/applied-jobs', [func.verifyToken, func.verifyUser], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('user/AppliedJobs', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_AppliedJobs.default, null)),
    meta: []
  });
}));
router.get('/user/cashback-history', [func.verifyToken, func.verifyUser], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('user/CashbackHistory', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_CashbackHistory.default, null)),
    meta: []
  });
}));
router.get('/user/my-account', [func.verifyToken, func.verifyUser], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('user/MyAccount', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_MyAccount.default, null)),
    meta: []
  });
}));
router.get('/user/my-profile', [func.verifyToken, func.verifyUser], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('user/MyProfile', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_MyProfile.default, null)),
    meta: []
  });
}));
router.get('/user/refer-and-earn', [func.verifyToken, func.verifyUser], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('user/ReferNEarn', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_ReferNEarn.default, null)),
    meta: []
  });
}));
router.get('/user/your-surveys', [func.verifyToken, func.verifyUser], asyncMiddleware(async (req, res, next) => {
  res.status(200).render('user/YourSurveys', {
    reactApp: (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_YourSurveys.default, null)),
    meta: []
  });
})); // User Pages

router.get('/suggest', asyncMiddleware(async (req, res, next) => {
  const blogs = await suggestBlogs();
  res.send({
    blogs: blogs
  });
}));
router.get('*', asyncMiddleware(async (req, res, next) => {
  res.redirect('/blog');
}));
var _default = router;
exports.default = _default;