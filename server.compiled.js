"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var express = require("express");

var _require = require("mongodb"),
    MongoClient = _require.MongoClient;

var path = require("path");

var cors = require("cors");

var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express["static"](path.join(__dirname, "client", "build")));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var uri = "mongodb+srv://will:".concat(process.env.USER_PASSWORD, "@cluster1-glamp.mongodb.net/covid19?retryWrites=true&w=majority");
var client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function isDatabaseConnected(_x) {
  return _isDatabaseConnected.apply(this, arguments);
}

function _isDatabaseConnected() {
  _isDatabaseConnected = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(client) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return client.connect();

          case 3:
            console.log("Database is connected");
            _context2.next = 10;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log("Database connection failed");
            console.error(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return _isDatabaseConnected.apply(this, arguments);
}

isDatabaseConnected(client)["catch"](console.err);
app.get("/api/cases/:id", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var cursor, data, _data, _data2, _data3, _data4;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.params.id === "1")) {
              _context.next = 17;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return client.db("covid19").collection("060620").find({});

          case 4:
            cursor = _context.sent;
            _context.next = 7;
            return cursor.toArray();

          case 7:
            data = _context.sent;
            res.json(data);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).send({
              error: _context.t0
            });

          case 15:
            _context.next = 83;
            break;

          case 17:
            if (!(req.params.id === "2")) {
              _context.next = 34;
              break;
            }

            _context.prev = 18;
            _context.next = 21;
            return client.db("covid19").collection("060720").find({});

          case 21:
            cursor = _context.sent;
            _context.next = 24;
            return cursor.toArray();

          case 24:
            _data = _context.sent;
            res.json(_data);
            _context.next = 32;
            break;

          case 28:
            _context.prev = 28;
            _context.t1 = _context["catch"](18);
            console.log(_context.t1);
            res.status(500).send({
              error: _context.t1
            });

          case 32:
            _context.next = 83;
            break;

          case 34:
            if (!(req.params.id === "3")) {
              _context.next = 51;
              break;
            }

            _context.prev = 35;
            _context.next = 38;
            return client.db("covid19").collection("060820").find({});

          case 38:
            cursor = _context.sent;
            _context.next = 41;
            return cursor.toArray();

          case 41:
            _data2 = _context.sent;
            res.json(_data2);
            _context.next = 49;
            break;

          case 45:
            _context.prev = 45;
            _context.t2 = _context["catch"](35);
            console.log(_context.t2);
            res.status(500).send({
              error: _context.t2
            });

          case 49:
            _context.next = 83;
            break;

          case 51:
            if (!(req.params.id === "4")) {
              _context.next = 68;
              break;
            }

            _context.prev = 52;
            _context.next = 55;
            return client.db("covid19").collection("060920").find({});

          case 55:
            cursor = _context.sent;
            _context.next = 58;
            return cursor.toArray();

          case 58:
            _data3 = _context.sent;
            res.json(_data3);
            _context.next = 66;
            break;

          case 62:
            _context.prev = 62;
            _context.t3 = _context["catch"](52);
            console.log(_context.t3);
            res.status(500).send({
              error: _context.t3
            });

          case 66:
            _context.next = 83;
            break;

          case 68:
            if (!(req.params.id === "5")) {
              _context.next = 83;
              break;
            }

            _context.prev = 69;
            _context.next = 72;
            return client.db("covid19").collection("061020").find({});

          case 72:
            cursor = _context.sent;
            _context.next = 75;
            return cursor.toArray();

          case 75:
            _data4 = _context.sent;
            res.json(_data4);
            _context.next = 83;
            break;

          case 79:
            _context.prev = 79;
            _context.t4 = _context["catch"](69);
            console.log(_context.t4);
            res.status(500).send({
              error: _context.t4
            });

          case 83:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11], [18, 28], [35, 45], [52, 62], [69, 79]]);
  }));

  return function (_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(port, function () {
  return console.log("server running on port ".concat(port));
});
