'use strict';

module.exports = function (sequelize, DataTypes) {
  var location = sequelize.define('location', {
    name: DataTypes.STRING,
    status: DataTypes.INTEGER,
    zipcode: DataTypes.INTEGER
  }, {});

  location.associate = function (models) {
    // associations can be defined here
    models.location.hasMany(models.area, {
      foreignKey: 'locationId'
    });
  };

  return location;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvbG9jYXRpb24uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIkRhdGFUeXBlcyIsImxvY2F0aW9uIiwiZGVmaW5lIiwibmFtZSIsIlNUUklORyIsInN0YXR1cyIsIklOVEVHRVIiLCJ6aXBjb2RlIiwiYXNzb2NpYXRlIiwibW9kZWxzIiwiaGFzTWFueSIsImFyZWEiLCJmb3JlaWduS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQUNDLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUN6QyxNQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQixVQUFqQixFQUE2QjtBQUM1Q0MsSUFBQUEsSUFBSSxFQUFFSCxTQUFTLENBQUNJLE1BRDRCO0FBRTVDQyxJQUFBQSxNQUFNLEVBQUVMLFNBQVMsQ0FBQ00sT0FGMEI7QUFHNUNDLElBQUFBLE9BQU8sRUFBRVAsU0FBUyxDQUFDTTtBQUh5QixHQUE3QixFQUtkLEVBTGMsQ0FBakI7O0FBTUFMLEVBQUFBLFFBQVEsQ0FBQ08sU0FBVCxHQUFxQixVQUFTQyxNQUFULEVBQWlCO0FBQ3BDO0FBQ0FBLElBQUFBLE1BQU0sQ0FBQ1IsUUFBUCxDQUFnQlMsT0FBaEIsQ0FBd0JELE1BQU0sQ0FBQ0UsSUFBL0IsRUFBcUM7QUFBRUMsTUFBQUEsVUFBVSxFQUFFO0FBQWQsS0FBckM7QUFFRCxHQUpEOztBQUtBLFNBQU9YLFFBQVA7QUFDRCxDQWJEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBEYXRhVHlwZXMpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSBzZXF1ZWxpemUuZGVmaW5lKCdsb2NhdGlvbicsIHtcbiAgICBuYW1lOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHN0YXR1czogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgemlwY29kZTogRGF0YVR5cGVzLklOVEVHRVJcblxuICB9LCB7fSk7XG4gIGxvY2F0aW9uLmFzc29jaWF0ZSA9IGZ1bmN0aW9uKG1vZGVscykge1xuICAgIC8vIGFzc29jaWF0aW9ucyBjYW4gYmUgZGVmaW5lZCBoZXJlXG4gICAgbW9kZWxzLmxvY2F0aW9uLmhhc01hbnkobW9kZWxzLmFyZWEsIHsgZm9yZWlnbktleTogJ2xvY2F0aW9uSWQnIH0pO1xuXG4gIH07XG4gIHJldHVybiBsb2NhdGlvbjtcbn07Il19