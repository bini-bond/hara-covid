"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadContacts = exports.getExposures = exports.createExposure = exports.createUser = undefined;

var createUser = exports.createUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
    var _param$obj, phone, name, u, r;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(param.obj);
            _param$obj = param.obj, phone = _param$obj.phone, name = _param$obj.name;
            _context.next = 4;
            return _user3.default.findUserByPhone(phone);

          case 4:
            u = _context.sent;

            console.log(u);

            if (!u) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", {
              status: "ok",
              result: {
                uid: u.uid,
                name: u.profile.name
              }
            });

          case 8:
            _context.next = 10;
            return (0, _user.writeUser)({ phone: phone, name: name });

          case 10:
            r = _context.sent;

            if (r) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", {
              status: "err",
              result: {
                info: "couldn't register user"
              }
            });

          case 13:
            return _context.abrupt("return", {
              status: "ok",
              result: r
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createExposure = exports.createExposure = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(param) {
    var _param$obj2, uid, comment, r;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(param.obj);
            _param$obj2 = param.obj, uid = _param$obj2.uid, comment = _param$obj2.comment;
            _context2.next = 4;
            return (0, _exposure.writeExposure)({ uid: uid, comment: comment });

          case 4:
            r = _context2.sent;

            if (r) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", {
              status: "err",
              result: {
                info: "couldn't write exposure"
              }
            });

          case 7:
            return _context2.abrupt("return", {
              status: "ok",
              result: r
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createExposure(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getExposures = exports.getExposures = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var r;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _exposure.readExposures)();

          case 2:
            r = _context3.sent;

            if (r) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", {
              status: "err",
              result: {
                info: "couldn't write exposure"
              }
            });

          case 5:
            return _context3.abrupt("return", {
              status: "ok",
              result: r
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getExposures() {
    return _ref3.apply(this, arguments);
  };
}();

var uploadContacts = exports.uploadContacts = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(param) {
    var contacts, r;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            contacts = param.obj.contacts;
            _context4.next = 3;
            return (0, _contact.batchInsert)(contacts);

          case 3:
            r = _context4.sent;

            if (r) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", {
              status: "err",
              result: {
                info: "couldn't upload data"
              }
            });

          case 6:
            return _context4.abrupt("return", {
              status: "ok"
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function uploadContacts(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var _user = require("./core/user");

var _exposure = require("./core/exposure");

var _user2 = require("../model/user");

var _user3 = _interopRequireDefault(_user2);

var _contact = require("./core/contact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=main.js.map