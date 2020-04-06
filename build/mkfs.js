"use strict";

var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var write_param;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            write_param = {
              COLLNAME: "words",
              obj: _all2.default
            };
            _context.next = 3;
            return (0, _mongo.dbConnect)(_config2.default);

          case 3:
            db = _context.sent;
            _context.next = 6;
            return writeAdmin();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

var writeAdmin = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var salt, hash, admin, params;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            salt = _crypto2.default.randomBytes(16).toString("hex");
            hash = _crypto2.default.pbkdf2Sync("root", salt, 10000, 512, "sha512").toString("hex");
            admin = {
              email: "admin@bokri.xyz",
              profile: {
                title: "Mr.",
                name: "Samuel Girmai",
                gender: "M"
              },
              role: "admin",
              token: [],
              hash: hash,
              salt: salt
            };
            params = {
              COLLNAME: "users",
              obj: admin
            };
            _context2.next = 6;
            return (0, _mongo.write)(db, params);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function writeAdmin() {
    return _ref2.apply(this, arguments);
  };
}();

var _mongo = require("./mongo");

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

var _config = require("./config/config");

var _config2 = _interopRequireDefault(_config);

var _all = require("./static/all.json");

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var collections = ["words"];

var db;

start();
//# sourceMappingURL=mkfs.js.map