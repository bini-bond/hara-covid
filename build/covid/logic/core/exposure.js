'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readExposures = exports.writeExposure = undefined;

var writeExposure = exports.writeExposure = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var uid = _ref.uid,
        comment = _ref.comment;

    var _ref3, profile, name, expoObj, e;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user2.default.findUser(uid);

          case 2:
            _ref3 = _context.sent;
            profile = _ref3.profile;
            name = profile.name;
            expoObj = new _exposure2.default({
              eid: (0, _tools.generate_id)(10),
              uid: uid,
              name: name,
              comment: comment,
              diagnosisTS: _moment2.default.now()
            });
            _context.next = 8;
            return expoObj.save();

          case 8:
            e = _context.sent;

            if (e) {
              _context.next = 11;
              break;
            }

            return _context.abrupt('return', 0);

          case 11:
            return _context.abrupt('return', e);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function writeExposure(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var readExposures = exports.readExposures = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var es;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            es = _exposure2.default.fetchExposures();

            if (es) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt('return', 0);

          case 3:
            return _context2.abrupt('return', es);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function readExposures() {
    return _ref4.apply(this, arguments);
  };
}();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _exposure = require('../../model/exposure');

var _exposure2 = _interopRequireDefault(_exposure);

var _user = require('../../model/user');

var _user2 = _interopRequireDefault(_user);

var _tools = require('../../../utils/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=exposure.js.map