"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPassword = exports.removeAccess = exports.writeAccess = exports.readAllUsers = exports.readUser = exports.writeUser = undefined;

var writeUser = exports.writeUser = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var phone = _ref.phone,
        bid = _ref.bid,
        name = _ref.name;
    var userObj, u;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userObj = new _user2.default({
              phone: phone,
              uid: (0, _tools.generate_id)(10),
              profile: { name: name }
            });
            _context.next = 3;
            return userObj.save();

          case 3:
            u = _context.sent;

            if (u) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", 0);

          case 6:
            return _context.abrupt("return", {
              uid: u.uid,
              name: u.profile.name
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function writeUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// export async function deleteUser(email) {
//   const r = await User.removeUser(email);
//   if (!r) {
//     return 0;
//   }

//   return {

//   };
// }

var readUser = exports.readUser = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(wid) {
    var u;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user2.default.findUser(wid);

          case 2:
            u = _context2.sent;

            if (u) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", 0);

          case 5:
            return _context2.abrupt("return", u);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function readUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var readAllUsers = exports.readAllUsers = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var u;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user2.default.fetchUsers();

          case 2:
            u = _context3.sent;

            if (u.length) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", 0);

          case 5:
            return _context3.abrupt("return", u);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function readAllUsers() {
    return _ref4.apply(this, arguments);
  };
}();

var writeAccess = exports.writeAccess = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref5) {
    var email = _ref5.email,
        password = _ref5.password,
        role = _ref5.role;
    var u, v, t;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _user2.default.findUser(email);

          case 2:
            u = _context4.sent;
            v = u.validatePassword(password);

            if (v) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", 0);

          case 6:
            _context4.next = 8;
            return u.toAuthJSON();

          case 8:
            t = _context4.sent;
            _context4.next = 11;
            return _user2.default.setToken(t.token, t.email);

          case 11:
            if (t) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", 0);

          case 13:
            return _context4.abrupt("return", t);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function writeAccess(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

var removeAccess = exports.removeAccess = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref7) {
    var token = _ref7.token,
        email = _ref7.email;
    var u, r;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _user2.default.findUser(email);

          case 2:
            u = _context5.sent;

            if (u) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", 0);

          case 5:
            _context5.next = 7;
            return _user2.default.removeToken(token, email);

          case 7:
            r = _context5.sent;

            if (r) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("return", 0);

          case 10:
            return _context5.abrupt("return", r);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function removeAccess(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

var setPassword = exports.setPassword = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref9) {
    var currentPassword = _ref9.currentPassword,
        newPassword = _ref9.newPassword,
        email = _ref9.email;
    var u;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _user2.default.findUser(email);

          case 2:
            u = _context6.sent;

            if (u) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", {
              status: 0,
              msg: "User couldn't be found"
            });

          case 5:
            _context6.next = 7;
            return u.validatePassword(currentPassword);

          case 7:
            if (_context6.sent) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", {
              status: 0,
              msg: "Incorrect current password"
            });

          case 9:
            _context6.next = 11;
            return u.setPassword(newPassword);

          case 11:
            return _context6.abrupt("return", {
              status: 1
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function setPassword(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

var _user = require("../../model/user");

var _user2 = _interopRequireDefault(_user);

var _tools = require("../../../utils/tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=user.js.map