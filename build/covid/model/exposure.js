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

var exposureSchema = new _mongoose2.default.Schema({
  eid: { type: String, required: true, unique: true },
  uid: { type: String, required: true },
  name: String,
  comment: String,
  diagnosisTS: Number
});

// exposureSchema.statics.fetchExposure = async function(uid) {
//   const r = await this.find({
//     uid
//   });

//   if (!r) return 0;

//   return r;
// };

exposureSchema.statics.fetchExposures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var r;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return this.find();

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

// contactSchema.statics.fetchAll = async function () {
//   const r = await this.find().select({wid: true, word: true, defintions: true, type: true, _id: true});

//   if(!r)
//     return r;

//   return r;
// }

// exposureSchema.statics.countContacts = async function(uid) {
//   const counts = await this.countDocuments({
//     uid
//   });

//   return counts;
// };


var Exposure = _mongoose2.default.model("exposure", exposureSchema);

exports.default = Exposure;
//# sourceMappingURL=exposure.js.map