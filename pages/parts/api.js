"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const base = '/api/';
const auth = '/auth/';
var _default = {
  register: auth + 'register',
  login: auth + 'login',
  gofbRegister: auth + 'gofbRegister',
  gofbLogin: auth + 'gofbLogin'
};
exports.default = _default;