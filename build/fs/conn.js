"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require("../config/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_mongoose2.default.Promise = Promise;

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _mongoose2.default.set("useFindAndModify", false);
            _mongoose2.default.set("useCreateIndex", true);
            _mongoose2.default.set("useNewUrlParser", true);
            _mongoose2.default.set("useUnifiedTopology", true);
            _context.next = 6;
            return _mongoose2.default.connect("" + _config2.default.host);

          case 6:
            _mongoose2.default.connection.on("error", function (err) {
              console.error(err);
              console.log("MongoDB connection error. Please make sure MongoDB is running.");
              process.exit();
            });

            _mongoose2.default.connection.on("connected", function () {
              console.log("Connection Established");
            });

            _mongoose2.default.connection.on("reconnected", function () {
              console.log("Connection Reestablished");
            });

            _mongoose2.default.connection.on("disconnected", function () {
              console.log("Connection Disconnected");
            });

            _mongoose2.default.connection.on("close", function () {
              console.log("Connection Closed");
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function connectDatabase() {
    return _ref.apply(this, arguments);
  }

  return connectDatabase;
}();
//# sourceMappingURL=conn.js.map