"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  phone: { type: String, unique: true, required: true },
  uid: { type: String, unique: true, required: true },
  profile: {
    name: String
  }
});

userSchema.statics.findUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uid) {
    var u;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              uid: uid
            });

          case 2:
            u = _context.sent;
            return _context.abrupt("return", u);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.statics.findUserByPhone = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(phone) {
    var u;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.findOne({
              phone: phone
            });

          case 2:
            u = _context2.sent;
            return _context2.abrupt("return", u);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

userSchema.statics.findUserByBID = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(bid) {
    var u;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return this.findOne({
              bid: bid
            });

          case 2:
            u = _context3.sent;
            return _context3.abrupt("return", u);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}();

// userSchema.statics.fetchUsers = async function () {
//   const u = await this.find({}).select({profile: true, email: true, role: true});
//   return u;
// };

userSchema.statics.count = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(filters) {
    var count;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return User.countDocuments(filters);

          case 2:
            count = _context4.sent;
            return _context4.abrupt("return", count);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}();

userSchema.statics.removeUser = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(email) {
    var r;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return this.findOneAndRemove({ email: email });

          case 2:
            r = _context5.sent;

            if (r) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", 0);

          case 5:
            return _context5.abrupt("return", 1);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var User = mongoose.model("User", userSchema);

module.exports = User;
//# sourceMappingURL=user.js.map