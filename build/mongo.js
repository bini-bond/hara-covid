"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.read = exports.write = exports.removeFs = exports.createCollections = exports.dbConnect = undefined;

var dbConnect = exports.dbConnect = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(conf) {
    var conn, db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _mongodb.MongoClient.connect("mongodb://" + conf.host + ":" + conf.port, { useNewUrlParser: true, useUnifiedTopology: true });

          case 2:
            conn = _context.sent;

            if (conn) console.log(conn);
            db = conn.db(conf.db);
            return _context.abrupt("return", db);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function dbConnect(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createCollections = exports.createCollections = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(db, names) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 3;
            _iterator = names[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 13;
              break;
            }

            name = _step.value;
            _context2.next = 9;
            return db.createCollection(name);

          case 9:
            console.log("Collection " + name + " created");

          case 10:
            _iteratorNormalCompletion = true;
            _context2.next = 5;
            break;

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 19:
            _context2.prev = 19;
            _context2.prev = 20;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 22:
            _context2.prev = 22;

            if (!_didIteratorError) {
              _context2.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return _context2.finish(22);

          case 26:
            return _context2.finish(19);

          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 15, 19, 27], [20,, 22, 26]]);
  }));

  return function createCollections(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var removeFs = exports.removeFs = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(db) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return db.dropDatabase();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function removeFs(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var write = exports.write = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(db, param) {
    var res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (param.obj.constructor !== Array) {
              param.obj = [param.obj];
            }

            _context4.next = 3;
            return db.collection(param.COLLNAME).insertMany(param.obj);

          case 3:
            res = _context4.sent;
            return _context4.abrupt("return", res);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function write(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var read = exports.read = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(db, param) {
    var res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return db.collection(param.COLNAME).find(param.query, param.fields).toArray();

          case 2:
            res = _context5.sent;
            return _context5.abrupt("return", res);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function read(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

var update = exports.update = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(db, param) {
    var res;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return db.collection(param.COLNAME).updateOne(param.query, { $set: param.obj });

          case 2:
            res = _context6.sent;
            return _context6.abrupt("return", res);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function update(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

var _mongodb = require("mongodb");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // var MongoClient = require('mongodb').MongoClient;
//# sourceMappingURL=mongo.js.map