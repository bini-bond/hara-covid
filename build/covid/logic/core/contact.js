"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readContacts = exports.batchInsert = undefined;

// export async function writeContact({ uid, firstTS, lastTS, medianDistance }) {
//   const contObj = new Contact({
//     cid: generate_id(10),
//     uid,
//     firstTS,
//     lastTS,
//     medianDistance,
//   });

//   const c = await contObj.save();
//   if (!c) {
//     return 0;
//   }

//   return c;
// }


var batchInsert = exports.batchInsert = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(contacts) {
    var mapped, c;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mapped = [];

            contacts.map(function (_ref2) {
              var cid = _ref2.cid,
                  uid = _ref2.uid,
                  firstTS = _ref2.firstTS,
                  lastTS = _ref2.lastTS,
                  medianDistance = _ref2.medianDistance;

              var cont = {
                cid: cid,
                uid: uid,
                firstTS: firstTS,
                lastTS: lastTS,
                medianDistance: medianDistance
              };

              mapped.push(cont);
            });

            _context.next = 4;
            return _contact2.default.insertContacts(mapped);

          case 4:
            c = _context.sent;

            if (c) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", 0);

          case 7:
            return _context.abrupt("return", c);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function batchInsert(_x) {
    return _ref.apply(this, arguments);
  };
}();

var readContacts = exports.readContacts = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var es;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            es = _contact2.default.fetchContacts();

            if (es) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", 0);

          case 3:
            return _context2.abrupt("return", es);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function readContacts() {
    return _ref3.apply(this, arguments);
  };
}();

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _contact = require("../../model/contact");

var _contact2 = _interopRequireDefault(_contact);

var _tools = require("../../../utils/tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=contact.js.map