"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _config = _interopRequireDefault(require("./config"));

var _multer = _interopRequireDefault(require("multer"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _multerS = _interopRequireDefault(require("multer-s3"));

_awsSdk["default"].config.update({
  accessKeyId: _config["default"].app.AWS_ACCESS_KEY,
  secretAccessKey: _config["default"].app.AWS_SECRET_KEY,
  region: _config["default"].app.AWS_REGION
});

var s3 = new _awsSdk["default"].S3();

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
  }
};

var upload = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    fileFilter: fileFilter,
    s3: s3,
    bucket: _config["default"].app.AWS_BUCKET,
    metadata: function metadata(req, file, cb) {
      cb(null, {
        fieldName: 'abhi_meta_data'
      });
    },
    key: function key(req, file, cb) {
      cb(null, file.originalname);
    }
  })
});
module.exports = upload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hd3NidWNrZXQuanMiXSwibmFtZXMiOlsiQVdTIiwiY29uZmlnIiwidXBkYXRlIiwiYWNjZXNzS2V5SWQiLCJhcHAiLCJBV1NfQUNDRVNTX0tFWSIsInNlY3JldEFjY2Vzc0tleSIsIkFXU19TRUNSRVRfS0VZIiwicmVnaW9uIiwiQVdTX1JFR0lPTiIsInMzIiwiUzMiLCJmaWxlRmlsdGVyIiwicmVxIiwiZmlsZSIsImNiIiwibWltZXR5cGUiLCJFcnJvciIsInVwbG9hZCIsInN0b3JhZ2UiLCJidWNrZXQiLCJBV1NfQlVDS0VUIiwibWV0YWRhdGEiLCJmaWVsZE5hbWUiLCJrZXkiLCJvcmlnaW5hbG5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUFBLG1CQUFJQyxNQUFKLENBQVdDLE1BQVgsQ0FBa0I7QUFDZEMsRUFBQUEsV0FBVyxFQUFFRixtQkFBT0csR0FBUCxDQUFXQyxjQURWO0FBRWRDLEVBQUFBLGVBQWUsRUFBRUwsbUJBQU9HLEdBQVAsQ0FBV0csY0FGZDtBQUdkQyxFQUFBQSxNQUFNLEVBQUVQLG1CQUFPRyxHQUFQLENBQVdLO0FBSEwsQ0FBbEI7O0FBTUEsSUFBTUMsRUFBRSxHQUFHLElBQUlWLG1CQUFJVyxFQUFSLEVBQVg7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLEVBQVosRUFBbUI7QUFDbEMsTUFBSUQsSUFBSSxDQUFDRSxRQUFMLEtBQWtCLFlBQWxCLElBQWtDRixJQUFJLENBQUNFLFFBQUwsS0FBa0IsV0FBeEQsRUFBcUU7QUFDakVELElBQUFBLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFGO0FBQ0gsR0FGRCxNQUVPO0FBQ0hBLElBQUFBLEVBQUUsQ0FBQyxJQUFJRSxLQUFKLENBQVUsc0NBQVYsQ0FBRCxFQUFvRCxLQUFwRCxDQUFGO0FBQ0g7QUFDSixDQU5EOztBQVFBLElBQUlDLE1BQU0sR0FBRyx3QkFBTztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFLHlCQUFTO0FBQ2RQLElBQUFBLFVBQVUsRUFBVkEsVUFEYztBQUVkRixJQUFBQSxFQUFFLEVBQUVBLEVBRlU7QUFHZFUsSUFBQUEsTUFBTSxFQUFFbkIsbUJBQU9HLEdBQVAsQ0FBV2lCLFVBSEw7QUFJZEMsSUFBQUEsUUFBUSxFQUFFLGtCQUFVVCxHQUFWLEVBQWVDLElBQWYsRUFBcUJDLEVBQXJCLEVBQXlCO0FBQy9CQSxNQUFBQSxFQUFFLENBQUMsSUFBRCxFQUFPO0FBQUVRLFFBQUFBLFNBQVMsRUFBRTtBQUFiLE9BQVAsQ0FBRjtBQUNILEtBTmE7QUFPZEMsSUFBQUEsR0FBRyxFQUFFLGFBQVVYLEdBQVYsRUFBZUMsSUFBZixFQUFxQkMsRUFBckIsRUFBeUI7QUFDMUJBLE1BQUFBLEVBQUUsQ0FBQyxJQUFELEVBQU9ELElBQUksQ0FBQ1csWUFBWixDQUFGO0FBQ0g7QUFUYSxHQUFUO0FBRE8sQ0FBUCxDQUFiO0FBY0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJztcbmltcG9ydCBBV1MgZnJvbSAnYXdzLXNkayc7XG5pbXBvcnQgbXVsdGVyUzMgZnJvbSAnbXVsdGVyLXMzJ1xuXG5BV1MuY29uZmlnLnVwZGF0ZSh7XG4gICAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hcHAuQVdTX0FDQ0VTU19LRVksXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBjb25maWcuYXBwLkFXU19TRUNSRVRfS0VZLFxuICAgIHJlZ2lvbjogY29uZmlnLmFwcC5BV1NfUkVHSU9OXG59KVxuXG5jb25zdCBzMyA9IG5ldyBBV1MuUzMoKTtcbmNvbnN0IGZpbGVGaWx0ZXIgPSAocmVxLCBmaWxlLCBjYikgPT4ge1xuICAgIGlmIChmaWxlLm1pbWV0eXBlID09PSAnaW1hZ2UvanBlZycgfHwgZmlsZS5taW1ldHlwZSA9PT0gJ2ltYWdlL3BuZycpIHtcbiAgICAgICAgY2IobnVsbCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYihuZXcgRXJyb3IoJ0ludmFsaWQgTWltZSBUeXBlLCBvbmx5IEpQRUcgYW5kIFBORycpLCBmYWxzZSk7XG4gICAgfVxufVxuXG52YXIgdXBsb2FkID0gbXVsdGVyKHtcbiAgICBzdG9yYWdlOiBtdWx0ZXJTMyh7XG4gICAgICAgIGZpbGVGaWx0ZXIsXG4gICAgICAgIHMzOiBzMyxcbiAgICAgICAgYnVja2V0OiBjb25maWcuYXBwLkFXU19CVUNLRVQsXG4gICAgICAgIG1ldGFkYXRhOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xuICAgICAgICAgICAgY2IobnVsbCwgeyBmaWVsZE5hbWU6ICdhYmhpX21ldGFfZGF0YScgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGtleTogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcbiAgICAgICAgICAgIGNiKG51bGwsIGZpbGUub3JpZ2luYWxuYW1lKVxuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gdXBsb2FkO1xuXG5cbiJdfQ==