'use strict';

module.exports = function (sequelize, DataTypes) {
  var SubChildCategory = sequelize.define('SubChildCategory', {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    subcategoryId: DataTypes.INTEGER
  }, {});

  SubChildCategory.associate = function (models) {
    // associations can be defined here
    models.SubChildCategory.belongsTo(models.category, {
      foreignKey: 'categoryId'
    });
    models.SubChildCategory.belongsTo(models.SubCategory, {
      foreignKey: 'subcategoryId'
    });
    models.SubChildCategory.hasMany(models.product, {
      foreignKey: 'childCategoryId'
    });
  };

  return SubChildCategory;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvc3ViY2hpbGRjYXRlZ29yeS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwiU3ViQ2hpbGRDYXRlZ29yeSIsImRlZmluZSIsIm5hbWUiLCJTVFJJTkciLCJjYXRlZ29yeUlkIiwiSU5URUdFUiIsInN1YmNhdGVnb3J5SWQiLCJhc3NvY2lhdGUiLCJtb2RlbHMiLCJiZWxvbmdzVG8iLCJjYXRlZ29yeSIsImZvcmVpZ25LZXkiLCJTdWJDYXRlZ29yeSIsImhhc01hbnkiLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQUNDLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUN6QyxNQUFNQyxnQkFBZ0IsR0FBR0YsU0FBUyxDQUFDRyxNQUFWLENBQWlCLGtCQUFqQixFQUFxQztBQUM1REMsSUFBQUEsSUFBSSxFQUFFSCxTQUFTLENBQUNJLE1BRDRDO0FBRTVEQyxJQUFBQSxVQUFVLEVBQUVMLFNBQVMsQ0FBQ00sT0FGc0M7QUFHNURDLElBQUFBLGFBQWEsRUFBRVAsU0FBUyxDQUFDTTtBQUhtQyxHQUFyQyxFQUl0QixFQUpzQixDQUF6Qjs7QUFLQUwsRUFBQUEsZ0JBQWdCLENBQUNPLFNBQWpCLEdBQTZCLFVBQVNDLE1BQVQsRUFBaUI7QUFDNUM7QUFDQUEsSUFBQUEsTUFBTSxDQUFDUixnQkFBUCxDQUF3QlMsU0FBeEIsQ0FBa0NELE1BQU0sQ0FBQ0UsUUFBekMsRUFBbUQ7QUFBRUMsTUFBQUEsVUFBVSxFQUFFO0FBQWQsS0FBbkQ7QUFDQUgsSUFBQUEsTUFBTSxDQUFDUixnQkFBUCxDQUF3QlMsU0FBeEIsQ0FBa0NELE1BQU0sQ0FBQ0ksV0FBekMsRUFBc0Q7QUFBRUQsTUFBQUEsVUFBVSxFQUFFO0FBQWQsS0FBdEQ7QUFDQUgsSUFBQUEsTUFBTSxDQUFDUixnQkFBUCxDQUF3QmEsT0FBeEIsQ0FBZ0NMLE1BQU0sQ0FBQ00sT0FBdkMsRUFBZ0Q7QUFBRUgsTUFBQUEsVUFBVSxFQUFFO0FBQWQsS0FBaEQ7QUFFRCxHQU5EOztBQU9BLFNBQU9YLGdCQUFQO0FBQ0QsQ0FkRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSA9PiB7XG4gIGNvbnN0IFN1YkNoaWxkQ2F0ZWdvcnkgPSBzZXF1ZWxpemUuZGVmaW5lKCdTdWJDaGlsZENhdGVnb3J5Jywge1xuICAgIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgY2F0ZWdvcnlJZDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgc3ViY2F0ZWdvcnlJZDogRGF0YVR5cGVzLklOVEVHRVJcbiAgfSwge30pO1xuICBTdWJDaGlsZENhdGVnb3J5LmFzc29jaWF0ZSA9IGZ1bmN0aW9uKG1vZGVscykge1xuICAgIC8vIGFzc29jaWF0aW9ucyBjYW4gYmUgZGVmaW5lZCBoZXJlXG4gICAgbW9kZWxzLlN1YkNoaWxkQ2F0ZWdvcnkuYmVsb25nc1RvKG1vZGVscy5jYXRlZ29yeSwgeyBmb3JlaWduS2V5OiAnY2F0ZWdvcnlJZCcgfSk7XG4gICAgbW9kZWxzLlN1YkNoaWxkQ2F0ZWdvcnkuYmVsb25nc1RvKG1vZGVscy5TdWJDYXRlZ29yeSwgeyBmb3JlaWduS2V5OiAnc3ViY2F0ZWdvcnlJZCcgfSk7XG4gICAgbW9kZWxzLlN1YkNoaWxkQ2F0ZWdvcnkuaGFzTWFueShtb2RlbHMucHJvZHVjdCwgeyBmb3JlaWduS2V5OiAnY2hpbGRDYXRlZ29yeUlkJyB9KTtcblxuICB9O1xuICByZXR1cm4gU3ViQ2hpbGRDYXRlZ29yeTtcbn07Il19