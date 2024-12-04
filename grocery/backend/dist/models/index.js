"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _fs = require("fs");

var _path = require("path");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = _interopRequireDefault(require("../config"));

var basename = (0, _path.basename)(__filename);
var db = {};
exports.db = db;
var sequelize = new _sequelize["default"](_config["default"].db.database, _config["default"].db.username, _config["default"].db.password, {
  host: _config["default"].db.host,
  port: _config["default"].db.port,
  dialect: _config["default"].db.connection,
  logging: false,
  underscored: true,
  pool: {
    max: 20,
    min: 1,
    idle: 20000,
    acquire: 1000000
  },
  timestamps: true
});
(0, _fs.readdirSync)(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize['import']((0, _path.join)(__dirname, file));
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvaW5kZXguanMiXSwibmFtZXMiOlsiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiZGIiLCJzZXF1ZWxpemUiLCJTZXF1ZWxpemUiLCJjb25maWciLCJkYXRhYmFzZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJob3N0IiwicG9ydCIsImRpYWxlY3QiLCJjb25uZWN0aW9uIiwibG9nZ2luZyIsInVuZGVyc2NvcmVkIiwicG9vbCIsIm1heCIsIm1pbiIsImlkbGUiLCJhY3F1aXJlIiwidGltZXN0YW1wcyIsIl9fZGlybmFtZSIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwic2xpY2UiLCJmb3JFYWNoIiwibW9kZWwiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLG9CQUFVQyxVQUFWLENBQWpCO0FBQ0EsSUFBTUMsRUFBRSxHQUFHLEVBQVg7O0FBRUEsSUFBSUMsU0FBUyxHQUFHLElBQUlDLHFCQUFKLENBQWNDLG1CQUFPSCxFQUFQLENBQVVJLFFBQXhCLEVBQWtDRCxtQkFBT0gsRUFBUCxDQUFVSyxRQUE1QyxFQUFzREYsbUJBQU9ILEVBQVAsQ0FBVU0sUUFBaEUsRUFBMEU7QUFDdEZDLEVBQUFBLElBQUksRUFBRUosbUJBQU9ILEVBQVAsQ0FBVU8sSUFEc0U7QUFFdEZDLEVBQUFBLElBQUksRUFBRUwsbUJBQU9ILEVBQVAsQ0FBVVEsSUFGc0U7QUFHdEZDLEVBQUFBLE9BQU8sRUFBRU4sbUJBQU9ILEVBQVAsQ0FBVVUsVUFIbUU7QUFJdEZDLEVBQUFBLE9BQU8sRUFBRSxLQUo2RTtBQUt0RkMsRUFBQUEsV0FBVyxFQUFFLElBTHlFO0FBTXRGQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsR0FBRyxFQUFFLEVBREg7QUFFRkMsSUFBQUEsR0FBRyxFQUFFLENBRkg7QUFHRkMsSUFBQUEsSUFBSSxFQUFFLEtBSEo7QUFJRkMsSUFBQUEsT0FBTyxFQUFFO0FBSlAsR0FOZ0Y7QUFZdEZDLEVBQUFBLFVBQVUsRUFBQztBQVoyRSxDQUExRSxDQUFoQjtBQWVBLHFCQUFZQyxTQUFaLEVBQ0tDLE1BREwsQ0FDWSxVQUFBQyxJQUFJLEVBQUk7QUFDWixTQUFRQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxHQUFiLE1BQXNCLENBQXZCLElBQThCRCxJQUFJLEtBQUt2QixRQUF2QyxJQUFxRHVCLElBQUksQ0FBQ0UsS0FBTCxDQUFXLENBQUMsQ0FBWixNQUFtQixLQUEvRTtBQUNILENBSEwsRUFJS0MsT0FKTCxDQUlhLFVBQUFILElBQUksRUFBSTtBQUNiLE1BQU1JLEtBQUssR0FBR3hCLFNBQVMsQ0FBQyxRQUFELENBQVQsQ0FBb0IsZ0JBQUtrQixTQUFMLEVBQWdCRSxJQUFoQixDQUFwQixDQUFkO0FBQ0FyQixFQUFBQSxFQUFFLENBQUN5QixLQUFLLENBQUNDLElBQVAsQ0FBRixHQUFpQkQsS0FBakI7QUFDSCxDQVBMO0FBU0FFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNUIsRUFBWixFQUFnQndCLE9BQWhCLENBQXdCLFVBQUFLLFNBQVMsRUFBSTtBQUNqQyxNQUFJN0IsRUFBRSxDQUFDNkIsU0FBRCxDQUFGLENBQWNDLFNBQWxCLEVBQTZCO0FBQ3pCOUIsSUFBQUEsRUFBRSxDQUFDNkIsU0FBRCxDQUFGLENBQWNDLFNBQWQsQ0FBd0I5QixFQUF4QjtBQUNIO0FBQ0osQ0FKRDtBQU1BQSxFQUFFLENBQUNDLFNBQUgsR0FBZUEsU0FBZjtBQUNBRCxFQUFFLENBQUNFLFNBQUgsR0FBZUEscUJBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGJhc2VuYW1lIGFzIF9iYXNlbmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuY29uc3QgYmFzZW5hbWUgPSBfYmFzZW5hbWUoX19maWxlbmFtZSk7XG5jb25zdCBkYiA9IHt9O1xuXG5sZXQgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShjb25maWcuZGIuZGF0YWJhc2UsIGNvbmZpZy5kYi51c2VybmFtZSwgY29uZmlnLmRiLnBhc3N3b3JkLCB7XG4gICAgaG9zdDogY29uZmlnLmRiLmhvc3QsXG4gICAgcG9ydDogY29uZmlnLmRiLnBvcnQsXG4gICAgZGlhbGVjdDogY29uZmlnLmRiLmNvbm5lY3Rpb24sXG4gICAgbG9nZ2luZzogZmFsc2UsXG4gICAgdW5kZXJzY29yZWQ6IHRydWUsXG4gICAgcG9vbDoge1xuICAgICAgICBtYXg6IDIwLFxuICAgICAgICBtaW46IDEsXG4gICAgICAgIGlkbGU6IDIwMDAwLFxuICAgICAgICBhY3F1aXJlOiAxMDAwMDAwXG4gICAgfSxcbiAgICB0aW1lc3RhbXBzOnRydWVcbn0pO1xuXG5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpXG4gICAgLmZpbHRlcihmaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIChmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCkgJiYgKGZpbGUgIT09IGJhc2VuYW1lKSAmJiAoZmlsZS5zbGljZSgtMykgPT09ICcuanMnKTtcbiAgICB9KVxuICAgIC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVsnaW1wb3J0J10oam9pbihfX2Rpcm5hbWUsIGZpbGUpKTtcbiAgICAgICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcbiAgICB9KTtcblxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcbiAgICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcbiAgICAgICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICAgIH1cbn0pO1xuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG5cbmV4cG9ydCB7IGRiIH07Il19