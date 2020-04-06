"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate_id = generate_id;

var _randomstring = require("randomstring");

var _randomstring2 = _interopRequireDefault(_randomstring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generate_id(length) {
  return _randomstring2.default.generate({
    length: length,
    charset: "numeric"
  });
}
//# sourceMappingURL=tools.js.map