"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // import {
//   write,
//   update,
//   read,
//   dbConnect,
// } from '../../mongo';

// import config from '../../config/config';


// const COLNAME = 'words';

// let db;

// async function init() {
//   db = await dbConnect(config);
// }

// init();

// export async function fwriteWord(obj) {
//   const param = {
//     COLNAME,
//     obj,
//   };

//   const res = await write(db, param);

//   if (res.ops.length == 1) {
//     return res.ops[0];
//   }

//   return res.ops;
// }

// export async function freadWord(query, fields) {
//   const param = {
//     COLNAME,
//     query,
//     fields,
//   };

//   const res = await read(db, param);

//   return res;
// }

// export async function fupdateWord(query, obj) {
//   const param = {
//     COLNAME,
//     query,
//     obj,
//   };

//   await update(db, param);

//   return 1;
// }


var contactSchema = new _mongoose2.default.Schema({
  cid: { type: String, required: true },
  uid: { type: String, required: true },
  fistTS: Number,
  lastTS: Number,
  medianDistance: Number
});

contactSchema.statics.fetchContacts = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uid) {
    var r;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.find({
              uid: uid
            });

          case 2:
            r = _context.sent;

            if (r) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", 0);

          case 5:
            return _context.abrupt("return", r);

          case 6:
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

contactSchema.statics.insertContacts = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(contacts) {
    var r;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Contact.insertMany(contacts);

          case 2:
            r = _context2.sent;

            if (r) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", 0);

          case 5:
            return _context2.abrupt("return", r);

          case 6:
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

contactSchema.statics.fetchAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var r;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return this.find();

        case 2:
          r = _context3.sent;

          if (r) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", r);

        case 5:
          return _context3.abrupt("return", r);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
}));

contactSchema.statics.countContacts = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(uid) {
    var counts;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return this.countDocuments({
              uid: uid
            });

          case 2:
            counts = _context4.sent;
            return _context4.abrupt("return", counts);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var Contact = _mongoose2.default.model("contact", contactSchema);

exports.default = Contact;
//# sourceMappingURL=contact.js.map