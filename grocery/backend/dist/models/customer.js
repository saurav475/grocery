'use strict';

module.exports = function (sequelize, DataTypes) {
  var customer = sequelize.define('customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userid: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});

  customer.associate = function (models) {
    // associations can be defined here
    models.customer.hasMany(models.Address, {
      foreignKey: 'custId'
    });
    models.customer.hasMany(models.payment, {
      foreignKey: 'custId'
    });
  };

  return customer;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIkRhdGFUeXBlcyIsImN1c3RvbWVyIiwiZGVmaW5lIiwiZmlyc3ROYW1lIiwiU1RSSU5HIiwibGFzdE5hbWUiLCJwaG9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyaWQiLCJnZW5kZXIiLCJhc3NvY2lhdGUiLCJtb2RlbHMiLCJoYXNNYW55IiwiQWRkcmVzcyIsImZvcmVpZ25LZXkiLCJwYXltZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQUNDLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUN6QyxNQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQixVQUFqQixFQUE2QjtBQUM1Q0MsSUFBQUEsU0FBUyxFQUFFSCxTQUFTLENBQUNJLE1BRHVCO0FBRTVDQyxJQUFBQSxRQUFRLEVBQUVMLFNBQVMsQ0FBQ0ksTUFGd0I7QUFHNUNFLElBQUFBLEtBQUssRUFBRU4sU0FBUyxDQUFDSSxNQUgyQjtBQUk1Q0csSUFBQUEsS0FBSyxFQUFFUCxTQUFTLENBQUNJLE1BSjJCO0FBSzVDSSxJQUFBQSxRQUFRLEVBQUVSLFNBQVMsQ0FBQ0ksTUFMd0I7QUFNNUNLLElBQUFBLE1BQU0sRUFBRVQsU0FBUyxDQUFDSSxNQU4wQjtBQU81Q00sSUFBQUEsTUFBTSxFQUFFVixTQUFTLENBQUNJO0FBUDBCLEdBQTdCLEVBUWQsRUFSYyxDQUFqQjs7QUFTQUgsRUFBQUEsUUFBUSxDQUFDVSxTQUFULEdBQXFCLFVBQVNDLE1BQVQsRUFBaUI7QUFDcEM7QUFDQUEsSUFBQUEsTUFBTSxDQUFDWCxRQUFQLENBQWdCWSxPQUFoQixDQUF3QkQsTUFBTSxDQUFDRSxPQUEvQixFQUF3QztBQUFFQyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLQUF4QztBQUNBSCxJQUFBQSxNQUFNLENBQUNYLFFBQVAsQ0FBZ0JZLE9BQWhCLENBQXdCRCxNQUFNLENBQUNJLE9BQS9CLEVBQXdDO0FBQUVELE1BQUFBLFVBQVUsRUFBRTtBQUFkLEtBQXhDO0FBRUQsR0FMRDs7QUFNQSxTQUFPZCxRQUFQO0FBQ0QsQ0FqQkQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIERhdGFUeXBlcykgPT4ge1xuICBjb25zdCBjdXN0b21lciA9IHNlcXVlbGl6ZS5kZWZpbmUoJ2N1c3RvbWVyJywge1xuICAgIGZpcnN0TmFtZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBsYXN0TmFtZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBwaG9uZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBlbWFpbDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBwYXNzd29yZDogRGF0YVR5cGVzLlNUUklORyxcbiAgICB1c2VyaWQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgZ2VuZGVyOiBEYXRhVHlwZXMuU1RSSU5HXG4gIH0sIHt9KTtcbiAgY3VzdG9tZXIuYXNzb2NpYXRlID0gZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgLy8gYXNzb2NpYXRpb25zIGNhbiBiZSBkZWZpbmVkIGhlcmVcbiAgICBtb2RlbHMuY3VzdG9tZXIuaGFzTWFueShtb2RlbHMuQWRkcmVzcywgeyBmb3JlaWduS2V5OiAnY3VzdElkJyB9KTsgIFxuICAgIG1vZGVscy5jdXN0b21lci5oYXNNYW55KG1vZGVscy5wYXltZW50LCB7IGZvcmVpZ25LZXk6ICdjdXN0SWQnIH0pOyAgXG5cbiAgfTtcbiAgcmV0dXJuIGN1c3RvbWVyO1xufTsiXX0=